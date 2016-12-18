/**
 * Created by long on 2016/6/16.
 */

/**
 *  codeMirror对象，全局变量
 */
var CodeMirrorEditor;
/**
 * 当前加载的示例
 */

var CurrentMode = '../../sample/map/map-options.html';
$(document).ready(function() {
    $('label.tree-toggler').click(function() {
        $(this).parent().children('ul.tree').toggle(300);
    });

    $('ul.tree').first().toggle();
    $("#demoContent").splitter();

    //codemirror 初始化
    var myTextarea = document.getElementById('code');
    CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea, {
        value:'index.html',
        mode: "text/html",
        theme : 'blackboard',
        indentWithTabs : true,
        lineWrapping : true,
        lineNumbers : true
    });

    setCode();

    //左侧目录点击事件
    $("#demoCatalog a[target = 'container']").click(function(){
        var href = $(this).attr('href');
        $('#demoName').html($(this)[0].innerText);
        CurrentMode = href;
        setCode();
    });
});
//通过链接设置codemirror显示的代码
function setCode(){
    $.ajax({
        url:CurrentMode,
        dataType:"html",
        success:function(data){
            CodeMirrorEditor.setValue(data);
            runCode();
        }
    });
}
//运行codemirror内的代码
function runCode()
{
    var code = CodeMirrorEditor.getValue();//要运行的代码。
    var demo_iframe = document.getElementById('container').contentWindow;
    demo_iframe.document.write(code); //向iframe中写入代码code
    demo_iframe.document.close();
}
function configCode(){
//    $("#configA").click();

}
function copyAll(){
    //todo clipboard 新建过多textarea问题
    new Clipboard('#copy', {
        text: function() {
            return getCodeMirrorNative("#code").getDoc().getValue();
        }
    });
}
function getCodeMirrorNative(target) {
    var _target = target;
    if (typeof _target === 'string') {
        _target = document.querySelector(_target);
    }
    if (_target === null || !_target.tagName === undefined) {
        throw new Error('Element does not reference a CodeMirror instance.');
    }
    if (_target.className.indexOf('CodeMirror') > -1) {
        return _target.CodeMirror;
    }
    if (_target.tagName === 'TEXTAREA') {
        return _target.nextSibling.CodeMirror;
    }
    return null;
}

//自定义的splitter插件
(function($){
    $.fn.splitter = function(options){
        var self = $(this);
        var line = self.children().eq(1);
        var mainWidth ,leftWidth, rightWidth, dx, x , pl , pr;
        var moving = false;

        line.mousedown(function(ev){
            moving = true;
            $("#overIframe").css('display','block');
            x = ev.clientX ;
            mainWidth = self.width();
            leftWidth = self.children().eq(0).width();
            rightWidth = self.children().eq(2).width();
        });
        self.mouseup(function(ev){
            moving = false;
            $("#overIframe").css('display','none');
        });
        self.mousemove(function(ev){
            if(moving){
                dx = ev.clientX - x;
                var newLeftWidth = leftWidth + dx;
                var newRightWidth = rightWidth - dx;
                if(newLeftWidth<1||newRightWidth<200){
                    return;
                }
                pl = (newLeftWidth/mainWidth)*100;
                pr = 100 - pl;
                line.prev().css('width',pl + '%');
                line.next().css('width',"calc(" + pr + "% - 3px)");
            }
        });

    }
})(jQuery);

