/* loader */
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#spinner").style.visibility = "visible";
    } else {
        setTimeout(() => {
            document.querySelector("body").style.visibility = "visible";
            document.querySelector("#spinner").style.visibility = "hidden";
            document.querySelector("#spinner").style.opacity = "0";
            document.querySelector("#spinner").style.transform = "translateY(100%)";
        }, 400);
        setTimeout(() => {
            document.querySelector("#spinner").style.display = "none";
        }, 2000);
    }
};


const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const menuItems = document.querySelectorAll(".nav a");



abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    abrir.style.display = "none";
    cerrar.style.display = "block";
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");

    setTimeout(() => {
        cerrar.style.display = "none";
        abrir.style.display = "block";
    }, 1000);
});
/* Cada vez q hago click en un iten la nav cierra */
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        nav.classList.remove("visible");

        setTimeout(() => {
            cerrar.style.display = "none";
            abrir.style.display = "block";
        }, 1000);
    });
});


/* OCULTAR HEADER */
/*   document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector("header");

    ScrollTrigger.create({
        trigger: ".title-hero",
        start: "top top",
        onEnter: () => {
            gsap.to(header, {
                y: "-100%",
                duration: 0.5,
                ease: "power3.out"
            });
        },
        onLeaveBack: () => {
            gsap.to(header, {
                y: "0%",
                duration: 0.5,
                ease: "power3.out"
            });
        }
    });

     let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        let currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY >= document.querySelector(".title-hero").offsetTop) {
            gsap.to(header, {
                y: "-100%",
                duration: 0.5,
                ease: "power3.out"
            });
        } else {
            gsap.to(header, {
                y: "0%",
                duration: 0.5,
                ease: "power3.out"
            });
        }

        lastScrollY = currentScrollY;
    }); 
});  */ 


/* VIDEO CARDS */


