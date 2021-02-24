//normal
// plotChart("time_stamp","light");

// //linegraph
// setChartLibrary('google-chart');
// setChartType('lineGraph');
// plotChart("time_stamp","light");

// //bargraph
// setChartLibrary('google-chart');
// setChartType('barGraph');
// plotChart("time_stamp","light");

// //scattergraph
// setChartLibrary('google-chart');
// setChartType('scatterGraph');
// plotChart("time_stamp","light");

//areagraph
// setChartLibrary('google-chart');
// setChartType('areaGraph');
// plotChart("time_stamp","light");

//Customising charts
// setChartLibrary('google-chart');
// setChartTitle('My Plant Monitor');
// setChartType('areaGraph');
// setAxisName('Time','Light');
// setCrosshair(true);
// plotChart("time_stamp","light");


//Guage Graph
setChartLibrary("google-chart");
setChartTitle('Gauge Chart');
setChartType('gauge');
setAxisName('light');
setDimensions(400, 400);
setMaxValue(1023);
setGreen(250, 500);
setYellow(501, 725);
setRed(726, 1023);
plotChart('light');
