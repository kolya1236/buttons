$('.rippler').rippler();

var rippler = $().rippler({
    selector : '.rippler',
    color : "rgba(250, 250, 250, 0.3)"
});

var loader = $('.percents0').ClassyLoader({
	lineColor: '#e75735',
    animate: false,
    percentage: 0,
    showRemaining: false
});

var loader = $('.percents38').ClassyLoader({
	lineColor: '#e75735',
	speed: 3,
    animate: true,
    percentage: 38,
    showRemaining: false
});

var loader = $('.percents62').ClassyLoader({
	lineColor: '#e75735',
	speed: 6,
    animate: true,
    percentage: 62,
    showRemaining: false
});

var loader = $('.percents89').ClassyLoader({
	lineColor: '#e75735',
	speed: 8,
    animate: true,
    percentage: 89,
    showRemaining: false
});

$(document).ready(function(){
	var data = [
	    {"name" : "JavaScript", "hvalue" : 10 , "color": "#747474"},
	    {"name" : "HTML5", "hvalue" : 25, "color": "#e75735"},
	    {"name" : "CSS3", "hvalue" : 30, 'color': "#4eb7a8"},
	    // assign a color if you'd like to or one would be set for you.
	    {"name" : "Ruby", "hvalue" : 35, "color": "#e5e5e5" } 
	];
	$(".exp").donutpie();
	$(".exp").donutpie('update', data);

});