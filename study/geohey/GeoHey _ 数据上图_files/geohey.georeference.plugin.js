/**
 * 数据空间化插件
 * 需要引用的js文件：jquery、boostrap
 */

var GEOREFERENCE_TEMPLATE = '<div id="gh-georeference-dialog" class="modal fade">' +
								'<div class="modal-dialog">' +
									'<div class="modal-content">' +
										'<div class="modal-header">' +
											'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
											'<h5 class="modal-title"><i class="fa fa-map-marker"></i> 数据空间化处理</h5>' +
										'</div>' +
										'<p id="getting-status" style="padding: 16px;"><i class="fa fa-spinner fa-spin"></i> 正在获取数据信息...</p>' +
										'<div id="convert-wrapper" class="hide">' +
											'<div class="gh-tab-container">' +
												'<div class="gh-tabs row">' +
													'<div id="byAddress" class="gh-tab col-xs-4 active">' +
														'<i class="fa fa-street-view"></i> 地址' +
													'</div>' +
													'<div id="byLngLat" class="gh-tab col-xs-4">' +
														'<i class="fa fa-location-arrow"></i> 经纬度' +
													'</div>' +
													'<div id="byAdmin" class="gh-tab  col-xs-4">' +
														'<i class="ghf-admin"></i> 行政区' +
													'</div>' +
												'</div>' +
												'<div class="gh-tab-contents">' +
													'<div class="gh-tab-content">' +
														'<span>地址字段</span>' +
														'<select id="addr-list"></select>' +
													'</div>' +
													'<div class="row gh-tab-content hide">' +
														'<div id="lon-fields" class="col-xs-12 col-sm-6">' +
															'<span>经度字段</span>' +
															'<select id="lng-list"></select>' +
														'</div>' +
														'<div id="lat-fields" class="col-xs-12 col-sm-6">' +
															'<span>纬度字段</span>' +
															'<select id="lat-list"></select>' +
														'</div>' +
														'<div id="offset-setting-wrapper" class="col-xs-12">' +
															'<span>数据来源</span>' +
															'<select id="offset-list"><option value="0">GPS等定位设备</option><option value="1">互联网地图(谷歌、高德、腾讯等)</option></select>' +
														'</div>' +
														'<p id="lon-lat-info" class="col-xs-12 hide">该数据没有坐标字段。</p>' +
													'</div>' +
													'<div class="row gh-tab-content hide">' +
														'<div id="admin-fields" class="col-xs-12 col-sm-6">' +
															'<span>行政区字段</span>' +
															'<select id="admin-list"></select>' +
														'</div>' +
														'<div id="parent-admin-fields" class="col-xs-12 col-sm-6">' +
															'<span>上级行政区</span>' +
															'<select id="parent-admin-list"></select>' +
														'</div>' +
														'<div id="admin-shape" class="col-xs-12 col-sm-6">' +
															'<span>行政区形状</span>' +
															'<select id="admin-shape-list">' +
																'<option value="point">点</option>' +
																'<option value="polygon">面</option>' +
															'</select>' +
														'</div>' +
													'</div>' +
												'</div>' +
											'</div>' +
											'<p class="georeference-description">该数据尚未进行空间化处理。请选择以上任意方式对数据进行处理。</p>' +
											'<div id="progress" class="progress invisible" style="margin-top: 8px; margin-bottom: 16px;">' +
												'<div id="progress-bar" class="progress-bar" role="progressbar" aria-valuenow="51" aria-valuemin="0" aria-valuemax="100">' +
												'</div>' +
											'</div>' +
										'</div>' +
										'<div id="converting-wrapper" style="height: 80px;" class="hide">' +
											'<p style="padding: 16px 16px 0 16px;"><i class="fa fa-spinner fa-spin"></i> 该数据正在进行空间化处理...</p>' +
											'<div id="progress" style="margin-top: 8px;" class="progress">' +
												'<div id="progress-bar" class="progress-bar" role="progressbar" aria-valuenow="51" aria-valuemin="0" aria-valuemax="100">' +
												'</div>' +
											'</div>' +
										'</div>' +
										'<div class="modal-footer hide">' +
											'<span id="progress-info" class="text-center invisible" style="margin-right: 16px;"><i class="fa fa-spinner fa-spin"></i> 正在处理中</span>' +
											'<button id="btn-do-georeference" type="button" class="btn btn-primary disabled">开始</button>' +
										'</div>' +
									'</div>' +
								'</div>' +
							'</div>';

