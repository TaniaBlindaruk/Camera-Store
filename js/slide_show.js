var pos = 0;
var slideImageArr;
var slideImage;
function slideShow() {
    var docWidth = $(document).width();
    var k = (docWidth-960)/2;
    slideImageArr  = $($('#slider-images > div')[0]);
    pos = Math.round(slideImageArr.length/2);
    slideImage = $('#slider');
    slideImageArr.css({
        'margin-left': k + 'px'
    });
    $('#left-arr').click(function() {
        slideImageArr.animate({
            'margin-left': parseInt(slideImageArr.css('margin-left'))-960 + 'px'
        });
    });
    $('#right-arr').click(function() {
        slideImageArr.animate({
            'margin-left': parseInt(slideImageArr.css('margin-left'))+960 + 'px'
        })
    })
}