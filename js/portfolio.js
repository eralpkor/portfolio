// d3.js stuff

// var url =
//   'https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/us.json';

// var path = d3.geo.path();


// var canvas = d3.select('.map-chart')
//   .append('svg')
//   .attr('width', 900)
//   .attr('height', 700);

// function d3Blows(error, topology) {
//   if (error) throw error;
//   // console.log('topojson', topology);
  
// }

// d3.json(url).then(function (topology) {
//   var geojson = topojson.feature(topology, topology.objects.counties);

//   // console.log("geojson", geojson);
//   // console.log(canvas);
//   canvas.selectAll("path")
//     .data(geojson.features)
//     .enter()
//     .append("path")
//     .attr("d", path);
// });



// Footer current year
var year = new Date().getFullYear();
document.getElementById('year').textContent = year;
document.getElementById('norman-age').textContent = year - 2013;
document.getElementById('sunny-age').textContent = year - 2018;

// Home page type effect
var typed = new Typed('#things', {
  strings: ["Frontend Developer", "Network Administrator", "Test Engineer"],
  typeSpeed: 100,
  loop: true,
  showCursor: false
});












console.log(year);