var wheight = $(window).height();
var wwidth = $(window).width();

$("#bgcarousel").css({"height": wheight, "width": wwidth});
$(window).resize(function () {
	var wheight = $(window).height();
	var wwidth = $(window).width();
	$("#bgcarousel").css({"height": wheight, "width": wwidth});
});

$('.carousel').carousel({pause: "false"});