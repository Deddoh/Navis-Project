
// DEFAULT CHARTS
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

svgInvoice.selectAll("rect")
.data(data)
.enter()
.append("rect")
.transition()
.duration(2000)
// .on("click", placeholder)
.attr("x", x(0))
.attr("y", function(d){return y(d.daysOutstanding);})
.attr("width", function(d){return  x(d.invoiceValues);})
.attr("height", y.bandwidth())
.attr("fill", "blue");
svgInvoice.selectAll("text")
.data(data)
.enter()
.append("text")
.text(function(d){return d;})
.attr("y", function(d, i){
  return y(i) + y.bandwidth() / 2;
})
.attr("x", function(d){
  return x(d) - 25;
})
.attr("fill", "#000")
.attr("text-anchor", "end");
// .selectAll("text")
// .data(data)
// .enter()
// .append("text")
// .attr("text-anchor", "end")
// // .attr("y", function(d, i){
// //   return i * (height / 2) + 10;
// // })
// .attr("y", function(d, i){
//   return i * (height / data.length);})
// .attr("x", x(0))
// .attr("width", function(d){return  x(d.invoiceValues);})
// .text(function(d){return d + "$";})
// .attr("color", "red")

});

// .on("click", placeholder);

// event listener
// var placeholder = ()=>{
//   y.style("fill", "green")
//  svgInvoice.selectAll("text")
//    .data(data)
//    .enter()
//    .append("text")
//    .attr("x", x(0))
//     .attr("y", function(d) { return y(d.daysOutstanding) ; })
//   // .attr("dx", ".75em")
//   .text("width", function(d) { return x(d.invoiceValues); });

// }
// var placeholder = ()=>{
// svgInvoice.selectAll("text")
// .data(data)
// .enter()
// .append("text")
// .text(function(d){return d;})
// .attr("y", function(d, i){
//   return i * (height / data.length) + 10;
// })
// .attr("x", function(d){
//   return width - (d * 4) + 30;
// })
// .attr("fill", "red");
// }
// });




// end of invoice charts




// clients' pie chart

var h = 400;
var w = 360;
var margin = 20;


// radius
var radius = Math.min(width, height) / 2 + margin;

// setting the color
var color = d3.scaleOrdinal(d3.schemeCategory20b);
// .range(["blue", "green", "yellow", "red", "grey", "brown", "#ccc", "f1f1f1"]);


// constructing the arc generator with the default innerRadius, outerRadius, startAngle and endAngle accessor functions
var arc = d3.arc()
.innerRadius(0)
.outerRadius(radius);

var label = d3.arc()
.outerRadius(radius)
.innerRadius(radius + 20);

//pie function
var pie = d3.pie()
//not sorting
.sort(null)
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

//event listeners
var hover = ()=>{
g.append("text")
.attr("transform", function(d){return "transform", "translate(" + label.centroid(d) + ")";})
.style("text-anchor", "middle")
.style("font-size", 17)
.text(function(d){
   return "$" + d.data.Amount;
});
};

// append path, pie for each client
g.append("path")
.attr("d", arc)
.on("click", hover)
// .on("click", displayBarGraph())
.transition()
.duration(800)
.delay(50)
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
var margin = {top:20, right:0, bottom:40, left:150},
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
var format = d3.format(".1%");
data.forEach(function(d){
   format(d.percent) +"%";
});


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
.domain(data.map(function(d){ return  d.status;}))
.padding(.3);
svgFinance.append("g")
.call(d3.axisLeft(y))

//Rectangular bars

.selectAll("rect")
.data(data)
.enter()
.append("rect")
.transition()
.duration(2000)
.attr("x", x(0))
.attr("y", function(d){return y(d.status);})
.attr("width", function(d){return x(d.percent);})


.attr("height", y.bandwidth())
.attr("fill", function(d){return bar_colors(d.status);})
});


// title
svgFinance.append("text")
.attr("x", (width / 2))
.attr("y", 0 + (margin.top / 10))
.attr("text-anchor", "middle")
.style("font-size", "20px")
.style("font-weight", "bold")
.style("color", "blue")
.style("text-decoration", "underline")
.text("Portfolio Probability of Default");


