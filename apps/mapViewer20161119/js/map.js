/**
 * Created by ChiRong on 2016/6/22.
 * 地图查看器的全局构建页面
 */

// 地图可视化初始页面


function initMap(){

    var wms='';
    // 看是否获取到了叠加地图的服务参数
  if(null!=mapInfo){
      var mapURL = mapInfo.serviceUrl;
      var layers = URL.get('layers',mapURL);
      // TODO 待提取URL中前面的一段
      var wmsUrl = URL.getHost(mapURL)
      wms =  L.tileLayer.wms(wmsUrl, {
          layers: layers,
          format: 'image/png',
          maxZoom: 14,
          minZoom: 0,
          continuousWorld: true,
          attribution: '加载内网中的WMS'
      });
  }

  /*  var mapURL = mapInfo.serviceUrl;

// 获取到地图的配置信息
    var layers = $.getUrlParam(mapURL,'layers');
    var wms =
        L.tileLayer.wms('http://192.168.1.104:8080/share-exchange/KTWService/wms', {
            layers: layers,
            format: 'image/png',
            maxZoom: 14,
            minZoom: 0,
            continuousWorld: true,
            attribution: 'Astun Data Service &copy; Ordnance Survey.',
            opacity: 0.5
        });*/

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





   /* var geojson = {"geometry": {"type": "LineString", "coordinates": [[26.773026722623153, 111.98131207805678], [26.0726203025917, 113.981459751363204]]}, "type": "Feature", "properties": {}, "id": null};
    var objectLayer = new L.GeoJSON(geojson, {
        style: {weight: 20, opacity: 1, clickable: false}
    });*/


// Map设定的情况
// 初始化地图配置信息
    map = new L.Map('map-container', {
        // 加载地图图层
        layers: [wms],
       // layers: [grayscale],
        crs: L.CRS.EPSG4326,
        continuousWorld: true, //
        worldCopyJump: false //
    });

/******
 * 杂七杂八的一堆初始化的数据信息
 * *******/

// 弹出的侧边栏，目前侧边栏放在右边
var left  = '<h1>Slide Menu (Left)</h1>';
    var right = '<h1>Slide Menu (Right)</h1>';
    var contents = '<hr>';
    contents += '<h2>Read Me</h2>';
    contents += '<p>A simple slide menu for Leaflet.<br>';
    contents += 'When you click the menu button and the menu is displayed to slide.<br>';
    contents += 'Please set the innerHTML to slide menu.</p>';
    contents += '<h3>Usage</h3>';
    contents += '<p>L.control.slideMenu("&lt;p&gt;test&lt;/p&gt;").addTo(map);</p>';
    contents += '<h3>Arguments</h3>';
    contents += '<p>L.control.slideMenu(&lt;String&gt;innerHTML, &lt;SlideMenu options&gt;options?)</p>';
    contents += '<h3>Options</h3>';
    contents += '<p>position<br>';
    contents += 'width<br>';
    contents += 'height<br>';
    contents += 'delay</p>';
    contents += '<h3>Methods</h3>';
    contents += '<p>setContents(&lt;String&gt;innerHTML)</p>';
    contents += '<h3>License</h3>';
    contents += '<p>MIT</p>';
    // 侧边栏菜单
    // left
    //L.control.slideMenu(left + contents).addTo(map);
    // right



// 图层显示
// 设定地图中使用到的一系列controls
// 放大缩小工具栏
// L.control.zoom({ zoomInTitle: '放大', zoomOutTitle: '缩小', position: 'topright' }).addTo(map);


// 初始化loading
// controlLoader = L.control.loader().addTo(map);
// controlLoader.show(); // 显示地图loading

// CONTROL对应工具栏，按照 topleft、bottomleft、topright、bottom等4个方位的顺寻来摆放
// 默认控件的位置都在
// CONTROL topleft

// 地图编辑控件
    var editableLayers = new L.FeatureGroup();
    map.addLayer(editableLayers);
    var MyCustomMarker = L.Icon.extend({
        options: {
            shadowUrl: null,
            iconAnchor: new L.Point(12, 12),
            iconSize: new L.Point(24, 24),
            iconUrl: 'img/icon/test.png'
        }
    });
    // 初始化样式编辑器
    var styleEditor = L.control.styleEditor({
        position: "topleft"
    });
    map.addControl(styleEditor);
    // 添加样式编辑器
    var options = {
        position: 'topleft',
        draw: {
            polyline: {
                shapeOptions: {
                    color: '#f357a1',
                    weight: 10
                }
            },
            polygon: {
                allowIntersection: false, // Restricts shapes to simple polygons
                drawError: {
                    color: '#e1e100', // Color the shape will turn when intersects
                    message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
                },
                shapeOptions: {
                    color: '#bada55'
                }
            },
            circle: false, // Turns off this drawing tool
            rectangle: {
                shapeOptions: {
                    clickable: false
                }
            },
            marker: {
                icon: new MyCustomMarker()
            }
        },
        edit: {
            featureGroup: editableLayers, //REQUIRED!!
            remove: false
        }
    };
    var drawControl = new L.Control.Draw(options);
    map.addControl(drawControl);
    map.on('draw:created', function (e) {
        var type = e.layerType,
            layer = e.layer;

        if (type === 'marker') {
            layer.bindPopup('弹出popup!');
        }

        editableLayers.addLayer(layer);
    });

// 地图打印
/*L.control.print({
    title: '地图打印',
    elementsToHide: 'p, h2, input, #tool-container' // 设定哪些元素地图打印的时候不显示
}).addTo(map);*/

// CONTROL bottomleft，越往下摆放，界面上越靠上显示
// 仅仅显示KM这样单位的比例尺
L.control.scale({imperial:false}).addTo(map);
// 图例控件，只支持图片形式
//L.control.legend({position: "bottomleft"}).addTo(map);

// CONTROL topright，越往下摆放，界面上越靠下显示
// 距离量测
L.control.measureControl({position: "topright"}).addTo(map);
// 右侧弹出面板
var slideMenu = L.control.slideMenu('', {position: 'topright', width: '250px', height: '100%'}).addTo(map);
slideMenu.setContents(right + contents);

// 下拉列表框的形式来查询geojson并定位
var geoOptions = {
    key: '3c38d15e76c02545181b07d3f8cfccf0',
    limit: 10
};
L.Control.openCageSearch(geoOptions).addTo(map);

// 到地图初始化的默认位置
L.control.defaultExtent({position:'topright'}).addTo(map);

// CONTROL bottomright，越往下摆放，界面上越靠上显示

// 已icon的形式选择底图
/*
    var layers = [];
for (var providerId in providers) {
    layers.push(providers[providerId]);
}
layers.push({
    layer: {
        onAdd: function() {},
        onRemove: function() {}
    },
    title: 'empty'
}) */


L.control.iconLayers(layers,{position:"bottomright"}).addTo(map);
// 显示鼠标在地图上的位置
L.control.mousePosition({position: "bottomright"}).addTo(map);
// 显示当前地图缩放级别
L.control.zoomDisplay({position: "bottomright"}).addTo(map);
// 显示命令控件
// L.control.command({position: "bottomright"}).addTo(map);
// 将地图分享到社交媒体上
// L.control.social({default_text: "Guess where I am",position: "bottomright"}).addTo(map);




// CONTROL 暂时已不使用的控件
//L.control.more({position: "topright"}).addTo(map);

// 地名查询
//L.control.geonames({
//    username: '',  // Geonames account username.  Must be provided
//    zoomLevel: null,  // Max zoom level to zoom to for location.  If null, will use the map's max zoom level.
//    maxresults: 5,  // Maximum number of results to display per search
//    className: 'fa fa-crosshairs',  // class for icon
//    workingClass: 'fa-spin',  // class for search underway
//    featureClasses: ['A', 'H', 'L', 'P', 'R', 'T', 'U', 'V'],  // feature classes to search against.  See: http://www.geonames.org/export/codes.html
//    baseQuery: 'isNameRequired=true',  // The core query sent to GeoNames, later combined with other parameters above
//    position: 'topleft',
//    markNames: true // show a marker at the location of each geoname found, with an associated popup which shows the name
//}).addTo(map);

    // 区域选择下拉框
    /*
    var select = L.control.countrySelect({exclude:"French Southern and Antarctic Lands"});
    select.addTo(map);
    select.on('change', function(e){
        if (e.feature === undefined){ //Do nothing on title
            return;
        }
        var country = L.geoJson(e.feature);
        if (this.previousCountry != null){
            map.removeLayer(this.previousCountry);
        }
        this.previousCountry = country;
        map.addLayer(country);
        map.fitBounds(country.getBounds());
    });*/

//    L.Control.Bookmarks().addTo(map); // bookmarks 有问题














    // 设定地图查看器的logo
    // L.control.logo().addTo(map);

  /* 临时测试在地图中增加圆、面
    //添加circle
    L.circle([27, 111], 5000, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
    }).addTo(map).bindPopup("I am a circle.");
    //添加polygon
    L.polygon([
        [27, 111],
        [28, 112],
        [29, 111.5],
        [28.5,113]
    ]).addTo(map).bindPopup("I am a polygon."); */

    var baseLayers = {
        "灰色风格": grayscale,
        "街道": streets,
        "osm": osm,
        "base2": base2
    };

    var bogota =  L.tileLayer.wms("http://mapas.catastrobogota.gov.co/arcgiswsh/Mapa_Referencia/Mapa_referencia/MapServer/WMSServer", {
        layers: '8,7,6,5,4,2',
        format: 'image/png',
        opacity: 0.45,
        transparent: true,
        attribution: 'Catastro Bogotá http://catastrobogota.gov.co',
        crs: L.CRS.EPSG4326,
        version: '1.3.0'
    });
    var fire = L.tileLayer('http://openfiremap.org/hytiles/{z}/{x}/{y}.png', {
        attribution: 'OpenStreetMap contributors',
        continuousWorld: true
    });

    var overlays = {
        "Cities": cities,
        "wms": wms,
        'Bogotá': bogota,
        'OpenFireMap': fire
      //  "obj": objectLayer
    };
    L.control.orderlayers(layers,overlays,{collapsed: false}).addTo(map);
  //  L.control.orderlayers(baseLayers,overlays, {collapsed: false}).addTo(map);
 //    L.control.layers(overlays, {collapsed: false, order: 'qgis'}).addTo(map);





// 使用的是mark
var points =[
    L.latLng(29.902538923668644,111.93895530700684),
    L.latLng(29.707178025105534,112.49422919750214)
];
(function(){
    var myIcon = L.icon({
        iconUrl:"img/icon/test.png",
        iconRetinaUrl:"img/icon/test@2x.png",
        iconSize:[48,61],
        iconAnchor:[24,61],
        //   shadowUrl:"./images/shadow-chitei_sweat.png",
        //  shadowRetinaUrl:"./images/shadow-chitei_sweat-2x.png",
        shadowSize:[79.61],
        shadowAnchor:[10,61]
    });
    for (var i=0; i < points.length; i++){
        L.marker(points[i],{icon:myIcon}).addTo(map);
    }
})();




    // 加入分级统计数据,数据的来源还是在GeoJSON中的
    // 数据的大概位置在 -75,39
    $.getJSON('data/crimes_by_district.geojson', function (geojson) {
        L.choropleth(geojson, {
            valueProperty: 'incidents', // which property in the features to use
            scale: ['white','orange', 'red'], // chroma.js scale - include as many as you like
            steps: 5, // number of breaks or steps in range
            mode: 'q', // q for quantile, e for equidistant, k for k-means
            style: {
                color: '#fff', // border color
                weight: 2,
                fillOpacity: 0.8
            },
            onEachFeature: function (feature, layer) {
                layer.bindPopup('District ' + feature.properties.dist_num + '<br>' + feature.properties.incidents.toLocaleString() + ' incidents')
            }
        }).addTo(map)
    })

    // 添加聚合点数据
    /*
    * 0822测试暂时注释
    */
   /* var markers = L.markerClusterGroup({
        spiderfyOnMaxZoom: false,
        showCoverageOnHover: false
        // ,zoomToBoundsOnClick: false
    });
    for (var i = 0; i < addressPoints.length; i++) {
        var a = addressPoints[i];
        var title = a[2];
        var marker = L.marker(new L.LatLng(a[0], a[1]), { title: title });
        marker.bindPopup(title);
        markers.addLayer(marker);
    }
    map.addLayer(markers);*/

  /* // 添加geojson的数据
    var pgnStyle = {
        color:"#ff8c00",
        weight:1,
        opacity:1,
        fill:true,
        fillColor:"#556b2f",
        fillOpacity:0.8,
        dashArray:[5, 5],
    };
    var pgnOnStyle = {
        color:"#ff0000",
        weight:2,
        opacity:1,
        fill:true,
        fillColor:"#ffff2f",
        fillOpacity:0.8,
        dashArray:[20, 10],
    };
    //
    L.geoJson('data/parks.geojson',{
        style:pgnStyle
    }).addTo(map);*/


    map.setView([27.393, 111.310], 8);

// 设置属性的prefix
// 提取到配置项中
map.attributionControl.setPrefix('<a href="#">KTW</a>');

// 加入搜索自动完成框
var options = {
    geojsonServiceAddress: "data/testgeojsondata.json"
};
$("#searchContainer").GeoJsonAutocomplete(options);

// 缩放到某个范围
// map.fitBounds([[24.9300000311,-19.6],[46.0700000311,5.6]])

// controlLoader.hide(); // 地图加载完毕后隐藏 loading

}

function getMapZoom(){
    var mapCenterInfo;
    if(appInfo){
        var mapCenter = appInfo.resourceExtend.info.center;
        mapCenterInfo.lat = mapCenter.lat;
        mapCenterInfo.lng = mapCenter.lng;
        mapCenterInfo.zoom = mapCenter.zoom;
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