function GeoReference(){
	this.intervalId = null;
	this.TEMPLATE = GEOREFERENCE_TEMPLATE;
};

GeoReference.prototype.georeference = function(options){
	$('#gh-georeference-dialog').remove();
	this.options = $.extend({}, options);
	$(document.body).append(this.TEMPLATE);
	this.bindEvents();
	// 添加对话框事件响应
	var gr = this;
	$('#gh-georeference-dialog').on('shown.bs.modal', function(){
		gr.startGRWizard();
	});
	$('#gh-georeference-dialog').on('hidden.bs.modal', function(){
		gr.clear();
	});
	$('#gh-georeference-dialog').modal({
		keyboard : false,
		backdrop : 'static'
	});
}

GeoReference.prototype.bindEvents = function(){
	$('#gh-georeference-dialog .gh-tab').bind('click', function(){
		if($(this).hasClass('active'))
			return;
		$('#gh-georeference-dialog .gh-tab').removeClass('active');
		$(this).addClass('active');
		// 显示对应的面板
		var index = $(this).index('#gh-georeference-dialog .gh-tab');
		if(index == -1)
			return;
		var content = $('#gh-georeference-dialog .gh-tab-content')[index];
		$('#gh-georeference-dialog .gh-tab-content').addClass('hide');
		$(content).removeClass('hide');
	});
	//
	var gr = this;
	$('#gh-georeference-dialog #btn-do-georeference').bind('click', function(){
		gr.doGeoReference();
	});
}

GeoReference.prototype.clear = function(){
	//$('#gh-georeference-dialog option').remove();
	clearInterval(this.intervalId);
	$('#gh-georeference-dialog #progress').addClass('invisible');
	$('#gh-georeference-dialog #progress-info').addClass('invisible');
	$('#btn-do-georeference').removeClass('disabled');
	var bar = $('#gh-georeference-dialog #progress-bar');
	bar.css('width', '0');
	bar.text('');
}

GeoReference.prototype.doGeoReference = function(){

	var activeTab = $('#gh-georeference-dialog .gh-tab.active');
	if(activeTab != null){
		var type = activeTab.attr('id');
		if(type == 'byLngLat')
			this.doByLngLat();
		else if(type == 'byAdmin'){
			var fieldIndex = $('#gh-georeference-dialog #admin-list option:selected').index();
			if(fieldIndex < 0){
				this.onError('请选择行政区划字段');
				return;
			}
			var adminField = $('#gh-georeference-dialog #admin-list option:selected').val();
			var parentField = $('#gh-georeference-dialog #parent-admin-list option:selected').val();
			var adminShape = $('#gh-georeference-dialog #admin-shape-list option:selected').val();
			this.doByAdmin(adminField, parentField, adminShape);
		}
		else if(type == 'byAddress'){
			var fieldIndex = $('#gh-georeference-dialog #addr-list option:selected').index();
			if(fieldIndex < 0){
				this.onError('请选择地址字段');
				return;
			}
			var field = $('#gh-georeference-dialog #addr-list option:selected').val();
			this.doByAddress(field);
		}
	}
}

GeoReference.prototype.doByLngLat = function(){
	var lngIndex = $('#gh-georeference-dialog #lng-list option:selected').index();
	if(lngIndex < 0){
		this.onError('请选择经度字段');
		return;
	}
	var latIndex = $('#gh-georeference-dialog #lat-list option:selected').index();
	if(latIndex < 0){
		this.onError('请选择纬度字段');
		return;
	}
	var lng = $('#gh-georeference-dialog #lng-list option:selected').val();
	var lat = $('#gh-georeference-dialog #lat-list option:selected').val();
	var offset = $('#gh-georeference-dialog #offset-list option:selected').val();

	//
	$('#btn-do-georeference').addClass('disabled');
	$('#gh-georeference-dialog #progress').removeClass('invisible');
	$('#gh-georeference-dialog #progress-info').removeClass('invisible');
	//

	var gr = this;

	$.ajax({
		type: 'POST',
		contentType: 'application/x-www-form-urlencoded',
		url : '/s/data/georeference/' + this.options.uid,
		data : {
			convert_by: 'byCoord',
			x_field: lng,
			y_field: lat,
			offset: offset
		},
		success: function(data){
			if(data.code == 0){
				var jobUid = data.data;
				gr.startCheckJob(jobUid);
			} else if(data.code == 1){
				gr.onError(data.msg);
				//
				$('#btn-do-georeference').removeClass('disabled');
				$('#gh-georeference-dialog #progress-info').addClass('invisible');
				$('#gh-georeference-dialog #progress').addClass('invisible');
				//
			}
		},
		error: function(xhr, ts, err){
			if(xhr.status == "502")
				showError("服务无法访问，请检查网络是否连接。");
			else
				showError(err);
			//
			$('#btn-do-georeference').removeClass('disabled');
			$('#gh-georeference-dialog #progress').addClass('invisible');
			$('#gh-georeference-dialog #progress-info').addClass('invisible');
			//
		},
		complete: function(){

		}
	});
}

