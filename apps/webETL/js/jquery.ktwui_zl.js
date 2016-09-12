

function MainFrameLayout() {
    var width = $(window).width() - 2;
    var height = $(window).height() - 30;
    $('#mainFrame').layout({ width: width, height: height });
}

function GetMenusWidth() {
    var width = 0;
    var systems = $('div[name=SubSystem]');
    var systemMenu = $("#systemMenu");
    var menusWidth = [];
    for (var i = 0; i < systems.length; i++) {
        width = width + systems[i].clientWidth + 14;
        menusWidth.push(systems[i].clientWidth + 14);
    }
    systemMenu[0].index = 0;
    systemMenu[0].menuTotalWidth = width;
    systemMenu[0].menusWidth = menusWidth;
    systemMenu.css("width", width + "px");
}
function GetMenuToLeft(index) {
    var toLeft = 0;
    for (var i = 0; i < index; i++) {
        toLeft = toLeft - $("#systemMenu")[0].menusWidth[i];
    }
    return toLeft;
}
function SubSystemLayout() {
    var systemMenu = $("#systemMenu");
    if (systemMenu[0].index == undefined) { GetMenusWidth(); }
    var leftTab = $("#leftTab");
    var rightTab = $("#rightTab");
    var winWidth = $(window).width();
    if (systemMenu[0].menuTotalWidth + 7 < winWidth) {
        leftTab.css("display", "none");
        rightTab.css("display", "none");
        systemMenu.css("margin-left", "7px");
        systemMenu.css("left", "0px");
        systemMenu[0].index = 0;
    }
    else {
        var index = systemMenu[0].index;
        if (index == 0) {
            leftTab.css("display", "none");
            rightTab.css("display", "block");
            rightTab.css("left", (winWidth - 23) + "px");
            systemMenu.css("left", "0px");
            systemMenu.css("margin-left", "7px");
        }
        else {
            var menuWidth = systemMenu[0].menuTotalWidth;
            for (var i = 0; i < index; i++) {
                menuWidth = menuWidth - systemMenu[0].menusWidth[i];
            }
            if (rightTab.css("display") == "none") {
                if (menuWidth < winWidth - 23) {
                    var i = index;
                    while (i >= 0 && menuWidth + systemMenu[0].menusWidth[i] <= winWidth - 23) {
                        menuWidth = menuWidth + systemMenu[0].menusWidth[i];
                        i = i - 1;
                    }
                    if (i < 0) i = 0;
                    systemMenu[0].index = i;
                    if (i == 0) {
                        leftTab.css("display", "none");
                        systemMenu.css("left", "0px");
                        systemMenu.css("margin-left", "7px");
                    }
                    else {
                        var w = 0;
                        for (var j = 0; j < i; j++) {
                            w = w - systemMenu[0].menusWidth[j];
                        }
                        systemMenu.css("left", w + "px");
                    }
                }
                else {
                    rightTab.css("display", "block");
                    rightTab.css("left", (winWidth - 23) + "px");
                }
            }
            else {
                if (menuWidth < winWidth - 23) {
                    rightTab.css("display", "none");
                }
                else {
                    rightTab.css("display", "block");
                    rightTab.css("left", (winWidth - 23) + "px");
                }
            }
        }
    }
}

function MenuArrowMouseover(obj) {
    var y = $(obj).css("background-position").split(' ')[1];
    $(obj).css("background-position", "-23px " + y);
}
function MenuArrowMouseup(obj) {
    var y = $(obj).css("background-position").split(' ')[1];
    $(obj).css("background-position", "-23px " + y);
    var systemMenu = $("#systemMenu");
    var id = $(obj).attr("id");
    var index = systemMenu[0].index;
    var winWidth = $(window).width();
    if (id == "rightTab") {
        var toLeft = GetMenuToLeft(index + 1);
        systemMenu[0].index = index + 1;
        $("#leftTab").css("display", "block");
        systemMenu.css("margin-left", "17px");
        systemMenu.animate({ "left": toLeft });
        if (winWidth - 23 > systemMenu[0].menuTotalWidth + toLeft) {
            $("#rightTab").css("display", "none");
        }
    }
    else if (id == "leftTab") {
        var toLeft = GetMenuToLeft(index - 1);
        systemMenu[0].index = index - 1;
        var tabWidth = 46;
        if (index == 1) {
            tabWidth = 23;
            $("#leftTab").css("display", "none");
            systemMenu.css("margin-left", "7px");
        }
        systemMenu.animate({ "left": toLeft });
        if (winWidth - tabWidth > systemMenu[0].menuTotalWidth + toLeft) {
            $("#rightTab").css("display", "none");
        }
        else {
            $("#rightTab").css("display", "block");
            $("#rightTab").css("left", (winWidth - 23) + "px");
        }
    }
}
function MenuArrowMousedown(obj) {
    var y = $(obj).css("background-position").split(' ')[1];
    $(obj).css("background-position", "-46px " + y);
}
function MenuArrowMouseout(obj) {
    var y = $(obj).css("background-position").split(' ')[1];
    $(obj).css("background-position", "0px " + y);
}

