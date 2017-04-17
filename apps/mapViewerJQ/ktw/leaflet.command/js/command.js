// Control中的命令菜单
L.Control.Command = L.Control.extend({
    options: {
      //  position: 'topleft',
    },

    onAdd: function (map) {
        var controlDiv = L.DomUtil.create('div', 'leaflet-control-command');
        L.DomEvent
            .addListener(controlDiv, 'click', L.DomEvent.stopPropagation)
            .addListener(controlDiv, 'click', L.DomEvent.preventDefault)
            .addListener(controlDiv, 'click', function () {
                alert('Map Commands');
              //  MapShowCommand();
            });

        var controlUI = L.DomUtil.create('div', 'leaflet-control-command-interior', controlDiv);
        controlUI.title = 'Map Commands';
        return controlDiv;
    }
});

L.control.command = function (options) {
    return new L.Control.Command(options);
};