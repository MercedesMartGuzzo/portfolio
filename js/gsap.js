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
/* const text = new SplitType('.subtitle-hero', { types: "words, chars" });

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
        duration: 1,
        ease: "back.out",
        delay: index * 0.01
    });

 
    function charsHover() {
        gsap.timeline()
            .to(char, {
                y: gsap.utils.random(-30, 30),
                x: gsap.utils.random(-30, 30),
                rotate: gsap.utils.random(-50, 50),
                scale: gsap.utils.random(0.5, 1.5),
                duration: .5,
                ease: "back.out",
                onStart: () => char.removeEventListener("mouseenter", charsHover),
            })
            .to(char, {
                y: 0,
                x: 0,
                rotate: 0,
                scale: 1,
                
                delay: 1,
                duration: .5,
                ease: "back.out",
                onComplete: () => setTimeout(() => char.addEventListener("mouseenter", charsHover), 100),
            });
    }

    char.addEventListener("mouseenter", charsHover);
});
 */
/* HERO-P */

gsap.from(".hero-p", {
    opacity: 0,
    y: 50,
    duration: 2,
    delay: 1,
    ease: "bounce.out"
})


/* PORTADA-IMG */
gsap.fromTo(".portada img",
    {
        y: 50,
        opacity: 0,
        backgroundColor: "#005cef",
    },
    {
        y: 0, opacity: 1,
        backgroundColor: "white",
        duration: 1.5,
        ease: "power2.out",
        delay: 0.5
    }
);

/* HOVER PORTADA */



/* document.querySelector(".portada img").addEventListener("mouseenter", function () {
    gsap.to(this,
        {


            backgroundColor: "black",
            duration: 0.5
        });
});

document.querySelector(".portada img").addEventListener("mouseleave", function () {
    gsap.to(this,
        {

            backgroundColor: "", 
            duration: 0.5
        });

});
 */




/* HELLO */


/* const text1 = new SplitType(".hello h3", { types: "words, chars" });

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
); */


/* const hello = document.querySelector(".hello h3");
const textWidth = hello.offsetWidth;

gsap.fromTo(
    ".hello h3",
    { x: `-${textWidth}px`, color: "black" },
    {
        x: "100vw",
        duration: 5,
        color: "#ff5733",
        delay: 1,
        repeat: -1,
        ease: "linear",
    }
); */
const hello = document.querySelector(".hello h3");
const textWidth = hello.offsetWidth;

// Detectar si el body tiene la clase dark-mode
const isDarkMode = document.body.classList.contains("dark-mode");

// Elegir el color según el modo
const color = isDarkMode ? "#00ffee" : "tomato"; // poné los colores que quieras para cada modo

gsap.fromTo(
    ".hello h3",
    { x: `-${textWidth}px`, color: isDarkMode ? "white" : "black" },
    {
        x: "100vw",
        duration: 5,
        color: color,
        delay: 1,
        repeat: -1,
        ease: "linear",
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

const splitText = new SplitType(".portfolio-p", { types: "lines" });

gsap.from(splitText.lines, {
    opacity: 0,
    y: 20,
    duration: 1,
    /*  delay:1, */
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".portfolio-p",
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none none",
    }
});

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
            scrub: true,

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


const path = document.querySelector(".rope path");

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


    const links = document.querySelectorAll(".footer-list li a i,#arriba, .copi, p, h1,.hello,.btn-eng, #abrir,.cerrar-menu,.subtitle-hero, .title-portfolio, .about-me-title, .contact-title, .web h4, .web button, .web p, .web a, .web i, .hello h3, .resaltado, .email a");

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

