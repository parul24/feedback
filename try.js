console.log("xglknxlgv");
var w = 200;
var h = 400;
var padding = 2;
var dataset = [8,2,5,4,6];
var svg=d3.select("body").append("svg")
.attr("width",w)
.attr("height",h);

function colourPicker(v) {
  if (v<=20){return"#00CC99";}
  else if (v>20){return"#FF0033";}

}

svg.selectAll("rect").data(dataset).enter().append("rect")           
.attr({
  x: function(d,i) {return i * ( w / dataset.length);},
  y: function(d) {return h - (d*4);},
  width: w / dataset.length - padding,
  height: function(d){return d*4;},
  fill: function(d) {return colourPicker(d);} 

});
svg.selectAll("text")
.data(dataset
.enter()
.append("text")
.text (function(d){return d ; })
.attr({
text-anchor: middle,
x: function(d,i) {return i + (w / dataset.length) + (w / dataset.length-padding) / 2;}
y: function(d) {return h -(d*4)+14;}
"font-family": "sans-serif",
"font-size": 12,
"fill": "#ffffff"

});
