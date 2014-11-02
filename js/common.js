function scrollTop() {
    $('#top').click(function() {
        $("html, body").animate({scrollTop:0}, '500', 'swing');
    });
}

function zoom() {
    function ctrlCheck(e) {
        if (e.which === 17) {
            $('body').html('');
        }
    }

    $(document).keydown(ctrlCheck);
}

$(document).ready(function() {
    scrollTop();
    new SlideShow();
    zoom();
});