// END OF DEFAULT CHARTS


// INVOICE MAIN CHART
// Invoice Bar Chart
//dimensions and margins of the graph
var margin = {top:20, right:50, bottom:40, left:140},
width = 460 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

//append svg object to the body

var svgMainInvoice = d3.select("#invoice-main-chart")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//add csv containing the data
d3.csv("invoiceData.csv", function(data){



//x axis

var x = d3.scaleLinear()
.domain([0, 16000])
//round to the nearest whole number
.rangeRound([0, width])
svgMainInvoice.append("g")

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
svgMainInvoice.append("g")
.call(d3.axisLeft(y))

//Rectangular bars

.selectAll("rect")
.data(data)
.enter()
.append("rect")
.transition()
.duration(2000)
.attr("x", x(0))
.attr("y", function(d){return y(d.daysOutstanding);})
.attr("width", function(d){return  x(d.invoiceValues);})


.attr("height", y.bandwidth())
.attr("fill", "blue")
// .on("mouseover", placeholder);

// event listener
var placeholder = ()=>{
  y.style("fill", "green")
 svgMainInvoice.selectAll("text")
   .data(data)
   .enter()
   .append("text")
   .attr("x", x(0))
    .attr("y", function(d) { return y(d.daysOutstanding) ; })
  // .attr("dx", ".75em")
  .text("width", function(d) { return x(d.invoiceValues); });

}
});




// END OF INVOICE CHART








//################### CLIENTS MAIN CHARTS ##################

// clients' pie chart

var h = 400;
var w = 360;
var margin = 20;


// radius
var radius = Math.min(width, height) / 2 + margin;

// setting the color
var color = d3.scaleOrdinal(d3.schemeCategory20b);
// .range(["blue", "green", "yellow", "red", "grey", "brown", "#ccc", "f1f1f1"]);


// constructing the arc generator with the default innerRadius, outerRadius, startAngle and endAngle accessor functions
var arc = d3.arc()
.innerRadius(0)
.outerRadius(radius);

var label = d3.arc()
.outerRadius(radius)
.innerRadius(radius + 20);

//pie function
var pie = d3.pie()
//not sorting
.sort(null)
// value to be computed will be Amount
.value(function(d){return d.Amount;});

//calling the DOM
var svgMainClients = d3.select("#clients-main-chart")
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
var g = svgMainClients.selectAll(".arc")
.data(pie(data))
.enter()
.append("g")
.attr("class", "arc");

//event listeners
var hover = ()=>{
g.append("text")
.attr("transform", function(d){return "transform", "translate(" + label.centroid(d) + ")";})
.style("text-anchor", "middle")
.style("font-size", 17)
.text(function(d){
   return "$" + d.data.Amount;
});
};

// append path, pie for each client
g.append("path")
.attr("d", arc)
.on("mouseover", function(d){hover();})
.on("click", function(d)
{
  updateBarGraph(d.data.customerB);
  // updateBarGraph(console.log(selectedVar);
  // get data using indexes
  // updateBarGraph()
  // console.log(d.data.client);})
})
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



//######################### FINANCE MAIN CHARTS #############################



// Invoice Bar Chart
//dimensions and margins of the graph
var margin = {top:20, right:50, bottom:40, left:140},
width = 460 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

//append svg object to the body

