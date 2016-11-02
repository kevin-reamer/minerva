/*
   version 150102.1133
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
    	mv-Cols: The number of columns needed in the body grid 
*/
var mvBody = function(minerva)
{
   return {
      restrict:      'E',
      transclude:    true,
      replace:       true,
      scope: {
         mvCols:       '@'
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
   		mv-Data: Data needed for the table
   		mv-Id: The ID of the inner container
   		mv-ID-Head: The ID of the container header
   		mv-Title: The title of the container
   		mv-Size: The size of the container passed as a string representing the height x width. Ex. "1x3"
   		mv-Style: Any custom style for the table
*/
var mvAnyNum = function(minerva) 
{
   return {
      restrict:      'E',
      transclude:    true,
      replace:       true,
      scope: {
         mvData:     '=',
         mvId:       '@',
         mvIdHead:   '@',
         mvTitle:    '@',
         mvSize:     '@',
         mvStyle:    '@'
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
         mvSize:     '@',
         mvClick:    '&'
      },
      templateUrl:   minerva.templatesPath() + 'mv-id-box.txt'
   };
};

/*
   Title: Minerva Table
   Description: Defines a generic table
   Parameters: 
   		mv-Data: Data needed for the table
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
   		mv-Data: Data needed for the table(s)
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
               height: 401,
               width: 401,
               margin: {
                  top: 40, 
                  right: -20, 
                  bottom: 60, 
                  left: 40
               },
               colors: ["#427A82", "#51BF96", "#FBD163", "#F29A3F", "#DB5957"],
               backgroundColor: '#FFFFFF',
               sort: '',
               inverse: false,
               type: 'bar'
            },
            legend: {
               enabled: false,
               color: '#A6A6A6',
               title: '',
               position: {
                  x: 0,
                  y: 0
               }
            },
            tooltip: {
               color: '#888888',
               format: '',
               size: '1em',
               suffix: '',
               prefix: ''
            },
            xAxis: {
               title: {
                  color: '#A6A6A6',
                  size: '1em',
                  text: 'X Axis'
               },
               labels: {
                  format: '',
                  color: '#A6A6A6'
               },
               gridlines: false,
               orient: 'bottom',
               spacing: null,
               ticks: null,
               tickSize: 6,
               tickPadding: 3
            },
            yAxis: {
               title: {
                  color: '#A6A6A6',
                  size: '1em',
                  text: 'Y Axis'
               },
               labels: {
                  format: '0',
                  color: '#A6A6A6'
               },
               gridlines: false,
               orient: 'left',
               ticks: null,
               tickSize: 6,
               tickPadding: 3,
               min: 0
            },
            types: {
               bar: {
                  stacked: false,
                  grouped: false,
                  stacking: 'normal', //'normal' or 'percent'
                  labels: {
                     enabled: false
                  }
               },
               pie: {
                  labels: {
                     enabled: false,
                     color: '#FFFFFF',
                     fontWeight: 'normal',
                     fontSize: '1em',
                     percent: false
                  },
                  burst: false,
                  scale: 100,
                  innerRadius: 0,
                  labelRadius: 0
               },
               bubble: {
                  scale: 60
               },
               map: {
                  mapfile: 'us-states',
                  quantizeScale: [0, 100],
                  showPoints: false,
                  detailed: false,
                  simplify: false,
                  globe: false,
                  grid: false,
                  zoom: false,
                  rotate: false,
                  satellite: {
                     enabled: false,
                     center: [-2, 5],
                     rotate: [76.00, -34.50, 32.12],
                     distance: 1.1,
                     tilt: 25,
                     scale: 5500
                  }
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
         var active = d3.select(null);
         var tip = null;
         var data = [0];
         
         //map chart variables
         var m0, o0; //variables for mouse up and down rotation
         var projection = null;
         var path = null;
         
         //bubble chart constants and variable force
         var layoutGravity = -0.01,
             damper = 0.1,
             force,
             bubbleView = 'all'; //bubble chart state
             
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
               .ticks(o.yAxis.ticks)
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
               .ticks(o.yAxis.ticks)
               .tickSize([o.yAxis.tickSize])
               .tickPadding([o.yAxis.tickPadding]);
            if (o.yAxis.labels.format != '')
            {
               yAxis.tickFormat(d3.format(o.yAxis.labels.format));
            }
            
            //end setting chart attributes
            
            element.empty(); //make sure the element is empty so you don't duplicate
            
            svg = d3.select(element[0]).append('svg')
                     .attr('width', width + margin.left + margin.right)
                     .attr('height', height + margin.top + margin.bottom)
                     .style('background', o.chart.backgroundColor)
                     .style('fill', o.chart.backgroundColor) //for globe background
                   .append('g')
                     .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            
            if (o.chart.type != 'map') //don't create for maps
            {   
               if (o.chart.type != 'bar')
               {
                  //create map of keys
                  color.domain(d3.keys(data[0]).filter(function(key) { return key !== 'x'; }));
               }
               
               data.forEach(function(d) {
                  d.y = +d.y;
               });
            }
            
            //tooltip format
            var tipformat = d3.format(o.tooltip.format);

            //tooltip
            tip = d3.tip()
               .attr('class', 'mvTip')
               .offset([-20, 0])
               .html(function(d) {
                  var title = d.x;
                  var tipData = tipformat(d.y);
                  
                  //tooltip for points
                  if (d.pointName != undefined)
                  {
                     return '<strong>' + d.pointName + '</strong>';
                  }
                  
                  //tooltip for charts
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
                     case 'map': //TODO: fix names
                        switch (o.types.map.mapfile)
                        {
                           case 'afg':
                              title = d.properties.name;
                              tipData = tipformat(map.get(d.id));
                              if (map.get(d.id) == undefined) return '<strong>' + title + '</strong>';
                              break;
                           case 'us-states':
                              title = idToName(d.id, 'states') || 'Name';
                              tipData = tipformat(map.get(d.id));
                              if (map.get(d.id) == undefined) return '<strong>' + title + '</strong>';
                              break;
                           default:
                              title = idToName(d.id, 'countries') || 'Name';
                              tipData = tipformat(map.get(d.id));
                              if (map.get(d.id) == undefined) return '<strong>' + title + '</strong>';
                              break;
                        }
                  }               
                  return '<div style="font-size:' + o.tooltip.size + '"><strong>' + title + ':</strong> <span style="color:' + o.tooltip.color + '">' + o.tooltip.prefix + tipData + o.tooltip.suffix + '</span></div>'; 
               });
            
            svg.call(tip);
            
            switch (o.chart.type)
            {
               case 'pie':
                  var radius = Math.min(width, height) / 2;
                  var labelr = radius + o.types.pie.labelRadius;
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
                     var labelText = function(d) { return d.data.y; };
                     if (o.types.pie.labels.percent == true)
                     {
                        labelText = function(d) { return Math.round((d.data.y / data.reduce(function(a, v){ return a + v.y; }, 0)) * 100) + '%'; };
                     }
                     g.append("text")
                        .attr("transform", function(d) {
                           var c = arc.centroid(d),
                              x = c[0],
                              y = c[1],
                              //pythagorean theorem for hypotenuse
                              h = Math.sqrt(x*x + y*y);
                           return "translate(" + (x/h * labelr) +  ',' + (y/h * labelr) +  ")"; 
                        })
                        .attr("dy", ".35em")
                        .style("text-anchor", function(d) {
                            //check if past the center
                            return (d.endAngle + d.startAngle)/2 > Math.PI ? "end" : "start";
                        })
                        .text(labelText)
                        .style('fill', o.types.pie.labels.color)
                        .style('font-weight', o.types.pie.labels.fontWeight)
                        .style('font-size', o.types.pie.labels.fontSize);
                  }
                  break;
                  
               case 'map':
                  var map = d3.map();
                  
                  var g = svg.append("g");
                  
                  var quantize = d3.scale.quantize()
                     .domain(o.types.map.quantizeScale)
                     .range(o.chart.colors);
                                 
                  if (data.choropleth != undefined)
                  {
                     data.choropleth.forEach(function(d) {
                        map.set(d.x, +d.y);
                     });
                  }
                  
                  //define the map file
                  var mapFile = '';
                  switch (o.types.map.mapfile)
                  {
                     case 'world':
                        mapFile = minerva.mapsPath() + 'world-110m.txt';
                        if (o.types.map.globe == true)
                        {
                           projection = d3.geo.orthographic()
                              .scale(width * 0.5) //size of map
                              .translate([width / 2, height / 2]) //move map to center
                              .clipAngle(90);
                        }
                        else //map projection
                        {
                           projection = d3.geo.ginzburg8()
                              .center([0, 20])
                              .scale(width / 1.4 / Math.PI) //size of map
                              .translate([width / 2, height / 2]); //move map to center
                        }
                        break;
                     case 'afg':
                        mapFile = minerva.mapsPath() + 'afg.txt';
                        projection = d3.geo.mercator()
                           .center([67.5, 34])
                           .scale((width * height) / 100) //size of map
                           .translate([width / 2, height / 2]); //move map to center
                        break;
                     default:
                        mapFile = minerva.mapsPath() + 'us.txt';
                        projection = d3.geo.albersUsa()
                           .scale(width * 1.5) //size of map
                           .translate([width / 2, height / 2]); //move map to center
                        break;
                  }
                  
                  //set world map to detailed
                  if (o.types.map.detailed == true && o.types.map.mapfile == 'world')
                  {
                     mapFile = minerva.mapsPath() + 'world-50m.txt';
                  }

                  if (o.types.map.satellite.enabled == true)
                  {
                     projection = clippedSatellite()
                        .distance(o.types.map.satellite.distance)
                        .scale(o.types.map.satellite.scale)
                        .rotate(o.types.map.satellite.rotate)
                        .center(o.types.map.satellite.center)
                        .tilt(o.types.map.satellite.tilt)
                        .clipExtent([[0, 0], [width, height]])
                        .precision(.1);
                  }
                                    
                  path = d3.geo.path()
                     .projection(projection);
                  
                  d3.json(mapFile, function(error, json)
                  {
                     var topoFeature = null;
                     var outlineFeature = null;
                     
                     if (o.types.map.simplify == true)
                     {
                        json = topojson.presimplify(json)
                     }
                     
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
                           .style('fill', function(d) { return quantize(map.get(d.id)); })
                           .attr("d", path)
                           .on('click', clickedzoom)
                           .on('mouseover', tip.show)
                           .on('mouseout', tip.hide);
                        
                        g.append("path")
                           .datum(topojson.mesh(json, outlineFeature, function(a, b) { return a !== b; }))
                           .attr('class', 'mapborders')
                           .style('fill', 'none')
                           .attr("class", 'mapstroke')
                           .style('stroke-linejoin', 'round')
                           .attr("d", path);
                     }
                     else //globe specific code
                     {
                        var time = Date.now();
                        
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
                        g.append('g')
                         .selectAll('path')
                           .data(topojson.feature(json, topoFeature).features)
                         .enter().append('path')
                           .attr('class', 'world')
                           .style('fill', function(d) { return quantize(map.get(d.id)); })                     
                           .attr('d', path)
                           .on('click', clickedzoom)
                           .on('mouseover', tip.show)
                           .on('mouseout', tip.hide);
                        
                        //display map shading                      
                        g.append("circle")
                           .attr("cx", width / 2).attr("cy", height / 2)
                           .attr("r", projection.scale())
                           .style("fill", "url(#globe_shading)");
                           
                        if (o.types.map.rotate == true)
                        {
                           d3.timer(function() {
                              var dt = Date.now() - time;
                              projection.rotate([10 + 0.003 * dt, 0]);
                              svg.selectAll("path").attr("d", path);
                           });
                        }
                     }
                     
                     //points on map
                     if (data.points != undefined && o.types.map.showPoints == true)
                     {
                        path.pointRadius(function(d) { return d.radius; });
                        
                        g.append('g')
                         .selectAll('path')
                           .data(data.points)
                         .enter().append('path')
                           .datum(function(d) {
                              return {type: 'Point', coordinates: [d.Lon, d.Lat], radius: d.Magnitude, color: d.Color, pointName: d.pointName, image: d.image};
                           })
                           .attr('fill', function(d) { return d.color })
                           .attr('class', 'point')
                           .attr('d', path)
                           .on('click', function(d) { scope.$parent.openModal(d) })
                           .on('mouseover', tip.show)
                           .on('mouseout', tip.hide);
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
                  
                  var nodes = [];
                  
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
                     .attr('class', 'circle')
                     .attr('id', function(d) { return 'bubble_' + d.id; })
                     .on('click', function() { toogleBubble(circles, groupCenters, center, groupsX) })
                     .on('mouseover', tip.show)
                     .on('mouseout', tip.hide);
   
                     
                  circles.transition().duration(2000).attr('r', function(d) { return d.radius; });
                  
                  start(nodes);
                  displayStart(circles, groupCenters, center);
                      
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
                           
                           if (o.yAxis.gridlines == true)
                           {
                              // Draw the y Grid lines
                              svg.append("g")            
                                 .attr("class", "grid")
                                 .call(makeYGrid(y, yOrient, o.yAxis.ticks)
                                    .tickSize(-width - margin.right, 0, 0)
                                    .tickFormat("")
                                 );
                           }
                           
                           if (o.xAxis.gridlines == true)
                           {
                              // Draw the x Grid lines
                              svg.append("g")            
                                 .attr("class", "grid")
                                 .call(makeXGrid(x, xOrient, o.xAxis.ticks)
                                    .tickSize(height, 0, 0)
                                    .tickFormat("")
                                 );
                           }

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
                           
                           if (o.types.bar.labels.enabled == true)
                           {
                              if (o.types.bar.stacked == true)
                              {
                                 var labelflip = [];
                                 bars.selectAll('text')
                                    .data(data)
                                       .enter().append('text')
                                    .attr('x', function(d) { //center the label on the bar
                                       if (o.xAxis.spacing <= 0.45)
                                       {
                                          return x(d.x) + ((0.45 - o.xAxis.spacing) * (width / data.length)); 
                                       }
                                       else if (o.xAxis.spacing >= 1)
                                       {
                                          return x(d.x) + ((0.6 - o.xAxis.spacing) * (width / data.length));
                                       }
                                       else if (o.xAxis.spacing >= 0.8)
                                       {
                                          return x(d.x) + ((0.55 - o.xAxis.spacing) * (width / data.length));
                                       }
                                       else
                                       {
                                          return x(d.x) + ((0.50 - o.xAxis.spacing) * (width / data.length));
                                       }
                                    })
                                    .attr('y', function(d) { return y(d.total);}) //set to the height of the bar
                                    .attr('dy', -5)
                                    .attr('text-anchor', 'middle')
                                    .attr('fill', '#A6A6A6')
                                    .attr('font-size', '0.9em')
                                    .text(function(d, i) {
                                       if (labelflip[i] == undefined)
                                       {
                                          labelflip[i] = '';
                                          return 'Total: ' + o.tooltip.prefix + tipformat(d.total) + o.tooltip.suffix;
                                       }
                                    });
                              }
                           }
                        }
                        else
                        {
                           if (o.yAxis.gridlines == true)
                           {
                              // Draw the y Grid lines
                              svg.append("g")            
                                 .attr("class", "grid")
                                 .call(makeYGrid(y, yOrient, o.yAxis.ticks)
                                    .tickSize(-width - margin.right, 0, 0)
                                    .tickFormat("")
                                 );
                           }
                           
                           if (o.xAxis.gridlines == true)
                           {
                              // Draw the x Grid lines
                              svg.append("g")            
                                 .attr("class", "grid")
                                 .call(makeXGrid(x, xOrient, o.xAxis.ticks)
                                    .tickSize(height, 0, 0)
                                    .tickFormat("")
                                 );
                           }
                           
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
                        //redo color domain to filter out added information
                        color.domain(d3.keys(data[0]).filter(function(key) { return (key !== 'x' && key !== 'y' && key !== 'total' && key !== 'data'); }));
                              
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
                        
                        if (o.yAxis.gridlines == true)
                        {
                           // Draw the y Grid lines
                           svg.append("g")            
                              .attr("class", "grid")
                              .call(makeYGrid(y, yOrient, o.yAxis.ticks)
                                 .tickSize(-width - margin.right, 0, 0)
                                 .tickFormat("")
                              );
                        }
                        
                        if (o.xAxis.gridlines == true)
                        {
                           // Draw the x Grid lines
                           svg.append("g")            
                              .attr("class", "grid")
                              .call(makeXGrid(x, xOrient, o.xAxis.ticks)
                                 .tickSize(height, 0, 0)
                                 .tickFormat("")
                              );
                        }
                        
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
                        x = d3.scale.linear()
                           .range([0, width]);
                        
                        xAxis.scale(x); //reset x scale for linear axis
                        
                        //get the maximum values of x and y
                        var xMax = d3.max(data, function(d) { return d.x; });
                        var yMax = d3.max(data, function(d) { return d.y; });
                        
                        //set the extent of the the x and y axis starting with 0
                        x.domain([0, xMax]);
                        y.domain([0, yMax]);
                        
                        //create order
                        var order = {};
                        data.forEach(function(d) {
                           order[d.z] = '';
                        });
                        //redo color domain for z
                        color.domain(d3.keys(order));
                        
                        if (o.yAxis.gridlines == true)
                        {
                           // Draw the y Grid lines
                           svg.append("g")            
                              .attr("class", "grid")
                              .call(makeYGrid(y, yOrient, o.yAxis.ticks)
                                 .tickSize(-width - margin.right, 0, 0)
                                 .tickFormat("")
                              );
                        }
                        
                        if (o.xAxis.gridlines == true)
                        {
                           // Draw the x Grid lines
                           svg.append("g")            
                              .attr("class", "grid")
                              .call(makeXGrid(x, xOrient, o.xAxis.ticks)
                                 .tickSize(height, 0, 0)
                                 .tickFormat("")
                              );
                        }
                           
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
                     .attr("y", margin.bottom * 0.75)
                     .style("text-anchor", "middle")
                     .style("fill", o.xAxis.title.color)
                     .style("font-size", o.xAxis.title.size)
                     .text(o.xAxis.title.text);
                  
                  //add y axis
                  svg.append("g")
                     .attr("class", "y axis")
                     .style("fill", o.yAxis.labels.color)
                     .call(yAxis)
                   .append("text") //y axis title
                     .attr("transform", "rotate(-90)")
                     .attr("y", 6)
                     .attr("dy", "0.7em")
                     .style("text-anchor", "end")
                     .style("fill", o.yAxis.title.color)
                     .style("font-size", o.yAxis.title.size)
                     .text(o.yAxis.title.text);
                                    
                  break;
            }
               
            //chart legend
            if (o.legend.enabled == true)
            {
               var legendData = data;
               var legendFill = function(d) { return color(d.x) };
               var legendText = function(d) { return d.x; };
               var legendSize = 18;
               switch (o.chart.type)
               {
                  case 'line':
                     legendData = lines; //change so that legend uses the line categories instead
                     break;
                  case 'map':
                     legendData = o.types.map.quantizeScale; //change so that legend uses the color gradient
                     legendFill = function(d) { 
                        return quantize(d);
                     };
                     legendText = function(d) { return d; };
                     legendSize = 20;
                     break;
               }      
               
               var legend = svg.selectAll(".legend")
                  .data(legendData)
                .enter().append("g")
                  .attr("class", "legend")
                  .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; }); //space between legend items
               
               //legend title
               svg.append('text')
                  .attr('x', o.legend.position.x)
                  .attr('y', o.legend.position.y - 15)
                  .attr('dy', '.35em')
                  .style('fill', o.legend.color)
                  .style('text-anchor', 'start')
                  .text(o.legend.title);
               
               //legend item colors
               legend.append("rect")
                  .attr("x", o.legend.position.x)
                  .attr("y", o.legend.position.y)
                  .attr("width", legendSize)
                  .attr("height", legendSize)
                  .style("fill", legendFill);
               
               //legend items
               legend.append('text')
                  .attr('x', o.legend.position.x + 22)
                  .attr('y', o.legend.position.y + 8)
                  .attr('dy', '.35em')
                  .style('fill', o.legend.color)
                  .style('text-anchor', 'start')
                  .text(legendText);
            }
              
            //sort chart   
            if (o.chart.sort != '')
            {
               sortChart();
            }
         } //end updateChart
         
         updateChart();
         
         //watch mvData and mvOptions for changes and update the chart
         scope.$watch('mvData', updateChart, true);
         scope.$watch('mvOptions', updateChart, true);
         
         //make y grid lines
         function makeYGrid(y, yOrient, ticks) {
           return d3.svg.axis()
               .scale(y)
               .orient(yOrient)
               .ticks(ticks)
         }
         
         //make x grid lines
         function makeXGrid(x, xOrient, ticks) {
           return d3.svg.axis()
               .scale(x)
               .orient(xOrient)
               .ticks(ticks)
         }
         
         //bubble chart functions
         function charge(d) {
            return -Math.pow(d.radius, 2.0) / 8;
         }
         
         function start(nodes) {
            force = d3.layout.force()
               .nodes(nodes)
               .size([width,height]);
         }
         
         function displayStart(circles, groupCenters, center) {
            force.gravity(layoutGravity) //start by moving away
               .charge(charge)
               .friction(0.9)
             .on('tick', function(e) {
               circles.each(moveTowardsGroup(e.alpha, groupCenters))
                  .attr('cx', function(d) { return d.x; })
                  .attr('cy', function(d) { return d.y; });
            });
            setTimeout(function() { //delay and then move back towards center
               force.gravity(layoutGravity)
                  .charge(charge)
                  .friction(0.9)
                .on('tick', function(e) {
                  circles.each(moveTowardsCenter(e.alpha, center))
                     .attr('cx', function(d) { return d.x; })
                     .attr('cy', function(d) { return d.y; });
               });
            }, 1000);
            force.start();
         }
         
         function displayGroupAll(circles, center) {
            force.gravity(layoutGravity)
               .charge(charge)
               .friction(0.9)
             .on('tick', function(e) {
               circles.each(moveTowardsCenter(e.alpha, center))
                  .attr('cx', function(d) { return d.x; })
                  .attr('cy', function(d) { return d.y; });
            });
            force.start();
            hideGroups();
         }
         
         function moveTowardsCenter(alpha, center) {
            return function(d) {
               d.x = d.x + (center.x - d.x) * (damper + 0.02) * alpha;
               d.y = d.y + (center.y - d.y) * (damper + 0.02) * alpha;
            }
         }
         
         function displayByGroup(circles, groupCenters, groupsX) {
            force.gravity(layoutGravity)
               .charge(charge)
               .friction(0.9)
             .on('tick', function(e) {
               circles.each(moveTowardsGroup(e.alpha, groupCenters))
                  .attr('cx', function(d) { return d.x; })
                  .attr('cy', function(d) { return d.y; });
            });
            force.start();
            displayGroups(groupsX);
         }
         
         function moveTowardsGroup(alpha, groupCenters) {
            return function(d) {
               var target = groupCenters[d.id];
               d.x = d.x + (target.x - d.x) * (damper + 0.02) * alpha;
               d.y = d.y + (target.y - d.y) * (damper + 0.02) * alpha;
            }
         }
         
         function displayGroups(groupsX) {                  
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
         function toogleBubble(circles, groupCenters, center, groupsX) {
            if (bubbleView == 'all') {
               displayByGroup(circles, groupCenters, groupsX);
               bubbleView = 'group'
            } 
            else
            {
               displayGroupAll(circles, center);
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
         function clickedzoom(d) {
            if (o.types.map.zoom == true)
            {
               if (active.node() === this) return resetzoom(d3.select(this.parentNode.parentNode));
               active.classed("active", false);
               active = d3.select(this).classed("active", true);
            
               var bounds = path.bounds(d),
                  dx = bounds[1][0] - bounds[0][0],
                  dy = bounds[1][1] - bounds[0][1],
                  x = (bounds[0][0] + bounds[1][0]) / 2,
                  y = (bounds[0][1] + bounds[1][1]) / 2,
                  scale = 0.9 / Math.max(dx / width, dy / height),
                  translate = [width / 2 - scale * x, height / 2 - scale * y];
            
               d3.select(this.parentNode.parentNode).transition()
                  .duration(750)
                  .attr("transform", "translate(" + translate + ")scale(" + scale + ")");
                  
               scope.$parent.setCountry(d);
            }
         }
         
         function resetzoom(g) {
            active.classed("active", false);
            active = d3.select(null);
         
            g.transition()
               .duration(750)
               .attr("transform", "");
         }
                 
         //map id to country name
         function idToName(id, type) {
            switch(type)
            {
               case 'countries':
                  for (i = 0; i < countriesList.length; i++) {
                     if (countriesList[i].id == id)
                     {
                        return countriesList[i].name;
                     }
                  }
                  break;
               case 'states':
                  for (i = 0; i < statesList.length; i++) {
                     if (statesList[i].id == id)
                     {
                        return statesList[i].name;
                     }
                  }
                  break;
            }
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
         
         //function for satellite projection
         function clippedSatellite() {
            var projection = d3.geo.satellite();
         
            var clipAngle = projection.clipAngle,
               distance = projection.distance,
               degrees = 180 / Math.PI,
               radians = Math.PI / 180,
               tilt = projection.tilt,
               projectionStream = projection.stream,
               rotate = [0, 0, 0],
               rotation = d3.geo.rotation(rotate),
               tiltRotate,
               alpha;
         
            // Special projection instance for additional clipping.
            var clip = d3.geo.projection(function(λ, φ) {
               return [λ, -φ];
            }).scale(degrees).translate([0, 0]);
         
            delete projection.clipAngle;
         
            projection.distance = function(_) {
               if (!arguments.length) return distance.call(projection);
               distance.call(projection, _);
               clipAngle.call(projection, Math.acos(1 / +_) * degrees - 1e-6);
               return projection;
            };
         
            projection.rotate = function(_) {
               if (!arguments.length) return rotate;
               rotation = d3.geo.rotation(rotate = [+_[0], +_[1], _.length > 2 && +_[2]]);
               return projection;
            };
         
            projection.tilt = function(angle) {
               if (!arguments.length) return tilt.call(projection);
               tilt.call(projection, angle);
               alpha = Math.acos(projection.distance() * Math.cos(angle * radians) * .99) * degrees;
               clip.clipAngle(180 - alpha).rotate([0, 180 + angle]);
               tiltRotate = d3.geo.rotation([0, 180 + projection.tilt()]);
               return projection;
            };
         
           projection.stream =  function(stream) {
               var pstream = projectionStream.call(projection, stream),
                  circle = d3.geo.circle().angle(clipAngle.call(projection) - 1e-6),
                  clipStream = alpha ? clip.stream({
                     point: function(λ, φ) {
                        var point = tiltRotate.invert([λ, φ]);
                        pstream.point(point[0], point[1]);
                     },
                     lineStart: function() { pstream.lineStart(); },
                     lineEnd: function() { pstream.lineEnd(); },
                     polygonStart: function() { pstream.polygonStart(); },
                     polygonEnd: function() { pstream.polygonEnd(); }
                  }) : pstream;
               return {
                  point: function(λ, φ) {
                  var point = rotation([λ, φ]);
                     clipStream.point(point[0], point[1]);
                  },
                  lineStart: function() { clipStream.lineStart(); },
                  lineEnd: function() { clipStream.lineEnd(); },
                  polygonStart: function() { clipStream.polygonStart(); },
                  polygonEnd: function() { clipStream.polygonEnd(); },
                  sphere: function() {
                     d3.geo.stream(circle(), clipStream);
                  }
               };
            };
         
            return projection.distance(projection.distance());
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