$(function() {
    // Leaflet Map Init
    function initMap() {
        var selectedPicture;
        var originalZIndex;
        var map = L.map('map', {
            zoomControl: false
        }).setView([28.207, 113.053], 11);
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '',
            id: 'osm'
        }).addTo(map);
        $.getJSON('cr_datafy.json', function(data) {
            $.each(data.data, function(i, val) {
                var pictures = L.marker(val.location, {
                    icon: L.divIcon({
                        className: 'leaflet-echart-icon',
                        iconSize: [220, 220],
                        html: '<div id="marker' + val.id + '" style="width: 220px; height: 220px; position: relative; background-color: transparent;"></div>'
                    })
                }).addTo(map);
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('marker' + val.id));
                debugger;
                // 指定图表的配置项和数据
                option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: [{
                        type: 'category',
                        data: ['园地', '林地', '耕地' , '草地']
                    }],
                    yAxis: [{
                        type: 'value'
                    }],
                    series: [{
                        name: '总数',
                        type: 'bar',
                        data: [val.totalarea.园地, val.totalarea.耕地, val.totalarea.林地, val.totalarea.草地]
                    }]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            });
        });
    }
    initMap();
});