/**
 * @fileoverview 百度地图的城市列表类，对外开放。
 * 帮助用户直接生成城市列表，并自定义点击城市的操作。
 * 使用者可以通过接口直接获取城市数据。
 * 主入口类是<a href="symbols/BMapLib.CityList.html">CityList</a>，
 * 基于Baidu Map API 1.2。
 *
 * @author Baidu Map Api Group 
 * @version 1.2
 */

/** 
 * @namespace BMap的所有library类均放在BMapLib命名空间下
 */
var BMapLib = window.BMapLib = BMapLib || {};

(function() {
    /**
     * 声明baidu包
     */
    var baidu = baidu || {guid : "$BAIDU$"};
    (function() {
        // 一些页面级别唯一的属性，需要挂载在window[baidu.guid]上
        window[baidu.guid] = {};

        /**
         * 将源对象的所有属性拷贝到目标对象中
         * @name baidu.extend
         * @function
         * @grammar baidu.extend(target, source)
         * @param {Object} target 目标对象
         * @param {Object} source 源对象
         * @returns {Object} 目标对象
         */
        baidu.extend = function (target, source) {
            for (var p in source) {
                if (source.hasOwnProperty(p)) {
                    target[p] = source[p];
                }
            }    
            return target;
        };

        /**
         * @ignore
         * @namespace
         * @baidu.lang 对语言层面的封装，包括类型判断、模块扩展、继承基类以及对象自定义事件的支持。
         * @property guid 对象的唯一标识
        */
        baidu.lang = baidu.lang || {};

        /**
         * 返回一个当前页面的唯一标识字符串。
         * @function
         * @grammar baidu.lang.guid()
         * @returns {String} 当前页面的唯一标识字符串
         */
        baidu.lang.guid = function() {
            return "TANGRAM__" + (window[baidu.guid]._counter ++).toString(36);
        };

        window[baidu.guid]._counter = window[baidu.guid]._counter || 1;

        /**
         * 所有类的实例的容器
         * key为每个实例的guid
         */
        window[baidu.guid]._instances = window[baidu.guid]._instances || {};

        /**
         * Tangram继承机制提供的一个基类，用户可以通过继承baidu.lang.Class来获取它的属性及方法。
         * @function
         * @name baidu.lang.Class
         * @grammar baidu.lang.Class(guid)
         * @param {string} guid	对象的唯一标识
         * @meta standard
         * @remark baidu.lang.Class和它的子类的实例均包含一个全局唯一的标识guid。
         * guid是在构造函数中生成的，因此，继承自baidu.lang.Class的类应该直接或者间接调用它的构造函数。<br>
         * baidu.lang.Class的构造函数中产生guid的方式可以保证guid的唯一性，及每个实例都有一个全局唯一的guid。
         */
        baidu.lang.Class = function(guid) {
            this.guid = guid || baidu.lang.guid();
            window[baidu.guid]._instances[this.guid] = this;
        };

        window[baidu.guid]._instances = window[baidu.guid]._instances || {};

        /**
         * 判断目标参数是否string类型或String对象
         * @name baidu.lang.isString
         * @function
         * @grammar baidu.lang.isString(source)
         * @param {Any} source 目标参数
         * @shortcut isString
         * @meta standard
         *             
         * @returns {boolean} 类型判断结果
         */
        baidu.lang.isString = function (source) {
            return '[object String]' == Object.prototype.toString.call(source);
        };

        /**
         * 判断目标参数是否为function或Function实例
         * @name baidu.lang.isFunction
         * @function
         * @grammar baidu.lang.isFunction(source)
         * @param {Any} source 目标参数
         * @returns {boolean} 类型判断结果
         */
        baidu.lang.isFunction = function (source) {
            return '[object Function]' == Object.prototype.toString.call(source);
        };

        /**
         * 重载了默认的toString方法，使得返回信息更加准确一些。
         * @return {string} 对象的String表示形式
         */
        baidu.lang.Class.prototype.toString = function(){
            return "[object " + (this._className || "Object" ) + "]";
        };

        /**
         * 自定义的事件对象。
         * @function
         * @name baidu.lang.Event
         * @grammar baidu.lang.Event(type[, target])
         * @param {string} type	 事件类型名称。为了方便区分事件和一个普通的方法，事件类型名称必须以"on"(小写)开头。
         * @param {Object} [target]触发事件的对象
         * @meta standard
         * @remark 引入该模块，会自动为Class引入3个事件扩展方法：addEventListener、removeEventListener和dispatchEvent。
         * @see baidu.lang.Class
         */
        baidu.lang.Event = function (type, target) {
            this.type = type;
            this.returnValue = true;
            this.target = target || null;
            this.currentTarget = null;
        };

        /**
         * 注册对象的事件监听器。引入baidu.lang.Event后，Class的子类实例才会获得该方法。
         * @grammar obj.addEventListener(type, handler[, key])
         * @param 	{string}   type         自定义事件的名称
         * @param 	{Function} handler      自定义事件被触发时应该调用的回调函数
         * @param 	{string}   [key]		为事件监听函数指定的名称，可在移除时使用。如果不提供，方法会默认为它生成一个全局唯一的key。
         * @remark 	事件类型区分大小写。如果自定义事件名称不是以小写"on"开头，该方法会给它加上"on"再进行判断，即"click"和"onclick"会被认为是同一种事件。 
         */
        baidu.lang.Class.prototype.addEventListener = function (type, handler, key) {
            if (!baidu.lang.isFunction(handler)) {
                return;
            }
            !this.__listeners && (this.__listeners = {});
            var t = this.__listeners, id;
            if (typeof key == "string" && key) {
                if (/[^\w\-]/.test(key)) {
                    throw("nonstandard key:" + key);
                } else {
                    handler.hashCode = key; 
                    id = key;
                }
            }
            type.indexOf("on") != 0 && (type = "on" + type);
            typeof t[type] != "object" && (t[type] = {});
            id = id || baidu.lang.guid();
            handler.hashCode = id;
            t[type][id] = handler;
        };
         
        /**
         * 移除对象的事件监听器。引入baidu.lang.Event后，Class的子类实例才会获得该方法。
         * @grammar obj.removeEventListener(type, handler)
         * @param {string}   type     事件类型
         * @param {Function|string} handler  要移除的事件监听函数或者监听函数的key
         * @remark 	如果第二个参数handler没有被绑定到对应的自定义事件中，什么也不做。
         */
        baidu.lang.Class.prototype.removeEventListener = function (type, handler) {
            if (baidu.lang.isFunction(handler)) {
                handler = handler.hashCode;
            } else if (!baidu.lang.isString(handler)) {
                return;
            }
            !this.__listeners && (this.__listeners = {});
            type.indexOf("on") != 0 && (type = "on" + type);
            var t = this.__listeners;
            if (!t[type]) {
                return;
            }
            t[type][handler] && delete t[type][handler];
        };

        /**
         * 派发自定义事件，使得绑定到自定义事件上面的函数都会被执行。引入baidu.lang.Event后，Class的子类实例才会获得该方法。
         * @grammar obj.dispatchEvent(event, options)
         * @param {baidu.lang.Event|String} event 	Event对象，或事件名称(1.1.1起支持)
         * @param {Object} options 扩展参数,所含属性键值会扩展到Event对象上(1.2起支持)
         * @remark 处理会调用通过addEventListenr绑定的自定义事件回调函数之外，还会调用直接绑定到对象上面的自定义事件。
         * 例如：<br>
         * myobj.onMyEvent = function(){}<br>
         * myobj.addEventListener("onMyEvent", function(){});
         */
        baidu.lang.Class.prototype.dispatchEvent = function (event, options) {
            if (baidu.lang.isString(event)) {
                event = new baidu.lang.Event(event);
            }
            !this.__listeners && (this.__listeners = {});
            options = options || {};
            for (var i in options) {
                event[i] = options[i];
            }
            var i, t = this.__listeners, p = event.type;
            event.target = event.target || this;
            event.currentTarget = this;
            p.indexOf("on") != 0 && (p = "on" + p);
            baidu.lang.isFunction(this[p]) && this[p].apply(this, arguments);
            if (typeof t[p] == "object") {
                for (i in t[p]) {
                    t[p][i].apply(this, arguments);
                }
            }
            return event.returnValue;
        };

        /**
         * 为类型构造器建立继承关系
         * @name baidu.lang.inherits
         * @function
         * @grammar baidu.lang.inherits(subClass, superClass[, className])
         * @param {Function} subClass 子类构造器
         * @param {Function} superClass 父类构造器
         * @param {string} className 类名标识
         * @remark 使subClass继承superClass的prototype，
         * 因此subClass的实例能够使用superClass的prototype中定义的所有属性和方法。<br>
         * 这个函数实际上是建立了subClass和superClass的原型链集成，并对subClass进行了constructor修正。<br>
         * <strong>注意：如果要继承构造函数，需要在subClass里面call一下，具体见下面的demo例子</strong>
         * @shortcut inherits
         * @meta standard
         * @see baidu.lang.Class
         */
        baidu.lang.inherits = function (subClass, superClass, className) {
            var key, proto, 
                selfProps = subClass.prototype, 
                clazz = new Function();        
            clazz.prototype = superClass.prototype;
            proto = subClass.prototype = new clazz();
            for (key in selfProps) {
                proto[key] = selfProps[key];
            }
            subClass.prototype.constructor = subClass;
            subClass.superClass = superClass.prototype;

            if ("string" == typeof className) {
                proto._className = className;
            }
        };

        /**
         * @ignore
         * @namespace baidu.dom 操作dom的方法。
         */
        baidu.dom = baidu.dom || {};

        /**
         * 从文档中获取指定的DOM元素
         * @name baidu.dom.g
         * @function
         * @grammar baidu.dom.g(id)
         * @param {string|HTMLElement} id 元素的id或DOM元素
         * @meta standard
         *             
         * @returns {HTMLElement|null} 获取的元素，查找不到时返回null,如果参数不合法，直接返回参数
         */
        baidu.g = baidu.dom.g = function (id) {
            if ('string' == typeof id || id instanceof String) {
                return document.getElementById(id);
            } else if (id && id.nodeName && (id.nodeType == 1 || id.nodeType == 9)) {
                return id;
            }
            return null;
        };
        
        /**
         * @ignore
         * @namespace baidu.browser 判断浏览器类型和特性的属性。
         */
        baidu.browser = baidu.browser || {};

        if (/msie (\d+\.\d)/i.test(navigator.userAgent)) {
            //IE 8下，以documentMode为准
            /**
             * 判断是否为ie浏览器
             * @property ie ie版本号
             * @grammar baidu.browser.ie
             * @meta standard
             * @shortcut ie
             * @see baidu.browser.firefox,baidu.browser.safari,baidu.browser.opera,baidu.browser.chrome,baidu.browser.maxthon 
             */
            baidu.browser.ie = baidu.ie = document.documentMode || + RegExp['\x241'];
        }

        /**
         * 提供给setAttr与getAttr方法作名称转换使用
         * ie6,7下class要转换成className
         * @meta standard
         */

        baidu.dom._NAME_ATTRS = (function () {
            var result = {
                'cellpadding': 'cellPadding',
                'cellspacing': 'cellSpacing',
                'colspan': 'colSpan',
                'rowspan': 'rowSpan',
                'valign': 'vAlign',
                'usemap': 'useMap',
                'frameborder': 'frameBorder'
            };
            
            if (baidu.browser.ie < 8) {
                result['for'] = 'htmlFor';
                result['class'] = 'className';
            } else {
                result['htmlFor'] = 'for';
                result['className'] = 'class';
            }
            
            return result;
        })();

        /**
         * 获取目标元素的属性值
         * @name baidu.dom.getAttr
         * @function
         * @grammar baidu.dom.getAttr(element, key)
         * @param {HTMLElement|string} element 目标元素或目标元素的id
         * @param {string} key 要获取的attribute键名
         * @shortcut getAttr
         * @meta standard
         * @see baidu.dom.setAttr,baidu.dom.setAttrs
         *             
         * @returns {string|null} 目标元素的attribute值，获取不到时返回null
         */
        baidu.getAttr = baidu.dom.getAttr = function (element, key) {
            element = baidu.dom.g(element);

            if ('style' == key){
                return element.style.cssText;
            }

            key = baidu.dom._NAME_ATTRS[key] || key;
            return element.getAttribute(key);
        };

        /**
         * @ignore
         * @namespace baidu.event 屏蔽浏览器差异性的事件封装。
         * @property target 	事件的触发元素
         * @property pageX 		鼠标事件的鼠标x坐标
         * @property pageY 		鼠标事件的鼠标y坐标
         * @property keyCode 	键盘事件的键值
         */
        baidu.event = baidu.event || {};

        /**
         * 事件监听器的存储表
         * @private
         * @meta standard
         */
        baidu.event._listeners = baidu.event._listeners || [];

        /**
         * 为目标元素添加事件监听器
         * @name baidu.event.on
         * @function
         * @grammar baidu.event.on(element, type, listener)
         * @param {HTMLElement|string|window} element 目标元素或目标元素id
         * @param {string} type 事件类型
         * @param {Function} listener 需要添加的监听器
         * @remark
         *  1. 不支持跨浏览器的鼠标滚轮事件监听器添加<br>
         *  2. 改方法不为监听器灌入事件对象，以防止跨iframe事件挂载的事件对象获取失败            
         * @shortcut on
         * @meta standard
         * @see baidu.event.un
         *             
         * @returns {HTMLElement|window} 目标元素
         */
        baidu.on = baidu.event.on = function (element, type, listener) {
            type = type.replace(/^on/i, '');
            element = baidu.g(element);
            var realListener = function (ev) {
                // 1. 这里不支持EventArgument,  原因是跨frame的事件挂载
                // 2. element是为了修正this
                listener.call(element, ev);
            },
            lis = baidu.event._listeners,
            filter = baidu.event._eventFilter,
            afterFilter,
            realType = type;
            type = type.toLowerCase();
            // filter过滤
            if(filter && filter[type]){
                afterFilter = filter[type](element, type, realListener);
                realType = afterFilter.type;
                realListener = afterFilter.listener;
            }
            // 事件监听器挂载
            if (element.addEventListener) {
                element.addEventListener(realType, realListener, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + realType, realListener);
            }
          
            // 将监听器存储到数组中
            lis[lis.length] = [element, type, listener, realListener, realType];
            return element;
        };
    })();

    /**
     * 常量，国家级别区域的类型代号，
     * 用于cityclick派发的事件中，返回的citytype字段的识别
     * @static
     */
    BMapLib.COUNTRY_TYPE_CODE = 0;

    /**
     * 常量，省级别区域的类型代号，
     * 用于cityclick派发的事件中，返回的citytype字段的识别
     * @static
     */
    BMapLib.PROVINCE_TYPE_CODE = 1;

    /**
     * 常量，城市级别区域的类型代号，
     * 用于cityclick派发的事件中，返回的citytype字段的识别
     * @static
     */
    BMapLib.CITY_TYPE_CODE = 2;

    /** 
     * @exports CityList as BMapLib.CityList 
     */
    var CityList =
        /**
         * CityList类的构造函数
         * @class 城市列表类，
         * 实例化该类后，可以帮助用户直接生成城市列表，
         * 也可以通过接口获取城市数据。
         * 
         * @constructor
         * @param {Json Object} opts 可选的输入参数，非必填项。可输入选项包括：<br />
         * {"<b>container</b>" : {String|HTMLElement} 需要提供界面方式展现的容器。如果此参数为空，则不提供界面方式，也没有cityclick的事件派发
         * <br />"<b>map</b>" : {BMap} 实例化的map对象，如果传入此参数，则用户点击界面中的城市时，可以直接帮助用户定位到地图的相关城市位置}
         *
         * @example <b>参考示例：</b><br />
         * var myCityListObject = new BMapLib.CityList({container : "container"});
         */
        BMapLib.CityList = function(opts){

            opts = opts || {};
            /**
             * _opts是默认参数赋值。
             * 下面通过用户输入的opts，对默认参数赋值
             * @private
             * @type {Json}
             */
            this._opts = baidu.extend(
                baidu.extend(this._opts || {}, {

                    /**
                     * 提供界面方式展现的容器
                     * @private
                     * @type {String|HTMLElement}
                     */
                    container : null,

                    /**
                     * 实例化的BMap对象
                     * @private
                     * @type {BMap}
                     */
                     map : null
                })
            , opts);

            /**
             * 城市数据的存储
             * @private
             * @type {Json}
             */
             this._data = null;

             /**
              * 页面模式需要的CSS样式
              * @private
              * @type {Array}
              */
             this._css = [
                    ".bmaplib_cityList{color:#333;font:12px arial,sans-serif;padding-left:10px;}",
                    ".bmaplib_cityList h4{font-size:12px;font-weight:normal;margin:0;}",
                    ".bmaplib_cityList hr{height:1px;border-top:solid 1px #ccc; border-bottom:none;}",
                    ".bmaplib_cityList form,.bmaplib_cityList dl{margin:0;}",
                    ".bmaplib_cityList dd,.bmaplib_cityList h4,.bmaplib_cityList dt{padding: 2px 0; vertical-align: top;line-height: 150%;}",
                    ".bmaplib_cityList dt{float:left;width:52px;}",
                    ".bmaplib_cityList dd{margin-left:52px;}",
                    ".bmaplib_cityList a{color:#0000CC;text-decoration:underline;outline:none;margin-right: 8px;}",
                    ".bmaplib_cityList dt a{margin-right:0;}",
                    ".bmaplib_cityListDescript{color:#999;}",
                    ".bmaplib_cityList .black{color:#000;}",
                    ".bmaplib_cityList form span{color:red;}"];

             // 发出数据请求
             this._getDataFromMapServer();
        }
    
    // 通过baidu.lang下的inherits方法，让CityList继承baidu.lang.Class
    baidu.lang.inherits(CityList, baidu.lang.Class, "CityList");

     /**
      * 城市数据的索引计数器
      * @private
      * @type {Number}
      */
     var _citylistCount = 1;

     /**
      * 整理后，用户输出接口的数据
      * @private
      * @type {Json}
      */
     var _outputData = null;

    /**
     * 向BMapLibrary请求最新的城市数据
     * @return 无返回值
     */
    CityList.prototype._getDataFromMapServer = function(){
        var me = this;
        scriptRequest("http://api.map.baidu.com/library/CityList/1.2/src/data/CityData.js", function(){
            me._callback();
         });
    };

    /**
     * 城市数据请求的回调函数
     * @return 无返回值
     */
    CityList.prototype._callback = function(){
        if (BMapLib.CityList._cityData) {
            this._data = BMapLib.CityList._cityData;
            BMapLib.CityList._cityData = null;
            // 能够从服务器得到城市数据的时候，生成页面，并绑定相关事件
            _outputData = this._formatCityData(this._data);
            this._renderHtml();
            this._bind();
        }
    };

    /**
     * 生成页面模式的城市列表
     * @return 无返回值
     */
    CityList.prototype._renderHtml = function() {
        if (!this._opts.container ||
            !baidu.g(this._opts.container)) {
                return;
        }
        // 添加CSS样式
        this._execCss();
        
        // 生成页面模式的界面
        var htm = [],
              data = this._data,
              vds = "javascript:void(0)",
              newData = {};

        htm.push("<div class='bmaplib_cityList' id='bmaplib_cityList_" + this.guid + "'><dl>");

        // 直辖市部分
        if (data.municipalities && data.municipalities.length > 0) {
            htm.push("<dt>直辖市：</dt><dd>");
            for (var i = 0, n = data.municipalities.length; i < n; i++) {
                var mu = data.municipalities[i];
                htm.push("<a href='#vd#' code='" + _citylistCount+ "'>" + mu.n + "</a>");
                newData[_citylistCount] = {"g" : mu.g, "t" : BMapLib.CITY_TYPE_CODE, "n" : mu.n};
                _citylistCount ++;
            }
            htm.push("</dd>");
        }

        // 普通省
        for (var i = 0, n = data.provinces.length; i < n; i++) {
            var pv = data.provinces[i];
            htm.push("<dt><a href='#vd#' class='black' code='" + _citylistCount+ "'>" + pv.n + "</a>：</dt><dd>");
            newData[_citylistCount] = {"g" : pv.g, "t" : BMapLib.PROVINCE_TYPE_CODE, "n" : pv.n};
            _citylistCount ++;

            for (var j = 0, m = pv.cities.length; j < m; j++) {
                htm.push("<a href='#vd#' code='" + _citylistCount+ "'>" + pv.cities[j].n + "</a>");
                newData[_citylistCount] = {"g" : pv.cities[j].g, "t" : BMapLib.CITY_TYPE_CODE, "n" : pv.cities[j].n};
                _citylistCount ++;
            }
            htm.push("</dd>");
        }

        // 其他地区
        if (data.other && data.other.length > 0) {
            htm.push("<dt>其他：</dt><dd>");
            for (var i = 0, n = data.other.length; i < n; i++) {
                var oth = data.other[i];
                htm.push("<a href='#vd#' code='" + _citylistCount+ "'>" + oth.n + "</a>");
                newData[_citylistCount] = {"g" : oth.g, "t" : BMapLib.CITY_TYPE_CODE, "n" : oth.n};
                _citylistCount ++;
            }
            htm.push("</dd>");
        }
        
        htm.push("</dl></div>");
        baidu.g(this._opts.container).innerHTML = htm.join("").replace(/#vd#/ig, vds);
        this._data = newData;
    };

    /**
     * 给页面元素添加点击操作
     * @return 无返回值
     */
    CityList.prototype._bind = function() {
        if (!this._opts.container ||
            !baidu.g(this._opts.container) ||
            !baidu.g("bmaplib_cityList_" + this.guid)) {
                return;
        }
        var cl = baidu.g("bmaplib_cityList_" + this.guid);
        var tags = cl.getElementsByTagName("a"),
              me = this;
        for (var i = 0, n = tags.length; i < n; i++) {
            // 需要循环给DOM元素附加事件，所以需要闭包住该过程，防止tg对象始终指向最后一个元素
            (function(){
                var tg = tags[i];
                if (!tg) {
                    return;
                }
                baidu.on(tg, "click", function() {
                    if (!baidu.getAttr(tg, "code")) {
                        return;
                    }

                    /**
                     * 点击城市名时，派发事件的接口
                     * @name CityList#oncityclick
                     * @event
                     * @param {Event Object} e 回调函数会返回event参数，包括以下返回值：
                     * <br />{"<b>name</b> : {String} 点击的区域名称,
                     * <br />"<b>center</b>：{BMap.Point} 点击区域合适显示的中心点位置,
                     * <br />"<b>zoom</b>：{Number} 点击区域合适显示的地图层级,
                     * <br />"<b>citytype</b>：{Number} 该区域的类型(全国0、省1、城市2)，区域的类型代号可见BMaplib下的<a href="BMapLib.html#.COUNTRY_TYPE_CODE">COUNTRY_TYPE_CODE</a>、<a href="BMapLib.html#.PROVINCE_TYPE_CODE">PROVINCE_TYPE_CODE</a>、<a href="BMapLib.html#.CITY_TYPE_CODE">CITY_TYPE_CODE</a>三个常量。}
                     *
                     * @example <b>参考示例：</b><br />
                     * myCityListObject.addEventListener("cityclick", function(e) {  alert(e.name);  });
                     */

                    // 生成名为oncityclick的baidu.lang.Event对象
                    // 并给该event对象添加上name、center、zoom和citytype等属性字段
                    // 然后在此刻，将绑定在oncityclick上事件，全部赋予event参数，然后派发出去
                    var event = new baidu.lang.Event("oncityclick"),
                          code = baidu.getAttr(tg, "code"),
                          json = me._data[code];
                    if (!json) {
                        return;
                    }
                    json = formatJson(json);
                    event.name = json.name;
                    event.center = json.center;
                    event.citytype = json.t;

                    // 如果用户在OPTS参数中有传入map实例
                    // 则帮助用户直接切换地图视野
                    var _zoom = json.zoom;
                    if (me._opts.map) {
                        var _map = me._opts.map;
                        _zoom = getBestLevel(_zoom, _map);
                        _map.centerAndZoom(json.center, _zoom);
                    }
                    event.zoom = _zoom;

                    me.dispatchEvent(event);
                });
            })();
        }
    };

    /**
     * 激活CSS
     * @return 无返回值
     */
    CityList.prototype._execCss = function(){
        // _isStyleRender防止多次加载
        if (!BMapLib.CityList._isStyleRender) {
            var st = null;
            if (baidu.g("_bmaplib_citylist_css")) {
                baidu.g("_bmaplib_citylist_css").parentNode.removeChild(baidu.g("_bmaplib_citylist_css"));
            }
            var st = document.createElement("STYLE");
            st.type = "text/css";
            st.id = "_bmaplib_citylist_css";
            document.body.appendChild(st);
            if (baidu.browser.ie > 0) {
                st.styleSheet.cssText = this._css.join("");  
            } else {
                st.appendChild(document.createTextNode(this._css.join("")));
            }
            BMapLib.CityList._isStyleRender = true;
        }
    };

    /**
     * 整理输入接口的数据
     * @param {Json} cityData 城市数据
     *
     * @return {Json} 整理后的输入数据
     */
    CityList.prototype._formatCityData = function(cityData){
        var _dt = cityData,
              _newDt = {};
        if (_dt.municipalities && _dt.municipalities.length > 0) {
            _newDt.municipalities = [];
            for (var i = 0, n = _dt.municipalities.length; i < n; i++) {
                _newDt.municipalities.push(formatJson(_dt.municipalities[i]));
            }
        }
        if (_dt.provinces && _dt.provinces.length > 0) {
            _newDt.provinces = [];
            for (var i = 0, n = _dt.provinces.length; i < n; i++) {
                _newDt.provinces.push(formatJson(_dt.provinces[i]));
                _newDt.provinces[i].cities = [];
                for (var j = 0, m = _dt.provinces[i].cities.length; j < m; j++) {
                    _newDt.provinces[i].cities.push(formatJson(_dt.provinces[i].cities[j]));
                }
            }
        }
        if (_dt.other && _dt.other.length > 0) {
            _newDt.other = [];
            for (var i = 0, n = _dt.other.length; i < n; i++) {
                _newDt.other.push(formatJson(_dt.other[i]));
            }
        }
        return _newDt;
    };

    /**
     * 返回城市数据
     * @return {Json || false} 如果获取到了城市数据，则返回城市数据；否则返回false
     *
     * @example <b>参考示例：</b><br />
     * myCityListObject.getCityData();
     */
    CityList.prototype.getCityData = function(){
        return (!!_outputData ? _outputData : false); 
    };

    /**
     * 整理后端来的{"n":"北京","g":"116.395645,39.929986|12"}这种数据格式，
     * 让它成为{"name" : "", "zoom" : 12, "center" : BMap.Point}这个可识别数据格式
     * @ignore
     * @param {Json} cityinfo 如{"n":"北京","g":"116.395645,39.929986|12"}的数据
     *
     * @return {Json} 如{"name" : "", "zoom" : 12, "center" : BMap.Point}的数据
     */
    function formatJson(cityinfo) {
        if (!cityinfo || !cityinfo.n || !cityinfo.g) {
            return;
        }
        var newInfo = {};
        newInfo.name = cityinfo.n;
        var dts = cityinfo.g.split("|"),
              dtsPts = dts[0].split(",");
        newInfo.center = new BMap.Point(dtsPts[0], dtsPts[1]);
        var _zoom = parseInt(dts[1], 10);
        newInfo.zoom = _zoom;
        if (!!cityinfo.t) {
            newInfo.t = cityinfo.t;
        }
        return newInfo;
    }

    /**
     * 数据请求函数
     * @ignore
     * @param {String} url 请求脚本url
     * @param {Function} callback 回调函数
     * @param {String} charset 编码
     *
     * @return 无返回值
     */
    function scriptRequest(url, callback, charset){
        var isIe = /msie/i.test(window.navigator.userAgent)
        var scriptId = "_script_bmaplib_citylist_";
        if (baidu.g(scriptId)) {
            var script = baidu.g(scriptId);
        } else {
            if (baidu.g(scriptId)) {
                baidu.g(scriptId).parentNode.removeChild(baidu.g(scriptId));
            }
            var script = document.createElement("script");
            if(charset != null){
                script.charset = charset;
            }
            script.setAttribute("id", scriptId);
            script.setAttribute("type", "text/javascript");
            document.body.appendChild(script);    
        }

        // 加上时间戳
        var t = new Date();
        if (url.indexOf("?") > -1) {
            url += "&t=" + t.getTime()
        } else {
            url += "?t=" + t.getTime()
        }
        var _complete = function(){
            if(!script.readyState || 
                script.readyState == "loaded" || 
                script.readyState == "complete"){
                    if(typeof(callback)=="function"){
                        try{
                            callback();
                        } catch (e){ };
                    } else {
                        eval(callback);
                    }
            }
        }
        if (isIe) {
            script.onreadystatechange = _complete;
        } else {
            script.onload = _complete;
        }
        script.setAttribute("src", url);
    }

    /*
     * 根据地图当前大小计算适合的level，输入的level为后端根据固定大小确定的层级
     * @ignore
     * @param {Number} 后端提供的level
     * @param {Map} map实例
     *
     * @return {Number} level 计算后的最佳地图层级
     */
    function getBestLevel(level, map){
        if (map) {
            var sz = map.getSize();
            var ratio = Math.min(sz.width / 1100, sz.height / 660);     // 取长宽比例最小的数值
            level = Math.round(level + (Math.log(ratio) / Math.log(2)));  // 也可用Math.floor策略
        }
        if (level < 1) {
            level = 1;
        }
        if (level > 18) {
            level = 18;
        }
        return level;
    }
})();