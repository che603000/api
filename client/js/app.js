/**
 * Created by alex on 01.12.2015.
 */

"use strict";

//require('./router');
//import '../../bower_components/bootstrap/dist/css/bootstrap-theme.min.css';
import '../../bower_components/bootstrap/dist/css/bootstrap.min.css'
import "../css/nifty.min.css"
import "../css/font-awesome.min.css"
import "../css/pace.min.css"


import Backbone from 'backbone';
import Menu from './components/menu';
import Content from './components/content';

const options = [
    {
        type: "Item",
        props: {
            name: "Главная",
            icon: "star",
            url: "#main",
        }
    },
    {
        type: "Header",
        props: {
            name: "Компания"
        }
    },
    {
        type: "Item",
        props: {
            name: "Поиск сотрудника",
            icon: "search",
            url: "#search",
        }

    },
    {
        type: "Item",
        props: {
            name: "Структура АПИ",
            icon: "list",
            url: "#structure"
        }
    },
    {
        type: "Header",
        props: {
            name: "Приложения"
        }
    },
    {
        type: "SubMenu",
        props: {
            name: "Сервисы АПИ",
            url: "#error"
        },
        subItems: [
            {
                type: "Item",
                props: {
                    name: "Бухгалтерия",
                    icon: "remove",
                    url: "#buh"
                }

            },
            {
                type: "SubItem",
                props: {
                    name: "Кадры",
                    icon: "remove",
                    url: "#buh"
                }

            }
        ]
    }
];

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
];

var Workspace = Backbone.Router.extend({
    initialize(options){
        this.options = options;
        //.map(o=>{
        //        o.regRoute  = this._routeToRegExp(o.route);
        //        return o;
        //    });
        this.createRoutes(this.options);
        this.render(this.options);

        Backbone.history
            .on('route', this.onRoute, this)
            .start({root: "/wep-api/public/"});
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
        this.route("*err", "err404", require('./routes/err404'));
        options.forEach(o=> {
            this.route(o.route, o.route, require('./routes/' + o.content.module).bind(this, o));
        });
    },

    render(options){
        this.menu = this.renderMenu("main", options);
        this.content = this.renderContent("main");
    },
    renderMenu(active, options){
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

