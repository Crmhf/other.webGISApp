/**
 * Created by Crmhf on 16/9/4.
 */

function topographic_canton(){
    check_marker();
    clearProperties();
    var select = $("#topographic_canton_select option:checked").attr("id");
    var inData ="jsonParmeter=[{\"SQL\":\"PAC='"+ select +"'\",\"RESULT\":\"C:\\\\Users\\\\Administrator\\\\Desktop\\\\result\\\\staticresult\"}]";
    var inDataEncode = encodeURI(inData);
    $("#map").showLoading();
    $.ajax({
        type: "post",
        url: "http://localhost:8080/etl/dlgq/dxdmtj?strRepName=dxdmtj&strFolder=/statics/dxdmstatics",
        data:inDataEncode,
        dataType: "json",
        success: function (data) {
           var LeafIcon = L.Icon.extend({
                options: {
                    iconSize:     [25, 41],
                    popupAnchor:  [0, -20]
                }
            });
            var highPointIcon = new LeafIcon({iconUrl: 'img/high-point.png'}),
                lowPointIcon = new LeafIcon({iconUrl: 'img/low-point.png'});
            var val = data.data[0];
            markerTopographic[0] = L.marker([val['True-最大高程Y'], val['True-最大高程X']], {icon: highPointIcon}).bindPopup("当前为最高点,高程值为"+val['True-最大高程值']);
            markerTopographic[1] = L.marker([val['True-最小高程Y'], val['True-最小高程X']], {icon: lowPointIcon}).bindPopup("当前为最低点,高程值为"+val['True-最小高程值']);
            map.addLayer(markerTopographic[0]);
            map.addLayer(markerTopographic[1]);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
    
    setTimeout(function(){$("#cantonModal").modal("hide")},1000);
    $("#map").hideLoading();
}

function topographic_road(){
    check_marker();
    clearProperties();
    var select = $("#topographic_road_select option:checked").attr("id");
    var inData ="jsonParmeter=[{\"SQL\":\"CC='"+ select +"'\"},{\"RESULT\":\"C:\\\\Users\\\\Administrator\\\\Desktop\\\\result\\\\staticresult1\"}]";
    var inDataEncode = encodeURI(inData);
    $("#map").showLoading();
    $.ajax({
        type: "post",
        url: "http://localhost:8080/WEBETL/dlgq/dxdmtj?strRepName=rs&strFolder=/statics/roadstatics",
        data:inDataEncode,
        dataType: "json",
        success: function (data) {
            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize:     [25, 41],
                    popupAnchor:  [0, -20]
                }
            });
            var highPointIcon = new LeafIcon({iconUrl: 'img/high-point.png'}),
                lowPointIcon = new LeafIcon({iconUrl: 'img/low-point.png'});
            var val = data.data[0];
            markerTopographic[0] = L.marker([val['True-最大高程Y'], val['True-最大高程X']], {icon: highPointIcon}).bindPopup("当前为最高点,高程值为"+val['True-最大高程值']);
            markerTopographic[1] = L.marker([val['True-最小高程Y'], val['True-最小高程X']], {icon: lowPointIcon}).bindPopup("当前为最低点,高程值为"+val['True-最小高程值']);
            map.addLayer(markerTopographic[0]);
            map.addLayer(markerTopographic[1]);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });

    setTimeout(function(){$("#roadModal").modal("hide")},1000);
    $("#map").hideLoading();
}

function topographic_river(){
    check_marker();
    clearProperties();
    var LeafIcon = L.Icon.extend({
        options: {
            // shadowUrl: '../docs/images/leaf-shadow.png',
            iconSize:     [25, 41],
            // shadowSize:   [50, 64],
            // iconAnchor:   [22, 94],
            // shadowAnchor: [4, 62],
            popupAnchor:  [0, -20]
        }
    });

    var highPointIcon = new LeafIcon({iconUrl: 'img/high-point.png'}),
        lowPointIcon = new LeafIcon({iconUrl: 'img/low-point.png'});

    $.getJSON('data/staticresult.json', function(data) {
        var val = data.data[0];
        markerTopographic[0] = L.marker([val['True-最大高程Y'], val['True-最大高程X']], {icon: highPointIcon}).bindPopup("当前为最高点,高程值为"+val['True-最大高程值']);
        markerTopographic[1] = L.marker([val['True-最小高程Y'], val['True-最小高程X']], {icon: lowPointIcon}).bindPopup("当前为最低点,高程值为"+val['True-最小高程值']);
        map.addLayer(markerTopographic[0]);
        map.addLayer(markerTopographic[1]);
    });
}