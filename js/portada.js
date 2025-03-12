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

gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.subtitle-hero', { types: "words, chars" });

text.chars.forEach((char, index) => {
    let charsTl = gsap.timeline({
        delay: 0.5,
        /* scrollTrigger: {
            trigger: ".hello-hero",
            start: "top 80%",  // Cuando el elemento está en el 80% de la pantalla
            end: "bottom 50%", // Finaliza cuando está al 50%
            scrub: false,  */// No hace efecto scrub (sin seguimiento del scroll)
        toggleActions: "play none none none" // Solo se ejecuta una vez
        /*  } */
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





gsap.to(".title-hero", {
    y: 0, // Llega a su posición normal
    opacity: 1, // Se vuelve visible
    duration: 1, // Duración de la animación
    ease: "bounce"
});
const title = document.querySelector(".title-hero");

title.addEventListener("mouseover", () => {
    gsap.to(title, {
        color: "#005cef", // Cambia el color del texto
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


/* btn-eng */
gsap.from(".btn-eng, .btn-eng i", {
    y: -50, 
    opacity: 0, 
    stagger: 0.2, 
    duration: 1, 
    ease: "bounce.out" 
});

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
        opacity: 1, y: 0, color: "#ff5733",
        stagger: 0.05, duration: 1, ease: "power2.out",
        scrollTrigger: {
            trigger: ".hello",
            start: "top 80%", 
            end: "top 30%",    
            toggleActions: "play none reverse none",
            scrub: true
        }
    }
);