/**
 * Created by alex on 03.12.2015.
 */
"use strict";
var _ = require('underscore');

var g = {
    jQuery: require('jquery'),
    FastClick: require('fastclick'),
    Pace: require('pace')
}

_.extend(window, g);

require('bootstrap');
//require('imports?this=>global!./libs/nifty.min.js');

