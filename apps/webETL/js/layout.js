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
        // 禁用浏览器自带右键菜单
        mxEvent.disableContextMenu(document.body);

        // 在指定容器中创建图形
        graph = new mxGraph(container);

        // 激活橡皮圈选择,鼠标框选
        new mxRubberband(graph);

        // 禁止改变元素大小
        graph.setCellsResizable(false);
        // Label 将显示 Html 格式的 Value
        graph.setHtmlLabels(true);
        // 提示信息
        graph.setTooltips(true);

        // 拿到插入单元的默认父节点。
        // 这通常是根节点的第一子节点（如0层）。
        var parent = graph.getDefaultParent();

        // 处理对元素的点击
        graph.addListener(mxEvent.DOUBLE_CLICK, function(sender, evt)
        {
            var cell = evt.getProperty('cell');
            alert(cell);
            debugger;

        });

        var doc = mxUtils.createXmlDocument();
        var y = doc.createElement('Step');
        y.setAttribute('Name', '这是一个测试');
        y.setAttribute('SpecifyFormat', 'N');
        y.setAttribute('add_date', 'N');
        y.setAttribute('add_time', 'N');


        var z = doc.createElement('Step');
        z.setAttribute('Name', '导出到TXT');
        z.setAttribute('SpecifyFormat', 'N');
        z.setAttribute('add_date', 'N');
        z.setAttribute('add_time', 'N');

        var x = doc.createElement('TransHop');
        x.setAttribute('Name', '执行');
        x.setAttribute('enabled', 'Y');
        x.setAttribute('from', 'Json 输入');
        x.setAttribute('from', '文本文件输出');

        graph.convertValueToString = function(cell)
        {
            if (mxUtils.isNode(cell.value))
            {
                if (cell.value.nodeName.toLowerCase() == 'step')
                {
                    var Name = cell.getAttribute('Name', '');
                    return Name;
                }
                else if (cell.value.nodeName.toLowerCase() == 'transhop')
                {
                    var LineName = cell.getAttribute('Name', '');
                    return LineName;
                }

            }

            return '';
        };

        // 在一个步骤中，加入所有的单元到模型中
        graph.getModel().beginUpdate();
        try
        {
            // 通过设定insertVertex中的参数来控制其样式

            /*
            var doc = mxUtils.load('data/demo.xml');
            var cell = graph.insertVertex(parent, null, doc.documentElement, 500, 300, 40, 40);
            graph.setSelectionCells([cell]);*/



            var v1 = graph.insertVertex(parent, null, y, 300, 300, 120, 50,'ROUNDED;strokeColor=red;fillColor=gray');
         //   v1.data = new Step('N','N','N');
            var v2 = graph.insertVertex(parent, null, z, 500, 300, 100, 50);
            var e1 = graph.insertEdge(parent, null, x, v1, v2);
         //   e1.data = new Step('N','N','N');
        }
        finally
        {
            // 更新显示
            graph.getModel().endUpdate();
        }

        // 获取到工具条，并能拖动工具条，新增工具栏的节点
        var tbContainer = document.getElementById('xxxx');
        var toolbar = new mxToolbar(tbContainer);
        var addVertex = function(icon, w, h, style)
        {
            var vertex = new mxCell(null, new mxGeometry(0, 0, w, h), style);
            vertex.setVertex(true);

            var img = addToolbarItem(graph, toolbar, vertex, icon);
            img.enabled = true;

            graph.getSelectionModel().addListener(mxEvent.CHANGE, function()
            {
                var tmp = graph.isSelectionEmpty();
                mxUtils.setOpacity(img, (tmp) ? 100 : 20);
                img.enabled = tmp;
            });
        };
        addVertex('editors/images/rectangle.gif', 100, 40, '');
        addVertex('editors/images/rounded.gif', 100, 40, '');
        addVertex('editors/images/ellipse.gif', 40, 40, '');
        addVertex('editors/images/rhombus.gif', 40, 40, '');
        addVertex('editors/images/triangle.gif', 40, 40, '');
        addVertex('editors/images/cylinder.gif', 40, 40, '');
        addVertex('editors/images/actor.gif', 30, 40, '');


        // 覆写右键单击事件
        graph.panningHandler.factoryMethod = function(menu, cell, evt)
        {
            menu.addItem('Item 1', null, function()
            {
                alert('Item 1');
            });

            menu.addItem('Item 2', null, function()
            {
                alert('Item 2');
            });

            menu.addSeparator();

            var submenu1 = menu.addItem('Submenu 1', null, null);

            menu.addItem('Subitem 1', null, function()
            {
                alert('Subitem 1');
            }, submenu1);
            menu.addItem('Subitem 1', null, function()
            {
                alert('Subitem 2');
            }, submenu1);
        };
    }
};

function Step(value1,value2,value3)
{
    this.SpecifyFormat = value1;
    this.add_date = value2;
    this.add_time = value3;
}

var codec = new mxObjectCodec(new Step());
// mxCodecRegistry.register(codec);


/*codec.encode = function(enc, obj)
{
    var node = enc.document.createElement('CustomData');
    mxUtils.setTextContent(node, JSON.stringify(obj));

    return node;
};

codec.decode = function(dec, node, into)
{
    var obj = JSON.parse(mxUtils.getTextContent(node));
    obj.constructor = CustomData;

    return obj;
};*/

mxCodecRegistry.register(codec);


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

// 添加工具栏上的元素
function addToolbarItem(graph, toolbar, prototype, image)
{
    // Function that is executed when the image is dropped on
    // the graph. The cell argument points to the cell under
    // the mousepointer if there is one.
    var funct = function(graph, evt, cell, x, y)
    {
        graph.stopEditing(false);

        var vertex = graph.getModel().cloneCell(prototype);
        vertex.geometry.x = x;
        vertex.geometry.y = y;

        graph.addCell(vertex);
        graph.setSelectionCell(vertex);
    }

    // Creates the image which is used as the drag icon (preview)
    var img = toolbar.addMode(null, image, function(evt, cell)
    {
        var pt = this.graph.getPointForEvent(evt);
        funct(graph, evt, cell, pt.x, pt.y);
    });

    // Disables dragging if element is disabled. This is a workaround
    // for wrong event order in IE. Following is a dummy listener that
    // is invoked as the last listener in IE.
    mxEvent.addListener(img, 'mousedown', function(evt)
    {
        // do nothing
    });

    // This listener is always called first before any other listener
    // in all browsers.
    mxEvent.addListener(img, 'mousedown', function(evt)
    {
        if (img.enabled == false)
        {
            mxEvent.consume(evt);
        }
    });

    mxUtils.makeDraggable(img, graph, funct);

    return img;
}


$(document).ready(function(){
    var container =  document.getElementById('graphContainer');
    // 初始化graphContainer
    initGraph(container);
    
    $('#showXML').click(function(){
        showXML(container);
    });


});