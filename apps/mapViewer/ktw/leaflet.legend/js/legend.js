L.Control.Legend = L.Control.extend({
    options: {
        position: 'bottomright' //初始位置

    },
    initialize: function (options) {
        L.Util.extend(this.options, options);

    },
    onAdd: function (map) {
        //创建一个class为leaflet-control-clegend的div
        this._container = L.DomUtil.create('div', 'leaflet-control-clegend');
        //创建一个图片要素
        var legendimg = document.createElement('img');
        legendimg.id = 'leaflet-control-clegend';
        legendimg.type = 'img';
        legendimg.src = "img/temp/legend.png";
        this._legendimg = legendimg;
        //创建一个关闭控件的按钮
        var closebutton = document.createElement('a');
        closebutton.id = 'leaflet-control-geosearch-close';
        closebutton.className = 'fa fa-remove';
        this._closebutton = closebutton;

        this._container.appendChild(this._closebutton);
        this._container.appendChild(this._legendimg);
        //注册关闭事件
        L.DomEvent.addListener(this._closebutton, 'click', this._onCloseControl, this);

        return this._container;
    },
    _onCloseControl: function () {
        this._map.options.Legend = false;
        this.removeFrom(this._map);

    },
});

L.control.legend = function(options) {
    return new L.Control.Legend(options);
};