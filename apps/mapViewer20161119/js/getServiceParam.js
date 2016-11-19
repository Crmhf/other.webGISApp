/**
 * Created by ChiRong on 2016/6/23.
 */


    $.getServiceParam = function (id) {
       // var strUrl='http://192.168.1.114:8081/share-exchange/webservices/rest/serviceregister/importOneService/';

       // 获取到通用的配置信息
       // var strUrl=commonConfig.getServiceById;




        // 获取服务地址
        // 为了能查到该应用的详细信息,需要在对应的应用扩展表里面加入该应用的id,保存在resourceid里面
        var requestURL = commonConfig.app.queryAll;
        $.ajax({
            type: "GET",
            url: requestURL + id,
            async: false,
            cache: false,
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            success: function (result) {
                appInfo = result.data;
                debugger;
                //                layerInfo =  jQuery.parseJSON(mapInfo);

                //   console.info('&getServiceParam&mapInfo:' + mapInfo.serviceUrl);

            },
            error: function (a, b, c) {
                // showerror();
                alert('服务获取失败');
            }
        });

    }