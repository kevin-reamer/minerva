﻿/*
   version 141028.0950
*/
(function () {

var mvConfig = function()
{
	//------      Section 1: Internal variables      ------//
			
	//The DEFAULT mode (dev or prod) of the URL 
	var defaultPathConfig = {
		basePath: "../../minerva",
		mode: "dev"
	};
	
	//The DEFAULT full path to the minerva templates folder
	var fullPath = "../../minerva/dev/";
	
	/*------      Section 2: Configuration Methods   ------// 
	      Methods set on the "this" object will be exposed
	      to be configured by the app.config function
	*/
	
	this.setPath = function(userPathConfig){
		var pathConfig = {};
		//Override the default config with any user defined config
		angular.extend(pathConfig, defaultPathConfig, userPathConfig)
		//construct new path to point to correct minerva on the server
		fullPath = pathConfig.basePath + "/" + pathConfig.mode + "/";	
	};  
			
	/*------      Section 3: Service Definition      ------// 
	      Defines a simple service object that will be
	      passed to the minerva directive exposing the
	      path to the minerva templates.
	*/
	var service	= {
		templatesPath: function(){
			return fullPath + 'templates/';
		},
		mapsPath: function(){
			return fullPath + 'maps/';
		}
	}
	
	//Return the service
	this.$get = function(){
		return service;
	};
}
/*
   Title: Minerva Header
   Description: Defines a generic header for the Minerva body container
   Parameters: 
     	mv-Title: The title of the header
*/
var mvHeader = function(minerva)
{
   return {
      restrict:      'E',
      transclude:    true,
      replace:       true,
      scope: {
         mvTitle:    '@'
      },
      templateUrl:   minerva.templatesPath() + 'mv-header.txt'
   };
};

/*
   Title: Minerva Body
   Description: Defines the body of the grid container
   Parameters:
    	mv-Rows: The number of rows needed in the body grid 
*/
var mvBody = function(minerva)
{
   return {
      restrict:      'E',
      transclude:    true,
      replace:       true,
      scope: {
         mvRows:       '@'
      },
      templateUrl:   minerva.templatesPath() + 'mv-body.txt'
   };
};

/*
   Title: Minerva Footer
   Description: Defines a container for a footer to the body
   Parameters: N/A
*/
var mvFooter = function(minerva)
{
   return {
      restrict:      'E',
      transclude:    true,
      replace:       true,
      templateUrl:   minerva.templatesPath() + 'mv-footer.txt'
   };
};

/*
   Title: Minerva Row
   Description: Defines a container for a row of content
   Parameters: N/A
*/
var mvRow = function(minerva)
{
   return {
      restrict:      'E',
      transclude:    true,
      replace:       true,
      templateUrl:   minerva.templatesPath() + 'mv-row.txt'
   };
};

/*
   Title: Minerva Group
   Description: Defines a container for grouping grid element. This is mostly
   				used to group elements on the same row. It can also be used to
   				define empty sections of the grid as place holders.
   Parameters:
   		 mv-Size: The size of the group with height and width dimensions as a string
   		 mv-Style: Any custom style for the table
*/
var mvGroup = function(minerva)
{
   return {
      restrict:      'E',
      transclude:    true,
      replace:       true,
      scope: {
         mvSize:     '@',
         mvStyle:    '@'
      },
      templateUrl:   minerva.templatesPath() + 'mv-group.txt'
   };
};


/*
   Title: Minerva Any Num
   Description: Define a dynamic table displaying a series of numbers
   Parameters:
   		mv-Data: Date needed for the table
   		mv-Id: The ID of the inner container
   		mv-ID-Head: The ID of the container header
   		mv-Title: The title of the container
   		mv-Size: The size of the container passed as a string representing the height x width. Ex. "1x3"

*/
var mvAnyNum = function(minerva) 
{
   return {
      restrict:      'E',
      replace:       true,
      scope: {
         mvData:     '=',
         mvId:       '@',
         mvIdHead:   '@',
         mvTitle:    '@',
         mvSize:     '@'
      },
      templateUrl:   minerva.templatesPath() + 'mv-any-num.txt'
   };
};

/*
   Title: Minerva ID Box
   Description: Defines an empty grid container of a specified size
   Parameters: 
   		mv-Id: The ID of the outer container
   		mv-Body-Id: The ID of the inner container
   		mv-Title: The title of the container
   		mv-Size: The size of the container passed as a string representing the height x width. Ex. "3x3"
*/
var mvIdBox = function(minerva)
{
   return {
      restrict:      'E',
      transclude:    true,
      replace:       true,
      scope: {
         mvId:       '@',
         mvBodyId:   '@',
         mvTitle:    '@',
         mvSize:     '@'
      },
      templateUrl:   minerva.templatesPath() + 'mv-id-box.txt'
   };
};

/*
   Title: Minerva Table
   Description: Defines a generic table
   Parameters: 
   		mv-Data: Date needed for the table
   		mv-Id: A unique is given for the table widget
   		mv-Title: The title of the table container
   		mv-Size: The size of the container passed as a string representing the height x width. Ex. "3x3"
   		mv-Style: Any custom style for the table
*/
var mvTable = function(minerva)
{
   return {
      restrict:      'E',
      replace:       true,
      scope: {
         mvData:     '=',
         mvId:       '@',
         mvTitle:    '@',
         mvSize:     '@',
         mvStyle:    '@'
      },
      templateUrl:   minerva.templatesPath() + 'mv-table.txt'
   };
};

/*
   Title: Minerva Table List 
   Description: Defines container which contain a series of small tables
   Parameters:
   		mv-Data: Date needed for the table(s)
   		mv-Id: A unique is given for the table widget
   		mv-Title: The title of the table container
   		mv-Size: The size of the container passed as a string representing the height x width. Ex. "3x3"
   		mv-Style: Any custom style for the table 
*/
var mvTableList = function(minerva)
{
   return {
      restrict:      'E',
      replace:       true,
      scope: {
         mvData:     '=',
         mvId:       '@',
         mvTitle:    '@',
         mvSize:     '@',
         mvStyle:    '@'
      },
      templateUrl:   minerva.templatesPath() + 'mv-table-list.txt'
   };
};

/*
   Title: mvChart
   Description: create a variety of charts using D3.js
   Parameters: mvData - dataset for the chart to read
               mvOptions - chart options to pass in, you only need to pass in values to override defaults
*/
var mvChart = function(minerva)
{  
   return { 
      restrict:      'E', 
      scope: { 
         mvData:     '=', 
         mvOptions:  '='
      }, 
      link: function(scope, element, attrs, ctrl, transclude)
      {
         //set defaults
         var defaultOptions = {
            chart: {
               height: 450,
               width: 640,
               margin: {
                  top: 40, 
                  right: 20, 
                  bottom: 20, 
                  left: 50
               },
               colors: ["#427A82", "#51BF96", "#FBD163", "#F29A3F", "#DB5957"],
               backgroundColor: '#F3F3F3',
               sort: '',
               inverse: false,
               type: 'bar'
            },
            legend: {
               enabled: false,
               color: '#A6A6A6'
            },
            tooltip: {
               color: '#888888',
               format: ''
            },
            xAxis: {
               title: {
                  color: '#A6A6A6',
                  size: '0.7em',
                  text: 'X Axis'
               },
               labels: {
                  format: '',
                  color: '#A6A6A6'
               },
               orient: 'bottom',
               spacing: null,
               tickSize: 6,
               tickPadding: 3
            },
            yAxis: {
               title: {
                  color: '#A6A6A6',
                  size: '0.7em',
                  text: 'Y Axis'
               },
               labels: {
                  format: '0',
                  color: '#A6A6A6'
               },
               orient: 'left',
               tickSize: 6,
               tickPadding: 3,
               min: 0
            },
            types: {
               bar: {
                  stacked: false,
                  grouped: false,
                  stacking: 'normal' //'normal' or 'percent'
               },
               pie: {
                  labels: {
                     enabled: false,
                     color: '#FFFFFF'
                  },
                  burst: false,
                  scale: 100,
                  innerRadius: 0
               },
               bubble: {
                  scale: 60
               },
               map: {
                  mapfile: 'us-states',
                  quantizeScale: [0, 100],
                  globe: false,
                  grid: false,
                  zoom: false,
                  rotate: false
               }
            }
         };
         
         //chart variables
         var svg = null;
         var o = null;
         var margin = null;
         var xOrient = null;
         var yOrient = null;
         var height = null;
         var width = null;
         var x = null;
         var y = null;
         var color = null;
         var xAxis = null;
         var yAxis = null;
         var tip = null;
         var data = [0];
         
         function updateChart()
         {
            //check if 
            if (scope.mvData != undefined)
            {
               data = scope.mvData;
            }
            else
            {
               return;
            }
            
            o = extendDeep(defaultOptions, scope.mvOptions);
            
            //set the attributes of the chart
         
            //margin and height/width         
            margin = o.chart.margin,
            height = o.chart.height - margin.top - margin.bottom,
            width = o.chart.width - margin.left - margin.right;
            
            //chart orientation
            xOrient = o.xAxis.orient;
            yOrient = o.yAxis.orient;
            if (o.chart.inverse == true)
            {
               //flip chart orientation
            }
            
            //scale
            var xPadding = 1; //padding between x values
            var xSpacing = 0; //padding between y axis and start of x
            
            switch (o.chart.type)
            {
               case 'bar':
                  xPadding = .1; //axis label centered on bar
                  if (o.xAxis.spacing == null)
                  {
                     xSpacing = 1;
                  }
                  break;
               case 'line':
                  xPadding = 1; //axis label aligned with value
                  if (o.xAxis.spacing == null)
                  {
                     xSpacing = 1;
                  }
                  break;
            }
            //if spacing for x axis is defined
            if (o.xAxis.spacing != null)
            {
               xSpacing = o.xAxis.spacing;
            }
            
            x = d3.scale.ordinal()
               .rangeRoundBands([0, width], xPadding, xSpacing);
            
            y = d3.scale.linear()
               .range([height, 0]);
            
            //colors
            color = d3.scale.ordinal()
               .range(o.chart.colors);
            
            //x axis formatting
            xAxis = d3.svg.axis()
               .scale(x)
               .orient(xOrient)
               .tickSize([o.xAxis.tickSize])
               .tickPadding([o.xAxis.tickPadding]);
            if (o.xAxis.labels.format != '')
            {
               xAxis.tickFormat(d3.format(o.xAxis.labels.format));
            }            
            
            //y axis formatting
            yAxis = d3.svg.axis()
               .scale(y)
               .orient(yOrient)
               .tickSize([o.yAxis.tickSize])
               .tickPadding([o.yAxis.tickPadding]);
            if (o.yAxis.labels.format != '')
            {
               yAxis.tickFormat(d3.format(o.yAxis.labels.format));
            }
            
            //end setting chart attributes
            
            element.empty(); //make sure the element is empty so you don't duplicate
            
            svg = d3.select(element[0]).append("svg")
                     .attr("width", width + margin.left + margin.right)
                     .attr("height", height + margin.top + margin.bottom)
                     .attr('fill', o.chart.backgroundColor)
                   .append("g")
                     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
               
            //create map of keys
            color.domain(d3.keys(data[0]).filter(function(key) { return key !== 'x'; }));
            
            data.forEach(function(d) {
               d.y = +d.y;
            });
            
            //tooltip
            tip = d3.tip()
               .attr('class', 'mvTip')
               .offset([-10, 0])
               .html(function(d) {
                  var title = d.x;
                  var tipData = tipformat(d.y);
                  switch (o.chart.type)
                  {
                     case 'bar':
                        if (o.types.bar.stacked == true)
                        {
                           var tipData = tipformat(d.y1 - d.y0); //calculate difference between two y values
                        }
                        break;
                     case 'bubble':
                        title = d.id + '<br/>' + d.label;
                        tipData = tipformat(d.value);
                        break;
                     case 'pie':
                        title = d.data.x;
                        tipData = tipformat(d.data.y);
                        break;
                     case 'scatter':
                        title = d.z;
                        tipData = d.x + ', ' + d.y;
                        break;
                     case 'map': //TODO: fix
                        switch (o.types.map.mapfile)
                        {
                           case 'afg':
                              title = d.properties.name;
                              tipData = map.get(d.id);
                              break;
                           default:
                              title = d.id;
                              tipData = map.get(d.id);
                              break;
                        }
                        
                  }               
                  return '<strong>' + title + ':</strong> <span style="color:' + o.tooltip.color + '">' + tipData + '</span>'; 
               });
            
            svg.call(tip);
            
            switch (o.chart.type)
            {
               case 'pie':
                  var radius = Math.min(width, height) / 2;
                  
                  //define pie
                  var pie = d3.layout.pie()
                     .sort(null)
                     .value(function(d) { return d.y; });
                  
                  //define arc
                  if (o.types.pie.burst == false)
                  {
                     var arc = d3.svg.arc()
                        .outerRadius(radius - 10)
                        .innerRadius(o.types.pie.innerRadius); //increase inner radius to create donut chart
                  }
                  else //burst chart arc
                  {
                     var arc = d3.svg.arc()
                       .outerRadius(function(d) { 
                         return (radius - o.types.pie.innerRadius) * (d.data.y / o.types.pie.scale) + o.types.pie.innerRadius; 
                       })
                       .innerRadius(o.types.pie.innerRadius);
                  }
                  
                  //redo color domain for pie data
                  color.domain(d3.keys(data[0].data).filter(function(key) { return key !== 'x'; }));
                  
                  var g = svg.selectAll(".arc")
                     .data(pie(data))
                   .enter().append("g")
                     .attr("class", "arc")
                     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
               
                  g.append("path")
                     .attr("d", arc)
                     .style("fill", function(d) { return color(d.data.x); }) //colors of pie slices
                     .on('mouseover', tip.show)
                     .on('mouseout', tip.hide);
   
                  if (o.types.pie.labels.enabled == true)
                  {
                     g.append("text")
                        .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
                        .attr("dy", ".35em")
                        .style("text-anchor", "middle")
                        .text(function(d) { return d.data.x; })
                        .style('fill', o.types.pie.labels.color);
                  }
                  break;
                  
               case 'map':
                  var map = d3.map();
                  
                  var g = svg.append("g");
                  
                  var quantize = d3.scale.quantize()
                     .domain(o.types.map.quantizeScale)
                     .range(d3.range(9).map(function(i) { return 'q' + i; }));
                  
                  var projection = null;
                                 
                  data.forEach(function(d) {
                     map.set(d.x, +d.y);
                  });
                  
                  //define the map file
                  var mapFile = '';
                  switch (o.types.map.mapfile)
                  {
                     case 'world':
                        mapFile = minerva.mapsPath() + 'world-50m.txt';
                        if (o.types.map.globe == true)
                        {
                           projection = d3.geo.orthographic()
                              .scale(width * 0.5) //size of map
                              .translate([width / 2, height / 2]) //move map to center
                              .clipAngle(90);
                        }
                        else //map projection
                        { //d3.geo.equirectangular()
                           projection = d3.geo.mercator()
                              .scale(width / 2 / Math.PI) //size of map
                              .translate([width / 2, height / 2]); //move map to center
                        }
                        break;
                     case 'afg':
                        mapFile = minerva.mapsPath() + 'afg.txt';
                        projection = d3.geo.mercator()
                           .center([67.5, 34])
                           .scale(width * 4.2) //size of map
                           .translate([width / 2, height / 2]); //move map to center
                        break;
                     default:
                        mapFile = minerva.mapsPath() + 'us.txt';
                        projection = d3.geo.albersUsa()
                           .scale(width * 1.5) //size of map
                           .translate([width / 2, height / 2]); //move map to center
                        break;
                  }
                  
                  if (o.types.map.zoom == true)
                  {
                     var zoom = d3.behavior.zoom()
                        .scaleExtent([1, 8])
                        .on("zoom", zoomed);
                     
                     svg.call(zoom)
                        .call(zoom.event);
                  }
                  var path = d3.geo.path()
                     .projection(projection);
                  
                  d3.json(mapFile, function(error, json)
                  {
                     var topoFeature = null;
                     var outlineFeature = null;
                     //determine what part of the json object will be used for the shapes and outlines
                     switch (o.types.map.mapfile)
                     {
                        case 'afg':
                           topoFeature = json.objects.afghan;
                           outlineFeature = json.objects.afghan;
                           break;
                        case 'us-counties':
                           topoFeature = json.objects.counties;
                           outlineFeature = json.objects.states;
                           break;
                        case 'us-states':
                           topoFeature = json.objects.states;
                           outlineFeature = json.objects.states;
                           break;
                        case 'world':
                           topoFeature = json.objects.countries;
                           outlineFeature = json.objects.countries;
                           break;
                        default:
                           topoFeature = json.objects.states;
                           outlineFeature = json.objects.states;
                           break;
                     }
                     if (o.types.map.globe == false)
                     { 
                        g.append("g")
                           .attr("class", o.types.map.mapfile)
                         .selectAll("path")
                           .data(topojson.feature(json, topoFeature).features)
                         .enter().append("path")
                           .attr("class", function(d) { return quantize(map.get(d.id)); })
                           .attr("d", path)
                           .on('mouseover', tip.show)
                           .on('mouseout', tip.hide);
                        
                        g.append("path")
                           .datum(topojson.mesh(json, outlineFeature, function(a, b) { return a !== b; }))
                           .style('fill', 'none')
                           .style('stroke', '#FFFFFF')
                           .style('stroke-linejoin', 'round')
                           .attr("d", path);
                     }
                     else //globe specific code
                     {
                        var time = Date.now();
                        var m0, o0; //variables for mouse up and down rotation
                        
                        d3.select(element[0])
                           .on("mousemove", mousemove)
                           .on("mouseup", mouseup);
                        
                        svg.on("mousedown", mousedown);
                        
                        var globe_shading = svg.append("defs").append("radialGradient")
                           .attr("id", "globe_shading")
                           .attr("cx", "55%")
                           .attr("cy", "45%");
                        globe_shading.append("stop")
                           .attr("offset","60%").attr("stop-color", "#fff")
                           .attr("stop-opacity","0")
                        globe_shading.append("stop")
                           .attr("offset","100%").attr("stop-color", "#7B8996")
                           .attr("stop-opacity","0.2")
                        
                        //display globe                
                        g.append("circle")
                           .attr("cx", width / 2).attr("cy", height / 2)
                           .attr("r", projection.scale());
                        
                        //display grid
                        if (o.types.map.grid == true)
                        {
                           var graticule = d3.geo.graticule();
                           
                           g.append("path")
                              .datum(graticule)
                              .attr("class", "graticule")
                              .attr("d", path);
                        }
                        
                        //display the countries
                        g.append("g")
                         .selectAll("path")
                           .data(topojson.feature(json, topoFeature).features)
                         .enter().append("path")
                           .attr("class", function(d) { return 'world ' + quantize(map.get(d.id)); })                     
                           .attr("d", path)
                           .on('mouseover', tip.show)
                           .on('mouseout', tip.hide);
                        
                        //display map shading                       
                        g.append("circle")
                           .attr("cx", width / 2).attr("cy", height / 2)
                           .attr("r", projection.scale())
                           .style("fill", "url(#globe_shading)");
                        /*
                        svg.append("g").attr("class","points")
                           .selectAll("text").data(places.features)
                         .enter().append("path")
                           .attr("class", "point")
                           .attr("d", path);*/
                           
                        if (o.types.map.rotate == true)
                        {
                           d3.timer(function() {
                              var dt = Date.now() - time;
                              projection.rotate([10 + 0.003 * dt, 0]);
                              svg.selectAll("path").attr("d", path);
                           });
                        }
                     }
                  });
                  break;
                  
               case 'bubble':
                  var center = {x: width / 2, y: height / 2};
                  
                  //get the unique key for each group and deduplicate them
                  var uniqueKeys = [];
                  var dedupulicator = {};
                  data.forEach(function(d, i) {
                     //if it's a new key, add it, otherwise skip it
                     if (dedupulicator[d.x] == undefined)
                     {
                        dedupulicator[d.x] = '';
                        uniqueKeys.push(d.x);
                     }
                  });
                  
                  var groupCenters = []; //center of each group
                  uniqueKeys.forEach(function(d, i) {
                     groupCenters[d] = {x: ((width / uniqueKeys.length + 1) * (i + 0.5)), y: height / 2};
                  });
                  
                  var groupsX = []; //label position for each group
                  uniqueKeys.forEach(function(d, i) {
                     groupsX[d] = ((width / uniqueKeys.length + 1) * (i + 0.5));
                  });
   
                  var layoutGravity = -0.01,
                      damper = 0.1,
                      nodes = [],
                      force, 
                      bubbleView = 'all';
                  
                  var maxAmount = d3.max(data, function(d) { return parseInt(d.y, 10); } );
                  var radiusScale = d3.scale.pow().exponent(0.5).domain([0, maxAmount]).range([2, o.types.bubble.scale]);
                  
                  data.forEach(function(d) {
                     var node = {
                        id: d.x,
                        label: d.label,
                        radius: radiusScale(parseInt(d.y, 10)),
                        value: d.y,
                        x: Math.random() * 900,
                        y: Math.random() * 800
                     };
                     nodes.push(node);
                  });
                  
                  nodes.sort(function(a, b) { return b.id - a.id; });
                  
                  //redo color for nodes
                  color.domain(d3.keys(nodes[0]).filter(function(key) { return key !== 'x'; }));
                  
                  var circles = svg.selectAll('circle')
                     .data(nodes, function(d) { return d.x; });
                     
                  circles.enter().append('circle')
                     .attr('r', 0)
                     .attr('fill', function(d) { return color(d.id); })
                     .attr('stroke-width', 1)
                     .attr('stroke', function(d) { return d3.rgb(color(d.id)).darker(); })
                     .attr('id', function(d) { return 'bubble_' + d.id; })
                     .on('click', function() { toogleBubble() })
                     .on('mouseover', tip.show)
                     .on('mouseout', tip.hide);
   
                     
                  circles.transition().duration(2000).attr('r', function(d) { return d.radius; });
                  
                  start();
                  displayStart();
                      
                  break;
               default:
                  x.domain(data.map(function(d) { return d.x; })); //x axis range
                  y.domain([0, d3.max(data, function(d) { return d.y; })]); //y axis range
                  
                  switch (o.chart.type)
                  {
                     case 'bar':
                        if (o.types.bar.stacked == true || o.types.bar.grouped == true) //stacked or grouped bar chart
                        {
                           if (o.types.bar.grouped == true) //grouped bar chart
                           {  
                              //redo color domain to filter out added information
                              color.domain(d3.keys(data[0]).filter(function(key) { return (key !== 'x' && key !== 'y' && key !== 'total' && key !== 'data'); }));
                              var names = d3.keys(data[0]).filter(function(key) { return (key !== 'x' && key !== 'y' && key !== 'total' && key !== 'data'); });;
   
                              data.forEach(function(d) {
                                 d.data = color.domain().map(function(dn) { return {x: dn, y: +d[dn]}; });
                              });
                              
                              //add new x1 and domain
                              var x1 = d3.scale.ordinal();
                              x1.domain(names).rangeRoundBands([0, x.rangeBand()]);
                              y.domain([0, d3.max(data, function(d) { return d3.max(d.data, function(d) { return d.y; }); })]);
                           }
                           else //stacked bar chart
                           {
                              //redo color domain to filter out added information
                              color.domain(d3.keys(data[0]).filter(function(key) { return (key !== 'x' && key !== 'y' && key !== 'total' && key !== 'data'); }));
                              
                              data.forEach(function(d) {
                                 var y0 = 0;
                                 d.data = color.domain().map(function(dn) { return {x: dn, y0: y0, y1: y0 += +d[dn]}; });
                                 switch(o.types.bar.stacking)
                                 {
                                    case 'normal':
                                       break;
                                    case 'percent':
                                       d.data.forEach(function(d) { d.y0 /= y0; d.y1 /= y0; });
                                       //change formatting to percentage
                                       yAxis.tickFormat(d3.format('0%'));
                                       o.tooltip.format = '0%';
                                       break;
                                 }
                                 d.total = d.data[d.data.length - 1].y1;
                              });
                              
                              y.domain([0, d3.max(data, function(d) { return d.total; })]);
                           }
                           
                           //create object for legend
                           var multibar = color.domain().map(function(dn) {
                              return {
                                 x: dn,
                                 values: data.map(function(d) {
                                    return {x: d.x, y: +d[dn]};
                                 })
                              };
                           });
                           
                           //create each grouping for stacked or grouped bars
                           var bars = svg.selectAll('.bars')
                              .data(data)
                            .enter().append('g')
                              .attr("class", "g")
                              .attr("transform", function(d) { return "translate(" + x(d.x) + ",0)"; });
                           
                           bars.selectAll(".bar")
                              .data(function(d) { return d.data })
                            .enter().append("rect")
                              .attr("class", "bar")
                              .style("fill", function(d) { return color(d.x); })
                              .on('mouseover', tip.show)
                              .on('mouseout', tip.hide);
   
                           if (o.types.bar.grouped == true) //grouped bar chart
                           {
                              bars.selectAll('.bar')
                                 .attr("x", function(d) { return x1(d.x); })
                                 .attr("y", function(d) { return y(d.y); })
                                 .attr("height", function(d) { return height - y(d.y); })
                                 .attr("width", x1.rangeBand());
                           }
                           else //stacked bar chart
                           {
                              bars.selectAll('.bar')
                                 .attr("y", function(d) { return y(d.y1); })
                                 .attr("height", function(d) { return y(d.y0) - y(d.y1); })
                                 .attr("width", x.rangeBand())
                           }
                        }
                        else
                        {
                           svg.selectAll(".bar")
                              .data(data)
                            .enter().append("rect")
                              .attr("class", "bar")
                              .attr("x", function(d) { return x(d.x); })
                              .attr("width", x.rangeBand())
                              .attr("y", function(d) { return y(d.y); })
                              .attr("height", function(d) { return height - y(d.y); })
                              .style("fill", function(d) { return color(d.x); })
                              .on('mouseover', tip.show)
                              .on('mouseout', tip.hide);
                        }
                        break;
                        
                     case 'line':
                        //define lines
                        var lines = color.domain().map(function(dn) {
                           return {
                              x: dn,
                              values: data.map(function(d) {
                                 return {x: d.x, y: d[dn]};
                              })
                           };
                        });
                        
                        //set minimum for y axis
                        var yDomainMin = 0;
                        if (o.yAxis.min == 'min')
                        {
                           yDomainMin = d3.min(lines, function(c) { return d3.min(c.values, function(v) { return v.y; }); });
                        }
                        else
                        {
                           yDomainMin = parseInt(o.yAxis.min);
                        }
                        //define y axis again to account for multiple lines
                        y.domain([
                           yDomainMin,
                           d3.max(lines, function(c) { return d3.max(c.values, function(v) { return v.y; }); })
                        ]);
     
                        //define line
                        var line = d3.svg.line()
                           .x(function(d) { return x(d.x); })
                           .y(function(d) { return y(d.y); })
                           .defined(function(d) { return d.y != null; });
                           
                        var zn = svg.selectAll(".zn")
                            .data(lines)
                          .enter().append("g")
                            .attr("class", "zn");
            
                        zn.append('path')
                           .attr('class', 'line')
                           .attr('d', function(d) { return line(d.values); })
                           .style('stroke', function(d) { return color(d.x); });
                                             
                        break;
                        
                     case 'scatter': //scatter plot chart
                        //create order
                        var order = {};
                        data.forEach(function(d) {
                           order[d.z] = '';
                        });
                        //redo color domain for z
                        color.domain(d3.keys(order));
                     
                        svg.selectAll(".dot")
                           .data(data)
                         .enter().append("circle")
                           .attr("class", "dot")
                           .attr("r", 3.5)
                           .attr("cx", function(d) { return x(d.x); })
                           .attr("cy", function(d) { return y(d.y); })
                           .style("fill", function(d) { return color(d.z); })
                           .on('mouseover', tip.show)
                           .on('mouseout', tip.hide);
                        break;
                  }
                  
                  //add x axis
                  svg.append("g")
                     .attr("class", "x axis") //class for x axis
                     .style("fill", o.xAxis.labels.color) //label color for x axis
                     .attr("transform", "translate(0," + height + ")") //height for x axis
                     .call(xAxis)
                   .append("text") //x axis title
                     .attr("x", width / 2 )
                     .attr("y", margin.bottom * 2)
                     .style("text-anchor", "middle")
                     .style("fill", o.xAxis.title.color)
                     .text(o.xAxis.title.text);
                  
                  //add y axis
                  svg.append("g")
                     .attr("class", "y axis")
                     .style("fill", o.yAxis.labels.color)
                     .call(yAxis)
                   .append("text") //y axis title
                     .attr("transform", "rotate(-90)")
                     .attr("y", 6)
                     .attr("dy", o.yAxis.title.size)
                     .style("text-anchor", "end")
                     .style("fill", o.yAxis.title.color)
                     .text(o.yAxis.title.text);
                     
                  break;
            }
            
            //tooltip format
            var tipformat = d3.format(o.tooltip.format);
   
            //chart legend
            if (o.legend.enabled == true)
            {
               var legendData = data;
               switch (o.chart.type)
               {
                  case 'line':
                     legendData = lines; //change so that legend uses the line categories instead
                     break;
               }      
               
               var legend = svg.selectAll(".legend")
                  .data(legendData)
                .enter().append("g")
                  .attr("class", "legend")
                  .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; }); //space between legend items
            
               legend.append("rect")
                  .attr("x", width - 25)
                  .attr("y", 0)
                  .attr("width", 18)
                  .attr("height", 18)            
                  .style("fill", function(d) { return color(d.x) });
            
               legend.append('text')
                  .attr('x', width)
                  .attr('y', 9)
                  .attr('dy', '.35em')
                  .style('fill', o.legend.color)
                  .style('text-anchor', 'start')
                  .text(function(d) { return d.x; });
            }
              
            //sort chart   
            if (o.chart.sort != '')
            {
               sortChart();
            }
         } //end updateChart
         
         updateChart();
         
         //watch mvData for changes and update the chart
         scope.$watch('mvData', updateChart, true);
         
         //bubble chart functions
         function charge(d) {
            return -Math.pow(d.radius, 2.0) / 8;
         }
         
         function start() {
            force = d3.layout.force()
               .nodes(nodes)
               .size([width,height]);
         }
         
         function displayStart() {
            force.gravity(layoutGravity) //start by moving away
               .charge(charge)
               .friction(0.9)
             .on('tick', function(e) {
               circles.each(moveTowardsGroup(e.alpha))
                  .attr('cx', function(d) { return d.x; })
                  .attr('cy', function(d) { return d.y; });
            });
            setTimeout(function() { //delay and then move back towards center
               force.gravity(layoutGravity)
                  .charge(charge)
                  .friction(0.9)
                .on('tick', function(e) {
                  circles.each(moveTowardsCenter(e.alpha))
                     .attr('cx', function(d) { return d.x; })
                     .attr('cy', function(d) { return d.y; });
               });
            }, 1000);
            force.start();
         }
         
         function displayGroupAll() {
            force.gravity(layoutGravity)
               .charge(charge)
               .friction(0.9)
             .on('tick', function(e) {
               circles.each(moveTowardsCenter(e.alpha))
                  .attr('cx', function(d) { return d.x; })
                  .attr('cy', function(d) { return d.y; });
            });
            force.start();
            hideGroups();
         }
         
         function moveTowardsCenter(alpha) {
            return function(d) {
               d.x = d.x + (center.x - d.x) * (damper + 0.02) * alpha;
               d.y = d.y + (center.y - d.y) * (damper + 0.02) * alpha;
            }
         }
         
         function displayByGroup() {
            force.gravity(layoutGravity)
               .charge(charge)
               .friction(0.9)
             .on('tick', function(e) {
               circles.each(moveTowardsGroup(e.alpha))
                  .attr('cx', function(d) { return d.x; })
                  .attr('cy', function(d) { return d.y; });
            });
            force.start();
            displayGroups();
         }
         
         function moveTowardsGroup(alpha) {
            return function(d) {
               var target = groupCenters[d.id];
               d.x = d.x + (target.x - d.x) * (damper + 0.02) * alpha;
               d.y = d.y + (target.y - d.y) * (damper + 0.02) * alpha;
            }
         }
         
         function displayGroups() {                  
            var groupsData = d3.keys(groupsX);
            var groups = svg.selectAll('.groups')
               .data(groupsData);
       
            groups.enter().append('text')
               .attr('class', 'groups')
               .attr('fill', '#A6A6A6')
               .attr('x', function(d) { return groupsX[d]; })
               .attr('y', 10)
               .attr('text-anchor', 'middle')
               .text(function(d) { return d;});
         }
       
         function hideGroups() {
            var groups = svg.selectAll('.groups').remove();
         }
         
         //toggle the view
         function toogleBubble() {
            console.log('toggle');
            if (bubbleView == 'all') {
               displayByGroup();
               bubbleView = 'group'
            } 
            else
            {
               displayGroupAll();
               bubbleView = 'all'
            }
         }
         //end bubble chart functions
         
         //map rotation functions
         function refresh() {
            svg.selectAll("path").attr("d", path);
         }
         function mousedown() {
            m0 = [d3.event.pageX, d3.event.pageY];
            o0 = projection.rotate();
            d3.event.preventDefault();
         }
         function mousemove() {
            if (m0) {
               var m1 = [d3.event.pageX, d3.event.pageY]
                  , o1 = [o0[0] + (m1[0] - m0[0]) / 6, o0[1] + (m0[1] - m1[1]) / 6];
               o1[1] = o1[1] > 30  ? 30  :
                       o1[1] < -30 ? -30 :
                       o1[1];
               projection.rotate(o1);
               refresh();
            }
         }
         function mouseup() {
            if (m0) {
               mousemove();
               m0 = null;
            }
         }
         
         //zoom map function                   
         function zoomed() {
            g.attr('transform', 'translate(' + d3.event.translate + ')scale(' + d3.event.scale + ')');
         }
         
         //sort the chart based on different cases
         function sortChart() {    
            // Copy-on-write since tweens are evaluated after a delay.
            var x0 = null;
            switch (o.chart.sort)
            {
               case 'y-descending':
                  x0 = x.domain(data.sort(function(a, b) {
                        return d3.descending(a.y, b.y);
                     })
                     .map(function(d) { return d.x; }))
                     .copy();
                  break;
               case 'y-ascending':
                  x0 = x.domain(data.sort(function(a, b) {
                        return d3.ascending(a.y, b.y);
                     })
                     .map(function(d) { return d.x; }))
                     .copy();
                  break;
               case 'x-descending':
                  x0 = x.domain(data.sort(function(a, b) {
                        return d3.descending(a.x, b.x);
                     })
                     .map(function(d) { return d.x; }))
                     .copy();
                  break;
               case 'x-ascending':
                  x0 = x.domain(data.sort(function(a, b) {
                        return d3.ascending(a.x, b.x);
                     })
                     .map(function(d) { return d.x; }))
                     .copy();
                  break;            
            }
         
            var transition = svg.transition().duration(750),
               delay = function(d, i) { return i * 50; };
         
            transition.selectAll(".bar")
               .delay(delay)
               .attr("x", function(d) { return x0(d.x); });
         
            transition.select(".x.axis")
               .call(xAxis)
             .selectAll("g")
               .delay(delay);
         }
         
         //perform deep extend which merges objects and any sub objects together
         function extendDeep(dst) { 
            angular.forEach(arguments, function(obj) { 
               if (obj !== dst) { 
                  angular.forEach(obj, function(value, key) { 
                     if (dst[key] && dst[key].constructor && dst[key].constructor === Object) { 
                        extendDeep(dst[key], value); 
                     } else { 
                        dst[key] = value; 
                     } 
                  }); 
               } 
            }); 
            return dst; 
         }
      }
   }
};

//define the minerva angular module and associate all directives
angular.module('mvMinerva', [])
   //The minvera 
   .provider('minerva',       mvConfig)
   .directive('mvHeader',     mvHeader)
   .directive('mvBody',       mvBody)
   .directive('mvFooter',     mvFooter)
   .directive('mvRow',        mvRow)
   .directive('mvGroup',      mvGroup)
   .directive('mvAnyNum',     mvAnyNum)
   .directive('mvIdBox',      mvIdBox)
   .directive('mvTableList',  mvTableList)
   .directive('mvTable',      mvTable)
   .directive('mvChart',      mvChart);
   
}());