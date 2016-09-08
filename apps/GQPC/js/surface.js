// 显示的是地表覆盖统计

function surface_vegetation(){
    check_marker();
    clearProperties();
    $("#map").showLoading();
    $.getJSON('data/cr_datafy.json', function(data) {
        $.each(data.data, function(i, val) {
            var pictures  = L.marker(val.location, {
                icon: L.divIcon({
                    className: 'leaflet-echart-icon',
                    iconSize: [200, 200],
                    html: '<div id="marker' + val.id + '" style="width: 200px; height: 200px; position: relative; background-color: transparent;"></div>'
                })
            });
            marker.push(pictures);
            map.addLayer(marker[i]);
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('marker' + val.id));
            // 指定图表的配置项和数据
            option = {
                title : {
                    text: val.xzqname,
                    x:'center'
                },
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

        $("#map").hideLoading();

        // 构造属性列表
        var tableData = data.data;
        var str= '';
        str += "<table class='table'><thead><th>id</th><th>名称</th><th>园地</th><th>林地</th><th>耕地</th><th>草地</th></thead><tbody>";
        for(var i=0; i<tableData.length; i++) {
            str += '<tr>';
            str += '<td>' + tableData[i].id + '</td>';
            str += '<td>' + tableData[i].xzqname + '</td>';
            str += '<td>' + tableData[i].totalarea.园地 + '</td>';
            str += '<td>' + tableData[i].totalarea.林地 + '</td>';
            str += '<td>' + tableData[i].totalarea.耕地 + '</td>';
            str += '<td>' + tableData[i].totalarea.草地 + '</td>';
            str += '</tr>';
        }
        str += '</tbody></table>';
        $('#properties').html(str);
    });

}

function surface_desert(){
    check_marker();
    clearProperties();
    $("#map").showLoading();
    $.getJSON('data/cr_datafy.json', function(data) {
        $.each(data.data, function(i, val) {
            var pictures = L.marker(val.location, {
                icon: L.divIcon({
                    className: 'leaflet-echart-icon',
                    iconSize: [220, 220],
                    html: '<div id="marker' + val.id + '" style="width: 220px; height: 220px; position: relative; background-color: transparent;"></div>'
                })
            });
            marker.push(pictures);
            map.addLayer(marker[i]);
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('marker' + val.id));
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

        $("#map").hideLoading();

        // 构造属性列表
        var tableData = data.data;
        var str= '';
        str += "<table class='table'><thead><th>id</th><th>名称</th><th>园地</th><th>林地</th><th>耕地</th><th>草地</th></thead><tbody>";
        for(var i=0; i<tableData.length; i++) {
            str += '<tr>';
            str += '<td>' + tableData[i].id + '</td>';
            str += '<td>' + tableData[i].xzqname + '</td>';
            str += '<td>' + tableData[i].totalnum.园地 + '</td>';
            str += '<td>' + tableData[i].totalnum.林地 + '</td>';
            str += '<td>' + tableData[i].totalnum.耕地 + '</td>';
            str += '<td>' + tableData[i].totalnum.草地 + '</td>';
            str += '</tr>';
        }
        str += '</tbody></table>';
        $('#properties').html(str);
    });


}

function surface_water(){
    check_marker();
    clearProperties();
    $("#map").showLoading();
    $.getJSON('data/cr_datafy.json', function(data) {
        $.each(data.data, function(i, val) {
            var pictures = L.marker(val.location, {
                icon: L.divIcon({
                    className: 'leaflet-echart-icon',
                    iconSize: [200, 200],
                    html: '<div id="marker' + val.id + '" style="width: 200px; height: 200px; position: relative; background-color: transparent;"></div>'
                })
            });
            marker.push(pictures);
            map.addLayer(marker[i]);
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

        $("#map").hideLoading();

        // 构造属性列表
        var tableData = data.data;
        var str= '';
        str += "<table class='table'><thead><th>id</th><th>名称</th><th>园地</th><th>林地</th><th>耕地</th><th>草地</th></thead><tbody>";
        for(var i=0; i<tableData.length; i++) {
            str += '<tr>';
            str += '<td>' + tableData[i].id + '</td>';
            str += '<td>' + tableData[i].xzqname + '</td>';
            str += '<td>' + tableData[i].totalarea.园地 + '</td>';
            str += '<td>' + tableData[i].totalarea.林地 + '</td>';
            str += '<td>' + tableData[i].totalarea.耕地 + '</td>';
            str += '<td>' + tableData[i].totalarea.草地 + '</td>';
            str += '</tr>';
        }
        str += '</tbody></table>';
        $('#properties').html(str);
    });
}

function surface_traffic(){
    check_marker();
    clearProperties();
    $("#map").showLoading();
    $.getJSON('data/cr_datafy.json', function(data) {
        $.each(data.data, function(i, val) {
            var pictures = L.marker(val.location, {
                icon: L.divIcon({
                    className: 'leaflet-echart-icon',
                    iconSize: [220, 220],
                    html: '<div id="marker' + val.id + '" style="width: 220px; height: 220px; position: relative; background-color: transparent;"></div>'
                })
            });
            marker.push(pictures);
            map.addLayer(marker[i]);
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('marker' + val.id));
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
                    name: '数量',
                    type: 'bar',
                    data: [val.totalarea.园地, val.totalarea.耕地, val.totalarea.林地, val.totalarea.草地]
                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        });

        $("#map").hideLoading();

        // 构造属性列表
        var tableData = data.data;
        var str= '';
        str += "<table class='table'><thead><th>id</th><th>名称</th><th>园地</th><th>林地</th><th>耕地</th><th>草地</th></thead><tbody>";
        for(var i=0; i<tableData.length; i++) {
            str += '<tr>';
            str += '<td>' + tableData[i].id + '</td>';
            str += '<td>' + tableData[i].xzqname + '</td>';
            str += '<td>' + tableData[i].totalarea.园地 + '</td>';
            str += '<td>' + tableData[i].totalarea.林地 + '</td>';
            str += '<td>' + tableData[i].totalarea.耕地 + '</td>';
            str += '<td>' + tableData[i].totalarea.草地 + '</td>';
            str += '</tr>';
        }
        str += '</tbody></table>';
        $('#properties').html(str);
    });
}

function surface_people(){
    check_marker();
    clearProperties();
    $("#map").showLoading();
    $.getJSON('data/cr_datafy.json', function(data) {
        $.each(data.data, function(i, val) {
            var pictures = L.marker(val.location, {
                icon: L.divIcon({
                    className: 'leaflet-echart-icon',
                    iconSize: [200, 200],
                    html: '<div id="marker' + val.id + '" style="width: 200px; height: 200px; position: relative; background-color: transparent;"></div>'
                })
            });
            marker.push(pictures);
            map.addLayer(marker[i]);
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

        $("#map").hideLoading();

        // 构造属性列表
        var tableData = data.data;
        var str= '';
        str += "<table class='table'><thead><th>id</th><th>名称</th><th>园地</th><th>林地</th><th>耕地</th><th>草地</th></thead><tbody>";
        for(var i=0; i<tableData.length; i++) {
            str += '<tr>';
            str += '<td>' + tableData[i].id + '</td>';
            str += '<td>' + tableData[i].xzqname + '</td>';
            str += '<td>' + tableData[i].totalarea.园地 + '</td>';
            str += '<td>' + tableData[i].totalarea.林地 + '</td>';
            str += '<td>' + tableData[i].totalarea.耕地 + '</td>';
            str += '<td>' + tableData[i].totalarea.草地 + '</td>';
            str += '</tr>';
        }
        str += '</tbody></table>';
        $('#properties').html(str);
    });
}

