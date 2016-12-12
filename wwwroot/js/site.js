// Write your Javascript code.
var config = {
    host: 'qlik.buildinglink.com',
    prefix: '/',
    port: 443,
    isSecure: true
};
require.config({
    baseUrl: (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
});
var qlikApps = [];
require(["js/qlik"], function (qlik) {
    qlik.setOnError(function (error) {
        alert(error.message);
    });
    function attach(elem) {
        var appid = elem.dataset.qlikAppid;
        var objid = elem.dataset.qlikObjid;
        var app = qlikApps[appid];
        if (!app) {
            app = qlik.openApp(appid, config);
            qlikApps[appid] = app;
        }
        app.getObject(elem, objid);
    }
    var elems = document.getElementsByClassName('qlik-embed');
    var ix = 0;
    for (; ix < elems.length; ++ix) {
        attach(elems[ix]);
    }
});
