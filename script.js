
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
            slidesPerView: 2.5
        },
        620: {
            slidesPerView: 3
        },

        750: {
            slidesPerView: 3.5
        },
        850: {
            slidesPerView: 4
        },
        950: {
            slidesPerView: 4.5
        },
        1300: {
            slidesPerView: 5.5
        },
    
        1700: {
            slidesPerView: 6
        },

    
    }
});