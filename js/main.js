const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const mainBanner = () => {
    const $bannerli = document.querySelectorAll('#visual .mainBanner li');
    const $prev = document.querySelector('#visual .prev');
    const $next = document.querySelector('#visual .next');

    let current = 0,
        old = 0,
        size = 100,
        totalImage = $bannerli.length,
        timer = null,
        interval = 4000;

    const autoTimer = () => {
        clearInterval(timer);
        timer = setInterval(() => {
            current++;
            if (current > totalImage - 1) current = 0;
            banner('next');
        }, interval);
    };
    const stopAutoTimer = () => {
        clearInterval(timer);
    };

    $next.addEventListener('click', (e) => {
        current++;
        if (current > totalImage - 1) current = 0;
        banner('next');
        autoTimer();
    });
    $prev.addEventListener('click', (e) => {
        current--;
        if (current < 0) current = totalImage - 1;
        banner('prev');
        autoTimer();
    });

    const banner = (txt) => {
        const num = txt === 'next' ? size : -size;
        $bannerli[current].style.transition = '0s';

        $bannerli[current].style.left = `${num}%`;
        setTimeout(() => {
            $bannerli[current].style.transition = '0.4s';
            $bannerli[current].style.left = `0px`;
            $bannerli[current].style.zIndex = 10;
            $bannerli[current].classList.add('on');

            $bannerli[old].style.left = `${num * -1}%`;
            $bannerli[old].classList.remove('on');
            $bannerli[old].style.zIndex = 1;

            old = current;
        }, 20);
    };

    setTimeout(() => {
        autoTimer();
    }, 300);
};

const mainInit = () => {
    mainBanner();
};

(() => {
    mainInit();
})();
