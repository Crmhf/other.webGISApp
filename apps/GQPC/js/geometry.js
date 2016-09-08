function geometry_point(){
    check_marker();
    clearProperties();
    $("#map").showLoading();
    $.getJSON('data/cr_datafy.json', function(data) {

        $("#map").hideLoading();

        // 构造属性列表
        var tableData = data.data;
        var str= '';
        str += "<table class='table'><thead><th>id</th><th>名称</th><th>园地</th><th>林地</th><th>耕地</th><th>草地</th></thead><tbody>";
        for(var i=0; i<tableData.length; i++) {
            var id = tableData[i].id+1;
            str += '<tr>';
            str += '<td>' + id + '</td>';
            str += '<td>' + tableData[i].xzqname + '</td>';
            str += '<td>' + tableData[i].totalarea.园地 + '</td>';
            str += '<td>' + tableData[i].totalarea.林地 + '</td>';
            str += '<td>' + tableData[i].totalarea.耕地 + '</td>';
            str += '<td>' + tableData[i].totalarea.草地 + '</td>';
            str += '</tr>';
        }
        str += '</tbody></table>';
        $('#geometryPointProperties1').html(str);

        var str2= '';
        str2 += "<table class='table'><thead><th>id</th><th>名称</th><th>园地</th><th>林地</th><th>耕地</th><th>草地</th></thead><tbody>";
        for(var i=0; i<tableData.length; i++) {
            var id = tableData[i].id+2;
            str2 += '<tr>';
            str2 += '<td>' + id + '</td>';
            str2 += '<td>' + tableData[i].xzqname + '</td>';
            str2 += '<td>' + tableData[i].totalarea.园地 + '</td>';
            str2 += '<td>' + tableData[i].totalarea.林地 + '</td>';
            str2 += '<td>' + tableData[i].totalarea.耕地 + '</td>';
            str2 += '</tr>';
        }
        str2 += '</tbody></table>';
        $('#geometryPointProperties2').html(str2);

        var str3= '';
        str3 += "<table class='table'><thead><th>id</th><th>名称</th><th>园地</th><th>林地</th><th>耕地</th><th>草地</th></thead><tbody>";
        for(var i=0; i<tableData.length; i++) {
            var id = tableData[i].id+3;
            str3 += '<tr>';
            str3 += '<td>' + id + '</td>';
            str3 += '<td>' + tableData[i].xzqname + '</td>';
            str3 += '<td>' + tableData[i].totalarea.园地 + '</td>';
            str3 += '<td>' + tableData[i].totalarea.林地 + '</td>';
            str3 += '<td>' + tableData[i].totalarea.耕地 + '</td>';
            str3 += '<td>' + tableData[i].totalarea.草地 + '</td>';
            str3 += '</tr>';
        }
        str3 += '</tbody></table>';
        $('#geometryPointProperties3').html(str3);

    });
    $('#geometryPointModal').modal({show:true,backdrop:false})
}

function geometry_polyline(){
    check_marker();
    clearProperties();
    $("#map").showLoading();
    $.getJSON('data/cr_datafymore.json', function(data) {

        $("#map").hideLoading();

        // 构造属性列表
        var tableData = data.data;
        var str= '';
        str += "<table class='table'><thead><th>id</th><th>名称</th><th>园地</th><th>林地</th><th>耕地</th><th>草地</th></thead><tbody>";
        for(var i=0; i<tableData.length; i++) {
            str += '<tr>';
            str += '<td>' + tableData[i].id + '</td>';
            str += '<td>' + tableData[i].xzqname + '</td>';
            str += '<td>' + tableData[i].totalarea.园地 + '</td>';
            str += '<td>' + tableData[i].totalarea.林地 + '</td>';
            str += '<td>' + tableData[i].totalarea.耕地 + '</td>';
            str += '<td>' + tableData[i].totalarea.草地 + '</td>';
            str += '</tr>';
        }
        str += '</tbody></table>';
        $('#ggeometryLineProperties1').html(str);
    });
    $('#geometryLineModal').modal({show:true,backdrop:false})
}

function geometry_polygon(){
    check_marker();
    clearProperties();
    $("#map").showLoading();
    $.getJSON('data/cr_datafy.json', function(data) {

        $("#map").hideLoading();

        // 构造属性列表
        var tableData = data.data;
        var str= '';
        str += "<table class='table'><thead><th>id</th><th>名称</th><th>园地</th><th>林地</th><th>耕地</th><th>草地</th></thead><tbody>";
        for(var i=0; i<tableData.length; i++) {
            str += '<tr>';
            str += '<td>' + tableData[i].id + '</td>';
            str += '<td>' + tableData[i].xzqname + '</td>';
            str += '<td>' + tableData[i].totalarea.园地 + '</td>';
            str += '<td>' + tableData[i].totalarea.林地 + '</td>';
            str += '<td>' + tableData[i].totalarea.耕地 + '</td>';
            str += '<td>' + tableData[i].totalarea.草地 + '</td>';
            str += '</tr>';
        }
        str += '</tbody></table>';
        $('#geometryProperties').html(str);
    });
    $('#geometryModal').modal({show:true,backdrop:false})
}