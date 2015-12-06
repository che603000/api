/**
 * Created by alex on 01.12.2015.
 */

"use strict";


import Backbone from 'backbone'

const options = [
    {
        type: "Item",
        props: {
            name: "Главная",
            icon: "star",
            url: "#main"
        },

        test: "",
        module: 'main'
    }
];


var Router = Backbone.Router.extend({
    pathRouters: "./routes/",
    routes: {},
    initialize(options) {
        this.options = options;
        this.createRoutes();
        //require('./components/menu');
        //require('./components/content');
        console.log(this.routes);
        setTimeout((()=>Backbone.history.start({root: "/wep-api/public/"})));
    },

    createRoutes(path) {
        this.options.forEach(opt=> {
            this.routes[opt.test] = require(this.pathRouters + opt.module);
        }, this);
    }
});

new Router(options);
