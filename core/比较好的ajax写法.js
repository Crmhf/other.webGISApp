/**
 * 在基于BS框架的代码是这样编写的
 * Created by ChiRong on 2016/10/3.
 */
$.ajax ({
    type:'POST',
    //    dataType:'text',
    url: commonConfig.trans.engineXml,
    data:graphXml,
    error: function() {
        alert('数据获取失败！');
    },
    success: function(data) {
        alert('ok');
    },
    complete: function() {
        //$('#cargando').delay(500).fadeOut('slow');
    }
});