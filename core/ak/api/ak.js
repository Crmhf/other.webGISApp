/**
 * 密钥验证页面
 * Created by Crmhf on 2016/12/16.
 */

// 初始化一个ak对象,用来存储和用户个人密钥相关的东西
//var ak = {};
//window.ak = ak;

ak.urlParam = '/user-center/user/json/login';

// 原生的ajax请求
// 初始化一个ajax
function initXMLhttp() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //code for IE7,firefox chrome and above
        xmlhttp = new XMLHttpRequest();
    } else {
        //code for Internet Explorer
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}

/**
 * 生成ajax请求
 * @param config
 */
function ak_ajax(config) {

    /*Config Structure
     url:"reqesting URL"
     type:"GET or POST"
     ansyc: "(OPTIONAL) True for async and False for Non-async | By default its Async"
     data: "(OPTIONAL) another Nested Object which should contains reqested Properties in form of Object Properties"
     success: "(OPTIONAL) Callback function to process after response | function(data,status)"
     */
    var xmlhttp = initXMLhttp();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            if (config.success) {
                config.success(xmlhttp.responseText, xmlhttp.readyState);
            }
            else {
                console.log("FailureResponse --> State:" + xmlhttp.readyState + "Status:" + xmlhttp.status);
            }
        }
    };
    var sendData = config.data;
    if (config.type == "GET") {
        xmlhttp.open("GET", config.url + "?" + sendData, config.ansyc);
        xmlhttp.send();
    }
    if (config.type == "POST") {
        xmlhttp.open("POST", config.url, config.ansyc);
        // 默认系统中的ajax请求的均是json
        xmlhttp.setRequestHeader("Content-type", "application/json;charset=utf-8");
        xmlhttp.send(sendData);
    }
}

// 根据设置的密钥,进行请求,如果没有获取到的话提示用户并强制关闭页面

// 强制关闭页面
function closeBrowser(){
    // 如果判断失败,直接关闭浏览器
}


function checkAK(ak){
    return ak;
}

// 页面初始化完毕之前,自动内部执行的方法
/*(function () {
 // 设定对应界面上的一些元素的信息，比如界面上需要的几个button



 })();*/
