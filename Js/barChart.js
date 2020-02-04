var w = 500;
var h = 400;
var svg = d3.select("svg")
svg.attr("width", w)
.attr("height", h);




var circle = svg.append("circle")
.attr("cx", 10)
.attr("cy", 10)
.attr("r", 80)
.attr("fill", "blue")
.style("color", "black");


