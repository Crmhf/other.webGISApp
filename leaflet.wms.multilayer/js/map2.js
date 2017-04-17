/**
 * Created by ChiRong on 2016/6/22.
 */

// 地图可视化初始页面


( function(){
    var map = new L.Map('map-container', {
        // 加载地图图层
        // layers: [wms],
        crs: L.CRS.EPSG4326,
        continuousWorld: true, //
        worldCopyJump: false //
    });

    // var bounds = L.latLngBounds(maxbounds);
    // map.fitBounds(bounds);
    map.setView([26.787, 112.41046], 10);

    var wmsUrl= 'http://192.168.227.106:8080/share-exchange/KTWService/wms';
    // Okay (implicit source)

   var worker=new Worker("js/map2.js");
    worker.onmessage =function(obj) {
        var service011025 = L.WMS.overlay(wmsUrl, {
            layers : '64fe00b9:1025service01',
            styles : 'style2',
            'transparent': true,
            'format': 'image/png',
            'zindex':1
        }).addTo(map);
        var service01 = L.WMS.overlay(wmsUrl, {
            layers : '64fe00b9:service01',
            styles : 'style1',
            'zindex':2
        }).addTo(map);
        var xzqXian1 = L.WMS.overlay(wmsUrl, {
            layers : '64fe00b9:xzqXian1',
            styles : 'style2',
            'zindex':3
        }).addTo(map);

        var service0110251 = L.WMS.overlay(wmsUrl, {
            layers : '64fe00b9:1025service01',
            styles : 'style2',
            'transparent': true,
            'format': 'image/png',
            'zindex':4
        }).addTo(map);
        var service011 = L.WMS.overlay(wmsUrl, {
            layers : '64fe00b9:service01',
            styles : 'style1',
            'zindex':5
        }).addTo(map);
        var xzqXian11 = L.WMS.overlay(wmsUrl, {
            layers : '64fe00b9:xzqXian1',
            styles : 'style2',
            'zindex':6
        }).addTo(map);
    };



    var baseLayers = {

    };
    /*
    var overlays = {
        "service011025": service011025,
        "service01": service01,
        "xzqXian1": xzqXian1,
        "service0110251": service0110251,
        "service011": service011,
        "xzqXian11": xzqXian11

    };
    L.control.layers(baseLayers, overlays,{collapsed:false}).addTo(map);*/
})()