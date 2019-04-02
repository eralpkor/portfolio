
    
//  var url =
//  'https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/us.json';

// // var projection = d3.geo.mercator().scale(9000).translate([0, 1980])  

// // var projection = d3.geo.albersUsa()
// //     .scale(800)
// //     .translate([width / 2, height /2])


// var path = d3.geo.path()
//    // .projection(projection)
  
// var canvas = d3.select('.map-chart')
//  .append('svg')
//  .attr('width', 900)
//  .attr('height', 700)

// d3.json(url, function (error, topology) {
//  if (error) throw error;
//  console.log('topojson', topology);
//  var geojson = topojson.feature(topology, topology.objects.counties);
//  console.log("geojson", geojson)

//  canvas.selectAll("path")
//    .data(geojson.features)
//    .enter()
//    .append("path")
//    .attr("d", path);
// });
  
