var pos = 0;
var slideImageArr;
var slideImage;
function slideShow() {
    var docWidth = $(document).width();
    var k = (docWidth-960)/2;
    slideImageArr  = $('#slider-images > div');
    pos = Math.round(slideImageArr.length/2);
    slideImage = $('#slider');
    slideImageArr.css({
        'left': k + 'px'
    });
    $('#left-arr').click(function() {
        slideImageArr.animate({
            'left': parseInt(slideImageArr.css('left'))-960 + 'px'
        });
    });
    $('#right-arr').click(function() {
        slideImageArr.animate({
            'left': parseInt(slideImageArr.css('left'))+960 + 'px'
        })
    })
}