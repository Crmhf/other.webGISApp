// 打印地图
// 把当前视窗中的地图输出为图片
L.Control.EasyPrint = L.Control.extend({
	options: {
		title: '输出地图到图片',
		position: 'topleft',
		elementsToHide:'p' // 设定哪些元素默认不显示
	},

	onAdd: function () {
		var container = L.DomUtil.create('div', 'leaflet-control-easyPrint leaflet-bar leaflet-control');
		this.link = L.DomUtil.create('a', 'leaflet-control-easyPrint-button leaflet-bar-part', container);
		this.link.id = "leafletEasyPrint";
		this.link.title = this.options.title;
		L.DomEvent.addListener(this.link, 'click', printPage, this.options);
		return container;
	}

});

L.control.print = function(options) {
	return new L.Control.EasyPrint(options);
};

function printPage(){
 // alert('Only the map will be exported. Print is in beta. Results may vary.');
	if (this.elementsToHide){
		var htmlElementsToHide = document.querySelectorAll(this.elementsToHide);

		for (var i = 0; i < htmlElementsToHide.length; i++) {
			htmlElementsToHide[i].className = htmlElementsToHide[i].className + ' _epHidden';
		}
	}

	window.print();

	if (this.elementsToHide){
		var htmlElementsToHide = document.querySelectorAll(this.elementsToHide);

		for (var i = 0; i < htmlElementsToHide.length; i++) {
			htmlElementsToHide[i].className = htmlElementsToHide[i].className.replace(' _epHidden','');
		}
	}

}
