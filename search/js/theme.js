// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
function initialize() {
    var mapOptions = {
        center: {
            lat: 28.653878,
            lng: 77.203367
        },
        zoom: 14,
        scrollwheel: false
    };
    var map = new google.maps.Map(document.getElementById('map'),
        mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);
