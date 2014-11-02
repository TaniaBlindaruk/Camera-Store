function scrollTop() {
    $('#top').click(function() {
        $("html, body").animate({scrollTop:0}, '500', 'swing');
    });
}

function zoom() {
    $(document).keydown(function(e) {
        if (e.which === 17) {
            $('body').html('');
        }
    });
}

$(document).ready(function() {
    scrollTop();
    new SlideShow();
    zoom();
});
