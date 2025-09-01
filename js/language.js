let currentLang = localStorage.getItem('idioma') || 'es';

function cambiarIdioma(idioma, callback) {
    fetch(`lang/${idioma}.json`)
        .then(res => res.json())
        .then(data => {
            // Actualizar textos
            document.querySelectorAll('[data-section][data-value]').forEach(elem => {
                const section = elem.getAttribute('data-section');
                const key = elem.getAttribute('data-value');
                if (key === 'see_more' && elem.querySelector('.see-more-text')) {
                    elem.querySelector('.see-more-text').textContent = data[section][key];
                } else {
                    elem.textContent = data[section][key];
                }
            });

            // 🔹 Cambiar CV según idioma
            const cvLink = document.getElementById("cv-link");
            if (cvLink) {
                if (idioma === "es") {
                    cvLink.href = "img/resume-es.pdf";
                } else if (idioma === "en") {
                    cvLink.href = "img/resume-eng.pdf";
                }
            }

            localStorage.setItem('idioma', idioma);
            if (typeof callback === 'function') callback();
        })
        .catch(err => console.error(err));
}

// Aplicar idioma al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    cambiarIdioma(currentLang);
});
