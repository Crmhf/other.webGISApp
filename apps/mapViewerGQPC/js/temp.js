/**
 * Created by ChiRong on 2016/6/22.
 */

// 检测的代码
// 弹出框的代码
// 数据显示框架

// 请求到地图查看器的配置信息

// url上的信息解析
// 需要url.js文件

// 根据url里面的Key来对里面的值进行解析

// 解析到信息之后

// 请求系统中的服务
// 需要系统内部的服务解析函数

// 判断获取URL里面信息，如果没信息，就根据其中获取到信息来填充其中的参数

// 根据服务里面的信息加载地图服务
// 地图构建信息

// 根据传入的参数生成二维码

$.createQrcode = function (url) {
    $("#qrcode").html("");
    $('#qrcode').qrcode({
        render:"canvas",
     //   width:64,
     //   height:64,
        text:url
    });
}


var mapItem = {
    defaults: {
        crs: L.CRS.EPSG4326, // 默认地图中心位置
        continuousWorld: false, // 超过全球范围是否重复，默认false
        noWarp:false, // 是否在超出范围加载数据
        zoomControlPosition: 'bottomright', // 默认的地图操作工具栏位置
        tileLayerOptions: {
            opacity: 1,
            detectRetina: false, // 不采用高清形式来显示
            reuseTiles: true
        }
    },
    scrollWheelZoom: true,
    center: {
        /* lat: 26.78,
         lng: 112.4,
         zoom: 8*/
    },
    markers: {
        m1: {
            lat: 52.52,
            lng: 13.40
        }
    },
    // 设置图例
    legend: {

         colors : ['#ff0000', '#28c9ff', '#0000ff', '#ecf386'],
         labels : ['图例一', '图例二', '图例三', '图例四']
     },
    controls: {
        scale: {position: "bottomright"},
        draw: {position: "topright"},
        custom:[
         //   L.Control.measureControl({position: "topright"}),
            //  L.control.social({default_text: "Guess where I am",position: "bottomright"}),
            //  L.control.zoomDisplay({position: "topright"}),
            //  L.control.Home({position: "topright"}),
            //  L.control.more({position: "topright"}),
         //   L.control.easyPrint({position: "topright"})

        ]
    },
    layers: {
        baselayers : {
            //basemap:$scope.basemapLayers.basemap
        },
        overlays : {
            wms : {
                name : 'EEUU States (WMS)',
                type : 'wms',
                visible : true,
                url : 'http://192.168.1.50:7777/geoserver/topp/wms?service=WMS',
                layerParams : {
                    layers : 'topp:states',
                    format : 'image/png',
                    transparent : true
                }
            }
        }
    }
};
