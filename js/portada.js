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

gsap.fromTo(".title-portfolio",
    {
        y: 50,
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

/* BIENVENIDOS HERO */

gsap.to(".bienvenidos", {
    keyframes: [
        { color: "#ffdd18", duration: 1 }, // Verde
        { color: "#ff0000", duration: 1 }, // Rojo  
        { color: "#005cef", duration: 1 }  // Azul
    ],
    scrollTrigger: {
        trigger: ".hola",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
    }
});

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add("(max-width: 768px)", () =>

    gsap.to(".bienvenidos", {
        opacity: 1,
        x: 60,
        color: "#005cef",
        duration: 2,
        scrollTrigger: {
            trigger: ".hola",
            start: "top 80%",
            end: "top 30%",
            scrub: true,
        }
    })
)


mm.add("(min-width: 1200px)", () => {
    gsap.to(".bienvenidos", {
        x: 400,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: ".hola",
            start: "top 80%",
            end: "top 30%",
            scrub: true,
        }
    });
});


