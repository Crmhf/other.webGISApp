/**
 * 所有关于
 * Created by ChiRong on 2016/6/23.
 */
(function ($) {
    $.getUrlParam = function (location,name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        // 如果是直接获取浏览器地址栏里面的url,location= window.location.search
        var r = location.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }


})(jQuery);