GeoReference.prototype.doByAddress = function(field){
	var gr = this;
	//
	$('#btn-do-georeference').addClass('disabled');
	$('#gh-georeference-dialog #progress-info').removeClass('invisible');
	$('#gh-georeference-dialog #progress').removeClass('invisible');
	//
	$.ajax({
		type: 'POST',
		contentType: 'application/x-www-form-urlencoded',
		url : '/s/data/georeference/' + this.options.uid,
		data : {
			convert_by: 'byAddr',
			addr_field: field
		},
		success: function(data){
			if(data.code == 0){
				var jobUid = data.data;
				gr.startCheckJob(jobUid);
			} else if(data.code == 1){
				gr.onError(data.msg);
				//
				$('#btn-do-georeference').removeClass('disabled');
				$('#gh-georeference-dialog #progress-info').addClass('invisible');
				$('#gh-georeference-dialog #progress').addClass('invisible');
				//
			}
		},
		error: function(xhr, ts, err){
			if(xhr.status == "502")
				showError("服务无法访问，请检查网络是否连接。");
			else
				showError(err);
			//
			$('#btn-do-georeference').removeClass('disabled');
			$('#gh-georeference-dialog #progress-info').addClass('invisible');
			$('#gh-georeference-dialog #progress').addClass('invisible');
			//
		},
		complete: function(){

		}
	});
}

GeoReference.prototype.doByAdmin = function(adminField, parentField, shape){
	var gr = this;
	//
	$('#btn-do-georeference').addClass('disabled');
	$('#gh-georeference-dialog #progress-info').removeClass('invisible');
	$('#gh-georeference-dialog #progress').removeClass('invisible');
	//
	$.ajax({
		type: 'POST',
		contentType: 'application/x-www-form-urlencoded',
		url : '/s/data/georeference/' + this.options.uid,
		data : {
			convert_by: 'byAdmin',
			admin_field: adminField,
			parent_field: parentField,
			admin_shape: shape
		},
		success: function(data){
			if(data.code == 0){
				var jobUid = data.data;
				gr.startCheckJob(jobUid);
			} else if(data.code == 1){
				gr.onError(data.msg);
				//
				$('#btn-do-georeference').removeClass('disabled');
				$('#gh-georeference-dialog #progress-info').addClass('invisible');
				$('#gh-georeference-dialog #progress').addClass('invisible');
				//
			}
		},
		error: function(xhr, ts, err){
			if(xhr.status == "502")
				showError("服务无法访问，请检查网络是否连接。");
			else
				showError(err);
			//
			$('#btn-do-georeference').removeClass('disabled');
			$('#gh-georeference-dialog #progress-info').addClass('invisible');
			$('#gh-georeference-dialog #progress').addClass('invisible');
			//
		},
		complete: function(){

		}
	});
}

GeoReference.prototype.startCheckJob = function(jobUid){

	var bar = $('#gh-georeference-dialog #progress-bar');
	bar.css('width', '0');
	bar.text('');

	this.checkJob(jobUid);
	clearInterval(this.intervalId);
	var gr = this;
	this.intervalId = setInterval(function(){
		gr.checkJob(jobUid);
	}, 5000);
	// 回调
	if(this.options.onStart){
		this.options.onStart(this.options.uid, jobUid);
	}
	//
}

