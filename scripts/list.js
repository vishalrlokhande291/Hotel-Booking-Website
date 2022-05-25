$("button").click(function() {
    $('html,body').animate({
        scrollTop: $("#map-view").offset().top},
        'slow');
});