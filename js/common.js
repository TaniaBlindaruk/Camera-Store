function scrollTop() {
    $('#top').click(function() {
        $("html, body").animate({scrollTop:0}, '500', 'swing');
    });
}

$(document).ready(function() {
    scrollTop();
    new SlideShow();
});
