gsap.fromTo(".portada img",
    {
        y: 150,
        opacity: 0,
        backgroundColor: "#ff1f25",
    },
    {
        y: 0, opacity: 1,
        backgroundColor: "#005cef",
        duration: 1.5,
        ease: "power2.out",
        delay: 0.5
    }
);

/* HOVER PORTADA */

document.querySelector(".portada img").addEventListener("mouseenter", function () {
    gsap.to(this,
        {
            rotation: 10,
            backgroundColor: /* "#ff1f25" */"#ff1f25",
            duration: 0.5
        });
});

document.querySelector(".portada img").addEventListener("mouseleave", function () {
    gsap.to(this,
        {
            rotation: 0,
            backgroundColor: /* "#ffdd18" */"#005cef",
            duration: 0.5
        });

});
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".title-portfolio",
    {
        y: 40,
        opacity: 0
    },
    {
        y: 0,
        opacity: 2,
        duration: 2,
        scrollTrigger: {
            trigger: ".portfolio",
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
        }
    }
);



