/**
 * Created by alex on 10.12.2015.
 */

var httpntlm = require('httpntlm');

var s = encodeURIComponent("ла"),
    url = "http://webserver/portal/UserCatalog/Handler.ashx?text=" + s + "&count=40";

httpntlm.get({
    url: url,
    username: '',
    password: '',
    //workstation: 'wsp100048',
    //domain: 'api'
}, function (err, res) {
    if (err) return err;
    var data = eval(res.body);
    console.log(res.headers);
    console.log(res.body);
});