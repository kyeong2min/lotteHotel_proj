new Swiper('.slider-center', {
    loop: true,
    parallax: true,
    speed: 1000,
});

new Swiper('.slider-prev', {
    loop: true,
    allowTouchMove: false,
});

new Swiper('.slider-next', {
    loop: true,
    allowTouchMove: false,
});

const prevSlider = new Swiper('.triple-slider .slider-prev', {
    loop: true,
    speed: 600,
    parallax: true,
    allowTouchMove: false,
});

const nextSlider = new Swiper('.triple-slider .slider-next', {
    loop: true,
    speed: 600,
    parallax: true,
    allowTouchMove: false,
});

const centerSlider = new Swiper('.triple-slider .slider-center', {
    loop: true,
    speed: 600,
    parallax: true,
    controller: {
        control: [prevSlider, nextSlider],
    },
    grabCursor: true,
});

prevSlider.on('click', () => {
    centerSlider.slidePrev();
});

nextSlider.on('click', () => {
    centerSlider.slideNext();
});
