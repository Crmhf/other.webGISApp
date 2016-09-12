/**
 * 初始化界面元素
 * Created by ChiRong on 2016/8/23.
 */

// 初始化工作流程的页面
function initWorkFlow(container){
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
        graph.setPanning(true);

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