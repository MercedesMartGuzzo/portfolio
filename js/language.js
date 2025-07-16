let currentLang = localStorage.getItem('idioma') || 'es';

function cambiarIdioma(idioma) {
    fetch(`lang/${idioma}.json`)
        .then(res => res.json())
        .then(data => {
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
        });
}
