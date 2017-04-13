var b2 = !function (e) {
    function t(i) {
        if (a[i])return a[i].exports;
        var l = a[i] = {exports: {}, id: i, loaded: !1};
        return e[i].call(l.exports, l, l.exports, t), l.loaded = !0, l.exports
    }

    var a = {};
    return t.m = e, t.c = a, t.p = "", t(0)
}([function (e, t, a) {
    "use strict";
    var i = a(1), l = new i;
    l.init()
}, function (e, t, a) {
    "use strict";
    var i = a(2), l = function () {
        this.init = function () {
            this.router = new i, this.initComponents()
        }, this.initComponents = function () {
            $(".scrollbar").perfectScrollbar()
        }
    };
    e.exports = l
}, function (e, t, a) {
    "use strict";
    var i = a(3), l = a(8), r = a(10), o = a(16), s = a(17), n = a(19), f = a(20), d = a(22), c = a(23), h = a(32), p = a(36), u = a(37), g = a(38), m = a(39), b = a(40), v = a(41), y = a(42), k = a(44), C = a(46), T = a(47), L = a(49), w = a(50), H = a(51), S = a(52), O = a(43), P = a(5), x = a(4), F = a(18), M = Backbone.Router.extend({
        initialize: function () {
            this.dataLayerList = new C, this.mapModel = new w({dataLayerList: this.dataLayerList}), this.mapView = new c({model: this.mapModel}), this.listenTo(this.mapView, "mapReady", this.startInit)
        }, startInit: function () {
            this.myMapList = new T, this.openModel = new y, this.saveModel = new v, this.projectList = new k, this.shareModel = new L, this.deleteModel = new H, this.baseMapModel = new S, this.toolbarView = new i, this.baseMapView = new l({model: this.baseMapModel}), this.dataLayerListView = new r({model: this.dataLayerList}), this.shareView = new o({model: this.shareModel}), this.saveView = new s({model: this.saveModel}), this.projectView = new n({model: this.projectList}), this.createView = new f, this.deleteView = new d({model: this.deleteModel}), this.selectDataView = new h, this.myMapView = new p({model: this.myMapList}), this.geoheyMapView = new u({model: this.baseMapModel}), this.legendView = new g, this.fieldsView = new m, this.paramsView = new b({model: this.dataLayerList}), this.listenTo(this.openModel, "sync", this.dataVizOpenedHandler), this.listenTo(this.openModel, "error", this.dataVizOpenErrorHandler), this.listenTo(this.toolbarView, "basemap", this.showMapPanel), this.listenTo(this.toolbarView, "data", this.showDataPanel), this.listenTo(this.toolbarView, "share", this.showSharePanel), this.listenTo(this.toolbarView, "save", this.showSavePanel), this.listenTo(this.toolbarView, "project", this.showOpenPanel), this.listenTo(this.toolbarView, "delete", this.showDeletePanel), this.listenTo(this.toolbarView, "close", this.closePanel), this.listenTo(this.toolbarView, "params", this.showParamsPanel), this.listenTo(this.toolbarView, "saveImmediately", this.saveImmediately), this.listenTo(this.projectView, "create", this.showCreatePanel), this.listenTo(this.projectView, "open", this.openDataViz), this.listenTo(this.projectView, "openCurrent", this.showDataPanel), this.listenTo(this.createView, "created", this.createdHandler), this.listenTo(this.deleteView, "deleted", this.deletedHandler), this.listenTo(this.saveView, "save", this.saveHandler), this.listenTo(this.saveView, "saved", this.savedHandler), this.listenTo(this.baseMapView, "select", this.selectMap), this.listenTo(this.baseMapView, "selectMyMap", this.selectMyMap), this.listenTo(this.baseMapView, "selectGeoHeyMap", this.selectGeoHeyMap), this.listenTo(this.dataLayerListView, "selectData", this.showSelectDataPanel), this.listenTo(this.selectDataView, "dataSelected", this.addData), this.listenTo(this.myMapView, "select", this.myMapSelectHandler), this.listenTo(this.geoheyMapView, "select", this.geoheyMapSelectHandler), this.listenTo(this.baseMapView, "close", this.close), this.listenTo(this.dataLayerListView, "close", this.close), this.listenTo(this.shareView, "close", this.close), this.listenTo(this.saveView, "close", this.close), this.listenTo(this.projectView, "close", this.close), this.listenTo(this.deleteView, "close", this.close), this.listenTo(this.dataLayerListView, "dataLayerConfigUpdate", this.updateTileLayer), this.listenTo(this.dataLayerListView, "heatLayerConfigUpdate", this.updateHeatLayer), this.listenTo(this.dataLayerListView, "timeLayerConfigUpdate", this.updateTimeLayer), this.listenTo(this.dataLayerListView, "fluidLayerConfigUpdate", this.updateFluidLayer), this.listenTo(this.dataLayerListView, "zoomToDataLayer", this.zoomToLayer), this.listenTo(this.dataLayerListView, "dataLayerUp", this.bringUpLayer), this.listenTo(this.dataLayerListView, "dataLayerDown", this.bringDownLayer), this.listenTo(this.dataLayerListView, "showDataLayer", this.showLayer), this.listenTo(this.dataLayerListView, "hideDataLayer", this.hideLayer), this.listenTo(this.dataLayerListView, "showLegend", this.showLegend), this.listenTo(this.dataLayerListView, "hideLegend", this.hideLegend), this.listenTo(this.dataLayerListView, "showTimeSlider", this.showTimeSlider), this.listenTo(this.dataLayerListView, "hideTimeSlider", this.hideTimeSlider), this.listenTo(this.dataLayerListView, "deleteLayer", this.deleteLayer), this.listenTo(this.dataLayerListView, "showFieldsConfig", this.showFieldsConfig), this.listenTo(this.mapView, "layerVisibleChange", this.layerVisibleChangeHandler), this.listenTo(this.fieldsView, "configUpdate", this.updateTileLayer)
        }, showMapPanel: function () {
            $('.tool-panel:not("hide")').addClass("hide"), $(this.baseMapView.el).removeClass("hide"), this.mapView.shrinkMap()
        }, showDataPanel: function () {
            $('.tool-panel:not("hide")').addClass("hide"), $(this.dataLayerListView.el).removeClass("hide"), this.mapView.shrinkMap(), this.toolbarView.switchToTool("data")
        }, showSharePanel: function () {
            $('.tool-panel:not("hide")').addClass("hide"), $(this.shareView.el).removeClass("hide"), this.mapView.shrinkMap()
        }, showSavePanel: function () {
            $('.tool-panel:not("hide")').addClass("hide"), $(this.saveView.el).removeClass("hide"), this.mapView.shrinkMap()
        }, showOpenPanel: function () {
            $('.tool-panel:not("hide")').addClass("hide"), $(this.projectView.el).removeClass("hide")
        }, showCreatePanel: function () {
            $('.tool-panel:not("#project-panel"):not("hide")').addClass("hide"), this.createView.show()
        }, showDeletePanel: function () {
            $('.tool-panel:not("hide")').addClass("hide"), $(this.deleteView.el).removeClass("hide"), this.mapView.shrinkMap()
        }, showParamsPanel: function () {
            $('.tool-panel:not("hide")').addClass("hide"), $(this.paramsView.el).removeClass("hide")
        }, showSelectDataPanel: function () {
            $(this.selectDataView.el).removeClass("hide")
        }, closePanel: function (e) {
            $(".tool-panel").addClass("hide"), this.mapView.expandMap()
        }, saveImmediately: function () {
            this.saveHandler()
        }, close: function () {
            $(".toolbar-item.active").removeClass("active"), this.mapView.expandMap()
        }, createdHandler: function (e) {
            this.projectList.fetch(), this.dataLayerList.remove(this.dataLayerList.models), this.saveModel.set({
                uid: e.get("uid"),
                title: e.get("title"),
                desc: e.get("desc"),
                share: !1
            }), this.shareModel.set({uid: e.get("uid"), ak: e.get("ak")}), this.deleteModel.set({
                uid: e.get("uid"),
                shared: !1
            }), this.mapModel.set({mapStatus: void 0}, {silent: !0}), this.mapModel.set({mapStatus: P.defaultMapStatus}), this.projectList.activeProjectUid = e.get("uid"), this.toolbarView.switchToView("data"), this.legendView.clearLegend(), this.mapView.clearFeatures(), this.projectView.resetView(), this.hideTimeSlider(null)
        }, deletedHandler: function () {
            this.legendView.clearLegend(), this.projectList.goPage = 0, this.projectList.fetch(), this.projectList.activeProjectUid = void 0, this.toolbarView.switchToView("project"), this.dataLayerList.remove(this.dataLayerList.models), this.saveModel.clear(), this.openModel.clear(), this.shareModel.clear(), this.mapModel.set({
                baseMap: P.defaultMap,
                mapStatus: P.defaultMapStatus
            }), this.baseMapModel.set({map: P.defaultMap}), this.toolbarView.disableAllButProject(), this.mapView.clearFeatures()
        }, saveHandler: function () {
            var e = this.mapModel.get("baseMap"), t = this.mapView.getMapStatus(), a = this.dataLayerListView.getDataLayerOrder();
            this.dataLayerList.sortDataLayers(a), this.saveModel.set({
                content: this.dataLayerList,
                map: {uid: e.uid, type: e.type, center: t.center, resolution: t.resolution}
            }), this.saveModel.save();
            var i = F.screenShot();
            this.saveModel.updateThumb(i)
        }, savedHandler: function () {
            var e = this.saveModel.get("uid"), t = this.projectList.get(e);
            t.set({
                title: this.saveModel.get("title"),
                desc: this.saveModel.get("desc"),
                updatedAt: this.saveModel.get("updatedAt")
            }), this.projectList.trigger("sync");
            var a = this.saveModel.get("share");
            this.deleteModel.set({shared: a})
        }, selectMap: function (e) {
            this.mapModel.set({baseMap: e}), this.myMapView.selectMap(e), P.defaultMap = e
        }, selectMyMap: function () {
            $(this.myMapView.el).removeClass("hide")
        }, selectGeoHeyMap: function () {
            $(this.geoheyMapView.el).removeClass("hide")
        }, myMapSelectHandler: function (e) {
            this.baseMapModel.set({map: e}), this.mapModel.set({baseMap: e}), P.defaultMap = e
        }, geoheyMapSelectHandler: function (e) {
            this.baseMapModel.set({map: e}), this.mapModel.set({baseMap: e}), P.defaultMap = e
        }, openXhr: void 0, openDataViz: function (e) {
            this.openXhr && this.openXhr.abort(), this.openModel.set({uid: e}), this.openXhr = this.openModel.fetch()
        }, dataVizOpenedHandler: function () {
            this.openXhr = void 0, this.legendView.clearLegend(), this.mapView.hideTimeSlider();
            var e = this.openModel.get("uid"), t = this.openModel.get("share");
            this.deleteModel.set({uid: e, shared: t}), this.saveModel.set({
                uid: e,
                title: this.openModel.get("title"),
                desc: this.openModel.get("desc"),
                share: this.openModel.get("share")
            }), this.shareModel.set({
                uid: e,
                ak: this.openModel.get("ak")
            }), this.dataLayerList.remove(this.dataLayerList.models), this.dataLayerList.add(this.openModel.get("content"));
            var a = this.openModel.get("map");
            this.mapModel.set({
                baseMap: {uid: a.uid, type: a.type},
                mapStatus: {center: a.center, resolution: a.resolution}
            }), this.baseMapModel.clear(), this.baseMapModel.set({
                map: {
                    uid: a.uid,
                    type: a.type
                }
            }), P.defaultMap = {
                uid: a.uid,
                type: a.type
            }, this.myMapView.selectMap(a), this.toolbarView.switchToView("data"), this.projectView.activate(e), this.mapView.clearFeatures(), this.paramsView.render()
        }, dataVizOpenErrorHandler: function (e) {
            return this.openXhr && "abort" == this.openXhr.statusText ? void(this.openXhr = void 0) : (x.showError("打开项目失败"), void this.projectView.hideLoading())
        }, addData: function (e) {
            var t = new O({
                dataName: e.name,
                dataUid: e.uid,
                dataType: e.type,
                extent: JSON.parse(e.extent),
                geometryType: e.geometryType,
                sr: e.sr,
                maxRes: e.maxRes,
                primaryField: e.primaryField,
                count: e.count
            });
            t.source = "manual", this.dataLayerList.add(t), this.paramsView.render()
        }, updateTileLayer: function (e) {
            this.mapModel.updateTileLayer(e), this.paramsView.render()
        }, updateHeatLayer: function (e) {
            this.mapView.updateHeatLayer(e)
        }, updateTimeLayer: function (e) {
            this.mapView.updateTimeLayer(e)
        }, updateFluidLayer: function (e) {
            this.mapView.updateFluidLayer(e)
        }, zoomToLayer: function (e) {
            this.mapView.zoomToLayer(e)
        }, bringUpLayer: function (e) {
            this.mapView.bringUpLayer(e)
        }, bringDownLayer: function (e) {
            this.mapView.bringDownLayer(e)
        }, showLayer: function (e) {
            this.mapView.showLayer(e)
        }, hideLayer: function (e) {
            this.mapView.hideLayer(e)
        }, showLegend: function (e) {
            this.legendView.showLegend(e)
        }, hideLegend: function (e) {
            this.legendView.hideLegend(e)
        }, showTimeSlider: function (e) {
            this.mapView.showTimeSlider(e)
        }, hideTimeSlider: function (e) {
            this.mapView.hideTimeSlider(e)
        }, deleteLayer: function (e) {
            this.legendView.hideLegend(e), this.paramsView.render()
        }, layerVisibleChangeHandler: function (e) {
            this.dataLayerListView.handleDataLayerVisibleChange(e), this.paramsView.render()
        }, showFieldsConfig: function (e) {
            this.fieldsView.show(e)
        }
    });
    e.exports = M
}, function (e, t, a) {
    "use strict";
    var i = (a(4), Backbone.View.extend({
        el: $("#toolbar"),
        events: {
            "click #btn-basemap": "switchView",
            "click #btn-data": "switchView",
            "click #btn-share": "switchView",
            "click #btn-save": "switchView",
            "click #btn-project": "switchView",
            "click #btn-delete": "switchView",
            "click #btn-params": "switchView",
            "click #btn-save-shortcut": "saveImmediately"
        },
        eventTable: {
            "btn-basemap": "basemap",
            "btn-data": "data",
            "btn-share": "share",
            "btn-save": "save",
            "btn-project": "project",
            "btn-delete": "delete",
            "btn-params": "params"
        },
        switchView: function (e) {
            var t = $(e.currentTarget);
            if (!t.hasClass("disabled")) {
                var a = t.attr("id");
                if (t.hasClass("active"))return t.removeClass("active"), void this.trigger("close", this.eventTable[a]);
                $(".toolbar-item.active").removeClass("active"), t.addClass("active"), this.trigger(this.eventTable[a])
            }
        },
        switchToView: function (e) {
            $(".toolbar-item.active").removeClass("active"), $("#btn-" + e).addClass("active"), this.trigger(e), this.enableAll()
        },
        switchToTool: function (e) {
            $(".toolbar-item.active").removeClass("active"), $("#btn-" + e).addClass("active")
        },
        disableAllButProject: function () {
            this.$('.toolbar-item:not("#btn-project")').addClass("disabled")
        },
        enableAll: function () {
            this.$(".toolbar-item").removeClass("disabled")
        },
        saveImmediately: function () {
            this.trigger("saveImmediately")
        }
    }));
    e.exports = i
}, function (e, t, a) {
    "use strict";
    function i(e) {
        o("error", e)
    }

    function l(e) {
        o("success", e)
    }

    function r(e) {
        o("warning", e)
    }

    function o(e, t) {
        var a = "error warning";
        "error" == e ? a = "success warning" : "warning" == e && (a = "error success"), k.addClass("hide"), setTimeout(function () {
            C.text(t || ""), k.removeClass(a + " fadeOutUp").addClass(e + " fadeInDown").removeClass("hide"), clearTimeout(T), T = setTimeout(function () {
                k.removeClass("fadeInDown").addClass("fadeOutUp")
            }, 2e3)
        }, 10)
    }

    function s(e) {
        $("#" + e).prop("disabled", "disabled"), $("#" + e + " .label").addClass("hide"), $("#" + e + " .loading").removeClass("hide")
    }

    function n(e) {
        $("#" + e).removeProp("disabled"), $("#" + e + " .label").removeClass("hide"), $("#" + e + " .loading").addClass("hide")
    }

    function f(e) {
        $("#" + e).prop("disabled", "disabled")
    }

    function d(e) {
        $("#" + e).removeProp("disabled")
    }

    function c(e) {
        return null == e || void 0 == e || "" == e.trim()
    }

    function h(e, t) {
        var a = [], i = new Rainbow;
        i.setNumberRange(0, e), i.setSpectrum.apply(void 0, t ? t : y.defaultColorRamp);
        for (var l = 0; l < e; l++)a.push(i.colourAt(l));
        return a
    }

    function p(e) {
        var t = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
        return t && decodeURIComponent(t[1].replace(/\+/g, " "))
    }

    function u(e) {
        return e = parseInt(e), $.formatDateTime("yy-mm-dd", new Date(e))
    }

    function g(e) {
        if (e && 4 == e.length)return [(e[0] + e[2]) / 2, (e[1] + e[3]) / 2]
    }

    function m(e) {
        return $.inArray(e, L) >= 0
    }

    function b(e) {
        return "timestamp" == e
    }

    function v(e, t) {
        if (y.isProdEnv) {
            var a = Math.abs(e + t) % y.geoheyServerCluster.length, i = y.geoheyServerCluster[a];
            return "//" + i + "." + document.domain
        }
        return ""
    }

    var y = a(5), k = $("#message-container"), C = $("#message-container #message"), T = void 0;
    k.bind("click", function () {
        $(this).removeClass("fadeInDown").addClass("fadeOutUp")
    }), $.fn.selectRange = function (e, t) {
        return void 0 === t && (t = e), this.each(function () {
            if ("selectionStart" in this)this.selectionStart = e, this.selectionEnd = t; else if (this.setSelectionRange)this.setSelectionRange(e, t); else if (this.createTextRange) {
                var a = this.createTextRange();
                a.collapse(!0), a.moveEnd("character", t), a.moveStart("character", e), a.select()
            }
        })
    }, function () {
        var e = window, t = e.devicePixelRatio;
        e.mobile = "undefined" != typeof window.orientation, e.retina = t >= 1.5 || e.matchMedia && e.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),\t                      (-moz-min-device-pixel-ratio: 1.5),\t                      (min-device-pixel-ratio: 1.5),\t                      (min-resolution: 1.5dppx)").matches
    }();
    var L = ["short", "integer", "long", "double", "float", "numeric"];
    e.exports = {
        showBtnLoading: s,
        hideBtnLoading: n,
        disabledBtn: f,
        enabledBtn: d,
        showError: i,
        showSuccess: l,
        showWarning: r,
        stringIsBlank: c,
        getRandomColors: h,
        getQueryParamByName: p,
        localizeDate: u,
        getExtentCenter: g,
        isNumericType: m,
        isDateTimeType: b,
        getDomain: v
    }
}, function (e, t, a) {
    "use strict";
    var i = a(6), l = a(7), r = !!appEnv && "prod" == appEnv, o = new i, s = new l, n = {
        isProdEnv: r,
        domain: r ? "//{s}." + document.domain : "",
        token: $.cookie ? $.cookie("token") : "",
        utfGridSize: 256,
        utfGridRes: 4,
        mapOriginX: -20037508.342784,
        mapOriginY: 20037508.342784,
        colorRamp: o,
        defaultColorRamp: o.colors["color-ramp-red"],
        defaultColorRampName: "color-ramp-red",
        heatColorRamp: s,
        defaultHeatColor: s.colors["color-ramp-heat-blue2red"],
        defaultHeatColorName: "color-ramp-heat-blue2red",
        fullColorRamp: o.colors["color-ramp-spectrumfull"],
        geoheyServerCluster: ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"],
        defaultMapStatus: {center: [11679530.428552564, 4015909.814808646], resolution: 9783.9396205},
        defaultMap: {uid: "auto", type: "online"},
        defaultLegendTitle: "图例",
        defaultLegendOrder: "desc",
        configTypes: {
            MARKER_SIMPLE: "marker-simple",
            MARKER_INTENSITY: "marker-intensity",
            MARKER_HEAT: "marker-heat",
            MARKER_CHOROPLETH: "marker-choropleth",
            MARKER_CATEGORY: "marker-category",
            MARKER_BUBBLE: "marker-bubble",
            MARKER_FLUID: "marker-fluid",
            POLYGON_SIMPLE: "polygon-simple",
            POLYGON_CHOROPLETH: "polygon-choropleth",
            POLYGON_CATEGORY: "polygon-category",
            POLYLINE_SIMPLE: "polyline-simple",
            POLYLINE_CHOROPLETH: "polyline-choropleth",
            POLYLINE_CATEGORY: "polyline-category"
        },
        colors: ["#00b050", "#0070c0", "#c00000", "#7030a0", "#ffc000", "#56ffa0", "#5fbaff", "#ff6962", "#b45dff", "#ffd677", "#00b3ba", "#0500c5", "#a26866", "#fc36c7", "#ff6a10", "#b1fcff", "#5d8bff", "#b59493", "#f490c6", "#ff9b5e", "#24ff00", "#00fff6", "#f0ff00", "#ffffff", "#000000"],
        opacities: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1],
        lineWidths: [0, .1, .3, .5, .8, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        markerSizes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 24, 28, 32, 35, 40],
        bubbleSizes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
        labelFonts: [{alias: "雅黑", name: "Microsoft YaHei Regular"}, {alias: "楷体", name: "KaiTi Regular"}, {
            alias: "宋体",
            name: "SimSun Regular"
        }, {alias: "隶书", name: "LiSu Regular"}],
        labelSizes: [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24],
        bucketTypes: [{alias: "自然分段", name: "naturalbreaks"}, {alias: "四分位法", name: "quantiles"}, {
            alias: "Ht-Index",
            name: "ht-index"
        }, {alias: "平均分段", name: "equalinterval"}],
        bucketCounts: [3, 5, 7, 10, 15],
        heatSizes: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 34, 38, 42, 46, 50, 60, 70, 80],
        timeSegments: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 40, 50, 80, 100, 150, 200, 300],
        timeDurations: [.1, .2, .3, .5, .8, 1, 1.2, 1.5, 1.8, 2, 2.5, 3],
        defaultTimeSegment: 5,
        defaultTimeDuration: 1,
        defaultMarkerColor: "#c00000",
        defaultMarkerSize: 6,
        defaultMarkerOpacity: .8,
        defaultLineColor: "#0070c0",
        defaultLineOpacity: .8,
        defaultLineWidth: 1,
        defaultFillColor: "#7030a0",
        defaultFillOpacity: .8,
        defaultOutlineColor: "#ffffff",
        defaultOutlineOpacity: .8,
        defaultOutlineWidth: 1,
        defaultHeatPixelSize: 20,
        defaultHeatMinOpacity: 0,
        defaultHeatMaxOpacity: .8,
        defaultHeatResolution: 4,
        defaultHeatMapSize: 1e3,
        defaultHeatSizeUnit: "pixel",
        defaultHeatTopValue: 5,
        defaultHeatWeightField: "无",
        noDataColor: "#cccccc",
        defaultLabelColor: "#000000",
        defaultLabelFont: "Microsoft YaHei Regular",
        defaultLabelSize: 12,
        defaultBucketCount: 5,
        defaultBucketType: "naturalbreaks",
        defaultBubbleMarkerColor: "#ff6a10",
        defaultBubbleMinSize: 2,
        defaultBubbleMaxSize: 20,
        defaultBubbleLegendMaxSize: 16,
        defaultBubbleLegendItemCount: 5,
        defaultBubbleFillMode: "single",
        fluidWidths: [.1, .2, .5, .8, 1, 1.2, 1.5, 2, 2.5, 3, 5, 8, 10],
        fluidDurations: [10, 20, 50],
        fluidOpacities: [.1, .2, .3, .4, .5, .6, .7, .8, .9, 1],
        defaultFluidWidth: 1.2,
        defaultFluidOpacity: 1,
        defaultFluidDuration: 50,
        defaultFluidTopValue: 50,
        defaultFluidColors: ["#fff"],
        markerSymbol: {
            shape: "image",
            image: staticRoot + "/map/marker/pin/pin-3ca0d3-sm{i}.png",
            offset: [-12, -28],
            size: [24, 32]
        },
        lineSymbol: {lineColor: "#000", lineOpacity: .8},
        fillSymbol: {
            fillImage: staticRoot + "/img/app/line-fill.png",
            fillImageSize: [4, 4],
            fillOpacity: 1,
            outlineWidth: 3,
            outlineColor: "#fff"
        },
        markerPinSymbol: {
            shape: "image",
            image: staticRoot + "/map/marker/pin/pin-3ca0d3-md{i}.png",
            offset: [-18, -46],
            size: [36, 50]
        },
        markerCircleSymbol: {
            shape: "image",
            image: staticRoot + "/map/marker/icon/s-circle-md{i}.png",
            offset: [-5, -32],
            size: [10, 10]
        }
    };
    e.exports = n
}, function (e, t) {
    "use strict";
    function a() {
        this.colors = {}, this.colors["color-ramp-green"] = ["#00B050", "#ffffff"], this.colors["color-ramp-blue"] = ["#0070c0", "#ffffff"], this.colors["color-ramp-red"] = ["#C00000", "#ffffff"], this.colors["color-ramp-purple"] = ["#7030A0", "#ffffff"], this.colors["color-ramp-black"] = ["#000000", "#ffffff"], this.colors["color-ramp-orange"] = ["#FFC000", "#ffffff"], this.colors["color-ramp-yellow"] = ["#FFFF00", "#ffffff"], this.colors["color-ramp-green-red"] = ["#C00000", "#00B050"], this.colors["color-ramp-blue-red"] = ["#C00000", "#0070c0"], this.colors["color-ramp-temperature"] = ["#fffcff", "#fff5ff", "#ffedff", "#ffe5ff", "#ffdeff", "#ffd6ff", "#ffcfff", "#ffc7ff", "#ffbfff", "#ffb8ff", "#ffb0ff", "#ffa8ff", "#ffa1ff", "#ff99ff", "#ff91ff", "#ff8aff", "#ff82ff", "#ff7aff", "#ff73ff", "#ff6bff", "#ff63ff", "#ff5cff", "#ff54ff", "#ff4cff", "#ff45ff", "#ff3dff", "#ff36ff", "#ff2eff", "#ff26ff", "#ff1fff", "#ff17ff", "#ff0fff", "#ff08ff", "#ff00ff", "#ff00ff", "#fb00ff", "#f700ff", "#f200ff", "#ee00ff", "#ea00ff", "#e600ff", "#e100ff", "#dd00ff", "#d900ff", "#d400ff", "#d000ff", "#cc00ff", "#c800ff", "#c400ff", "#bf00ff", "#bb00ff", "#b700ff", "#b300ff", "#ae00ff", "#aa00ff", "#a600ff", "#a200ff", "#9d00ff", "#9900ff", "#9500ff", "#9000ff", "#8c00ff", "#8800ff", "#8400ff", "#8000ff", "#7b00ff", "#7700ff", "#7300ff", "#6f00ff", "#6a00ff", "#6600ff", "#6200ff", "#5d00ff", "#5900ff", "#5500ff", "#5100ff", "#4c00ff", "#4800ff", "#4400ff", "#4000ff", "#3c00ff", "#3700ff", "#3300ff", "#2f00ff", "#2b00ff", "#2600ff", "#2200ff", "#1e00ff", "#1900ff", "#1500ff", "#1100ff", "#0d00ff", "#0800ff", "#0400ff", "#0000ff", "#0000ff", "#0004ff", "#0008ff", "#000dff", "#0011ff", "#0015ff", "#001aff", "#001eff", "#0022ff", "#0026ff", "#002aff", "#002fff", "#0033ff", "#0037ff", "#003cff", "#0040ff", "#0044ff", "#0048ff", "#004cff", "#0051ff", "#0055ff", "#0059ff", "#005eff", "#0062ff", "#0066ff", "#006aff", "#006eff", "#0073ff", "#0077ff", "#007bff", "#0080ff", "#0084ff", "#0088ff", "#008cff", "#0091ff", "#0095ff", "#0099ff", "#009dff", "#00a2ff", "#00a6ff", "#00aaff", "#00aeff", "#00b3ff", "#00b7ff", "#00bbff", "#00bfff", "#00c4ff", "#00c8ff", "#00ccff", "#00d0ff", "#00d5ff", "#00d9ff", "#00ddff", "#00e1ff", "#00e5ff", "#00eaff", "#00eeff", "#00f2ff", "#00f7ff", "#00fbff", "#00ffff", "#00ffff", "#00fffb", "#00fff7", "#00fff2", "#00ffee", "#00ffea", "#00ffe5", "#00ffe1", "#00ffdd", "#00ffd9", "#00ffd5", "#00ffd0", "#00ffcc", "#00ffc8", "#00ffc4", "#00ffbf", "#00ffbb", "#00ffb7", "#00ffb3", "#00ffae", "#00ffaa", "#00ffa6", "#00ffa2", "#00ff9d", "#00ff99", "#00ff95", "#00ff91", "#00ff8c", "#00ff88", "#00ff84", "#00ff80", "#00ff7b", "#00ff77", "#00ff73", "#00ff6e", "#00ff6a", "#00ff66", "#00ff62", "#00ff5e", "#00ff59", "#00ff55", "#00ff51", "#00ff4c", "#00ff48", "#00ff44", "#00ff40", "#00ff3c", "#00ff37", "#00ff33", "#00ff2f", "#00ff2a", "#00ff26", "#00ff22", "#00ff1e", "#00ff1a", "#00ff15", "#00ff11", "#00ff0d", "#00ff08", "#00ff04", "#00ff00", "#00ff00", "#04ff00", "#09ff00", "#0dff00", "#11ff00", "#15ff00", "#1aff00", "#1eff00", "#22ff00", "#26ff00", "#2bff00", "#2fff00", "#33ff00", "#37ff00", "#3cff00", "#40ff00", "#44ff00", "#48ff00", "#4dff00", "#51ff00", "#55ff00", "#59ff00", "#5eff00", "#62ff00", "#66ff00", "#6aff00", "#6fff00", "#73ff00", "#77ff00", "#7bff00", "#80ff00", "#84ff00", "#88ff00", "#8cff00", "#91ff00", "#95ff00", "#99ff00", "#9dff00", "#a2ff00", "#a6ff00", "#aaff00", "#aeff00", "#b3ff00", "#b7ff00", "#bbff00", "#bfff00", "#c4ff00", "#c8ff00", "#ccff00", "#d0ff00", "#d4ff00", "#d9ff00", "#ddff00", "#e1ff00", "#e5ff00", "#eaff00", "#eeff00", "#f2ff00", "#f6ff00", "#fbff00", "#ffff00", "#ffff00", "#fffb00", "#fff700", "#fff200", "#ffee00", "#ffea00", "#ffe600", "#ffe100", "#ffdd00", "#ffd900", "#ffd500", "#ffd000", "#ffcc00", "#ffc800", "#ffc400", "#ffbf00", "#ffbb00", "#ffb700", "#ffb300", "#ffae00", "#ffaa00", "#ffa600", "#ffa200", "#ff9d00", "#ff9900", "#ff9500", "#ff9100", "#ff8c00", "#ff8800", "#ff8400", "#ff8000", "#ff8000", "#fc7a00", "#fa7900", "#f77300", "#f57200", "#f26d00", "#f06800", "#ed6700", "#eb6200", "#e86100", "#e65c00", "#e35700", "#e05600", "#de5100", "#db4d00", "#d94c00", "#d64700", "#d44700", "#d14200", "#cf3e00", "#cc3d00", "#c93900", "#c73800", "#c43400", "#c23100", "#bf3000", "#bd2c00", "#ba2b00", "#b82800", "#b52400", "#b32400", "#b02000", "#ad2000", "#ab1d00", "#a81900", "#a61900", "#a31600", "#a11500", "#9e1200", "#9c1000", "#990f00", "#960d00", "#940a00", "#910a00", "#8f0700", "#8c0700", "#8a0500", "#870200", "#850200", "#820000", "#800000"].reverse(), this.colors["color-ramp-coldhotdiverging"] = ["#4575b5", "#4577b5", "#4579b5", "#477eb8", "#4780b8", "#4782b8", "#4783b8", "#4a86b8", "#4a8aba", "#4a8cba", "#4a8dba", "#4d90ba", "#4d92ba", "#4e96bd", "#4e98bd", "#4f9abd", "#4f9cbd", "#4f9ebd", "#4fa0bd", "#52a4bf", "#52a6bf", "#52a7bf", "#52a9bf", "#54abbf", "#55b0c2", "#55b2c2", "#55b3c2", "#57b6c2", "#57b7c2", "#58bbc4", "#58bdc4", "#5abfc4", "#5ac0c4", "#5ac2c4", "#5bc7c7", "#5ec7c5", "#5ec7c3", "#5ec7c2", "#5ec7c0", "#60c9c0", "#60c9bf", "#60c9bd", "#60c9bb", "#63c9ba", "#64ccbb", "#64ccb9", "#64ccb7", "#66ccb6", "#66ccb4", "#66ccb2", "#67cfb3", "#6acfb2", "#6acfb1", "#6acfaf", "#6acfad", "#6bd1ad", "#6dd1ac", "#6dd1ab", "#6dd1a9", "#6dd1a7", "#70d4a9", "#70d4a7", "#70d4a5", "#70d4a4", "#73d4a3", "#74d6a3", "#74d6a2", "#74d6a0", "#75d69f", "#75d69e", "#77d99e", "#77d99d", "#7ad99d", "#7ad99b", "#7ad999", "#7bdb99", "#7ddb99", "#7ddb97", "#7ddb96", "#7ddb94", "#7fdb95", "#81de95", "#81de93", "#81de92", "#83de92", "#83de90", "#84e090", "#84e08f", "#86e08f", "#86e08e", "#86e08c", "#88e38d", "#8be38e", "#8be38c", "#8be38b", "#8ce38b", "#91e68f", "#93e68f", "#94e68f", "#96e68f", "#9ae691", "#9ce892", "#9ee892", "#9fe892", "#a1e892", "#a4e894", "#a7eb96", "#a9eb96", "#aaeb96", "#adeb99", "#afeb99", "#b0eb99", "#b3ed9a", "#b6ed9c", "#b7ed9c", "#b8ed9c", "#baed9c", "#bff0a1", "#c1f0a1", "#c2f0a1", "#c3f0a1", "#c6f0a3", "#c8f2a4", "#caf2a4", "#cbf2a4", "#cef2a7", "#cff2a7", "#d3f5a9", "#d4f5a9", "#d6f5ab", "#d7f5ab", "#d9f5ab", "#dcf7ac", "#def7af", "#dff7af", "#e0f7af", "#e1f7af", "#e6fab4", "#e7fab4", "#e9fab4", "#eafab4", "#ebfab6", "#ecfab6", "#effcb8", "#f1fcb8", "#f2fcbb", "#f3fcbb", "#f4fcbb", "#f8ffbd", "#faffbf", "#fbffbf", "#fcffbf", "#fdffbf", "#feffbf", "#ffffbf", "#ffffbf", "#fffebd", "#fcfab8", "#fcf8b6", "#fcf7b3", "#fcf6b0", "#faf2ad", "#faf1aa", "#faefa8", "#f7eaa3", "#f7e9a1", "#f7e79e", "#f5e39b", "#f5e198", "#f5df96", "#f5dd93", "#f2d78e", "#f2d58c", "#f2d38a", "#f0cf87", "#f0cc84", "#f0c982", "#f0c77f", "#edc27c", "#edbf79", "#edbb76", "#ebb773", "#ebb470", "#ebb16f", "#e8ab6a", "#e8a869", "#e8a566", "#e8a264", "#e69d61", "#e6995f", "#e6965c", "#e39058", "#e38c56", "#e38854", "#e38552", "#e07f4e", "#e07b4c", "#e0774a", "#de7247", "#de6e45", "#de6942", "#de6540", "#db5f3d", "#db5b3b", "#db5639", "#d95236", "#d94d34", "#d94832", "#d6422f", "#d63e2d", "#d6392b", "#d63428", "#d62f27"].reverse(), this.colors["color-ramp-yellow2green2blue"] = ["#ffff7f", "#fdff7d", "#f8fc79", "#f5fc77", "#f3fc74", "#f0fc72", "#ecfa6e", "#e9fa6c", "#e7fa69", "#e4fa67", "#def763", "#dbf760", "#d8f75e", "#d3f55a", "#d0f558", "#cdf556", "#caf554", "#c4f250", "#c1f24e", "#bdf24b", "#b9f248", "#b4f046", "#b1f043", "#adf041", "#a7ed3d", "#a4ed3d", "#a0ed3b", "#9ced39", "#97eb36", "#92eb34", "#8eeb32", "#8aeb2f", "#84e82c", "#7fe82a", "#7be827", "#76e825", "#71e622", "#6ce620", "#67e61e", "#61e31c", "#5ce319", "#57e316", "#52e314", "#4ce012", "#47e010", "#42e00d", "#3de00b", "#37e009", "#37e009", "#30de09", "#2bde0b", "#23db0b", "#1cdb0b", "#15d90b", "#10d90d", "#0dd610", "#0dd617", "#0fd41f", "#0fd426", "#0fd12c", "#0fd132", "#10cf3a", "#10cf40", "#10cc45", "#10cc4c", "#12c952", "#12c958", "#12c75d", "#14c764", "#13c469", "#13c46f", "#13c273", "#15c27a", "#15bf7e", "#15bf83", "#17bd88", "#17bd8e", "#17ba91", "#17ba97", "#18b89b", "#18b8a0", "#17b5a3", "#17b5a8", "#19b3ab", "#19b3b0", "#19adb0", "#1aa9b0", "#1aa1ad", "#1a9cad", "#1995ab", "#1990ab", "#1993ab", "#1990ab", "#198ba8", "#1989a8", "#1985a6", "#1782a6", "#177ea3", "#177ba3", "#1779a3", "#1775a1", "#1773a1", "#166f9e", "#166c9e", "#14689c", "#14669c", "#14639c", "#145f99", "#145d99", "#135996", "#135796", "#135494", "#125194", "#124f94", "#124b91", "#124991", "#11468f", "#11448f", "#11408c", "#113e8c", "#0f3b8c", "#0f388a", "#0f368a", "#0f3387", "#0f3187", "#0f2e85", "#0f2c85", "#0f2a85", "#0d2682", "#0d2482", "#0d2280", "#0d2080", "#0c1d7d", "#0c1b7d", "#0c197d", "#0c177a", "#0c157a", "#0c1378", "#0c1178", "#0c0f78"].reverse(), this.colors["color-ramp-cyan2purple"] = ["#00f5f5", "#00f1f5", "#00edf5", "#00e9f5", "#00e5f5", "#00e1f5", "#00dcf5", "#00d8f5", "#00d4f5", "#00d0f5", "#00ccf5", "#00c8f5", "#00c4f5", "#00c0f5", "#00bcf5", "#00b8f5", "#00b4f5", "#00b0f5", "#00acf5", "#00a7f5", "#00a3f5", "#009ff5", "#009bf5", "#0097f5", "#0093f5", "#008ff5", "#008bf5", "#0087f5", "#0083f5", "#007ff5", "#007bf5", "#0076f5", "#0072f5", "#006ef5", "#006af5", "#0066f5", "#0062f5", "#005ef5", "#005af5", "#0056f5", "#0052f5", "#004ef5", "#0049f5", "#0045f5", "#0041f5", "#003df5", "#0039f5", "#0035f5", "#0031f5", "#002df5", "#0029f5", "#0025f5", "#0021f5", "#001df5", "#0019f5", "#0014f5", "#0010f5", "#000cf5", "#0008f5", "#0004f5", "#0000f5", "#0000f5", "#0400f5", "#0800f5", "#0c00f5", "#1000f5", "#1400f5", "#1800f5", "#1d00f5", "#2100f5", "#2500f5", "#2900f5", "#2d00f5", "#3100f5", "#3500f5", "#3900f5", "#3d00f5", "#4100f5", "#4500f5", "#4900f5", "#4e00f5", "#5200f5", "#5600f5", "#5a00f5", "#5e00f5", "#6200f5", "#6600f5", "#6a00f5", "#6e00f5", "#7200f5", "#7600f5", "#7b00f5", "#7f00f5", "#8300f5", "#8700f5", "#8b00f5", "#8f00f5", "#9300f5", "#9700f5", "#9b00f5", "#9f00f5", "#a300f5", "#a700f5", "#ac00f5", "#b000f5", "#b400f5", "#b800f5", "#bc00f5", "#c000f5", "#c400f5", "#c800f5", "#cc00f5", "#d000f5", "#d400f5", "#d800f5", "#dd00f5", "#e100f5", "#e500f5", "#e900f5", "#ed00f5", "#f100f5", "#f500f5"].reverse(), this.colors["color-ramp-purple2green"] = ["#4d2096", "#4a2196", "#472299", "#452399", "#42249c", "#3f259c", "#3b259c", "#39289e", "#35289e", "#342aa1", "#302aa1", "#2e2ca1", "#2c2ea3", "#2d33a3", "#2e38a6", "#303ea6", "#3244a8", "#3248a8", "#344da8", "#3552ab", "#3758ab", "#385dad", "#3962ad", "#3965ad", "#3c6cb0", "#3c70b0", "#3e77b3", "#3e7bb3", "#4180b3", "#4185b5", "#4389b5", "#4690b8", "#4694b8", "#4798b8", "#489eba", "#4aa2ba", "#4ca8bd", "#4eacbd", "#4eb0bd", "#50b6bf", "#50b9bf", "#54c0c2", "#54c2c0", "#56c4bf", "#56c4bb", "#58c4b7", "#5bc7b7", "#5bc7b3", "#5fc9b2", "#5fc9ae", "#60c9ab", "#62ccaa", "#64cca8", "#65cfa7", "#67cfa4", "#67cfa0", "#6bd19f", "#6bd19c", "#6fd49c", "#70d49a", "#70d496", "#74d696", "#74d693", "#77d993", "#77d990", "#7bdb90", "#7bdb8c", "#7ddb8b", "#7ede89", "#81de89", "#82e087", "#84e085", "#85e084", "#8de388", "#92e38b", "#97e68d", "#9ce68f", "#9fe68f", "#a5e892", "#a8e892", "#aeeb96", "#b1eb96", "#b6eb99", "#baed9a", "#beed9c", "#c3f09e", "#c7f0a1", "#caf0a1", "#cff2a4", "#d3f2a7", "#d8f5a9", "#dbf5ab", "#dff7ac", "#e3f7af", "#e5f7af", "#ebfab4", "#edfab4", "#f2fcb8", "#f4fcb8", "#f7fcbb", "#fcffbd", "#feffbf", "#fffebf", "#ffffbf", "#fbfcbb", "#f8fab6", "#f7fab4", "#f3f7af", "#f0f5ab", "#ecf2a7", "#e8f0a3", "#e7f0a1", "#e2ed9c", "#e0eb99", "#dbe894", "#dae892", "#d6e68f", "#d1e38b", "#cde086", "#cade83", "#c8de81", "#c3db7d", "#c0d97a", "#bbd675", "#b7d473", "#b6d470", "#b1d16d", "#adcf6a", "#a8cc66", "#a3c963", "#a1c960", "#9fc75e", "#9ac45a", "#96c257", "#91bf54", "#8ebf52", "#8abd4f", "#87ba4d", "#83b84a", "#80b847", "#7bb545", "#77b342", "#72b03f", "#6fad3c", "#6cad3b", "#68ab38", "#64a836", "#5fa633", "#5ba331", "#5aa32f", "#55a12d", "#519e2b", "#4d9c28", "#499926", "#469925", "#439623", "#3f9421", "#3b911f", "#378f1d", "#348f1b", "#308c19", "#2e8a17", "#2a8716", "#278714", "#248513", "#208211", "#1d8010", "#1b7d0e", "#187d0c", "#147a0b"].reverse(), this.colors["color-ramp-brown2blue"] = ["#9c551f", "#9e5a21", "#9e5a23", "#a15f25", "#a36327", "#a6662a", "#a6682b", "#a86b2d", "#ab6f30", "#ab7232", "#ad7434", "#b07937", "#b37e3a", "#b37f3b", "#b5833e", "#b88640", "#b88942", "#ba8d45", "#bd9048", "#bf944a", "#bf974c", "#c29a50", "#c49e52", "#c49f55", "#c7a457", "#c9a85b", "#ccab5e", "#ccad60", "#cfb263", "#d1b566", "#d1b768", "#d4ba6c", "#d6be70", "#d9c373", "#d9c375", "#dbc778", "#decc7c", "#decc7e", "#e0d082", "#e3d386", "#e6d88a", "#e6da8d", "#e8dc90", "#ebe194", "#ebe396", "#ede59a", "#f0e99e", "#f2eba2", "#f2eda4", "#f5f1a9", "#f7f3ac", "#f7f5af", "#faf9b4", "#fcfbb8", "#ffffbd", "#ffffbf", "#ffffbf", "#fafcbb", "#f7fcb8", "#f3fab6", "#eef7b2", "#ebf7af", "#e6f5ab", "#e1f2a7", "#ddf2a4", "#d9f0a3", "#d3ed9f", "#cfed9c", "#caeb99", "#c4e894", "#c1e894", "#bce691", "#b5e38d", "#afe089", "#aae086", "#a6de85", "#9fdb81", "#9bdb7f", "#94d97b", "#8ed678", "#89d675", "#84d474", "#7ed171", "#78d16f", "#73cf6c", "#6bcc68", "#68cc68", "#64c967", "#62c768", "#5fc76a", "#5cc46a", "#59c26b", "#59c26e", "#56bf6f", "#53bd6f", "#52bd72", "#4eba72", "#4db874", "#4cb877", "#48b577", "#45b379", "#44b37c", "#41b07c", "#40ad7e", "#3ead81", "#3cab82", "#39a883", "#37a685", "#37a688", "#34a389", "#32a18b", "#30a18e", "#2e9e8f", "#2d9c91", "#2b9c94", "#299995", "#279696", "#269296", "#238c94", "#238691", "#228291"].reverse(), this.colors["color-ramp-patrialspectrum"] = ["#f2f1a2", "#f2f19f", "#f2f19e", "#f2f19b", "#f2f199", "#f2f096", "#f5f396", "#f5f393", "#f5f390", "#f5f38e", "#f5f38b", "#f5f389", "#f5f387", "#f5f385", "#f5f382", "#f5f380", "#f5f37d", "#f7f77b", "#f7f779", "#f7f776", "#f7f774", "#f7f771", "#f7f76f", "#f7f76c", "#f7f76b", "#f7f768", "#f7f766", "#f7f763", "#f7f760", "#fafa5f", "#fafa5c", "#fafa5a", "#fafa57", "#fafa55", "#fafa52", "#fafa50", "#fafa4d", "#fafa4b", "#fafa49", "#fafa46", "#fcfc44", "#fcfc41", "#fcfc3f", "#fcfc3c", "#fcfc3a", "#fcfc37", "#fcfc35", "#fcfc32", "#fcfc2f", "#fcfc2d", "#fcfc2a", "#ffff29", "#ffff26", "#ffff24", "#ffff21", "#ffff1f", "#ffff1c", "#ffff19", "#ffff17", "#ffff14", "#ffff12", "#ffff0f", "#ffff0d", "#ffff0a", "#ffff08", "#ffff05", "#ffff03", "#ffff00", "#ffff00", "#fffb00", "#fff700", "#fff200", "#ffee00", "#ffea00", "#ffe600", "#ffe100", "#ffdd00", "#ffd900", "#ffd500", "#ffd000", "#ffcc00", "#ffc800", "#ffc400", "#ffbf00", "#ffbb00", "#ffb700", "#ffb300", "#ffae00", "#ffaa00", "#ffa600", "#ffa200", "#ff9d00", "#ff9900", "#ff9500", "#ff9100", "#ff8c00", "#ff8800", "#ff8400", "#ff8000", "#ff7b00", "#ff7700", "#ff7300", "#ff6f00", "#ff6a00", "#ff6600", "#ff6200", "#ff5e00", "#ff5900", "#ff5500", "#ff5100", "#ff4d00", "#ff4800", "#ff4400", "#ff4000", "#ff3c00", "#ff3700", "#ff3300", "#ff2f00", "#ff2b00", "#ff2600", "#ff2200", "#ff1e00", "#ff1a00", "#ff1500", "#ff1100", "#ff0d00", "#ff0900", "#ff0400", "#ff0000", "#ff0000", "#ff1e00", "#ff3c00", "#ff5900", "#ff7700", "#ff9500", "#ffb300", "#ffd000", "#ffee00", "#f2ff00", "#d4ff00", "#b7ff00", "#99ff00", "#7bfc03", "#5efc03", "#41fc03", "#24fc03", "#07fc03", "#03fc1c", "#03fc39", "#03fc56", "#03fc73", "#03fc90", "#03fcad", "#03fcca", "#03fce7", "#03f4fc", "#03d7fc", "#03bafc", "#039dfc", "#037ffc", "#0362fc", "#0345fc", "#0328fc", "#030bfc", "#1803fc", "#3503fc", "#5203fc", "#6f03fc", "#8c03fc", "#a903fc", "#c603fc", "#e303fc", "#fc03f8", "#fc03db", "#fc03be", "#fc03a1", "#fc0384", "#fc0367", "#fc034a", "#fc032c", "#fc0345", "#fc034a", "#fc034e", "#fc0352", "#fc0356", "#fa0359", "#fa035e", "#fa0362", "#fa0366", "#fa036a", "#fa036e", "#fa0573", "#fa0577", "#fa057b", "#f7057e", "#f70582", "#f70586", "#f7058a", "#f7058e", "#f70592", "#f70596", "#f7059a", "#f5059d", "#f505a1", "#f505a5", "#f505a9", "#f505ad", "#f505b1", "#f505b5", "#f505b9", "#f505bd", "#f208bf", "#f208c3", "#f208c7", "#f208cb", "#f208cf", "#f208d3", "#f208d7", "#f208db", "#f208de", "#f008e1", "#f008e4", "#f008e8", "#f008ec", "#f008f0", "#ec08f0", "#e808f0", "#e408f0", "#de07ed", "#da07ed", "#d607ed", "#d207ed", "#ce07ed", "#cb07ed", "#c707ed", "#c307ed", "#bf07ed", "#bb07ed", "#b707ed", "#b407ed", "#b007ed", "#b007ed", "#ac07ed", "#a707eb", "#a307eb", "#9d07e8", "#9907e8", "#9407e6", "#9107e6", "#8b07e3", "#8707e3", "#8207e0", "#7e07e0", "#7a07de", "#7607de", "#7209db", "#6e09db", "#6a09d9", "#6609d9", "#6108d6", "#5e08d6", "#5a08d4", "#5608d4", "#5208d1", "#4e08d1", "#4a08cf", "#4708cf", "#4308cc", "#4008cc", "#3b08c9", "#3808c9", "#3408c7", "#3108c7", "#2d08c4", "#2a08c4", "#2708c2", "#2408c2", "#2007bf", "#1d07bf", "#1a07bd", "#1707bd", "#1307ba", "#1007ba", "#0d07b8", "#0a07b8", "#0707b5", "#070ab5", "#070db3", "#0710b3", "#0712b0", "#0715b0", "#0717ad", "#071aad", "#071dad"].reverse(),
            this.colors["color-ramp-red2blue"] = ["#c44439", "#c4483a", "#c74e3e", "#c75240", "#c95541", "#c95942", "#cc5e46", "#cc6247", "#cc664a", "#cf6b4c", "#cf6d4c", "#d17250", "#d17551", "#d47b55", "#d47f57", "#d48259", "#d6855a", "#d6895c", "#d98e5f", "#d99262", "#db9664", "#db9967", "#db9b67", "#dea06a", "#dea46d", "#e0a870", "#e0ab72", "#e3b076", "#e3b378", "#e3b578", "#e6ba7c", "#e6bd7e", "#e8c182", "#e8c384", "#ebc888", "#ebca88", "#ebcc8a", "#edd18e", "#edd391", "#f0d895", "#f0da98", "#f2dd99", "#f2df9b", "#f2e19e", "#f5e6a1", "#f5e8a4", "#f7eba8", "#f7eca8", "#faf1ad", "#faf2af", "#faf4b1", "#fcf7b6", "#fcf9b8", "#fffdba", "#fffebd", "#ffffbf", "#ffffbf", "#fdffbd", "#fbffbd", "#f5fcb8", "#f3fcb6", "#f0fcb6", "#edfcb3", "#e8faaf", "#e6faaf", "#e3faad", "#e0faad", "#daf7a8", "#d6f7a6", "#d4f7a6", "#d0f7a3", "#caf59f", "#c7f59f", "#c3f59d", "#bff59b", "#baf299", "#b5f296", "#b0f294", "#adf294", "#a6f090", "#a1f08d", "#9ef08d", "#99f08b", "#93ed8a", "#8eed87", "#88ed85", "#85ed85", "#81eb85", "#7feb86", "#7feb8a", "#7ceb8b", "#79e88c", "#79e88f", "#76e891", "#74e893", "#73e695", "#71e698", "#6ee69a", "#6ee69e", "#6ce6a1", "#6be3a3", "#68e3a6", "#66e3a9", "#66e3ad", "#62e0ae", "#61e0b1", "#61e0b6", "#5ee0b9", "#5bdebb", "#5bdec0", "#59dec3", "#56dec7", "#55dbc9", "#53dbcd", "#53dbd2", "#51dbd6", "#4ed9d9", "#4ed4d9", "#4cd0d9", "#4acbd9", "#49c3d6", "#46bed6", "#45b9d6", "#45b4d6", "#42add4", "#3fa7d4", "#3fa2d4", "#3e9dd4", "#3a95d1", "#3a90d1", "#398ad1", "#3985d1", "#367dcf", "#3477cf", "#3472cf", "#326bcf", "#3065cf", "#3060cf"].reverse(), this.colors["color-ramp-conditionnumber"] = ["#006100", "#026300", "#036600", "#056900", "#076b00", "#096e00", "#0b7000", "#0d7300", "#107500", "#127800", "#147a00", "#177d00", "#1a8000", "#1c8200", "#1f8500", "#228700", "#238a00", "#258c00", "#298f00", "#2c9100", "#2f9400", "#329600", "#369900", "#399c00", "#3d9e00", "#40a100", "#44a300", "#48a600", "#4ca800", "#50ab00", "#54ad00", "#58b000", "#5cb300", "#61b500", "#65b800", "#69ba00", "#6ebd00", "#73bf00", "#78c200", "#7cc400", "#81c700", "#86c900", "#8bcc00", "#91cf00", "#96d100", "#9bd400", "#a1d600", "#a6d900", "#a8db00", "#aede00", "#b3e000", "#b9e300", "#c0e600", "#c5e800", "#cceb00", "#d1ed00", "#d8f000", "#def200", "#e5f500", "#ebf700", "#f2fa00", "#f8fc00", "#ffff00", "#ffff00", "#fffb00", "#fff700", "#fff200", "#ffee00", "#ffea00", "#ffe600", "#ffe100", "#ffdd00", "#ffd900", "#ffd500", "#ffd000", "#ffcc00", "#ffc800", "#ffc400", "#ffbf00", "#ffbb00", "#ffb700", "#ffb300", "#ffae00", "#ffaa00", "#ffa600", "#ffa200", "#ff9d00", "#ff9900", "#ff9500", "#ff9100", "#ff8c00", "#ff8800", "#ff8400", "#ff8000", "#ff7b00", "#ff7700", "#ff7300", "#ff6f00", "#ff6a00", "#ff6600", "#ff6200", "#ff5e00", "#ff5900", "#ff5500", "#ff5100", "#ff4d00", "#ff4800", "#ff4400", "#ff4000", "#ff3c00", "#ff3700", "#ff3300", "#ff2f00", "#ff2b00", "#ff2600", "#ff2200"].reverse(), this.colors["color-ramp-precipitation"] = ["#c2523c", "#c4543a", "#c45539", "#c7583a", "#c75937", "#c95b36", "#cc5d35", "#cc5e33", "#cf6234", "#cf6332", "#d16630", "#d4682f", "#d46a2d", "#d66e2d", "#d66f2b", "#d97229", "#db7528", "#db7725", "#de7c25", "#de7e24", "#e08121", "#e38520", "#e3871d", "#e68c1e", "#e68e1c", "#e89219", "#eb9617", "#eb9915", "#ed9e15", "#eda113", "#eda113", "#eda413", "#f0a911", "#f0ad11", "#f0b00e", "#f2b50e", "#f2b90e", "#f5bf0c", "#f5c30c", "#f5c60a", "#f7cb0a", "#f7cf08", "#f7d308", "#fada08", "#fadd05", "#fae105", "#fce703", "#fceb03", "#fff203", "#fff700", "#fffb00", "#ffff00", "#ffff00", "#f6ff00", "#ebfc00", "#e3fc00", "#d9fa00", "#d0fa00", "#c6f700", "#bdf700", "#b4f500", "#acf500", "#a1f200", "#99f200", "#90f000", "#88f000", "#7eed00", "#77ed00", "#6eeb00", "#66eb00", "#5de800", "#55e800", "#4de600", "#45e600", "#3de300", "#35e300", "#2de000", "#25e000", "#1ede00", "#16de00", "#0fdb00", "#07db00", "#00db00", "#00db00", "#03d90a", "#04d612", "#04d419", "#07d122", "#08cf29", "#0acc31", "#0ac937", "#0cc93e", "#0ec746", "#0fc44c", "#0fc251", "#11bf57", "#13bd5c", "#14ba62", "#14b866", "#16b56b", "#17b36f", "#19b074", "#18ad77", "#19ab7a", "#1ba87e", "#1ca883", "#1ca686", "#1da388", "#1ea18b", "#209e8d", "#1f9c90", "#209991", "#20998f", "#209991", "#1e9690", "#1e9692", "#1e9694", "#1e9696", "#1c9294", "#1c9094", "#1c8e94", "#1c8c94", "#1a8791", "#1a8591", "#1a8391", "#187f8f", "#187d8f", "#187b8f", "#18798f", "#17758c", "#17738c", "#17718c", "#176f8c", "#156b8a", "#15698a", "#15678a", "#136287", "#136087", "#135e87", "#135c87", "#115985", "#115785", "#115585", "#115385", "#104f82", "#104d82", "#104b82", "#104982", "#0e4580", "#0e4380", "#0e4180", "#0c3d7d", "#0c3b7d", "#0c397d", "#0c377d", "#0b347a", "#0b327a", "#0b307a", "#0b2e7a", "#0b2c7a"].reverse(), this.colors["color-ramp-pink2yellowgreen"] = ["#9e1e71", "#9e1e75", "#a1207d", "#a12081", "#a12286", "#a1228a", "#a32490", "#a32494", "#a32498", "#a626a0", "#a626a4", "#a428a6", "#a228a8", "#9e2aa8", "#992aa8", "#952aa8", "#942cab", "#902cab", "#8c2eab", "#892fad", "#8530ad", "#8130ad", "#8033b0", "#7c33b0", "#7833b0", "#7434b0", "#7235b3", "#6f37b3", "#6b37b3", "#693ab5", "#653ab5", "#613ab5", "#5e3cb5", "#5b3db8", "#593fb8", "#553fb8", "#5341ba", "#4f41ba", "#4b41ba", "#4a44bd", "#4644bd", "#4648bd", "#464cbd", "#4953bf", "#4956bf", "#495abf", "#4b61c2", "#4b65c2", "#4e6bc2", "#4e6fc2", "#5175c4", "#5179c4", "#517dc4", "#5484c7", "#5487c7", "#568dc7", "#5792c9", "#5896c9", "#589ac9", "#589ec9", "#5ca5cc", "#5ca9cc", "#5eadcc", "#5fb3cf", "#61b7cf", "#61bbcf", "#64c1d1", "#64c4d1", "#64c8d1", "#66ccd1", "#68d2d4", "#6ad4d2", "#6ad4cf", "#6dd6cd", "#6dd6ca", "#6dd6c6", "#70d6c3", "#71d9c3", "#73d9bf", "#73d9bc", "#77dbbb", "#77dbb8", "#77dbb4", "#7adeb4", "#7adeb1", "#7cdeaf", "#7cdeac", "#7fe0ab", "#7fe0a8", "#7fe0a4", "#84e3a5", "#84e3a2", "#86e3a0", "#86e39d", "#8ae69e", "#8ae69b", "#8ae698", "#8ee898", "#8ee895", "#90e894", "#92eb93", "#96eb94", "#99eb94", "#9ceb94", "#a1ed97", "#a4ed97", "#a9ed9a", "#aef09c", "#b3f09e", "#b5f09e", "#bcf2a2", "#bef2a2", "#c1f2a2", "#c5f2a4", "#caf5a6", "#cef5a9", "#d0f5a9", "#d5f7ac", "#d8f7ac", "#daf7ac", "#def7af", "#e3fab1", "#e6fab4", "#e9fab4", "#edfcb8", "#effcb8", "#f2fcb8", "#f7ffbd", "#faffbd", "#fcffbf", "#feffbf", "#fffebf", "#ffffbf", "#fcfcbb", "#fafab9", "#f6f7b4", "#f4f5b3", "#f1f2af", "#eff0aa", "#eceda8", "#e9eba4", "#e6e8a2", "#e4e69f", "#e1e39a", "#dee098", "#dcde95", "#d7db93", "#d5d98f", "#d2d68b", "#d0d48a", "#cdd186", "#cacf84", "#c7cc81", "#c4c97d", "#c2c77b", "#bfc478", "#bcc277", "#b9bf73", "#b7bd6f", "#b4ba6d", "#b2b86b", "#adb567", "#abb366", "#a8b063", "#a5ad61", "#a3ab5e", "#a0a85b", "#9da65a", "#9aa356", "#98a155", "#959e52", "#939c50", "#8f994e", "#8c964b", "#8a944a", "#879147", "#858f44", "#818c43", "#7f8a41", "#7c8740", "#7a853d", "#77823b", "#75803a", "#717d37", "#6f7a36", "#6d7834", "#6a7531", "#687330", "#65702e", "#636e2d"].reverse(), this.colors["color-ramp-distance"] = ["#ffc800", "#ffd000", "#ffd900", "#ffe100", "#ffea00", "#fff200", "#fffb00", "#fbff00", "#f2ff00", "#eaff00", "#e1ff00", "#d9ff00", "#d0ff00", "#c8ff00", "#bfff00", "#b7ff00", "#aeff00", "#a6ff00", "#9dff00", "#95ff00", "#8cff00", "#84ff00", "#7bff00", "#73ff00", "#6aff00", "#62ff00", "#59ff00", "#51ff00", "#48ff00", "#40ff00", "#37ff00", "#2fff00", "#26ff00", "#1eff00", "#15ff00", "#0dff00", "#04ff00", "#00ff04", "#00ff0d", "#00ff15", "#00ff1e", "#00ff26", "#00ff2f", "#00ff37", "#00ff40", "#00ff48", "#00ff51", "#00ff59", "#00ff62", "#00ff6a", "#00ff73", "#00ff7b", "#00ff84", "#00ff8c", "#00ff95", "#00ff9d", "#00ffa6", "#00ffae", "#00ffb7", "#00ffbf", "#00ffc8", "#00ffd0", "#00ffd9", "#00ffe1", "#00ffea", "#00fff2", "#00fffb", "#00fbff", "#00f2ff", "#00eaff", "#00e1ff", "#00d9ff", "#00d0ff", "#00c8ff", "#00bfff", "#00b7ff", "#00aeff", "#00a6ff", "#009dff", "#0095ff", "#008cff", "#0084ff", "#007bff", "#0073ff", "#006aff", "#0062ff", "#0059ff", "#0051ff", "#0048ff", "#0040ff", "#0037ff", "#002fff", "#0026ff", "#001eff", "#0015ff", "#000dff", "#0004ff", "#0400ff"].reverse(), this.colors["color-ramp-green2blue"] = ["#20cc10", "#1dcc10", "#19cc10", "#17cf10", "#12cf0f", "#0fcf0f", "#0fcf12", "#0fd115", "#0fd118", "#0fd11c", "#0fd11f", "#0cd420", "#0cd424", "#0cd427", "#0cd42a", "#0dd62e", "#0dd632", "#0dd635", "#0dd638", "#0bd93b", "#0bd93f", "#0bd942", "#0bd945", "#0bdb4a", "#0bdb4d", "#0bdb50", "#09db52", "#09de57", "#09de5a", "#09de5e", "#09de62", "#09e066", "#09e06a", "#07e06c", "#07e070", "#07e074", "#07e379", "#07e37c", "#07e380", "#07e384", "#07e689", "#05e68c", "#05e690", "#05e693", "#05e898", "#05e89c", "#05e8a0", "#05e8a4", "#03eba9", "#03ebad", "#03ebb1", "#03ebb5", "#03edba", "#03edbe", "#03edc2", "#00edc6", "#00f0cc", "#00f0d0", "#00f0d4", "#00f0d8", "#00f2de", "#00f2e2", "#00f2e6", "#00f2ea", "#00f2ee", "#00f2f2", "#00f2f2", "#00eef2", "#00eaf2", "#00e6f2", "#00e0f0", "#00dcf0", "#00d8f0", "#00d4f0", "#00d0f0", "#00ccf0", "#00c8f0", "#00c4f0", "#00beed", "#00baed", "#03b6ed", "#03b2ed", "#03afed", "#03abed", "#03a7ed", "#03a1eb", "#039eeb", "#039aeb", "#0396eb", "#0392eb", "#038eeb", "#038aeb", "#0386eb", "#0381e8", "#037de8", "#0379e8", "#0375e8", "#0372e8", "#036ee8", "#036ae8", "#0366e8", "#0361e6", "#035ee6", "#035ae6", "#0356e6", "#0352e6", "#034ee6", "#034be6", "#0346e3", "#0342e3", "#033ee3", "#033be3", "#0337e3", "#0333e3", "#0330e3", "#032ce3", "#0328e3", "#0324e3", "#0321e3"].reverse(), this.colors["color-ramp-red2green1"] = ["#ba1414", "#ba1917", "#bd1e18", "#bd231b", "#bf271c", "#bf2c1f", "#c23121", "#c23623", "#c23a25", "#c43c27", "#c4412a", "#c7462c", "#c74a2e", "#c94f30", "#c95332", "#c95734", "#cc5c37", "#cc6039", "#cf663c", "#cf693e", "#d16e41", "#d17243", "#d17645", "#d47c48", "#d47f4a", "#d6824d", "#d6854f", "#d98b53", "#d98e54", "#d99157", "#db965a", "#db995c", "#de9f60", "#dea262", "#e0a765", "#e0a967", "#e3af6b", "#e3b26d", "#e3b56f", "#e6ba73", "#e6bd75", "#e8bf79", "#e8c27b", "#ebc77f", "#ebc981", "#ebcc84", "#edd087", "#edd28a", "#f0d78d", "#f0da90", "#f2de94", "#f2e096", "#f2e299", "#f5e69d", "#f5e89f", "#f7eca3", "#f7eea6", "#faf1aa", "#faf2ad", "#faf4af", "#fcf7b3", "#fcf8b6", "#fffdba", "#fffebd", "#ffffbf", "#ffffbf", "#fbfcbb", "#f8fab6", "#f7fab4", "#f2f7af", "#eff5ab", "#ebf2a7", "#e7f0a3", "#e3ed9f", "#e2ed9c", "#dfeb99", "#dae894", "#d6e691", "#d2e38d", "#cde089", "#cbe086", "#c7de83", "#c2db7f", "#bed97b", "#bad678", "#b6d474", "#b4d473", "#afd16f", "#abcf6c", "#a6cc68", "#a1c964", "#9dc762", "#9cc75f", "#97c45c", "#93c259", "#8ebf56", "#8abd53", "#85ba50", "#82ba4e", "#7eb84c", "#79b548", "#75b345", "#70b043", "#6bad40", "#69ad3e", "#64ab3c", "#60a839", "#5ca637", "#57a334", "#53a132", "#52a130", "#4e9e2e", "#499c2b", "#459929", "#419627", "#3d9425", "#3a9423", "#369122"].reverse(), this.colors["color-ramp-red2green"] = ["#f50000", "#f50400", "#f50800", "#f50c00", "#f51000", "#f51400", "#f51900", "#f51d00", "#f52100", "#f52500", "#f52900", "#f52d00", "#f53100", "#f53500", "#f53900", "#f53d00", "#f54100", "#f54500", "#f54a00", "#f54e00", "#f55200", "#f55600", "#f55a00", "#f55e00", "#f56200", "#f56600", "#f56a00", "#f56e00", "#f57200", "#f57600", "#f57b00", "#f57f00", "#f58300", "#f58700", "#f58b00", "#f58f00", "#f59300", "#f59700", "#f59b00", "#f59f00", "#f5a300", "#f5a700", "#f5ac00", "#f5b000", "#f5b400", "#f5b800", "#f5bc00", "#f5c000", "#f5c400", "#f5c800", "#f5cc00", "#f5d000", "#f5d400", "#f5d800", "#f5dd00", "#f5e100", "#f5e500", "#f5e900", "#f5ed00", "#f5f100", "#f5f500", "#f5f500", "#f1f500", "#edf500", "#e9f500", "#e5f500", "#e1f500", "#dcf500", "#d8f500", "#d4f500", "#d0f500", "#ccf500", "#c8f500", "#c4f500", "#c0f500", "#bcf500", "#b8f500", "#b4f500", "#b0f500", "#acf500", "#a7f500", "#a3f500", "#9ff500", "#9bf500", "#97f500", "#93f500", "#8ff500", "#8bf500", "#87f500", "#83f500", "#7ff500", "#7bf500", "#76f500", "#72f500", "#6ef500", "#6af500", "#66f500", "#62f500", "#5ef500", "#5af500", "#56f500", "#52f500", "#4ef500", "#4af500", "#45f500", "#41f500", "#3df500", "#39f500", "#35f500", "#31f500", "#2df500", "#29f500", "#25f500", "#21f500", "#1df500", "#19f500", "#14f500", "#10f500", "#0cf500", "#08f500", "#04f500", "#00f500"].reverse(), this.colors["color-ramp-patrialspectrum2"] = ["#734d2a", "#754f2b", "#78502b", "#7a532c", "#7d552d", "#80562d", "#82582d", "#855a2e", "#875b2e", "#8a5e2f", "#8c5f30", "#8f612f", "#916230", "#946431", "#966530", "#996931", "#9c6b32", "#9e6b31", "#a16d32", "#a36e31", "#a67031", "#a87332", "#ab7432", "#ad7632", "#b07833", "#b37932", "#b57a32", "#b87e33", "#ba7f32", "#bd8133", "#bf8334", "#c28432", "#c48533", "#c78734", "#c98834", "#c98834", "#c98c36", "#cc8f39", "#cc923b", "#cf953e", "#cf9840", "#d19b43", "#d19e45", "#d4a148", "#d4a44a", "#d4a54c", "#d6a94f", "#d6aa51", "#d9af54", "#d9b257", "#dbb45a", "#dbb75c", "#dbb85e", "#debd62", "#debd64", "#e0c267", "#e0c269", "#e3c76d", "#e3c86f", "#e6cd73", "#e6cf75", "#e6d078", "#e8d47b", "#e8d47e", "#ebd981", "#ebda84", "#edde87", "#edde8a", "#f0e38d", "#f0e390", "#f0e593", "#f2e796", "#f2e999", "#f5ee9d", "#f5ee9f", "#f7f1a3", "#f7f2a6", "#f7f3a8", "#faf6ad", "#faf7af", "#fcfab3", "#fcfbb6", "#fffeba", "#ffffbd", "#ffffbf", "#ffffbf", "#f8fcbb", "#f3fcb8", "#ecfab6", "#e5f7b2", "#dff7af", "#d7f5ab", "#d2f5a9", "#caf2a7", "#c2f0a3", "#bbf0a1", "#b2ed9c", "#a9eb99", "#a4eb99", "#9ae894", "#91e691", "#8fe694", "#8be397", "#89e09a", "#86e09e", "#83dea1", "#81dea6", "#7ddba9", "#7bd9ad", "#7ad9b3", "#75d6b6", "#73d4ba", "#70d4c0", "#6fd1c4", "#6ccfc8", "#6acfcf", "#66c5cc", "#64becc", "#63b5c9", "#5fabc7", "#5ea4c7", "#5a9ac4", "#5790c2", "#5789c2", "#547fbf", "#5275bd", "#4f6dbd", "#4d62ba", "#4c5ab8", "#4a51b8", "#4646b5", "#4c45b5", "#5142b3", "#5741b0", "#5d3fb0", "#5c3fb0", "#5a3cad", "#5b3cab", "#5b39a8", "#5a37a6", "#5a36a3", "#5b34a3", "#5b32a1", "#5b319e", "#5a2e9c", "#5a2c99", "#592a96", "#592994", "#592791", "#58258f", "#58248c", "#58238a", "#572087", "#592087", "#591f85", "#581d82", "#581c80", "#571a7d", "#56187a", "#561878", "#551675", "#551573", "#541370", "#54136e", "#53116b", "#54106b", "#541069", "#530e66", "#520d63", "#520d61"].reverse(), this.colors["color-ramp-patrialspectrum1"] = ["#872626", "#8a2725", "#8c2926", "#8f2a25", "#912d26", "#942d25", "#962f26", "#993025", "#9c3224", "#9e3525", "#a13623", "#a33924", "#a63b23", "#a83c24", "#ab3e22", "#ad3f21", "#b04221", "#b34520", "#b54821", "#b84a1f", "#ba4e1f", "#bd511e", "#bf501c", "#c2541d", "#c4571c", "#c75b1c", "#c95d1a", "#cc611a", "#cf6519", "#d16817", "#d46917", "#d66c15", "#d97115", "#db7414", "#de7914", "#e07c12", "#e38110", "#e68610", "#e8860e", "#eb8b0e", "#ed8f0c", "#f0950c", "#f0950c", "#f0960e", "#f09a11", "#f09b13", "#f09c16", "#f0a118", "#f2a31b", "#f2a41d", "#f2a81f", "#f2a922", "#f2ad24", "#f2ae27", "#f2af29", "#f2b32c", "#f2b42e", "#f2b530", "#f5bb34", "#f5bc36", "#f5bd39", "#f5c03b", "#f5c13d", "#f5c23f", "#f5c542", "#f5c644", "#f5c747", "#f5ca49", "#f7cc4d", "#f7d04f", "#f7d051", "#f7d154", "#f7d456", "#f7d559", "#f7d55b", "#f7d85e", "#f7d960", "#f7d963", "#fadf67", "#fadf69", "#fae06c", "#fae36e", "#fae371", "#fae373", "#fae676", "#fae678", "#fae77b", "#fae97d", "#fcec80", "#fcee83", "#fcee85", "#fcef88", "#fcf18a", "#fcf18d", "#fcf18f", "#fcf392", "#fcf394", "#fcf497", "#fff89c", "#fff99e", "#fff9a1", "#fffaa3", "#fffba6", "#fffba8", "#fffcab", "#fffcad", "#fffeb0", "#fffeb2", "#fffeb5", "#ffffb8", "#ffffba", "#ffffbd", "#ffffbf", "#ffffbf", "#f9fcbb", "#f5fcbb", "#f0fab6", "#ecfab6", "#e6f7b2", "#e1f7af", "#dcf5ae", "#d7f5ab", "#d1f2a9", "#cdf2a7", "#c7f0a6", "#c2f0a3", "#baed9f", "#b6ed9f", "#afeb9b", "#abeb9b", "#a3e897", "#9de894", "#97e693", "#91e691", "#8fe394", "#8de395", "#8be098", "#89e09a", "#85de9b", "#85dea0", "#81dba0", "#81dba5", "#7ed9a7", "#7bd9aa", "#7ad6ac", "#78d6b0", "#77d4b3", "#74d4b7", "#73d1b9", "#71d1be", "#6ecfc0", "#6ecfc5", "#6accc7", "#6acccc", "#66c4c9", "#64bfc9", "#63b8c7", "#62b3c7", "#60abc4", "#5ea5c4", "#5d9fc2", "#5b99c2", "#5890bf", "#588bbf", "#5584bd", "#557fbd", "#5276ba", "#5070ba", "#4f6ab8", "#4d63b8", "#4c5cb5", "#4b55b5", "#4b50b5", "#4b50b5", "#484db3", "#464ab0", "#4347ad", "#4143ab", "#4042a8", "#3d3fa6", "#3b3ba3", "#3a3aa1", "#37379e", "#37359c", "#363499", "#353196", "#333094", "#322f91", "#312c8f", "#2f2a8c", "#2e298a", "#2e2787", "#2b2585", "#2c2482", "#2a2380", "#28207d", "#27207a"].reverse(), this.colors["color-ramp-slope"] = ["#38a800", "#3cab00", "#3fad00", "#43b000", "#46b000", "#4bb300", "#4eb500", "#53b800", "#57ba00", "#5bbd00", "#60bf00", "#63bf00", "#67c200", "#6cc400", "#71c700", "#75c900", "#7acc00", "#80cf00", "#83cf00", "#88d100", "#8dd400", "#92d600", "#98d900", "#9ddb00", "#a1db00", "#a7de00", "#ace000", "#b2e300", "#b8e600", "#bde800", "#c4eb00", "#c8eb00", "#cded00", "#d4f000", "#daf200", "#e1f500", "#e7f700", "#eefa00", "#f2fa00", "#f8fc00", "#ffff00", "#ffff00", "#fffb00", "#fff700", "#fff200", "#ffee00", "#ffea00", "#ffe600", "#ffe100", "#ffdd00", "#ffd900", "#ffd500", "#ffd000", "#ffcc00", "#ffc800", "#ffc400", "#ffbf00", "#ffbb00", "#ffb700", "#ffb300", "#ffae00", "#ffaa00", "#ffa600", "#ffa200", "#ff9d00", "#ff9900", "#ff9500", "#ff9100", "#ff8c00", "#ff8800", "#ff8400", "#ff8000", "#ff7b00", "#ff7700", "#ff7300", "#ff6f00", "#ff6a00", "#ff6600", "#ff6200", "#ff5e00", "#ff5900", "#ff5500", "#ff5100", "#ff4d00", "#ff4800", "#ff4400", "#ff4000", "#ff3c00", "#ff3700", "#ff3300", "#ff2f00", "#ff2b00", "#ff2600", "#ff2200", "#ff1e00", "#ff1a00", "#ff1500", "#ff1100", "#ff0d00", "#ff0900", "#ff0400", "#ff0000"].reverse(), this.colors["color-ramp-prediction"] = ["#2892c7", "#2895c7", "#2897c7", "#289ac7", "#2b9fc9", "#2ba1c9", "#2ba4c9", "#2ba7c9", "#2ba9c9", "#2bacc9", "#2bafc9", "#2db4cc", "#2db7cc", "#2db9cc", "#2dbccc", "#2dbfcc", "#2dc1cc", "#30c7cf", "#30cacf", "#30cccf", "#30cfcf", "#30cfcc", "#30cfca", "#30cfc7", "#32d1c6", "#32d1c4", "#32d1c1", "#32d1be", "#32d1bc", "#32d1b9", "#32d1b6", "#35d4b7", "#35d4b4", "#35d4b2", "#35d4af", "#35d4ac", "#35d4aa", "#37d6a9", "#37d6a6", "#37d6a4", "#37d6a1", "#37d69e", "#37d69c", "#37d699", "#3bd99a", "#3bd997", "#3bd994", "#3bd992", "#3bd98f", "#3bd98c", "#3bd98a", "#3ddb89", "#3ddb87", "#3ddb84", "#3ddb81", "#3ddb7f", "#3ddb7c", "#3ddb7a", "#40de7a", "#40de78", "#40de75", "#40de72", "#40de70", "#40de6d", "#43e06d", "#43e06a", "#43e067", "#43e065", "#43e062", "#43e060", "#43e05d", "#46e35e", "#46e35b", "#46e359", "#46e356", "#46e353", "#46e351", "#46e34e", "#4ae64f", "#4ae64d", "#4ae64a", "#4de64a", "#4fe64a", "#52e64a", "#57e84c", "#59e84c", "#5ce84c", "#5fe84c", "#61e84c", "#64e84c", "#66e84c", "#6deb50", "#6feb50", "#72eb50", "#74eb50", "#77eb50", "#79eb50", "#7ceb50", "#81ed53", "#84ed53", "#86ed53", "#89ed53", "#8bed53", "#8eed53", "#90ed53", "#97f057", "#99f057", "#9cf057", "#9ef057", "#a1f057", "#a3f057", "#a8f259", "#abf259", "#adf259", "#b0f259", "#b2f259", "#b5f259", "#b7f259", "#bdf55d", "#c0f55d", "#c2f55d", "#c5f55d", "#c7f55d", "#caf55d", "#cdf55d", "#d1f760", "#d4f760", "#d6f760", "#d9f760", "#dbf760", "#def760", "#e4fa64", "#e6fa64", "#e9fa64", "#ebfa64", "#eefa64", "#f0fa64", "#f3fa64", "#f5fa64", "#f8fa64", "#fafa64", "#fafa64", "#f3fa64", "#ebfa61", "#e3fa61", "#dbfa61", "#d3fa5f", "#ccfa5f", "#c1f75e", "#b9f75b", "#b1f75b", "#a9f75b", "#a0f759", "#98f759", "#90f759", "#86f756", "#7ef756", "#76f756", "#6df754", "#65f754", "#5cf554", "#51f551", "#51f559", "#51f561", "#4ff568", "#4ff570", "#4ff578", "#4cf57f", "#4cf587", "#4cf590", "#49f596", "#49f59f", "#49f5a8", "#46f2ad", "#46f2b6", "#46f2be", "#43f2c6", "#43f2cf", "#43f2d8", "#41f2e0", "#41f2e9", "#41f2f2", "#3fe9f2", "#3fe0f2", "#3fd7f2", "#3dcef2", "#3cc3f0", "#3cbaf0", "#39b0f0", "#39a7f0", "#399ef0", "#3894f0", "#388bf0", "#3580f0", "#3576f0", "#356df0", "#3362f0", "#3359f0", "#324eed", "#2f42ed", "#2f39ed", "#2f2fed", "#362ded", "#402ded", "#492ded", "#522bed", "#5b2bed", "#652bed", "#6d28ed", "#7728ed", "#8128ed", "#8826eb", "#9226eb", "#9c26eb", "#a523eb", "#af23eb", "#b923eb", "#c321eb", "#cd21eb", "#d721eb", "#e11eeb", "#eb1eeb", "#eb1ee1", "#eb1dd6", "#e81cc9", "#e81cbf", "#e819b4", "#e819aa", "#e819a0", "#e81794", "#e8178a", "#e8177f", "#e81574", "#e81569", "#e8155f", "#e81252", "#e81248", "#e8123d", "#e81031", "#e81026", "#e8101b", "#e81010"].reverse(), this.colors["color-ramp-surface"] = ["#709959", "#749c5b", "#769e5c", "#7aa15f", "#7ba15f", "#7ea360", "#82a662", "#85a865", "#89ab67", "#8cad68", "#8fb06a", "#91b06c", "#95b36e", "#98b56f", "#9bb871", "#9fba73", "#a3bd75", "#a6bf76", "#a7bf76", "#abc27a", "#aec47c", "#b2c77e", "#b5c97f", "#b9cc81", "#becf84", "#bfcf84", "#c2d186", "#c6d488", "#cad68b", "#ced98d", "#d1db8f", "#d5de91", "#d6de92", "#dae094", "#dee396", "#e2e698", "#e5e89c", "#eaeb9e", "#eded9f", "#edec9f", "#f0eda1", "#f2eea2", "#f2eea2", "#f2ec9f", "#f2eb9f", "#f2ea9e", "#f2e89b", "#f2e699", "#f2e599", "#f2e396", "#f2e194", "#f2df91", "#f2dd91", "#f2db8e", "#f2d98c", "#f2d78c", "#f2d48a", "#f2d288", "#f2cf85", "#f2ce85", "#f2ce85", "#f0ca84", "#f0c987", "#edc585", "#ebc284", "#e8be84", "#e8bd84", "#e6bb85", "#e3b784", "#e0b382", "#e0b284", "#deaf83", "#dbab81", "#d9a982", "#d9a882", "#d6a683", "#d4a382", "#d19f80", "#d19f81", "#cf9c80", "#cc987e", "#c9967f", "#c9957f", "#c7947f", "#c4907d", "#c28e7c", "#c28c7c", "#c28c7c", "#c2947e", "#c49b80", "#c4a181", "#c7aa83", "#c7b085", "#c9b787", "#c9bd88", "#c9c388", "#cccb8d", "#c8cc8d", "#c6cf90", "#c1cf93", "#bed194", "#bad197", "#b5d197", "#b3d49b", "#afd49b", "#add69f", "#a9d69f", "#a6d6a0", "#a3d9a3", "#a5d9a9", "#a7dbae", "#a8dbb4", "#addebd", "#addec1", "#afdec6", "#b1e0cb", "#b3e0d0", "#b6e3d7", "#b8e3db", "#bbe6e2", "#bde6e5", "#bde3e6", "#c1e2e8", "#c3dfe8", "#c5dfeb", "#c8ddeb", "#cadced", "#ccdaed", "#ccd7ed", "#d1d9f0", "#d1d7f0", "#d5d8f2", "#d5d5f2", "#d9d7f2", "#dedaf5", "#e2dcf5", "#e8e1f7", "#eae1f7", "#f0e6fa", "#f2e6fa", "#f4e8fa", "#f7eafc", "#f9edfc", "#fef0ff", "#fff2ff", "#fff2fe"].reverse(), this.colors["color-ramp-spectrumfull"] = ["#ff0000", "#ff0400", "#ff0900", "#ff0d00", "#ff1100", "#ff1500", "#ff1a00", "#ff1e00", "#ff2200", "#ff2600", "#ff2b00", "#ff2f00", "#ff3300", "#ff3700", "#ff3c00", "#ff4000", "#ff4400", "#ff4800", "#ff4d00", "#ff5100", "#ff5500", "#ff5900", "#ff5e00", "#ff6200", "#ff6600", "#ff6a00", "#ff6f00", "#ff7300", "#ff7700", "#ff7b00", "#ff8000", "#ff8400", "#ff8800", "#ff8c00", "#ff9100", "#ff9500", "#ff9900", "#ff9d00", "#ffa200", "#ffa600", "#ffaa00", "#ffae00", "#ffb300", "#ffb700", "#ffbb00", "#ffbf00", "#ffc400", "#ffc800", "#ffcc00", "#ffd000", "#ffd500", "#ffd900", "#ffdd00", "#ffe100", "#ffe600", "#ffea00", "#ffee00", "#fff200", "#fff700", "#fffb00", "#ffff00", "#ffff00", "#f6ff00", "#eeff00", "#e5ff00", "#ddff00", "#d4ff00", "#ccff00", "#c4ff00", "#bbff00", "#b3ff00", "#aaff00", "#a2ff00", "#99ff00", "#91ff00", "#88ff00", "#80ff00", "#77ff00", "#6fff00", "#66ff00", "#5eff00", "#55ff00", "#4dff00", "#44ff00", "#3cff00", "#33ff00", "#2bff00", "#22ff00", "#1aff00", "#11ff00", "#09ff00", "#00ff00", "#00ff08", "#00ff11", "#00ff1a", "#00ff22", "#00ff2a", "#00ff33", "#00ff3c", "#00ff44", "#00ff4c", "#00ff55", "#00ff5e", "#00ff66", "#00ff6e", "#00ff77", "#00ff80", "#00ff88", "#00ff91", "#00ff99", "#00ffa2", "#00ffaa", "#00ffb3", "#00ffbb", "#00ffc4", "#00ffcc", "#00ffd5", "#00ffdd", "#00ffe5", "#00ffee", "#00fff7", "#00ffff", "#00ffff", "#00fbff", "#00f7ff", "#00f2ff", "#00eeff", "#00eaff", "#00e5ff", "#00e1ff", "#00ddff", "#00d9ff", "#00d5ff", "#00d0ff", "#00ccff", "#00c8ff", "#00c4ff", "#00bfff", "#00bbff", "#00b7ff", "#00b3ff", "#00aeff", "#00aaff", "#00a6ff", "#00a2ff", "#009dff", "#0099ff", "#0095ff", "#0091ff", "#008cff", "#0088ff", "#0084ff", "#0080ff", "#007bff", "#0077ff", "#0073ff", "#006eff", "#006aff", "#0066ff", "#0062ff", "#005eff", "#0059ff", "#0055ff", "#0051ff", "#004cff", "#0048ff", "#0044ff", "#0040ff", "#003cff", "#0037ff", "#0033ff", "#002fff", "#002aff", "#0026ff", "#0022ff", "#001eff", "#001aff", "#0015ff", "#0011ff", "#000dff", "#0008ff", "#0004ff", "#0000ff"].reverse(), this.colors["color-ramp-elevation1"] = ["#aff0ea", "#aff0e6", "#aff0e3", "#b1f2e2", "#b1f2de", "#aff2da", "#aff2d7", "#aff2d4", "#aff2d0", "#b1f5cf", "#b1f5cc", "#b1f5c9", "#b1f5c5", "#b1f5c2", "#b2f7c0", "#aff7ba", "#aff7b6", "#aff7b3", "#aff7af", "#b3f7af", "#b9fab1", "#bcfab1", "#c0fab1", "#c4fab1", "#c7fab1", "#c9faaf", "#cefcb0", "#d2fcb0", "#d6fcb0", "#dafcb0", "#defcb0", "#e4ffb2", "#e8ffb2", "#ecffb2", "#f0ffb2", "#f3ffb2", "#f7ffb2", "#fbffb2", "#ffffb2", "#ffffb2", "#f8fcab", "#f6faaa", "#eff7a3", "#ecf59d", "#e4f296", "#def095", "#daed8e", "#d2eb88", "#d0e887", "#c8e681", "#bfe37b", "#bce079", "#b4de74", "#aadb6d", "#a6d968", "#9ed666", "#9bd461", "#91d15c", "#89cf5b", "#85cc56", "#7bc950", "#77c74c", "#6fc44b", "#65c246", "#61bf41", "#59bd40", "#55ba3c", "#4ab837", "#43b536", "#3fb332", "#34b02e", "#30ad29", "#29ab29", "#25a82b", "#21a628", "#21a32e", "#1da12a", "#199e2d", "#169c31", "#169930", "#129633", "#0f9437", "#0e9135", "#0b8f39", "#088c36", "#088a3c", "#058740", "#03853d", "#008241", "#008040", "#008040", "#00823d", "#00853a", "#008736", "#008a33", "#008c2f", "#008f2b", "#008f26", "#009122", "#00941e", "#009619", "#009914", "#009c10", "#009e0b", "#02a107", "#02a302", "#07a602", "#0da802", "#13ab02", "#19ad02", "#1fb002", "#25b002", "#2bb302", "#32b502", "#39b802", "#3fba02", "#47bd02", "#4ebf02", "#55c202", "#5dc402", "#65c702", "#6cc902", "#75cc02", "#7dcf02", "#84cf02", "#8cd102", "#95d402", "#9ed603", "#a7d903", "#b0db03", "#b9de03", "#c2e003", "#cde303", "#d7e603", "#e0e803", "#ebeb03", "#ede503", "#f0e003", "#f0d803", "#f2d203", "#f5cd03", "#f7c603", "#fac003", "#fcba03", "#fcba03", "#fab403", "#f7ae03", "#f5a803", "#f2a203", "#f09d03", "#ed9b03", "#eb9603", "#e89003", "#e68b03", "#e38603", "#e08003", "#de7b03", "#db7500", "#d97000", "#d66b00", "#d46a00", "#d16500", "#cf6100", "#cc5c00", "#c95700", "#c75300", "#c44e00", "#c24a00", "#bf4600", "#bd4200", "#ba4100", "#b83d00", "#b53900", "#b33600", "#b03200", "#ad2e00", "#ab2b00", "#a82700", "#a62400", "#a32100", "#a12000", "#9e1d00", "#9c1a00", "#991700", "#961400", "#941100", "#910f00", "#8f0c00", "#8c0900", "#8a0700", "#870700", "#850400", "#820200", "#800000", "#800000", "#800402", "#7d0601", "#7d0902", "#7a0a02", "#7a0e04", "#780f04", "#781205", "#781405", "#751706", "#751806", "#731b07", "#731d08", "#731f08", "#702109", "#702309", "#6e250a", "#6e260a", "#6b270a", "#6b290a", "#6b2b0c", "#692c0c", "#692f0d", "#69300d", "#69300d", "#6b310f", "#6b3211", "#6e3314", "#6e3516", "#703619", "#73391c", "#73391e", "#753b21", "#753c23", "#783f27", "#7a402a", "#7a422c", "#7d4430", "#7d4632", "#804836", "#824a39", "#824c3c", "#854f40", "#855142", "#875346", "#8a574b", "#8a594d", "#8c5c51", "#8c5d54", "#8f6259", "#91655d", "#916760", "#946b64", "#946d67", "#96716c", "#997571", "#997874", "#9c7d7a", "#9c7f7d", "#9e8381", "#a18987", "#a18b8a", "#a3908f", "#a39392", "#a69999", "#a89e9e", "#a8a2a1", "#aba8a8", "#ababab", "#ababab", "#adadad", "#b0b0b0", "#b3b3b3", "#b3b3b3", "#b5b5b5", "#b8b8b8", "#bababa", "#bdbdbd", "#bfbfbf", "#c1c2c0", "#c3c4c2", "#c3c4c2", "#c5c7c5", "#c7c9c7", "#caccca", "#cdcfcd", "#cfd1cf", "#d2d4d3", "#d3d6d5", "#d3d6d5", "#d6d9d8", "#d8dbdb", "#dbdede", "#dddfe0", "#e0e2e3", "#e3e5e6", "#e5e6e8", "#e5e6e8", "#e8e9eb", "#eaeaed", "#eeedf0", "#f0eff2", "#f3f2f5", "#f6f4f7", "#f9f7fa", "#f9f7fa", "#fcf9fc", "#fffcff"].reverse(), this.colors["color-ramp-elevation2"] = ["#77dbd3", "#78dbce", "#7adecc", "#7cdec7", "#7fe0c5", "#7fe0c0", "#82e0bc", "#84e3ba", "#86e3b6", "#88e3b3", "#8ae6b0", "#8de6ad", "#90e8ac", "#90e8a7", "#92e8a5", "#94eba3", "#96eba0", "#99eb9e", "#9aed9c", "#9fed9c", "#a8f0a1", "#abf0a1", "#b1f0a3", "#b6f2a4", "#bcf2a7", "#c1f2a9", "#c7f5ab", "#cdf5ae", "#d3f7b2", "#d7f7b2", "#dbf7b4", "#e1fab6", "#e6fab9", "#e9fabb", "#eefcbd", "#f2fcc0", "#f8ffc4", "#fbffc4", "#feffc7", "#fffdc7", "#ffffc7", "#ffffc4", "#ffffc2", "#ffffbf", "#ffffbd", "#ffffba", "#ffffb8", "#ffffb5", "#ffffb2", "#ffffb0", "#ffffad", "#ffffab", "#ffffa8", "#ffffa6", "#ffffa3", "#ffffa1", "#ffff9e", "#ffff9c", "#ffff99", "#ffff96", "#ffff94", "#ffff91", "#ffff8f", "#ffff8c", "#ffff8a", "#ffff87", "#ffff85", "#ffff82", "#ffff7f", "#ffff7f", "#fcfa7e", "#faf67f", "#f7f17e", "#f5ed80", "#f2e87e", "#f0e57f", "#ede07d", "#ebdd7f", "#e8da7e", "#e6d67c", "#e3d27d", "#e0cd7b", "#deca7c", "#dbc67b", "#d9c37a", "#d9c37a", "#d6bf75", "#d4bc73", "#d1b86f", "#cfb66c", "#ccb26a", "#c9af66", "#c7ac63", "#c4a860", "#c2a55d", "#bfa25a", "#bd9e57", "#ba9b54", "#b89a53", "#b5954f", "#b3934d", "#b0904a", "#ad8b47", "#ab8944", "#a88641", "#a6823f", "#a3803e", "#a17d3b", "#9e7939", "#9c7736", "#997434", "#966f31", "#946e30", "#916b2d", "#8f682c", "#8c652a", "#8a6328", "#876026", "#876026", "#876a27", "#8a6d29", "#8a772b", "#8a812c", "#8c832e", "#8c8c30", "#8c8c31", "#868f34", "#7d8f35", "#7d8f36", "#769138", "#6e913a", "#6f913c", "#69943e", "#6a9440", "#629441", "#5c9644", "#5d9645", "#569647", "#519949", "#53994b", "#4c994c", "#509c50", "#519c59", "#539c61", "#569e64", "#579e6c", "#5aa177", "#5ca177", "#5da17f", "#60a381", "#62a389", "#64a390", "#67a693", "#69a69a", "#6aa6a0", "#6da8a2", "#6fa8a8", "#71a8a8", "#74a6ab", "#76a0ab", "#77a1ab", "#7b9ead", "#7d9aad", "#7e9aad", "#8299b0", "#849ab0", "#8697b0", "#8a96b3", "#8c97b3", "#8d95b3", "#9194b5", "#9396b5", "#9494b5", "#9696b5", "#9696b5", "#9796b5", "#9996b5", "#9a96b5", "#9b96b5", "#9c96b5", "#9d96b5", "#9e96b5", "#9f96b5", "#a096b5", "#a196b5", "#a296b5", "#a396b5", "#a496b5", "#a596b5", "#a696b5", "#a796b5", "#a896b5", "#a996b5", "#aa96b5", "#ab96b5", "#ac96b5", "#ad96b5", "#ae96b5", "#af96b5", "#b096b5", "#b196b5", "#b296b5", "#b396b5", "#b496b5", "#b596b5", "#b596b5", "#b89ab8", "#ba9cba", "#bda1bd", "#bfa3bf", "#c2a7c2", "#c4a8c4", "#c7adc7", "#c9b1c9", "#ccb3cc", "#cfb8cf", "#d1bad1", "#d4bed4", "#d6c0d6", "#d9c5d9", "#dbcadb", "#decdde", "#e0d0e0", "#e3d3e3", "#e6d8e6", "#e8dae8", "#ebdfeb", "#ede1ed", "#f0e7f0", "#f2eaf2", "#f5edf5", "#f7f2f7", "#faf5fa", "#fcf9fc", "#fffcff"].reverse()
    }

    a.prototype.getColorName = function (e) {
        if (!e)return null;
        for (var t in this.colors)if (_.isEqual(this.colors[t], e))return t
    }, a.prototype.getColor = function (e) {
        return this.colors[e]
    }, e.exports = a
}, function (e, t) {
    "use strict";
    function a() {
        this.colors = {}, this.colors["color-ramp-heat-blue2red"] = {
            .2: "#0000ff",
            .4: "#00ffff",
            .6: "#00ff00",
            .8: "#ffff00",
            1: "#ff0000"
        }, this.colors["color-ramp-heat-purple2white"] = {
            .2: "#814bab",
            .4: "#8e1498",
            .6: "#d53448",
            .8: "#fdd944",
            1: "#ffffff"
        }, this.colors["color-ramp-heat-blue2pink"] = {
            .2: "#636cea",
            .4: "#1b16d5",
            .6: "#be1c4d",
            .8: "#f79390",
            1: "#ffffcc"
        }
    }

    a.prototype.getColorName = function (e) {
        if (!e)return null;
        for (var t in this.colors)if (_.isEqual(this.colors[t], e))return t
    }, a.prototype.getColor = function (e) {
        return this.colors[e]
    }, e.exports = a
}, function (e, t, a) {
    "use strict";
    var i = a(9), l = Backbone.View.extend({
        el: $("#basemap-panel"),
        events: {
            "click .btn-close-panel": "close",
            "click .map-item .thumb": "select",
            "click #my-map.thumb": "selectMyMapHandler",
            "click #geohey-map.thumb": "selectGeoHeyMapHandler"
        },
        template: _.template($("#map-list-template").html()),
        geoheyMapThumbTemplate: _.template($("#geohey-map-thumb-template").html()),
        initialize: function () {
            this.listenTo(this.model, "change:map", this.changeMapHandler), this.render()
        },
        render: function () {
            this.$("#map-list").append(this.geoheyMapThumbTemplate()).append(this.template({mapItems: i.onlineMapList}))
        },
        close: function () {
            $(this.el).addClass("hide"), this.trigger("close")
        },
        select: function (e) {
            var t = $(e.currentTarget), a = t.attr("id");
            if ("my-map" != a && "geohey-map" != a && !t.hasClass("active")) {
                this.$(".thumb.active").removeClass("active"), t.addClass("active");
                var i = t.attr("id");
                this.model.set({map: {uid: i, type: "online"}}), this.trigger("select", {uid: i, type: "online"})
            }
        },
        changeMapHandler: function () {
            var e = this.model.get("map");
            if (e) {
                var t = void 0;
                "online" == e.type ? t = e.uid : "geohey" == e.type && (t = i.geoheyMapUids.indexOf(e.uid) >= 0 ? "geohey-map" : "my-map");
                var a = this.$("#" + t + ".thumb");
                a.hasClass("active") || (this.$(".thumb.active").removeClass("active"), a.addClass("active"))
            }
        },
        selectGeoHeyMapHandler: function () {
            this.trigger("selectGeoHeyMap")
        },
        selectMyMapHandler: function () {
            this.trigger("selectMyMap")
        }
    });
    e.exports = l
}, function (e, t, a) {
    "use strict";
    for (var i = a(5), l = G.Browser.retina ? 2 : 1, r = '© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors', o = [{
        uid: "qq",
        name: "腾讯地图",
        thumb: "img/map-tpl-qqmap@2x.png"
    }, {uid: "qqSate", name: "腾讯影像", thumb: "img/map-tpl-qq-sate@2x.png"}, {
        uid: "auto",
        name: "高德地图",
        thumb: "img/map-tpl-amap@2x.png"
    }, {uid: "google", name: "Google地形", thumb: "img/map-tpl-google.jpeg"}, {
        uid: "googleRoad",
        name: "Google地形",
        thumb: "img/map-tpl-google-road.png"
    }, {uid: "googleImage", name: "Goolge影像", thumb: "img/map-tpl-google-image.jpeg"}, {
        uid: "osm",
        name: "OSM",
        thumb: "img/map-tpl-osm@2x.png"
    }, {uid: "arcgisOnline", name: "ArcGIS Online", thumb: "img/map-tpl-arcgisonline@2x.png"}, {
        uid: "stamenToner",
        name: "黑白地图",
        thumb: "img/map-tpl-toner.png"
    }, {uid: "stamenWaterColor", name: "水彩地图", thumb: "img/map-tpl-water-color.jpg"}], s = [{
        uid: "warm",
        name: "温暖",
        thumb: "img/map-tpl-warm.png"
    }, {uid: "cool", name: "清爽", thumb: "img/map-tpl-cool.png"}, {
        uid: "midnight",
        name: "午夜",
        thumb: "img/map-tpl-midnight.png"
    }, {uid: "pencil", name: "铅笔画", thumb: "img/map-tpl-pencil.png"}, {
        uid: "dark",
        name: "暗色",
        thumb: "img/map-tpl-dark.png"
    }, {uid: "contrast", name: "高对比", thumb: "img/map-tpl-contrast.png"}, {
        uid: "pink",
        name: "浪漫粉",
        thumb: "img/map-tpl-pink.png"
    }, {uid: "vision", name: "夜视", thumb: "img/map-tpl-vision.png"}, {
        uid: "adventure",
        name: "探险",
        thumb: "img/map-tpl-adventure.png"
    }, {uid: "blue", name: "魅蓝", thumb: "img/map-tpl-blue.png"}, {
        uid: "light",
        name: "浅色",
        thumb: "img/map-tpl-light.png"
    }, {uid: "fresh", name: "清新", thumb: "img/map-tpl-fresh.png"}, {
        uid: "natural",
        name: "自然",
        thumb: "img/map-tpl-natural.png"
    }, {uid: "admin", name: "政区", thumb: "img/map-tpl-admin.png"}, {
        uid: "tourism",
        name: "旅游",
        thumb: "img/map-tpl-tourism.png"
    }, {uid: "river", name: "海洋", thumb: "img/map-tpl-river.png"}, {
        uid: "chinese",
        name: "世界中文",
        thumb: "img/map-tpl-chinese.png"
    }, {
        uid: "history",
        name: "历史",
        thumb: "img/map-tpl-history.png"
    }], n = [], f = 0; f < s.length; f++)n.push(s[f].uid);
    var d = {
        arcgisOnline: {url: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"},
        osm: {url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png", subdomains: ["a", "b", "c"]},
        google: {
            url: "http://mt{s}.google.cn/vt/lyrs=t@131,r@227000000&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}&scale=" + l,
            subdomains: ["0", "1", "2", "3"]
        },
        googleImage: {
            url: "http://mt{s}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}&scale=" + l,
            subdomains: ["0", "1", "2", "3"]
        },
        auto: {
            url: "http://webrd{s}.is.autonavi.com/appmaptile?size=1&scale=1&style=7&x={x}&y={y}&z={z}",
            subdomains: ["01", "02", "03", "04"]
        },
        stamenToner: {url: "http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png", subdomains: ["a", "b", "c", "d"]},
        stamenWaterColor: {
            url: "http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png", subdomains: ["a", "b", "c", "d"]
        },
        googleRoad: {
            url: "http://mt{s}.google.cn/vt/lyrs=m&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}&scale=2",
            subdomains: ["0", "1", "2", "3"]
        },
        geoq: {
            url: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetColor/MapServer/tile/{z}/{y}/{x}",
            minRes: 2.388657133911133
        }
    }, c = function (e, t, a) {
        return "online" == e ? "qq" == t || "qq-map" == t ? new G.Layer.QQMap("street") : "qqSate" == t ? new G.Layer.QQMap("sate") : "a-map" == t || "auto" == t ? new G.Layer.AMap("street") : h(t) : "a-map" == e || "auto" == e ? new G.Layer.AMap("street") : "qq-map" == e || "qq" == e ? new G.Layer.QQMap("street") : "geohey" == e ? p(t, a) : h(i.defaultMap.uid)
    }, h = function (e) {
        var t = d[e];
        t = t ? t : d[i.defaultMap.uid];
        var a = new G.Layer.Tile(t.url, {tileEnlarge: !1, crossOrigin: "*"});
        return t.subdomains && (a.options.cluster = t.subdomains), t.minRes && (a.options.minRes = t.minRes), a
    }, p = function (e, t) {
        var a = i.domain + "/s/mapping/" + e + "/all?z={z}&x={x}&y={y}&retina={i}";
        a += t ? "&ak=" + t : "&token=" + i.token;
        var l = new G.Layer.Tile(a, {tileEnlarge: !1, crossOrigin: "*", cluster: i.geoheyServerCluster, copyright: r});
        return l
    };
    e.exports = {onlineMapList: o, geoheyMapList: s, geoheyMapUids: n, getBaseMap: c}
}, function (e, t, a) {
    "use strict";
    var i = a(11), l = a(14), r = a(15), o = a(13), s = (a(5), a(12)), n = Backbone.View.extend({
        el: $("#data-panel"),
        markerConfigTemplate: _.template($("#marker-data-layer-template").html()),
        lineConfigTemplate: _.template($("#line-data-layer-template").html()),
        polygonConfigTemplate: _.template($("#polygon-data-layer-template").html()),
        dataLayerTable: {},
        initialize: function () {
            this.listenTo(this.model, "add", this.addHandler), this.listenTo(this.model, "remove", this.removeHandler)
        },
        events: {"click .btn-close-panel": "close", "click #btn-add-data": "selectData", "click .btn-remove": "remove"},
        close: function () {
            $(this.el).addClass("hide"), this.trigger("close")
        },
        selectData: function () {
            this.trigger("selectData")
        },
        remove: function (e) {
            var t = $(e.currentTarget).attr("id"), a = this.model.get(t), i = a.get("config");
            (i.animated || a.get("animated")) && (this.trigger("hideTimeSlider", a), s.animateUsed = !1), this.model.remove(a), e.stopImmediatePropagation()
        },
        addHandler: function (e) {
            var t = e.get("geometryType"), a = void 0, s = void 0, n = void 0;
            "pt" == t || "mpt" == t ? (a = this.markerConfigTemplate, n = new o.MarkerSimpleConfig) : "pl" == t || "mpl" == t ? (a = this.lineConfigTemplate, n = new o.PolylineSimpleConfig) : "pg" != t && "mpg" != t || (a = this.polygonConfigTemplate, n = new o.PolygonSimpleConfig), a && (e.get("config") || e.set("config", n), this.$(".data-layer").removeClass("open"), this.$("#data-layer-list").prepend(a({dataLayer: e})), "pt" == t || "mpt" == t ? s = new i({
                el: "#" + e.cid + ".data-layer",
                model: e
            }) : "pl" == t || "mpl" == t ? s = new l({
                el: "#" + e.cid + ".data-layer",
                model: e
            }) : "pg" != t && "mpg" != t || (s = new r({
                el: "#" + e.cid + ".data-layer",
                model: e
            })), this.dataLayerTable[e.cid] = s, this.listenTo(s, "configUpdate", this.configUpdateHandler), this.listenTo(s, "heatConfigUpdate", this.heatConfigUpdateHandler), this.listenTo(s, "timeLayerConfigUpdate", this.timeLayerConfigUpdateHandler), this.listenTo(s, "fluidConfigUpdate", this.fluidConfigUpdateHandler), this.listenTo(s, "zoomTo", this.zoomToHandler), this.listenTo(s, "layerUp", this.layerUpHandler), this.listenTo(s, "layerDown", this.layerDownHandler), this.listenTo(s, "showLayer", this.showLayerHandler), this.listenTo(s, "hideLayer", this.hideLayerHandler), this.listenTo(s, "showLegend", this.showLegendHandler), this.listenTo(s, "hideLegend", this.hideLegendHandler), this.listenTo(s, "showTimeSlider", this.showTimeSliderHandler), this.listenTo(s, "hideTimeSlider", this.hideTimeSliderHandler), this.listenTo(s, "showFieldsConfig", this.showFieldsConfigHandler), s.init())
        },
        removeHandler: function (e) {
            var t = e.cid;
            this.$("#" + t + ".data-layer").remove(), delete this.dataLayerTable[t], this.trigger("deleteLayer", e)
        },
        configUpdateHandler: function (e) {
            this.trigger("dataLayerConfigUpdate", e)
        },
        heatConfigUpdateHandler: function (e) {
            this.trigger("heatLayerConfigUpdate", e)
        },
        timeLayerConfigUpdateHandler: function (e) {
            this.trigger("timeLayerConfigUpdate", e)
        },
        fluidConfigUpdateHandler: function (e) {
            this.trigger("fluidLayerConfigUpdate", e)
        },
        zoomToHandler: function (e) {
            this.trigger("zoomToDataLayer", e)
        },
        layerUpHandler: function (e) {
            this.trigger("dataLayerUp", e)
        },
        layerDownHandler: function (e) {
            this.trigger("dataLayerDown", e)
        },
        showLayerHandler: function (e) {
            this.trigger("showDataLayer", e)
        },
        hideLayerHandler: function (e) {
            this.trigger("hideDataLayer", e)
        },
        showLegendHandler: function (e) {
            this.trigger("showLegend", e)
        },
        hideLegendHandler: function (e) {
            this.trigger("hideLegend", e)
        },
        showTimeSliderHandler: function (e) {
            this.trigger("showTimeSlider", e)
        },
        hideTimeSliderHandler: function (e) {
            this.trigger("hideTimeSlider", e)
        },
        getDataLayerOrder: function () {
            var e = [];
            return this.$(".data-layer").each(function () {
                e.push($(this).attr("id"))
            }), e
        },
        handleDataLayerVisibleChange: function (e) {
            var t = e.cid, a = e.visible, i = this.$("#" + t + ".data-layer");
            i && (i.hasClass("not-visible") ? a && i.removeClass("not-visible") : a || i.addClass("not-visible"))
        },
        showFieldsConfigHandler: function (e) {
            this.trigger("showFieldsConfig", e)
        }
    });
    e.exports = n
}, function (e, t, a) {
    "use strict";
    var i = a(5), l = a(12), r = a(4), o = a(13), s = Backbone.View.extend({
        colorPickerTemplate: _.template($("#color-picker-template").html()),
        valuePickerTemplate: _.template($("#value-picker-template").html()),
        namePickerTemplate: _.template($("#name-picker-template").html()),
        bucketTemplate: _.template($("#bucket-template").html()),
        drake: void 0,
        events: {
            "click .template-thumb": "switch",
            "click .btn-toggle-up": "toggleUp",
            "click .title-wrapper": "toggleUp",
            "click .btn-zoom-to": "zoomTo",
            "click .chk-layer-toggle": "toggleLayerClickHandler",
            "change .chk-layer-toggle": "toggleLayer",
            "click .btn-layer-up": "layerUp",
            "click .btn-layer-down": "layerDown",
            "change .marker-size-picker": "markerSizeChangeHandler",
            "change .marker-min-size-picker": "markerMinSizeChangeHandler",
            "change .marker-max-size-picker": "markerMaxSizeChangeHandler",
            "change .marker-opacity-picker": "markerOpacityChangeHandler",
            "change .outline-width-picker": "outlineWidthChangeHandler",
            "change .outline-opacity-picker": "outlineOpacityChangeHandler",
            "change .label-field-picker": "labelFieldChangeHandler",
            "change .label-font-picker": "labelFontChangeHandler",
            "change .label-size-picker": "labelSizeChangeHandler",
            "change #heat-weight-field-picker": "heatWeightFieldChangeHandler",
            "change #min-heat-opacity-picker": "minHeatOpacityChangeHandler",
            "change #max-heat-opacity-picker": "maxHeatOpacityChangeHandler",
            "change .bucket-type-picker": "bucketTypeChangeHandler",
            "change .bucket-count-picker": "bucketCountChangeHandler",
            "change .number-field-picker": "numberFieldChangeHandler",
            "change .category-field-picker": "categoryFieldChangeHandler",
            "change .time-field-picker": "timeFieldChangeHandler",
            "change .time-duration-picker": "timeDurationChangeHandler",
            "change .time-segment-picker": "timeSegmentChangeHandler",
            "change .chk-time-accumulate": "timeAccumulateChangeHandler",
            "keypress #input-filter": "filterPressHandler",
            "blur #input-filter": "filterChangeHandler",
            "change .chk-toggle-legend": "toggleLegendHandler",
            "input #input-legend-title": "legendTitleChangeHandler",
            "change #heat-unit-picker": "heatUnitChangeHandler",
            "change #heat-size-picker": "heatSizeChangeHandler",
            "keypress #input-heat-size": "heatSizePressHandler",
            "blur #input-heat-size": "heatSizeChangeHandler",
            "keypress #input-heat-top-value": "heatTopValuePressHandler",
            "blur #input-heat-top-value": "heatTopValueChangeHandler",
            "click .btn-title-edit": "titleEditHandler",
            "keypress .title-editor": "titleEditorPressHandler",
            "click .title-editor": "titleEditorClickHandler",
            "change #fluid-u-field-picker": "fluidUFieldChangeHandler",
            "change #fluid-v-field-picker": "fluidVFieldChangeHandler",
            "change .fluid-width-picker": "fluidWidthChangeHandler",
            "change .fluid-opacity-picker": "fluidOpacityChangeHandler",
            "change .fluid-duration-picker": "fluidDurationChangeHandler",
            "keypress #input-fluid-top-value": "fluidTopValuePressHandler",
            "blur #input-fluid-top-value": "fluidTopValueChangeHandler",
            click: "panelClickHandler",
            "click .btn-config-fields": "fieldsConfigBtnClickHandler",
            "change .chk-toggle-animate": "toggleAnimation"
        },
        configTable: {
            "simple-template": "simple-panel",
            "intensity-template": "intensity-panel",
            "choropleth-template": "choropleth-panel",
            "bubble-template": "bubble-panel",
            "category-template": "category-panel",
            "heat-template": "heat-panel",
            "fluid-template": "fluid-panel"
        },
        initialize: function () {
            this.listenTo(this.model, "change:fields", this.fieldsChangeHandler), this.listenTo(this.model, "bucketsFetched", this.bucketsFetchedHandler), this.listenTo(this.model, "fieldValuesFetched", this.fieldValuesFetchedHandler), this.listenTo(this.model, "timeBreaksFetched", this.timeBreaksFetchedHandler), this.listenTo(this.model, "featuresFetched", this.featuresFeatchedHandler);
            var e = $.proxy(this.legendOrderChangeHandler, this);
            this.$("input[name=" + this.model.cid + "-radio-legend-order]").on("change", e), e = $.proxy(this.bubbleFillChangeHandler, this), this.$("input[name=" + this.model.cid + "-radio-fill-mode]").on("change", e), this.model.fetchFields()
        },
        init: function () {
            this._initSimpleTemplate(), this._initIntensityTemplate(), this._initChoroplethTemplate(), this._initBubbleTemplate(), this._initCategoryTemplate(), this._initHeatTemplate(), this._initFluidTemplate(), this._initOthers();
            var e = this.model.get("filter");
            e && this.$("#input-filter").val(e);
            var t = this.model.get("visible");
            t ? this.$("chk-layer-toggle").prop("checked", "checked") : (this.toggleUp(), this.$(".chk-layer-toggle").removeProp("checked"))
        },
        _initOthers: function () {
            this.$(".question").tooltip(), this.$(".integer").numeric({
                decimal: !1,
                negative: !1
            }), this.$(".numeric").numeric()
        },
        _initSimpleTemplate: function () {
            var e = this.model.get("config"), t = i.defaultMarkerColor, a = i.defaultMarkerSize, l = i.defaultMarkerOpacity, r = i.defaultOutlineColor, o = i.defaultOutlineOpacity, s = i.defaultOutlineWidth, n = i.defaultLabelColor, f = i.defaultLabelFont, d = i.defaultLabelSize, c = !1, h = !1, p = void 0, u = i.defaultTimeSegment, g = i.defaultTimeDuration, m = !1;
            if (e.type == i.configTypes.MARKER_SIMPLE && (t = e.markerColor, l = e.markerOpacity, a = e.markerSize, r = e.outlineColor, o = e.outlineOpacity, s = e.outlineWidth, n = e.labelColor ? e.labelColor : n, f = e.labelFont, d = e.labelSize, c = !0, h = this.model.get("animated"), h && (p = this.model.get("timeField"), u = this.model.get("frameCount"), g = this.model.get("duration"), m = this.model.get("timeAccumulate"))), this.$("#simple-panel .marker-color-picker").append(this.colorPickerTemplate({
                    colors: i.colors,
                    defaultColor: t
                })), this.$("#simple-panel .marker-size-picker").append(this.valuePickerTemplate({
                    values: i.markerSizes,
                    defaultValue: a
                })), this.$("#simple-panel .marker-opacity-picker").append(this.valuePickerTemplate({
                    values: i.opacities,
                    defaultValue: l
                })), this.$("#simple-panel .outline-color-picker").append(this.colorPickerTemplate({
                    colors: i.colors,
                    defaultColor: r
                })), this.$("#simple-panel .outline-width-picker").append(this.valuePickerTemplate({
                    values: i.lineWidths,
                    defaultValue: s
                })), this.$("#simple-panel .outline-opacity-picker").append(this.valuePickerTemplate({
                    values: i.opacities,
                    defaultValue: o
                })), this.$("#simple-panel .label-color-picker").append(this.colorPickerTemplate({
                    colors: i.colors,
                    defaultColor: n
                })), this.$("#simple-panel .label-font-picker").append(this.namePickerTemplate({
                    values: i.labelFonts,
                    defaultValue: f
                })), this.$("#simple-panel .label-size-picker").append(this.valuePickerTemplate({
                    values: i.labelSizes,
                    defaultValue: d
                })), this.$("#simple-panel .marker-color-picker").colorselector({
                    context: this,
                    initColor: t,
                    callback: this.markerColorChangeHandler
                }), this.$("#simple-panel .outline-color-picker").colorselector({
                    context: this,
                    initColor: r,
                    callback: this.outlineColorChangeHandler
                }), this.$("#simple-panel .label-color-picker").colorselector({
                    context: this,
                    initColor: n,
                    callback: this.labelColorChangeHandler
                }), this.$(".time-segment-picker").append(this.valuePickerTemplate({
                    values: i.timeSegments,
                    defaultValue: u
                })), this.$(".time-duration-picker").append(this.valuePickerTemplate({
                    values: i.timeDurations,
                    defaultValue: g
                })), h && this.fillAnimateSettings(u, g, m, p), c) {
                var b = this.$("#simple-template");
                this._switchPanel(b)
            }
        },
        _initIntensityTemplate: function () {
            var e = this.model.get("config"), t = i.defaultMarkerColor, a = i.defaultMarkerSize, l = i.defaultMarkerOpacity, r = i.defaultOutlineColor, o = i.defaultOutlineOpacity, s = i.defaultOutlineWidth, n = i.defaultLabelColor, f = i.defaultLabelFont, d = i.defaultLabelSize, c = !1, h = !1, p = void 0, u = i.defaultTimeSegment, g = i.defaultTimeDuration, m = !1;
            if (e.type == i.configTypes.MARKER_INTENSITY && (t = e.markerColor, l = e.markerOpacity, a = e.markerSize, r = e.outlineColor, o = e.outlineOpacity, s = e.outlineWidth, n = e.labelColor ? e.labelColor : n, f = e.labelFont, d = e.labelSize, c = !0, h = this.model.get("animated"), h && (p = this.model.get("timeField"), u = this.model.get("frameCount"), g = this.model.get("duration"), m = this.model.get("timeAccumulate"))), this.$("#intensity-panel .marker-color-picker").append(this.colorPickerTemplate({
                    colors: i.colors,
                    defaultColor: t
                })), this.$("#intensity-panel .marker-size-picker").append(this.valuePickerTemplate({
                    values: i.markerSizes,
                    defaultValue: a
                })), this.$("#intensity-panel .marker-opacity-picker").append(this.valuePickerTemplate({
                    values: i.opacities,
                    defaultValue: l
                })), this.$("#intensity-panel .outline-color-picker").append(this.colorPickerTemplate({
                    colors: i.colors,
                    defaultColor: r
                })), this.$("#intensity-panel .outline-width-picker").append(this.valuePickerTemplate({
                    values: i.lineWidths,
                    defaultValue: s
                })), this.$("#intensity-panel .outline-opacity-picker").append(this.valuePickerTemplate({
                    values: i.opacities,
                    defaultValue: o
                })), this.$("#intensity-panel .label-color-picker").append(this.colorPickerTemplate({
                    colors: i.colors,
                    defaultColor: n
                })), this.$("#intensity-panel .label-font-picker").append(this.namePickerTemplate({
                    values: i.labelFonts,
                    defaultValue: f
                })), this.$("#intensity-panel .label-size-picker").append(this.valuePickerTemplate({
                    values: i.labelSizes,
                    defaultValue: d
                })), this.$("#intensity-panel .marker-color-picker").colorselector({
                    context: this,
                    initColor: t,
                    callback: this.markerColorChangeHandler
                }), this.$("#intensity-panel .outline-color-picker").colorselector({
                    context: this,
                    initColor: r,
                    callback: this.outlineColorChangeHandler
                }), this.$("#intensity-panel .label-color-picker").colorselector({
                    context: this,
                    initColor: n,
                    callback: this.labelColorChangeHandler
                }), h && this.fillAnimateSettings(u, g, m, p), c) {
                var b = this.$("#intensity-template");
                this._switchPanel(b)
            }
        },
        _initChoroplethTemplate: function () {
            var e = this.model.get("config"), t = i.defaultColorRamp, a = i.defaultMarkerSize, l = i.defaultMarkerOpacity, r = i.defaultOutlineColor, o = i.defaultOutlineOpacity, s = i.defaultOutlineWidth, n = i.defaultLabelColor, f = i.defaultLabelFont, d = i.defaultLabelSize, c = i.defaultBucketType, h = i.defaultBucketCount, p = !1, u = !1, g = i.defaultLegendTitle, m = i.defaultLegendOrder, b = !1, v = void 0, y = i.defaultTimeSegment, k = i.defaultTimeDuration, C = !1;
            if (e.type == i.configTypes.MARKER_CHOROPLETH) {
                if (l = e.markerOpacity, a = e.markerSize, r = e.outlineColor, o = e.outlineOpacity, s = e.outlineWidth, n = e.labelColor ? e.labelColor : n, f = e.labelFont, d = e.labelSize, c = e.bucketType, h = e.bucketCount, t = e.colors, p = !0, u = this.model.get("showLegend")) {
                    var T = this.model.get("legendTitle");
                    g = T ? T : i.defaultLegendTitle;
                    var $ = this.model.get("legendOrder");
                    m = $ ? $ : i.defaultLegendOrder
                }
                b = this.model.get("animated"), b && (v = this.model.get("timeField"), y = this.model.get("frameCount"), k = this.model.get("duration"), C = this.model.get("timeAccumulate"))
            }
            var L = i.colorRamp.getColorName(t);
            if (L = L ? L : i.defaultColorRampName, this.$("#choropleth-panel .marker-color-ramp-picker").ghColorRamp({
                    onChange: this.onChoroplethColorRampChange,
                    colors: i.colorRamp.colors,
                    defaultColorRamp: L,
                    context: this
                }), this.$("#choropleth-panel .marker-size-picker").append(this.valuePickerTemplate({
                    values: i.markerSizes,
                    defaultValue: a
                })), this.$("#choropleth-panel .marker-opacity-picker").append(this.valuePickerTemplate({
                    values: i.opacities,
                    defaultValue: l
                })), this.$("#choropleth-panel .outline-color-picker").append(this.colorPickerTemplate({
                    colors: i.colors,
                    defaultColor: r
                })), this.$("#choropleth-panel .outline-width-picker").append(this.valuePickerTemplate({
                    values: i.lineWidths,
                    defaultValue: s
                })), this.$("#choropleth-panel .outline-opacity-picker").append(this.valuePickerTemplate({
                    values: i.opacities,
                    defaultValue: o
                })), this.$("#choropleth-panel .label-color-picker").append(this.colorPickerTemplate({
                    colors: i.colors,
                    defaultColor: n
                })), this.$("#choropleth-panel .label-font-picker").append(this.namePickerTemplate({
                    values: i.labelFonts,
                    defaultValue: f
                })), this.$("#choropleth-panel .label-size-picker").append(this.valuePickerTemplate({
                    values: i.labelSizes,
                    defaultValue: d
                })), this.$("#choropleth-panel .bucket-type-picker").append(this.namePickerTemplate({
                    values: i.bucketTypes,
                    defaultValue: c
                })), this.$("#choropleth-panel .bucket-count-picker").append(this.valuePickerTemplate({
                    values: i.bucketCounts,
                    defaultValue: h
                })), this.$("#choropleth-panel .outline-color-picker").colorselector({
                    context: this,
                    initColor: r,
                    callback: this.outlineColorChangeHandler
                }), this.$("#choropleth-panel .label-color-picker").colorselector({
                    context: this,
                    initColor: n,
                    callback: this.labelColorChangeHandler
                }), b && this.fillAnimateSettings(y, k, C, v), p) {
                var w = this.$("#choropleth-template");
                this._switchPanel(w), this.$(".legend-setting-wrapper").removeClass("disabled"), u && (this.$(".chk-toggle-legend").prop("checked", "checked"), this.$("#input-legend-title").val(g), this.$("input[value=" + m + "]").prop("checked", "checked"), this.toggleLegend(!0))
            }
        },
        _initBubbleTemplate: function () {
            var e = this.model.get("config"), t = i.defaultBubbleMinSize, a = i.defaultBubbleMaxSize, l = i.defaultBubbleMarkerColor, r = i.defaultMarkerOpacity, o = i.defaultOutlineColor, s = i.defaultOutlineOpacity, n = i.defaultOutlineWidth, f = i.defaultLabelColor, d = i.defaultLabelFont, c = i.defaultLabelSize, h = i.defaultBucketType, p = i.defaultBucketCount, u = !1, g = !1, m = i.defaultLegendTitle, b = i.defaultLegendOrder, v = i.defaultColorRamp, y = "single", k = void 0, C = void 0, T = !1, $ = void 0, L = i.defaultTimeSegment, w = i.defaultTimeDuration, H = !1;
            if (e.type == i.configTypes.MARKER_BUBBLE) {
                if (v = e.colors ? e.colors : v, l = e.markerColor, r = e.markerOpacity, t = e.minSize, a = e.maxSize, o = e.outlineColor, s = e.outlineOpacity, n = e.outlineWidth, f = e.labelColor ? e.labelColor : f, d = e.labelFont, c = e.labelSize, h = e.bucketType, p = e.bucketCount, u = !0, y = e.fillMode, k = e.colorBucketType ? e.colorBucketType : k, C = e.colorBucketCount ? e.colorBucketCount : C, g = this.model.get("showLegend")) {
                    var S = this.model.get("legendTitle");
                    m = S ? S : i.defaultLegendTitle;
                    var O = this.model.get("legendOrder");
                    b = O ? O : i.defaultLegendOrder
                }
                T = this.model.get("animated"), T && ($ = this.model.get("timeField"), L = this.model.get("frameCount"), w = this.model.get("duration"), H = this.model.get("timeAccumulate"))
            }
            this.$("#bubble-panel .marker-color-picker").append(this.colorPickerTemplate({
                colors: i.colors,
                defaultColor: l
            })), this.$("#bubble-panel .marker-min-size-picker").append(this.valuePickerTemplate({
                values: i.bubbleSizes,
                defaultValue: t
            })), this.$("#bubble-panel .marker-max-size-picker").append(this.valuePickerTemplate({
                values: i.bubbleSizes,
                defaultValue: a
            })), this.$("#bubble-panel .marker-opacity-picker").append(this.valuePickerTemplate({
                values: i.opacities,
                defaultValue: r
            })), this.$("#bubble-panel .outline-color-picker").append(this.colorPickerTemplate({
                colors: i.colors,
                defaultColor: o
            })), this.$("#bubble-panel .outline-width-picker").append(this.valuePickerTemplate({
                values: i.lineWidths,
                defaultValue: n
            })), this.$("#bubble-panel .outline-opacity-picker").append(this.valuePickerTemplate({
                values: i.opacities,
                defaultValue: s
            })), this.$("#bubble-panel .label-color-picker").append(this.colorPickerTemplate({
                colors: i.colors,
                defaultColor: f
            })), this.$("#bubble-panel .label-font-picker").append(this.namePickerTemplate({
                values: i.labelFonts,
                defaultValue: d
            })), this.$("#bubble-panel .label-size-picker").append(this.valuePickerTemplate({
                values: i.labelSizes,
                defaultValue: c
            })), this.$("#bubble-panel #bubble-size-bucket-type-picker").append(this.namePickerTemplate({
                values: i.bucketTypes,
                defaultValue: h
            })), this.$("#bubble-panel #bubble-size-bucket-count-picker").append(this.valuePickerTemplate({
                values: i.bucketCounts,
                defaultValue: p
            })), this.$("#bubble-panel .marker-color-picker").colorselector({
                context: this,
                initColor: l,
                callback: this.markerColorChangeHandler
            }), this.$("#bubble-panel .outline-color-picker").colorselector({
                context: this,
                initColor: o,
                callback: this.outlineColorChangeHandler
            }), this.$("#bubble-panel .label-color-picker").colorselector({
                context: this,
                initColor: f,
                callback: this.labelColorChangeHandler
            });
            var P = i.colorRamp.getColorName(v);
            if (P = P ? P : i.defaultColorRampName, this.$("#bubble-panel .marker-color-ramp-picker").ghColorRamp({
                    onChange: this.onBubbleColorRampChange,
                    colors: i.colorRamp.colors,
                    defaultColorRamp: P,
                    context: this
                }), this.$("input[name=" + this.model.cid + "-radio-fill-mode][value=" + y + "]").prop("checked", "checked"), this.$("#bubble-panel #bubble-color-bucket-type-picker").append(this.namePickerTemplate({
                    values: i.bucketTypes,
                    defaultValue: k
                })), this.$("#bubble-panel #bubble-color-bucket-count-picker").append(this.valuePickerTemplate({
                    values: i.bucketCounts,
                    defaultValue: C
                })), "single" == y ? (this.$("#bubble-multi-fill-wrapper").addClass("hide"), this.$("#bubble-single-fill-wrapper").removeClass("hide")) : "multi" == y && (this.$("#bubble-multi-fill-wrapper").removeClass("hide"), this.$("#bubble-single-fill-wrapper").addClass("hide")), T && this.fillAnimateSettings(L, w, H, $), u) {
                var x = this.$("#bubble-template");
                this._switchPanel(x), this.$(".legend-setting-wrapper").removeClass("disabled"), g && (this.$(".chk-toggle-legend").prop("checked", "checked"), this.$("#input-legend-title").val(m), this.$("input[value=" + b + "]").prop("checked", "checked"), this.toggleLegend(!0))
            }
        },
        _initCategoryTemplate: function () {
            var e = this.model.get("config"), t = i.fullColorRamp, a = i.defaultMarkerSize, l = i.defaultMarkerOpacity, r = i.defaultOutlineColor, o = i.defaultOutlineOpacity, s = i.defaultOutlineWidth, n = i.defaultLabelColor, f = i.defaultLabelFont, d = i.defaultLabelSize, c = !1, h = !1, p = i.defaultLegendTitle, u = i.defaultLegendOrder, g = !1, m = void 0, b = i.defaultTimeSegment, v = i.defaultTimeDuration, y = !1;
            if (e.type == i.configTypes.MARKER_CATEGORY) {
                if (t = e.colors, l = e.markerOpacity, a = e.markerSize, r = e.outlineColor, o = e.outlineOpacity, s = e.outlineWidth, n = e.labelColor ? e.labelColor : n, f = e.labelFont, d = e.labelSize, c = !0, h = this.model.get("showLegend")) {
                    var k = this.model.get("legendTitle");
                    p = k ? k : i.defaultLegendTitle;
                    var C = this.model.get("legendOrder");
                    u = C ? C : i.defaultLegendOrder
                }
                g = this.model.get("animated"), g && (m = this.model.get("timeField"), b = this.model.get("frameCount"), v = this.model.get("duration"), y = this.model.get("timeAccumulate"))
            }
            var T = i.colorRamp.getColorName(t);
            if (T = T ? T : i.defaultColorRampName, this.$("#category-panel .marker-color-ramp-picker").ghColorRamp({
                    onChange: this.onCategoryColorRampChange,
                    colors: i.colorRamp.colors,
                    defaultColorRamp: T,
                    context: this
                }), this.$("#category-panel .marker-size-picker").append(this.valuePickerTemplate({
                    values: i.markerSizes,
                    defaultValue: a
                })), this.$("#category-panel .marker-opacity-picker").append(this.valuePickerTemplate({
                    values: i.opacities,
                    defaultValue: l
                })), this.$("#category-panel .outline-color-picker").append(this.colorPickerTemplate({
                    colors: i.colors,
                    defaultColor: r
                })), this.$("#category-panel .outline-width-picker").append(this.valuePickerTemplate({
                    values: i.lineWidths,
                    defaultValue: s
                })), this.$("#category-panel .outline-opacity-picker").append(this.valuePickerTemplate({
                    values: i.opacities,
                    defaultValue: o
                })), this.$("#category-panel .label-color-picker").append(this.colorPickerTemplate({
                    colors: i.colors,
                    defaultColor: n
                })), this.$("#category-panel .label-font-picker").append(this.namePickerTemplate({
                    values: i.labelFonts,
                    defaultValue: f
                })), this.$("#category-panel .label-size-picker").append(this.valuePickerTemplate({
                    values: i.labelSizes,
                    defaultValue: d
                })), this.$("#category-panel .outline-color-picker").colorselector({
                    context: this,
                    initColor: r,
                    callback: this.outlineColorChangeHandler
                }), this.$("#category-panel .label-color-picker").colorselector({
                    context: this,
                    initColor: n,
                    callback: this.labelColorChangeHandler
                }), g && this.fillAnimateSettings(b, v, y, m), c) {
                this.updateCategoryBuckets();
                var $ = this.$("#category-template");
                this._switchPanel($), this.$(".legend-setting-wrapper").removeClass("disabled"), h && (this.$(".chk-toggle-legend").prop("checked", "checked"), this.$("#input-legend-title").val(p), this.$("input[value=" + u + "]").prop("checked", "checked"), this.toggleLegend(!0))
            }
        },
        _initHeatTemplate: function () {
            var e = this.model.get("config"), t = i.defaultHeatSizeUnit, a = i.defaultHeatPixelSize, l = i.defaultHeatMinOpacity, r = i.defaultHeatMaxOpacity, o = i.defaultHeatTopValue, s = i.defaultHeatWeightField, n = i.defaultHeatColor, f = !1, d = void 0, c = !1, h = i.defaultTimeSegment, p = i.defaultTimeDuration, u = !1;
            e.type == i.configTypes.MARKER_HEAT && (t = e.heatSizeUnit, a = e.heatSize, l = e.heatMinOpacity ? e.heatMinOpacity : l, r = e.heatMaxOpacity ? e.heatMaxOpacity : r, o = e.heatTopValue, s = e.weightField ? e.weightField : s, n = e.colors ? e.colors : i.defaultHeatColor, c = !0, f = e.animated, h = e.frameCount, p = e.duration, u = e.timeAccumulate, d = e.timeField);
            var g = i.heatColorRamp.getColorName(n);
            if (g = g ? g : i.defaultHeatColorName, this.$("#heat-panel #heat-color-ramp-picker").ghColorRamp({
                    onChange: this.onHeatColorRampChange,
                    colors: i.heatColorRamp.colors,
                    defaultColorRamp: g,
                    context: this
                }), this.$("#heat-panel #heat-size-picker").append(this.valuePickerTemplate({
                    values: i.heatSizes,
                    defaultValue: a
                })), this.$("#heat-panel #min-heat-opacity-picker").append(this.valuePickerTemplate({
                    values: i.opacities,
                    defaultValue: l
                })), this.$("#heat-panel #max-heat-opacity-picker").append(this.valuePickerTemplate({
                    values: i.opacities,
                    defaultValue: r
                })), this.$("#heat-panel #heat-unit-picker").val(t), this.$("#heat-panel #input-heat-top-value").val(o), this.$("#heat-panel #heat-weight-field-picker").val(s), "pixel" == t ? (this.$("#heat-panel #heat-size-picker").val(a), this.$("#heat-panel #input-heat-size").val(i.defaultHeatMapSize), this.$("#heat-panel #heat-unit-wrapper").removeClass("pixel map").addClass("pixel")) : "map" == t && (this.$("#heat-panel #input-heat-size").val(a), this.$("#heat-panel #heat-size-picker").val(i.defaultHeatPixelSize), this.$("#heat-panel #heat-unit-wrapper").removeClass("pixel map").addClass("map")), f && this.fillAnimateSettings(h, p, u, d), c) {
                this.$(".animate-setting-wrapper").removeClass("disabled");
                var m = this.$("#heat-template");
                this._switchPanel(m)
            }
        },
        _initFluidTemplate: function () {
            var e, t, a = this.model.get("config"), l = i.defaultFluidWidth, r = i.defaultFluidDuration, o = i.defaultFluidOpacity, s = i.defaultFluidTopValue, n = i.defaultFluidColors, f = !1;
            if (a.type == i.configTypes.MARKER_FLUID && (e = a.uField, t = a.vField, l = a.width ? a.width : widht, r = a.duration ? a.duration : r, o = a.opacity ? a.opacity : o, s = a.topValue ? a.topValue : s, n = a.colors ? a.colors : n, f = !0), this.$("#fluid-panel .fluid-color-picker").append(this.colorPickerTemplate({
                    colors: i.colors,
                    defaultColor: n[0]
                })), this.$("#fluid-panel .fluid-color-picker").colorselector({
                    context: this,
                    initColor: n[0],
                    callback: this.fluidColorChangeHandler
                }), this.$("#fluid-panel .fluid-opacity-picker").append(this.valuePickerTemplate({
                    values: i.fluidOpacities,
                    defaultValue: o
                })), this.$("#fluid-panel .fluid-width-picker").append(this.valuePickerTemplate({
                    values: i.fluidWidths,
                    defaultValue: l
                })), this.$("#fluid-panel .fluid-duration-picker").append(this.valuePickerTemplate({
                    values: i.fluidDurations,
                    defaultValue: r
                })), this.$("#fluid-panel #input-fluid-top-value").val(s), f) {
                var d = this.$("#fluid-template");
                this._switchPanel(d)
            }
        },
        fillAnimateSettings: function (e, t, a, i) {
            this.$(".time-segment-picker").val(e), this.$(".time-duration-picker").val(t), this.$(".chk-toggle-animate").prop("checked", "checked"), this.$(".chk-time-accumulate").prop("checked", a), this.$("#animate-setting .time-field-picker").val(i), this.$("#animate-setting").removeClass("hide")
        },
        "switch": function (e) {
            var t = $(e.currentTarget);
            if (this._switchPanel(t)) {
                var a = this.createConfig();
                a && (this.model.set({config: a}), a.type == i.configTypes.MARKER_SIMPLE || a.type == i.configTypes.MARKER_INTENSITY || a.type == i.configTypes.MARKER_HEAT ? this.trigger("configUpdate", this.model) : a.type == i.configTypes.MARKER_CHOROPLETH ? this.$("#choropleth-panel").hasClass("disabled") || this.model.fetchBuckets() : a.type == i.configTypes.MARKER_BUBBLE ? this.$("#bubble-panel").hasClass("disabled") || (this.model.fetchBuckets(), "multi" == a.fillMode && this.model.fetchBucketsForBubbleColor()) : a.type == i.configTypes.MARKER_CATEGORY ? this.model.fetchFieldValues() : a.type == i.configTypes.MARKER_FLUID && this.model.fetchFeatures(), (this.model.get("animated") || a.animated) && this.trigger("showTimeSlider", this.model))
            }
        },
        bucketsFetchedHandler: function () {
            var e = this.model.get("config");
            e.type != i.configTypes.MARKER_CHOROPLETH && e.type != i.configTypes.MARKER_BUBBLE || e.isReady() && (this.trigger("configUpdate", this.model), this.toggleLegend(!0))
        },
        fieldValuesFetchedHandler: function () {
            var e = this.model.get("config");
            if (e.type == i.configTypes.MARKER_CATEGORY) {
                var t = r.getRandomColors(e.fieldValues.length, e.colors);
                e.fieldColors = t, this.trigger("configUpdate", this.model), this.updateCategoryBuckets(), this.toggleLegend(!0)
            }
        },
        timeBreaksFetchedHandler: function () {
            this.trigger("configUpdate", this.model)
        },
        featuresFeatchedHandler: function (e) {
            this.trigger("fluidConfigUpdate", this.model)
        },
        _switchPanel: function (e) {
            var t = e.attr("id"), a = this.$('.config-template:has("#' + t + '")');
            if (a.hasClass("active"))return !1;
            this.$(".config-template").removeClass("active"), a.addClass("active"), this.trigger("hideLegend", this.model), this.$(".config-panel.active").removeClass("active");
            var i = this.configTable[t], l = this.$("#" + i);
            return l.hasClass("disabled") ? (this.$(".filter-container").addClass("disabled"), this.$(".legend-setting-wrapper").addClass("disabled"), this.$(".fields-setting-wrapper").addClass("disabled")) : (this.$(".filter-container").removeClass("disabled"), this.$(".legend-setting-wrapper").removeClass("disabled"), this.$(".fields-setting-wrapper").removeClass("disabled")), l.addClass("active"), "simple-panel" == i || "intensity-panel" == i || "heat-panel" == i ? this.$(".legend-setting-wrapper").addClass("disabled") : this.$(".legend-setting-wrapper").removeClass("disabled"), "fluid-panel" == i ? (this.$(".animate-setting-wrapper").addClass("disabled"), this.$(".legend-setting-wrapper").addClass("disabled")) : (this.$(".animate-setting-wrapper").removeClass("disabled"), this.$(".legend-setting-wrapper").removeClass("disabled")), !0
        },
        createConfig: function () {
            var e = this.$(".config-panel.active"), t = e.attr("id");
            return "simple-panel" == t ? this.createSimpleConfig() : "intensity-panel" == t ? this.createIntensityConfig() : "choropleth-panel" == t ? this.$("#choropleth-panel").hasClass("disabled") ? null : this.createChoroplethConfig() : "bubble-panel" == t ? this.$("#bubble-panel").hasClass("disabled") ? null : this.createBubbleConfig() : "category-panel" == t ? this.createCategoryConfig() : "heat-panel" == t ? this.createHeatConfig() : "fluid-panel" == t ? this.createFluidConfig() : void 0
        },
        createSimpleConfig: function () {
            var e = this.$("#simple-panel .marker-color-picker").val(), t = this.$("#simple-panel .marker-size-picker").val(), a = this.$("#simple-panel .marker-opacity-picker").val(), i = this.$("#simple-panel .outline-color-picker").val(), l = this.$("#simple-panel .outline-width-picker").val(), r = this.$("#simple-panel .outline-opacity-picker").val(), s = this.$("#simple-panel .label-color-picker").val(), n = this.$("#simple-panel .label-field-picker").find("option:selected"), f = 0 == n.index() ? null : n.val(), d = this.$("#simple-panel .label-font-picker").val(), c = this.$("#simple-panel .label-size-picker").val();
            return new o.MarkerSimpleConfig({
                markerColor: e,
                markerSize: parseFloat(t),
                markerOpacity: parseFloat(a),
                outlineColor: i,
                outlineWidth: parseFloat(l),
                outlineOpacity: parseFloat(r),
                labelColor: s,
                labelField: f,
                labelFont: d,
                labelSize: parseFloat(c)
            })
        },
        createIntensityConfig: function () {
            var e = this.$("#intensity-panel .marker-color-picker").val(), t = this.$("#intensity-panel .marker-size-picker").val(), a = this.$("#intensity-panel .marker-opacity-picker").val(), i = this.$("#intensity-panel .outline-color-picker").val(), l = this.$("#intensity-panel .outline-width-picker").val(), r = this.$("#intensity-panel .outline-opacity-picker").val(), s = this.$("#intensity-panel .label-color-picker").val(), n = this.$("#intensity-panel .label-field-picker").find("option:selected"), f = 0 == n.index() ? null : n.val(), d = this.$("#intensity-panel .label-font-picker").val(), c = this.$("#intensity-panel .label-size-picker").val();
            return new o.MarkerIntensityConfig({
                markerColor: e,
                markerSize: parseFloat(t),
                markerOpacity: parseFloat(a),
                outlineColor: i,
                outlineWidth: parseFloat(l),
                outlineOpacity: parseFloat(r),
                labelColor: s,
                labelField: f,
                labelFont: d,
                labelSize: parseFloat(c)
            })
        },
        createChoroplethConfig: function () {
            var e = this.$("#choropleth-panel .marker-color-ramp-picker").attr("color-ramp-name"), t = i.colorRamp.getColor(e);
            t = t ? t : i.defaultColorRamp;
            var a = this.$("#choropleth-panel .marker-size-picker").val(), l = this.$("#choropleth-panel .marker-opacity-picker").val(), r = this.$("#choropleth-panel .outline-color-picker").val(), s = this.$("#choropleth-panel .outline-width-picker").val(), n = this.$("#choropleth-panel .outline-opacity-picker").val(), f = this.$("#choropleth-panel .label-color-picker").val(), d = this.$("#choropleth-panel .label-field-picker").find("option:selected"), c = 0 == d.index() ? null : d.val(), h = this.$("#choropleth-panel .label-font-picker").val(), p = this.$("#choropleth-panel .label-size-picker").val(), u = this.$("#choropleth-panel .number-field-picker").val();
            return new o.MarkerChoroplethConfig({
                colors: t,
                markerSize: parseFloat(a),
                markerOpacity: parseFloat(l),
                outlineColor: r,
                outlineWidth: parseFloat(s),
                outlineOpacity: parseFloat(n),
                labelColor: f,
                labelField: c,
                labelFont: h,
                labelSize: parseFloat(p),
                fieldName: u
            })
        },
        createBubbleConfig: function () {
            var e = this.$("#bubble-panel .marker-color-picker").val(), t = this.$("#bubble-panel .marker-min-size-picker").val(), a = this.$("#bubble-panel .marker-max-size-picker").val(), l = this.$("#bubble-panel .marker-opacity-picker").val(), r = this.$("#bubble-panel .outline-color-picker").val(), s = this.$("#bubble-panel .outline-width-picker").val(), n = this.$("#bubble-panel .outline-opacity-picker").val(), f = this.$("#bubble-panel .label-color-picker").val(), d = this.$("#bubble-panel .label-field-picker").find("option:selected"), c = 0 == d.index() ? null : d.val(), h = this.$("#bubble-panel .label-font-picker").val(), p = this.$("#bubble-panel .label-size-picker").val(), u = this.$("#bubble-panel #bubble-size-field-picker").val(), g = this.$("#bubble-panel #bubble-size-bucket-type-picker").val(), m = this.$("#bubble-panel #bubble-size-bucket-count-picker").val(), b = this.$("input[name=" + this.model.cid + "-radio-fill-mode]:checked").val(), v = {
                markerColor: e,
                minSize: parseFloat(t),
                maxSize: parseFloat(a),
                markerOpacity: parseFloat(l),
                outlineColor: r,
                outlineWidth: parseFloat(s),
                outlineOpacity: parseFloat(n),
                labelColor: f,
                labelField: c,
                labelFont: h,
                labelSize: parseFloat(p),
                fieldName: u,
                bucketType: g,
                bucketCount: parseInt(m),
                fillMode: b
            };
            if ("multi" == b) {
                var y = this.$("#bubble-color-field-picker").val(), k = this.$("#bubble-color-bucket-type-picker").val(), C = this.$("#bubble-color-bucket-count-picker").val(), l = this.$("#bubble-color-marker-opacity-picker").val();
                v.colorFieldName = y, v.colorBucketType = k, v.colorBucketCount = parseInt(C), v.markerOpacity = parseFloat(l);
                var T = this.$("#bubble-panel .marker-color-ramp-picker").attr("color-ramp-name"), $ = i.colorRamp.getColor(T);
                $ = $ ? $ : i.defaultColorRamp, v.colors = $
            }
            return new o.MarkerBubbleConfig(v)
        },
        createCategoryConfig: function () {
            var e = this.$("#category-panel .marker-color-ramp-picker").attr("color-ramp-name"), t = i.colorRamp.getColor(e);
            t = t ? t : i.fullColorRamp;
            var a = this.$("#category-panel .marker-size-picker").val(), l = this.$("#category-panel .marker-opacity-picker").val(), r = this.$("#category-panel .outline-color-picker").val(), s = this.$("#category-panel .outline-width-picker").val(), n = this.$("#category-panel .outline-opacity-picker").val(), f = this.$("#category-panel .label-color-picker").val(), d = this.$("#category-panel .label-field-picker").find("option:selected"), c = 0 == d.index() ? null : d.val(), h = this.$("#category-panel .label-font-picker").val(), p = this.$("#category-panel .label-size-picker").val(), u = this.$("#category-panel .category-field-picker").val();
            return new o.MarkerCategoryConfig({
                colors: t,
                markerSize: parseFloat(a),
                markerOpacity: parseFloat(l),
                outlineColor: r,
                outlineWidth: parseFloat(s),
                outlineOpacity: parseFloat(n),
                labelColor: f,
                labelField: c,
                labelFont: h,
                labelSize: parseFloat(p),
                fieldName: u
            })
        },
        createHeatConfig: function () {
            var e, t = this.$("#heat-panel #heat-unit-picker").val();
            e = "pixel" == t ? this.$("#heat-panel #heat-size-picker").val() : this.$("#heat-panel #input-heat-size").val();
            var a = this.$("#heat-panel #min-heat-opacity-picker").val(), l = this.$("#heat-panel #max-heat-opacity-picker").val(), r = this.$("#heat-panel #input-heat-top-value").val(), s = this.$("#heat-panel #heat-weight-field-picker").val();
            s = "无" == s ? void 0 : s;
            var n = this.$("#heat-panel #heat-color-ramp-picker").attr("color-ramp-name"), f = i.heatColorRamp.getColor(n);
            f = f ? f : i.defaultHeatColor;
            var d = this.$(".chk-toggle-animate").prop("checked"), c = this.$(".time-field-picker").val(), h = this.$(".time-segment-picker").val(), p = this.$(".time-duration-picker").val();
            return new o.MarkerHeatConfig({
                heatSize: e,
                heatMinOpacity: a,
                heatMaxOpacity: l,
                heatTopValue: r,
                heatSizeUnit: t,
                weightField: s,
                colors: f,
                animated: d,
                timeField: c,
                frameCount: parseInt(h),
                duration: parseInt(p)
            })
        },
        createFluidConfig: function () {
            var e = this.$("#fluid-panel #fluid-u-field-picker").val(), t = this.$("#fluid-panel #fluid-v-field-picker").val(), a = this.$("#fluid-panel .fluid-width-picker").val(), l = this.$("#fluid-panel .fluid-opacity-picker").val(), r = this.$("#fluid-panel .fluid-duration-picker").val(), s = this.$("#fluid-panel #input-fluid-top-value").val();
            return s = s ? parseFloat(s) : i.defaultFluidTopValue, new o.MarkerFluidConfig({
                uField: e,
                vField: t,
                width: parseFloat(a),
                opacity: parseFloat(l),
                duration: parseFloat(r),
                topValue: s
            })
        },
        toggleUp: function (e) {
            $(this.el).hasClass("open") ? $(this.el).removeClass("open") : $(this.el).addClass("open"), e && e.stopImmediatePropagation()
        },
        toggleDown: function () {
            !$(this.el).hasClass("open") && this.$(".chk-layer-toggle").prop("checked") && ($(".data-layer").removeClass("open"), $(this.el).addClass("open"))
        },
        layerUp: function (e) {
            var t = $(this.el);
            t.insertBefore(t.prev(".data-layer")), this.trigger("layerUp", this.model), e.stopImmediatePropagation()
        },
        layerDown: function (e) {
            var t = $(this.el);
            t.insertAfter(t.next(".data-layer")), this.trigger("layerDown", this.model), e.stopImmediatePropagation()
        },
        toggleLayerClickHandler: function (e) {
            e.stopImmediatePropagation()
        },
        toggleLayer: function (e) {
            var t = $(e.currentTarget), a = t.prop("checked");
            this.model.set({visible: a}), a ? (this.trigger("showLayer", this.model), this.toggleDown(), this.$(".chk-toggle-legend").prop("checked") && this.trigger("showLegend", this.model)) : (this.trigger("hideLayer", this.model), this.trigger("hideLegend", this.model), $(this.el).removeClass("open")), e.stopImmediatePropagation()
        },
        zoomTo: function (e) {
            this.trigger("zoomTo", this.model), e.stopImmediatePropagation()
        },
        fieldsChangeHandler: function () {
            for (var e = this.model.get("config"), t = this.model.get("fields"), a = ["无"], i = [], l = [], o = 0; o < t.length; o++)a.push(t[o].name), r.isNumericType(t[o].type) ? (i.push(t[o].name), l.push(t[o].name)) : r.isDateTimeType(t[o].type) && l.push(t[o].name);
            this.$(".label-field-picker").append(this.valuePickerTemplate({
                values: a,
                defaultValue: e.labelField
            })), 0 == i.length ? (this.$("#choropleth-panel").addClass("disabled"), this.$("#bubble-panel").addClass("disabled")) : (this.$(".number-field-picker").append(this.valuePickerTemplate({
                values: i,
                defaultValue: e.fieldName
            })), this.$("#bubble-color-field-picker").empty().append(this.valuePickerTemplate({
                values: i,
                defaultValue: e.colorFieldName
            }))), a = a.slice(1), this.$(".category-field-picker").append(this.valuePickerTemplate({
                values: a,
                defaultValue: e.fieldName
            }));
            var s = [];
            s = s.concat(["无"], i), this.$("#heat-weight-field-picker").append(this.valuePickerTemplate({
                values: s,
                defaultValue: e.weightField
            })), this.$(".time-field-picker").append(this.valuePickerTemplate({
                values: l,
                defaultValue: e.timeField
            })), this.$("#fluid-u-field-picker").empty().append(this.valuePickerTemplate({
                values: i,
                defaultValue: e.uField
            })), this.$("#fluid-v-field-picker").empty().append(this.valuePickerTemplate({
                values: i,
                defaultValue: e.vField
            }))
        },
        markerSizeChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = parseFloat(a.val());
            t.markerSize = i, this.trigger("configUpdate", this.model)
        },
        markerMinSizeChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = parseFloat(a.val());
            t.minSize = i, this.trigger("configUpdate", this.model)
        },
        markerMaxSizeChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = parseFloat(a.val());
            t.maxSize = i, this.trigger("configUpdate", this.model)
        },
        markerOpacityChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = parseFloat(a.val());
            t.markerOpacity = i, this.trigger("configUpdate", this.model)
        },
        markerColorChangeHandler: function (e) {
            var t = this.model.get("config");
            e != t.markerColor && (t.markerColor = e, this.trigger("configUpdate", this.model), this.updateLegend())
        },
        outlineWidthChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = parseFloat(a.val());
            t.outlineWidth = i, this.trigger("configUpdate", this.model)
        },
        outlineOpacityChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = parseFloat(a.val());
            t.outlineOpacity = i, this.trigger("configUpdate", this.model)
        },
        outlineColorChangeHandler: function (e) {
            var t = this.model.get("config");
            e != t.outlineColor && (t.outlineColor = e, this.trigger("configUpdate", this.model), this.updateLegend())
        },
        labelFieldChangeHandler: function (e) {
            var t = $(e.currentTarget), a = this.model.get("config"), i = t.find("option:selected"), l = 0 == i.index() ? null : i.val();
            a.labelField = l, this.trigger("configUpdate", this.model)
        },
        labelColorChangeHandler: function (e) {
            var t = this.model.get("config");
            e != t.labelColor && (t.labelColor = e, t.labelField && this.trigger("configUpdate", this.model))
        },
        labelFontChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = a.val();
            t.labelFont = i, t.labelField && this.trigger("configUpdate", this.model)
        },
        labelSizeChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = parseFloat(a.val());
            t.labelSize = i, t.labelField && this.trigger("configUpdate", this.model)
        },
        heatWeightFieldChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val();
            a = "无" == a ? void 0 : a;
            var i = this.model.get("config");
            i.weightField = a, this.trigger("configUpdate", this.model)
        },
        heatSizeChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = parseInt(a.val());
            t.heatSize = i, this.trigger("heatConfigUpdate", this.model)
        },
        heatTopValueChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = parseInt(a.val());
            t.heatTopValue = i, this.trigger("heatConfigUpdate", this.model)
        },
        heatUnitChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = a.val();
            this.$("#heat-unit-wrapper").removeClass("pixel map").addClass(i), t.heatSizeUnit = i;
            var l;
            "pixel" == i ? l = parseInt(this.$("#heat-size-picker").val()) : "map" == i && (l = parseInt(this.$("#input-heat-size").val())), t.heatSize = l, this.trigger("heatConfigUpdate", this.model)
        },
        heatSizePressHandler: function (e) {
            13 == e.keyCode && this.heatSizeChangeHandler(e)
        },
        heatTopValuePressHandler: function (e) {
            13 == e.keyCode && this.heatTopValueChangeHandler(e)
        },
        minHeatOpacityChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = parseFloat(a.val());
            t.heatMinOpacity = i, this.trigger("heatConfigUpdate", this.model)
        },
        maxHeatOpacityChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = parseFloat(a.val());
            t.heatMaxOpacity = i, this.trigger("heatConfigUpdate", this.model)
        },
        titleEditHandler: function (e) {
            var t = $(e.currentTarget);
            if (t.hasClass("active"))this.$(".title-wrapper").removeClass("editing"), t.removeClass("active"); else {
                t.addClass("active");
                var a = this.$(".title-wrapper");
                if (a.hasClass("editing"))return;
                a.addClass("editing"), this.$(".title-wrapper .title-editor").focus()
            }
            e.stopImmediatePropagation(), e.preventDefault();
            var i = this.$(".title-editor"), l = i.val().trim().length;
            this.$(".title-editor").selectRange(l, l)
        },
        titleEditorPressHandler: function (e) {
            13 == e.keyCode && this.panelClickHandler(e)
        },
        titleEditorClickHandler: function (e) {
            e.stopImmediatePropagation()
        },
        panelClickHandler: function (e) {
            var t = this.$(".title-wrapper .title-editor"), a = t.val().trim();
            if (r.stringIsBlank(a)) {
                var i = this.$(".title-wrapper span").text();
                t.val(i)
            } else this.$(".title-wrapper span").text(a), this.model.set({dataName: a});
            this.$(".title-wrapper").removeClass("editing"), this.$(".btn-title-edit").removeClass("active"), this.toggleDown()
        },
        bucketTypeChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val(), i = this.model.get("config"), l = t.attr("id");
            "bubble-color-bucket-type-picker" == l ? (i.colorBucketType = a, this.model.fetchBucketsForBubbleColor()) : (i.bucketType = a, this.model.fetchBuckets())
        },
        bucketCountChangeHandler: function (e) {
            var t = $(e.currentTarget), a = parseInt(t.val()), i = this.model.get("config"), l = t.attr("id");
            "bubble-color-bucket-count-picker" == l ? (i.colorBucketCount = a, this.model.fetchBucketsForBubbleColor()) : (i.bucketCount = a, this.model.fetchBuckets())
        },
        numberFieldChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val(), i = this.model.get("config"), l = t.attr("id");
            "bubble-color-field-picker" == l ? (i.colorFieldName = a, this.model.fetchBucketsForBubbleColor()) : "fluid-u-field-picker" == l || "fluid-v-field-picker" == l || (i.fieldName = a, this.model.fetchBuckets())
        },
        categoryFieldChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val(), i = this.model.get("config");
            i.fieldName = a, this.model.fetchFieldValues()
        },
        timeFieldChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val(), l = this.model.get("config");
            l.type == i.configTypes.MARKER_HEAT ? (l.timeField = a, this.trigger("configUpdate", this.model)) : (this.model.set({timeField: a}), this.model.fetchTimeBreaks())
        },
        timeSegmentChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val(), l = this.model.get("config");
            l.type == i.configTypes.MARKER_HEAT ? (l.frameCount = parseInt(a), this.trigger("configUpdate", this.model)) : (this.model.set({frameCount: parseInt(a)}), this.model.fetchTimeBreaks())
        },
        timeDurationChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), l = parseFloat(a.val());
            t.type == i.configTypes.MARKER_HEAT ? t.duration = l : this.model.set({duration: l}), this.trigger("timeLayerConfigUpdate", this.model)
        },
        timeAccumulateChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), l = a.prop("checked");
            t.type == i.configTypes.MARKER_HEAT ? (t.timeAccumulate = l, this.trigger("timeLayerConfigUpdate", this.model)) : (this.model.set({timeAccumulate: l}), this.trigger("configUpdate", this.model))
        },
        fluidUFieldChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val(), i = this.model.get("config");
            i.uField = a, this.trigger("fluidConfigUpdate", this.model)
        },
        fluidVFieldChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val(), i = this.model.get("config");
            i.vField = a, this.trigger("fluidConfigUpdate", this.model)
        },
        fluidWidthChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val(), i = this.model.get("config");
            i.width = parseFloat(a), this.trigger("fluidConfigUpdate", this.model)
        },
        fluidOpacityChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val(), i = this.model.get("config");
            i.opacity = parseFloat(a), this.trigger("fluidConfigUpdate", this.model)
        },
        fluidDurationChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val(), i = this.model.get("config");
            i.duration = parseInt(a), this.trigger("fluidConfigUpdate", this.model)
        },
        fluidTopValueChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = parseFloat(a.val());
            t.topValue = i, this.trigger("fluidConfigUpdate", this.model)
        },
        fluidTopValuePressHandler: function (e) {
            13 == e.keyCode && this.fluidTopValueChangeHandler(e)
        },
        fluidColorChangeHandler: function (e) {
            var t = this.model.get("config");
            e != t.colors[0] && (t.colors = [e], this.trigger("fluidConfigUpdate", this.model))
        },
        onHeatColorRampChange: function (e) {
            var t = this.model.get("config");
            t.colors = e.colors, this.trigger("configUpdate", this.model)
        },
        onChoroplethColorRampChange: function (e) {
            var t = this.model.get("config");
            t.colors = e.colors, this.trigger("configUpdate", this.model), this.toggleLegend(!0)
        },
        onBubbleColorRampChange: function (e) {
            var t = this.model.get("config");
            t.colors = e.colors;
            var a = r.getRandomColors(t.colorBucketCount, e.colors);
            t.breakColors = a, this.trigger("configUpdate", this.model), this.toggleLegend(!0)
        },
        onCategoryColorRampChange: function (e) {
            var t = this.model.get("config");
            t.colors = e.colors;
            var a = r.getRandomColors(t.fieldValues.length, e.colors);
            t.fieldColors = a, this.trigger("configUpdate", this.model), this.updateCategoryBuckets(), this.toggleLegend(!0)
        },
        updateCategoryBuckets: function () {
            var e = this.model.get("config"), t = e.fieldColors, a = e.fieldValues;
            this.$(".bucket-list").html(this.bucketTemplate({values: a, colors: t, colorList: i.colors}));
            for (var l = 0; l < t.length; l++) {
                var r = "bucket-" + l;
                this.$("#" + r + ".bucket-color-picker").colorselector({
                    context: this,
                    initColor: t[l],
                    callback: this.bucketColorChangeHandler
                })
            }
            this.drake && this.drake.destroy(), this.drake = dragula([$("#" + this.model.cid + ".data-layer .bucket-list")[0]], {
                moves: function (e, t, a) {
                    var i = a.className.split(" ");
                    return $.inArray("handle", i) > -1
                }, direction: "vertical", ignoreInputTextSelection: !0
            });
            var o = $.proxy(this.dropHandler, this);
            this.drake.on("drop", o), this.$(".scrollbar").perfectScrollbar()
        },
        dropHandler: function (e, t, a, i) {
            var l = $(e).find(".bucket-value").attr("id"), r = this.getValueIndex(l);
            if (r != -1) {
                var o = this.model.get("config"), s = o.fieldValues, n = o.fieldColors;
                if (i && $(i).hasClass("bucket")) {
                    var f = $(i).find(".bucket-value").attr("id"), d = this.getValueIndex(f), c = d < r ? 0 : -1;
                    this.arrayMove(s, r, d + c), this.arrayMove(n, r, d + c)
                } else this.arrayMove(s, r, s.length - 1), this.arrayMove(n, r, n.length - 1);
                this.updateLegend()
            }
        },
        getValueIndex: function (e) {
            var t = this.model.get("config"), a = t.fieldValues;
            if (!a)return -1;
            for (var i = 0; i < a.length; i++)if (a[i] == e)return i
        },
        arrayMove: function (e, t, a) {
            var i = e[t];
            e.splice(t, 1), e.splice(a, 0, i)
        },
        bucketColorChangeHandler: function (e, t, a, i) {
            var l = $(i).parent().index();
            if (l != -1) {
                var r = this.model.get("config");
                r.fieldColors[l] = e, this.trigger("configUpdate", this.model), this.toggleLegend(!0)
            }
        },
        filterPressHandler: function (e) {
            13 == e.keyCode && this.filterChangeHandler(e)
        },
        filterChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val().trim(), l = this.model.get("filter");
            if (r.stringIsBlank(a) && !r.stringIsBlank(l) || a.length > 0 && l != a) {
                this.model.set({filter: a});
                var o = this.model.get("config");
                o.type == i.configTypes.MARKER_CHOROPLETH ? this.model.fetchBuckets() : o.type == i.configTypes.MARKER_CATEGORY ? this.model.fetchFieldValues() : this.trigger("configUpdate", this.model)
            }
        },
        toggleLegendHandler: function (e) {
            var t = $(e.currentTarget), a = t.prop("checked");
            this.model.set({showLegend: a}), this.toggleLegend(a)
        },
        legendTitleChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val().trim();
            a = a ? a : i.defaultLegendTitle, this.model.set({legendTitle: a}), this.updateLegend()
        },
        legendOrderChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val();
            this.model.set({legendOrder: a}), this.updateLegend()
        },
        bubbleFillChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val(), l = this.model.get("config");
            if (l.fillMode = a, "single" == a) {
                var r = this.$("#bubble-panel #bubble-size-marker-opacity-picker").val();
                l.markerOpacity = parseFloat(r), this.$("#bubble-multi-fill-wrapper").addClass("hide"), this.$("#bubble-single-fill-wrapper").removeClass("hide")
            } else if ("multi" == a) {
                l.colorFieldName && l.colorBreaks || (l.colorFieldName = l.fieldName, l.colorBreaks = l.breaks, l.colorBucketCount = l.bucketCount, l.colorBucketType = l.bucketType);
                var r = this.$("#bubble-panel #bubble-color-marker-opacity-picker").val();
                l.markerOpacity = parseFloat(r);
                var o = this.$("#bubble-panel .marker-color-ramp-picker").attr("color-ramp-name"), s = i.colorRamp.getColor(o);
                s = s ? s : i.defaultColorRamp, l.colors = s, this.$("#bubble-multi-fill-wrapper").removeClass("hide"), this.$("#bubble-single-fill-wrapper").addClass("hide")
            }
            this.trigger("configUpdate", this.model), this.updateLegend()
        },
        toggleLegendSettings: function (e) {
            e ? this.$(".legend-setting-wrapper").removeClass("unchecked") : this.$(".legend-setting-wrapper").addClass("unchecked")
        },
        toggleLegend: function (e) {
            var t = this.$(".chk-toggle-legend"), a = t.prop("checked");
            a && e ? this.trigger("showLegend", this.model) : this.trigger("hideLegend", this.model), this.toggleLegendSettings(a)
        },
        hideLegend: function () {
            this.trigger("hideLegend", this.model)
        },
        updateLegend: function () {
            var e = this.model.get("showLegend");
            e && this.trigger("showLegend", this.model)
        },
        fieldsConfigBtnClickHandler: function () {
            this.trigger("showFieldsConfig", this.model)
        },
        toggleAnimation: function () {
            var e = this.$(".chk-toggle-animate"), t = e.prop("checked");
            if (t) {
                var a = l.animateUsed;
                if (a)return r.showWarning("只能有一个数据开启时态功能"), void e.prop("checked", !1);
                l.animateUsed = !0
            } else l.animateUsed = !1;
            var o = this.model.get("config");
            if (o.animated = t, t) {
                this.$("#animate-setting").removeClass("hide");
                var s = this.$("#animate-setting .time-field-picker").val();
                if (o.type == i.configTypes.MARKER_HEAT)s ? (o.timeField = s, this.trigger("configUpdate", this.model)) : o.animated = !1; else if (s) {
                    var n = this.$(".time-segment-picker").val();
                    n = parseInt(n), this.model.set({
                        animated: !0,
                        timeField: s,
                        frameCount: n
                    }), this.model.fetchTimeBreaks()
                } else this.model.set({animated: !1})
            } else this.trigger("hideTimeSlider", this.model), this.$("#animate-setting").addClass("hide"), o.type == i.configTypes.MARKER_HEAT ? o.timeField = void 0 : (this.model.set({animated: !1}), this.trigger("configUpdate", this.model))
        }
    });
    e.exports = s
}, function (e, t) {
    "use strict";
    var a = {};
    e.exports = a
}, function (e, t, a) {
    "use strict";
    var i = a(5), l = (a(4), {}), r = l.ConfigBase = function (e) {
        this.labelField = e && e.labelField ? e.labelField : void 0, this.labelColor = e && e.labelColor ? e.labelColor : i.defaultLabelColor, this.labelFont = e && e.labelFont ? e.labelFont : i.defaultLabelFont, this.labelSize = e && e.labelSize ? e.labelSize : i.defaultLabelSize
    };
    r.prototype.toJson = function () {
        return this
    }, r.prototype.isReady = function () {
        return !0
    };
    var o = l.MarkerConfigBase = function (e) {
        this.markerColor = e && e.markerColor ? e.markerColor : i.defaultMarkerColor, this.markerSize = e && e.markerSize ? e.markerSize : i.defaultMarkerSize, this.markerOpacity = e && (e.markerOpacity || 0 == e.markerOpacity) ? e.markerOpacity : i.defaultMarkerOpacity, this.outlineColor = e && e.outlineColor ? e.outlineColor : i.defaultOutlineColor, this.outlineWidth = e && (e.outlineWidth || 0 == e.outlineWidth) ? e.outlineWidth : i.defaultOutlineWidth, this.outlineOpacity = e && (e.outlineOpacity || 0 == e.outlineOpacity) ? e.outlineOpacity : i.defaultOutlineOpacity, r.apply(this, arguments)
    };
    _.extend(o.prototype, r.prototype);
    var s = l.MarkerSimpleConfig = function (e) {
        this.type = i.configTypes.MARKER_SIMPLE, o.apply(this, arguments)
    };
    _.extend(s.prototype, o.prototype);
    var n = l.MarkerChoroplethConfig = function (e) {
        if (this.type = i.configTypes.MARKER_CHOROPLETH, this.fieldName = e && e.fieldName ? e.fieldName : void 0, this.bucketCount = e && e.bucketCount ? e.bucketCount : i.defaultBucketCount, this.bucketType = e && e.bucketType ? e.bucketType : i.defaultBucketType, this.colors = e && e.colors ? e.colors : i.defaultColorRamp, this.colorsReversed = !(!e || !e.colorsReversed) && e.colorsReversed, this.markerColor = i.noDataColor, this.breaks = e && e.breaks ? e.breaks : void 0, e && e.equalInterval) {
            this.bucketType = "equalinterval", this.breaks = [];
            for (var t = 0; t < e.breakCount; t++)this.breaks[t] = e.equalInterval.max - t * e.equalInterval.step
        }
        o.apply(this, arguments)
    };
    _.extend(n.prototype, o.prototype, {
        toJson: function () {
            var e = [], t = new Rainbow;
            t.setNumberRange(0, this.bucketCount), t.setSpectrum.apply(void 0, this.colors);
            for (var a = 0; a < this.breaks.length; a++) {
                var i = this.colorsReversed ? this.breaks.length - 1 - a : a, l = t.colourAt(i);
                e.push({value: this.breaks[a], color: "#" + l})
            }
            return {
                type: this.type,
                markerSize: this.markerSize,
                markerColor: this.markerColor,
                markerOpacity: this.markerOpacity,
                outlineColor: this.outlineColor,
                outlineWidth: this.outlineWidth,
                outlineOpacity: this.outlineOpacity,
                fieldName: this.fieldName,
                buckets: e,
                labelField: this.labelField,
                labelFont: this.labelFont,
                labelSize: this.labelSize,
                labelColor: this.labelColor
            }
        }
    });
    var f = l.MarkerBubbleConfig = function (e) {
        this.type = i.configTypes.MARKER_BUBBLE, this.fieldName = e && e.fieldName ? e.fieldName : void 0, this.bucketCount = e && e.bucketCount ? e.bucketCount : i.defaultBucketCount, this.bucketType = e && e.bucketType ? e.bucketType : i.defaultBucketType, this.markerColor = e && e.markerColor ? e.markerColor : i.defaultBubbleMarkerColor, this.breaks = e && e.breaks ? e.breaks : void 0, this.minSize = e && e.minSize ? e.minSize : i.defaultBubbleMinSize, this.maxSize = e && e.maxSize ? e.maxSize : i.defaultBubbleMaxSize, this.fillMode = e && e.fillMode ? e.fillMode : i.defaultBubbleFillMode, this.colorFieldName = e && e.colorFieldName ? e.colorFieldName : void 0, this.colorBucketCount = e && e.colorBucketCount ? e.colorBucketCount : i.defaultBucketCount, this.colorBucketType = e && e.colorBucketType ? e.colorBucketType : i.defaultBucketType, this.colorBreaks = e && e.colorBreaks ? e.colorBreaks : void 0, this.colors = e && e.colors ? e.colors : i.defaultColorRamp, o.apply(this, arguments)
    };
    _.extend(f.prototype, o.prototype, {
        isReady: function () {
            return "single" == this.fillMode || this.breaks && this.colorBreaks
        }, toJson: function () {
            for (var e = [], t = (this.maxSize - this.minSize) / this.breaks.length, a = 0; a < this.breaks.length; a++)e.push({
                value: this.breaks[a],
                markerSize: this.maxSize - a * t
            });
            var i = {
                type: this.type,
                markerColor: this.markerColor,
                markerOpacity: this.markerOpacity,
                outlineColor: this.outlineColor,
                outlineWidth: this.outlineWidth,
                outlineOpacity: this.outlineOpacity,
                fieldName: this.fieldName,
                buckets: e,
                labelField: this.labelField,
                labelFont: this.labelFont,
                labelSize: this.labelSize,
                labelColor: this.labelColor,
                fillMode: this.fillMode
            };
            if ("multi" == this.fillMode) {
                e = [];
                var l = new Rainbow;
                l.setNumberRange(0, this.colorBucketCount), l.setSpectrum.apply(void 0, this.colors);
                for (var a = 0; a < this.colorBreaks.length; a++) {
                    var r = l.colourAt(a);
                    e.push({value: this.colorBreaks[a], color: "#" + r})
                }
                i.colorBuckets = e, i.colorFieldName = this.colorFieldName
            }
            return i
        }
    });
    var d = l.MarkerCategoryConfig = function (e) {
        this.type = i.configTypes.MARKER_CATEGORY, this.colors = e && e.colors ? e.colors : i.defaultColorRamp, this.fieldName = e && e.fieldName ? e.fieldName : void 0, this.fieldValues = e && e.fieldValues ? e.fieldValues : void 0, this.fieldColors = e && e.fieldColors ? e.fieldColors : void 0, o.apply(this, arguments)
    };
    _.extend(d.prototype, o.prototype, {
        toJson: function () {
            for (var e = [], t = 0; t < this.fieldValues.length; t++) {
                var a = this.fieldColors[t];
                a = a.indexOf("#") == -1 ? "#" + a : a, e.push({value: this.fieldValues[t], color: a})
            }
            return {
                type: this.type,
                markerSize: this.markerSize,
                markerOpacity: this.markerOpacity,
                outlineColor: this.outlineColor,
                outlineWidth: this.outlineWidth,
                outlineOpacity: this.outlineOpacity,
                fieldName: this.fieldName,
                buckets: e,
                labelField: this.labelField,
                labelFont: this.labelFont,
                labelSize: this.labelSize,
                labelColor: this.labelColor
            }
        }
    });
    var c = l.MarkerIntensityConfig = function (e) {
        this.type = i.configTypes.MARKER_INTENSITY, o.apply(this, arguments)
    };
    _.extend(c.prototype, o.prototype);
    var h = l.MarkerHeatConfig = function (e) {
        this.type = i.configTypes.MARKER_HEAT, this.heatSizeUnit = e && e.heatSizeUnit ? e.heatSizeUnit : i.defaultHeatSizeUnit, this.heatSize = e && e.heatSize ? e.heatSize : i.defaultHeatSize, this.heatMinOpacity = e && (e.heatMinOpacity || 0 == e.heatMinOpacity) ? e.heatMinOpacity : i.defaultHeatMinOpacity, e.heatOpacity ? this.heatMaxOpacity = e.heatOpacity : this.heatMaxOpacity = e && (e.heatMaxOpacity || 0 == e.heatMaxOpacity) ? e.heatMaxOpacity : i.defaultHeatMaxOpacity, this.heatTopValue = e && e.heatTopValue ? e.heatTopValue : i.defaultHeatTopValue, this.resolution = e && e.resolution ? e.resolution : i.defaultHeatResolution, this.weightField = e && e.weightField ? e.weightField : void 0, this.colors = e && e.colors ? e.colors : i.defaultHeatColor, this.animated = !(!e || !e.animated) && e.animated, this.timeField = e && e.timeField ? e.timeField : void 0, this.frameCount = e && e.frameCount ? e.frameCount : i.defaultTimeSegment, this.duration = e && e.duration ? e.duration : i.defaultTimeDuration, this.timeAccumulate = !(!e || !e.timeAccumulate) && e.timeAccumulate
    };
    h.prototype.toJson = function () {
        return this
    };
    var p = l.MarkerFluidConfig = function (e) {
        this.type = i.configTypes.MARKER_FLUID, this.uField = e && e.uField ? e.uField : void 0, this.vField = e && e.vField ? e.vField : void 0, this.width = e && e.width ? e.width : i.defaultFluidWidth, this.duration = e && e.duration ? e.duration : i.defaultFluidDuration, this.opacity = e && e.opacity ? e.opacity : i.defaultFluidOpacity, this.topValue = e && e.topValue ? e.topValue : i.defaultFluidTopValue, this.colors = e && e.colors ? e.colors : i.defaultFluidColors
    };
    _.extend(p.prototype, o.prototype);
    var u = l.PolylineConfigBase = function (e) {
        this.lineColor = e && e.lineColor ? e.lineColor : i.defaultLineColor, this.lineOpacity = e && (e.lineOpacity || 0 == e.lineOpacity) ? e.lineOpacity : i.defaultLineOpacity, this.lineWidth = e && e.lineWidth ? e.lineWidth : i.defaultLineWidth, r.apply(this, arguments)
    };
    _.extend(u.prototype, r.prototype);
    var g = l.PolylineSimpleConfig = function (e) {
        this.type = i.configTypes.POLYLINE_SIMPLE, u.apply(this, arguments)
    };
    _.extend(g.prototype, u.prototype);
    var m = l.PolylineChoroplethConfig = function (e) {
        if (this.type = i.configTypes.POLYLINE_CHOROPLETH, u.apply(this, arguments), this.fieldName = e && e.fieldName ? e.fieldName : void 0, this.bucketCount = e && e.bucketCount ? e.bucketCount : i.defaultBucketCount, this.bucketType = e && e.bucketType ? e.bucketType : i.defaultBucketType, this.colors = e && e.colors ? e.colors : i.defaultColorRamp, this.colorsReversed = !(!e || !e.colorsReversed) && e.colorsReversed, this.lineColor = i.noDataColor, this.breaks = e && e.breaks ? e.breaks : void 0, e && e.equalInterval) {
            this.bucketType = "equalinterval", this.breaks = [];
            for (var t = 0; t < e.breakCount; t++)this.breaks[t] = e.equalInterval.max - t * e.equalInterval.step
        }
    };
    _.extend(m.prototype, u.prototype, {
        toJson: function () {
            var e = [], t = new Rainbow;
            t.setNumberRange(0, this.bucketCount), t.setSpectrum.apply(void 0, this.colors);
            for (var a = 0; a < this.breaks.length; a++) {
                var i = this.colorsReversed ? this.breaks.length - 1 - a : a, l = t.colourAt(i);
                e.push({value: this.breaks[a], color: "#" + l})
            }
            return {
                type: this.type,
                lineColor: this.lineColor,
                lineOpacity: this.lineOpacity,
                lineWidth: this.lineWidth,
                fieldName: this.fieldName,
                buckets: e,
                labelField: this.labelField,
                labelFont: this.labelFont,
                labelSize: this.labelSize,
                labelColor: this.labelColor
            }
        }
    });
    var b = l.PolylineCategoryConfig = function (e) {
        this.type = i.configTypes.POLYLINE_CATEGORY, this.fieldName = e && e.fieldName ? e.fieldName : void 0, this.fieldValues = e && e.fieldValues ? e.fieldValues : void 0, this.fieldColors = e && e.fieldColors ? e.fieldColors : void 0, this.colors = e && e.colors ? e.colors : i.defaultColorRamp, u.apply(this, arguments)
    };
    _.extend(b.prototype, u.prototype, {
        toJson: function () {
            for (var e = [], t = 0; t < this.fieldValues.length; t++) {
                var a = this.fieldColors[t];
                a = a.indexOf("#") == -1 ? "#" + a : a, e.push({value: this.fieldValues[t], color: a})
            }
            return {
                type: this.type,
                lineOpacity: this.lineOpacity,
                lineWidth: this.lineWidth,
                fieldName: this.fieldName,
                buckets: e,
                labelField: this.labelField,
                labelFont: this.labelFont,
                labelSize: this.labelSize,
                labelColor: this.labelColor
            }
        }
    });
    var v = l.PolygonConfigBase = function (e) {
        this.fillColor = e && e.fillColor ? e.fillColor : i.defaultFillColor, this.fillOpacity = e && (e.fillOpacity || 0 == e.fillOpacity) ? e.fillOpacity : i.defaultFillOpacity, this.outlineColor = e && e.outlineColor ? e.outlineColor : i.defaultOutlineColor, this.outlineOpacity = e && (e.outlineOpacity || 0 == e.outlineOpacity) ? e.outlineOpacity : i.defaultOutlineOpacity, this.outlineWidth = e && (e.outlineWidth || 0 == e.outlineWidth) ? e.outlineWidth : i.defaultOutlineWidth, r.apply(this, arguments)
    };
    _.extend(v.prototype, r.prototype);
    var y = l.PolygonSimpleConfig = function (e) {
        this.type = i.configTypes.POLYGON_SIMPLE, v.apply(this, arguments)
    };
    _.extend(y.prototype, v.prototype);
    var k = l.PolygonChoroplethConfig = function (e) {
        if (this.type = i.configTypes.POLYGON_CHOROPLETH, v.apply(this, arguments), this.fieldName = e && e.fieldName ? e.fieldName : void 0, this.bucketCount = e && e.bucketCount ? e.bucketCount : i.defaultBucketCount, this.bucketType = e && e.bucketType ? e.bucketType : i.defaultBucketType, this.colors = e && e.colors ? e.colors : i.defaultColorRamp, this.colorsReversed = !(!e || !e.colorsReversed) && e.colorsReversed, this.fillColor = i.noDataColor, this.breaks = e && e.breaks ? e.breaks : void 0, e && e.equalInterval) {
            this.bucketType = "equalinterval", this.breaks = [];
            for (var t = 0; t < e.breakCount; t++)this.breaks[t] = e.equalInterval.max - t * e.equalInterval.step
        }
    };
    _.extend(k.prototype, v.prototype, {
        toJson: function () {
            var e = [], t = new Rainbow;
            t.setNumberRange(0, this.bucketCount), t.setSpectrum.apply(void 0, this.colors);
            for (var a = 0; a < this.breaks.length; a++) {
                var i = this.colorsReversed ? this.breaks.length - 1 - a : a, l = t.colourAt(i);
                e.push({value: this.breaks[a], color: "#" + l})
            }
            return {
                type: this.type,
                fillColor: this.fillColor,
                fillOpacity: this.fillOpacity,
                outlineColor: this.outlineColor,
                outlineWidth: this.outlineWidth,
                outlineOpacity: this.outlineOpacity,
                fieldName: this.fieldName,
                buckets: e,
                labelField: this.labelField,
                labelFont: this.labelFont,
                labelSize: this.labelSize,
                labelColor: this.labelColor
            }
        }
    });
    var C = l.PolygonCategoryConfig = function (e) {
        this.type = i.configTypes.POLYGON_CATEGORY,
            v.apply(this, arguments), this.colors = e && e.colors ? e.colors : i.defaultColorRamp, this.fieldName = e && e.fieldName ? e.fieldName : void 0, this.fieldValues = e && e.fieldValues ? e.fieldValues : void 0, this.fieldColors = e && e.fieldColors ? e.fieldColors : void 0
    };
    _.extend(C.prototype, v.prototype, {
        toJson: function () {
            for (var e = [], t = 0; t < this.fieldValues.length; t++) {
                var a = this.fieldColors[t];
                a = a.indexOf("#") == -1 ? "#" + a : a, e.push({value: this.fieldValues[t], color: a})
            }
            return {
                type: this.type,
                fillOpacity: this.fillOpacity,
                outlineColor: this.outlineColor,
                outlineWidth: this.outlineWidth,
                outlineOpacity: this.outlineOpacity,
                fieldName: this.fieldName,
                buckets: e,
                labelField: this.labelField,
                labelFont: this.labelFont,
                labelSize: this.labelSize,
                labelColor: this.labelColor
            }
        }
    }), l.create = function (e) {
        return null == e ? null : e == i.configTypes.MARKER_SIMPLE || e.type == i.configTypes.MARKER_SIMPLE ? new s(e) : e == i.configTypes.MARKER_INTENSITY || e.type == i.configTypes.MARKER_INTENSITY ? new c(e) : e == i.configTypes.MARKER_HEAT || e.type == i.configTypes.MARKER_HEAT ? new h(e) : e == i.configTypes.MARKER_CHOROPLETH || e.type == i.configTypes.MARKER_CHOROPLETH ? new n(e) : e == i.configTypes.MARKER_BUBBLE || e.type == i.configTypes.MARKER_BUBBLE ? new f(e) : e == i.configTypes.MARKER_CATEGORY || e.type == i.configTypes.MARKER_CATEGORY ? new d(e) : e == i.configTypes.MARKER_FLUID || e.type == i.configTypes.MARKER_FLUID ? new p(e) : e == i.configTypes.POLYGON_SIMPLE || e.type == i.configTypes.POLYGON_SIMPLE ? new y(e) : e == i.configTypes.POLYGON_CHOROPLETH || e.type == i.configTypes.POLYGON_CHOROPLETH ? new k(e) : e == i.configTypes.POLYGON_CATEGORY || e.type == i.configTypes.POLYGON_CATEGORY ? new C(e) : e == i.configTypes.POLYLINE_SIMPLE || e.type == i.configTypes.POLYLINE_SIMPLE ? new g(e) : e == i.configTypes.POLYLINE_CHOROPLETH || e.type == i.configTypes.POLYLINE_CHOROPLETH ? new m(e) : e == i.configTypes.POLYLINE_CATEGORY || e.type == i.configTypes.POLYLINE_CATEGORY ? new b(e) : void 0
    }, e.exports = l
}, function (e, t, a) {
    "use strict";
    var i = a(5), l = a(4), r = a(13), o = a(12), s = Backbone.View.extend({
        colorPickerTemplate: _.template($("#color-picker-template").html()),
        valuePickerTemplate: _.template($("#value-picker-template").html()),
        namePickerTemplate: _.template($("#name-picker-template").html()),
        bucketTemplate: _.template($("#bucket-template").html()),
        drake: void 0,
        events: {
            "click .template-thumb": "switch",
            "click .btn-toggle-up": "toggleUp",
            "click .title-wrapper": "toggleUp",
            "click .btn-zoom-to": "zoomTo",
            "click .chk-layer-toggle": "toggleLayerClickHandler",
            "change .chk-layer-toggle": "toggleLayer",
            "click .btn-layer-up": "layerUp",
            "click .btn-layer-down": "layerDown",
            "change .line-width-picker": "lineWidthChangeHandler",
            "change .line-opacity-picker": "lineOpacityChangeHandler",
            "change .label-field-picker": "labelFieldChangeHandler",
            "change .label-font-picker": "labelFontChangeHandler",
            "change .label-size-picker": "labelSizeChangeHandler",
            "change .bucket-type-picker": "bucketTypeChangeHandler",
            "change .bucket-count-picker": "bucketCountChangeHandler",
            "change .number-field-picker": "numberFieldChangeHandler",
            "change .category-field-picker": "categoryFieldChangeHandler",
            "change .time-field-picker": "timeFieldChangeHandler",
            "change .time-duration-picker": "timeDurationChangeHandler",
            "change .time-segment-picker": "timeSegmentChangeHandler",
            "change .chk-time-accumulate": "timeAccumulateChangeHandler",
            "keypress #input-filter": "filterPressHandler",
            "blur #input-filter": "filterChangeHandler",
            "change .chk-toggle-legend": "toggleLegendHandler",
            "input #input-legend-title": "legendTitleChangeHandler",
            "click .btn-title-edit": "titleEditHandler",
            "keypress .title-editor": "titleEditorPressHandler",
            click: "panelClickHandler",
            "click .btn-config-fields": "fieldsConfigBtnClickHandler",
            "change .chk-toggle-animate": "toggleAnimation"
        },
        configTable: {
            "simple-template": "simple-panel",
            "choropleth-template": "choropleth-panel",
            "category-template": "category-panel"
        },
        initialize: function () {
            this.listenTo(this.model, "change:fields", this.fieldsChangeHandler), this.listenTo(this.model, "bucketsFetched", this.bucketsFetchedHandler), this.listenTo(this.model, "fieldValuesFetched", this.fieldValuesFetchedHandler), this.listenTo(this.model, "timeBreaksFetched", this.timeBreaksFetchedHandler);
            var e = $.proxy(this.legendOrderChangeHandler, this);
            this.$("input[name=" + this.model.cid + "-radio-legend-order]").on("change", e), this.model.fetchFields()
        },
        init: function () {
            this._initSimpleTemplate(), this._initChoroplethTemplate(), this._initCategoryTemplate();
            var e = this.model.get("filter");
            e && this.$("#input-filter").val(e);
            var t = this.model.get("visible");
            t ? this.$("chk-layer-toggle").prop("checked", "checked") : (this.toggleUp(), this.$(".chk-layer-toggle").removeProp("checked"))
        },
        _initSimpleTemplate: function () {
            var e = this.model.get("config"), t = i.defaultLineColor, a = i.defaultLineOpacity, l = i.defaultLineWidth, r = i.defaultLabelColor, o = i.defaultLabelFont, s = i.defaultLabelSize, n = !1, f = !1, d = void 0, c = i.defaultTimeSegment, h = i.defaultTimeDuration, p = !1;
            if (e.type == i.configTypes.POLYLINE_SIMPLE && (t = e.lineColor, a = e.lineOpacity, l = e.lineWidth, r = e.labelColor, o = e.labelFont, s = e.labelSize, n = !0, f = this.model.get("animated"), f && (d = this.model.get("timeField"), c = this.model.get("frameCount"), h = this.model.get("duration"), p = this.model.get("timeAccumulate"))), this.$("#simple-panel .line-color-picker").append(this.colorPickerTemplate({
                    colors: i.colors,
                    defaultColor: t
                })), this.$("#simple-panel .line-width-picker").append(this.valuePickerTemplate({
                    values: i.lineWidths,
                    defaultValue: l
                })), this.$("#simple-panel .line-opacity-picker").append(this.valuePickerTemplate({
                    values: i.opacities,
                    defaultValue: a
                })), this.$("#simple-panel .label-color-picker").append(this.colorPickerTemplate({
                    colors: i.colors,
                    defaultColor: r
                })), this.$("#simple-panel .label-font-picker").append(this.namePickerTemplate({
                    values: i.labelFonts,
                    defaultValue: o
                })), this.$("#simple-panel .label-size-picker").append(this.valuePickerTemplate({
                    values: i.labelSizes,
                    defaultValue: s
                })), this.$("#simple-panel .line-color-picker").colorselector({
                    context: this,
                    initColor: t,
                    callback: this.lineColorChangeHandler
                }), this.$("#simple-panel .label-color-picker").colorselector({
                    context: this,
                    initColor: r,
                    callback: this.labelColorChangeHandler
                }), this.$(".time-segment-picker").append(this.valuePickerTemplate({
                    values: i.timeSegments,
                    defaultValue: c
                })), this.$(".time-duration-picker").append(this.valuePickerTemplate({
                    values: i.timeDurations,
                    defaultValue: h
                })), f && this.fillAnimateSettings(c, h, p, d), n) {
                var u = this.$("#simple-template");
                this._switchPanel(u)
            }
        },
        _initChoroplethTemplate: function () {
            var e = this.model.get("config"), t = i.defaultColorRamp, a = i.defaultLineOpacity, l = i.defaultLineWidth, r = i.defaultLabelColor, o = i.defaultLabelFont, s = i.defaultLabelSize, n = i.defaultBucketType, f = i.defaultBucketCount, d = !1, c = !1, h = i.defaultLegendTitle, p = i.defaultLegendOrder, u = !1, g = void 0, m = i.defaultTimeSegment, b = i.defaultTimeDuration, v = !1;
            if (e.type == i.configTypes.POLYLINE_CHOROPLETH) {
                if (a = e.lineOpacity, l = e.lineWidth, r = e.labelColor, o = e.labelFont, s = e.labelSize, n = e.bucketType, f = e.bucketCount, t = e.colors, d = !0, c = this.model.get("showLegend")) {
                    var y = this.model.get("legendTitle");
                    h = y ? y : i.defaultLegendTitle;
                    var k = this.model.get("legendOrder");
                    p = k ? k : i.defaultLegendOrder
                }
                u = this.model.get("animated"), u && (g = this.model.get("timeField"), m = this.model.get("frameCount"), b = this.model.get("duration"), v = this.model.get("timeAccumulate"))
            }
            var C = i.colorRamp.getColorName(t);
            if (C = C ? C : i.defaultColorRampName, this.$("#choropleth-panel .line-color-ramp-picker").ghColorRamp({
                    onChange: this.onChoroplethColorRampChange,
                    colors: i.colorRamp.colors,
                    defaultColorRamp: C,
                    context: this
                }), this.$("#choropleth-panel .line-width-picker").append(this.valuePickerTemplate({
                    values: i.lineWidths,
                    defaultValue: l
                })), this.$("#choropleth-panel .line-opacity-picker").append(this.valuePickerTemplate({
                    values: i.opacities,
                    defaultValue: a
                })), this.$("#choropleth-panel .label-color-picker").append(this.colorPickerTemplate({
                    colors: i.colors,
                    defaultColor: r
                })), this.$("#choropleth-panel .label-font-picker").append(this.namePickerTemplate({
                    values: i.labelFonts,
                    defaultValue: o
                })), this.$("#choropleth-panel .label-size-picker").append(this.valuePickerTemplate({
                    values: i.labelSizes,
                    defaultValue: s
                })), this.$("#choropleth-panel .bucket-type-picker").append(this.namePickerTemplate({
                    values: i.bucketTypes,
                    defaultValue: n
                })), this.$("#choropleth-panel .bucket-count-picker").append(this.valuePickerTemplate({
                    values: i.bucketCounts,
                    defaultValue: f
                })), this.$("#choropleth-panel .label-color-picker").colorselector({
                    context: this,
                    initColor: r,
                    callback: this.labelColorChangeHandler
                }), u && this.fillAnimateSettings(m, b, v, g), d) {
                var T = this.$("#choropleth-template");
                this._switchPanel(T), this.$(".legend-setting-wrapper").removeClass("disabled"), c && (this.$(".chk-toggle-legend").prop("checked", "checked"), this.$("#input-legend-title").val(h), this.$("input[value=" + p + "]").prop("checked", "checked"), this.toggleLegend(!0))
            }
        },
        _initCategoryTemplate: function () {
            var e = this.model.get("config"), t = i.fullColorRamp, a = i.defaultLineOpacity, l = i.defaultLineWidth, r = i.defaultLabelColor, o = i.defaultLabelFont, s = i.defaultLabelSize, n = !1, f = !1, d = i.defaultLegendTitle, c = i.defaultLegendOrder, h = !1, p = void 0, u = i.defaultTimeSegment, g = i.defaultTimeDuration, m = !1;
            if (e.type == i.configTypes.POLYLINE_CATEGORY) {
                if (a = e.lineOpacity, l = e.lineWidth, r = e.labelColor, o = e.labelFont, s = e.labelSize, t = e.colors, n = !0, f = this.model.get("showLegend")) {
                    var b = this.model.get("legendTitle");
                    d = b ? b : i.defaultLegendTitle;
                    var v = this.model.get("legendOrder");
                    c = v ? v : i.defaultLegendOrder
                }
                h = this.model.get("animated"), h && (p = this.model.get("timeField"), u = this.model.get("frameCount"), g = this.model.get("duration"), m = this.model.get("timeAccumulate"))
            }
            var y = i.colorRamp.getColorName(t);
            if (y = y ? y : i.defaultColorRampName, this.$("#category-panel .line-color-ramp-picker").ghColorRamp({
                    onChange: this.onCategoryColorRampChange,
                    colors: i.colorRamp.colors,
                    defaultColorRamp: y,
                    context: this
                }), this.$("#category-panel .line-opacity-picker").append(this.valuePickerTemplate({
                    values: i.opacities,
                    defaultValue: a
                })), this.$("#category-panel .line-width-picker").append(this.valuePickerTemplate({
                    values: i.lineWidths,
                    defaultValue: l
                })), this.$("#category-panel .label-color-picker").append(this.colorPickerTemplate({
                    colors: i.colors,
                    defaultColor: r
                })), this.$("#category-panel .label-font-picker").append(this.namePickerTemplate({
                    values: i.labelFonts,
                    defaultValue: o
                })), this.$("#category-panel .label-size-picker").append(this.valuePickerTemplate({
                    values: i.labelSizes,
                    defaultValue: s
                })), this.$("#category-panel .label-color-picker").colorselector({
                    context: this,
                    initColor: r,
                    callback: this.labelColorChangeHandler
                }), h && this.fillAnimateSettings(u, g, m, p), n) {
                this.updateCategoryBuckets();
                var k = this.$("#category-template");
                this._switchPanel(k), this.$(".legend-setting-wrapper").removeClass("disabled"), f && (this.$(".chk-toggle-legend").prop("checked", "checked"), this.$("#input-legend-title").val(d), this.$("input[value=" + c + "]").prop("checked", "checked"), this.toggleLegend(!0))
            }
        },
        fillAnimateSettings: function (e, t, a, i) {
            this.$(".time-segment-picker").val(e), this.$(".time-duration-picker").val(t), this.$(".chk-toggle-animate").prop("checked", "checked"), this.$(".chk-time-accumulate").prop("checked", a), this.$("#animate-setting .time-field-picker").val(i), this.$("#animate-setting").removeClass("hide")
        },
        "switch": function (e) {
            var t = $(e.currentTarget);
            if (this._switchPanel(t)) {
                var a = this.createConfig();
                a && (a.type == i.configTypes.POLYLINE_CHOROPLETH || a.type == i.configTypes.POLYLINE_CATEGORY ? this.$(".legend-setting-wrapper").removeClass("disabled") : this.$(".legend-setting-wrapper").addClass("disabled"), this.model.set({config: a}), a.type == i.configTypes.POLYLINE_SIMPLE ? this.trigger("configUpdate", this.model) : a.type == i.configTypes.POLYLINE_CHOROPLETH ? this.$("#choropleth-panel").hasClass("disabled") || this.$("#choropleth-panel").hasClass("disabled") || this.model.fetchBuckets() : a.type == i.configTypes.POLYLINE_CATEGORY && this.model.fetchFieldValues())
            }
        },
        bucketsFetchedHandler: function () {
            var e = this.model.get("config");
            e.type == i.configTypes.POLYLINE_CHOROPLETH && (this.trigger("configUpdate", this.model), this.toggleLegend(!0))
        },
        fieldValuesFetchedHandler: function () {
            var e = this.model.get("config");
            if (e.type == i.configTypes.POLYLINE_CATEGORY) {
                var t = l.getRandomColors(e.fieldValues.length, e.colors);
                e.fieldColors = t, this.trigger("configUpdate", this.model), this.updateCategoryBuckets(), this.toggleLegend(!0)
            }
        },
        timeBreaksFetchedHandler: function () {
            this.trigger("configUpdate", this.model)
        },
        _switchPanel: function (e) {
            var t = e.attr("id"), a = this.$('.config-template:has("#' + t + '")');
            if (a.hasClass("active"))return !1;
            this.$(".config-template").removeClass("active"), a.addClass("active"), this.trigger("hideLegend", this.model), this.$(".config-panel.active").removeClass("active");
            var i = this.configTable[t], l = this.$("#" + i);
            return l.hasClass("disabled") ? (this.$(".filter-container").addClass("disabled"), this.$(".legend-setting-wrapper").addClass("disabled"), this.$(".fields-setting-wrapper").addClass("disabled")) : (this.$(".filter-container").removeClass("disabled"), this.$(".legend-setting-wrapper").removeClass("disabled"), this.$(".fields-setting-wrapper").removeClass("disabled")), l.addClass("active"), "simple-panel" == i && this.$(".legend-setting-wrapper").addClass("disabled"), !0
        },
        createConfig: function () {
            var e = this.$(".config-panel.active"), t = e.attr("id");
            return "simple-panel" == t ? this.createSimpleConfig() : "choropleth-panel" == t ? this.$("#choropleth-panel").hasClass("disabled") ? null : this.createChoroplethConfig() : "category-panel" == t ? this.createCategoryConfig() : void 0
        },
        createSimpleConfig: function () {
            var e = this.$("#simple-panel .line-color-picker").val(), t = this.$("#simple-panel .line-width-picker").val(), a = this.$("#simple-panel .line-opacity-picker").val(), i = this.$("#simple-panel .label-color-picker").val(), l = this.$("#simple-panel .label-field-picker").find("option:selected"), o = 0 == l.index() ? null : l.val(), s = this.$("#simple-panel .label-font-picker").val(), n = this.$("#simple-panel .label-size-picker").val();
            return new r.PolylineSimpleConfig({
                lineColor: e,
                lineWidth: parseFloat(t),
                lineOpacity: parseFloat(a),
                labelColor: i,
                labelField: o,
                labelFont: s,
                labelSize: parseFloat(n)
            })
        },
        createChoroplethConfig: function () {
            var e = this.$("#choropleth-panel .line-color-ramp-picker").attr("color-ramp-name"), t = i.colorRamp.getColor(e);
            t = t ? t : i.defaultColorRamp;
            var a = this.$("#choropleth-panel .line-color-picker").val(), l = this.$("#choropleth-panel .line-width-picker").val(), o = this.$("#choropleth-panel .line-opacity-picker").val(), s = this.$("#choropleth-panel .label-color-picker").val(), n = this.$("#choropleth-panel .label-field-picker").find("option:selected"), f = 0 == n.index() ? null : n.val(), d = this.$("#choropleth-panel .label-font-picker").val(), c = this.$("#choropleth-panel .label-size-picker").val(), h = this.$("#choropleth-panel .number-field-picker").val();
            return new r.PolylineChoroplethConfig({
                colors: t,
                lineColor: a,
                lineWidth: parseFloat(l),
                lineOpacity: parseFloat(o),
                labelColor: s,
                labelField: f,
                labelFont: d,
                labelSize: parseFloat(c),
                fieldName: h
            })
        },
        createCategoryConfig: function () {
            var e = this.$("#category-panel .line-color-ramp-picker").attr("color-ramp-name"), t = i.colorRamp.getColor(e);
            t = t ? t : i.fullColorRamp;
            var a = this.$("#category-panel .line-color-picker").val(), l = this.$("#category-panel .line-width-picker").val(), o = this.$("#category-panel .line-opacity-picker").val(), s = this.$("#category-panel .label-color-picker").val(), n = this.$("#category-panel .label-field-picker").find("option:selected"), f = 0 == n.index() ? null : n.val(), d = this.$("#category-panel .label-font-picker").val(), c = this.$("#category-panel .label-size-picker").val(), h = this.$("#category-panel .category-field-picker").val();
            return new r.PolylineCategoryConfig({
                colors: t,
                lineColor: a,
                lineWidth: parseFloat(l),
                lineOpacity: parseFloat(o),
                labelColor: s,
                labelField: f,
                labelFont: d,
                labelSize: parseFloat(c),
                fieldName: h
            })
        },
        toggleUp: function (e) {
            $(this.el).hasClass("open") ? $(this.el).removeClass("open") : $(this.el).addClass("open"), e && e.stopImmediatePropagation()
        },
        toggleDown: function () {
            !$(this.el).hasClass("open") && this.$(".chk-layer-toggle").prop("checked") && ($(".data-layer").removeClass("open"), $(this.el).addClass("open"))
        },
        layerUp: function (e) {
            var t = $(this.el);
            t.insertBefore(t.prev(".data-layer")), this.trigger("layerUp", this.model), e.stopImmediatePropagation()
        },
        layerDown: function (e) {
            var t = $(this.el);
            t.insertAfter(t.next(".data-layer")), this.trigger("layerDown", this.model), e.stopImmediatePropagation()
        },
        toggleLayerClickHandler: function (e) {
            e.stopImmediatePropagation()
        },
        toggleLayer: function (e) {
            var t = $(e.currentTarget), a = t.prop("checked");
            this.model.set({visible: a}), a ? (this.trigger("showLayer", this.model), this.toggleDown(), this.$(".chk-toggle-legend").prop("checked") && this.trigger("showLegend", this.model)) : (this.trigger("hideLayer", this.model), this.trigger("hideLegend", this.model), $(this.el).removeClass("open")), e.stopImmediatePropagation()
        },
        zoomTo: function (e) {
            this.trigger("zoomTo", this.model), e.stopImmediatePropagation()
        },
        fieldsChangeHandler: function () {
            for (var e = this.model.get("config"), t = this.model.get("fields"), a = ["无"], i = [], r = [], o = 0; o < t.length; o++)a.push(t[o].name), l.isNumericType(t[o].type) ? (i.push(t[o].name), r.push(t[o].name)) : l.isDateTimeType(t[o].type) && r.push(t[o].name);
            this.$(".label-field-picker").append(this.valuePickerTemplate({
                values: a,
                defaultValue: e.labelField
            })), 0 == i.length ? this.$("#choropleth-panel").addClass("disabled") : this.$(".number-field-picker").append(this.valuePickerTemplate({
                values: i,
                defaultValue: e.fieldName
            })), a = a.slice(1), this.$(".category-field-picker").append(this.valuePickerTemplate({
                values: a,
                defaultValue: e.fieldName
            })), this.$(".time-field-picker").append(this.valuePickerTemplate({
                values: r,
                defaultValue: this.model.get("timeField")
            }))
        },
        lineWidthChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = parseFloat(a.val());
            t.lineWidth = i, this.trigger("configUpdate", this.model)
        },
        lineOpacityChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = parseFloat(a.val());
            t.lineOpacity = i, this.trigger("configUpdate", this.model)
        },
        lineColorChangeHandler: function (e) {
            var t = this.model.get("config");
            e != t.lineColor && (t.lineColor = e, this.trigger("configUpdate", this.model), this.updateLegend())
        },
        labelFieldChangeHandler: function (e) {
            var t = $(e.currentTarget), a = this.model.get("config"), i = t.find("option:selected"), l = 0 == i.index() ? null : i.val();
            a.labelField = l, this.trigger("configUpdate", this.model)
        },
        labelColorChangeHandler: function (e) {
            var t = this.model.get("config");
            e != t.labelColor && (t.labelColor = e, t.labelField && this.trigger("configUpdate", this.model))
        },
        labelFontChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = a.val();
            t.labelFont = i, t.labelField && this.trigger("configUpdate", this.model)
        },
        labelSizeChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = parseFloat(a.val());
            t.labelSize = i, t.labelField && this.trigger("configUpdate", this.model)
        },
        titleEditHandler: function (e) {
            var t = $(e.currentTarget);
            if (t.hasClass("active"))this.$(".title-wrapper").removeClass("editing"), t.removeClass("active"); else {
                t.addClass("active");
                var a = this.$(".title-wrapper");
                if (a.hasClass("editing"))return;
                a.addClass("editing"), this.$(".title-wrapper .title-editor").focus()
            }
            e.stopImmediatePropagation(), e.preventDefault();
            var i = this.$(".title-editor"), l = i.val().trim().length;
            this.$(".title-editor").selectRange(l, l)
        },
        titleEditorPressHandler: function (e) {
            13 == e.keyCode && this.titleChangeHandler(e)
        },
        titleEditorClickHandler: function (e) {
            e.stopImmediatePropagation()
        },
        panelClickHandler: function (e) {
            var t = this.$(".title-wrapper .title-editor"), a = t.val().trim();
            if (l.stringIsBlank(a)) {
                var i = this.$(".title-wrapper span").text();
                t.val(i)
            } else this.$(".title-wrapper span").text(a), this.model.set({dataName: a});
            this.$(".title-wrapper").removeClass("editing"), this.$(".btn-title-edit").removeClass("active"), this.toggleDown()
        },
        titleChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val().trim();
            if (l.stringIsBlank(a)) {
                var i = this.$(".title-wrapper span").text();
                t.val(i)
            } else this.$(".title-wrapper span").text(a), this.model.set({dataName: a});
            this.$(".title-wrapper").removeClass("editing")
        },
        bucketTypeChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val(), i = this.model.get("config");
            i.bucketType = a, this.model.fetchBuckets()
        },
        bucketCountChangeHandler: function (e) {
            var t = $(e.currentTarget), a = parseInt(t.val()), i = this.model.get("config");
            i.bucketCount = a, this.model.fetchBuckets()
        },
        numberFieldChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val(), i = this.model.get("config");
            i.fieldName = a, this.model.fetchBuckets()
        },
        categoryFieldChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val(), i = this.model.get("config");
            i.fieldName = a, this.model.fetchFieldValues()
        },
        timeFieldChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val();
            this.model.set({timeField: a}), this.model.fetchTimeBreaks()
        },
        timeSegmentChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val();
            this.model.set({frameCount: parseInt(a)}), this.model.fetchTimeBreaks()
        },
        timeDurationChangeHandler: function (e) {
            var t = $(e.currentTarget), a = parseFloat(t.val());
            this.model.set({duration: a}), this.trigger("timeLayerConfigUpdate", this.model)
        },
        timeAccumulateChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.prop("checked");
            this.model.set({timeAccumulate: a}), this.trigger("configUpdate", this.model)
        },
        onChoroplethColorRampChange: function (e) {
            var t = this.model.get("config");
            t.colors = e.colors, this.trigger("configUpdate", this.model), this.toggleLegend(!0)
        },
        onCategoryColorRampChange: function (e) {
            var t = this.model.get("config");
            t.colors = e.colors;
            var a = l.getRandomColors(t.fieldValues.length, e.colors);
            t.fieldColors = a, this.trigger("configUpdate", this.model), this.updateCategoryBuckets(), this.toggleLegend(!0)
        },
        updateCategoryBuckets: function () {
            var e = this.model.get("config"), t = e.fieldColors, a = e.fieldValues;
            this.$(".bucket-list").html(this.bucketTemplate({values: a, colors: t, colorList: i.colors}));
            for (var l = 0; l < t.length; l++) {
                var r = "bucket-" + l;
                this.$("#" + r + ".bucket-color-picker").colorselector({
                    context: this,
                    initColor: t[l],
                    callback: this.bucketColorChangeHandler
                })
            }
            this.drake && this.drake.destroy(), this.drake = dragula([$("#" + this.model.cid + ".data-layer .bucket-list")[0]], {
                moves: function (e, t, a) {
                    var i = a.className.split(" ");
                    return $.inArray("handle", i) > -1
                }, direction: "vertical", ignoreInputTextSelection: !0
            });
            var o = $.proxy(this.dropHandler, this);
            this.drake.on("drop", o), this.$(".scrollbar").perfectScrollbar()
        },
        dropHandler: function (e, t, a, i) {
            var l = $(e).find(".bucket-value").attr("id"), r = this.getValueIndex(l);
            if (r != -1) {
                var o = this.model.get("config"), s = o.fieldValues, n = o.fieldColors;
                if (i && $(i).hasClass("bucket")) {
                    var f = $(i).find(".bucket-value").attr("id"), d = this.getValueIndex(f), c = d < r ? 0 : -1;
                    this.arrayMove(s, r, d + c), this.arrayMove(n, r, d + c)
                } else this.arrayMove(s, r, s.length - 1), this.arrayMove(n, r, n.length - 1);
                this.updateLegend()
            }
        },
        getValueIndex: function (e) {
            var t = this.model.get("config"), a = t.fieldValues;
            if (!a)return -1;
            for (var i = 0; i < a.length; i++)if (a[i] == e)return i
        },
        arrayMove: function (e, t, a) {
            var i = e[t];
            e.splice(t, 1), e.splice(a, 0, i)
        },
        bucketColorChangeHandler: function (e, t, a, i) {
            var l = $(i).parent().index();
            if (l != -1) {
                var r = this.model.get("config");
                r.fieldColors[l] = e, this.trigger("configUpdate", this.model), this.toggleLegend(!0)
            }
        },
        filterPressHandler: function (e) {
            13 == e.keyCode && this.filterChangeHandler(e)
        },
        filterChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val().trim(), r = this.model.get("filter");
            if (l.stringIsBlank(a) && !l.stringIsBlank(r) || a.length > 0 && r != a) {
                this.model.set({filter: a});
                var o = this.model.get("config");
                o.type == i.configTypes.POLYLINE_CHOROPLETH ? this.model.fetchBuckets() : o.type == i.configTypes.POLYLINE_CATEGORY ? this.model.fetchFieldValues() : this.trigger("configUpdate", this.model)
            }
        },
        toggleLegendHandler: function (e) {
            var t = $(e.currentTarget), a = t.prop("checked");
            this.model.set({showLegend: a}), this.toggleLegend(a)
        },
        legendTitleChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val().trim();
            a = a ? a : i.defaultLegendTitle, this.model.set({legendTitle: a}), this.updateLegend()
        },
        legendOrderChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val();
            this.model.set({legendOrder: a}), this.updateLegend()
        },
        toggleLegendSettings: function (e) {
            e ? this.$(".legend-setting-wrapper").removeClass("unchecked") : this.$(".legend-setting-wrapper").addClass("unchecked")
        },
        toggleLegend: function (e) {
            var t = this.$(".chk-toggle-legend");
            if (t) {
                var a = t.prop("checked");
                a && e ? this.trigger("showLegend", this.model) : this.trigger("hideLegend", this.model), this.toggleLegendSettings(a)
            }
        },
        hideLegend: function () {
            this.trigger("hideLegend", this.model)
        },
        updateLegend: function () {
            var e = this.model.get("showLegend");
            e && this.trigger("showLegend", this.model)
        },
        fieldsConfigBtnClickHandler: function () {
            this.trigger("showFieldsConfig", this.model)
        },
        toggleAnimation: function () {
            var e = this.$(".chk-toggle-animate"), t = e.prop("checked");
            if (t) {
                var a = o.animateUsed;
                if (a)return l.showWarning("只能有一个数据开启时态功能"), void e.prop("checked", !1);
                o.animateUsed = !0
            } else o.animateUsed = !1;
            if (t) {
                this.$("#animate-setting").removeClass("hide");
                var i = this.$("#animate-setting .time-field-picker").val();
                if (i) {
                    var r = this.$(".time-segment-picker").val();
                    r = parseInt(r), this.model.set({
                        animated: !0,
                        timeField: i,
                        frameCount: r
                    }), this.model.fetchTimeBreaks()
                } else this.model.set({animated: !1})
            } else this.trigger("hideTimeSlider", this.model), this.$("#animate-setting").addClass("hide"), this.model.set({animated: !1}), this.trigger("configUpdate", this.model)
        }
    });
    e.exports = s
}, function (e, t, a) {
    "use strict";
    var i = a(5), l = a(4), r = a(13), o = a(12), s = Backbone.View.extend({
        colorPickerTemplate: _.template($("#color-picker-template").html()),
        valuePickerTemplate: _.template($("#value-picker-template").html()),
        namePickerTemplate: _.template($("#name-picker-template").html()),
        bucketTemplate: _.template($("#bucket-template").html()),
        drake: void 0,
        events: {
            "click .template-thumb": "switch",
            "click .btn-toggle-up": "toggleUp",
            "click .title-wrapper": "toggleUp",
            "click .btn-zoom-to": "zoomTo",
            "click .chk-layer-toggle": "toggleLayerClickHandler",
            "change .chk-layer-toggle": "toggleLayer",
            "click .btn-layer-up": "layerUp",
            "click .btn-layer-down": "layerDown",
            "change .fill-opacity-picker": "fillOpacityChangeHandler",
            "change .outline-width-picker": "outlineWidthChangeHandler",
            "change .outline-opacity-picker": "outlineOpacityChangeHandler",
            "change .label-field-picker": "labelFieldChangeHandler",
            "change .label-font-picker": "labelFontChangeHandler",
            "change .label-size-picker": "labelSizeChangeHandler",
            "change .bucket-type-picker": "bucketTypeChangeHandler",
            "change .bucket-count-picker": "bucketCountChangeHandler",
            "change .number-field-picker": "numberFieldChangeHandler",
            "change .category-field-picker": "categoryFieldChangeHandler",
            "change .time-field-picker": "timeFieldChangeHandler",
            "change .time-duration-picker": "timeDurationChangeHandler",
            "change .time-segment-picker": "timeSegmentChangeHandler",
            "change .chk-time-accumulate": "timeAccumulateChangeHandler",
            "keypress #input-filter": "filterPressHandler",
            "blur #input-filter": "filterChangeHandler",
            "change .chk-toggle-legend": "toggleLegendHandler",
            "input #input-legend-title": "legendTitleChangeHandler",
            "click .btn-title-edit": "titleEditHandler",
            "keypress .title-editor": "titleEditorPressHandler",
            click: "panelClickHandler",
            "click .btn-config-fields": "fieldsConfigBtnClickHandler",
            "change .chk-toggle-animate": "toggleAnimation"
        },
        configTable: {
            "simple-template": "simple-panel",
            "choropleth-template": "choropleth-panel",
            "category-template": "category-panel"
        },
        initialize: function () {
            this.listenTo(this.model, "change:fields", this.fieldsChangeHandler), this.listenTo(this.model, "bucketsFetched", this.bucketsFetchedHandler), this.listenTo(this.model, "fieldValuesFetched", this.fieldValuesFetchedHandler), this.listenTo(this.model, "timeBreaksFetched", this.timeBreaksFetchedHandler);
            var e = $.proxy(this.legendOrderChangeHandler, this);
            this.$("input[name=" + this.model.cid + "-radio-legend-order]").on("change", e), this.model.fetchFields()
        },
        init: function () {
            this._initSimpleTemplate(), this._initChoroplethTemplate(), this._initCategoryTemplate();
            var e = this.model.get("filter");
            e && this.$("#input-filter").val(e);
            var t = this.model.get("visible");
            t ? this.$("chk-layer-toggle").prop("checked", "checked") : (this.toggleUp(), this.$(".chk-layer-toggle").removeProp("checked"))
        },
        _initSimpleTemplate: function () {
            var e = this.model.get("config"), t = i.defaultFillColor, a = i.defaultFillOpacity, l = i.defaultOutlineColor, r = i.defaultOutlineOpacity, o = i.defaultOutlineWidth, s = i.defaultLabelColor, n = i.defaultLabelFont, f = i.defaultLabelSize, d = !1, c = !1, h = void 0, p = i.defaultTimeSegment, u = i.defaultTimeDuration, g = !1;
            if (e.type == i.configTypes.POLYGON_SIMPLE && (t = e.fillColor, a = e.fillOpacity, l = e.outlineColor, r = e.outlineOpacity, o = e.outlineWidth, s = e.labelColor, n = e.labelFont, f = e.labelSize, d = !0, c = this.model.get("animated"), c && (h = this.model.get("timeField"), p = this.model.get("frameCount"), u = this.model.get("duration"), g = this.model.get("timeAccumulate"))), this.$("#simple-panel .fill-color-picker").append(this.colorPickerTemplate({
                    colors: i.colors,
                    defaultColor: t
                })), this.$("#simple-panel .fill-opacity-picker").append(this.valuePickerTemplate({
                    values: i.opacities,
                    defaultValue: a
                })), this.$("#simple-panel .outline-color-picker").append(this.colorPickerTemplate({
                    colors: i.colors,
                    defaultColor: l
                })), this.$("#simple-panel .outline-width-picker").append(this.valuePickerTemplate({
                    values: i.lineWidths,
                    defaultValue: o
                })), this.$("#simple-panel .outline-opacity-picker").append(this.valuePickerTemplate({
                    values: i.opacities,
                    defaultValue: r
                })), this.$("#simple-panel .label-color-picker").append(this.colorPickerTemplate({
                    colors: i.colors,
                    defaultColor: s
                })), this.$("#simple-panel .label-font-picker").append(this.namePickerTemplate({
                    values: i.labelFonts,
                    defaultValue: n
                })), this.$("#simple-panel .label-size-picker").append(this.valuePickerTemplate({
                    values: i.labelSizes,
                    defaultValue: f
                })), this.$("#simple-panel .fill-color-picker").colorselector({
                    context: this,
                    initColor: t,
                    callback: this.fillColorChangeHandler
                }), this.$("#simple-panel .outline-color-picker").colorselector({
                    context: this,
                    initColor: l,
                    callback: this.outlineColorChangeHandler
                }), this.$("#simple-panel .label-color-picker").colorselector({
                    context: this,
                    initColor: s,
                    callback: this.labelColorChangeHandler
                }), this.$(".time-segment-picker").append(this.valuePickerTemplate({
                    values: i.timeSegments,
                    defaultValue: p
                })), this.$(".time-duration-picker").append(this.valuePickerTemplate({
                    values: i.timeDurations,
                    defaultValue: u
                })), c && this.fillAnimateSettings(p, u, g, h), d) {
                var m = this.$("#simple-template");
                this._switchPanel(m)
            }
        },
        _initChoroplethTemplate: function () {
            var e = this.model.get("config"), t = i.defaultColorRamp, a = i.defaultFillOpacity, l = i.defaultOutlineColor, r = i.defaultOutlineOpacity, o = i.defaultOutlineWidth, s = i.defaultLabelColor, n = i.defaultLabelFont, f = i.defaultLabelSize, d = i.defaultBucketType, c = i.defaultBucketCount, h = !1, p = !1, u = i.defaultLegendTitle, g = i.defaultLegendOrder, m = !1, b = void 0, v = i.defaultTimeSegment, y = i.defaultTimeDuration, k = !1;
            if (e.type == i.configTypes.POLYGON_CHOROPLETH) {
                if (a = e.fillOpacity, l = e.outlineColor, r = e.outlineOpacity, o = e.outlineWidth, s = e.labelColor, n = e.labelFont, f = e.labelSize, d = e.bucketType, c = e.bucketCount, t = e.colors, h = !0, p = this.model.get("showLegend")) {
                    var C = this.model.get("legendTitle");
                    u = C ? C : i.defaultLegendTitle;
                    var T = this.model.get("legendOrder");
                    g = T ? T : i.defaultLegendOrder
                }
                m = this.model.get("animated"), m && (b = this.model.get("timeField"), v = this.model.get("frameCount"), y = this.model.get("duration"), k = this.model.get("timeAccumulate"))
            }
            var $ = i.colorRamp.getColorName(t);
            if ($ = $ ? $ : i.defaultColorRampName, this.$("#choropleth-panel .fill-color-ramp-picker").ghColorRamp({
                    onChange: this.onChoroplethColorRampChange,
                    colors: i.colorRamp.colors,
                    defaultColorRamp: $,
                    context: this
                }), this.$("#choropleth-panel .fill-opacity-picker").append(this.valuePickerTemplate({
                    values: i.opacities,
                    defaultValue: a
                })), this.$("#choropleth-panel .outline-color-picker").append(this.colorPickerTemplate({
                    colors: i.colors,
                    defaultColor: l
                })), this.$("#choropleth-panel .outline-width-picker").append(this.valuePickerTemplate({
                    values: i.lineWidths,
                    defaultValue: o
                })), this.$("#choropleth-panel .outline-opacity-picker").append(this.valuePickerTemplate({
                    values: i.opacities,
                    defaultValue: r
                })), this.$("#choropleth-panel .label-color-picker").append(this.colorPickerTemplate({
                    colors: i.colors,
                    defaultColor: s
                })), this.$("#choropleth-panel .label-font-picker").append(this.namePickerTemplate({
                    values: i.labelFonts, defaultValue: n
                })), this.$("#choropleth-panel .label-size-picker").append(this.valuePickerTemplate({
                    values: i.labelSizes,
                    defaultValue: f
                })), this.$("#choropleth-panel .bucket-type-picker").append(this.namePickerTemplate({
                    values: i.bucketTypes,
                    defaultValue: d
                })), this.$("#choropleth-panel .bucket-count-picker").append(this.valuePickerTemplate({
                    values: i.bucketCounts,
                    defaultValue: c
                })), this.$("#choropleth-panel .outline-color-picker").colorselector({
                    context: this,
                    initColor: l,
                    callback: this.outlineColorChangeHandler
                }), this.$("#choropleth-panel .label-color-picker").colorselector({
                    context: this,
                    initColor: s,
                    callback: this.labelColorChangeHandler
                }), m && this.fillAnimateSettings(v, y, k, b), h) {
                var L = this.$("#choropleth-template");
                this._switchPanel(L), this.$(".legend-setting-wrapper").removeClass("disabled"), p && (this.$(".chk-toggle-legend").prop("checked", "checked"), this.$("#input-legend-title").val(u), this.$("input[value=" + g + "]").prop("checked", "checked"), this.toggleLegend(!0))
            }
        },
        _initCategoryTemplate: function () {
            var e = this.model.get("config"), t = i.fullColorRamp, a = i.defaultFillOpacity, l = i.defaultOutlineColor, r = i.defaultOutlineOpacity, o = i.defaultOutlineWidth, s = i.defaultLabelColor, n = i.defaultLabelFont, f = i.defaultLabelSize, d = !1, c = !1, h = i.defaultLegendTitle, p = i.defaultLegendOrder, u = !1, g = void 0, m = i.defaultTimeSegment, b = i.defaultTimeDuration, v = !1;
            if (e.type == i.configTypes.POLYGON_CATEGORY) {
                if (a = e.fillOpacity, l = e.outlineColor, r = e.outlineOpacity, o = e.outlineWidth, s = e.labelColor, n = e.labelFont, f = e.labelSize, t = e.colors, d = !0, c = this.model.get("showLegend")) {
                    var y = this.model.get("legendTitle");
                    h = y ? y : i.defaultLegendTitle;
                    var k = this.model.get("legendOrder");
                    p = k ? k : i.defaultLegendOrder
                }
                u = this.model.get("animated"), u && (g = this.model.get("timeField"), m = this.model.get("frameCount"), b = this.model.get("duration"), v = this.model.get("timeAccumulate"))
            }
            var C = i.colorRamp.getColorName(t);
            if (C = C ? C : i.defaultColorRampName, this.$("#category-panel .fill-color-ramp-picker").ghColorRamp({
                    onChange: this.onCategoryColorRampChange,
                    colors: i.colorRamp.colors,
                    defaultColorRamp: C,
                    context: this
                }), this.$("#category-panel .fill-opacity-picker").append(this.valuePickerTemplate({
                    values: i.opacities,
                    defaultValue: a
                })), this.$("#category-panel .outline-color-picker").append(this.colorPickerTemplate({
                    colors: i.colors,
                    defaultColor: l
                })), this.$("#category-panel .outline-width-picker").append(this.valuePickerTemplate({
                    values: i.lineWidths,
                    defaultValue: o
                })), this.$("#category-panel .outline-opacity-picker").append(this.valuePickerTemplate({
                    values: i.opacities,
                    defaultValue: r
                })), this.$("#category-panel .label-color-picker").append(this.colorPickerTemplate({
                    colors: i.colors,
                    defaultColor: s
                })), this.$("#category-panel .label-font-picker").append(this.namePickerTemplate({
                    values: i.labelFonts,
                    defaultValue: n
                })), this.$("#category-panel .label-size-picker").append(this.valuePickerTemplate({
                    values: i.labelSizes,
                    defaultValue: f
                })), this.$("#category-panel .outline-color-picker").colorselector({
                    context: this,
                    initColor: l,
                    callback: this.outlineColorChangeHandler
                }), this.$("#category-panel .label-color-picker").colorselector({
                    context: this,
                    initColor: s,
                    callback: this.labelColorChangeHandler
                }), u && this.fillAnimateSettings(m, b, v, g), d) {
                this.updateCategoryBuckets();
                var T = this.$("#category-template");
                this._switchPanel(T), this.$(".legend-setting-wrapper").removeClass("disabled"), c && (this.$(".chk-toggle-legend").prop("checked", "checked"), this.$("#input-legend-title").val(h), this.$("input[value=" + p + "]").prop("checked", "checked"), this.toggleLegend(!0))
            }
        },
        fillAnimateSettings: function (e, t, a, i) {
            this.$(".time-segment-picker").val(e), this.$(".time-duration-picker").val(t), this.$(".chk-toggle-animate").prop("checked", "checked"), this.$(".chk-time-accumulate").prop("checked", a), this.$("#animate-setting .time-field-picker").val(i), this.$("#animate-setting").removeClass("hide")
        },
        "switch": function (e) {
            var t = $(e.currentTarget);
            if (this._switchPanel(t)) {
                var a = this.createConfig();
                a && (a.type == i.configTypes.POLYGON_CHOROPLETH || a.type == i.configTypes.POLYGON_CATEGORY ? this.$(".legend-setting-wrapper").removeClass("disabled") : this.$(".legend-setting-wrapper").addClass("disabled"), this.model.set({config: a}), a.type == i.configTypes.POLYGON_SIMPLE ? this.trigger("configUpdate", this.model) : a.type == i.configTypes.POLYGON_CHOROPLETH ? this.$("#choropleth-panel").hasClass("disabled") || this.model.fetchBuckets() : a.type == i.configTypes.POLYGON_CATEGORY && this.model.fetchFieldValues())
            }
        },
        bucketsFetchedHandler: function () {
            var e = this.model.get("config");
            e.type == i.configTypes.POLYGON_CHOROPLETH && (this.trigger("configUpdate", this.model), this.toggleLegend(!0))
        },
        fieldValuesFetchedHandler: function () {
            var e = this.model.get("config");
            if (e.type == i.configTypes.POLYGON_CATEGORY) {
                var t = l.getRandomColors(e.fieldValues.length, e.colors);
                e.fieldColors = t, this.trigger("configUpdate", this.model), this.updateCategoryBuckets(), this.toggleLegend(!0)
            }
        },
        timeBreaksFetchedHandler: function () {
            this.trigger("configUpdate", this.model)
        },
        _switchPanel: function (e) {
            var t = e.attr("id"), a = this.$('.config-template:has("#' + t + '")');
            if (a.hasClass("active"))return !1;
            this.$(".config-template").removeClass("active"), a.addClass("active"), this.trigger("hideLegend", this.model), this.$(".config-panel.active").removeClass("active");
            var i = this.configTable[t], l = this.$("#" + i);
            return l.hasClass("disabled") ? (this.$(".filter-container").addClass("disabled"), this.$(".legend-setting-wrapper").addClass("disabled"), this.$(".fields-setting-wrapper").addClass("disabled")) : (this.$(".filter-container").removeClass("disabled"), this.$(".legend-setting-wrapper").removeClass("disabled"), this.$(".fields-setting-wrapper").removeClass("disabled")), l.addClass("active"), "simple-panel" == i && this.$(".legend-setting-wrapper").addClass("disabled"), !0
        },
        createConfig: function () {
            var e = this.$(".config-panel.active"), t = e.attr("id");
            return "simple-panel" == t ? this.createSimpleConfig() : "choropleth-panel" == t ? this.$("#choropleth-panel").hasClass("disabled") ? null : this.createChoroplethConfig() : "category-panel" == t ? this.createCategoryConfig() : void 0
        },
        createSimpleConfig: function () {
            var e = this.$("#simple-panel .fill-color-picker").val(), t = this.$("#simple-panel .fill-opacity-picker").val(), a = this.$("#simple-panel .outline-color-picker").val(), i = this.$("#simple-panel .outline-width-picker").val(), l = this.$("#simple-panel .outline-opacity-picker").val(), o = this.$("#simple-panel .label-color-picker").val(), s = this.$("#simple-panel .label-field-picker").find("option:selected"), n = 0 == s.index() ? null : s.val(), f = this.$("#simple-panel .label-font-picker").val(), d = this.$("#simple-panel .label-size-picker").val();
            return new r.PolygonSimpleConfig({
                fillColor: e,
                fillOpacity: parseFloat(t),
                outlineColor: a,
                outlineWidth: parseFloat(i),
                outlineOpacity: parseFloat(l),
                labelColor: o,
                labelField: n,
                labelFont: f,
                labelSize: parseFloat(d)
            })
        },
        createChoroplethConfig: function () {
            var e = this.$("#choropleth-panel .fill-color-ramp-picker").attr("color-ramp-name"), t = i.colorRamp.getColor(e);
            t = t ? t : i.defaultColorRamp;
            var a = this.$("#choropleth-panel .fill-opacity-picker").val(), l = this.$("#choropleth-panel .outline-color-picker").val(), o = this.$("#choropleth-panel .outline-width-picker").val(), s = this.$("#choropleth-panel .outline-opacity-picker").val(), n = this.$("#choropleth-panel .label-color-picker").val(), f = this.$("#choropleth-panel .label-field-picker").find("option:selected"), d = 0 == f.index() ? null : f.val(), c = this.$("#choropleth-panel .label-font-picker").val(), h = this.$("#choropleth-panel .label-size-picker").val(), p = this.$("#choropleth-panel .number-field-picker").val();
            return new r.PolygonChoroplethConfig({
                colors: t,
                fillOpacity: parseFloat(a),
                outlineColor: l,
                outlineWidth: parseFloat(o),
                outlineOpacity: parseFloat(s),
                labelColor: n,
                labelField: d,
                labelFont: c,
                labelSize: parseFloat(h),
                fieldName: p
            })
        },
        createCategoryConfig: function () {
            var e = this.$("#category-panel .fill-color-ramp-picker").attr("color-ramp-name"), t = i.colorRamp.getColor(e);
            t = t ? t : i.fullColorRamp;
            var a = this.$("#category-panel .fill-opacity-picker").val(), l = this.$("#category-panel .outline-color-picker").val(), o = this.$("#category-panel .outline-width-picker").val(), s = this.$("#category-panel .outline-opacity-picker").val(), n = this.$("#category-panel .label-color-picker").val(), f = this.$("#category-panel .label-field-picker").find("option:selected"), d = 0 == f.index() ? null : f.val(), c = this.$("#category-panel .label-font-picker").val(), h = this.$("#category-panel .label-size-picker").val(), p = this.$("#category-panel .category-field-picker").val();
            return new r.PolygonCategoryConfig({
                colors: t,
                fillOpacity: parseFloat(a),
                outlineColor: l,
                outlineWidth: parseFloat(o),
                outlineOpacity: parseFloat(s),
                labelColor: n,
                labelField: d,
                labelFont: c,
                labelSize: parseFloat(h),
                fieldName: p
            })
        },
        toggleUp: function (e) {
            $(this.el).hasClass("open") ? $(this.el).removeClass("open") : $(this.el).addClass("open"), e && e.stopImmediatePropagation()
        },
        toggleDown: function () {
            !$(this.el).hasClass("open") && this.$(".chk-layer-toggle").prop("checked") && ($(".data-layer").removeClass("open"), $(this.el).addClass("open"))
        },
        layerUp: function (e) {
            var t = $(this.el);
            t.insertBefore(t.prev(".data-layer")), this.trigger("layerUp", this.model), e.stopImmediatePropagation()
        },
        layerDown: function (e) {
            var t = $(this.el);
            t.insertAfter(t.next(".data-layer")), this.trigger("layerDown", this.model), e.stopImmediatePropagation()
        },
        toggleLayerClickHandler: function (e) {
            e.stopImmediatePropagation()
        },
        toggleLayer: function (e) {
            var t = $(e.currentTarget), a = t.prop("checked");
            this.model.set({visible: a}), a ? (this.trigger("showLayer", this.model), this.toggleDown(), this.$(".chk-toggle-legend").prop("checked") && this.trigger("showLegend", this.model)) : (this.trigger("hideLayer", this.model), this.trigger("hideLegend", this.model), $(this.el).removeClass("open")), e.stopImmediatePropagation()
        },
        zoomTo: function (e) {
            this.trigger("zoomTo", this.model), e.stopImmediatePropagation()
        },
        fieldsChangeHandler: function () {
            for (var e = this.model.get("config"), t = this.model.get("fields"), a = ["无"], i = [], r = [], o = 0; o < t.length; o++)a.push(t[o].name), l.isNumericType(t[o].type) ? (i.push(t[o].name), r.push(t[o].name)) : l.isDateTimeType(t[o].type) && r.push(t[o].name);
            this.$(".label-field-picker").append(this.valuePickerTemplate({
                values: a,
                defaultValue: e.labelField
            })), 0 == i.length ? this.$("#choropleth-panel").addClass("disabled") : this.$(".number-field-picker").append(this.valuePickerTemplate({
                values: i,
                defaultValue: e.fieldName
            })), a = a.slice(1), this.$(".category-field-picker").append(this.valuePickerTemplate({
                values: a,
                defaultValue: e.fieldName
            })), this.$(".time-field-picker").append(this.valuePickerTemplate({
                values: r,
                defaultValue: this.model.get("timeField")
            }))
        },
        fillOpacityChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = parseFloat(a.val());
            t.fillOpacity = i, this.trigger("configUpdate", this.model)
        },
        fillColorChangeHandler: function (e) {
            var t = this.model.get("config");
            e != t.fillColor && (t.fillColor = e, this.trigger("configUpdate", this.model), this.updateLegend())
        },
        outlineWidthChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = parseFloat(a.val());
            t.outlineWidth = i, this.trigger("configUpdate", this.model)
        },
        outlineOpacityChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = parseFloat(a.val());
            t.outlineOpacity = i, this.trigger("configUpdate", this.model)
        },
        outlineColorChangeHandler: function (e) {
            var t = this.model.get("config");
            e != t.outlineColor && (t.outlineColor = e, this.trigger("configUpdate", this.model), this.updateLegend())
        },
        labelFieldChangeHandler: function (e) {
            var t = $(e.currentTarget), a = this.model.get("config"), i = t.find("option:selected"), l = 0 == i.index() ? null : i.val();
            a.labelField = l, this.trigger("configUpdate", this.model)
        },
        labelColorChangeHandler: function (e) {
            var t = this.model.get("config");
            e != t.labelColor && (t.labelColor = e, t.labelField && this.trigger("configUpdate", this.model))
        },
        labelFontChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = a.val();
            t.labelFont = i, t.labelField && this.trigger("configUpdate", this.model)
        },
        labelSizeChangeHandler: function (e) {
            var t = this.model.get("config"), a = $(e.currentTarget), i = parseFloat(a.val());
            t.labelSize = i, t.labelField && this.trigger("configUpdate", this.model)
        },
        titleEditHandler: function (e) {
            var t = $(e.currentTarget);
            if (t.hasClass("active"))this.$(".title-wrapper").removeClass("editing"), t.removeClass("active"); else {
                t.addClass("active");
                var a = this.$(".title-wrapper");
                if (a.hasClass("editing"))return;
                a.addClass("editing"), this.$(".title-wrapper .title-editor").focus()
            }
            e.stopImmediatePropagation(), e.preventDefault();
            var i = this.$(".title-editor"), l = i.val().trim().length;
            this.$(".title-editor").selectRange(l, l)
        },
        titleEditorPressHandler: function (e) {
            13 == e.keyCode && this.titleChangeHandler(e)
        },
        titleEditorClickHandler: function (e) {
            e.stopImmediatePropagation()
        },
        panelClickHandler: function (e) {
            var t = this.$(".title-wrapper .title-editor"), a = t.val().trim();
            if (l.stringIsBlank(a)) {
                var i = this.$(".title-wrapper span").text();
                t.val(i)
            } else this.$(".title-wrapper span").text(a), this.model.set({dataName: a});
            this.$(".title-wrapper").removeClass("editing"), this.$(".btn-title-edit").removeClass("active"), this.toggleDown()
        },
        titleChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val().trim();
            if (l.stringIsBlank(a)) {
                var i = this.$(".title-wrapper span").text();
                t.val(i)
            } else this.$(".title-wrapper span").text(a), this.model.set({dataName: a});
            this.$(".title-wrapper").removeClass("editing")
        },
        bucketTypeChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val(), i = this.model.get("config");
            i.bucketType = a, this.model.fetchBuckets()
        },
        bucketCountChangeHandler: function (e) {
            var t = $(e.currentTarget), a = parseInt(t.val()), i = this.model.get("config");
            i.bucketCount = a, this.model.fetchBuckets()
        },
        numberFieldChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val(), i = this.model.get("config");
            i.fieldName = a, this.model.fetchBuckets()
        },
        categoryFieldChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val(), i = this.model.get("config");
            i.fieldName = a, this.model.fetchFieldValues()
        },
        timeFieldChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val();
            this.model.set({timeField: a}), this.model.fetchTimeBreaks()
        },
        timeSegmentChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val();
            this.model.set({frameCount: parseInt(a)}), this.model.fetchTimeBreaks()
        },
        timeDurationChangeHandler: function (e) {
            var t = $(e.currentTarget), a = parseFloat(t.val());
            this.model.set({duration: a}), this.trigger("timeLayerConfigUpdate", this.model)
        },
        timeAccumulateChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.prop("checked");
            this.model.set({timeAccumulate: a}), this.trigger("configUpdate", this.model)
        },
        onChoroplethColorRampChange: function (e) {
            var t = this.model.get("config");
            t.colors = e.colors, this.trigger("configUpdate", this.model), this.toggleLegend(!0)
        },
        onCategoryColorRampChange: function (e) {
            var t = this.model.get("config");
            t.colors = e.colors;
            var a = l.getRandomColors(t.fieldValues.length, e.colors);
            t.fieldColors = a, this.trigger("configUpdate", this.model), this.updateCategoryBuckets(), this.toggleLegend(!0)
        },
        updateCategoryBuckets: function () {
            var e = this.model.get("config"), t = e.fieldColors, a = e.fieldValues;
            this.$(".bucket-list").html(this.bucketTemplate({values: a, colors: t, colorList: i.colors}));
            for (var l = 0; l < t.length; l++) {
                var r = "bucket-" + l;
                this.$("#" + r + ".bucket-color-picker").colorselector({
                    context: this,
                    initColor: t[l],
                    callback: this.bucketColorChangeHandler
                })
            }
            this.drake && this.drake.destroy(), this.drake = dragula([$("#" + this.model.cid + ".data-layer .bucket-list")[0]], {
                moves: function (e, t, a) {
                    var i = a.className.split(" ");
                    return $.inArray("handle", i) > -1
                }, direction: "vertical", ignoreInputTextSelection: !0
            });
            var o = $.proxy(this.dropHandler, this);
            this.drake.on("drop", o), this.$(".scrollbar").perfectScrollbar()
        },
        dropHandler: function (e, t, a, i) {
            var l = $(e).find(".bucket-value").attr("id"), r = this.getValueIndex(l);
            if (r != -1) {
                var o = this.model.get("config"), s = o.fieldValues, n = o.fieldColors;
                if (i && $(i).hasClass("bucket")) {
                    var f = $(i).find(".bucket-value").attr("id"), d = this.getValueIndex(f), c = d < r ? 0 : -1;
                    this.arrayMove(s, r, d + c), this.arrayMove(n, r, d + c)
                } else this.arrayMove(s, r, s.length - 1), this.arrayMove(n, r, n.length - 1);
                this.updateLegend()
            }
        },
        getValueIndex: function (e) {
            var t = this.model.get("config"), a = t.fieldValues;
            if (!a)return -1;
            for (var i = 0; i < a.length; i++)if (a[i] == e)return i
        },
        arrayMove: function (e, t, a) {
            var i = e[t];
            e.splice(t, 1), e.splice(a, 0, i)
        },
        bucketColorChangeHandler: function (e, t, a, i) {
            var l = $(i).parent().index();
            if (l != -1) {
                var r = this.model.get("config");
                r.fieldColors[l] = e, this.trigger("configUpdate", this.model), this.toggleLegend(!0)
            }
        },
        filterPressHandler: function (e) {
            13 == e.keyCode && this.filterChangeHandler(e)
        },
        filterChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val().trim(), r = this.model.get("filter");
            if (l.stringIsBlank(a) && !l.stringIsBlank(r) || a.length > 0 && r != a) {
                this.model.set({filter: a});
                var o = this.model.get("config");
                o.type == i.configTypes.POLYGON_CHOROPLETH ? this.model.fetchBuckets() : o.type == i.configTypes.POLYGON_CATEGORY ? this.model.fetchFieldValues() : this.trigger("configUpdate", this.model)
            }
        },
        toggleLegendHandler: function (e) {
            var t = $(e.currentTarget), a = t.prop("checked");
            this.model.set({showLegend: a}), this.toggleLegend(a)
        },
        legendTitleChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val().trim();
            a = a ? a : i.defaultLegendTitle, this.model.set({legendTitle: a}), this.updateLegend()
        },
        legendOrderChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.val();
            this.model.set({legendOrder: a}), this.updateLegend()
        },
        toggleLegendSettings: function (e) {
            e ? this.$(".legend-setting-wrapper").removeClass("unchecked") : this.$(".legend-setting-wrapper").addClass("unchecked")
        },
        toggleLegend: function (e) {
            var t = this.$(".chk-toggle-legend");
            if (t) {
                var a = t.prop("checked");
                a && e ? this.trigger("showLegend", this.model) : this.trigger("hideLegend", this.model), this.toggleLegendSettings(a)
            }
        },
        hideLegend: function () {
            this.trigger("hideLegend", this.model)
        },
        updateLegend: function () {
            var e = this.model.get("showLegend");
            e && this.trigger("showLegend", this.model)
        },
        fieldsConfigBtnClickHandler: function () {
            this.trigger("showFieldsConfig", this.model)
        },
        toggleAnimation: function () {
            var e = this.$(".chk-toggle-animate"), t = e.prop("checked");
            if (t) {
                var a = o.animateUsed;
                if (a)return l.showWarning("只能有一个数据开启时态功能"), void e.prop("checked", !1);
                o.animateUsed = !0
            } else o.animateUsed = !1;
            if (t) {
                this.$("#animate-setting").removeClass("hide");
                var i = this.$("#animate-setting .time-field-picker").val();
                if (i) {
                    var r = this.$(".time-segment-picker").val();
                    r = parseInt(r), this.model.set({
                        animated: !0,
                        timeField: i,
                        frameCount: r
                    }), this.model.fetchTimeBreaks()
                } else this.model.set({animated: !1})
            } else this.trigger("hideTimeSlider", this.model), this.$("#animate-setting").addClass("hide"), this.model.set({animated: !1}), this.trigger("configUpdate", this.model)
        }
    });
    e.exports = s
}, function (e, t, a) {
    "use strict";
    var i = a(4), l = Backbone.View.extend({
        el: $("#share-panel"),
        template: _.template($("#share-content-template").html()),
        initialize: function () {
            this.listenTo(this.model, "change:uid", this.render)
        },
        events: {"click .btn-close-panel": "close"},
        close: function () {
            $(this.el).addClass("hide"), this.trigger("close")
        },
        render: function () {
            if (this.model.get("uid")) {
                var e = this.model.getShareUrl();
                this.$(".tool-panel-content").html(this.template({
                    shareUrl: e,
                    iframeScript: this.model.getIframeScript()
                })), this.$("#qrcode").empty().qrcode({
                    render: "image",
                    text: e,
                    size: 256
                }), $(".btn-copy").each(function () {
                    var e = new ZeroClipboard(this);
                    e.on("ready", function (t) {
                        e.on("aftercopy", function (e) {
                            i.showSuccess("已复制到剪切板")
                        })
                    })
                })
            } else this.$(".tool-panel-content").empty()
        }
    });
    e.exports = l
}, function (e, t, a) {
    "use strict";
    var i = a(4), l = a(18), r = Backbone.View.extend({
        el: $("#save-panel"), initialize: function () {
            this.listenTo(this.model, "change:title", this.renderTitle), this.listenTo(this.model, "change:desc", this.renderDesc), this.listenTo(this.model, "change:share", this.renderShare), this.listenTo(this.model, "error", this.showSaveError), this.listenTo(this.model, "sync", this.showSaveSuccess)
        }, events: {"click .btn-close-panel": "close", "click #btn-save-ok": "save"}, close: function () {
            $(this.el).addClass("hide"), this.trigger("close")
        }, save: function () {
            var e = this.$("#input-viz-name").val(), t = this.$("#text-viz-desc").val();
            if (i.stringIsBlank(e))return void i.showWarning("请输入名称");
            if (t.length > 200)return void i.showWarning("描述不能超过200个字");
            var a = this.$("#chk-share").prop("checked");
            this.model.set({title: e, desc: t, share: a}), i.showBtnLoading("btn-save-ok"), this.trigger("save");
            var r = l.screenShot();
            this.model.updateThumb(r)
        }, renderTitle: function () {
            this.$("#input-viz-name").val(this.model.get("title"))
        }, renderDesc: function () {
            this.$("#text-viz-desc").val(this.model.get("desc"))
        }, renderShare: function () {
            this.$("#chk-share").prop("checked", this.model.get("share"))
        }, showSaveError: function () {
            i.showError("保存失败"), i.hideBtnLoading("btn-save-ok")
        }, showSaveSuccess: function () {
            i.showSuccess("保存成功"), i.hideBtnLoading("btn-save-ok"), this.trigger("saved")
        }
    });
    e.exports = r
}, function (e, t) {
    "use strict";
    function a(e) {
        l = e
    }

    function i(e, t) {
        if (l) {
            var a = e || 512, i = t || 512;
            return l.print(a, i)
        }
    }

    var l = void 0;
    e.exports = {setMap: a, screenShot: i}
}, function (e, t, a) {
    "use strict";
    var i = a(4), l = Backbone.View.extend({
        el: $("#project-panel"),
        template: _.template($("#project-list-template").html()),
        initialize: function () {
            this.listenTo(this.model, "sync", this.render), this.listenTo(this.model, "error", this.showError), this.refreshCurrentPage(), $(this.el).carousel({interval: !1})
        },
        events: {
            "click .btn-close-panel": "close",
            "click #btn-create-project": "create",
            "click #btn-create-cancel": "cancel",
            "click .list-item": "open",
            "click #btn-pre-page": "getPrePage",
            "click #btn-next-page": "getNextPage",
            "click #btn-refresh": "refreshCurrentPage",
            "click #btn-search-project": "searchProject",
            "keypress #txt-search-project": "keyPressSearch"
        },
        render: function () {
            this.$("#project-list").html(this.template({vizItems: this.model.models})), this.model.activeProjectUid && this.$("#" + this.model.activeProjectUid).addClass("active"), this.$("#btn-refresh").removeClass("loading"), this.model.hasNextPage ? this.$("#btn-next-page").removeClass("disabled") : this.$("#btn-next-page").addClass("disabled"), this.model.currentPage > 0 ? this.$("#btn-pre-page").removeClass("disabled") : this.$("#btn-pre-page").addClass("disabled")
        },
        close: function () {
            $(this.el).addClass("hide"), this.trigger("close")
        },
        create: function () {
            $(this.el).carousel(0)
        },
        cancel: function () {
            $(this.el).carousel(1)
        },
        resetView: function () {
            $(this.el).carousel(1)
        },
        open: function (e) {
            var t = $(e.currentTarget);
            if (t.hasClass("active") || t.hasClass("loading"))return void this.trigger("openCurrent");
            this.$("#project-list .list-item.loading").removeClass("loading"), t.addClass("loading");
            var a = $(e.currentTarget).attr("id");
            this.trigger("open", a)
        },
        activate: function (e) {
            this.$(".list-item.active").removeClass("active");
            var t = this.$("#" + e);
            t.addClass("active").removeClass("loading"), this.model.activeProjectUid = e, $(this.el).removeClass("startup")
        },
        hideLoading: function () {
            this.$(".list-item.loading").removeClass("loading")
        },
        getPrePage: function () {
            this.model.fetchPrePage(), this.$("#btn-refresh").addClass("loading")
        },
        getNextPage: function () {
            this.model.fetchNextPage(), this.$("#btn-refresh").addClass("loading")
        },
        refreshCurrentPage: function () {
            this.model.fetch(), this.$("#btn-refresh").addClass("loading")
        },
        showError: function () {
            i.showError("查询项目出错"), this.$("#btn-refresh").removeClass("loading")
        },
        searchProject: function () {
            var e = this.$("#txt-search-project").val();
            this.model.currentPage = 0, this.model.search = e, this.refreshCurrentPage()
        },
        keyPressSearch: function (e) {
            13 == e.keyCode && this.searchProject()
        }
    });
    e.exports = l
}, function (e, t, a) {
    "use strict";
    var i = a(4), l = a(21), r = (a(18), a(5)), o = Backbone.View.extend({
        el: $("#create-panel"),
        initialize: function () {
        },
        events: {
            "click .btn-close-panel": "close",
            "click #btn-create-cancel": "close",
            "click #btn-create-ok": "create"
        },
        show: function () {
            this._reInit(), $(this.el).removeClass("hide"), this.$("#input-viz-name").focus()
        },
        close: function () {
            this.trigger("close")
        },
        _reInit: function () {
            this.$("#input-viz-name").val(""), this.$("#text-viz-desc").val("")
        },
        create: function () {
            var e = this.$("#input-viz-name").val(), t = this.$("#text-viz-desc").val();
            if (i.stringIsBlank(e)) {
                var a = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
                return void this.$("#input-viz-name").addClass("shake warning").one(a, function () {
                    $(this).removeClass("shake warning")
                })
            }
            if (t.length > 200)return void i.showWarning("描述不能超过200个字");
            var o = new l({
                title: e,
                desc: t,
                map: {
                    uid: r.defaultMap.uid,
                    type: r.defaultMap.type,
                    center: r.defaultMapStatus.center,
                    resolution: r.defaultMapStatus.resolution
                }
            });
            o.save(), o.once("error", this.showCreateError, this), o.once("sync", this.showCreateSuccess, this), i.showBtnLoading("btn-create-ok"), i.disabledBtn("btn-create-cancel")
        },
        showCreateError: function (e) {
            "string" == typeof e ? i.showError(e) : i.showError("创建失败"), i.hideBtnLoading("btn-create-ok"), i.enabledBtn("btn-create-cancel")
        },
        showCreateSuccess: function (e) {
            e.get("uid") && (i.showSuccess("新建成功"), i.hideBtnLoading("btn-create-ok"), i.enabledBtn("btn-create-cancel"), this.trigger("created", e), this._reInit())
        }
    });
    e.exports = o
}, function (e, t, a) {
    "use strict";
    var i = a(5), l = Backbone.Model.extend({
        urlRoot: "dataviz",
        idAttribute: "uid",
        defaults: {
            uid: void 0,
            title: void 0,
            desc: void 0,
            ak: void 0,
            map: {
                uid: i.defaultMap.uid,
                type: i.defaultMap.type,
                center: i.defaultMapStatus.center,
                resolution: i.defaultMapStatus.resolution
            }
        },
        parse: function (e) {
            if (0 != e.code)this.trigger("error", e.msg); else if (e.data)return e.data
        }
    });
    e.exports = l
}, function (e, t, a) {
    "use strict";
    var i = a(4), l = Backbone.View.extend({
        el: $("#delete-panel"),
        initialize: function () {
            this.listenTo(this.model, "change:shared", this.sharedChangedHandler)
        },
        events: {
            "click .btn-close-panel": "close",
            "click #btn-delete-cancel": "close",
            "click #btn-delete-ok": "doDelete"
        },
        sharedChangedHandler: function () {
            var e = this.model.get("shared");
            e ? this.$("#warning-text").addClass("shared") : this.$("#warning-text").removeClass("shared")
        },
        close: function () {
            $(this.el).addClass("hide"), this.trigger("close")
        },
        doDelete: function () {
            this.model.destroy({
                success: this.showDeleteSuccess,
                error: this.showDeleteError,
                context: this
            }), i.showBtnLoading("btn-delete-ok"), i.disabledBtn("btn-delete-cancel")
        },
        showDeleteError: function () {
            i.showError("删除失败"), i.hideBtnLoading("btn-delete-ok"), i.enabledBtn("btn-delete-cancel")
        },
        showDeleteSuccess: function () {
            i.showSuccess("删除成功"), i.hideBtnLoading("btn-delete-ok"), i.enabledBtn("btn-delete-cancel"), this.trigger("deleted")
        }
    });
    e.exports = l
}, function (e, t, a) {
    "use strict";
    var i = a(9), l = a(4), r = a(18), o = a(5), s = a(12), n = (a(24), a(28)), f = a(29), d = a(30), c = a(31), h = Backbone.View.extend({
        el: $("#map-wrapper"),
        events: {
            "click #tool-zoom-in": "mapZoomInHandler",
            "click #tool-zoom-out": "mapZoomOutHandler",
            "click #tool-erase": "clearFeatures"
        },
        featureTemplate: _.template($("#feature-info-template").html()),
        map: void 0,
        baseLayer: void 0,
        defaultGraphics: void 0,
        timeSlider: void 0,
        layerTable: {},
        timedTileLayerCollection: void 0,
        utfGridCache: new c,
        initialize: function () {
            this.listenTo(this.model, "change:baseMap", this.switchMap), this.listenTo(this.model, "change:mapStatus", this.zoomTo), this.listenTo(this.model, "layerConfig", this.layerConfigHandler), this.listenTo(this.model, "identifySuccess", this.identifySuccessHandler), this.listenTo(this.model, "identifyError", this.identifyErrorHandler), this.listenTo(this.model, "querySuccess", this.querySuccessHandler), this.listenTo(this.model, "queryError", this.queryErrorHandler), this.listenTo(this.model.get("dataLayerList"), "add", this.addHandler), this.listenTo(this.model.get("dataLayerList"), "remove", this.removeLayer), this._init()
        },
        _init: function () {
            var e = this.model.get("baseMap"), t = this.model.get("mapStatus"), a = this;
            G.ready(function () {
                G.loadModules(["maps", "heat", "fluid"], function () {
                    a.map = new G.Map("map-container", {
                        continuouslyZoom: !1,
                        pinchRotate: !1,
                        hideLogo: !0,
                        recordStatus: !1,
                        initStatus: {center: t.center, res: t.resolution}
                    }), a.baseLayer = i.getBaseMap(e.type, e.uid), a.adjustByLayer(a.baseLayer), a.map.addLayer(a.baseLayer), a.trigger("mapReady"), r.setMap(a.map), a.map.addListener("click", a.mapClickHandler, a), a.map.addListener("viewChanged", a.mapExtentChangeHandler, a), a.map.addListener("mousemove", a.mapMouseMoveHandler, a), a.defaultGraphics = new G.Layer.Graphic, a.defaultGraphics.addTo(a.map)
                })
            }), $("#feature-dialog").bind("shown.bs.modal", function () {
                $("#feature-dialog .scrollbar").scrollTop(0).perfectScrollbar("update")
            })
        },
        getZoom: function () {
            return this.baseLayer.calcNearestZoom()
        },
        switchMap: function () {
            var e = this.model.get("baseMap");
            if (e) {
                var t = i.getBaseMap(e.type, e.uid);
                this.baseLayer && this.baseLayer.remove(), this.baseLayer = t, this.adjustByLayer(this.baseLayer), this.map.addLayer(this.baseLayer), this.baseLayer.bringToBottom(), t.options.copyright ? $(".copyright").empty().append(t.options.copyright).removeClass("hide") : $(".copyright").addClass("hide").empty()
            }
        },
        zoomTo: function () {
            var e = this.model.get("mapStatus");
            if (e) {
                var t = e.center, a = e.resolution;
                this.map.zoomRes(t, a)
            }
        },
        shouldZoom: function () {
            var e = this.model.get("dataLayerList");
            return 1 == e.models.length
        },
        getMapStatus: function () {
            return {center: this.map.getCenter(), resolution: this.map.getResolution()}
        },
        layerConfigHandler: function (e) {
            var t = e.dataLayer.get("config");
            t.type == o.configTypes.MARKER_HEAT ? this._updateHeatLayer(e) : e.layerGrouped ? (this._updateTileLayer(e), this._updateUtfGridLayer(e)) : this._updateTimedTileLayer(e)
        },
        _checkLayerVisibility: function (e, t) {
            var a = t.get("maxRes");
            if (!a)return !0;
            if (this.map.getResolution() > a) {
                var i = t.get("extent"), r = l.getExtentCenter(i), r = r ? r : this.map.getCenter(), o = this.getMaxVisibleRes(e, a);
                return this.map.zoomRes(r, o), !1
            }
            return !0
        },
        _updateTileLayer: function (e) {
            var t = e.dataLayer.cid, a = e.dataLayer.get("visible"), i = this.layerTable[t], l = new G.Layer.Tile(e.url, {
                keepResample: !1,
                tileEnlarge: !1,
                crossOrigin: "*"
            });
            a || l.hide(), o.isProdEnv && (l.options.cluster = o.geoheyServerCluster);
            var r = e.dataLayer.get("maxRes");
            r && (l.options.maxRes = r);
            var a = this._checkLayerVisibility(l, e.dataLayer), s = -1;
            if (i && (s = i.getOrder(), i.remove()), a && "manual" == e.dataLayer.source) {
                var n = e.dataLayer.get("extent"), r = e.dataLayer.get("maxRes");
                !r && n && this.shouldZoom() && this.map.zoomExtent(n)
            }
            delete e.dataLayer.source, this.map.addLayer(l), s != -1 && l.bringToOrder(s), this.layerTable[t] = l
        },
        _updateUtfGridLayer: function (e) {
            var t = e.dataLayer.cid;
            this.utfGridCache.removeLayer(t);
            var a = t + "_grid", i = this.layerTable[a];
            i && (i.remove(this.map), delete this.layerTable[a]);
            var r = e.dataLayer.get("interactivity");
            if (r) {
                var s = e.dataLayer.cid, n = e.dataLayer.get("visible"), a = s + "_grid", f = this.layerTable[a], d = new G.Layer.TiledService(function (t, a, i) {
                    var r = [t, a, i], o = l.getDomain(t, a), s = o + "/s/dataviz/" + e.vizId + "/0/" + i + "/" + t + "/" + a + ".grid";
                    G.Util.ajax(s, {
                        responseType: "jsonp", success: function (e, t) {
                            d.onSuccess(r, t)
                        }
                    })
                }), c = this.utfGridCache;
                d.addListener("loadTileSuccess", function (e) {
                    e.data && e.data.data && (1 != e.data.data.keys.length || "" != e.data.data.keys[0]) && c.add(s, e.tileInfo, e.data.data)
                }).addListener("unusedTile", function (e) {
                    c.remove(s, e.tileInfo)
                }), n || d.hide(), o.isProdEnv && (d.options.cluster = o.geoheyServerCluster);
                var h = e.dataLayer.get("maxRes");
                h && (d.options.maxRes = h), f && f.remove(), this.map.addLayer(d), d.bringToBottom(), this.layerTable[a] = d
            }
        },
        _updateTimedTileLayer: function (e) {
            var t = e.dataLayer.cid, a = e.dataLayer.get("visible"), i = this.layerTable[t], l = e.urls[0], r = e.dataLayer.get("maxRes"), o = this._createTimedTileLayer(l, r), a = this._checkLayerVisibility(o, e.dataLayer), n = -1;
            if (i && (n = i.getOrder(), i.remove()), a && "manual" == e.dataLayer.source) {
                var f = e.dataLayer.get("extent"), r = e.dataLayer.get("maxRes");
                !r && f && this.shouldZoom() && this.map.zoomExtent(f)
            }
            delete e.dataLayer.source, this.map.addLayer(o), n != -1 && o.bringToOrder(n), this.layerTable[t] = o;
            var c = e.dataLayer.get("animated");
            if (c) {
                this.timeSlider && (this.timeSlider.destroy(), this.timeSlider = void 0);
                var h = [];
                h.push(o);
                for (var p = 1; p < e.urls.length; p++) {
                    var i = this._createTimedTileLayer(e.urls[p], r);
                    h.push(i)
                }
                var u = new d(this.map, h);
                this.timeSlider = this.createTimedTileLayerSlider(e.dataLayer, u);
                var g = this;
                $(document).on("timeLayerChange", function (e) {
                    g.layerTable[e.layerId] = e.layer
                }), s.animateUsed = !0
            }
        },
        _createTimedTileLayer: function (e, t) {
            var a = new G.Layer.Tile(e, {keepResample: !1, tileEnlarge: !1, crossOrigin: "*"});
            return t && (a.options.maxRes = t), o.isProdEnv && (a.options.cluster = o.geoheyServerCluster), a
        },
        _updateHeatLayer: function (e) {
            var t = e.dataLayer.cid, a = this.layerTable[t], i = -1;
            a && (i = a.getOrder(), a.remove());
            var l = e.dataLayer.get("config"), r = new G.Layer.TiledHeat(e.url, function (e, t) {
                if (t.data && 0 != t.data.length) {
                    for (var a, i, o, s, n, f, d = e[0], c = e[1], h = e[2], p = r.options.zoomReses[h], u = [], t = t.data, g = 0; g < t.length; g++) {
                        a = t[g].x__uint8, i = t[g].y__uint8, s = (256 * d + l.resolution * (a + .5)) * p + r.options.originX, n = r.options.originY - (256 * (c + 1) - l.resolution * (i + .5)) * p;
                        for (var m = 0; m < t[g].vals__uint8.length; m++)o = t[g].vals__uint8[m], f = t[g].dates__uint16[m], f += 1, u.push([s, n, o, {t: f}])
                    }
                    return u
                }
            }, {
                topValue: l.heatTopValue,
                radius: l.heatSize,
                minOpacity: l.heatMinOpacity,
                maxOpacity: l.heatMaxOpacity,
                radiusUnit: l.heatSizeUnit,
                colors: l.colors,
                drawResolution: 1
            }), o = e.dataLayer.get("maxRes");
            o && (r.options.maxRes = o);
            var n = this._checkLayerVisibility(r, e.dataLayer);
            if (this.map.addLayer(r), i != -1 && r.bringToOrder(i), this.layerTable[t] = r, n && "manual" == e.dataLayer.source) {
                var f = e.dataLayer.get("extent"), o = e.dataLayer.get("maxRes");
                !o && f && this.shouldZoom() && this.map.zoomExtent(f), delete e.dataLayer.source
            }
            var l = e.dataLayer.get("config");
            l.animated && (this.timeSlider && (this.timeSlider.destroy(), this.timeSlider = void 0), this.timeSlider = this.createTimedHeatLayerSlider(e.dataLayer, e.torque, r), s.animateUsed = !0)
        },
        updateHeatLayer: function (e) {
            var t = e.cid, a = this.layerTable[t], i = e.get("config");
            a && (a.options.radius = i.heatSize, a.options.minOpacity = i.heatMinOpacity, a.options.maxOpacity = i.heatMaxOpacity, a.options.radiusUnit = i.heatSizeUnit, a.options.topValue = i.heatTopValue, a.options.colors = i.colors, this.map.update()), this._checkLayerVisibility(a, e)
        },
        updateTimeLayer: function (e) {
            var t = e.cid, a = this.layerTable[t], i = e.get("config"), l = !1, r = 1;
            i.type == o.configTypes.MARKER_HEAT ? (l = i.timeAccumulate, r = i.duration) : (l = e.get("timeAccumulate"), r = e.get("duration")), this.timeSlider && this.timeSlider.setOptions({
                timeAccumulate: l,
                interval: 1e3 * r
            }), this._checkLayerVisibility(a, e)
        },
        updateFluidLayer: function (e) {
            var t = e.cid, a = e.get("config"), i = this.layerTable[t], l = e.get("visible"), r = new G.Layer.Fluid({
                lineWidth: a.width,
                opacity: a.opacity,
                frameDuration: a.duration,
                fieldMaxIntensity: a.topValue,
                colors: a.colors
            });
            l || r.hide();
            var o = -1;
            if (i && (o = i.getOrder(), i.remove()), l && "manual" == e.source) {
                var s = e.get("extent"), n = e.get("maxRes");
                !n && s && this.shouldZoom() && this.map.zoomExtent(s)
            }
            delete e.source, this.map.addLayer(r), o != -1 && r.bringToOrder(o), this.layerTable[t] = r;
            var a = e.get("config"), f = a.uField, d = a.vField, c = e.features;
            if (c && 0 != c.length && f != d) {
                for (var h = 0; h < c.length; h++) {
                    var p = c[h], u = p.attrs[f], g = p.attrs[d];
                    if (u && g && p.geom) {
                        Math.sqrt(u * u + g * g);
                        r.addDataPoint(p.geom[0], p.geom[1], u, g)
                    }
                }
                r.start()
            }
        },
        getMaxVisibleRes: function (e, t) {
            for (var a = e.options.zoomReses, i = 0; i < a.length; i++)if (a[i] <= t)return a[i];
            return t
        },
        addHandler: function (e) {
            var t = new G.Layer.Graphic;
            this.layerTable[e.cid] = t, t.addTo(this.map);
            var a = e.get("config");
            a && a.type == o.configTypes.MARKER_FLUID ? e.fetchFeatures() : this.model.configLayer(e)
        },
        removeLayer: function (e) {
            var t = e.cid, a = this.layerTable[t];
            if (a) {
                a.remove(this.map), delete this.layerTable[t];
                var i = t + "_grid", l = this.layerTable[i];
                l && (l.remove(this.map), delete this.layerTable[i], this.utfGridCache.removeLayer(t))
            }
        },
        zoomToLayer: function (e) {
            var t = e.get("extent"), a = e.get("maxRes");
            if (a) {
                var i = e.cid, r = this.layerTable[i], t = e.get("extent"), o = l.getExtentCenter(t), o = o ? o : this.map.getCenter(), s = this.getMaxVisibleRes(r, a);
                this.map.zoomRes(o, s)
            } else t && this.map.zoomExtent(t)
        },
        bringUpLayer: function (e) {
            var t = e.cid, a = this.layerTable[t];
            a && a.bringUp(1)
        },
        bringDownLayer: function (e) {
            var t = e.cid, a = this.layerTable[t], i = parseInt(a.getOrder());
            a && i > 1 && a.bringDown(1)
        },
        showLayer: function (e) {
            var t = e.cid, a = this.layerTable[t];
            a && a.show()
        },
        hideLayer: function (e) {
            var t = e.cid, a = this.layerTable[t];
            a && a.hide()
        },
        expandMap: function () {
            this.$("#map-container").removeClass("shrink"), this.map.resize(), this.$("#time-slider-container").removeClass("shrink")
        },
        shrinkMap: function () {
            this.$("#map-container").addClass("shrink"), this.map.resize(), this.$("#time-slider-container").addClass("shrink")
        },
        mapZoomInHandler: function () {
            this.map.zoomIn()
        },
        mapZoomOutHandler: function () {
            this.map.zoomOut()
        },
        mapClickHandler: function (e) {
            if (this.activeGrid) {
                var t = this.activeGridLayer.get("primaryField");
                if (!t)return void this.identify(e);
                var a = this.activeGrid[t];
                this.query(this.activeGridLayer, a)
            } else this.identify(e);
            this.showLoading()
        },
        query: function (e, t) {
            this.model.query(e, t)
        },
        identify: function (e) {
            var t = this.getQueryParams(), a = t.dataLayers;
            if (0 != a.length) {
                var i = t.tolerance;
                i = window.mobile ? i < 8 ? 8 : i : i < 5 ? 5 : i;
                var l = this.map.toMap([e.screenX - i, e.screenY + i]), r = this.map.toMap([e.screenX + i, e.screenY - i]), o = [l[0], l[1], r[0], r[1]];
                this.model.identify(a, o)
            }
        },
        mapExtentChangeHandler: function () {
            for (var e in this.layerTable) {
                var t = this.layerTable[e];
                t && (this.map.getResolution() > t.options.maxRes ? this.trigger("layerVisibleChange", {
                    cid: e,
                    visible: !1
                }) : this.trigger("layerVisibleChange", {cid: e, visible: !0}))
            }
        },
        mapMouseMoveHandler: function (e) {
            var t = this.map.getResolution(), a = (e.mapX - o.mapOriginX) / t, i = (o.mapOriginY - e.mapY) / t, l = this.getZoom(), r = this.baseLayer.calcTileExtent(0, 0, l), s = (r[2] - r[0]) / t, n = s / o.utfGridSize, f = n * o.utfGridRes, d = Math.floor(a / s), c = Math.floor(i / s), h = Math.floor((a - d * s) / f), p = Math.floor((i - c * s) / f), u = [d, c, l], g = [], m = this.map.getLayers();
            for (var b in m) {
                var v = m[b];
                g[v.getOrder()] = v
            }
            g.reverse();
            for (var y = 0; y < g.length; y++) {
                var k = this.getDataByMapLayer(g[y]);
                if (k && k.get("visible")) {
                    var C = k.cid, T = this.utfGridCache.get(C, u, h, p), $ = this.map.toScreen([e.mapX, e.mapY]);
                    if (this.showTitle(C, T, $), T)break
                }
            }
        },
        activeGrid: void 0,
        activeGridLayer: void 0,
        showTitle: function (e, t, a) {
            if (t) {
                if (this.activeGrid !== t) {
                    this.activeGrid = t;
                    var i = this.layerTable[e], l = this.getDataByMapLayer(i), r = l.get("titleField");
                    this.activeGridLayer = l;
                    var o = l.get("fields"), s = t[r], n = this.getField(o, r);
                    s ? n && void 0 != n.digital && n.digital >= 0 && (s = s.toFixed(n.digital)) : s = "无值", $("#feature-info .info").text(s), $("#feature-info").removeClass("hide")
                }
                $("#feature-info").css("left", a[0]).css("top", a[1] - 40)
            } else this.activeGrid = void 0, this.activeGridLayer = void 0, $("#feature-info").addClass("hide")
        },
        getField: function (e, t) {
            for (var a in e)if (e[a].name == t)return e[a]
        },
        hideTitle: function () {
            $("#feature-info .info").text(""), $("#feature-info").addClass("hide")
        },
        getQueryParams: function () {
            var e = this.map.getLayers(), t = [];
            for (var a in e) {
                var i = e[a];
                t[i.getOrder()] = i
            }
            for (var l = [], r = 0, o = 0; o < t.length; o++) {
                var s = this.getDataByMapLayer(t[o]);
                if (s && s.get("visible")) {
                    l.push({uid: s.get("dataUid"), type: s.get("dataType"), where: s.get("filter")});
                    var n = s.get("config"), f = n.markerSize;
                    f && (r = r < f ? f : r)
                }
            }
            return l.reverse(), {dataLayers: l, tolerance: r}
        },
        getDataByMapLayer: function (e) {
            var t;
            for (var a in this.layerTable)if (this.layerTable[a] == e) {
                t = a;
                break
            }
            if (t) {
                var i = this.model.get("dataLayerList");
                return i.get(t)
            }
        },
        getDataLayerByDataUid: function (e) {
            for (var t = this.model.get("dataLayerList"), a = t.models, i = 0; i < a.length; i++)if (a[i].get("dataUid") == e)return a[i]
        },
        showLoading: function () {
            this.$("#tool-loading").removeClass("hide")
        },
        hideLoading: function () {
            this.$("#tool-loading").addClass("hide")
        },
        showEraseTool: function () {
            this.$("#tool-erase").removeClass("hide")
        },
        hideEraseTool: function () {
            this.$("#tool-erase").addClass("hide")
        },
        clearFeatures: function () {
            this.defaultGraphics.clear(), this.hideEraseTool()
        },
        identifySuccessHandler: function (e) {
            this.renderFeatures(e), this.hideLoading(), this.hideTitle()
        },
        identifyErrorHandler: function () {
            this.hideLoading()
        },
        querySuccessHandler: function (e) {
            if (this.defaultGraphics.clear(), this.defaultGraphics.bringToTop(), !e.data)return void this.hideEraseTool();
            this.showEraseTool();
            var t = e.data, a = e.geometryType, i = e.dataUid;
            this.renderFeature(t, a), this.showInfoWindow(i, t), this.hideLoading(), this.hideTitle()
        },
        queryErrorHandler: function () {
            this.hideLoading()
        },
        renderFeatures: function (e) {
            if (this.defaultGraphics.clear(), this.defaultGraphics.bringToTop(), 0 == e.length)return void this.hideEraseTool();
            this.showEraseTool();
            var t = e[0].featureSet.features[0], a = e[0].featureSet.geometryType, i = e[0].dataUid;
            this.renderFeature(t, a), this.showInfoWindow(i, t)
        },
        renderFeature: function (e, t) {
            if ("MultiPolygon" == t || "mpg" == t)if (e.geom.m)for (var a = 0; a < e.geom.m.length; a++) {
                var i = e.geom.m[a], l = new G.Graphic.Polygon(i, e.attrs, o.fillSymbol);
                l.addTo(this.defaultGraphics)
            } else {
                var i = e.geom, l = new G.Graphic.Polygon(i, e.attrs, o.fillSymbol);
                l.addTo(this.defaultGraphics)
            } else if ("Polygon" == t || "pg" == t) {
                var i = e.geom, l = new G.Graphic.Polygon(i, e.attrs, o.fillSymbol);
                l.addTo(this.defaultGraphics)
            } else if ("MultiPoint" == t || "mpt" == t)if (e.geom.m)for (var a = 0; a < e.geom.m.length; a++) {
                var r = e.geom.m[a], l = new G.Graphic.Point(r, e.attrs, o.markerSymbol);
                l.addTo(this.defaultGraphics)
            } else {
                var r = e.geom, s = new G.Graphic.Point(r, null, o.markerPinSymbol), n = new G.Graphic.Point(r, null, o.markerCircleSymbol), l = new G.Graphic.Group([s, n]);
                l.addTo(this.defaultGraphics)
            } else if ("Point" == t || "pt" == t) {
                var r = e.geom, s = new G.Graphic.Point(r, null, o.markerPinSymbol), n = new G.Graphic.Point(r, null, o.markerCircleSymbol), l = new G.Graphic.Group([s, n]);
                l.addTo(this.defaultGraphics)
            } else if ("MultiPolyline" == t || "mpl" == t)if (e.geom.m)for (var a = 0; a < e.geom.m.length; a++) {
                var f = e.geom.m[a], l = new G.Graphic.Polyline(f, e.attrs, o.lineSymbol);
                l.addTo(this.defaultGraphics)
            } else {
                var f = e.geom, l = new G.Graphic.Polyline(f, e.attrs, o.lineSymbol);
                l.addTo(this.defaultGraphics)
            } else if ("Polyline" == t || "pl" == t) {
                var f = e.geom, l = new G.Graphic.Polyline(f, e.attrs, o.lineSymbol);
                l.addTo(this.defaultGraphics)
            }
            this.defaultGraphics.count() > 0 && this.showEraseTool()
        },
        showInfoWindow: function (e, t) {
            var a = this.getDataLayerByDataUid(e);
            if (a) {
                var i = a.get("fields"), l = a.get("titleField"), r = t.attrs, i = $("#feature-dialog #feature-fields").html(this.featureTemplate({
                    attrs: r,
                    fields: i
                })), o = r[l] || "";
                $("#feature-dialog .modal-title").text(o), $("#feature-dialog").modal({keyboard: !1})
            }
        },
        adjustByLayer: function (e) {
            this.map.options.minRes = e.options.minRes, this.map.options.maxRes = e.options.maxRes, e.options.srid != this.map.options.srid && (this.map.options.srid = e.options.srid)
        },
        createTimedHeatLayerSlider: function (e, t, a) {
            var i = e.get("config"), l = i.frameCount, r = 1e3 * i.duration, o = t.start, s = t.end, f = t.type, d = i.timeAccumulate, c = i.frameCount;
            return new n({
                map: this.map,
                layerId: e.cid,
                timeLayer: a,
                maxValue: l,
                tipType: f,
                interval: r,
                timeAccumulate: d,
                start: o,
                end: s,
                count: c
            })
        },
        createTimedTileLayerSlider: function (e, t) {
            var a = e.get("frameCount"), i = 1e3 * e.get("duration"), l = e.get("timeBreaks"), r = e.get("tipType"), o = e.get("timeAccumulate");
            return new f({
                map: this.map,
                layerId: e.cid,
                timeLayerList: t,
                maxValue: a,
                interval: i,
                tipType: r,
                timeAccumulate: o,
                timeBreaks: l
            })
        },
        showTimeSlider: function (e) {
        },
        hideTimeSlider: function (e) {
            s.animateUsed = !1, this.timeSlider && (this.timeSlider.destroy(), this.timeSlider = void 0)
        }
    });
    e.exports = h
}, function (e, t, a) {
    (function (e, i) {
        function l(e, a) {
            var i = {seen: [], stylize: o};
            return arguments.length >= 3 && (i.depth = arguments[2]), arguments.length >= 4 && (i.colors = arguments[3]), g(a) ? i.showHidden = a : a && t._extend(i, a), C(i.showHidden) && (i.showHidden = !1), C(i.depth) && (i.depth = 2), C(i.colors) && (i.colors = !1), C(i.customInspect) && (i.customInspect = !0), i.colors && (i.stylize = r), n(i, e, i.depth)
        }

        function r(e, t) {
            var a = l.styles[t];
            return a ? "[" + l.colors[a][0] + "m" + e + "[" + l.colors[a][1] + "m" : e
        }

        function o(e, t) {
            return e
        }

        function s(e) {
            var t = {};
            return e.forEach(function (e, a) {
                t[e] = !0
            }), t
        }

        function n(e, a, i) {
            if (e.customInspect && a && H(a.inspect) && a.inspect !== t.inspect && (!a.constructor || a.constructor.prototype !== a)) {
                var l = a.inspect(i, e);
                return y(l) || (l = n(e, l, i)), l
            }
            var r = f(e, a);
            if (r)return r;
            var o = Object.keys(a), g = s(o);
            if (e.showHidden && (o = Object.getOwnPropertyNames(a)), w(a) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0))return d(a);
            if (0 === o.length) {
                if (H(a)) {
                    var m = a.name ? ": " + a.name : "";
                    return e.stylize("[Function" + m + "]", "special")
                }
                if (T(a))return e.stylize(RegExp.prototype.toString.call(a), "regexp");
                if (L(a))return e.stylize(Date.prototype.toString.call(a), "date");
                if (w(a))return d(a)
            }
            var b = "", v = !1, k = ["{", "}"];
            if (u(a) && (v = !0, k = ["[", "]"]), H(a)) {
                var C = a.name ? ": " + a.name : "";
                b = " [Function" + C + "]"
            }
            if (T(a) && (b = " " + RegExp.prototype.toString.call(a)), L(a) && (b = " " + Date.prototype.toUTCString.call(a)), w(a) && (b = " " + d(a)), 0 === o.length && (!v || 0 == a.length))return k[0] + b + k[1];
            if (i < 0)return T(a) ? e.stylize(RegExp.prototype.toString.call(a), "regexp") : e.stylize("[Object]", "special");
            e.seen.push(a);
            var $;
            return $ = v ? c(e, a, i, g, o) : o.map(function (t) {
                return h(e, a, i, g, t, v)
            }), e.seen.pop(), p($, b, k)
        }

        function f(e, t) {
            if (C(t))return e.stylize("undefined", "undefined");
            if (y(t)) {
                var a = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                return e.stylize(a, "string")
            }
            return v(t) ? e.stylize("" + t, "number") : g(t) ? e.stylize("" + t, "boolean") : m(t) ? e.stylize("null", "null") : void 0
        }

        function d(e) {
            return "[" + Error.prototype.toString.call(e) + "]"
        }

        function c(e, t, a, i, l) {
            for (var r = [], o = 0, s = t.length; o < s; ++o)F(t, String(o)) ? r.push(h(e, t, a, i, String(o), !0)) : r.push("");
            return l.forEach(function (l) {
                l.match(/^\d+$/) || r.push(h(e, t, a, i, l, !0))
            }), r
        }

        function h(e, t, a, i, l, r) {
            var o, s, f;
            if (f = Object.getOwnPropertyDescriptor(t, l) || {value: t[l]}, f.get ? s = f.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : f.set && (s = e.stylize("[Setter]", "special")), F(i, l) || (o = "[" + l + "]"), s || (e.seen.indexOf(f.value) < 0 ? (s = m(a) ? n(e, f.value, null) : n(e, f.value, a - 1), s.indexOf("\n") > -1 && (s = r ? s.split("\n").map(function (e) {
                    return "  " + e
                }).join("\n").substr(2) : "\n" + s.split("\n").map(function (e) {
                    return "   " + e
                }).join("\n"))) : s = e.stylize("[Circular]", "special")), C(o)) {
                if (r && l.match(/^\d+$/))return s;
                o = JSON.stringify("" + l), o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.substr(1, o.length - 2), o = e.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), o = e.stylize(o, "string"))
            }
            return o + ": " + s
        }

        function p(e, t, a) {
            var i = 0, l = e.reduce(function (e, t) {
                return i++, t.indexOf("\n") >= 0 && i++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
            }, 0);
            return l > 60 ? a[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + a[1] : a[0] + t + " " + e.join(", ") + " " + a[1]
        }

        function u(e) {
            return Array.isArray(e)
        }

        function g(e) {
            return "boolean" == typeof e
        }

        function m(e) {
            return null === e
        }

        function b(e) {
            return null == e
        }

        function v(e) {
            return "number" == typeof e
        }

        function y(e) {
            return "string" == typeof e
        }

        function k(e) {
            return "symbol" == typeof e
        }

        function C(e) {
            return void 0 === e
        }

        function T(e) {
            return $(e) && "[object RegExp]" === O(e)
        }

        function $(e) {
            return "object" == typeof e && null !== e
        }

        function L(e) {
            return $(e) && "[object Date]" === O(e)
        }

        function w(e) {
            return $(e) && ("[object Error]" === O(e) || e instanceof Error)
        }

        function H(e) {
            return "function" == typeof e
        }

        function S(e) {
            return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || "undefined" == typeof e
        }

        function O(e) {
            return Object.prototype.toString.call(e)
        }

        function P(e) {
            return e < 10 ? "0" + e.toString(10) : e.toString(10)
        }

        function x() {
            var e = new Date, t = [P(e.getHours()), P(e.getMinutes()), P(e.getSeconds())].join(":");
            return [e.getDate(), z[e.getMonth()], t].join(" ")
        }

        function F(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        var M = /%[sdj%]/g;
        t.format = function (e) {
            if (!y(e)) {
                for (var t = [], a = 0; a < arguments.length; a++)t.push(l(arguments[a]));
                return t.join(" ")
            }
            for (var a = 1, i = arguments, r = i.length, o = String(e).replace(M, function (e) {
                if ("%%" === e)return "%";
                if (a >= r)return e;
                switch (e) {
                    case"%s":
                        return String(i[a++]);
                    case"%d":
                        return Number(i[a++]);
                    case"%j":
                        try {
                            return JSON.stringify(i[a++])
                        } catch (t) {
                            return "[Circular]"
                        }
                    default:
                        return e
                }
            }), s = i[a]; a < r; s = i[++a])o += m(s) || !$(s) ? " " + s : " " + l(s);
            return o
        }, t.deprecate = function (a, l) {
            function r() {
                if (!o) {
                    if (i.throwDeprecation)throw new Error(l);
                    i.traceDeprecation ? console.trace(l) : console.error(l), o = !0
                }
                return a.apply(this, arguments)
            }

            if (C(e.process))return function () {
                return t.deprecate(a, l).apply(this, arguments)
            };
            if (i.noDeprecation === !0)return a;
            var o = !1;
            return r
        };
        var R, V = {};
        t.debuglog = function (e) {
            if (C(R) && (R = i.env.NODE_DEBUG || ""), e = e.toUpperCase(), !V[e])if (new RegExp("\\b" + e + "\\b", "i").test(R)) {
                var a = i.pid;
                V[e] = function () {
                    var i = t.format.apply(t, arguments);
                    console.error("%s %d: %s", e, a, i)
                }
            } else V[e] = function () {
            };
            return V[e]
        }, t.inspect = l, l.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39]
        }, l.styles = {
            special: "cyan",
            number: "yellow",
            "boolean": "yellow",
            undefined: "grey",
            "null": "bold",
            string: "green",
            date: "magenta",
            regexp: "red"
        }, t.isArray = u, t.isBoolean = g, t.isNull = m, t.isNullOrUndefined = b, t.isNumber = v, t.isString = y, t.isSymbol = k, t.isUndefined = C, t.isRegExp = T, t.isObject = $, t.isDate = L, t.isError = w, t.isFunction = H, t.isPrimitive = S, t.isBuffer = a(26);
        var z = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        t.log = function () {
            console.log("%s - %s", x(), t.format.apply(t, arguments))
        }, t.inherits = a(27), t._extend = function (e, t) {
            if (!t || !$(t))return e;
            for (var a = Object.keys(t), i = a.length; i--;)e[a[i]] = t[a[i]];
            return e
        }
    }).call(t, function () {
        return this
    }(), a(25))
}, function (e, t) {
    function a() {
        f = !1, o.length ? n = o.concat(n) : d = -1, n.length && i()
    }

    function i() {
        if (!f) {
            var e = setTimeout(a);
            f = !0;
            for (var t = n.length; t;) {
                for (o = n, n = []; ++d < t;)o && o[d].run();
                d = -1, t = n.length
            }
            o = null, f = !1, clearTimeout(e)
        }
    }

    function l(e, t) {
        this.fun = e, this.array = t
    }

    function r() {
    }

    var o, s = e.exports = {}, n = [], f = !1, d = -1;
    s.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)for (var a = 1; a < arguments.length; a++)t[a - 1] = arguments[a];
        n.push(new l(e, t)), 1 !== n.length || f || setTimeout(i, 0)
    }, l.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = r, s.addListener = r, s.once = r, s.off = r, s.removeListener = r, s.removeAllListeners = r, s.emit = r, s.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, s.cwd = function () {
        return "/"
    }, s.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, s.umask = function () {
        return 0
    }
}, function (e, t) {
    e.exports = function (e) {
        return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
    }
}, function (e, t) {
    "function" == typeof Object.create ? e.exports = function (e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    } : e.exports = function (e, t) {
        e.super_ = t;
        var a = function () {
        };
        a.prototype = t.prototype, e.prototype = new a, e.prototype.constructor = e
    }
}, function (e, t, a) {
    "use strict";
    var i = a(5), l = function (e) {
        this.map = e.map, this.layerId = e.layerId, this.timeLayer = e.timeLayer, this.maxValue = e.maxValue || i.defaultTimeSegment, this.tipType = e.tipType;
        var t = e.start, a = e.end;
        "number" == this.tipType && (t /= 1e3, a /= 1e3), this.tips = this.calcTips(t, a, e.count), this.timeout = void 0, this.interval = e.interval || 1e3 * i.defaultTimeDuration, this.timeAccumulate = e.timeAccumulate;
        var l = $.proxy(this.tipFormatFun, this);
        this.timeSlider = $("#time-slider").slider({
            min: 1,
            max: this.maxValue,
            tooltip: "always",
            formatter: l
        }), this.timeAccumulate ? $(".slider-selection").addClass("accumulate") : $(".slider-selection").removeClass("accumulate"), l = $.proxy(this.timeSliderValueChangeHandler, this), this.timeSlider.on("change", l), l = $.proxy(this.timeSliderStopHandler, this), this.timeSlider.on("slideStop", l), l = $.proxy(this.playBtnHandler, this), $("#control-play").bind("click", l), l = $.proxy(this.pauseBtnHandler, this), $("#control-pause").bind("click", l), $("#time-slider-wrapper").removeClass("hide"), this.timeLayer.setFilters(["t"], ["==1"])
    };
    l.prototype = {
        getLayerId: function () {
            return this.layerId
        }, playBtnHandler: function () {
            $("#control-play").addClass("hide"), $("#control-pause").removeClass("hide"), this.play()
        }, pauseBtnHandler: function () {
            $("#control-play").removeClass("hide"), $("#control-pause").addClass("hide"), this.pause()
        }, play: function () {
            if (this.timeLayer) {
                var e = this.timeSlider.slider("getValue");
                e += 1, e > this.maxValue && (e = 1), this.map.bind("redraw", this.mapRedrawHandler, this);
                var t = "==" + e;
                this.timeAccumulate && (t = "<=" + e), this.timeLayer.setFilters(["t"], [t]), this.timeSlider.slider("setValue", e), $("#time-slider-wrapper #label").text(e)
            }
        }, pause: function () {
            clearTimeout(this.timeout), $("#control-play").removeClass("hide"), $("#control-pause").addClass("hide"), this.map.unbind("redraw", this.mapRedrawHandler, this)
        }, mapRedrawHandler: function (e) {
            this.map.unbind("redraw", this.mapRedrawHandler, this);
            var t = $.proxy(this.play, this);
            this.timeout = setTimeout(t, this.interval)
        }, timeSliderValueChangeHandler: function (e) {
            var t = e.value.newValue;
            $("#time-slider-wrapper #label").text(t)
        }, timeSliderStopHandler: function (e) {
            if (this.timeLayer) {
                var t = e.value, a = "==" + t;
                this.timeAccumulate && (a = "<=" + t), this.timeLayer.setFilters(["t"], [a])
            }
        }, calcTips: function (e, t, a) {
            var i = (t - e) / a, l = 0;
            i < 0 ? l = Number(i).toString().length - 2 : i >= 0 && i < 100 && (l = 1);
            for (var l = Math.pow(10, l), r = [], o = 0; o < a; o++) {
                var s = e + o * i;
                s = Math.ceil(s * l) / l, r.push(s)
            }
            return r
        }, tipFormatFun: function (e) {
            var t = this.tips[e - 1];
            return "date" == this.tipType ? $.formatDateTime("yy-mm-dd hh:ii", new Date(t)) : t
        }, setOptions: function (e) {
            this._setTimeAccumulate(e.timeAccumulate), this._setInterval(e.interval)
        }, _setTimeAccumulate: function (e) {
            0 != e && 1 != e || (this.timeAccumulate = e, this.timeAccumulate ? $(".slider-selection").addClass("accumulate") : $(".slider-selection").removeClass("accumulate"), this.pause(), this.timeSlider.slider("setValue", 1), this.timeLayer.setFilters(["t"], ["==1"]), $("#time-slider-wrapper #label").text("1"))
        }, _setInterval: function (e) {
            this.interval = e
        }, destroy: function () {
            this.map.unbind("redraw", this.mapRedrawHandler, this), clearTimeout(this.timeout), this.timeout = void 0, this.timeLayer.clearFilters(), $("#time-slider-wrapper").addClass("hide"), $("#time-slider-wrapper #label").text(1), $("#control-play").removeClass("hide").unbind(), $("#control-pause").addClass("hide").unbind(), this.timeSlider.slider("destroy")
        }
    }, e.exports = l
}, function (e, t, a) {
    "use strict";
    var i = a(5), l = function (e) {
        this.map = e.map, this.layerId = e.layerId, this.timeLayerList = e.timeLayerList, this.maxValue = e.maxValue || i.defaultTimeSegment, this.tipType = e.tipType, this.tips = this.calcTips(e.timeBreaks), this.timeout = void 0, this.interval = e.interval || 1e3 * i.defaultTimeDuration, this.timeAccumulate = e.timeAccumulate;
        var t = $.proxy(this.tipFormatFun, this);
        this.timeSlider = $("#time-slider").slider({
            min: 1,
            max: this.maxValue,
            tooltip: "always",
            formatter: t
        }), this.timeAccumulate ? $(".slider-selection").addClass("accumulate") : $(".slider-selection").removeClass("accumulate"), t = $.proxy(this.timeSliderValueChangeHandler, this), this.timeSlider.on("change", t), t = $.proxy(this.timeSliderStopHandler, this), this.timeSlider.on("slideStop", t), t = $.proxy(this.playBtnHandler, this), $("#control-play").bind("click", t), t = $.proxy(this.pauseBtnHandler, this), $("#control-pause").bind("click", t), $("#time-slider-wrapper").removeClass("hide")
    };
    l.prototype = {
        getLayerId: function () {
            return this.layerId
        }, getActiveLayer: function () {
            return this.timeLayerList.getActiveLayer()
        }, playBtnHandler: function () {
            $("#control-play").addClass("hide"), $("#control-pause").removeClass("hide"), this.play()
        }, pauseBtnHandler: function () {
            $("#control-play").removeClass("hide"), $("#control-pause").addClass("hide"), this.pause()
        }, play: function () {
            var e = this.timeSlider.slider("getValue");
            e += 1, e > this.maxValue && (e = 1);
            var t = this.timeLayerList.setIndex(e - 1);
            $.event.trigger({
                type: "timeLayerChange",
                layerId: this.layerId,
                layer: t
            }), t.bind("allLoaded", this.layerLoadedHandler, this), this.timeSlider.slider("setValue", e), $("#time-slider-wrapper #label").text(e)
        }, pause: function () {
            clearTimeout(this.timeout);
            var e = this.timeLayerList.getActiveLayer();
            e.unbind("allLoaded", this.layerLoadedHandler, this)
        }, layerLoadedHandler: function (e) {
            var t = this.timeLayerList.getActiveLayer();
            t.unbind("allLoaded", this.layerLoadedHandler, this);
            var a = $.proxy(this.play, this);
            this.timeout = setTimeout(a, this.interval)
        }, mapRedrawHandler: function (e) {
            this.map.unbind("redraw", this.mapRedrawHandler, this);
            var t = this.timeLayerList.getActiveLayer();
            t.unbind("allLoaded", this.layerLoadedHandler, this);
            var a = $.proxy(this.play, this);
            this.timeout = setTimeout(a, this.interval)
        }, timeSliderValueChangeHandler: function (e) {
            var t = e.value.newValue;
            $("#time-slider-wrapper #label").text(t)
        }, timeSliderStopHandler: function (e) {
            var t = e.value, a = this.timeLayerList.setIndex(t);
            $.event.trigger({type: "timeLayerChange", layerId: this.layerId, layer: a})
        }, calcTips: function (e) {
            return e
        }, tipFormatFun: function (e) {
            var t = this.tips[e - 1];
            return "date" == this.tipType ? $.formatDateTime("yy-mm-dd hh:ii", new Date(t)) : t
        }, setOptions: function (e) {
            this._setTimeAccumulate(e.timeAccumulate), this._setInterval(e.interval)
        }, _setTimeAccumulate: function (e) {
            0 != e && 1 != e || (this.timeAccumulate = e, this.timeAccumulate ? $(".slider-selection").addClass("accumulate") : $(".slider-selection").removeClass("accumulate"))
        }, _setInterval: function (e) {
            this.interval = e
        }, destroy: function () {
            this.map.unbind("redraw", this.mapRedrawHandler, this), clearTimeout(this.timeout), this.timeout = void 0, $("#time-slider-wrapper").addClass("hide"), $("#time-slider-wrapper #label").text(1), $("#control-play").removeClass("hide").unbind(), $("#control-pause").addClass("hide").unbind(), this.timeSlider.slider("destroy")
        }
    }, e.exports = l
}, function (e, t) {
    "use strict";
    var a = function (e, t) {
        this.map = e, this.layers = t, this.current = 0
    };
    a.prototype.setIndex = function (e) {
        if (!(null == this.map || null == this.layers || e < 0 || e > this.layers.length - 1)) {
            var t = this.layers[this.current], a = t.getOrder();
            return t.remove(), t = this.layers[e], this.map.addLayer(t), t.bringToOrder(a), this.current = e, t
        }
    }, a.prototype.getActiveLayer = function () {
        return this.layers[this.current]
    }, e.exports = a
}, function (e, t) {
    "use strict";
    var a = function () {
        this.cache = {}
    };
    a.prototype = {
        get: function (e, t, a, i) {
            var l = this.cache[e];
            if (l) {
                var r = this._genTileKey(t), o = l[r];
                if (o && o.grid) {
                    var s = this._decode(o.grid[i].charCodeAt(a));
                    return r = o.keys[s], o.data[r]
                }
            }
        }, add: function (e, t, a) {
            var i = this.cache[e];
            i || (i = {}, this.cache[e] = i);
            var l = this._genTileKey(t);
            i[l] = a
        }, remove: function (e, t) {
            var a = this.cache[e];
            if (a) {
                var i = this._genTileKey(t);
                delete a[i]
            }
        }, removeLayer: function (e) {
            delete this.cache[e]
        }, _genTileKey: function (e) {
            return e[2] + "_" + e[0] + "_" + e[1]
        }, _decode: function (e) {
            return e >= 93 && e--, e >= 35 && e--, e - 32
        }
    }, e.exports = a
}, function (e, t, a) {
    "use strict";
    var i = a(33), l = a(34), r = Backbone.View.extend({
        el: "#select-data-panel",
        events: {
            "click .btn-close-panel": "close",
            "click .btn-switch": "switch",
            "click #btn-search": "search",
            "keypress #input-search": "keyPressHandler"
        },
        privateDataListView: new i({el: "#private-data-list", model: new l({url: "/s/data/list"})}),
        publicDataListView: new i({el: "#public-data-list", model: new l({url: "/s/public_data/list"})}),
        initialize: function () {
            this.listenTo(this.privateDataListView, "dataSelected", this.privateDataSelectedHandler), this.listenTo(this.publicDataListView, "dataSelected", this.publicDataSelectedHandler), this.listenTo(this.privateDataListView.model, "sync", this.resetSearchBtn), this.listenTo(this.privateDataListView.model, "error", this.resetSearchBtn), this.listenTo(this.publicDataListView.model, "sync", this.resetSearchBtn), this.listenTo(this.publicDataListView.model, "error", this.resetSearchBtn)
        },
        resetSearchBtn: function () {
            this.$("#btn-search").removeClass("loading")
        },
        close: function () {
            $(this.el).addClass("hide")
        },
        "switch": function (e) {
            $(e.currentTarget).hasClass("active") || (this.$(".btn-switch.active").removeClass("active"), $(e.currentTarget).addClass("active"), this.$(".data-item-list").each(function () {
                var e = $(this);
                e.hasClass("active") ? e.removeClass("active") : e.addClass("active")
            }), this.$("#private-data-list").hasClass("active") ? this.$("#input-search").val(this.privateDataListView.model.searchTxt) : this.$("#input-search").val(this.publicDataListView.model.searchTxt))
        },
        privateDataSelectedHandler: function (e) {
            $(this.el).addClass("hide"), e.type = "private", this.trigger("dataSelected", e)
        },
        publicDataSelectedHandler: function (e) {
            $(this.el).addClass("hide"), e.type = "public", this.trigger("dataSelected", e)
        },
        search: function () {
            this.$("#btn-search").addClass("loading");
            var e = this.$("#input-search").val().trim();
            this.$("#private-data-list").hasClass("active") ? this.privateDataListView.model.search(e) : this.publicDataListView.model.search(e)
        },
        keyPressHandler: function (e) {
            13 == e.keyCode && this.search()
        }
    });
    e.exports = r
}, function (e, t, a) {
    "use strict";
    var i = a(4), l = Backbone.View.extend({
        events: {
            "click .list-item": "select",
            "click #btn-pre-page": "getPrePage",
            "click #btn-next-page": "getNextPage",
            "click #btn-refresh": "refreshCurrentPage"
        }, template: _.template($("#data-list-template").html()), initialize: function () {
            this.listenTo(this.model, "sync", this.render), this.listenTo(this.model, "error", this.showError), this.refreshCurrentPage(), 0 != this.$("#btn-upload-data").length && this.$("#btn-upload-data").ghDataUpload({
                autoClose: !0,
                onError: this.onDataUploadError,
                onUploaded: this.onDataUploaded,
                onImported: $.proxy(this.onDataImported, this)
            })
        }, render: function () {
            $(this.$("ul")).html(this.template({dataItems: this.model.models})), this.$("#btn-refresh").removeClass("loading"), this.model.hasNextPage ? this.$("#btn-next-page").removeClass("disabled") : this.$("#btn-next-page").addClass("disabled"), this.model.currentPage > 0 ? this.$("#btn-pre-page").removeClass("disabled") : this.$("#btn-pre-page").addClass("disabled")
        }, select: function (e) {
            var t = $(e.currentTarget).attr("id"), a = this.model.get(t);
            if (!a)return void i.showError("选择的数据无效");
            var l = a.get("geometryType");
            if (!l) {
                var t = a.get("uid"), r = new GeoReference;
                return void r.georeference({
                    uid: t,
                    onError: this.onGeoReferenceError,
                    onComplete: $.proxy(this.onGeoReferenceComplete, this)
                })
            }
            this.trigger("dataSelected", a.attributes)
        }, getPrePage: function () {
            this.model.fetchPrePage(), this.$("#btn-refresh").addClass("loading")
        }, getNextPage: function () {
            this.model.fetchNextPage(), this.$("#btn-refresh").addClass("loading")
        }, refreshCurrentPage: function () {
            this.model.fetch(), this.$("#btn-refresh").addClass("loading")
        }, showError: function () {
            i.showError("查询数据出错"), this.$("#btn-refresh").removeClass("loading")
        }, onDataUploadError: function (e) {
            i.showError(e)
        }, onDataUploaded: function () {
        }, onDataImported: function () {
            i.showSuccess("上传成功"), this.refreshCurrentPage()
        }, onGeoReferenceError: function (e) {
            i.showError(e)
        }, onGeoReferenceComplete: function (e) {
            i.showSuccess("空间化成功"), this.refreshCurrentPage()
        }
    });
    e.exports = l
}, function (e, t, a) {
    "use strict";
    var i = a(35), l = Backbone.Collection.extend({
        model: i,
        rootUrl: void 0,
        currentPage: 0,
        goPage: 0,
        hasNextPage: !1,
        limit: 8,
        searchTxt: "",
        url: function () {
            return this.rootUrl + "?limit=" + this.limit + "&page=" + this.goPage + "&search=" + this.searchTxt
        },
        initialize: function (e) {
            this.rootUrl = e.url
        },
        fetchNextPage: function () {
            this.hasNextPage && (this.goPage = this.currentPage + 1, this.fetch())
        },
        fetchPrePage: function () {
            0 != this.currentPage && (this.goPage = this.currentPage - 1, this.fetch())
        },
        search: function (e) {
            this.goPage = 0, this.searchTxt = e, this.fetch()
        },
        parse: function (e) {
            return 0 != e.code ? void this.trigger("error") : (this.currentPage = e.data.page, this.hasNextPage = e.data.hasNext, e.data.items)
        }
    });
    e.exports = l
}, function (e, t) {
    "use strict";
    var a = Backbone.Model.extend({
        idAttribute: "uid",
        uid: void 0,
        name: void 0,
        sr: void 0,
        geometryType: void 0,
        extent: void 0,
        count: void 0,
        updatedAt: void 0,
        primaryField: void 0,
        convertEnd: void 0
    });
    e.exports = a
}, function (e, t, a) {
    "use strict";
    var i = a(4), l = Backbone.View.extend({
        el: $("#my-map-panel"),
        events: {
            "click .btn-close-panel": "close",
            "click .map-item .thumb": "select",
            "click #btn-pre-page": "getPrePage",
            "click #btn-next-page": "getNextPage",
            "click #btn-refresh": "refreshCurrentPage",
            "click #btn-search": "search",
            "keypress #input-search": "keyPressHandler"
        },
        template: _.template($("#map-list-template").html()),
        initialize: function () {
            this.listenTo(this.model, "sync", this.render), this.listenTo(this.model, "error", this.showError), this.refreshCurrentPage()
        },
        render: function () {
            var e = this.parseMapItems(this.model.models);
            $(this.$("ul")).html(this.template({mapItems: e})), this.$(".map-item .thumb.active").removeClass("active"), this.$(".map-item #" + this.model.activeMapUid + ".thumb").addClass("active"), this.$("#btn-refresh").removeClass("loading"), this.model.hasNextPage ? this.$("#btn-next-page").removeClass("disabled") : this.$("#btn-next-page").addClass("disabled"), this.model.currentPage > 0 ? this.$("#btn-pre-page").removeClass("disabled") : this.$("#btn-pre-page").addClass("disabled"), this.$("#btn-search").removeClass("loading")
        },
        selectMap: function (e) {
            this.$(".map-item .thumb.active").removeClass("active"), this.model.activeMapUid = e.uid, "geohey" == e.type && this.$(".map-item #" + e.uid + ".thumb").addClass("active");
        },
        select: function (e) {
            var t = $(e.currentTarget);
            if (!t.hasClass("active")) {
                this.$(".thumb.active").removeClass("active"), t.addClass("active");
                var a = t.attr("id");
                this.trigger("select", {uid: a, type: "geohey"}), this.model.activeMapUid = a
            }
        },
        search: function () {
            this.$("#btn-search").addClass("loading");
            var e = this.$("#input-search").val().trim();
            this.model.search(e)
        },
        keyPressHandler: function (e) {
            13 == e.keyCode && this.search()
        },
        parseMapItems: function (e) {
            for (var e = this.model.models, t = [], a = 0; a < e.length; a++) {
                var i = e[a];
                t.push({uid: i.get("uid"), name: i.get("name"), thumb: "/s/mapping/" + i.get("uid") + "/thumb"})
            }
            return t
        },
        getPrePage: function () {
            this.model.fetchPrePage(), this.$("#btn-refresh").addClass("loading")
        },
        getNextPage: function () {
            this.model.fetchNextPage(), this.$("#btn-refresh").addClass("loading")
        },
        refreshCurrentPage: function () {
            this.model.fetch(), this.$("#btn-refresh").addClass("loading")
        },
        showError: function () {
            i.showError("查询我的地图出错"), this.$("#btn-refresh").removeClass("loading"), this.$("#btn-search").removeClass("loading")
        },
        close: function () {
            $(this.el).addClass("hide")
        }
    });
    e.exports = l
}, function (e, t, a) {
    "use strict";
    var i = (a(4), a(9)), l = Backbone.View.extend({
        el: $("#geohey-map-panel"),
        events: {"click .btn-close-panel": "close", "click .map-item .thumb": "select"},
        template: _.template($("#geohey-map-list-template").html()),
        initialize: function () {
            this.listenTo(this.model, "change:map", this.changeMapHandler), this.render()
        },
        render: function () {
            this.$("#map-list").append(this.template({mapItems: i.geoheyMapList}))
        },
        changeMapHandler: function () {
            var e = this.model.get("map");
            if (e) {
                var t = this.$("#" + e.uid + ".thumb");
                t.hasClass("active") || (this.$(".thumb.active").removeClass("active"), t.addClass("active"))
            }
        },
        select: function (e) {
            var t = $(e.currentTarget);
            if (!t.hasClass("active")) {
                this.$(".thumb.active").removeClass("active"), t.addClass("active");
                var a = t.attr("id");
                this.trigger("select", {uid: a, type: "geohey"})
            }
        },
        close: function () {
            $(this.el).addClass("hide")
        }
    });
    e.exports = l
}, function (e, t, a) {
    "use strict";
    var i = a(5), l = Backbone.View.extend({
        el: $("#legend-wrapper"),
        legendTemplate: _.template($("#legend-template").html()),
        events: {click: "toggle"},
        showLegend: function (e) {
            var t = this._createLegendObj(e);
            t.items && ($("#legend-container #" + t.id).remove(), $("#legend-container").append(this.legendTemplate(t)), $(this.el).removeClass("hide"))
        },
        hideLegend: function (e) {
            $("#legend-container #" + e.cid).remove(), 0 == $("#legend-container ul").length && $(this.el).addClass("hide")
        },
        clearLegend: function () {
            this.$("#legend-container").empty(), $(this.el).addClass("hide")
        },
        _createLegendObj: function (e) {
            var t, a = e.get("geometryType");
            "pt" == a || "mpt" == a ? t = "marker" : "pl" == a || "mpl" == a ? t = "polyline" : "pg" != a && "mpg" != a || (t = "polygon");
            var l = e.get("config");
            if (!t) {
                var r = l.type;
                t = 0 == r.indexOf("marker-") ? "marker" : 0 == r.indexOf("polyline-") ? "polyline" : 0 == r.indexOf("polygon-") ? "polygon" : "marker"
            }
            var o = l.toJson(), s = o.buckets, n = [];
            if (l.type == i.configTypes.MARKER_CHOROPLETH || l.type == i.configTypes.POLYLINE_CHOROPLETH || l.type == i.configTypes.POLYGON_CHOROPLETH)$.each(s, function (e, t) {
                0 == e ? n.push({
                    color: t.color,
                    value: ">" + s[e + 1].value
                }) : e < s.length - 1 ? n.push({
                    color: t.color,
                    value: s[e + 1].value + "~" + t.value
                }) : n.push({color: t.color, value: "<" + t.value})
            }); else if (l.type == i.configTypes.MARKER_BUBBLE) {
                for (var f = "single" == l.fillMode ? l.markerColor : void 0, d = 0; d < s.length; d++)0 == d ? n.push({
                    size: i.defaultBubbleLegendMaxSize - 2 * d,
                    color: f,
                    value: ">" + s[d + 1].value
                }) : d == s.length - 1 ? n.push({
                    size: i.defaultBubbleLegendMaxSize - 2 * d,
                    color: f,
                    value: "<" + s[d].value
                }) : n.push({size: i.defaultBubbleLegendMaxSize - 2 * d, color: f});
                if ("multi" == l.fillMode) {
                    var c = o.colorBuckets;
                    $.each(c, function (e, t) {
                        0 == e ? n.push({
                            color: t.color,
                            value: ">" + c[e + 1].value
                        }) : e < c.length - 1 ? n.push({
                            color: t.color,
                            value: c[e + 1].value + "~" + t.value
                        }) : n.push({color: t.color, value: "<" + t.value})
                    })
                }
            } else n = s;
            var h = e.get("legendOrder");
            return "asc" == h && (n = n.reverse()), {
                id: e.cid,
                type: t,
                title: e.get("legendTitle"),
                outlineColor: l.outlineColor,
                items: n
            }
        },
        toggle: function () {
            var e = $(this.el);
            e.hasClass("toggle") ? e.removeClass("toggle") : e.addClass("toggle")
        }
    });
    e.exports = l
}, function (e, t) {
    "use strict";
    var a = Backbone.View.extend({
        el: $("#fields-panel"),
        dataLayer: void 0,
        drake: void 0,
        fieldsTemplate: _.template($("#fields-template").html()),
        digitalFieldsTemplate: _.template($("#digital-fields-template").html()),
        valuePickerTemplate: _.template($("#value-picker-template").html()),
        events: {
            "click .btn-close-panel": "close",
            "click .field-alias": "fieldAliasClickHandler",
            "blur .field-alias-editor": "fieldAliasEditorBlurHandler",
            "keypress .field-alias-editor": "fieldAliasEditorKeyHandler",
            "change .chk-field-toggle": "fieldToggleChangeHandler",
            "change #title-field-picker": "titleFieldChangeHandler",
            "change .digital-picker": "digitalPickerChangeHandler"
        },
        initialize: function () {
            this.$(".question").tooltip()
        },
        close: function () {
            $(this.el).addClass("hide"), this.trigger("close"), this.dataLayer = void 0, this.drake.destroy(), this.drake = void 0
        },
        show: function (e) {
            if (e) {
                var t = e.get("fields");
                this.$("#fields-list").html(this.fieldsTemplate({fields: t}));
                for (var a = [], i = ["无"], l = 0; l < t.length; l++)i.push(t[l].name), "double" != t[l].type && "float" != t[l].type || a.push(t[l]);
                0 == a.length ? this.$("#digital-fields-wrapper").addClass("hide") : (this.$("#digital-fields-wrapper").removeClass("hide"), this.$("#digital-fields-list").html(this.digitalFieldsTemplate({fields: a})));
                var r = e.get("titleField");
                r = r ? r : "无", this.$("#title-field-picker").empty().append(this.valuePickerTemplate({
                    values: i,
                    defaultValue: r
                })), this.drake && this.drake.destroy(), this.drake = dragula([document.getElementById("fields-list")], {
                    moves: function (e, t, a) {
                        var i = a.className.split(" ");
                        return $.inArray("handle", i) > -1
                    }, direction: "vertical", ignoreInputTextSelection: !0
                });
                var o = $.proxy(this.dropHandler, this);
                this.drake.on("drop", o), $(this.el).removeClass("hide"), this.dataLayer = e
            }
        },
        fieldAliasClickHandler: function (e) {
            var t = $(e.currentTarget);
            t.parent().addClass("editing"), t.next().focus()
        },
        fieldAliasEditorBlurHandler: function (e) {
            var t = $(e.currentTarget);
            t.parent().removeClass("editing");
            var a = t.parent().prev().text(), i = t.val();
            i = 0 == i.length ? a : i, t.prev().text(i), this.updateFieldAlias(a, i)
        },
        fieldAliasEditorKeyHandler: function (e) {
            13 == e.keyCode && this.fieldAliasEditorBlurHandler(e)
        },
        updateFieldAlias: function (e, t) {
            if (this.dataLayer && t)for (var a = this.dataLayer.get("fields"), i = 0; i < a.length; i++)if (a[i].name == e) {
                a[i].alias = t;
                break
            }
        },
        fieldToggleChangeHandler: function (e) {
            var t = $(e.currentTarget), a = t.prop("checked"), i = t.attr("id");
            this.updateFieldVisibility(i, a)
        },
        titleFieldChangeHandler: function (e) {
            var t = this.$("#title-field-picker").val();
            t = "无" == t ? void 0 : t;
            var a = void 0;
            if (t) {
                a = [t];
                var i = this.dataLayer.get("primaryField");
                i && a.push(i)
            }
            this.dataLayer.set({titleField: t, interactivity: a}), this.trigger("configUpdate", this.dataLayer)
        },
        digitalPickerChangeHandler: function (e) {
            var t = this.dataLayer.get("fields");
            if (t) {
                var a = $(e.currentTarget), i = parseInt(a.val()), l = a.attr("id");
                for (var r in t)if (t[r].name == l) {
                    t[r].digital = i;
                    break
                }
            }
        },
        updateFieldVisibility: function (e, t) {
            if (this.dataLayer)for (var a = this.dataLayer.get("fields"), i = 0; i < a.length; i++)if (a[i].name == e) {
                a[i].visible = t;
                break
            }
        },
        dropHandler: function (e, t, a, i) {
            if (this.dataLayer) {
                var l = $(e).find(".field-name").text(), r = this.getFieldIndex(l);
                if (r != -1) {
                    var o = this.dataLayer.get("fields");
                    if (i) {
                        var s = $(i).find(".field-name").text(), n = this.getFieldIndex(s), f = n < r ? 0 : -1;
                        this.arrayMove(o, r, n + f)
                    } else this.arrayMove(o, r, o.length - 1);
                    this.dataLayer.set({fields: o})
                }
            }
        },
        getFieldIndex: function (e) {
            if (!this.dataLayer)return -1;
            for (var t = this.dataLayer.get("fields"), a = 0; a < t.length; a++)if (t[a].name == e)return a
        },
        arrayMove: function (e, t, a) {
            var i = e[t];
            e.splice(t, 1), e.splice(a, 0, i)
        }
    });
    e.exports = a
}, function (e, t, a) {
    "use strict";
    var i = a(4), l = Backbone.View.extend({
        el: $("#params-panel"), close: function () {
            $(this.el).addClass("hide"), this.trigger("close")
        }, render: function () {
            for (var e = this.model.models, t = [], a = 0; a < e.length; a++)e[a].get("visible") && e[a].get("config") && t.push(e[a].toVizJson());
            var l = JSON.stringify(t, void 0, 4);
            this.$("#params-content").text(l).jsonFormatter({collapsible: !1}), this.$("#btn-copy-params").attr("data-clipboard-text", l), $("#btn-copy-params").each(function () {
                var e = new ZeroClipboard(this);
                e.on("ready", function (t) {
                    e.on("aftercopy", function (e) {
                        i.showSuccess("已复制到剪切板")
                    })
                })
            })
        }
    });
    e.exports = l
}, function (e, t, a) {
    "use strict";
    var i = a(4), l = Backbone.Model.extend({
        urlRoot: "dataviz",
        idAttribute: "uid",
        defaults: {uid: void 0, title: void 0, desc: void 0, map: void 0, content: void 0, share: !1},
        parse: function (e) {
            return 0 == e.code ? e.data : void this.trigger("error", e.msg)
        },
        updateThumb: function (e) {
            var t = this.get("uid");
            $.ajax({
                type: "POST", url: "dataviz/" + t + "/thumb", data: {thumb: e}, success: function (e) {
                    0 != e.code && i.showError("保存缩略图失败")
                }, error: function () {
                    i.showError("保存缩略图失败")
                }
            })
        }
    });
    e.exports = l
}, function (e, t, a) {
    "use strict";
    var i = a(43), l = (a(5), a(13)), r = Backbone.Model.extend({
        urlRoot: "dataviz",
        idAttribute: "uid",
        defaults: {uid: void 0, title: void 0, desc: void 0, map: void 0, content: void 0, share: !1, ak: void 0},
        parse: function (e) {
            if (0 == e.code) {
                if (e.data.content) {
                    for (var t = [], a = 0; a < e.data.content.length; a++)t.push(this.parseDataLayer(e.data.content[a]));
                    t.reverse(), e.data.content = t, e.data.map = this.parseMap(e.data.map)
                }
                return e.data
            }
            this.trigger("error", e.msg)
        },
        parseMap: function (e) {
            var t, a, i = e.center, l = e.resolution;
            return !e.uid && e.type ? (t = "online", a = e.type) : e.uid && "diy" == e.type ? (t = "geohey", a = e.uid) : (t = e.type, a = e.uid), {
                center: i,
                resolution: l,
                type: t,
                uid: a
            }
        },
        parseDataLayer: function (e) {
            if (!e.geometryType) {
                var t = e.config.type;
                0 == t.indexOf("marker-") ? e.geometryType = "pt" : 0 == t.indexOf("polyline-") ? e.geometryType = "pl" : 0 == t.indexOf("polygon-") && (e.geometryType = "pg")
            }
            return new i({
                dataName: e.dataName,
                dataUid: e.dataUid,
                dataType: e.dataType,
                extent: e.extent,
                geometryType: e.geometryType,
                count: e.count,
                sr: e.sr,
                maxRes: e.maxRes,
                visible: e.visible,
                showLegend: e.showLegend,
                legendTitle: e.legendTitle,
                legendOrder: e.legendOrder,
                filter: e.filter,
                fields: e.fields,
                titleField: e.titleField,
                interactivity: e.interactivity,
                primaryField: e.primaryField,
                config: l.create(e.config),
                animated: e.animated,
                timeField: e.timeField,
                frameCount: e.frameCount,
                duration: e.duration,
                timeAccumulate: e.timeAccumulate,
                timeBreaks: e.timeBreaks,
                tipType: e.tipType
            })
        }
    });
    e.exports = r
}, function (e, t, a) {
    "use strict";
    var i = a(4), l = a(5), r = Backbone.Model.extend({
        defaults: {
            dataUid: void 0,
            dataType: void 0,
            dataName: void 0,
            extent: void 0,
            geometryType: void 0,
            count: void 0,
            config: void 0,
            sr: void 0,
            maxRes: void 0,
            visible: !0,
            filter: void 0,
            showLegend: !1,
            legendTitle: l.defaultLegendTitle,
            legendOrder: l.defaultLegendOrder,
            primaryField: void 0,
            titleField: void 0,
            fields: void 0,
            interactivity: void 0,
            animated: !1,
            timeField: void 0,
            frameCount: l.defaultTimeSegment,
            duration: l.defaultTimeDuration,
            timeAccumulate: !1,
            timeBreaks: void 0
        }, querying: !1, queryCount: 0, queryCompleteCount: 0, features: void 0, toJSON: function () {
            var e = this.get("config"), t = {
                dataUid: this.get("dataUid"),
                dataType: this.get("dataType"),
                dataName: this.get("dataName"),
                extent: this.get("extent"),
                count: this.get("count"),
                geometryType: this.get("geometryType"),
                config: e,
                sr: this.get("sr"),
                maxRes: this.get("maxRes"),
                visible: this.get("visible"),
                filter: this.get("filter"),
                fields: this.get("fields"),
                primaryField: this.get("primaryField"),
                titleField: this.get("titleField"),
                interactivity: this.get("interactivity")
            };
            if (this.hasLegend()) {
                var a = this.get("showLegend");
                t.showLegend = a, a && (t.legendTitle = this.get("legendTitle"), t.legendOrder = this.get("legendOrder"))
            }
            return this.get("animated") && e.type != l.configTypes.MARKER_HEAT && (t.animated = this.get("animated"), t.timeField = this.get("timeField"), t.frameCount = this.get("frameCount"), t.duration = this.get("duration"), t.timeAccumulate = this.get("timeAccumulate"), t.timeBreaks = this.get("timeBreaks"), t.tipType = this.get("tipType")), t
        }, hasLegend: function () {
            var e = this.get("config");
            return e.type == l.configTypes.MARKER_CHOROPLETH || e.type == l.configTypes.MARKER_CATEGORY || e.type == l.configTypes.MARKER_BUBBLE || e.type == l.configTypes.POLYLINE_CHOROPLETH || e.type == l.configTypes.POLYLINE_CATEGORY || e.type == l.configTypes.POLYGON_CHOROPLETH || e.type == l.configTypes.POLYGON_CATEGORY
        }, toVizJson: function () {
            var e = this.get("dataUid"), t = this.get("dataType"), a = this.get("filter"), i = this.get("config"), r = this.get("animated"), o = this.get("interactivity");
            if (i.type != l.configTypes.MARKER_HEAT && r) {
                for (var s = this.get("timeBreaks"), n = this.get("timeField"), f = [], d = this.get("timeAccumulate"), c = this.get("tipType"), h = 0; h < s.length; h++) {
                    var p, u = s[h];
                    p = d || 0 == h ? "date" == c ? n + "<=to_timestamp(" + u / 1e3 + ")" : n + "<=" + u : "date" == c ? n + "<=to_timestamp(" + u / 1e3 + ") and " + n + ">to_timestamp(" + s[h - 1] / 1e3 + ")" : n + "<=" + u + " and " + n + ">" + s[h - 1], a && (p += " and " + a), f.push({
                        dataUid: e,
                        dataType: t,
                        filter: p,
                        interactivity: o,
                        vizConfig: i.toJson()
                    })
                }
                return f
            }
            return {dataUid: e, dataType: t, filter: a, interactivity: o, vizConfig: i.toJson()}
        }, toVizJsonString: function () {
            return JSON.stringify(this.toVizJson())
        }, fetchFields: function () {
            var e = this.get("fields");
            if (e)return this.unset("fields", {silent: !0}), void this.set({fields: e});
            var t = this.get("dataUid"), a = this.get("dataType"), l = "private" == a ? "data" : "public_data", r = this;
            $.ajax({
                type: "GET", url: "/s/" + l + "/" + t + "/fields", success: function (e) {
                    if (0 == e.code) {
                        var t = e.data;
                        t.sort(function (e, t) {
                            return e.name == name ? 0 : e.name > t.name ? 1 : -1
                        });
                        for (var a = 0; a < t.length; a++)t[a].alias = t[a].name, t[a].visible = !0;
                        r.set({fields: t})
                    } else i.showError("获取字段信息错误")
                }, error: function () {
                    i.showError("获取字段信息错误")
                }
            })
        }, fetchBuckets: function () {
            var e = this.get("config"), t = this.get("dataUid"), a = this.get("dataType"), l = e.fieldName, r = e.bucketCount, o = e.bucketType, s = this.get("filter"), n = this;
            $.ajax({
                type: "POST",
                url: "/app/dataviz/choropleth/" + o,
                data: {dataUid: t, dataType: a, fieldName: l, filter: s, bucketCount: r},
                success: function (t) {
                    if (0 == t.code) {
                        var a = n.calcBreaks(t.data);
                        e.breaks = a, n.trigger("bucketsFetched")
                    } else i.showError("获取分段信息错误")
                },
                error: function (e, t, a) {
                    i.showError("获取分段信息失败")
                }
            })
        }, fetchTimeBreaks: function () {
            var e = this.get("dataUid"), t = this.get("dataType"), a = this.get("timeField"), l = this.get("filter"), r = this.get("frameCount"), o = this;
            $.ajax({
                type: "POST",
                url: "/app/dataviz/fieldRange",
                data: {dataUid: e, dataType: t, fieldName: a, filter: l},
                success: function (e) {
                    if (0 == e.code) {
                        var t = e.data.min, a = e.data.max, l = o.calcBreaks2(t, a, r);
                        o.set({timeBreaks: l, tipType: e.data.type}), o.trigger("timeBreaksFetched")
                    } else i.showError("获取时间分段信息错误")
                },
                error: function (e, t, a) {
                    i.showError("获取时间分段信息失败")
                }
            })
        }, fetchBucketsForBubbleColor: function () {
            var e = this.get("config"), t = this.get("dataUid"), a = this.get("dataType"), l = e.colorFieldName, r = e.colorBucketCount, o = e.colorBucketType, s = this.get("filter"), n = this;
            $.ajax({
                type: "POST",
                url: "/app/dataviz/choropleth/" + o,
                data: {dataUid: t, dataType: a, fieldName: l, filter: s, bucketCount: r},
                success: function (t) {
                    if (0 == t.code) {
                        var a = n.calcBreaks(t.data);
                        e.colorBreaks = a, n.trigger("bucketsFetched")
                    } else i.showError("获取分段信息错误")
                },
                error: function (e, t, a) {
                    i.showError("获取分段信息失败")
                }
            })
        }, calcBreaks: function (e) {
            var t = $.unique(e), a = Number.MAX_VALUE, i = 0;
            $.each(t, function (e, t) {
                var l = Math.abs(t - i);
                a = a > l ? l : a, i = t
            });
            var l = 0;
            a < 0 ? l = Number(a).toString().length - 2 : a >= 0 && a < 100 && (l = 1);
            var l = Math.pow(10, l);
            return $.each(t, function (e, a) {
                t[e] = Math.ceil(a * l) / l
            }), $.unique(t)
        }, calcBreaks2: function (e, t, a) {
            for (var i = [], l = (t - e) / (a - 1), r = 0; r < a; r++)i.push(e + l * r);
            return this.calcBreaks(i)
        }, fetchFieldValues: function () {
            var e = this.get("config"), t = this.get("dataUid"), a = this.get("dataType"), l = e.fieldName, r = this.get("filter"), o = this;
            $.ajax({
                type: "POST",
                url: "/app/dataviz/fieldValues",
                data: {dataUid: t, dataType: a, fieldName: l, filter: r, limit: 50},
                success: function (t) {
                    if (0 == t.code) {
                        var a = t.data.values;
                        t.data.hasOthers && a.push("其它"), e.fieldValues = a, o.trigger("fieldValuesFetched")
                    } else i.showError("获取字段值错误")
                },
                error: function () {
                    i.showError("获取字段值失败")
                }
            })
        }, fetchFeatures: function () {
            if (!this.querying) {
                if (this.features)return void this.trigger("featuresFetched");
                var e = this.get("dataUid"), t = this.get("dataType"), a = this.get("filter"), i = this.get("count") || 1;
                t = "private" == t ? "data" : "public_data";
                var l = "/s/" + t + "/" + e + "/query", r = 1e3, o = Math.ceil(i / r);
                o = Math.min(o, 5), this.queryCount = o, this.queryCompleteCount = 0;
                for (var s = 0; s < o; s++) {
                    var n = r * s, f = l + "?offset=" + n + "&limit=" + r + "&filter=" + a;
                    this.query(f)
                }
            }
        }, query: function (e) {
            var t = this;
            $.ajax({
                type: "GET", url: e, success: function (e) {
                    0 == e.code ? (t.features ? t.features = t.features.concat(e.data.features) : t.features = e.data.features, t.queryCompleteCount++, t.queryCompleteCount == t.queryCount && t.trigger("featuresFetched")) : i.showError("获取数据错误")
                }, error: function (e, t, a) {
                    i.showError("获取数据错误")
                }
            })
        }
    });
    e.exports = r
}, function (e, t, a) {
    "use strict";
    var i = a(45), l = Backbone.Collection.extend({
        model: i,
        currentPage: 0,
        goPage: 0,
        hasNextPage: !1,
        limit: 8,
        search: "",
        activeProjectUid: void 0,
        url: function () {
            return "dataviz/list?limit=" + this.limit + "&page=" + this.goPage + "&search=" + this.search
        },
        initialize: function () {
        },
        parse: function (e) {
            return 0 == e.code && e.data ? (this.currentPage = e.data.page, this.hasNextPage = e.data.hasNext, e.data.items) : void this.trigger("error")
        },
        fetchNextPage: function () {
            this.hasNextPage && (this.goPage = this.currentPage + 1, this.fetch())
        },
        fetchPrePage: function () {
            0 != this.currentPage && (this.goPage = this.currentPage - 1, this.fetch())
        },
        updateProject: function (e) {
            var t = this.get(e.get("uid"));
            t && (t.set({
                title: e.get("title"),
                desc: e.get("desc"),
                updatedAt: e.get("updatedAt")
            }), this.trigger("projectUpdated", t))
        }
    });
    e.exports = l
}, function (e, t) {
    "use strict";
    var a = Backbone.Model.extend({idAttribute: "uid", uid: void 0, title: void 0, desc: void 0, updatedAt: void 0});
    e.exports = a
}, function (e, t) {
    "use strict";
    var a = Backbone.Collection.extend({
        sortDataLayers: function (e) {
            for (var t = [], a = 0; a < e.length; a++)t.push(this.get(e[a]));
            this.reset(t, {silent: !0})
        }
    });
    e.exports = a
}, function (e, t, a) {
    "use strict";
    var i = a(48), l = Backbone.Collection.extend({
        model: i,
        currentPage: 0,
        goPage: 0,
        hasNextPage: !1,
        limit: 8,
        searchTxt: "",
        activeMapUid: void 0,
        url: function () {
            return "/s/mapping/list?limit=" + this.limit + "&page=" + this.goPage + "&search=" + this.searchTxt
        },
        initialize: function () {
        },
        parse: function (e) {
            return 0 != e.code ? void this.trigger("error") : (this.currentPage = e.data.page, this.hasNextPage = e.data.hasNext, e.data.items)
        },
        fetchNextPage: function () {
            this.hasNextPage && (this.goPage = this.currentPage + 1, this.fetch())
        },
        fetchPrePage: function () {
            0 != this.currentPage && (this.goPage = this.currentPage - 1, this.fetch())
        },
        search: function (e) {
            this.goPage = 0, this.searchTxt = e, this.fetch()
        }
    });
    e.exports = l
}, function (e, t) {
    "use strict";
    var a = Backbone.Model.extend({idAttribute: "uid", uid: void 0, name: void 0});
    e.exports = a
}, function (e, t) {
    "use strict";
    var a = Backbone.Model.extend({
        defaults: {uid: void 0, ak: void 0}, getShareUrl: function () {
            return "https://" + document.domain + "/apps/dataviz/" + this.get("uid") + "/share?ak=" + this.get("ak")
        }, getIframeScript: function () {
            return "<iframe width=480 height=300 src='" + this.getShareUrl() + "' frameborder=0></iframe>"
        }
    });
    e.exports = a
}, function (e, t, a) {
    "use strict";
    var i = a(5), l = a(4), r = a(13), o = Backbone.Model.extend({
        defaults: {
            baseMap: i.defaultMap,
            mapStatus: i.defaultMapStatus,
            dataLayerList: void 0
        }, configLayer: function (e) {
            var t = e.get("config");
            if (!t) {
                var a = e.get("geometryType"), t = this.genDefaultConfig(a);
                e.set({config: t})
            }
            this.configTile(e)
        }, updateTileLayer: function (e) {
            this.configTile(e)
        }, configTile: function (e) {
            var t = this, a = {configJson: e.toVizJsonString()}, r = e.get("config");
            if (r.type != i.configTypes.MARKER_HEAT) {
                var o = !e.get("animated");
                a.layerGrouped = o
            }
            var s = (new Date).getTime();
            $.ajax({
                type: "POST", url: "/s/dataviz/config?t=" + s, data: a, success: function (a) {
                    if (0 == a.code) {
                        var r = void 0, s = void 0, n = e.get("config").type;
                        if (n == i.configTypes.MARKER_HEAT)r = "/s/dataviz/" + a.data.vizId + "/0/{z}/{x}/{y}.json", s = a.data.torque, t.trigger("layerConfig", {
                            url: r,
                            vizId: a.data.vizId,
                            torque: s,
                            dataLayer: e
                        }); else if (o)r = i.domain + "/s/dataviz/" + a.data.vizId + "/{z}/{x}/{y}.png?retina={i}&token=" + i.token, t.trigger("layerConfig", {
                            url: r,
                            vizId: a.data.vizId,
                            layerGrouped: !0,
                            dataLayer: e
                        }); else {
                            var f = a.data.vizIds, d = [];
                            for (var c in f) {
                                var r = r = i.domain + "/s/dataviz/" + f[c] + "/{z}/{x}/{y}.png?retina={i}&token=" + i.token;
                                d.push(r)
                            }
                            t.trigger("layerConfig", {urls: d, layerGrouped: !1, dataLayer: e})
                        }
                    } else l.showError("可视化配置失败")
                }, error: function () {
                    l.showError("操作失败")
                }
            })
        }, genDefaultConfig: function (e) {
            return "pt" == e || "mpt" == e ? r.create(i.configTypes.MARKER_SIMPLE) : "pl" == e || "mpl" == e ? r.create(i.configTypes.POLYLINE_SIMPLE) : "pg" == e || "mpg" == e ? r.create(i.configTypes.POLYGON_SIMPLE) : void 0
        }, identify: function (e, t) {
            var a = this;
            $.ajax({
                type: "POST",
                url: "/s/dataviz/identify",
                data: {geometry: JSON.stringify(t), dataList: JSON.stringify(e)},
                success: function (e) {
                    0 == e.code ? a.trigger("identifySuccess", e.data) : (a.trigger("identifyError"), l.showError("查询数据失败"))
                },
                error: function () {
                    a.trigger("identifyError"), l.showError("查询数据失败")
                }
            })
        }, query: function (e, t) {
            var a = this, i = e.get("dataUid"), r = e.get("dataType"), o = e.get("geometryType"), s = null;
            s = "private" == r ? "/s/data/" + i + "/" + t : "/s/public_data/" + i + "/" + t, $.ajax({
                type: "POST",
                url: s,
                contentType: "application/x-www-form-urlencoded",
                success: function (e) {
                    0 == e.code ? a.trigger("querySuccess", {
                        dataUid: i,
                        geometryType: o,
                        data: e.data
                    }) : (a.trigger("queryError"), l.showError("查询数据失败"))
                },
                error: function () {
                    a.trigger("queryError"), l.showError("查询数据失败")
                }
            })
        }
    });
    e.exports = o
}, function (e, t) {
    "use strict";
    var a = Backbone.Model.extend({urlRoot: "dataviz", idAttribute: "uid", defaults: {shared: !1}});
    e.exports = a
}, function (e, t, a) {
    "use strict";
    var i = a(5), l = Backbone.Model.extend({defaults: {map: i.defaultMap}});
    e.exports = l
}]);