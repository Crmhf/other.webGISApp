
//Roughly the center of Missouri (lat/long)
var center = [38.524170, -92.557949]

//Target the chart div as the container for our leaflet map
//Set the center point and zoom level.
var map = L.map('chart',{scrollWheelZoom:false}).setView(center, 7);


// add an OpenStreetMap tile layer
//OpenStreetMap is an open source map layers anyone can use free of charge.
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//Add an svg element to the map.
var svg = d3.select(map.getPanes().overlayPane).append("svg"),
    g = svg.append("g").attr("class", "leaflet-zoom-hide");

//This is our color scale.
//The domain sets the break points for each color.
//Feel free to put whatever colors and breakpoints here you'd like.
var threshold = d3.scale.threshold()
    .domain([2000, 4000, 6000, 8000, 10000])
    .range(["#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15"]);

//This will be a dictionary object we use to lookup the info for each county.
//It's empty for now. We add our data when we load or json.
var theData = {};

$(document).ready(function(d) {
    // $.getJSON("js/cancer.json", function(data) {
        
    //     //Each row in the data is a county.
    //     //So we append an object to theData with the county name
    //     //And put the whole row in that object
    //     //So each county's data is accessible with the construction, theData[county name here];
    //     $.each(data, function(i, item) {
    //         theData[item.county] = item;
    //         //console.log(item);
    //     })

        $.getJSON("js/speeding.json", function(data) {
        
        //Each row in the data is a county.
        //So we append an object to theData with the county name
        //And put the whole row in that object
        //So each county's data is accessible with the construction, theData[county name here];
        $.each(data, function(i, item) {
            theData[item.county] = item;
            console.log(item);
        })
        console.log(theData);
        drawMap();
    })
});





function drawMap() {
    console.log('is the map being drawn');
    //Load the Missouri County GeoJson
    d3.json("js/missouri-counties.json", function(collection) {

        //This positions each county on it's the map.
        var transform = d3.geo.transform({
                point: projectPoint
            }),
            path = d3.geo.path().projection(transform);

        //This draws the feature on the map and fills it with data
        //The data for each county is what's in the GeoJson.
        //The GeoJson contains county names...
        //...so whenever we want to look up our cancer data for a county...
        //We look it up by name using theData[county name here]
        var feature = g.selectAll("path")
            .data(collection.features)
            .enter()
            .append("path");



        //This is where we set the color of each county according to the data
        //The opacity property is used to hide the counties for which we have no data.
        feature.attr("fill", function(d) {
            var county = d.properties.name;
            console.log(county);
            if (theData[d.properties.name + ' County']) {
                
                var tickets = theData[county + ' County'].tickets;
                console.log(tickets);
                //var death = theData[county].death_rate;
                return threshold(tickets);

                //return "#999"
            } else {
                console.log('does this run');
                return "#CCC";
            }
        })
        .attr("opacity", function(d) {
            var county = d.properties.name;
            if (theData[d.properties.name + ' County']) {
                console.log('opacity = .8');
                return .7;
            } else {
                console.log('zero opacity?');
                return 0;
            }
         })

        //When you set up you're tooltip, you can access the data like I've done here
        //This throws the data object for each county to the console window
        feature.on("click", function(d) {
            var thisCounty = theData[d.properties.name + ' County'].county;
            console.log(thisCounty);
        });

feature.on("mouseover", function(d) {
            $(".info").html("");
            var thisCounty = theData[d.properties.name+ ' County'];

            $(".info").html(
                "<h3 class='county-name'>"+thisCounty.county+"</h3>"+
                "<p class='cancer-rate'><h3>"+thisCounty.tickets+"</h3> total speeding tickets since 2012</p>"
            );

        })
        // .on("mouseout", function() {
        //     $(".info").html("");
        // })


        //The next block of code repositions the geojson objects on the map
        //whenever you zoom or pan on the map.
        //You should be able to leave this as is.
        map.on("viewreset", reset);
        reset();

        // Reposition the SVG to cover the features.
        function reset() {
            var bounds = path.bounds(collection),
                topLeft = bounds[0],
                bottomRight = bounds[1];

            svg.attr("width", bottomRight[0] - topLeft[0])
                .attr("height", bottomRight[1] - topLeft[1])
                .style("left", topLeft[0] + "px")
                .style("top", topLeft[1] + "px");

            g.attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");

            feature.attr("d", path);
        }

        legend = svg.append("g")
  .attr("class","legend")
  .attr("transform","translate(50,30)")
  .style("font-size","12px")
  .call(d3.legend)

        // Use Leaflet to implement a D3 geometric transformation.
        function projectPoint(x, y) {
            var point = map.latLngToLayerPoint(new L.LatLng(y, x));
            this.stream.point(point.x, point.y);
        }
    });


map.on('click', function(e) {
    // Popup(e.latlong); // e is an event object (MouseEvent in this case)

    
   

});

}












