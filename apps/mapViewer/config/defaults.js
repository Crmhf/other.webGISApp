/**
 * Created by ChiRong on 2016/6/22.
 */

// 设定地图查看器的默认信息
var defaults;
(function(){
    defaults = {
        "appid": "",
        "webmap": "9d98f7113f9b469c8c302b210db7b922", // "0eece0d5de2140e9a44d8050f943fd18", "de5ae0c2040c49d38e9ea0637454ac73"
        "oauthappid": null, //"AFTKRmv16wj14N3z",
        "title": "",
        "subtitle":"",
        "description":"",
        "owner": "",
        "geocoder": true,
        //group: "",
        //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
        "proxyurl": "",
        //Example of a template specific property. If your template had several color schemes
        //you could define the default here and setup configuration settings to allow users to choose a different
        "theme": "chrome", //color theme.
        "bingmapskey": ""
    };
    return defaults;
}());