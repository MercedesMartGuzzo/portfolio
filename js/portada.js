
/* btn-eng */
gsap.from(".btn-eng, .btn-eng i", {
    y: -50,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "bounce.out"
});


/* PORTADA-IMG */
gsap.fromTo(".portada img",
    {
        y: 50,
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

/* TITLE-HERO */

gsap.to(".title-hero", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "bounce"
});
const title = document.querySelector(".title-hero");

title.addEventListener("mouseover", () => {
    gsap.to(title, {
        color: "#005cef",
        duration: 0.3,
        ease: "power1.out"
    });
});

title.addEventListener("mouseleave", () => {
    gsap.to(title, {
        color: "black",
        duration: 0.5,
        ease: "power2.out"
    });
});

/* SUBTITLE-HERO */

const text = new SplitType('.subtitle-hero', { types: "words, chars" });

text.chars.forEach((char, index) => {
    let charsTl = gsap.timeline({
        delay: 0.5,
        scrub: false,
        toggleActions: "play none none none"
    });

    charsTl.from(char, {
        y: gsap.utils.random(-100, 100),
        x: gsap.utils.random(-200, 200),
        rotate: gsap.utils.random(-300, 300),
        scale: gsap.utils.random(0, 2),
        opacity: 0,
        duration: .75,
        ease: "back.out",
        delay: index * 0.01
    });

    charsTl.from(char, {
        color: `rgb(${gsap.utils.random(0, 255)}, ${gsap.utils.random(0, 255)}, ${gsap.utils.random(0, 255)})`,
        duration: 1,
    }, "-=.25");

    // Animación al pasar el mouse
    let charOriginalColor = window.getComputedStyle(char).color;

    function charsHover() {
        gsap.timeline()
            .to(char, {
                y: gsap.utils.random(-50, 50),
                x: gsap.utils.random(-50, 50),
                rotate: gsap.utils.random(-90, 90),
                scale: gsap.utils.random(0.5, 1.5),
                duration: .5,
                ease: "back.out",
                color: `rgb(${gsap.utils.random(0, 255)}, ${gsap.utils.random(0, 255)}, ${gsap.utils.random(0, 255)})`,
                onStart: () => char.removeEventListener("mouseenter", charsHover),
            })
            .to(char, {
                y: 0,
                x: 0,
                rotate: 0,
                scale: 1,
                color: charOriginalColor,
                delay: 1,
                duration: .5,
                ease: "back.out",
                onComplete: () => setTimeout(() => char.addEventListener("mouseenter", charsHover), 100),
            });
    }

    char.addEventListener("mouseenter", charsHover);
});

/* HERO-P */
gsap.from(".hero-p", {
    opacity: 0,
    y: 50,
    duration: 2,
    delay: 1,
    ease: "bounce.out"
})



/* HELLO */


const text1 = new SplitType(".hello h3", { types: "words, chars" });

gsap.fromTo(
    text1.chars,
    {
        opacity: 0,
        y: 50,
        color: "black"
    },
    {
        opacity: 1,
        y: 0,
        color: "#ff5733",
        stagger: 0.05,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".hello",
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none reverse none",
            scrub: true
        }
    }
);




/* PORTFOLIO-P */

const splitText = new SplitType(".portfolio-p", { types: "lines" });

gsap.from(splitText.lines, {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".portfolio-p",
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none none",
    }
});



/* TITLE-PORTFOLIO */
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".title-portfolio",
    {
        y: 40,
        opacity: 0
    },
    {
        y: 0,
        stagger: 0.5,
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
gsap.utils.toArray(".web").forEach((element) => {
    gsap.from(element, {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 25%",
            scrub: true,
            toggleActions: "play none none reverse"
        }
    });
});





// Usamos gsap.matchMedia para ejecutar la animación solo en desktop
let mm = gsap.matchMedia();

mm.add("(min-width: 1024px)", () => {
    // Seleccionamos todas las tarjetas
    let sections = gsap.utils.toArray(".web");

    // Para cada tarjeta, creamos la animación
    sections.forEach((section) => {
        gsap.from(section, {
            x: "100vw",        // Empieza fuera de la pantalla a la derecha
            /*  opacity: 0, */
            duration: 2,       // Animación pausada y fluida
            ease: "power3-out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%", // Se activa cuando la parte superior de la sección llega al 80% del viewport
                end: "top 30%",   // Termina la animación cuando la parte superior de la sección llega al 30%
              
                toggleActions: "play none none reverse"
            }
        });
    });
});




gsap.from(".about-me-title",
    {
        y: 40,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
            trigger: ".about-me-title",
            start: "top 80%",
            end: "bottom 20%",
            scrub: true
        }
    }
);
document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll('.web-title, .skills-title'); // Seleccionamos los títulos

    titles.forEach(title => {
        let splitText = new SplitType(title, { types: "words, chars" }); // Divide en palabras y caracteres
        let originalColor = window.getComputedStyle(title).color; // Obtiene el color original del texto

        title.addEventListener("mouseenter", () => {
            gsap.fromTo(splitText.chars, {
                y: () => gsap.utils.random(-30, 30),
                x: () => gsap.utils.random(-30, 30),
                rotate: () => gsap.utils.random(-60, 60),
                scale: () => gsap.utils.random(0.5, 1.5),
                color: () => gsap.utils.random(["#ff5733", "#007bff", "#596d2d", "#ff1f25", "#9ba17d", "#cea965"]),
                opacity: 0
            }, {
                y: 0,
                x: 0,
                rotate: 0,
                scale: 1,
                opacity: 1,
                duration: 0.5,
                stagger: 0.02,
                ease: "back.out(2)"
            });
        });

        title.addEventListener("mouseleave", () => {
            gsap.to(splitText.chars, {
                color: originalColor, // Vuelve al color original
                duration: 0.5,
                ease: "power2.out"
            });
        });
    });
});


