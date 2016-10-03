// Fade opacity of various elements in / out on scroll

var fadeStart = 0;
var fadeUntil = 400;
var fading = $('#headerLayerOne, #headerLayerThree, #headerLayerFive');
var twoFade = $("#headerLayerTwo");
var fourFade = $("#headerLayerFour");
var creds = $(".lead, .art-dek, .art-cred");

$(window).bind('scroll', function() {

    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    var offset = $(document).scrollTop();
    var opacity = 0;
    var showHideCreds = 1;
    if (offset <= fadeStart) {
        opacity = 1;
        showHideCreds = 0;
    } else if (offset <= fadeUntil) {
        opacity = 1 - offset / fadeUntil;
        showHideCreds = offset / fadeUntil;
    }
    creds.css('opacity', showHideCreds);
    fading.css('opacity', opacity);

    twoFade.css({
        'opacity': ((height - (scrollTop)) / (height - 200))
    });

    fourFade.css({
        'opacity': ((height - (scrollTop)) / (height - 400))
    });

    $('.color-overlay').css({
        'opacity': ((height - scrollTop) / height)
    });

});
