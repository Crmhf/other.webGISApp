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

    var wmsUrl= 'http://192.168.1.27/share-exchange/KTWService/wms';
    // Okay (implicit source)

    var xzqxian = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:xzqxian',
        styles : 'xzqxian_style_fj',
        'transparent': true,
        'format': 'image/png',
        'zindex':1
        });
    var xzqxz = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:xzqxz',
        styles : 'zxqxz_style_fj',
        'zindex':2
    });
    var xzqcun = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:xzqcun',
        styles : 'xzqcun_style_fj',
        'zindex':3
    });
    var kvegpl = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:kvegpl',
        styles : 'kvegpl_style_fj',
        'zindex':4
    });
    var krespl = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:krespl',
        styles : 'krespl_style_fj',
        'zindex':5
    });
    var kroap = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:kroap',
        styles : 'kroapl_style_fj',
        'zindex':6
    });
    var krfcpl = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:krfcpl',
        styles : 'krfcpl_style_fj',
        'zindex':7
    });
    var ktfcpl = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:ktfcpl',
        styles : 'ktfcpl_style_fj',
        'zindex':8
    });
    var grespl = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:grespl',
        styles : 'grespl_style_fj',
        'zindex':9
    });
    var ghydpl = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:ghydpl',
        styles : 'ghydpl_style_fj',
        'zindex':10
    });
    var groapl = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:groapl',
        styles : 'groapl_style_fj',
        'zindex':11
    });
    var gvegpl = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:gvegpl',
        styles : 'gvegpl_style_fj',
        'zindex':12
    });
    var river = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:river',
        styles : 'river_style_fj',
        'zindex':13
    });
    var road = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:road',
        styles : 'road_style_fj',
        'zindex':14
    });
    var grailn = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:grailn',
        styles : 'grailn_style_fj',
        'zindex':15
    });
    var krailn = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:krailn',
        styles : 'krailn_style_fj',
        'zindex':16
    });
    var khfcln = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:khfcln',
        styles : 'khfcln_style_fj',
        'zindex':17
    });
    var krfcln = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:krfcln',
        styles : 'krfcln_style_fj',
        'zindex':18
    });
    var ktfcln = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:ktfcln',
        styles : 'ktfcln_style_fj',
        'zindex':19
    });
    var kroaln = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:kroaln',
        styles : 'kroaln_style_fj',
        'zindex':20
    });
    var kvegpt = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:kvegpt',
        styles : 'kvegpt_style_fj',
        'zindex':21
    });
    var buidaddrname = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:buidaddrname',
        styles : 'buildaddrnamestyle01',
        'zindex':22
    });
    var khill = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:khill',
        styles : 'khill_style_fj',
        'zindex':23
    });
    var regionname = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:regionname',
        styles : 'regionname_style_fj',
        'zindex':24
    });
    var zoneblocname = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:zoneblocname',
        styles : 'zoneblocname_style_fj',
        'zindex':25
    });
    var specobjename = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:specobjename',
        styles : 'specobjename_style_fj',
        'zindex':26
    });
    var interest = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:interest',
        styles : 'interest_style_fj',
        'zindex':27
    });

    var wmsURLWHY = 'http://192.168.1.110:8080/geoserver/cite/wms';
    var xzqcunx = L.WMS.overlay(wmsURLWHY, {
        layers : 'cite:xzqcunx-highgis',
        styles : '',
        'zindex':28
    });


    var baseLayers = {

    };
    var overlays = {
        "xzqxian": xzqxian,
        "xzqxz": xzqxz,
        "xzqcun": xzqcun,
        "kvegpl": kvegpl,
        "krespl": krespl,
        "kroap": kroap,
        "krfcpl": krfcpl,
        "ktfcpl": ktfcpl,
        "grespl": grespl,
        "ghydpl": ghydpl,
        "groapl": groapl,
        "gvegpl": gvegpl,
        "river": river,
        "road": road,
        "grailn": grailn,
        "krailn": krailn,
        "khfcln": khfcln,
        "krfcln": krfcln,
        "ktfcln": ktfcln,
        "kroaln": kroaln,
        "kvegpt": kvegpt,
        "buidaddrname": buidaddrname,
        "khill": khill,
        "regionname": regionname,
        "zoneblocname": zoneblocname,
        "specobjename": specobjename,
        "interest": interest,
        "xzqcunx":xzqcunx

    };
    L.control.layers(baseLayers, overlays,{collapsed:false}).addTo(map);
})()