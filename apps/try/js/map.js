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
        'format': 'image/png'
        });
    var xzqxz = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:xzqxz',
        styles : 'zxqxz_style_fj'
    });
    var xzqcun = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:xzqcun',
        styles : 'xzqcun_style_fj'
    });
    var kvegpl = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:kvegpl',
        styles : 'kvegpl_style_fj'
    });
    var krespl = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:krespl',
        styles : 'krespl_style_fj'
    });
    var kroap = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:kroap',
        styles : 'kroapl_style_fj'
    });
    var krfcpl = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:krfcpl',
        styles : 'krfcpl_style_fj'
    });
    var ktfcpl = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:ktfcpl',
        styles : 'ktfcpl_style_fj'
    });
    var grespl = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:grespl',
        styles : 'grespl_style_fj'
    });
    var ghydpl = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:ghydpl',
        styles : 'ghydpl_style_fj'
    });
    var groapl = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:groapl',
        styles : 'groapl_style_fj'
    });
    var gvegpl = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:gvegpl',
        styles : 'gvegpl_style_fj'
    });
    var river = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:river',
        styles : 'river_style_fj'
    });
    var road = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:road',
        styles : 'road_style_fj'
    });
    var grailn = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:grailn',
        styles : 'grailn_style_fj'
    });
    var krailn = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:krailn',
        styles : 'krailn_style_fj'
    });
    var khfcln = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:khfcln',
        styles : 'khfcln_style_fj'
    });
    var krfcln = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:krfcln',
        styles : 'krfcln_style_fj'
    });
    var ktfcln = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:ktfcln',
        styles : 'ktfcln_style_fj'
    });
    var kroaln = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:kroaln',
        styles : 'kroaln_style_fj'
    });
    var kvegpt = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:kvegpt',
        styles : 'kvegpt_style_fj'
    });
    var buidaddrname = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:buidaddrname',
        styles : 'buildaddrnamestyle01'
    });
    var khill = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:khill',
        styles : 'khill_style_fj'
    });
    var regionname = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:regionname',
        styles : 'regionname_style_fj'
    });
    var zoneblocname = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:zoneblocname',
        styles : 'zoneblocname_style_fj'
    });
    var specobjename = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:specobjename',
        styles : 'specobjename_style_fj'
    });
    var interest = L.WMS.overlay(wmsUrl, {
        layers : 'ffffffffbea2a14c:interest',
        styles : 'interest_style_fj'
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
        "interest": interest

    };
    L.control.layers(baseLayers, overlays).addTo(map);
})()