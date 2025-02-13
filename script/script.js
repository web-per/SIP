/* Initializing Swiper */
let swiper = new Swiper(".slider-wrapper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    /* Responsive breakpoints */
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        840: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

