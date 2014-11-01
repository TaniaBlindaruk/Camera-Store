var pos = 0;
var slideImageArr;
var slideImage;
function slideShow() {
    var docWidth = $(document).height();
    var k = (docWidth-960)/2;
    slideImageArr  = $('#slider-images > div');
    pos = Math.round(slideImageArr.length/2)-1;
    slideImage = $('#slider-images');
    slideImage.css({
        'left': (-(pos*960+k)) + 'px'
    });
    $('#left-arr').click(function() {

    });
    $('#right-arr').click(function() {

    })
}