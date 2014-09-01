/**
* 创建人：池戎
* 创建时间：2012/03/16
* 功能描述：报料的相关逻辑(提取自main.js)
* 参数描述：无
*/

function bindSolicitActions() {

    //获取验证码
    getValCode();

    (function () {
        //	alert('自动执行的函数');
    })();

}
/**
* 功能描述：获取报料平台验证码
* 参数描述：type: 请求方式(get or post)
* 返回值：无
*/

var getValCode = function () {
    var x = { action: "v", id: "808" };
    $.ajax({
        type: 'post',
        url: 'http://192.168.10.2/DWS/photo.asp',
        data: x,
        dataType: 'html',
        contentType: 'application/x-www-form-urlencoded', 
        timeout: "5000",
        success: function (data) {
            alert(data);
        }
        ,error:function(XMLHttpRequest, textStatus, errorThrown){
            var status = XMLHttpRequest.status;
			if(status == "0"){
				alert("连接超时,请重新提交");
			}
		}
    });
};