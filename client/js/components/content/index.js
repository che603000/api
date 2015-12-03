/**
 * Created by alex on 02.12.2015.
 */
"use strict";

import Backbone from 'backbone';

Backbone.history.on('route', (router, route, params) => {
    ReactDOM.unmountComponentAtNode(document.getElementById('content-container'));

    var props, cmp,
        h = Backbone.history.fragment,
        path = './' + (h || 'err404');

    try {
        cmp = require(path);
    } catch (e) {
        cmp = require('./err');
        props = {
            message: e.message,
            stack: e.stack
        };
    }


    ReactDOM.render(
        React.createElement(cmp, props),
        document.getElementById('content-container')
    );

});

