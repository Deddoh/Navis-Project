// Invoice Bar Chart

//dimensions and margins of the graph
var margin = {top:20, right:50, bottom:40, left:140},
width = 460 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

//append svg object to the body

var svgInvoice = d3.select("#bar-chart")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//add csv containing the data

d3.csv("invoiceData.csv", function(data){

//xScale
// var xScale = d3.scaleLinear()
// .domain([0, d3.max(data, function(d){return d[0];})])
// .rangeRound(10, 1000);


//x axis

var x = d3.scaleLinear()
.domain([0, 16000])
//round to the nearest whole number
.rangeRound([0, width])
svgInvoice.append("g")

.attr("transform", "translate(0, " + height + ")")
.call(d3.axisBottom(x))
.selectAll("text")
.attr("transform", "translate(-10, 0)rotate(-45)")
.style("text-anchor", "end");



//Y axis

var y = d3.scaleBand()
.range([0, height])
.domain(data.map(function(d){ return d.daysOutstanding;}))
.padding(.4);
svgInvoice.append("g")
.call(d3.axisLeft(y))

//Rectangular bars

.selectAll("rect")
.data(data)
.enter()
.append("rect")
.attr("x", x(0))
.attr("y", function(d){return y(d.daysOutstanding);})
.attr("width", function(d){return x(d.invoiceValues);})


.attr("height", y.bandwidth())
.attr("fill", "blue")
});
// end of invoice charts




// clients' charts



// var margin = {top:20, right:50, bottom:40, left:140},
// width = 460 - margin.left - margin.right,
// height = 400 - margin.top - margin.bottom;

var h = 400;
var w = 460;
var margin = 40;
// radius
var radius = Math.min(width, height) / 2 + margin;

// setting the color
var color = d3.scaleOrdinal(d3.schemeCategory20b);
// .range(["blue", "green", "yellow", "red", "grey", "brown", "#ccc", "f1f1f1"]);


// constructing the arc generator with the default innerRadius, outerRadius, startAngle and endAngle accessor functions
var arc = d3.arc()
.innerRadius(0)
.outerRadius(radius);

// var label = d3.arc()
// .outerRadius(radius)
// .innerRadius(radius - 50);

//pie function
var pie = d3.pie()
//not sorting
// .sort(null)
// value to be displayed will be Amount
.value(function(d){return d.Amount;});

//calling the DOM
var svgClients = d3.select("#clients-chart")
.attr("width", w)
.attr("height", h)
.append("g")
.attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");

// csv containing the clienst data
d3.csv("clientpieChart.csv", function(error, data){
	// convert Amount data into integer
	data.forEach(function(d){
		d.Amount = +d.Amount;
	});
// append  a group
var g = svgClients.selectAll(".arc")
.data(pie(data))
.enter()
.append("g")
.attr("class", "arc");

// append path, pie for each client
g.append("path")
.attr("d", arc)
.style("opacity", 0.8)
.style("fill", function(d) {return color(d.data.client);});


// add text
g.append("text")
.attr("transform", function(d){return "translate(" + arc.centroid(d) + ")"; })
// .attr("dy", ".9em")
.style("text-anchor" ,"middle")
.style("font-size", 14)
.text(function(d){
	return d.data.client;
});
});




// end of clients


// finance charts
// status check chart

//dimensions and margins of the graph
var margin = {top:20, right:0, bottom:40, left:155},
width = 460 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

//append svg object to the body

var svgFinance = d3.select("#finance-chart")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//add csv containing the data

d3.csv("status.csv", function(data){

//xScale
// var xScale = d3.scaleLinear()
// .domain([0, d3.max(data, function(d){return d[0];})])
// .rangeRound(10, 1000);


//x axis

var x = d3.scaleLinear()
.domain([0, 100])
//round to the nearest whole number
.rangeRound([0, width], .35)
svgFinance.append("g")

.attr("transform", "translate(0, " + height + ")")
.call(d3.axisBottom(x))
.selectAll("text")
.attr("transform", "translate(-10, 0)rotate(-45)")
.style("text-anchor", "end");

var bar_colors = d3.scaleOrdinal()
.range(["#0c8721", "#c9aa67", "#054d11", "#967309", "red"]);

//Y axis

var y = d3.scaleBand()
.range([0, height])
.domain(data.map(function(d){ return d.status;}))
.padding(.4);
svgFinance.append("g")
.call(d3.axisLeft(y))

//Rectangular bars

.selectAll("rect")
.data(data)
.enter()
.append("rect")
.attr("x", x(0))
.attr("y", function(d){return y(d.status);})
.attr("width", function(d){return x(d.percent);})


.attr("height", y.bandwidth())
.attr("fill", function(d){return bar_colors(d.status);})
});




