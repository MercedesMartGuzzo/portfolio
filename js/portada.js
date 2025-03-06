gsap.fromTo(".portada img",
    {
        y: 150,
        opacity: 0,
        backgroundColor: "#005cef"
    }, // Empieza fuera de pantalla a la derecha
    {
        y: 0, opacity: 1,
        backgroundColor: "#ff1f25",
        duration: 1.5,
        ease: "power2.out",
        delay: 0.5
    }
);

/* hover */

document.querySelector(".portada img").addEventListener("mouseenter", function () {
    gsap.to(this,
        {
            rotation: 10,
            backgroundColor: "#ffdd18",
            duration: 0.5
        });
});

document.querySelector(".portada img").addEventListener("mouseleave", function () {
    gsap.to(this,
        {
            rotation: 0,
            backgroundColor: "#ff1f25",
            duration: 0.5
        });

});
