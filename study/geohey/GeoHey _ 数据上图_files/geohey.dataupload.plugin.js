/**
 * 数据上传插件
 * 需要引用的js文件：jquery、boostrap
 * 使用方法：
 *	$('#btn-upload-data').ghDataUpload({
 *		onUploaded: onUploaded,
 *		onImported: onImported,
 *		onError: onError
 *	});
 * 当绑定的element被点击时，弹出数据上传对话框。
 * 参数：
 * onUploaded: 数据上传成功时调用;
 * onImported: 数据入库成功时调用;
 * onError: 错误发生时调用。
 */

(function($){

	'use strict';

    $.fn.ghDataUpload = function(options) {

    	var TEMPLATE = '<div id="gh-upload-data-dialog" class="modal fade">' +
							'<div class="modal-dialog">' + 
								'<div class="modal-content">' +
									'<div class="modal-header">' +
										'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
										'<h5 class="modal-title"><i class="fa fa-cloud-upload"></i> 上传数据</h5>' +
									'</div>' +
									'<form id="form-upload" class="modal-body" method="post" action="/s/data/upload">' +
										'<div id="btn-file" class="btn btn-primary">选择文件</div>' + 
											'<span id="file-name" style="margin-left: 16px"></span>' + 
											'<input type="file" id="file-select" name="file" accept=".csv, .kml, .kmz, .gpx, .json, .geojson, text/csv, text/gpx+xml, application/json, application/gpx+xml, application/vnd.google-earth.kml+xml, application/vnd.google-earth.kmz, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/x-zip-compressed" style="display: none;">' +
											'<div class="help-block">' +
											'<dl>' +
												'<dt>支持的格式：</dt>' +
												'<dd>CSV (.csv)</dd>' +
												'<dd>GPX (.gpx)</dd>' +
												'<dd>KML (.kml/.kmz)</dd>' +
												'<dd>Excel (.xls/.xlsx)</dd>' + 
												'<dd>GeoJSON (.json)</dd>' +
												'<dd>TopoJSON (.json)</dd>' +
												'<dd>Shapefile (.zip打包，默认以UTF-8编码处理，其它编码请在<a href="http://baike.baidu.com/view/3485641.htm" target="_blank">CPG文件</a>中指定)' +
												'</dd>' +
											'</dl>' +
										'</div>' +
										'<div id="offset-setting-wrapper" class="hide">' +
										  '<input id="offset" name="offset" type="hidden">' +
						              	  '<span>数据来源</span>' + 
						                  '<select id="offset-list"><option value="0">GPS等定位设备</option><option value="1">互联网地图(谷歌、高德、腾讯等)</option></select>' +
						              	'</div>' +
										'<div id="progress" class="progress invisible" style="margin-bottom: 0;">' +
										 	'<div class="progress-bar" role="progressbar" aria-valuenow="51" aria-valuemin="0" aria-valuemax="100">' +
										    '</div>' + 
										'</div>' +
									'</form>' +		
									'<div class="modal-footer">' + 
										'<span id="progress-info" class="text-center invisible" style="margin-right: 16px;"><i class="fa fa-spinner fa-spin"></i> <span id="loading">正在上传</span> <span id="importing" class="hide">正在导入</span></span>' + 
								        '<button id="btn-do-upload" type="button" class="btn btn-primary disabled">上传</button>' +
								    '</div>' +
								'</div>' +
							'</div>' + 
						'</div>';

    	var options = $.extend({}, options);

    	this.init = function(){

    		$('#gh-upload-data-dialog').remove();
    		
    		// 对话框dom添加到页面
    		$(document.body).append(TEMPLATE);

    		// 添加对话框事件响应
    		$('#gh-upload-data-dialog').on('shown.bs.modal', function () {
				$('#gh-upload-data-dialog #btn-file').bind('click', bindFileSelectEvent);
				$('#gh-upload-data-dialog #file-select').bind('change', fileChangeHandler);
				$('#gh-upload-data-dialog #offset-list').bind('change', offsetChangeHandler);
				$('#gh-upload-data-dialog #btn-do-upload').bind('click', upload);
			});

			$('#gh-upload-data-dialog').on('hidden.bs.modal', function () {
				$('#gh-upload-data-dialog #btn-file').unbind('click');
				$('#gh-upload-data-dialog #file-select').unbind('change');
				$('#gh-upload-data-dialog #offset-list').unbind('change');
				$('#gh-upload-data-dialog #btn-do-upload').unbind('click');
				$('#gh-upload-data-dialog #offset-setting-wrapper').addClass('hide');
				$('#gh-upload-data-dialog #offset-list').removeProp('disabled');
				$('#gh-upload-data-dialog #offset-setting-wrapper').val(0);
				var bar = $('#gh-upload-data-dialog .progress-bar');
				bar.css('width', '0');
				bar.text();
				backToInitState();
			});

			// 弹出对话框
    		this.bind('click', function(){
    			$('#gh-upload-data-dialog').modal({
					keyboard : false,
					backdrop : 'static'
				});
    		});
    	};

    	var bindFileSelectEvent = function(){
    		$('#gh-upload-data-dialog #file-select').click();
    	}

    	var fileChangeHandler = function(){
    		var fileName = $(this).val().split("\\").pop();
			$('#gh-upload-data-dialog #file-name').text(fileName);
			if(fileName.length>0){
				$('#gh-upload-data-dialog #btn-do-upload').removeClass('disabled');
				var array = fileName.split('.');
				var length = array.length;
				if(length>1 && $.inArray(array[length-1], ['zip','json','geojson','kml','kmz']) >= 0){
					$('#gh-upload-data-dialog #offset-setting-wrapper').removeClass('hide');
				}else{
					$('#gh-upload-data-dialog #offset-setting-wrapper').addClass('hide');
					$('#gh-upload-data-dialog #offset-setting-wrapper').val(0);
				}
			} else {
				$('#gh-upload-data-dialog #btn-do-upload').addClass('disabled');
			}
    	}

		var offsetChangeHandler = function(){
			var offset = $('#offset-list').val();
			$('#offset').val(offset);
		}

    	var upload = function(){
    		
    		var bar = $('#gh-upload-data-dialog .progress-bar');
			bar.css('width', '0');
			bar.text();

			//$('#gh-upload-data-dialog select#offset-list').prop('disabled', 'disabled');
			
    		$('#gh-upload-data-dialog #form-upload').ajaxSubmit({
    			dataType: 'json',
				beforeSubmit : function() {
					$('#gh-upload-data-dialog #btn-do-upload').addClass('disabled');
					$('#gh-upload-data-dialog #btn-file').addClass('disabled');
					$('#gh-upload-data-dialog #progress').removeClass('invisible');
					$('#gh-upload-data-dialog #progress-info').removeClass('invisible');
					$('#gh-upload-data-dialog #loading').removeClass('hide');
					$('#gh-upload-data-dialog #importing').addClass('hide');
					$('#gh-upload-data-dialog .progress-bar').css('width', '0');
				},
				uploadProgress: function(event, position, total, percentComplete){
					var bar = $('#gh-upload-data-dialog .progress-bar');
					bar.css('width', percentComplete + '%');
					bar.text(percentComplete + '%');
				},
				success : function(data) {
					if(data.status == 1){
						showError(data.msg, true);
						backToFileSelectedState();
						return;
					} else if(data.status == 0){
						startCheckImport(data.data);//data.data是一个数组
						if(options.onUploaded){
							// 数据uid传出
							options.onUploaded(data.data);
						}
						$('#gh-upload-data-dialog #loading').addClass('hide');
						$('#gh-upload-data-dialog #importing').removeClass('hide');
					}
				},
				error : function(xhr) {
					backToFileSelectedState();
					if (xhr.status == 413) {
						if(options.onError){
							options.onError("上传的文件太大，限制20M");
							return;
						}
					}
					if(options.onError){
						options.onError("上传失败");
					}
				}
			});
    	}
    	
    	var intervalId = [];
    	
    	function startCheckImport(uidArray) {
			$.each(intervalId, function(index, item){
				clearInterval(item);
			});
			intervalId = [];

			$.each(uidArray, function(index, uid){
				intervalId[index] = setInterval(function(){
					checkImport(uid, index);
				}, 2000);
			});
    	}

		function importCheckFinished(){
			var finished = true;
			$.each(intervalId, function(index, item){
				if(typeof item !== 'undefined'){
					finished = false;
				}
			});
			return finished;
		}

    	function checkImport(checkUid, index) {
			$.ajax({
				type : 'POST',
				contentType: 'application/x-www-form-urlencoded',
				url : '/s/data/upload/checkImport',
				data : {
					uid : checkUid
				},
				success : function(data) {
					if(data.code === 101){//101表示导入中
						return;
					}
					clearInterval(intervalId[index]);
					intervalId[index] = undefined;

					var finished = importCheckFinished();
					if(finished){
						backToInitState();
					}

					if(data.code === 0){//0表示数据表为空，已被删除
						//检查intervalId数组是否都已经被处理，如真表示所有的数据表都已删除
						if(options.onError){
							options.onError('数据导入失败');
						}
					}else if(data.code === 100){// 100表示导入成功
						if(options.onImported){
							// 数据uid传出
							options.onImported(checkUid, data.data);
						}
						if(finished && options.autoClose){
							$('#gh-upload-data-dialog').modal('hide');
						}
					} else if(data.code === 102){// 102 表示导入失败
						if(options.onError){
							options.onError(data.msg);
						}
					}
				},
				error : function(xhr, ts, err) {
					clearInterval(intervalId[index]);
					backToInitState();
					if(options.onError){
						options.onError(err);
					}
				},
				complete: function(){
					
				}
			});
    	}
    	
    	var backToInitState = function(){
    		$('#gh-upload-data-dialog #btn-do-upload').addClass('disabled');
    		$('#gh-upload-data-dialog #progress').addClass('invisible');
    		$('#gh-upload-data-dialog #btn-file').removeClass('disabled');
    		$('#gh-upload-data-dialog .progress-bar').css('width', '0');
    		$('#gh-upload-data-dialog #file-name').text('');
    		$('#gh-upload-data-dialog #loding').removeClass('hide');
    		$('#gh-upload-data-dialog #importing').addClass('hide');
    		$('#gh-upload-data-dialog #progress-info').addClass('invisible');
			$('#gh-upload-data-dialog #offset-list').removeProp('disabled');
    		var file = $('#gh-upload-data-dialog #file-select');
    		file.replaceWith( file = file.clone(true));
    	}
    	
    	var backToFileSelectedState = function(){
    		$('#gh-upload-data-dialog #progress').addClass('invisible');
    		$('#gh-upload-data-dialog #btn-file').removeClass('disabled');
    		$('#gh-upload-data-dialog #btn-do-upload').removeClass('disabled');
    		$('#gh-upload-data-dialog .progress-bar').css('width', '0');
    		$('#gh-upload-data-dialog #loding').removeClass('hide');
    		$('#gh-upload-data-dialog #importing').addClass('hide');
    		$('#gh-upload-data-dialog #progress-info').addClass('invisible');
			$('#gh-upload-data-dialog #offset-list').removeProp('disabled');
    	}

    	this.init();

    	return this;
    };
}(jQuery));