function onInit(editor)
    {
        // XML and graphical display
        var textNode = document.getElementById('xml');
        var graphNode = editor.graph.container;
        var sourceInput = document.getElementById('source');
        sourceInput.checked = false;

        var funct = function(editor)
        {
            if (sourceInput.checked)
            {
                graphNode.style.display = 'none';
                textNode.style.display = 'inline';

                var enc = new mxCodec();
                var node = enc.encode(editor.graph.getModel());

                textNode.value = mxUtils.getPrettyXml(node);
                textNode.originalValue = textNode.value;
                textNode.focus();
            }
            else
            {
                graphNode.style.display = '';

                if (textNode.value != textNode.originalValue)
                {
                    var doc = mxUtils.parseXml(textNode.value);
                    var dec = new mxCodec(doc);
                    dec.decode(doc.documentElement, editor.graph.getModel());
                }

                textNode.originalValue = null;

                // Makes sure nothing is selected in IE
                if (mxClient.IS_IE)
                {
                    mxUtils.clearSelection();
                }

                textNode.style.display = 'none';

                // Moves the focus back to the graph
                textNode.blur();
                editor.graph.container.focus();
            }
        };

        editor.addAction('switchView', funct);
        mxEvent.addListener(sourceInput, 'click', function()
        {
            editor.execute('switchView');
        });
    };


// 解析XML后在面板中进行展示
function getGraphFromXml(container){
    var graph = new mxGraph(container);
    var layout = new mxFastOrganicLayout(graph);
    // Load cells and layouts the graph
    graph.getModel().beginUpdate();

    try
    {
        // 可以从文本文件中对数据进行加载
        //parse(graph, 'fileio.txt');

        // 也可以从XML文件中对数据进行加载
        read(graph, 'data/fileio.xml');

        // Gets the default parent for inserting new cells. This
        // is normally the first child of the root (ie. layer 0).
        var parent = graph.getDefaultParent();

        // Executes the layout
        layout.execute(parent);
    }
    finally
    {
        // Updates the display
        graph.getModel().endUpdate();
    }

}

// 根据链接在服务器端请求相应的数据加载到给定的图形中（这是演示使用服务器的功能）
function load(graph)
{
       // var cx = graph.container.scrollWidth / 2;
       // var cy = graph.container.scrollHeight / 2;

        // 在图形中创建默认组件
        var parent = graph.getDefaultParent();

        // 开启模型的更新事务
        graph.getModel().beginUpdate();
        try
        {
            read(graph, 'data/fileio.xml');
        }
        finally
        {
            // 更新事务结束
            graph.getModel().endUpdate();
        }
};

// 从XML数据中读取并解析
function read(graph, filename)
{
    var req = mxUtils.load(filename);
    var root = req.getDocumentElement();
    var dec = new mxCodec(root.ownerDocument);
    dec.decode(root, graph.getModel());
};