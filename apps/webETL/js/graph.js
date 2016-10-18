function graph(container)
{
    /*if (!mxClient.isBrowserSupported())
    {
        // Displays an error message if the browser is not supported.
        mxUtils.error('Browser is not supported!', 200, false);
    }
    else
    {
        // Creates the graph inside the given container
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




    }*/





}


var curTimestamp = new Date();
//  alert(curTimestamp.getTime());
var tick = Math.abs(curTimestamp.getTime() - timeStamp.getTime());
timeStamp = curTimestamp;
if (tick >= 800){

}
}
