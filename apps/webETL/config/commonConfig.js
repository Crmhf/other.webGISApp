/**
 * 应用默认配置项
 * Created by ChiRong on 2016/5/11.
 */
var commonConfig;
(function(){

    // 门户中所使用的服务地址
     var SERVICE_URL = 'http://192.168.1.170:8080/etl/';
   // var SERVICE_URL = 'http://192.168.1.120:8081/etl/';

    var config = {
        units: null,
        // 根据服务id获取到服务的详细信息
        getServiceById:'http://192.168.1.97:8082/share-exchange/webservices/rest/serviceregister/queryserviceinfo/',
        // 数据库服务
        database:{
            listNames: SERVICE_URL + 'database/listNames',
            getDBInfo: SERVICE_URL + 'database/getDBInfo',
            test: SERVICE_URL + 'database/test',
            create: SERVICE_URL + 'database/create',
            remove: SERVICE_URL + 'database/remove'
        },
        // 方案库服务
        repository:{
            list: SERVICE_URL + 'repository/list',
            explorer: SERVICE_URL + 'repository/explorer',
            reposityId: SERVICE_URL + 'repository/reposityId',
            readXml: SERVICE_URL + 'repository/readXml'
        },
        // 规则流服务
        trans:{
            engineXml: SERVICE_URL + 'trans/engineXml',
            save: SERVICE_URL + 'trans/save',
            run: SERVICE_URL + 'trans/run',
            result: SERVICE_URL + 'trans/result',
            inputOutputFields: SERVICE_URL + 'trans/inputOutputFields',
            getTableFields: SERVICE_URL + 'trans/getTableFields',
            previewData: SERVICE_URL + 'trans/previewData'
        },
        // 是否启用配置项中的各种配置信息
        used: true
    };

    // 将配置信息给公共
    commonConfig = config;
    return config;
}());