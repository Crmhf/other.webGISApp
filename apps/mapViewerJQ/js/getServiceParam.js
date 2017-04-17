/**
 * Created by ChiRong on 2016/6/23.
 */


    $.getServiceParam = function (id) {
       // var strUrl='http://192.168.1.114:8081/share-exchange/webservices/rest/serviceregister/importOneService/';

       // 获取到通用的配置信息
       var strUrl=commonConfig.getServiceById;
        $.ajax({
            type: "GET",
            contentType: "application/json;charset=utf-8",
            url: strUrl + id,
            dataType: 'json',
            contentType:"application/json;charset=utf-8",
          //  cache: false,
          //  data: id,
            success: function (resultData) {
                mapInfo = resultData.data;
             //   console.info('&getServiceParam&mapInfo:' + mapInfo.serviceUrl);
                initMap();
            },
            error: function (error) {
                alert('error+获取地图服务的具体参数信息失败！');
            }
        });

    }