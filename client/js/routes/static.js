/*
 * Created by Александр on 04.12.2015.
 */

"use strict";

import AjaxContent from '../components/content/ajax';

module.exports = function (url, params, options) {
    this.setActiveContent(AjaxContent, {url: url, params: params, options: options});
};