function GetPluginToLeft(index) {
    var toLeft = 0;
    for (var i = 0; i < index; i++) {
        toLeft = toLeft - $("#plugins")[0].pluginsWidth[i];
    }
    return toLeft;
}
function GetPluginsWidth() {
    var pluginsWidth = [];
    var plugins = $("#plugins");
    var ps = plugins.children("div");
    for (var i = 0; i < ps.length; i++) {
        var l = $(ps[i]).children("div[name='plugin']").length;
        for (var j = 0; j < l; j++) {
            if (j + 1 < l) pluginsWidth.push(80);
            else pluginsWidth.push(83);
        }
    }
    plugins[0].index = 0;
    plugins[0].pluginTotalWidth = pluginsWidth.length * 80 + ps.length * 3;
    plugins[0].pluginsWidth = pluginsWidth;
}
function PluginLayout() {
    var plugins = $("#plugins");
    if (plugins[0].index == undefined) GetPluginsWidth();
    var winWidth = $(window).width();
    var leftMenu = $("#leftMenu");
    var rightMenu = $("#rightMenu");
    if (plugins[0].pluginTotalWidth < winWidth - 4) {
        plugins[0].index = 0;
        plugins.css("left", "0px");
        plugins.css("margin-left", "1px");
        plugins.css("margin-right", "1px");
        plugins.css("width", (winWidth - 4) + "px");
        leftMenu.css("display", "none");
        rightMenu.css("display", "none");
    }
    else {
        var index = plugins[0].index;
        plugins.css("width", plugins[0].pluginTotalWidth + "px");
        if (index == 0) {
            leftMenu.css("display", "none");
            rightMenu.css("display", "block");
            rightMenu.css("left", (winWidth - 14) + "px");
            plugins.css("margin-left", "1px");
        }
        else {
            var pluginWidth = plugins[0].pluginTotalWidth;
            for (var i = 0; i < index; i++) {
                pluginWidth = pluginWidth - plugins[0].pluginsWidth[i];
            }
            if (rightMenu.css("display") == "none") {
                if (pluginWidth < winWidth - 14) {
                    var i = index;
                    while (i >= 0 && pluginWidth + plugins[0].pluginsWidth[i] <= winWidth - 14) {
                        pluginWidth = pluginWidth + plugins[0].pluginsWidth[i];
                        i = i - 1;
                    }
                    if (i < 0) i = 0;
                    plugins[0].index = i;
                    if (i == 0) {
                        leftMenu.css("display", "none");
                        plugins.css("left", "0px");
                        plugins.css("margin-left", "1px");
                    }
                    else {
                        var w = 0;
                        for (var j = 0; j < i; j++) {
                            w = w - plugins[0].pluginsWidth[j];
                        }
                        plugins.css("left", w + "px");
                        leftMenu.css("display", "block");
                        plugins.css("width", (winWidth - w - 17) + "px");
                    }
                }
                else {
                    rightMenu.css("display", "block");
                    rightMenu.css("left", (winWidth - 14) + "px");
                }
            }
            else {
                if (pluginWidth < winWidth - 14) {
                    rightMenu.css("display", "none");
                }
                else {
                    rightMenu.css("display", "block");
                    rightMenu.css("left", (winWidth - 14) + "px");
                }
            }
        }
    }
}

