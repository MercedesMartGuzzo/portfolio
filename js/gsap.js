//HEADER//

/* btn-eng */
gsap.from(".btn-eng, .btn-eng i", {
    y: -50,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "bounce.out"
});


//HERO//


/* TITLE-HERO */

gsap.to(".title-hero", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "bounce"
});


/* SUBTITLE-HERO */
gsap.from(".subtitle-hero", {
    y: -50,
    opacity: 0,
    delay: .5,
    duration: 1,
    ease: "bounce.out"
});


/* HERO-P */

gsap.from(".hero-p", {
    opacity: 0,
    y: 50,
    duration: 2,
    delay: 1,
    ease: "bounce.out"
})



/* Portada */
gsap.registerPlugin(ScrollTrigger);
gsap.from(".portada", {
    y: 5,
    duration: 1.5,
    ease: "power2.out",
    delay: 0.5,
    scrollTrigger: {
        trigger: ".hero",
        start: "10%",
        end: "20%",
        toggleActions: "play none reverse none",
        scrub: 2
    }

});
/* PORTADA-IMG */
gsap.from(".portada img",
    {
        y: 20,
        duration: 1.7,
        ease: "power2.out",
        opacity: 0,
        delay: .3
    },

);

/* HELLO */


const text1 = new SplitType(".hello h3", { types: "words, chars" });

gsap.fromTo(
    text1.chars,
    {
        opacity: 0,
        x: 50,
        color: "black",
    },
    {
        opacity: 1,
        x: 0,
        color: "#ff5733",
        stagger: 0.05,
        duration: 1,
        ease: "bounce.in",
        scrollTrigger: {
            trigger: ".hello",
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none reverse none",
            scrub: 3
        }
    }
);

//PORTFOLIO//


/* TITLE-PORTFOLIO */

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".title-portfolio",
    {
        y: 40,
        opacity: 0
    },
    {
        y: 0,
        /*   stagger: 0.5, */
        opacity: 2,
        duration: 2,
        delay: .5,
        scrollTrigger: {
            trigger: ".portfolio",
            start: "top 80%",
            end: "top 50%",
            scrub: 2,
        }
    }
);


/* PORTFOLIO-P */


function animarPortfolio() {
    if (window.splitText) window.splitText.revert();

    window.splitText = new SplitType(".portfolio-p", { types: "lines" });

    gsap.from(window.splitText.lines, {
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
        },
    });
}


//CARD-PORTFOLIO//

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
            end: "bottom 65%",
            scrub: 2,

            toggleActions: "play none none reverse"
        }
    });
});


//CARD-PORTFOLIO-DESKTOP


let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
    let sections = gsap.utils.toArray(".web");
    sections.forEach((section) => {
        gsap.from(section, {
            x: "100vw",
            duration: 2,
            ease: "power3-out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 30%",
                scrub: 2,
                toggleActions: "play none none reverse"
            }
        });
    });
});

// PORFOLIO-VIDEOS //

document.querySelectorAll('.img-wrapper video').forEach(video => {
    ScrollTrigger.create({
        trigger: video,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => video.play(),
        onLeave: () => {
            video.pause();
            video.currentTime = 0;
        },
        onEnterBack: () => video.play(),
        onLeaveBack: () => {
            video.pause();
            video.currentTime = 0;
        }
    });
});

//ABOUT ME//

gsap.from(".about-me-title",
    {
        y: 40,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
            trigger: ".about-me-title",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 2
        }
    }
);

gsap.from(".contact-title",
    {
        y: 40,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
            trigger: ".contact-title",
            start: "top 90%",
            end: "bottom 85%",
            scrub: 2,
        }
    }
)

/* ROPE */

const path = document.querySelector(".rope path");
const sonido = new Audio("../audio/efecto.wav");

let puedeSonar = true;

document.querySelector(".rope").addEventListener("mousemove", (e) => {
    const y = e.offsetY;

    const isUp = y < 20;
    const controlY = isUp ? 5 : 35;

    const d = `M0,20 Q500,${controlY} 1000,20`;

    gsap.to(path, {
        attr: { d },
        duration: 0.3,
        ease: "power2.out"
    });

    if (puedeSonar) {
        sonido.currentTime = 0;
        sonido.play();
        puedeSonar = false;
        setTimeout(() => {
            puedeSonar = true;
        }, 300);
    }
});

document.querySelector(".rope").addEventListener("mouseleave", () => {
    gsap.to(path, {
        attr: { d: "M0,20 Q500,20 1000,20" },
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
    });
});


/* Cursor */
const cursor = document.querySelector(".custom-cursor");

if (window.innerWidth >= 768) {

    window.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.2,
            ease: "power2.out"
        });
    });


    const links = document.querySelectorAll(".footer-list li a i,#arriba,.copi p,h1,.btn-eng,#abrir,.cerrar-menu,.subtitle-hero,.title-portfolio,.about-me-title,.contact-title,.web h4,.web h3,.web i,.resaltado,.email a");
    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            cursor.classList.add("hovering-link");

            gsap.to(cursor, {
                scale: 10,
                duration: 0.2,
                ease: "power2.out"
            });
        });

        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("hovering-link");

            gsap.to(cursor, {
                scale: 1,

                duration: 0.2,
                ease: "power2.out"
            });
        });
    });
}

