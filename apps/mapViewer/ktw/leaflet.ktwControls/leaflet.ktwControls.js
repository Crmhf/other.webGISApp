/**
 * Created by ChiRong on 2016/4/26.
 */


// 更多的
L.Control.MoreControls = L.Control.extend({
    options: {
        position: 'topleft'
    },

    onAdd: function (map) {
        var container = L.DomUtil.create('div', ''),
            more = L.DomUtil.create('a', 'storage-control-more storage-control-text', container),
            less = L.DomUtil.create('a', 'storage-control-less storage-control-text', container);
        more.href = '#';
        more.title = 'More controls';
        more.innerHTML = 'More';
   //     more.title = L._('More controls');
   //     more.innerHTML = L._('More');

        L.DomEvent
            .on(more, 'click', L.DomEvent.stop)
            .on(more, 'click', this.toggle, this);

        less.href = '#';
        less.title = 'Hide controls';
        less.innerHTML = 'Less';
  //      less.title = L._('Hide controls');
  //      less.innerHTML = L._('Less');

        L.DomEvent
            .on(less, 'click', L.DomEvent.stop)
            .on(less, 'click', this.toggle, this);

        return container;
    },

    toggle: function () {
        /*var pos = this.getPosition(),
            corner = this._map._controlCorners[pos],
            className = 'storage-more-controls';
        if (L.DomUtil.hasClass(corner, className)) {
            L.DomUtil.removeClass(corner, className);
        } else {
            L.DomUtil.addClass(corner, className);
        }*/
    }

});

L.control.more = function (options) {
    return new L.Control.MoreControls(options);
};


// 显示当前地图的缩放级别
L.Control.ZoomDisplay = L.Control.extend({
    options: {
        position: 'topleft'
    },
    onAdd: function (map) {
        this._map = map;
        this._container = L.DomUtil.create('div', 'leaflet-control-zoom-display leaflet-bar-part leaflet-bar');
        this.updateMapZoom(map.getZoom());
        map.on('zoomend', this.onMapZoomEnd, this);
        return this._container;
    },
    onRemove: function (map) {
        map.off('zoomend', this.onMapZoomEnd, this);
    },
    onMapZoomEnd: function (e) {
        this.updateMapZoom(this._map.getZoom());
    },
    updateMapZoom: function (zoom) {
        this._container.innerHTML = zoom;
    }
});

/*L.Map.mergeOptions({
    zoomDisplayControl: true
});

L.Map.addInitHook(function () {
    if (this.options.zoomDisplayControl) {
        this.zoomDisplayControl = new L.Control.ZoomDisplay();
        this.addControl(this.zoomDisplayControl);
    }
});*/

L.control.zoomDisplay = function (options) {
    return new L.Control.ZoomDisplay(options);
};

// =============================================
