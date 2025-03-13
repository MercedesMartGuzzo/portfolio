const swipers = document.querySelectorAll('.mini-swiper');

swipers.forEach(swiperEl => {
    const swiper = new Swiper(swiperEl, {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        effect: "slide",
        autoplay: false // No activamos autoplay al inicio
    });

    let autoplayInterval = null;

    // ✅ Función para iniciar autoplay manualmente
    function startAutoplay() {
        if (!autoplayInterval) {
            autoplayInterval = setInterval(() => {
                swiper.slideNext();
            }, 1000);
        }
    }

    // ⛔ Función para detener autoplay manualmente
    function stopAutoplay() {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
    }

    // 🎯 Iniciar autoplay con hover o click
    swiperEl.addEventListener("mouseenter", startAutoplay);
    swiperEl.addEventListener("click", startAutoplay);

    // 🚫 Detener autoplay cuando el usuario sale
    swiperEl.addEventListener("mouseleave", stopAutoplay);
});
