function cPageMasterDetail(prefix, $c, data) {
    // html
    $c.html('' +
        '<div class="gridM"></div>' +
        '<br>' +
        '<div class="gridD" data-bind="visible:selected()"></div>' +
    '');
    var c1 = "c1";
    var c2 = "c2";
    var $c1 = $(".gridM", $c);
    var $c2 = $(".gridD", $c);
    var self = this;
    this.data = data;
    this.dataForGridWithRadios = function () {
        var data = [];
        self.data.forEach(function (row) {
            var row2 = { cols: [] };
            row.cols.forEach(function (obj, i) {
                if (i > 2) {
                    return;
                }
                var obj2 = { value: obj.value };
                row2.cols.push(obj2);
            });
            data.push(row2);
        });
        return data;
    };
    this.dataForDetail = function () {
        var data = [];
        self.data[0].cols.forEach(function (obj, i) {
            var row = { cols: [{ value: ko.observable("") }] };
            data.push(row);
        });
        return data;
    };
    this[c1] = new cGridWithRadioButtons(prefix + c1 + ".", $c1, this.dataForGridWithRadios());
    this[c2] = new cGrid(prefix + c2 + ".", $c2, this.dataForDetail())
    this[c1].doRadio = function () {
        var index = self.c1.i;
        self.data[index].cols.forEach(function (c, i) {
            self.c2.rows[i].cols[0].value(c.value());
        });
        if (self.selected() != true) {
            self.selected(true);
        }
    };
    this.selected = ko.observable(false);
    // css
    // js
};