/**
 * 渐变颜色选择器插件
 * 需要引用的js文件：jquery
 * 使用方法：
 *	$('#btn-color-ramp').ghColorRamp({
 *		onChange: onChange
 *	});
 * 当绑定的element被点击时，弹出渐变色选择器。
 * 参数：
 * onChanged: 选择的色带发生变化时;
 */

(function($){

	'use strict';

    $.fn.ghColorRamp= function(options) {
    	
    	var TEMPLATE = '<div id="gh-color-ramp" class="gh-color-ramp hide">'
    		+ '<ul id="color-list">'
    		+ '</ul>'
    		+ '</div>';
    	
    	var options = $.extend({}, options);

		this.newId = 'gh-color-ramp-' + new Date().getTime();
    	
    	this.init = function(){
			// 绑定context
			if(options.onChange && options.context){
				options.onChange = $.proxy(options.onChange, options.context);
			}

    		$('#gh-color-ramp').remove();
    		$(document.body).append(TEMPLATE);

			$('#gh-color-ramp').attr('id', this.newId);
    		// 初始化color列表
    		var colorList = $('#' + this.newId + ' #color-list');
    		if(options.colors){
    			this.colors = options.colors;
    			for(var colorName in options.colors){
    				colorList.append('<li class="' + colorName + '"></li>');
    			}
    		}
			if(options.defaultColorRamp){
				this.removeClass(function (index, css) {
					return (css.match(/color-ramp-\S+/g) || []).join(' ');
				}).addClass('color-ramp-picker ' + options.defaultColorRamp)
					.attr('color-ramp-name', options.defaultColorRamp);
			}
    		// 弹出对话框
    		this.bind('click', function(e){
    			toggle();
    			e.preventDefault();
    			return false;
    		});
    		
    		var colors = this.colors;
			var self = this;
    		$('#' + this.newId + ' ul li').bind('click', function(e){
    			var clazz = $(this).attr('class');
				// 判断是否已经被选择
				var value = self.attr('color-ramp-name');
				if(value == clazz){
					return;
				}
				//
    			var colorArray = colors[clazz];
    			if(options.onChange){
    				options.onChange({name: clazz, colors: colorArray});
    			}
    			$('#' + self.newId).addClass('hide');
    			e.preventDefault();
				self.attr('color-ramp-name', clazz);
				//
				self.removeClass(function (index, css) {
					return (css.match(/color-ramp-\S+/g) || []).join(' ');
				}).addClass('color-ramp-picker ' + clazz);
				//
    			return false;
    		});
			$('#' + this.newId).perfectScrollbar();
    	}
    	
    	var t = this;
    	function toggle(){
    		var c = $('#' + t.newId);
    		if(c.hasClass('hide')){
    			var o = $(t).offset();
    			o.top -= c.height() - $(t).height();
    			c.css(o);
    			c.removeClass('hide')
    			//
    			$(document).one('click', function(){
    		    	c.addClass('hide');
    			});
    		}
    	}
    	
    	this.init();
    	
    	return this;
    	
    };
}(jQuery));