function PluginArrowMouseover(obj) {
    var y = $(obj).css("background-position").split(' ')[1];
    $(obj).css("background-position", "-14px " + y);
}
function PluginArrowMouseup(obj) {
    var y = $(obj).css("background-position").split(' ')[1];
    $(obj).css("background-position", "-14px " + y);
    var plugins = $("#plugins");
    var id = $(obj).attr("id");
    var index = plugins[0].index;
    var winWidth = $(window).width();
    if (id == "rightMenu") {
        var toLeft = GetPluginToLeft(index + 1);
        plugins[0].index = index + 1;
        $("#leftMenu").css("display", "block");
        plugins.css("margin-left", "14px");
        plugins.animate({ "left": toLeft });
        if (winWidth - 14 > plugins[0].pluginTotalWidth + toLeft) {
            $("#rightMenu").css("display", "none");
            plugins.css("width", (winWidth - toLeft - 17) + "px");
        }
    }
    else if (id == "leftMenu") {
        var toLeft = GetPluginToLeft(index - 1);
        plugins[0].index = index - 1;
        var arrowWidth = 28;
        if (index == 1) {
            arrowWidth = 14;
            $("#leftMenu").css("display", "none");
            plugins.css("margin-left", "1px");
        }
        plugins.animate({ "left": toLeft });
        if (winWidth - arrowWidth > plugins[0].pluginTotalWidth + toLeft) {
            $("#rightMenu").css("display", "none");
        }
        else {
            $("#rightMenu").css("display", "block");
            $("#rightMenu").css("left", (winWidth - 14) + "px");
        }
    }
}
function PluginArrowMousedown(obj) {
    var y = $(obj).css("background-position").split(' ')[1];
    $(obj).css("background-position", "-28px " + y);
}
function PluginArrowMouseout(obj) {
    var y = $(obj).css("background-position").split(' ')[1];
    $(obj).css("background-position", "0px " + y);
}

function LayoutRefresh() {
    MainFrameLayout();
    SubSystemLayout();
    PluginLayout();
}

function AddListen() {
    $('div[name=plugin]').bind('mouseover', function () {
        this.className = "PluginButton_Move";
    });
    $('div[name=plugin]').bind('mouseout', function () {
        this.className = "PluginButton";
    });
    $('div[name=plugin]').bind('mousedown', function () {
        this.className = "PluginButton_Down";
    });
    $('div[name=plugin]').bind('mouseup', function () {
        this.className = "PluginButton_Move";
    });

    $('div[name=SubSystem]').bind('mouseover', function () {
        if ($(this).hasClass("TabItem_Selected")) return;
        $(this).removeClass("TabItem");
        $(this).addClass("TabItem_MouseOver");
    });
    $('div[name=SubSystem]').bind('mouseout', function () {
        if ($(this).hasClass("TabItem_Selected")) return;
        $(this).removeClass("TabItem_MouseOver");
        $(this).addClass("TabItem");
    });
    $('div[name=SubSystem]').bind('mouseup', function () {
        $('div[name=SubSystem]').removeClass("TabItem_Selected");
        $('div[name=SubSystem]').addClass("TabItem");
        if ($(this).hasClass("TabItem_MouseOver")) $(this).removeClass("TabItem_MouseOver");
        $(this).removeClass("TabItem");
        $(this).addClass("TabItem_Selected");
    });

    $('div[name=arrow]').bind('mouseover', function () { MenuArrowMouseover(this); });
    $('div[name=arrow]').bind('mouseup', function () { MenuArrowMouseup(this); });
    $('div[name=arrow]').bind('mousedown', function () { MenuArrowMousedown(this); });
    $('div[name=arrow]').bind('mouseout', function () { MenuArrowMouseout(this); });

    $('div[name=arrow1]').bind('mouseover', function () { PluginArrowMouseover(this); });
    $('div[name=arrow1]').bind('mouseup', function () { PluginArrowMouseup(this); });
    $('div[name=arrow1]').bind('mousedown', function () { PluginArrowMousedown(this); });
    $('div[name=arrow1]').bind('mouseout', function () { PluginArrowMouseout(this); });
}

$(window).resize(function () { LayoutRefresh(); });
$(document).ready(function () { LayoutRefresh(); AddListen(); });
