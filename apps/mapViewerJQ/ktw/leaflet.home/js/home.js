L.Control.Home = L.Control.extend({

    options: {
        position: 'topleft'
    },

    onAdd: function (map) {
        var container = L.DomUtil.create('div', 'leaflet-control-home'),
            link = L.DomUtil.create('a', '', container);

        link.href = '/';
        // link.title = L._('Go to home page');

        link.title = '返回主页';
        return container;
    }
});
L.control.home = function (options) {
    return new L.Control.Home(options);
};