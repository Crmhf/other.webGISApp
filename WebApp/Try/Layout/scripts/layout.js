function Frame() {

    var _resizeWindow = function () {
        $(window).resize(function () { alert("你改变了窗口大小！"); });
    },
    /**
    * 功能描述：判断浏览器类型
    * 参数描述：无
    * 返回值：Object
    */
    _checkBrowser = function() {
        this.ver = navigator.appVersion
        this.dom = document.getElementById ? 1 : 0
        this.ie6 = (this.ver.indexOf("MSIE 6") > -1 && this.dom) ? 1 : 0;
        this.ie5 = (this.ver.indexOf("MSIE 5") > -1 && this.dom) ? 1 : 0;
        this.ie4 = (document.all && !this.dom) ? 1 : 0;
        this.ns5 = (this.dom && parseInt(this.ver) >= 5) ? 1 : 0;
        this.ns4 = (document.layers && !this.dom) ? 1 : 0;
        this.mac = (this.ver.indexOf('Mac') > -1) ? 1 : 0;
        this.ope = (navigator.userAgent.indexOf('Opera') > -1);
        this.ie = (this.ie6 || this.ie5 || this.ie4)
        this.ns = (this.ns4 || this.ns5)
        this.bw = (this.ie6 || this.ie5 || this.ie4 || this.ns5 || this.ns4 || this.mac || this.ope)
        this.nbw = (!this.bw)
        return this;
    };

    this.test = function () {
        alert('test');
    };

    /**
    * 功能描述：无模式对话框
    * 参数描述：无
    * 返回值：无
    */
    this.modelessAlert = function (Msg) {
        window.showModelessDialog("javascript:alert(\"" + escape(Msg) + "\");window.close();", "", "status:yes;resizable:no;help:yes;dialogHeight:height:30px;dialogHeight:40px;");
    }; 


    (function () {
        _checkBrowser();
    })();
};

var page;
$(document).ready(function () {
    page = new Frame();
});