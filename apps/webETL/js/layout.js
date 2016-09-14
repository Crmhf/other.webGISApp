/**
 * 初始化界面元素
 * Created by ChiRong on 2016/8/23.
 */

/*
// 初始化界面上的元素
$(document).ready(function(){
    // 界面初始完毕后
    //var container =  document.getElementById('graph');
    // 初始化图形的容器
    //initGraph(container);
});
// 在初始化界面元素的基础上，初始化流程

// 初始化工作流程的页面
function initGraph(container){
    debugger;
  // 初始化页面中的元素
    if (!mxClient.isBrowserSupported())
    {
        // 检查浏览器支持
        mxUtils.error('Browser is not supported!', 200, false);
    }
    else
    {
        // 在容器中创建图形
        var graph = new mxGraph(container);
        graph.graphHandler.scaleGrid = true;
        graph.setTooltips(true);
        graph.setPanning(true);
        graph.setConnectable(true);
        graph.setDropEnabled(true);
        graph.setAllowDanglingEdges(false);
        graph.setDisconnectOnMove(false);
        graph.setCellsEditable(false);


        var parent = graph.getDefaultParent();
        // Adds cells to the model in a single step
        graph.getModel().beginUpdate();
        try
        {
            // 通过设定insertVertex中的参数来控制其样式
            var v1 = graph.insertVertex(parent, null, '从SQL中加载数据', 300, 300, 120, 50,'ROUNDED;strokeColor=red;fillColor=gray');
            var v2 = graph.insertVertex(parent, null, '导出到TXT中', 500, 300, 100, 50);
            var e1 = graph.insertEdge(parent, null, '', v1, v2);
        }
        finally
        {
            // 更新流程图的显示
            graph.getModel().endUpdate();
        }
    }
}
*/


// 程序从这里开始。创建DOM节点中指定标记的简单图形。
// 方法在文档的onLoad事件处理中被调用（如下所示）。
function initGraph(container)
{
    // 检查浏览器支持
    if (!mxClient.isBrowserSupported())
    {
        mxUtils.error('Browser is not supported!', 200, false);
    }
    else
    {
        // 在指定容器中创建图形
        graph = new mxGraph(container);

        // 激活橡皮圈选择
        new mxRubberband(graph);

        // 拿到插入单元的默认父节点。
        // 这通常是根节点的第一子节点（如0层）。
        var parent = graph.getDefaultParent();

        // 处理对元素的点击
        graph.addListener(mxEvent.CLICK, function(sender, evt)
        {
            var cell = evt.getProperty('cell');


        });

        // 在一个步骤中，加入所有的单元到模型中
        graph.getModel().beginUpdate();
        try
        {
            // 通过设定insertVertex中的参数来控制其样式
            var v1 = graph.insertVertex(parent, null, '从SQL中加载数据', 300, 300, 120, 50,'ROUNDED;strokeColor=red;fillColor=gray');
            var v2 = graph.insertVertex(parent, null, '导出到TXT中', 500, 300, 100, 50);
            var e1 = graph.insertEdge(parent, null, '', v1, v2);
        }
        finally
        {
            // 更新显示
            graph.getModel().endUpdate();
        }
    }
};

// 节点生成xml
function showXML(container){
    var enc = new mxCodec(mxUtils.createXmlDocument());
    var node = enc.encode(graph.getModel());

    // x和y二选一，分别生成两种格式的XML
    var x =  mxUtils.getPrettyXml(node);
    var y = mxUtils.getXml(node);

    //var encoder = new mxCodec();
    //var node = encoder.encode(graph.getModel());
    // jQuery中的 html()无法解析xml
    $('#showXMLMessage').text(x);
    $('#dlg').dialog('open');
}




$(document).ready(function(){
    var container =  document.getElementById('graphContainer');
    // 初始化graphContainer
    initGraph(container);
    
    $('#showXML').click(function(){
        showXML(container);
    });

});