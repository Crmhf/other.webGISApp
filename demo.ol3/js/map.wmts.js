/**
 * Created by ChiRong on 2017/1/16.
 */
var map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
            opacity: 0.7
        })
    ],
    target: 'map',
    view: new ol.View({
        center: [19412406.33, -5050500.21],
        zoom: 5
    })
});
var url = 'https://openlayers.org/en/v3.20.1/examples/data/WMTSCapabilities.xml';

$.ajax({
    url: url,
    dataType: 'text',
    type: 'GET',
    timeout: 2000,
    async: false,
    cache: false,
    success: function (xml) {
        if (!xml) return;
        //获取服务元数据
        var result = new ol.format.WMTSCapabilities().read(xml);

        var options = ol.source.WMTS.optionsFromCapabilities(result,
            {layer: 'layer-7328', matrixSet: 'EPSG:3857'});

        var layer = new ol.layer.Tile({
            opacity: 1,
            source: new ol.source.WMTS(options)
        });

        map.addLayer(layer);

    },
    error: function (e, o) {
        alert("获取元数据失败");
    }
});
