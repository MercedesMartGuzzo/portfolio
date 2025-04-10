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

/* NAV */
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
document.addEventListener("DOMContentLoaded", function () {

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
});


/* toggle-btn */
document.querySelectorAll(".toggleBtn").forEach(button => {
    button.addEventListener("click", function () {
        let container = this.closest("div"); // Encuentra el div contenedor más cercano
        let title = container.querySelector(".featureTitle"); // Encuentra el título dentro del div
        let list = container.querySelector(".featureList"); // Encuentra la lista dentro del div
        let icon = this.querySelector("i"); // Encuentra el icono dentro del botón

        // Alternar visibilidad
        title.classList.toggle("hidden");
        list.classList.toggle("hidden");

        // Alternar icono de flecha
        icon.classList.toggle("bi-arrow-down");
        icon.classList.toggle("bi-arrow-up");
    });
});



document.querySelectorAll(".certificado img").forEach(certificado => {
    certificado.addEventListener("click", function () {
        // Create modal container
        const modal = document.createElement("div");
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100vw";
        modal.style.height = "100vh";
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
        modal.style.zIndex = "10000";

        // Create enlarged image
        const enlargedImg = document.createElement("img");
        enlargedImg.src = this.src;
        enlargedImg.style.maxWidth = "90%";
        enlargedImg.style.maxHeight = "90%";
        enlargedImg.style.borderRadius = "10px";

        // Append image to modal
        modal.appendChild(enlargedImg);

        // Append modal to body
        document.body.appendChild(modal);

        // Close modal on click
        modal.addEventListener("click", () => {
            document.body.removeChild(modal);
        });
    });
});

/* FADE-IN CERTIFICADOS */


document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los elementos que deseas animar
    const elements = document.querySelectorAll('.fade-in');

    // Crear el observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.05// 10% del elemento visible
    });

    // Observar todos los elementos seleccionados
    elements.forEach(element => {
        observer.observe(element);
    });
});

/* BOTON ARRIBA- CONTACT */

document.addEventListener("DOMContentLoaded", () => {
    const btnAbout = document.querySelector("#arriba");
    const aboutMe = document.querySelector("#about-me");

    btnAbout.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        const aboutMeTop = aboutMe.offsetTop;
        const aboutMeBottom = aboutMeTop + aboutMe.offsetHeight;

        // Mostrar solo si estamos DENTRO de la sección #about-me
        if (scrollY >= aboutMeTop && scrollY < aboutMeBottom) {
            btnAbout.classList.add("show");
        } else {
            btnAbout.classList.remove("show");
        }
    });
});
