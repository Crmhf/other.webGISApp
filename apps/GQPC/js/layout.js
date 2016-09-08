function applyMargins() {
    var leftToggler = $(".mini-submenu-left");
    if (leftToggler.is(":visible")) {
        $("#map .ol-zoom")
            .css("margin-left", 0)
            .removeClass("zoom-top-opened-sidebar")
            .addClass("zoom-top-collapsed");
    } else {
        $("#map .ol-zoom")
            .css("margin-left", $(".sidebar-left").width())
            .removeClass("zoom-top-opened-sidebar")
            .removeClass("zoom-top-collapsed");
    }
}

function isConstrained() {
    return $(".sidebar").width() == $(window).width();
}

function applyInitialUIState() {
    if (isConstrained()) {
        $(".sidebar-left .sidebar-body").fadeOut('slide');
        $('.mini-submenu-left').fadeIn();
    }
}
var map;
var marker = new Array();
var markerTopographic = new Array();
$(function(){
    $('.sidebar-left .slide-submenu').on('click',function() {
        var thisEl = $(this);
        thisEl.closest('.sidebar-body').fadeOut('slide',function(){
            $('.mini-submenu-left').fadeIn();
            applyMargins();
        });
    });

    $('.mini-submenu-left').on('click',function() {
        var thisEl = $(this);
        $('.sidebar-left .sidebar-body').toggle('slide');
        thisEl.hide();
        applyMargins();
    });

    $(window).on("resize", applyMargins);

    initMap();

    applyInitialUIState();
    applyMargins();
});

$(document).ready(function(){
    // 几何统计
    $('#geometry_point').click(function(){
        geometry_point();
    });
    $('#geometry_polyline').click(function(){
        geometry_polyline();
    });
    $('#geometry_polygon').click(function(){
        geometry_polygon();
    });
    // 地形地貌统计
    $('#topographic_canton').click(function(){
        topographic_canton();
    });
    $('#topographic_road').click(function(){
        topographic_road();
    });
    $('#topographic_river').click(function(){
        topographic_river();
    });
    // 地表覆盖统计
   $('#surface_vegetation').click(function(){
       surface_vegetation();
   });
    $('#surface_desert').click(function(){
        surface_desert();
    });
    $('#surface_water').click(function(){
        surface_water();
    });
    $('#surface_traffic').click(function(){
        surface_traffic();
    });
    $('#surface_people').click(function(){
        surface_people();
    });
});

// 检查marker是否已存在,如果已存在就清除
function check_marker(){
    if(markerTopographic){
        for(i=0;i<markerTopographic.length;i++) {
            map.removeLayer(markerTopographic[i]);
        }
    }
    if(marker){
        for(i=0;i<marker.length;i++) {
            map.removeLayer(marker[i]);
        }
    }
}

function clearProperties(){
    $('#properties').html('');
}