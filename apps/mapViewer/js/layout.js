/**
 * 获取从地图获取的最基本框架
 * Created by ChiRong on 2016/6/16.
 */

// 对应获取到的地图显示页面
// 数据显示的，其中的数据来源于

function Frame() {
    // 定义一些内部使用的变量
    var _me=this,_jqInfoToggle, _jqInfoImg, _jqDate, _jqManageUsers,
        _tabs, _skyline, _isInfoShow, _imgWay, _menuControl, _jqPContent,
        _selectOptionHelper=[], _children = [], _menuControlEvent = [], _jqLogout;
    var _mapSider=$

    var _onresizeWindow = function () {
            $(window).resize(function ()
            {
                // alert("你改变了窗口大小！");
                console.info('你改变了窗口大小！');
            });

        },
    // 自适应地图边界
        _applyMargins = function() {
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
        },
    // 获取到Url里的参数信息
        _getUrlParam = function() {
            var location =  window.location.search;
            mapId = URL.get('mapItem',location);
            //     console.info('&getUrlParam&mapId:' + mapId);
            return mapId;
        };

    // 对外提供调用的方法
    this.test = function () {
        // alert('test');
        // alert(defaults.webmap);

        // 提示弹出框
        /*noty({
         text: 'uasiduisa',
         type: "information",
         layout: "topCenter",
         template: '<div class="noty_message noty_message_info"><span class="noty_text"></span><div class="noty_close"></div></div>',
         timeout: 2e3,
         killer: true,
         callback: {
         afterShow: function() {
         if (t) {
         var e = this;
         setTimeout(function() {
         e.close()
         }, 3000)
         }
         }
         }
         })*/
        var n = noty({
            text: 'Do you want to continue?',
            type: 'alert',
            dismissQueue: true,
            layout: 'topCenter',
            theme: 'bootstrap',
            buttons: [
                {addClass: 'btn btn-primary', text: 'Ok', onClick: function($noty) {
                    $noty.close();
                    noty({dismissQueue: true, force: true, layout: layout, theme: 'default', text: 'You clicked "Ok" button', type: 'success'});
                }
                },
                {addClass: 'btn btn-danger', text: 'Cancel', onClick: function($noty) {
                    $noty.close();
                    noty({dismissQueue: true, force: true, layout: layout, theme: 'default', text: 'You clicked "Cancel" button', type: 'error'});
                }
                }
            ]
        });
    };

    // 获取url中的参数信息
    this.getParam = function(){
        var x = $.getUrlParam('x');
        alert(x);
    };

    this.getServiceParam = function(){
        var x = $.getServiceParam('00000000566b284b01566b3d4f280005');
    };


    /**
     * 功能描述：无模式对话框
     * 参数描述：无
     * 返回值：无
     */
    this.modelessAlert = function (Msg) {
        window.showModelessDialog("javascript:alert(\"" + escape(Msg) + "\");window.close();", "", "status:yes;resizable:no;help:yes;dialogHeight:height:30px;dialogHeight:40px;");
    };


    this.showDataPanel = function(){
        $('.tool-panel:not("hide")').addClass("hide");
        $('#data-panel').removeClass("hide");
        //, this.mapView.shrinkMap();
    };

    this.showMapPanel = function(){
        $('.tool-panel:not("hide")').addClass("hide");
        $('#basemap-panel').removeClass("hide");
        //, this.mapView.shrinkMap();
    };

    this.showSharePanel = function(){
        $('.tool-panel:not("hide")').addClass("hide");
        $('#share-panel').removeClass("hide");

        // 生成二维码
        var serviceUrl = window.location.search;
        $.createQrcode(serviceUrl);

        //, this.mapView.shrinkMap();
    };

    this.showSetupPanel = function(){
        $('.tool-panel:not("hide")').addClass("hide");
        $('#save-panel').removeClass("hide");

        $("#input-viz-name").val(mapInfo.title);
        $("#text-viz-desc").val(mapInfo.serviceDescribe);
        //, this.mapView.shrinkMap();
    };

    this.showDeletePanel = function(){
        $('.tool-panel:not("hide")').addClass("hide");
        $('#delete-panel').removeClass("hide");
        //, this.mapView.shrinkMap();
    };

    (function () {
        // 设定对应界面上的一些元素的信息，比如界面上需要的几个button
        _jqDate = $("#logout p");
        _jqInfoToggle = $("#toggleFB");
        _jqLogout = $("#iLogout");
        _jqInfoImg = $("#toggleFB a img");

        // 自动内部执行，获取到Url后面的参数信息
        _getUrlParam();

        // 在地图中美化滚动栏
        $('.tool-panel-content').perfectScrollbar();

        // 窗口改变时触发
        _onresizeWindow();
        // _getUrlInfo()


    })();
};

