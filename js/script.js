const $catalog = $('.catalog__doors');

$catalog.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
});

const $slider = $('.head__slider');
const $progressBar = $('.progress');

function setProgress(index) {
    const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;
    $progressBar
        .css('background-size', `${calc}% 100%`)
        .attr('aria-valuenow', calc);
}

$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    setProgress(nextSlide);
});

$slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.slickPrev'),
    nextArrow: $('.slickNext'),
});

setProgress(0);

