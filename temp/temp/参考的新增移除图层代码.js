/**
 * Created by ChiRong on 2016/11/19.
 */
case "addnewdocument":
//判断当前是否有打开文档
var layers = [];
var nodes = $this.TreeView.tree("getChildren", node.target);
if (!ktw.IsNull(ktw.MapDoc) && nodes.length > 0) {
    ktw.UCMessageBox.confirm("提示", "是否保存对" + ktw.MapDoc.resource.name + "的修改！", function (change) {
        if (change) {
            //1、取center值2、baselayer值3、透明度4、uuid
            $.each(nodes, function (i, a) {
                var layer = {
                    name: ktw.getUrlParam(a.attributes.Url, "layers").split(":")[1],
                    type: "wms",
                    visible: "True",
                    url: a.attributes.Url,
                    layers: ktw.getUrlParam(a.attributes.Url, "layers"),
                    styles: "",
                    bounds: "[[" + a.attributes.extent[1] + "," + a.attributes.extent[0] + "," + a.attributes.extent[3] + "," + a.attributes.extent[2] + "]]",
                    zindex: i,
                    opacity: 0.3,
                    itemId: a.id,
                    resourceId: a.attributes.resouceID,
                    wfsUrl: a.attributes.wfsurl
                };
                layers.push(layer);
            });
            ktw.MapDoc.resourceExtend.info.layers.overlays = layers;
            //打开保存文档界面
            var winDoc = ktw.App.OpenWindow({
                ID: "winDoc" + ktw.MapDoc.resource.name,
                Title: "保存文档",
                Width: 426,
                Height: 250,
                Left: ktw.App.LeftPanel.Width,
                Top: 100,
                Maximizable: false,
                Collapsible: false,
                Resizable: false,
                Draggable: true,
                Modal: false,
                IsDestroy: false,
                Parent: ktw.App.FillPanel,
                ConvertData: ktw.MapDoc,
                Url: ktw.App.Root + data[0].Url + "?winid=" + "winDoc" + ktw.MapDoc.resource.name + "&tag=" + ktw.MapDoc.resource.name === "default" ? "add" : "update"
            });
            winDoc.bind("onClose", function () {
                setTimeout(function () {
                    ktw.removeMapDoc();
                    winDoc.Destroy();
                }, 100);
            });
        }
        else {
            //移除当前文档并新建文档
        }
    });
}
else {
    //1、取center值2、baselayer值3、透明度4、uuid
    //弹出新页面
    var winDoc = ktw.App.OpenWindow({
        ID: "winDoc" + e.name,
        Title: e.text,
        Width: 426,
        Height: 250,
        Left: ktw.App.LeftPanel.Width,
        Top: 100,
        Maximizable: false,
        Collapsible: false,
        Resizable: false,
        Draggable: true,
        Modal: false,
        IsDestroy: false,
        Parent: ktw.App.FillPanel,
        ConvertData: ktw.MapDoc,
        Url: ktw.App.Root + data[0].Url + "?winid=" + "winDoc" + e.name + "&tag=add"
    });
    winDoc.bind("onClose", function () {
        setTimeout(function () {
            winDoc.Destroy();
        }, 100);
    });
}
break;
case "savedocument":
var layers = [];
var nodes = $this.TreeView.tree("getChildren", node.target);
//1、取center值2、baselayer值3、透明度4、uuid
$.each(nodes, function (i, a) {
    var layer = {
        name: ktw.getUrlParam(a.attributes.Url, "layers").split(":")[1],
        type: "wms",
        visible: "True",
        url: a.attributes.Url,
        layers: ktw.getUrlParam(a.attributes.Url, "layers"),
        styles: "",
        bounds: "[[" + a.attributes.extent[1] + "," + a.attributes.extent[0] + "," + a.attributes.extent[3] + "," + a.attributes.extent[2] + "]]",
        zindex: i,

