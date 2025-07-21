let currentLang = localStorage.getItem('idioma') || 'es';

function cambiarIdioma(idioma, callback) {
    fetch(`lang/${idioma}.json`)
        .then(res => res.json())
        .then(data => {
            const portfolioElem = document.querySelector('[data-section="portfolio"][data-value="intro"]');
            if (window.splitText && portfolioElem) {
                window.splitText.revert();
            }
            document.querySelectorAll('[data-section][data-value]').forEach(elem => {
                const section = elem.getAttribute('data-section');
                const key = elem.getAttribute('data-value');

                if (key === 'see_more' && elem.querySelector('.see-more-text')) {
                    elem.querySelector('.see-more-text').textContent = data[section][key];
                } else {
                    elem.textContent = data[section][key];
                }
            });

            localStorage.setItem('idioma', idioma);
            if (typeof callback === 'function') {
                callback();
            }
        });
}
