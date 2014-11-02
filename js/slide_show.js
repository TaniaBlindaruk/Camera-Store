function SlideShow() {
    var pos;
    var count;
    var slideImageArr;
    var slideImage;
    var firstDiv;


    function resize() {
        var docWidth = $(document).width();
        var k = (docWidth-960)/2;
        firstDiv.css({
            'margin-left': -pos*960+k + 'px'
        });
    }

    function animateDesc(flag) {
        var curr_pos = count-pos-1;
        if (!flag) {
            if (curr_pos == 0) curr_pos = count;
            slideImageArr.find('.bslider_text').hide('slow');
            $(slideImageArr[curr_pos-1]).find('.bslider_text').show('slow');
        } else {
            if (curr_pos == count-1) curr_pos = -1;
            slideImageArr.find('.bslider_text').hide('slow');
            $(slideImageArr[curr_pos+1]).find('.bslider_text').show('slow');
        }
    }

    function animate(count) {
        firstDiv.animate({
            'margin-left': parseInt(firstDiv.css('margin-left'))+count + 'px'
        });
    }

    (function() {
        $( window ).resize(resize);
        slideImageArr = $('#slider-images > div > div');
        firstDiv  = $(slideImageArr[0]);
        count = slideImageArr.length;
        pos = Math.round(count/2)-1;
        slideImage = $('#slider');
        $(slideImageArr[pos]).find('.bslider_text').css('display', 'block');
        resize();
        $('#right-arr').click(function() {
            animateDesc(true);
            --pos;
            if (pos < 0) {
                animate(960*(count-1));
                pos = count-1;
            } else {
                animate(-960);
            }
        });
        $('#left-arr').click(function() {
            animateDesc(false);
            ++pos;
            if (pos >= count) {
                animate(-960*(count-1));
                pos = 0;
            } else {
                animate(960)
            }
        })
    })();
}