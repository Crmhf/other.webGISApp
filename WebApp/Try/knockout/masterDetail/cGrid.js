function cGrid(prefix, $c, data) {
    // html 
    $c.html('' +
        '<div class="grid" data-bind="foreach:' + prefix + 'rows">' +
            '<div class="row" data-bind="foreach:cols">' +
                '<div class="col" data-bind="text:value"></div>' +
                '<div class="col-sep" data-bind="visible:!isLast()"> </div>' +
            '</div>' +
            '<div class="clear"></div>' +
        '</div>' +
    '');
    // css
    $(".grid", $c).css({
        "overflow": "hidden"
    });
    $(".clear", $c).css({
        "clear": "both"
    });
    $(".row", $c).css({
        "float": "left",
        "border-radius": "16px",
        "border": "1px solid red",
        "background-color": "#cfcfcf"
    });
    $(".col", $c).css({
        "float": "left",
        "width": "90px",
        "white-space": "nowrap",
        "overflow-x": "auto",
        "margin": "1px 9px",
        "text-align": "center"
    });
    $(".col-sep", $c).css({
        "float": "left",
        "width": "2px",
        "border-radius": "4px",
        "background-color": "black"
    });
    $c.css({
        "font-family": "sans-serif"
    });
    // js 
    var self = this;
    this.rows = data;
    this.rows.forEach(function (r) {
        r.cols.forEach(function (c, i) {
            c.isLast = function () {
                return i === r.cols.length - 1;
            };
        });
    });
}