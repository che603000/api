/**
 * Created by Александр on 04.12.2015.
 */
"use strict";

import Err404 from '../components/content/err404'

module.exports = function (url, params, options) {
    this.setActiveContent(Err404, {status: 404, message:'страница не найдена'});
};