//滚动Bar的ID	滚动DIV的ID	左边Bar	右边Bar
var ScrollBar = function(bar_ID, context_ID, barLeft_ID, barReight_ID,moveBy_PX){
    var _bar_obj;//Bar对象
    var _barLeft_obj//左移对象
    var _barRight_obj;//右移对象
    var _context_obj;//内容对象
    var _isMoveBar = false;//是否为拖动Bar
    var _move_max_number;//Bar移动的最大数值
    var _move_number;//Bar 移动的数据值 
    var _bar_height;//Bar 的基本高度
    var _context_height;//内容的基本高度
    var _bar_base_height;//Bar 基本高度
    var _mouse_curr = 0;//鼠标 点击Bar的位置
    var _bar_curr_top = 0;//鼠标点击Bar 距TOp的距离 
    var _move_bar_maxto;//Bar 移动的最大位置 
    var _bar_px_number;//Bar每个象素代表多少数值
    var _moveByPX=moveBy_PX;//如果是根据象素移动，则移动多少象素
    function _init(){
        //初始化对象
        _bar_obj = $(bar_ID);
        _context_obj = $(context_ID);
        _barLeft_obj = $(barLeft_ID);
        _barRight_obj = $(barReight_ID);
        _context_height = _context_obj.clientHeight;
        _move_number = 0;
        _move_max_number = (_context_obj.scrollHeight / _context_obj.clientHeight) - 1;
        _bar_base_height = _context_obj.clientHeight - _barLeft_obj.clientHeight - _barRight_obj.clientHeight;
        var bar_height_num = _context_obj.clientHeight / _context_obj.scrollHeight;
        //初始化Bar 高度
        _bar_height = ((bar_height_num >= 1 ? 1 : bar_height_num) * _bar_base_height);
        _bar_obj.style.height = _bar_height + "px";
        _move_bar_maxto = _bar_base_height + (_barLeft_obj.clientHeight - _bar_obj.clientHeight);
        _bar_px_number = 1 / _bar_height;
        
        //事件动态注册
        _addEvent(_bar_obj, "mousedown", _barmousedown);
         _addEvent(document, "mouseup", _changeState);
       // _addEvent(_bar_obj, "mouseout", _changeState);
       // _addEvent(_bar_obj, "mouseover",_changeState);
        _addEvent(document, "mousemove", _movebar);

if(_moveByPX){
  _addEvent(_barLeft_obj,"click",function(){_barMoveByPx(-moveBy_PX)});
          _addEvent(_barRight_obj,"click",function(){_barMoveByPx(moveBy_PX)});	
}else{
  _addEvent(_barLeft_obj, "click", function(){_barMoveByNumber(-0.1)});
          _addEvent(_barRight_obj, "click", function(){_barMoveByNumber(0.1)});	
}

        //var isIE=!!window.ActiveXObject;
        //var isIE6=isIE&&!window.XMLHttpRequest;
        //var isIE8=isIE&&!!document.documentMode;
        //var isIE7=isIE&&!isIE6&&!isIE8;
    };
function _changeState(){
_isMoveBar = false;
} 
//添加事件 
    function _addEvent(obj, evt, fn){
        if (window.attachEvent) {
            obj.attachEvent("on" + evt, fn)
        }
        else {
            obj.addEventListener(evt, fn, false);
        }
    };
//移动 Context内容 
    function _barMoveByContextTop(){
        _move_number = (_bar_obj.offsetTop - _barLeft_obj.clientHeight) * _bar_px_number;
        _context_obj.scrollTop = _context_height * _move_number;
    };
//根据 比例移动 Bar
    function _barMoveByNumber(num){
        _move_number += num;
        if (_move_number < 0) {
            _move_number = 0;
        }
        if (_move_number > _move_max_number) {
            _move_number = _move_max_number;
        }
        _moveBarTo(_barLeft_obj.clientHeight + (_bar_height * _move_number));
    };
//根据 象素 移动Bar
    function _barMoveByPx(num){
        _moveBarTo(_bar_obj.offsetTop + num);
    };
//根据 ID 取得元素
    function $(id){
        return document.getElementById(id);
    };
//鼠标 移动 （拖动Bar）
    function _movebar(){
        if (_isMoveBar) {
  var event = _mouseCoords(arguments[0] || window.event);
            _moveBarTo(_bar_curr_top + (event.y - _mouse_curr));
        }
    };
//把Bar移动 到某位置 
    function _moveBarTo(m_to){
        if (m_to > _barLeft_obj.clientHeight && m_to < _move_bar_maxto) {
            _bar_obj.style.top = m_to+"px";
        }
_barMoveByContextTop();
    };
  //得到鼠标的坐标
  function _mouseCoords(ev){
   if (ev.pageX || ev.pageY) {
    return {x: ev.pageX,y: ev.pageY};
   }
   return ev;
  }
//鼠标点击
    function _barmousedown(){
 var event = _mouseCoords(arguments[0] || window.event);
        _isMoveBar = true;
        _mouse_curr = event.y;
        _bar_curr_top = _bar_obj.offsetTop;
    };
    _init();
};