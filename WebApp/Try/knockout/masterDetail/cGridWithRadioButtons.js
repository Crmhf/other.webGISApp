function cGridWithRadioButtons(prefix, $c, data) {
    // html 
    $c.html('' +
        '<div class="grid" data-bind="foreach:' + prefix + 'rows">' +
            '<div class="clear"></div>' +
            '<div class="radio"><input type="radio" name="select" data-bind="click:checked"></div>' +
            '<div class="row" data-bind="foreach:cols">' +
                '<div class="col" data-bind="text:value"></div>' +
                '<div class="col-sep" data-bind="visible:!isLast()"> </div>' +
            '</div>' +
        '</div>' +
    '');
    // css
    $(".grid", $c).css({
        "overflow": "hidden"
    });
    $(".clear", $c).css({
        "clear": "both"
    });
    $(".radio", $c).css({
        "float": "left"
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
    this.doRadio = function () { };
    this.rows.forEach(function (row, i) {
        row.checked = (function (j) {
            return function () {
                self.i = j;
                self.doRadio();
            }
        })(i);
        row.cols.forEach(function (c, i) {
            c.isLast = function () {
                return i === row.cols.length - 1;
            };
        });
    });
}