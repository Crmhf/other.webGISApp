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

// 根据传入的参数生成二维码,生成一张可以供
$.createQrcode = function (url) {
    $("#qrcode").html("");
    $('#qrcode').qrcode({
        render:"canvas",
     //   width:64,
     //   height:64,
        text:url
    });
}


// 新增应用的信息
function addAppInfo(info){
    var info = 'info';

    // 获取服务地址
    var requestURL = commonConfig.app.add;
    /*var data = {
     id:"402881f2560308af0156034fce600002",
     resourceid:id,
     info:jQuery.parseJSON('{x:111}')
     };*/
    // 提交的数据一定要先格式化
    var appName = 'xxxx';
        // $('#appName').val();
    var appDesc = 'yyyy';
        // $('#appDesc').val();
    var x = uuid();

   // var data = JSON.stringify({ id: appExId, resourceid: appid, info: info});

    var info = $("#storyMapInfoTextAdd").val();

    var typeid = '5',
        url = 'www.baidu.com',
        sourceuri = url,
        thumburi = 'http://192.168.1.75:80/upload/images/2016-09-29/1475120779633.jpg',
        createrid = '5eecfbd9-8adf-6d33-896d-00986ea59597',
        catalogid = '4028817457b1336c0157b247974f0008',
        author = '衡阳管理员用户',
        version = '1.0',
        owner = '2';

    var dataAddPost = JSON.stringify({
        "resource": {
            "name": appName,
            "typeid": typeid,
            "thumburi": thumburi,
            "url": url, // 服务访问地址，后端自动生成
            "sourceuri": sourceuri,  // 资源的实际地址
            //  "publishid": $scope.myApp.userid, // 引用和共享的时候用
            "createrid": createrid,
            //"updaterid": null,// 更新者id
            "catalogid": catalogid, // 目录id
            "servicestatus": 0, // 服务状态,默认未发布成服务，现在没有发布成服务的功能；
            "regstatus": 0,  // 注册状态，现在默认为未注册
            "downloadtimes": 0, // 下载次数
            "visittimes": 0, // 访问次数
            "tag": "", // 资源表中的tag
            "author": author, // 作者，默认读取的是登录的用户名称
            "version": version, // 默认的工具版本
            // "storesize": 30, // 资源大小
            "grade": 5.0, // 默认评分
            "owner": owner,
            "description": appDesc
        },
        "resourceExtend":{
            "id": x,
            "info":info,
            "data":"data1111"

        },
        "tagid": "402867c0580b0fda01580f9b139f0040,402867c0580b0fda01580f9b3ca10041"
    });

    $.ajax({
        type: "POST",
        url: requestURL,
        async: false,
        data: dataAddPost,
        cache: false,
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (result) {
            alert('应用新增完毕！');
            //  location.reload();
        },
        error: function (a, b, c) {
            // showerror();
            alert('应用添加失败');
        }
    });
}

// 修改应用的信息
function editAppInfo(info){
    // 获取服务地址
    var requestURL = commonConfig.app.update;
    /*var data = {
     id:"402881f2560308af0156034fce600002",
     resourceid:id,
     info:jQuery.parseJSON('{x:111}')
     };*/
    // ? 调整加入其中的应用信息 20161103

    // 提交的数据一定要先格式化
    var data = JSON.stringify({ id: appExId, resourceid: appid, info: info});
    $.ajax({
        type: "POST",
        url: requestURL,
        async: false,
        data: data,
        cache: false,
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (result) {
            alert('应用更新完毕！');
            location.reload();
        },
        error: function (a, b, c) {
            alert('修改应用失败');
        }
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

