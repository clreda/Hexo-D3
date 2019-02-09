function change(element) {
    d3.select('#'+element).style('color', 'red');
    d3.select('#'+element).style('font-size', '50px');
 }
     
 function remove() {
    d3.select("#list").selectAll("li")
    .data(["A", "B", "C", "E"])
    .exit()
    .remove()
 }

 function add() {
    d3.select("#list").selectAll("li")
    .data(["A", "B", "C", "D", "E"])
    .text(function(d) 
       { return d; })
    .enter()
    .append("li")
    .text(function(d) 
       { return d; });
 }

add()

function draw() {
 var width = 300;
 var height = 300;
 var svg = d3.select("#svgcontainer")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
 svg.append("ellipse")
    .attr("cx", 200)
    .attr("cy", 50)
    .attr("rx", 100)
    .attr("ry", 50)
    .attr("fill", "green")
}
