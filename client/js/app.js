/**
 * Created by alex on 01.12.2015.
 */

"use strict";


import './style'

import Menu from './components/menu';
import Content from './components/content';



const opt = [
    {
        route: "main",
        menu: {
            type: "Item",
            props: {
                name: "Главная",
                icon: "star",
                href: "#main",
            }
        },
        content: {
            module: "static",
            props: {}
        }
    },
    {
        route: "new",
        menu: {
            type: "Item",
            props: {
                name: "Новости",
                icon: "star",
                href: "#new",
            }
        },
        content: {
            module: "static",
            props: {}
        }
    },
    {
        route: "new/api/:index",
        menu: {
            type: "Item",
            props: {
                name: "Новости АПИ",
                icon: "star",
                href: "#new/api/0",
            }
        },
        content: {
            module: "static",
            props: {}
        }
    },
    {
        route: null,
        menu: {
            type: "Header",
            props: {
                name: "Приложения",
            }
        },
    },
    {
        route: "",
        menu: {
            type: "SubMenu",
            props: {
                name: "Сервисы",
                icon: "list",
            },

        },
        subItems:[
            {
                route: "main1",
                menu: {
                    type: "Item",
                    props: {
                        name: "Главная1",
                        icon: "remove",
                        href: "#main1",
                    }
                },
                content: {
                    module: "static",
                    props: {}
                }
            },
        ]
    },
];

var Workspace = Backbone.Router.extend({
    initialize(options){
        this.options = options;
        //.map(o=>{
        //        o.regRoute  = this._routeToRegExp(o.route);
        //        return o;
        //    });
        this.route("*err", "err404", require('./routes/err404'));
        this.createRoutes(this.options);
        this.render();

        Backbone.history.on('route', this.onRoute, this);
        //Backbone.history.once('route', this.render, this);
        Backbone.history.start({root: "/wep-api/public/"})
        //debugger;

    },
    onRoute(router, route, params){
        this.setActiveMenu(route);
    },
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

    setActiveMenu(name){
        this.menu.setState({active: name});
    },
    setActiveContent(name, options){
        this.content.setState({
            active: name,
            options: options || {}
        });
    },

    createRoutes(options){
        options.forEach(o=> {
            o.route && this.route(o.route, o.route, require('./routes/' + o.content.module).bind(this, o));

            if(o.subItems)
                this.createRoutes(o.subItems);
        });
    },

    render(){
        this.menu = this.renderMenu("main", this.options);
        this.content = this.renderContent("main");
    },
    renderMenu(active, options){
        console.log("rm");
        return ReactDOM.render(
            <Menu options={options} active={active}/>,
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

