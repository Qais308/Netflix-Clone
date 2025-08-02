
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
            slidesPerView: 3
        },
        550: {
            slidesPerView: 4
        },
        700: {
            slidesPerView: 4.5
        },
        750: {
            slidesPerView: 5
        },
        950: {
            slidesPerView: 5.5
        },
    
        1700: {
            slidesPerView: 6
        },

    
    }
});

