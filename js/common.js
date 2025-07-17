new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    onLeave: function (origin, destination, direction) {
        const $topMenu = document.querySelector('#header .topMenu');

        if (destination.index > 0) {
            $topMenu.classList.add('hide');
        } else {
            $topMenu.classList.remove('hide');
        }
    },
});

const menubar = () => {
    const gnblis = document.querySelectorAll('#header .nav .gnb > li');
    const subs = document.querySelectorAll('#header .nav .gnb > li .sub');
    const header = document.querySelector('#header');
    const bg = document.querySelector('#header .bg');

    const extraSpace = 50;

    gnblis.forEach((item, idx) => {
        item.addEventListener('mouseenter', (e) => {
            subs.forEach((itemSub) => {
                itemSub.classList.remove('on');
            });
            subs[idx].classList.add('on');
            header.classList.add('on');

            const subHeight = subs[idx].offsetHeight;
            header.style.height = `${148 + subHeight + extraSpace}px`;
            bg.style.height = `${148 + subHeight + extraSpace}px`;
        });
    });

    header.addEventListener('mouseleave', (e) => {
        subs.forEach((itemSub) => {
            itemSub.classList.remove('on');
        });
        header.classList.remove('on');

        header.style.height = '148px';
        bg.style.height = '0px';
    });
};

const topBar = () => {
    const $topMenu = document.querySelector('#header .topMenu');
    const $header = document.querySelector('#header');

    // let ty = 0;

    window.addEventListener('scroll', (e) => {
        const ty = window.scrollY;

        if (ty > 100) {
            $topMenu.classList.add('hide');
            $header.classList.add('shrink');
        } else {
            $topMenu.classList.remove('hide');
            $header.classList.remove('shrink');
        }
    });
};

(() => {
    menubar();
    topBar();
})();
