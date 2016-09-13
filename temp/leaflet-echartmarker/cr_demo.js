$(function() {
    // Leaflet Map Init
    function initMap() {
        var selectedPicture;
        var originalZIndex;
        var map = L.map('map', {
            zoomControl: true
        }).setView([28.117, 112.854], 11);
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
                        iconSize: [200, 200],
                        html: '<div id="marker' + val.id + '" style="width: 200px; height: 200px; position: relative; background-color: transparent;">asd</div>'
                    })
                }).addTo(map);
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('marker' + val.id));
                // 指定图表的配置项和数据
                option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    series: [{
                        name: '数据占比',
                        type: 'pie',
                        radius: ['20', '50'],
                        avoidLabelOverlap: true,
                        label: {
                            /*
                            normal: {
                                show: true,
                                position: 'center'
                            },*/
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '18',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        data: [{
                            value: val.totalarea.园地,
                            name: '园地'
                        }, {
                            value: val.totalarea.园地,
                            name: '园地'
                        }, {
                            value: val.totalarea.林地,
                            name: '林地'
                        },
                        {
                            value: val.totalarea.草地,
                            name: '草地'
                        }]
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            });
        });
    }
    initMap();
});