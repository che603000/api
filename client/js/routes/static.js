/**
 * Created by Александр on 04.12.2015.
 */
"use strict";

import Main from '../components/content/main'

module.exports = function (opt, index) {
    //debugger;
    console.log(Backbone.history, opt);
    this.setActiveContent(Main, opt);
};