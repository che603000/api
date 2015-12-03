/**
 * Created by alex on 01.12.2015.
 */

"use strict";


import Backbone from 'backbone';
//import Main from './components/content/main'


var Workspace = Backbone.Router.extend({
    initialize(){

        Backbone.history.on('route', this.onHistory, this);
    },
    onHistory(router, route, params){
        ReactDOM.unmountComponentAtNode(document.getElementById('content-container'));


        var h = Backbone.history.fragment,
            path = './components/content/' + h ;


        var cmp = require(path);
        ReactDOM.render(
            React.createElement(cmp),
            document.getElementById('content-container')
        );

    },
    routes: {
        "main": "render",
        "structure": "render",      // #structure
        "search": "render",  // #search/kiwis
        ":a" : "render",
        ":a/:b" : "render",
        ":a/:b/:c" : "render"
        //"search/:query/p:page": "search"   // #search/kiwis/p7
    },
    render(){
        //ReactDOM.unmountComponentAtNode(document.getElementById('content-container'));
        //var cmp = require('./components/content/' + Backbone.history.fragment || 'main');
        //ReactDOM.render(
        //    React.createElement(cmp),
        //    document.getElementById('content-container')
        //);
    },


});


new Workspace();
require('./components/menu');
setTimeout((()=>Backbone.history.start({root: "/wep-api/public/"})));
