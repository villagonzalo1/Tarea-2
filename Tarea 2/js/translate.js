const switchLang = document.getElementById('languageSwitch');

const textos = {
    es: {
        mainTitle: 'Bienvenido a Nuestro Sitio Web',
        mainDescription: 'Descubre nuestras joyas exclusivas',
        section1Title: 'Productos',
        section1Text: 'Variedad de anillos y collares.',
        section2Title: 'Servicios',
        section2Text: 'Asesoría personalizada.',
        section3Title: 'Contacto',
        section3Text: 'Escríbenos para más información.',
        menuInicio: 'Inicio',
        menuProductos: 'Productos',
        menuServicios: 'Servicios',
        menuContacto: 'Contacto'
    },
    en: {
        mainTitle: 'Welcome to Our Website',
        mainDescription: 'Discover our exclusive jewelry',
        section1Title: 'Products',
        section1Text: 'Variety of rings and necklaces.',
        section2Title: 'Services',
        section2Text: 'Personalized advice.',
        section3Title: 'Contact',
        section3Text: 'Write to us for more information.',
        menuInicio: 'Home',
        menuProductos: 'Products',
        menuServicios: 'Services',
        menuContacto: 'Contact'
    }
};

switchLang.addEventListener('change', function () {
    let idioma = this.checked ? 'en' : 'es';

    document.getElementById('mainTitle').textContent = textos[idioma].mainTitle;
    document.getElementById('mainDescription').textContent = textos[idioma].mainDescription;

    document.querySelectorAll('[data-translate]').forEach(function (el) {
        let clave = el.getAttribute('data-translate');
        el.textContent = textos[idioma][clave];
    });
});