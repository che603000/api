/*
 * Created by Александр on 04.12.2015.
 */

"use strict";

import Search from '../components/content/search';

module.exports = function (url, params, options) {
    this.setActiveContent(Search, {url: url, params: params, options: options});
};