/**
 * Created by alex on 01.12.2015.
 */

"use strict";

import './style'
import Menu from './components/menu';
import Content from './components/content';

const opt = require('./config.js');

var Workspace = Backbone.Router.extend({
    initialize(options){
        this.options = options;
        this.menus = options.menus;
        this.routes = options.routes;

        this.route("*err", "err404", ()=> {
        });
        this.createRoutes(this.routes);
        this.render();

        Backbone.history
            .on('route', this.onHistory, this)
            .start({root: "/wep-api/public/"});
        //debugger;
    },
    key: {},
    routes: {
        // "*page": "menu",
        //"": "render",
        //"main": "render",
        //"structure": "render",      // #structure
        //"search": "render",  // #search/kiwis

        //":a": "render",
        //":a/:b": "render",
        //":a/:b/:c": "render"
        //"search/:query/p:page": "search"   // #search/kiwis/p7
    },

    onHistory(router, route, params){
        //debugger;
        var options = this.key[route];
        var path = './routes/' + options.module;

        require(path).call(this, Backbone.history.fragment, params, options);
    },
    setActiveContent(name, options){
        this.content.setState({
            active: name,
            options: options || {}
        });
    },

    createRoutes(options){
        options.forEach(o=> {
            this.route(o.route, o.route, ()=> {
            });
            this.key[o.route] = o;
        });
    },

    render(){
        this.menu = this.renderMenu("main", this.menus);
        this.content = this.renderContent("main");
    },
    renderMenu(active, options){
        return ReactDOM.render(
            <Menu options={options} history={Backbone.history}/>,
            document.getElementById('mainnav-menu-wrap')
        );
    },
    renderContent(active){
        return ReactDOM.render(
            <Content active={active}/>,
            document.getElementById('content-container')
        );
    }

});

new Workspace(opt);

