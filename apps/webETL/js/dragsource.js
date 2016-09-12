function  drag(container ,toolbar) {
    if (!mxClient.isBrowserSupported()) {
        // Displays an error message if the browser is not supported.
        mxUtils.error('Browser is not supported!', 200, false);
    }
    else {
        mxGraphHandler.prototype.guidesEnabled = true;

        if (mxClient.IS_IE) {
            new mxDivResizer(container);
            new mxDivResizer(toolbar);
        }
        var editor = new mxEditor();
        var graph = editor.graph;
        var model = graph.getModel();
        graph.isHtmlLabel = function(cell)
        {
            return !this.isSwimlane(cell);
        }

        graph.setConnectable(true);
        editor.setGraphContainer(container);

        mxGuide.prototype.isEnabledForEvent = function (evt) {
            return !mxEvent.isAltDown(evt);
        };

        addToolbarIcon(graph, toolbar,
            '<ul class="easyui-tree">数据操作</ul><br>' +
            '<img src="img/mapimages/run.png" width="16" height="16">' +
            '<li><span> 这是一棵树</span></li>'+
            '<br><select><option>Value1</option><option>Value2</option></select><br>',
            'img/mapimages/run.png');

        addToolbarIcon(graph, toolbar,
            '<li style="margin:0;">Process</li><br>' +
            '<img src="img/mapimages/run.png" width="16" height="16">' +
            '<br><select><option>Value1</option><option>Value2</option></select><br>',
            'img/mapimages/run.png');
        addToolbarIcon(graph, toolbar,
            '<h1 style="margin:0">Keys</h1><br>' +
            '<img src="img/mapimages/save.png" width="16" height="15">'
           );
        addToolbarIcon(graph, toolbar,
            '<h1 style="margin:0;">New Mail</h1><br>' +
            '<img src=img/mapimages/save.png" width="16" height="16">' +
            '<br><input type="checkbox"/>CC Archive',
            'img/mapimages/save.png');
        addToolbarIcon(graph, toolbar,
            '<h1 style="margin:0;">Server</h1><br>' +
            '<img src="images/icons48/server.png" width="16" height="16">' +
            '<br>' +
            '<a href="http://www.mxgraph.blogspot.com" target="_blank">Ping</a>',
            'images/icons48/server.png');
    }
};


Toolbar.prototype.init = function()
{
    var dir = STENCIL_PATH;

    this.addGeneralPalette(true);
    this.addUmlPalette(false);
    this.addBpmnPalette(dir, false);
    this.addStencilPalette('flowchart', 'Flowchart', dir + '/flowchart.xml',
        ';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');
    /*this.addStencilPalette('basic', mxResources.get('basic'), dir + '/basic.xml',
        ';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');
    this.addStencilPalette('arrows', mxResources.get('arrows'), dir + '/arrows.xml',
        ';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');
    this.addImagePalette('clipart', mxResources.get('clipart'), dir + '/clipart/', '_128x128.png',
        ['Earth_globe', 'Empty_Folder', 'Full_Folder', 'Gear', 'Lock', 'Software', 'Virus', 'Email',
            'Database', 'Router_Icon', 'iPad', 'iMac', 'Laptop', 'MacBook', 'Monitor_Tower', 'Printer',
            'Server_Tower', 'Workstation', 'Firewall_02', 'Wireless_Router_N', 'Credit_Card',
            'Piggy_Bank', 'Graph', 'Safe', 'Shopping_Cart', 'Suit1', 'Suit2', 'Suit3', 'Pilot1',
            'Worker1', 'Soldier1', 'Doctor1', 'Tech1', 'Security1', 'Telesales1']);*/
};

        function addToolbarIcon(graph, toolbar, label, image)
        {
            var funct = function(graph, evt, cell, x, y)
            {
                var parent = graph.getDefaultParent();
                var model = graph.getModel();

                var v1 = null;

                model.beginUpdate();
                try
                {

                    v1 = graph.insertVertex(parent, null, label, x, y, 120, 120);
                    v1.setConnectable(false);


                }
                finally
                {
                    model.endUpdate();
                }

                graph.setSelectionCell(v1);
            }

            // Creates the image which is used as the sidebar icon (drag source)
            var img = document.createElement('img');
            img.setAttribute('src', image);
            img.style.width = '16px';
            img.style.height = '16px';
            img.title = 'Drag this to the diagram to create a new vertex';
            toolbar.appendChild(img);

            var dragElt = document.createElement('div');
            dragElt.style.border = 'dashed black 1px';
            dragElt.style.width = '120px';
            dragElt.style.height = '120px';

            var ds = mxUtils.makeDraggable(img, graph, funct, dragElt, 0, 0, true, true);
            ds.setGuidesEnabled(true);
        };
        function configureStylesheet(graph) {
        }

Toolbar.prototype.createDragSource =
    function(elt, dropHandler, preview)
{
    var dragSource = mxUtils.makeDraggable(elt,dropHandler,
        preview, 0, 0,true, true);

    // Allows drop into cell only if target is a valid root
    dragSource.getDropTarget = function(graph, x, y)
    {
        var target = mxDragSource.prototype.getDropTarget.apply(this, arguments);

        if (!graph.isValidRoot(target))
        {
            target = null;
        }

        return target;
    };

    return dragSource;
};


