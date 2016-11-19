/**
 * Created by Crmhf on 2016/11/3.
 */
function initMap(){

    map = new L.Map('map-container', {
        // 加载地图图层
        // layers: [grayscale],
        crs: L.CRS.EPSG4326,
        continuousWorld: true, //
        worldCopyJump: false //
    });

   // map.setView([51.505, -0.09], 13);

    // 根据获取到的服务
    var x = getMapZoom();
    map.setView([x.lat, x.lng], x.zoom);

    // 配置底图的参数

    /*
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);*/

    // 获取到图层服务的信息
    var y = getMapLayer();
    // 读取到地图组中的服务,并叠加到地图上
    for(i=0;i< y.length;i++){
        var layerInfo = y[i];
        addWMSLayer(layerInfo.url,layerInfo.layers,layerInfo.zindex);
    }


    var str= '';
    for(var i=0; i<y.length; i++) {
        /*
        str += '<li id="c168" class="data-layer layer-show">';
        str += '<div class="layer-title limit-text">';
        str += '   <div class="material-switch">';
        str += '     <input id="c168-chk-layer-toggle" class="chk-layer-toggle" type="checkbox" checked="">';
        str += '    <label for="c168-chk-layer-toggle" class="label-default"></label>';
        str += '    </div>';
        str += '   <div class="title-wrapper">';
        str += '    <span class="limit-text">'+  y[i].name +'</span>';
        str += '   <input class="title-editor form-control" type="text" value=' +  y[i].name + '>';
        str += '    </div>';
        str += '    </div>';
        str += '    <span class="layer-tools pull-right">';
        str += '    <i class="btn-layer-up fa fa-arrow-up" title="上移"></i>';
        str += '    <i class="btn-layer-down fa fa-arrow-down" title="下移"></i>';
        str += '    <i class="btn-zoom-to fa fa-sign-in" title="缩放到数据范围" onclick="fitBounds('+  y[i].bounds  +')"></i>';
        str += '    <i id="c168" class="btn-remove fa fa-trash-o" title="删除" onclick="removeLayer('+  y[i].name  +')"></i>';
        str += '    </span>';
        str += '</li>';*/
        str += '<li class="data-layer layer-show">';
        str += '<div class="layer-title limit-text">';
        str += '   <div class="material-switch">';
        str += '     <input class="chk-layer-toggle" type="checkbox" checked="">';
        str += '    <label class="label-default"></label>';
        str += '    </div>';
        str += '   <div class="title-wrapper">';
        str += '    <span class="limit-text">'+  y[i].name +'</span>';
        str += '   <input class="title-editor form-control" type="text" value=' +  y[i].name + '>';
        str += '    </div>';
        str += '    </div>';
        str += '    <span class="layer-tools pull-right">';
        str += '    <i class="btn-layer-up fa fa-arrow-up" title="上移"></i>';
        str += '    <i class="btn-layer-down fa fa-arrow-down" title="下移"></i>';
        str += '    <i class="btn-zoom-to fa fa-sign-in" title="缩放到数据范围" onclick="fitBounds('+  y[i].bounds  +')"></i>';
        str += '    <i class="btn-remove fa fa-trash-o" title="删除" onclick="removeLayer('+  y[i].bounds  +')"></i>';
        str += '    </span>';
        str += '</li>';


    }
    $('#data-layer-list').html(str);


// 在地图上添加一些控件
//    L.control.iconLayers(layers,{position:"bottomright"}).addTo(map);
// 显示鼠标在地图上的位置
    L.control.mousePosition({position: "bottomright"}).addTo(map);
// 显示当前地图缩放级别
    L.control.zoomDisplay({position: "bottomright"}).addTo(map);
// 仅仅显示KM这样单位的比例尺
    L.control.scale({imperial:false}).addTo(map);

/*
    // 配置底图的参数
    var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib = '&copy;金拓维信息技术有限公司';
    var osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});

    var cities = new L.LayerGroup();
    L.marker([29, 111]).bindPopup('This is Littleton, CO.').addTo(cities),
        L.marker([27.6, 112]).bindPopup('This is Denver, CO.').addTo(cities),
        L.marker([29.5, 112]).bindPopup('This is Aurora, CO.').addTo(cities),
        L.marker([28.7, 111]).bindPopup('This is Golden, CO.').addTo(cities);
    L.marker([28.9, 111]).bindPopup('This is Golden, CO.').addTo(cities);

    // 备选加载的底图
    var mbAttr = '底图属性',
        mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
        streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});
    var base2 = L.tileLayer('http://{s}.tiles.mapbox.com/v3/monomoti.map-40nd7r4j/{z}/{x}/{y}.png',
        {
            attribution:'Map data'
        });

    var baseLayers = {

    };

    var mbAttr = '底图属性',
        mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
        streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});

    var overlays = {
        "cities": grayscale,
        'Bogotá': streets,
        "Cities": cities
    };
    L.control.orderlayers(baseLayers,overlays,{collapsed: false}).addTo(map); */


}
// CONTROL topright，越往下摆放，界面上越靠下显示
// 距离量测


function getMapZoom(){
    var mapCenterInfo;
    if(appInfo){
        var mapCenter = jQuery.parseJSON(appInfo.resourceExtend.info).center;
        mapCenterInfo = {
            lat:mapCenter.lat,
            lng:mapCenter.lng,
            zoom: mapCenter.zoom
        }
    }

    return mapCenterInfo;

    /*
     var mapCenter = map.getCenter();
     var mapZoom = map.getZoom();
     var lat = mapCenter.lat;
     var lng = mapCenter.lng;

     if(appInfo){
     var mapCenter = appInfo.resourceExtend.info.center;
     mapCenter.lat = lat;
     mapCenter.lng = lng;
     mapCenter.zoom = mapZoom;
     } */
}

// 获取到地图中配置的所有业务图层
function getMapLayer(){
    var mapLayers;
    if(appInfo){
        mapLayers = jQuery.parseJSON(appInfo.resourceExtend.info).layers.overlays;
    }
    return mapLayers;
}


// 依据不同的服务类型添加不同的地图服务
function addLayer(servicetype){
    switch (servicetype) {
        case 10:
            //
        case 12:
            addWMSLayer(wmsUrl,layers);
    }
}

// 添加WMS的服务图层
function addWMSLayer(wmsUrl,layers,zindex){
    var wmsUrl = wmsUrl;
    wms =  L.WMS.overlay(wmsUrl, {
        layers: layers,
        'zindex': zindex
        // style:

    });
    map.addLayer(wms);
}

// 缩放到当前所选的图层的范围
function fitBounds(bounds){
    if(map){
        // zoom the map to the rectangle bounds
        map.fitBounds(bounds);
    }
}

// 移除当前所选的图层
function removeLayer(name){
    // 如果map存在，从地图上移除该图层
    if(map){
        // 移除该图层的信息
alert(name);
        // 同时从业务图层中移除该节点信息
    }
}