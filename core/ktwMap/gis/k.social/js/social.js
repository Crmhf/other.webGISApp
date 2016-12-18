K.Control.Social = K.Control.extend({
    includes: K.Mixin.Events,
    options: {
        position: 'bottomleft',
        default_text: "What a nice map",
        links: [
            ['facebook', "Facebook", "https://www.facebook.com/sharer.php?u=_url_&t=_text_"],
            ['twitter', "Twitter", "http://twitter.com/intent/tweet?text=_text_&url=_url_"],
            ['google-plus', "Google Plus", "https://plus.google.com/share?url=_url_"]
        ]
    },

    initialize: function(options) {
        K.Util.setOptions(this, options);
    },

    share: function () {
        var url = this.link;
        url = url.replace(/_text_/, encodeURIComponent(this.self.options.default_text));
        url = url.replace(/_url_/, encodeURIComponent(location.href));
        window.open(url);
    },

    onAdd: function(map) {
        this.map = map;
        this._container = K.DomUtil.create('div', 'leaflet-control');
        for (var i = 0; i < this.options.links.length; i++) {
            infos = this.options.links[i];
            var div = K.DomUtil.create('div', 'leaflet-social-control', this._container);
            var link = K.DomUtil.create('a', 'leaflet-social-control-'+infos[0], div);
            link.href = infos[2];
            link.title = infos[1];
            var span = K.DomUtil.create('span', 'fa fa-'+infos[0]+'-square', link);

            K.DomEvent
                .addListener(link, 'click', K.DomEvent.stopPropagation)
                .addListener(link, 'click', K.DomEvent.preventDefault)
                .addListener(link, 'click', this.share, {self: this, link: infos[2]});
        };

        return this._container;
    }
});

K.control.social = function (options) {
    return new K.Control.Social(options);
};
