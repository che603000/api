/**
 * Created by alex on 01.12.2015.
 */

"use strict";


import Backbone from 'backbone';
var Router = require('react-router-component');
var Locations = Router.Locations
var Location = Router.Location

var Locations = React.createFactory(Router.Locations)
var Location = React.createFactory(Router.Location)


var App = React.createClass({

    render: function () {
        return (
            <Locations>
                <Location path="/" handler={MainPage}/>
                <Location path="/users/:username" handler={UserPage}/>
                <Location path={/\/friends\/(\d+)\/(photos|wall)/} handler={FriendsPage}
                          matchKeys={['id', 'pageName']}/>
            </Locations>
        )
    }
});
ReactDOM.render(
    <App/>,
    document.getElementById('container')
);

var Workspace = Backbone.Router.extend({
    initialize(){
        require('./components/menu');
        require('./components/content');
        setTimeout((()=>Backbone.history.start({root: "/wep-api/public/"})));
    },
    routes: {
        "": "render",
        "main": "render",
        "structure": "render",      // #structure
        "search": "render",  // #search/kiwis
        ":a": "render",
        ":a/:b": "render",
        ":a/:b/:c": "render"
        //"search/:query/p:page": "search"   // #search/kiwis/p7
    },


});


//new Workspace();