GeoReference.prototype.checkJob = function(jobUid){
	var gr = this;
	$.ajax({
		url: '/s/data/georeference/' + this.options.uid + '/checkJob/' + jobUid,
		success: function(data){
			if(data.code == 0){
				if(data.data.done){
					clearInterval(gr.intervalId);
					gr.onComplete();
					$('#gh-georeference-dialog').modal('hide');
				} else{
					var percent = data.data.jobPercent;
					//
					var bar = $('#gh-georeference-dialog #progress-bar');
					bar.css('width', percent + '%');
					bar.text(percent + '%');
					//
				}
			} else{
				clearInterval(gr.intervalId);
				gr.onError(data.msg);
				//
				gr.clear();
				//
			}
		},
		error: function(xhr, ts, err){
			if(xhr.status == "502")
				showError("服务无法访问，请检查网络是否连接。");
			else
				showError(err);
		},
		complete: function(){

		}
	});
}

GeoReference.prototype.startGRWizard = function(){
	if(this.options == null || this.options.uid == null)
		return;
	this.getDataFields(this.options.uid);
}

GeoReference.prototype.getDataFields = function(uid){
	var gr = this;
	$.ajax({
		url: '/s/data/georeference/' + uid + '/status',
		success: function(data){
			if(data.code == 0 && data.status == 101){
				// 用数据的字段填充下拉框
				var adminList = $('#gh-georeference-dialog #admin-list').empty();
				var parentAdminList = $('#gh-georeference-dialog #parent-admin-list').empty();
				var addrList = $('#gh-georeference-dialog #addr-list').empty();
				var lngList = $('#gh-georeference-dialog #lng-list').empty();
				var latList = $('#gh-georeference-dialog #lat-list').empty();
				if(data.data.xFields.length>0 && data.data.yFields.length>0){
					for(var i=0; i<data.data.xFields.length; i++){
						var option = '<option>' + data.data.xFields[i] + '</option>';
						var field =  data.data.xFields[i].toLowerCase();
						if(field == 'x' || field == 'lon' || field == 'lng' || field == 'longitude' || field == '经度'){
							lngList.prepend(option);
						}else{
							lngList.append(option);
						}
					}
					for(var i=0; i<data.data.yFields.length; i++){
						var option = '<option>' + data.data.yFields[i] + '</option>';
						var field =  data.data.yFields[i].toLowerCase();
						if(field == 'y' || field == 'lat' || field == 'latitude' || field == '纬度'){
							latList.prepend(option);
						}else{
							latList.append(option);
						}
					}
					$('#gh-georeference-dialog #lon-fields').removeClass('hide');
					$('#gh-georeference-dialog #lat-fields').removeClass('hide');
					$('#gh-georeference-dialog #lon-lat-info').addClass('hide');
				} else {
					$('#gh-georeference-dialog #lon-fields').addClass('hide');
					$('#gh-georeference-dialog #lat-fields').addClass('hide');
					$('#gh-georeference-dialog #lon-lat-info').removeClass('hide');
				}
				parentAdminList.append('<option value="">无</option>');
				for(var i=0; i<data.data.addrFields.length; i++){
					var option = '<option>' + data.data.addrFields[i] + '</option>';
					adminList.append(option);
					addrList.append(option);
					parentAdminList.append(option);
				}
				//
				$('#gh-georeference-dialog #btn-do-georeference').removeClass('disabled');
				//
				$('#gh-georeference-dialog #convert-wrapper').removeClass('hide');
				$('#gh-georeference-dialog .modal-footer').removeClass('hide');
			} else if(data.code==0 && data.status == 100){
				var jobUid = data.data;
				//
				$('#gh-georeference-dialog #converting-wrapper').removeClass('hide');
				//
				gr.startCheckJob(jobUid);
			} else if(data.code == 1){
				gr.onError(data.msg);
				$('#gh-georeference-dialog').modal('hide');
			}
		},
		error: function(xhr, ts, err){
			if(xhr.status == "502")
				showError("服务无法访问，请检查网络是否连接。");
			else
				showError(err);
			$('#gh-georeference-dialog').modal('hide');
		},
		complete: function(){
			$('#gh-georeference-dialog #getting-status').addClass('hide');
		}
	});
}

GeoReference.prototype.onError = function(err){
	if(this.options.onError)
		this.options.onError(err);
}

GeoReference.prototype.onComplete = function(){
	if(this.options.onComplete)
		this.options.onComplete();
}
