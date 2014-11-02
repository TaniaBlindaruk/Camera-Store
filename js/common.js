function scrollTop() {
    $('#top').click(function() {
        $("html, body").animate({scrollTop:0}, '500', 'swing');
    });
}

function zoom() {
    var ctrl = false;
    $(document).keydown(function(e){
        if(ctrl && (e.keyCode == 107 || e.keyCode == 109)) {
            return false;
        }
        if(e.keyCode == 17) {
            ctrl = true;
            $(document).bind('scroll', function() {
                if(ctrl) {
                    return false;
                }
            });
        }
    });

    $(document).keyup(function(e) {
        if(e.keyCode == 17) {
            ctrl = false;
            $(document).unbind('scroll');
        }
    });
}

$(document).ready(function() {
    scrollTop();
    new SlideShow();
    zoom();
});
