(function ($) { var model = [{  name: "John",  address: "1, a road, a town, a county, a postcode",  tel: "1234567890",  site: "www.aurl.com", pic: "/img/john.jpg",  deleteMe: function () { viewModel.people.remove(this); } 
}, {  name: "Jane",  address: "2, a street, a city, a county, a postcode",  tel: "1234567890",  site: "www.aurl.com",  pic: "/img/jane.jpg",  deleteMe: function () { viewModel.people.remove(this); } 
}, {  name: "Fred",  address: "3, an avenue, a village, a county, a postcode",  tel: "1234567890",  site: "www.aurl.com",  pic: "/img/fred.jpg",  deleteMe: function () { viewModel.people.remove(this); } 
}, {  name: "Freda",  address: "4, a street, a suburb, a county, a postcode",  tel: "1234567890",  site: "www.aurl.com",  pic: "/img/jane.jpg",  deleteMe: function () { viewModel.people.remove(this); } 
}], viewModel = { people: ko.observableArray(model),
}
}; ko.applyBindings(viewModel);
     
})(jQuery);