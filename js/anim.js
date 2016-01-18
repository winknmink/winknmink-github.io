var wheight = $(window).height();
var wwidth = $(window).width();

$("#bgcarousel").css({"height": wheight, "width": wwidth});
$(window).resize(function () {
	var wheight = $(window).height();
	var wwidth = $(window).width();
	$("#bgcarousel").css({"height": wheight, "width": wwidth});
});

$('.carousel').carousel({pause: "false"});

$("#homebutton").click(function() {
    $('html, body').animate({
        scrollTop: $("#bgcarousel").offset().top
    }, 800);
});

$("#aboutbutton").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutpage").offset().top
    }, 800);
});

$("#testimonialsbutton").click(function() {
    $('html, body').animate({
        scrollTop: $("#testimonialspage").offset().top
    }, 800);
});

$("#contactsbutton").click(function() {
    $('html, body').animate({
        scrollTop: $("#contactspage").offset().top
    }, 800);
});

