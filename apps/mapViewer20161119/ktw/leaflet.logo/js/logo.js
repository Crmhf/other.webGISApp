L.Control.Logo = L.Control.extend({
    options: {
        position: 'topleft',
    },

    onAdd: function (map) {
        this._div = L.DomUtil.create('div', 'myControl');
        var img_logo = '<div class="myClass"><img src=\"img/temp/logo.png\"></img></div>';

        this._div.innerHTML = img_logo;
        return this._div;
    }
});

L.control.logo = function (options) {
    return new L.Control.Logo(options);
};