/*!
 * kmap.wms.js
 */

(function (factory) {
    // Module systems magic dance, Leaflet edition
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['kmap'], factory);
    } else if (typeof module !== 'undefined') {
        // Node/CommonJS
        module.exports = factory(require('kmap'));
    } else {
        // Browser globals
        if (typeof this.K === 'undefined')
            throw 'Leaflet must be loaded first!';
        // Namespace
        this.K.WMS = this.K.wms = factory(this.K);
    }
}(function (K) {

// Module object
var wms = {};

// Quick shim for Object.keys()
if (!('keys' in Object)) {
    Object.keys = function(obj) {
        var result = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                result.push(i);
            }
        }
        return result;
    };
}



/*
 * wms.Overlay:
 * "Single Tile" WMS image overlay that updates with map changes.
 * Portions of wms.Overlay are directly extracted from K.TileLayer.WMS.
 */
wms.Overlay = K.Layer.extend({
    'defaultWmsParams': {
        'service': 'WMS',
        'request': 'GetMap',
        'version': '1.1.1',
        'layers': '',
        'styles': '',
        'format': 'image/png',
        'transparent': true,
        'key':''
    },

    'options': {
        'crs': null,
        'uppercase': false,
        'attribution': '',
        'opacity': 1,
        'isBack': false,
        'minZoom': 0,
        'maxZoom': 18,
        'zindex': 1000
    },

    'initialize': function(url, options) {
        this._url = url;
        // Move WMS parameters to params object
        var params = {};
        for (var opt in options) {
             if (!(opt in this.options)) {
                 params[opt] = options[opt];
                 delete options[opt];
             }
        }
        K.setOptions(this, options);
        this.wmsParams = K.extend({}, this.defaultWmsParams, params);
    },

    'setParams': function(params) {
        K.extend(this.wmsParams, params);
        this.update();
    },

    'getAttribution': function() {
        return this.options.attribution;
    },

    'onAdd': function() {
        this.update();
    },

    'onRemove': function(map) {
        if (this._currentOverlay) {
            map.removeLayer(this._currentOverlay);
            delete this._currentOverlay;
        }
        if (this._currentUrl) {
            delete this._currentUrl;
        }
    },

    'getEvents': function() {
        return {
            'moveend': this.update
        };
    },

    'update': function() {
        if (!this._map) {
            return;
        }
        // Determine image URL and whether it has changed since last update
        this.updateWmsParams();
        var url = this.getImageUrl();
        if (this._currentUrl == url) {
            return;
        }
        this._currentUrl = url;

        // Keep current image overlay in place until new one loads
        // (inspired by esri.kmap)
        var bounds = this._map.getBounds();
        var overlay = K.imageOverlay(url, bounds, {'opacity': 1,'zindex': this.options.zindex});
        overlay.addTo(this._map);
        overlay.once('load', _swap, this);
        function _swap() {
            if (!this._map) {
                return;
            }
            if (overlay._url != this._currentUrl) {
                this._map.removeLayer(overlay);
                return;
            } else if (this._currentOverlay) {
                this._map.removeLayer(this._currentOverlay);
            }
            this._currentOverlay = overlay;
            overlay.setOpacity(
                this.options.opacity ? this.options.opacity : 1
            );
            if (this.options.isBack === true) {
                overlay.bringToBack();
            }
            if (this.options.isBack === false) {
                overlay.bringToFront();
            }
        }
        if ((this._map.getZoom() < this.options.minZoom) ||
            (this._map.getZoom() > this.options.maxZoom)){
            this._map.removeLayer(overlay);
        }
    },

    'setOpacity': function(opacity) {
         this.options.opacity = opacity;
         if (this._currentOverlay) {
             this._currentOverlay.setOpacity(opacity);
         }
    },

    'bringToBack': function() {
        this.options.isBack = true;
        if (this._currentOverlay) {
            this._currentOverlay.bringToBack();
        }
    },

    'bringToFront': function() {
        this.options.isBack = false;
        if (this._currentOverlay) {
            this._currentOverlay.bringToFront();
        }
    },

    // See K.TileLayer.WMS: onAdd() & getTileUrl()
    'updateWmsParams': function(map) {
        if (!map) {
            map = this._map;
        }
        // Compute WMS options
        var bounds = map.getBounds();
        var size = map.getSize();
        var wmsVersion = parseFloat(this.wmsParams.version);
        var crs = this.options.crs || map.options.crs;
        var projectionKey = wmsVersion >= 1.3 ? 'src' : 'crs';
        var nw = crs.project(bounds.getNorthWest());
        var se = crs.project(bounds.getSouthEast());

        // Assemble WMS parameter string
        // 调整显示图片的宽高，减小图片显示的大小
        var params = {
            'width': Math.round(size.x/1.25),
            'height': Math.round(size.y/1.25)
        };
        params[projectionKey] = crs.code;
        params.bbox = (
            wmsVersion >= 1.3 && crs === K.CRS.EPSG4326 ?
            [se.y, nw.x, nw.y, se.x] :
            [nw.x, se.y, se.x, nw.y]
        ).join(',');

        K.extend(this.wmsParams, params);
    },

    'getImageUrl': function() {
        var uppercase = this.options.uppercase || false;
        var pstr = K.Util.getParamString(this.wmsParams, this._url, uppercase);
        return this._url + pstr;
    }
});

wms.overlay = function(url, options) {
    return new wms.Overlay(url, options);
};


return wms;

}));