// 判断是否登录
function isLogin(){
    // 检查用户是否已经登录了
    return isLogin;
}



var page;
$(document).ready(function () {
    // var b = isLogin();
    // if(!b){
    //     window.location = 'login.html';
    // }
    // else{
    page = new Frame();
    // }
    //initMap();
    // 根据id获取到服务里面的参数
    $.getServiceParam("00000000566b284b01566b3d4f280005");

    // 初始化构建的webmap的参数
    var webmap = {};
    webmap.item = {
        "title":"地图的描述信息",
        "subtitle":"对应页面中的子的title",
        "snippet": "This map shows the Soil Survey Geographic (SSURGO) by the United States Department of Agriculture's Natural Resources Conservation Service.",
        "extent": [[-139.4916, 10.7191],[-52.392, 59.5199]]
    };

    webmap.itemData = {
        // 业务图层
        "operationalLayers": [{
            "url": "https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/Soil_Survey_Map/MapServer",
            "visibility": true,
            "opacity": 0.75,
            "title": "Soil Survey Map",
            "itemId": "204d94c9b1374de9a21574c9efa31164"
        }],
        // 底图
        "baseMap": {
            "baseMapLayers": [{
                "opacity": 1,
                "visibility": true,
                "url": "https://services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer"
            },{
                "isReference": true,
                "opacity": 1,
                "visibility": true,
                "url": "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer"
            }],
            "title": "World_Terrain_Base"
        },
        "version": "1.1"
    };




    // 定义对应左侧的菜单项

   /* $('.btn-close-panel').click(function(){
        $('#tool-panel-container').hide();
        $('#map-container').removeClass('shrink');
    });
    // 定义对应左侧的菜单项
>>>>>>> .r1717

     // 显示数据面板
     $('#btn-data').click(function(){
     $('.tool-panel:not("hide")').addClass("hide");
     $('#data-panel').removeClass("hide");
     });
     // 显示分享面板
     $('#btn-basemap').click(function(){
     $('.tool-panel:not("hide")').addClass("hide");
     $('#basemap-panel').removeClass("hide");
     });
     // 显示分享面板
     $('#btn-share').click(function(){
     $('.tool-panel:not("hide")').addClass("hide");
     $('#share-panel').removeClass("hide");
     });
     $('#btn-setup').click(function(){
     $('.tool-panel:not("hide")').addClass("hide");
     $('#setup-panel').removeClass("hide");
     });
     $('#btn-delete').click(function(){
     $('.tool-panel:not("hide")').addClass("hide");
     $('#delete-panel').removeClass("hide");
     });*/
    var now;
    $("#toolbar div").click(function(){
        now=$(this).index();
        $(".toolbar-item").eq(now).addClass("active").siblings(".toolbar-item").removeClass("active");
        $(".tool-panel").eq(now).show().siblings(".tool-panel").hide();
    })
    $(".data-type div").click(function(){
        now=$(this).index();
        $(".data-type div").eq(now).addClass("active").siblings(".data-type div").removeClass("active");
        $(".change-data").eq(now).show().siblings(".change-data").hide();
    })

    $(".btn-close-panel").click(function(){
        $(".tool-panel").animate({width:"hide"})
    })

   /* $(".myData").click(function(){
        var map={
            "catalogid": "00000000566af22101566afa9e080008",
            "typeid": "2"
        };
        $.ajax({
            type:'POST',
            url:'http://192.168.1.75:8080/portal/ws/rest/resource/query/ex/1/10',
            dataType:'json',
            data:'{"catalogid":"00000000566af22101566afa9e080008","typeid":"2"}',
            contentType:"application/json;charset=utf-8",
            success:function(data){
                var result=data.data.dataSource;
                var content='';
                 content+='<table id="addlayertable" class="table "><thead><tr><th><input type="checkbox"></th><th>名称</th><th>类型</th></tr></thead><tbody>'
                 for(var i=0,len=result.length; i<len; i++){
                 content+='<tr><td><input type="checkbox" name="selectrow" class="'+result[i].id+'" value="'+result[i].name+'"></td><td name="id">'+result[i].name+'</td><td>'+result[i].typename+'</td>';
                 content+='</tr>';
                 }
                content+'</tbody></table>';
                var tableInfo=$("#data-layer-list").html();
                if(''==tableInfo){
                 $("#data-layer-list").append(content);
                }

            },
            error:function(data){
                alert("error");
            }
        })
    });

    // 显示分享面板
    /*$('#btn-basemap').click(function(){
        $('.tool-panel:not("hide")').addClass("hide");
        $('#basemap-panel').removeClass("hide");
    });
    // 显示分享面板
    $('#btn-share').click(function(){
        $('.tool-panel:not("hide")').addClass("hide");
        $('#share-panel').removeClass("hide");
    });
    $('#btn-setup').click(function(){
        $('.tool-panel:not("hide")').addClass("hide");
        $('#setup-panel').removeClass("hide");
    });
    $('#btn-delete').click(function(){
        $('.tool-panel:not("hide")').addClass("hide");
        $('#delete-panel').removeClass("hide");
    });*/
    var now;
    $("#toolbar div").click(function(){
        now=$(this).index();
        $(".toolbar-item").eq(now).addClass("active").siblings(".toolbar-item").removeClass("active");
        $(".tool-panel").eq(now).show().siblings(".tool-panel").hide();
    })
    $(".data-type div").click(function(){
        now=$(this).index();
        $(".data-type div").eq(now).addClass("active").siblings(".data-type div").removeClass("active");
        $(".change-data").eq(now).show().siblings(".change-data").hide();
    })

    $(".btn-close-panel").click(function(){
        $(".tool-panel").animate({width:"hide"})
    })
    // 表格
    $(".myData").click(function(){


        //$("#myModal").modal("toggle");
       // $("#myModal").dialog('open');
        var map={
            "catalogid": "00000000566af22101566afa9e080008",
            "typeid": "2"
        };

       $.ajax({
            type:'POST',
            url:'http://192.168.1.114:8081/share-exchange/webservices/rest/serviceregister/queryviewinfo/1/10?_type=json',
            dataType:'json',
            data:'{"catalogid":"00000000566af22101566afa9e080008","serverbelongtype":"1","userflag":1,"title":""}',
            contentType:"application/json;charset=utf-8",
            success:function(data){
                var result=data.data.data;
                var content;
                content='<table class="table table-bordered table-hover"><thead> <tr> <th><input type="checkbox"/></th> <th>名称</th> <th>类型</th> </tr> </thead> <tbody>'
                    for(var i=0,len=result.length; i<len; i++){

                        content+='<tr><td><input class="data-list-checkbox" name="selectrow" type="checkbox" class="'+result[i].id+'" value="'+result[i].name+'"></td><td>'+result[i].servicesname+'</td><td>'+result[i].servertypename+'</td>';
                        content+='</tr>';
                    }
                content+='</tbody></table>';

                var a=$("#data-layer-list").html();
                if(a==""){
                    $("#data-layer-list").append(content);
                }
            },
            error:function(data){
                alert("error");
            }
        })


    });
  // 增加地图列表
    var dataA=[]
    $(".addLayer").click(function(){
        var selectList = [];
        selectList = $("[name=selectrow]:checkbox:checked");
        for(var i = 0, len = selectList.length; i < len; i++){
            var layerid = selectList[i].className;
            var selectListData=selectList[i].value;
           // var biaoqian=$(".limit-text");
           /* for(var j=0,lens=$(".limit-text").length; j<lens; j++){
                var testname=$(".limit-text:eq(j)").html();
                if(selectListData==testname){
                    return false;
                }else{
                    continue;
                }
            }
            if(selectListData==testname){
                continue;
            }else{*/
            // todo:过滤上一次选择的数据
                dataA.push(layerid);
                var content='';
                content+='<li class="list-item"><div class="item-title limit-text">'+selectListData+'</div><div class="item-info"> <span class="item-updated-at text-muted pull-right"><i class="fa fa-edit fa-fw"></i></span> <span class="item-updated-at text-muted pull-right"><i class="fa fa-eraser fa-fw"data-toggle="modal" data-target="#delete-data-list" ></i></span> </div><li>';
                $("#public-data-list").append(content);
                $.getServiceParam("00000000567a412b01567ab0b486001e");
           // }
        }

    })
    
    // 增加地图到ditu容器
    function addlayerList1(){
        for(var i=0,len=dataA.length; i<len; i++){

        }
        $.getServiceParam("00000000566b284b01566b3d4f280005");
    }

    $(".aaa").click(function(){
        alert(dataA);
        $("#addlayertable").find("[name=selectrow]:checkbox:checked").each(function(){
            var data=$(this).parent("tr");
            var id=data.find("[name='id']").val();

            console.log(id);
        })
        $("[name=selectrow]:checkbox:checked").each(function(){
            var data=$(this).parent("tr");
            var id=data.find("[name='id']").val();

            console.log(id);
        })
    })
    $("[name=selectrow]:checkbox:checked").each(function(){
        var data=$(this).parent("tr");
        var id=data.find("[name='id']").val();

        console.log(id);
    })



    // 树
    $("#public-tree").click(function(){

        $.ajax({
            type:'POST',
            url:'http://192.168.1.75:8080/portal/ws/rest/catalog/query/',
            dataType:'json',
            data:'{"parentid": "22ae908b-ea08-b6e9-6d62-0aca02aaffe1"}',
            contentType:"application/json;charset=utf-8",
            success:function(data){
                var result=data.data;
                var content;
                content='<ul class="table table-bordered table-hover">'
                for(var i=0,len=result.length; i<len; i++){
                    content+='<li><span class="'+result[i].id+'" style="display:none" ><i class="glyphicon glyphicon-chevron-right"></i></span><input class="tree-checkbox" type="checkbox" data-type="checkbox" value="'+result[i].id+'"><span>'+result[i].text+'</span></li>';
                    if(result[i].haschildren==true){
                        $(".result[i].id").css("display","block");
                    }
                }
                content+='</ul>';

                var a=$("#datalist-tree").html();
                if(a==""){
                    $("#datalist-tree").append(content);
                }
            },
            error:function(data){
                alert("error");
            }
        })
    })

    /*$('.leaflet-control-layers').css({ 'width': 'auto', 'float': 'left' });
     $('.leaflet-control-layers-toggle').css('float', 'left');
     $('.leaflet-control-layers-toggle').after('<div class='control-extend'>Your text goes here</div>');
     $('.control-extend').css({ 'float': 'left', 'line-height': '35px', 'font-weight': 'bold', 'margin-right' : '10px'});

     $('.leaflet-control-layers').on('mouseover', function (e) {
     $('.control-extend').hide();

     });

     $('.leaflet-control-layers').on('mouseout', function (e) {
     $('.control-extend').show();

     });*/

    // 设定地图的标题副标题
    // dom.byId("title").innerHTML = webmap.item.title;
    //  dom.byId("subtitle").innerHTML = webmap.item.snippet;

    // 根据服务中获取到的参数来构建地图
    // initMap();

});