var svgMainFinance = d3.select("#finance-main-chart")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//add csv containing the data
d3.csv("financeData.csv", function(data){



//x axis

var x = d3.scaleLinear()
.domain([0, 760000])
//round to the nearest whole number
.rangeRound([0, width])
svgMainFinance.append("g")

.attr("transform", "translate(0, " + height + ")")
.call(d3.axisBottom(x))
.selectAll("text")
.attr("transform", "translate(-10, 0)rotate(-45)")
.style("text-anchor", "end");



//Y axis

var y = d3.scaleBand()
.range([0, height])
.domain(data.map(function(d){ return d.collection;}))
.padding(.5);
svgMainFinance.append("g")
.call(d3.axisLeft(y))

//Rectangular bars

.selectAll("rect")
.data(data)
.enter()
.append("rect")
.transition()
.duration(2000)
.attr("x", x(0))
.attr("y", function(d){return y(d.collection);})
.attr("width", function(d){return  x(d.amountInKes);})


.attr("height", y.bandwidth())
.attr("fill", "blue")
// .on("click", placeholder);

// event listener
var placeholder = ()=>{
  y.style("fill", "green")
 svgMainFinance.selectAll("text")
   .data(data)
   .enter()
   .append("text")
   .attr("x", x(0))
    .attr("y", function(d) { return y(d.collection) ; })
  // .attr("dx", ".75em")
  .text("width", function(d) { return x(d.amountInKes); });

}
});

// STATUS CHECK CHART


//dimensions and margins of the graph
var margin = {top:20, right:0, bottom:40, left:150},
width = 460 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

//append svg object to the body

var svgMainFinanceStatus = d3.select("#status-check-chart")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//add csv containing the data

d3.csv("status.csv", function(data){
var format = d3.format(".0%");
data.forEach(function(d){
   format(d.percent) +"%";
});


//x axis

var x = d3.scaleLinear()
.domain([0, 100]) 
//round to the nearest whole number
.rangeRound([0, width])
svgMainFinanceStatus.append("g")

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
.domain(data.map(function(d){ return  d.status;}))
.padding(.3);
svgMainFinanceStatus.append("g")
.call(d3.axisLeft(y))

//Rectangular bars

.selectAll("rect")
.data(data)
.enter()
.append("rect")
.transition()
.duration(2000)
.attr("x", x(0))
.attr("y", function(d){return y(d.status);})
.attr("width", function(d){return x(d.percent);})


.attr("height", y.bandwidth())
.attr("fill", function(d){return bar_colors(d.status);})
});


// title
svgMainFinanceStatus.append("text")
.attr("x", (width / 2))
.attr("y", 0 + (margin.top / 10))
.attr("text-anchor", "middle")
.style("font-size", "20px")
.style("font-weight", "bold")
.style("color", "blue")
.style("text-decoration", "underline")
.text("Portfolio Probability of Default");









// ########################### ONCLICK PIE CHART FUNCTIONS ###############################




// Invoice Bar Chart
//dimensions and margins of the graph

var margin = {top:20, right:50, bottom:40, left:140},
width = 460 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

//append svg object to the body

var svgPieData = d3.select("#slice-bar-chart")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


var updateBarGraph = (selectedVar)=>{
//add csv containing the data
d3.csv("pieSliceData.csv", function(data){



//x axis

var x = d3.scaleLinear()
.domain([0, d3.max(data, function(d){ return +d[selectedVar]; })])
//round to the nearest whole number
.rangeRound([0, width]);
var x_axis = svgPieData.append("g")
.attr("class", "myXaxis")
.transition()
.duration(1000)
.attr("transform", "translate(0, " + height + ")")
.call(d3.axisBottom(x))
.selectAll("text")
.attr("transform", "translate(-10, 0)rotate(-45)")
.style("text-anchor", "end");



var y = d3.scaleBand()
.range([0, height])
.domain(data.map(function(d){ return d.period;}))
.padding(.4);
var y_axis = svgPieData.append("g")
.transition()
.duration(1000)
.call(d3.axisLeft(y));

//Rectangular bars

    // variable m: map data to existing bars
 var m = svgPieData.selectAll("rect")
.data(data)
m.enter()
.append("rect")
.merge(m)
.transition()
.duration(1000)
.attr("x", x(0))
// .attr("x", function(d){return x(d[selectedVar]);})

.attr("y", function(d){return y(d.period);})
.attr("width", function(d) { return x(d[selectedVar]); })
.attr("height", y.bandwidth())
.attr("fill", "blue");
m.exit()
m.remove();
  });

}

// Initialize plot
updateBarGraph('customerA');




// end of invoice charts