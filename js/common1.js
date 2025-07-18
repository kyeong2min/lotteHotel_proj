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
    const gnblis = document.querySelectorAll('#header .nav .inner .gnb li');
    const header = document.querySelector('#header');
    const bg = document.querySelector('#header .bg');

    const extraSpace = 50;

    gnblis.forEach((item) => {
        item.addEventListener('mouseenter', (e) => {
            // 모든 서브메뉴 숨기기
            const allSubs = document.querySelectorAll('#header .nav .inner .gnb li .sub');
            allSubs.forEach((itemSub) => {
                itemSub.classList.remove('on');
            });

            // 현재 메뉴 항목의 서브메뉴만 보이기
            const currentSub = item.querySelector('.sub');
            if (currentSub) {
                currentSub.classList.add('on');

                const subHeight = currentSub.offsetHeight;
                header.style.height = `${subHeight + extraSpace}px`;
                bg.style.height = `${148 + subHeight + extraSpace}px`;
            }

            header.classList.add('on');
        });
    });

    // 마우스가 header를 벗어났을 때 초기화
    header.addEventListener('mouseleave', (e) => {
        const allSubs = document.querySelectorAll('#header .nav .inner .gnb li .sub');
        allSubs.forEach((itemSub) => {
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
