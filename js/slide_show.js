var pos;
var count;
var slideImageArr;
var slideImage;
function slideShow() {
    var docWidth = $(document).width();
    var k = (docWidth-960)/2;
    var div = $('#slider-images > div');
    slideImageArr  = $(div[0]);
    count = div.length;
    pos = Math.round(count/2)-1;
    slideImage = $('#slider');
    slideImageArr.css({
        'margin-left': -pos*960+k-9 + 'px'
    });
    $('#right-arr').click(function() {
        --pos;
        if (pos < 0) {
            slideImageArr.animate({
                'margin-left': parseInt(slideImageArr.css('margin-left'))+960*(count-1) + 'px'
            });
            pos = count-1;
        } else {
            slideImageArr.animate({
                'margin-left': parseInt(slideImageArr.css('margin-left'))-960 + 'px'
            });
        }
    });
    $('#left-arr').click(function() {
        ++pos;
        if (pos >= count) {
            slideImageArr.animate({
                'margin-left': parseInt(slideImageArr.css('margin-left'))-960*(count-1) + 'px'
            });
            pos = 0;
        } else {
            slideImageArr.animate({
                'margin-left': parseInt(slideImageArr.css('margin-left'))+960 + 'px'
            })
        }
    })
}