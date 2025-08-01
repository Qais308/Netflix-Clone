
new Swiper('.movie-wrapper', {
    watchOverflow: true,
    spaceBetween: 15,
    cssMode: true,
    // If we need pagination
   

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    breakpoints: {
        0: {
            slidesPerView: 1
        },
        650: {
            slidesPerView: 2
        },
        780: {
            slidesPerView: 2.7
        },
        850: {
            slidesPerView: 3
        },
        950: {
            slidesPerView: 3.5
        },
        1050: {
            slidesPerView: 4
        },
        1300: {
            slidesPerView: 4.5
        },
        1400: {
            slidesPerView: 5
        },
        1500: {
            slidesPerView: 5
        }

    }
});

