/**
 * Created by ChiRong on 2017/1/16.
 */
var ktw={};
ktw.Project = {
    InitProjectParam: function () {
        $.ajax({
            url: "3rd/coordinateSystem.json",
            dataType: 'json',
            type: 'GET',
            timeout: 2000,
            async: false,
            cache: false,
            success: function (json) {
                ktw.ProjectInfo = json;
            },
            error: function (json, e, s) {
                ktw.ProjectInfo = null
            }

        });
    },
    GetStrProject: function (id) {
        var project = Enumerable.From(ktw.ProjectInfo).Where('s=>s.id===' + parseInt(id)).ToArray();
        return project[0];
    },//获取投影字符串
    DefinedProject: function (id) {
        if (id === "4326" || id === "3857") return;
        var project = Enumerable.From(ktw.ProjectInfo).Where('s=>s.id===' + parseInt(id)).ToArray();
       // if (ktw.IsNull(project) || project.length === 0) return;
        //if (ktw.IsNull(ktw.proj.get("EPSG:" + project[0].id))) {
        proj4.defs("EPSG:" + project[0].id, project[0].strProject);
        //}
    },//定义投影
    GetUnitByEPSG: function (id) {
        var project = Enumerable.From(ktw.ProjectInfo).Where('s=>s.id===' + parseInt(id)).ToArray();
      //  if (ktw.IsNull(project) || project.length === 0) return 'degrees';
        if (project[0].type === 0) return 'degrees';
        else if (project[0].type === 1) return 'm';
    }
};



var map = new ol.Map({
        layers: [
            /*
            new ol.layer.Tile({
                source: new ol.source.OSM(),
                opacity: 0.7
            }) */
        ],
        target: 'map',
        view: new ol.View({
            center: [82, 37.5],
            zoom: 5
        })
    });
var url = 'http://192.168.1.60:8080/share-exchange/KTWService/wmts';

var layers = '33df8483:domTest01';
var style = 'default';
var bbox =[621979.9,3176979.9,623020.1,3178020.1];
    //[108.78612499986883, 24.639194999349797, 114.25651500026709, 30.128699999905166];


$.ajax({
    url: url + "?Request=GetCapabilities&t=" + new Date().getTime(),
    dataType: 'text',
    type: 'GET',
    timeout: 2000,
    async: false,
    cache: false,
    success: function (xml) {
        if (!xml) return;
        //获取服务元数据
        var result = new ol.format.WMTSCapabilities().read(xml);

        ktw.Project.InitProjectParam();
        ktw.Project.DefinedProject('4546');

        var option = ol.source.WMTS.optionsFromCapabilities(result,
            {
                layer: layers,
                matriSet: "EPSG:4546",
                projection: ol.proj.get("EPSG:4546"),
                style: style,
                format: 'image/png'
            });
        option.wrapX = false;
        var originpint = [(option.tileGrid.getOrigin(0)[0]), (option.tileGrid.getOrigin(0)[1])];


        var layer = new ol.layer.Tile({
            //id: args.id,
            opacity: 1.0,
            extent: bbox,// [112.435948, 26.873434, 112.564052, 26.959903],
            //zIndex: ktw.IsNull(args.zIndex) ? 0 : args.zIndex,
            source: new ol.source.WMTS(
                //option
                {
                    url: url,
                    //  layer: mapInfo.catalogSpace +":"+mapInfo.serviceName,
                    layer: layers,
                    matrixSet: "EPSG:4546",
                    VERSION: '1.0.0',
                    format: 'image/png',
                    projection: ol.proj.get("EPSG:4546"),
                    tileGrid: new ol.tilegrid.WMTS({
                        origin: originpint,//ol.extent.getTopLeft(args.extent),
                        resolutions: option.tileGrid.getResolutions(),
                        matrixIds: option.tileGrid.getMatrixIds()
                    }),
                    tileLoadFunction: function (imageTile, src) {
                        imageTile.getImage().src = src;
                    },
                    style: style,
                    wrapX: false
                }
            )
        });

        map.addLayer(layer);
        //判断数据空间参考是否与地图默认4490一致
        if ("EPSG:4490" !== option.projection.getCode() && option.projection.getCode()!="EPSG:4326") {
            var unit = ktw.Project.GetUnitByEPSG(option.projection.getCode().split(":")[1]);
            var projection = new ol.proj.Projection({
                code: option.projection.getCode(),
                units: unit,
                axisOrientation: 'neu'
            });
            map.setView(new ol.View({
                projection: projection,
                units: unit,
                axisOrientation: 'neu'
            }));
        }
        map.getView().fit(bbox, map.getSize());
    },
    error: function (e, o) {
        alert("获取元数据失败");
    }
});
