const swipers = document.querySelectorAll('.mini-swiper');

swipers.forEach(swiperEl => {
    const swiper = new Swiper(swiperEl, {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        effect: "slide",
        autoplay: false
    });

    let autoplayInterval = null;

   
    function startAutoplay() {
        if (!autoplayInterval) {
            autoplayInterval = setInterval(() => {
                swiper.slideNext();
            }, 1000);
        }
    }

 
    function stopAutoplay() {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
    }

    swiperEl.addEventListener("mouseenter", startAutoplay);
    swiperEl.addEventListener("click", startAutoplay);
    swiperEl.addEventListener("mouseleave", stopAutoplay);
});
