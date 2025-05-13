'use strict';

/**
 * Portfolio Website Script
 * 
 * Este script controla todas as funcionalidades interativas do site de portfólio:
 * - Sidebar com informações de contato
 * - Sistema de filtragem de projetos do portfólio
 * - Modal para exibição de depoimentos
 * - Navegação entre as diferentes seções
 * - Validação do formulário de contato
 * - Sistema de alteração de idioma
 */

// Language system
const i18n = {
    en: {
        // Nav
        "nav.about": "About",
        "nav.resume": "Resume",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Contact",
        
        // Button labels
        "btn.showContacts": "Show Contacts",
        "btn.hideContacts": "Hide Contacts",
        "btn.sendMessage": "Send Message",
        "btn.viewDemo": "View Demo",
        "btn.viewCode": "View Code",
          // Profile
        "profile.role": "Web Developer",
        "profile.language": "Português",

        // About Section
        "about.title": "About me",
        "about.description.p1": "I am a web developer with a solid background in Systems Analysis and Development, specialized in creating modern, responsive digital solutions focused on user experience. I have experience with technologies such as React, Next.js, Django, WordPress, and Docker, working on both front-end and back-end.",
        "about.description.p2": "I always strive to understand the client's real needs to deliver functional, efficient projects that are well thought out in every detail. With knowledge in UX/UI design, I can combine programming with usability, ensuring that the end result is intuitive and effective. I'm always learning and keeping up with trends to offer the best in web technology.",
        "service.title": "Featured Projects",
        "testimonials.title": "Testimonials",
        "clients.title": "Clients",
        "resume.title": "Resume",
        "contact.title": "Contact",
        "contact.form.title": "Contact Form",
        "contact.name": "Full name",
        "contact.email": "Email address",
        "contact.message": "Your Message",        // Filter
        "filter.all": "All",
        "filter.webdesign": "Web Design",
        "filter.applications": "Applications",
        "filter.webdev": "Web Development",
        "filter.select": "Select Category",

        // Education
        "resume.education": "Education",
        "education.degree.systems": "Systems Analysis and Development",
        "education.description.systems": "Complete technical training in software development, focusing on programming, databases, systems architecture and software engineering, plus agile methodologies and project management.",
        "education.degree.webdev": "Web Development Specialization",
        "education.description.webdev": "Specialization course focused on modern frontend and backend technologies, including React, Next.js, Django and Docker, with emphasis on secure and scalable development practices.",
        "education.degree.wordpress": "WordPress Certification",
        "education.description.wordpress": "Certification in advanced WordPress theme and plugin development, including optimization, security, and customization techniques.",

        // Experience
        "resume.experience": "Experience",
        "experience.title.webdev": "Web Developer",
        "experience.description.webdev": "Participated in projects creating institutional websites and landing pages using WordPress and React. Also worked on developing full applications with Django (backend) and Next.js (frontend).",
        "experience.title.wordpress": "WordPress Developer",
        "experience.description.wordpress": "Development of custom themes and plugins for WordPress, ensuring optimized and responsive websites for various clients.",
        "experience.title.python": "Python Developer",
        "experience.description.python": "Proficient in creating development environments with Docker, ensuring scalability and security for developed applications.",

        // Project Categories
        "project.category.webdev": "Web Development"
    },
    pt: {
        // Nav
        "nav.about": "Sobre",
        "nav.resume": "Currículo",
        "nav.portfolio": "Portfólio",
        "nav.contact": "Contato",
        
        // Button labels
        "btn.showContacts": "Mostrar Contatos",
        "btn.hideContacts": "Ocultar Contatos",
        "btn.sendMessage": "Enviar Mensagem",
        "btn.viewDemo": "Ver Demo",
        "btn.viewCode": "Ver Código",
          // Profile
        "profile.role": "Desenvolvedor Web",
        "profile.language": "English",

        // About Section
        "about.title": "Sobre mim",
        "about.description.p1": "Sou desenvolvedor web com sólida formação em Análise e Desenvolvimento de Sistemas, especializado em criar soluções digitais modernas, responsivas e com foco na experiência do usuário. Tenho experiência com tecnologias como React, Next.js, Django, WordPress e Docker, atuando tanto no front-end quanto no back-end.",
        "about.description.p2": "Busco sempre entender a real necessidade do cliente para entregar projetos funcionais, eficientes e bem pensados em cada detalhe. Com conhecimentos em UX/UI design, consigo aliar programação com usabilidade, garantindo que o resultado final seja intuitivo e eficaz. Estou sempre aprendendo e acompanhando tendências para oferecer o melhor da tecnologia web.",
        "service.title": "Projetos em Destaque",
        "testimonials.title": "Depoimentos",
        "clients.title": "Clientes",
        "resume.title": "Currículo",
        "contact.title": "Contato",
        "contact.form.title": "Formulário de Contato",
        "contact.name": "Nome completo",
        "contact.email": "Endereço de Email",
        "contact.message": "Sua Mensagem",        // Filter
        "filter.all": "Todos",
        "filter.webdesign": "Web Design",
        "filter.applications": "Aplicações",
        "filter.webdev": "Desenvolvimento Web",
        "filter.select": "Selecionar Categoria",

        // Education
        "resume.education": "Formação",
        "education.degree.systems": "Análise e Desenvolvimento de Sistemas",
        "education.description.systems": "Formação técnica completa em desenvolvimento de software, com foco em programação, banco de dados, arquitetura de sistemas e engenharia de software, além de metodologias ágeis e gestão de projetos.",
        "education.degree.webdev": "Especialização em Desenvolvimento Web",
        "education.description.webdev": "Curso de especialização focado em tecnologias frontend e backend modernas, incluindo React, Next.js, Django e Docker, com ênfase em práticas de desenvolvimento seguro e escalável.",
        "education.degree.wordpress": "Certificação WordPress",
        "education.description.wordpress": "Certificação em desenvolvimento avançado de temas e plugins WordPress, incluindo técnicas de otimização, segurança e personalização.",

        // Experience
        "resume.experience": "Experiência Profissional",
        "experience.title.webdev": "Desenvolvedor Web",
        "experience.description.webdev": "Participei de projetos de criação de sites institucionais e landing pages utilizando WordPress e React. Também atuei no desenvolvimento de aplicações completas com Django (backend) e Next.js (frontend).",
        "experience.title.wordpress": "Desenvolvedor WordPress",
        "experience.description.wordpress": "Desenvolvimento de temas personalizados e plugins para WordPress, garantindo sites otimizados e responsivos para diversos clientes.",
        "experience.title.python": "Desenvolvedor Python",
        "experience.description.python": "Tenho domínio na criação de ambientes de desenvolvimento com Docker, o que garante escalabilidade e segurança para as aplicações desenvolvidas.",

        // Project Categories
        "project.category.webdev": "Desenvolvimento Web"
    }
};

let currentLanguage = 'pt'; // Default language

function updateTexts() {    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (i18n[currentLanguage][key]) {
            element.textContent = i18n[currentLanguage][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (i18n[currentLanguage][key]) {
            element.placeholder = i18n[currentLanguage][key];
        }
    });
}

// Language button setup
const languageBtn = document.querySelector('[data-language-btn]');
if (languageBtn) {
    languageBtn.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
        document.documentElement.lang = currentLanguage;
        updateTexts();
        // Update button text
        const langSpan = this.querySelector('span');
        if (langSpan) {
            langSpan.textContent = i18n[currentLanguage]['profile.language'];
        }
    });
}

//Opening or closing side bar

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
    sidebarBtn.addEventListener("click", function() {
        elementToggleFunc(sidebar);
        // Update the button text based on current state and language
        const btnText = this.querySelector('span');
        if (btnText) {
            const key = sidebar.classList.contains('active') ? 'sidebar.hideContacts' : 'sidebar.showContacts';
            btnText.textContent = i18n[currentLanguage][key];
        }
    });
}

//Activating Modal-testimonial

const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

const testimonialsModalFunc = function () {
    modalContainer.classList.toggle('active');
    overlay.classList.toggle('active');
}

for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener('click', function () {
        modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
        modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;
        modalTitle.innerHTML = this.querySelector('[data-testimonials-title]').innerHTML;
        modalText.innerHTML = this.querySelector('[data-testimonials-text]').innerHTML;

        testimonialsModalFunc();
    })
}

//Activating close button in modal-testimonial

modalCloseBtn.addEventListener('click', testimonialsModalFunc);
overlay.addEventListener('click', testimonialsModalFunc);

//Activating Filter Select and filtering options

const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

// Tradução das categorias (em inglês para português)
const categoryTranslations = {
    'all': 'todos',
    'web design': 'web design',
    'applications': 'aplicações',
    'web development': 'desenvolvimento web'
};

// Função para verificar se o elemento existe antes de adicionar event listener
const safeAddEventListener = function(element, event, callback) {
    if (element) {
        element.addEventListener(event, callback);
    }
};

// Ativar o dropdown do filtro
if (select) {
    select.addEventListener('click', function () {
        elementToggleFunc(this);
    });
}

// Função de filtro aprimorada
const filterFunc = function (selectedValue) {
    if (!filterItems || filterItems.length === 0) return;
    
    // Converter o valor selecionado para minúsculas para garantir consistência
    selectedValue = selectedValue.toLowerCase();
    
    // Verificar se o valor selecionado existe na lista de traduções
    const normalizedValue = categoryTranslations[selectedValue] || selectedValue;
    
    filterItems.forEach(item => {
        // Pegar a categoria do item do dataset
        const itemCategory = item.dataset.category;
          // Mapeamento bidirecional entre categorias em inglês e português
        const categoryMapping = {
            // Inglês -> Português
            'web development': 'desenvolvimento web',
            'web design': 'web design',
            'applications': 'aplicações',
            // Português -> Inglês (para o atributo data-category)
            'desenvolvimento web': 'web development',
            'aplicações': 'applications'
        };
          // Se "todos" foi selecionado OU a categoria do item corresponde ao valor selecionado
        if (normalizedValue === 'todos' || normalizedValue === 'all') {
            item.classList.add('active');
        } else if (
            itemCategory === selectedValue || 
            categoryMapping[itemCategory] === normalizedValue || 
            itemCategory === categoryMapping[normalizedValue]
        ) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
};

// Adicionar event listeners aos itens do dropdown de seleção
selectItems.forEach(item => {
    safeAddEventListener(item, 'click', function() {
        const selectedValue = this.innerText.toLowerCase();
        
        if (selectValue) {
            selectValue.innerText = this.innerText;
        }
        
        if (select) {
            elementToggleFunc(select);
        }
        
        filterFunc(selectedValue);
    });
});

// Configurar botões de filtro para telas maiores
let lastClickedBtn = filterBtn.length > 0 ? filterBtn[0] : null;

filterBtn.forEach((btn, index) => {
    safeAddEventListener(btn, 'click', function() {
        const selectedValue = this.innerText.toLowerCase();
        
        if (selectValue) {
            selectValue.innerText = this.innerText;
        }
        
        filterFunc(selectedValue);
        
        if (lastClickedBtn) {
            lastClickedBtn.classList.remove('active');
        }
        
        this.classList.add('active');
        lastClickedBtn = this;
    });
});

// Enabling Contact Form

const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

for(let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('input', function () {
        if(form.checkValidity()) {
            formBtn.removeAttribute('disabled');
        } else { 
            formBtn.setAttribute('disabled', '');
        }
    })
}

// Enabling Page Navigation 

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

// Mapeamento dos nomes das páginas em português para os valores data-page
const pageNameMappings = {
    'sobre': 'about',
    'currículo': 'resume',
    'portfólio': 'portfolio',
    'blog': 'blog',
    'contato': 'contact'
};

navigationLinks.forEach((link, linkIndex) => {
    link.addEventListener('click', function() {
        // Pegar o texto do botão e converter para minúsculas
        const buttonText = this.innerHTML.toLowerCase();
        
        // Mapear o texto do botão para o nome da página correspondente
        const pageToShow = pageNameMappings[buttonText] || buttonText;
        
        pages.forEach((page, pageIndex) => {
            if (page.dataset.page === pageToShow) {
                // Ativar a página correspondente
                page.classList.add('active');
                window.scrollTo(0, 0);
            } else {
                // Desativar outras páginas
                page.classList.remove('active');
            }
        });
        
        // Atualizar a classe ativa nos links de navegação
        navigationLinks.forEach((navLink, navLinkIndex) => {
            if (navLinkIndex === linkIndex) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }        });
    });
});

// Sistema de alternância de idioma
const languageToggle = document.getElementById('language-toggle');
const currentLang = { value: 'pt' }; // Começa em português

// Dicionário de traduções
const translations = {
    // Textos da barra lateral
    'sidebar': {
        'pt': {
            'showContacts': 'Mostrar Contatos',
            'hideContacts': 'Ocultar Contatos',
            'email': 'Email',
            'phone': 'Telefone',
            'birthday': 'Aniversário',
            'location': 'Localização',
            'language': 'English' // Texto que aparece no botão quando o site está em português
        },
        'en': {
            'showContacts': 'Show Contacts',
            'hideContacts': 'Hide Contacts',
            'email': 'Email',
            'phone': 'Phone',
            'birthday': 'Birthday',
            'location': 'Location',
            'language': 'Português' // Texto que aparece no botão quando o site está em inglês
        }
    },
    // Navegação
    'nav': {
        'pt': ['Sobre', 'Currículo', 'Portfólio', 'Blog', 'Contato'],
        'en': ['About', 'Resume', 'Portfolio', 'Blog', 'Contact']
    },
    // Titulos das seções
    'sectionTitles': {
        'pt': {
            'about': 'Sobre mim',
            'resume': 'Currículo',
            'portfolio': 'Portfólio',
            'blog': 'Blog',
            'contact': 'Contato',
            'services': 'Projetos em Destaque',
            'testimonials': 'Depoimentos',
            'clients': 'Clientes',
            'education': 'Formação',
            'experience': 'Experiência Profissional',
            'skills': 'Minhas Habilidades',
            'contactForm': 'Formulário de Contato'
        },
        'en': {
            'about': 'About me',
            'resume': 'Resume',
            'portfolio': 'Portfolio',
            'blog': 'Blog',
            'contact': 'Contact',
            'services': 'Featured Projects',
            'testimonials': 'Testimonials',
            'clients': 'Clients',
            'education': 'Education',
            'experience': 'Experience',
            'skills': 'My Skills',
            'contactForm': 'Contact Form'
        }
    },
    // Categorias de filtro
    'filterCategories': {
        'pt': {
            'all': 'Todos',
            'webDesign': 'Web Design',
            'applications': 'Aplicações',
            'webDevelopment': 'Desenvolvimento Web',
            'selectCategory': 'Selecionar Categoria'
        },
        'en': {
            'all': 'All',
            'webDesign': 'Web Design',
            'applications': 'Applications',
            'webDevelopment': 'Web Development',
            'selectCategory': 'Select Category'
        }
    },
    // Formulário de contato
    'contactForm': {
        'pt': {
            'name': 'Nome completo',
            'email': 'Endereço de Email',
            'message': 'Sua Mensagem',
            'send': 'Enviar Mensagem'
        },
        'en': {
            'name': 'Full Name',
            'email': 'Email Address',
            'message': 'Your Message',
            'send': 'Send Message'
        }
    }
};

// Função para alternar o idioma
function toggleLanguage() {
    // Alternar idioma
    currentLang.value = currentLang.value === 'pt' ? 'en' : 'pt';
    
    // Atualizar texto do botão de idioma
    const languageBtn = document.querySelector('#language-toggle span');
    if (languageBtn) {
        languageBtn.textContent = translations.sidebar[currentLang.value].language;
        languageBtn.setAttribute('data-lang', currentLang.value);
    }
    
    // Atualizar textos da barra lateral
    updateSidebarTexts();
    
    // Atualizar textos de navegação
    updateNavigationTexts();
    
    // Atualizar títulos das seções
    updateSectionTitles();
    
    // Atualizar categorias do filtro
    updateFilterCategories();
    
    // Atualizar formulário de contato
    updateContactForm();
}

// Funções de atualização de textos
function updateSidebarTexts() {
    // Botão Mostrar/Ocultar contatos
    const contactBtn = document.querySelector('.info-more-btn span');
    if (contactBtn) {
        const isActive = document.querySelector('.sidebar').classList.contains('active');
        const key = isActive ? 'hideContacts' : 'showContacts';
        contactBtn.textContent = translations.sidebar[currentLang.value][key];
    }
    
    // Títulos dos contatos
    const contactTitles = document.querySelectorAll('.contact-title');
    if (contactTitles.length > 0) {
        const titles = ['email', 'phone', 'birthday', 'location'];
        contactTitles.forEach((title, index) => {
            if (index < titles.length) {
                title.textContent = translations.sidebar[currentLang.value][titles[index]];
            }
        });
    }
}

function updateNavigationTexts() {
    const navLinks = document.querySelectorAll('[data-nav-link]');
    if (navLinks.length > 0) {
        const navTexts = translations.nav[currentLang.value];
        navLinks.forEach((link, index) => {
            if (index < navTexts.length) {
                link.textContent = navTexts[index];
            }
        });
    }
}

function updateSectionTitles() {
    // Título da seção About/Sobre
    updateTitleBySelector('.about .article-title', 'about');
    
    // Título da seção Resume/Currículo
    updateTitleBySelector('.resume .article-title', 'resume');
    
    // Título da seção Portfolio/Portfólio
    updateTitleBySelector('.portfolio .article-title', 'portfolio');
    
    // Título da seção Blog

    
    // Título da seção Contact/Contato
    updateTitleBySelector('.contact .article-title', 'contact');
    
    // Títulos de subseções
    updateTitleBySelector('.service-title', 'services');
    updateTitleBySelector('.testimonials-title', 'testimonials');
    updateTitleBySelector('.clients-title', 'clients');
    updateTitleBySelector('.timeline .h3:first-of-type', 'education');
    updateTitleBySelector('.timeline .h3:nth-of-type(2)', 'experience');
    updateTitleBySelector('.skills-title', 'skills');
    updateTitleBySelector('.form-title', 'contactForm');
}

function updateTitleBySelector(selector, key) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = translations.sectionTitles[currentLang.value][key];
    }
}

function updateFilterCategories() {
    // Botões de filtro
    const filterBtns = document.querySelectorAll('[data-filter-btn]');
    if (filterBtns.length > 0) {
        const categories = [
            translations.filterCategories[currentLang.value].all,
            translations.filterCategories[currentLang.value].webDesign,
            translations.filterCategories[currentLang.value].applications,
            translations.filterCategories[currentLang.value].webDevelopment
        ];
        
        filterBtns.forEach((btn, index) => {
            if (index < categories.length) {
                btn.textContent = categories[index];
            }
        });
    }
    
    // Itens do menu dropdown
    const selectItems = document.querySelectorAll('[data-select-item]');
    if (selectItems.length > 0) {
        const categories = [
            translations.filterCategories[currentLang.value].all,
            translations.filterCategories[currentLang.value].webDesign,
            translations.filterCategories[currentLang.value].applications,
            translations.filterCategories[currentLang.value].webDevelopment
        ];
        
        selectItems.forEach((item, index) => {
            if (index < categories.length) {
                item.textContent = categories[index];
            }
        });
    }
    
    // Valor selecionado no dropdown
    const selectValue = document.querySelector('[data-select-value]');
    if (selectValue) {
        selectValue.textContent = translations.filterCategories[currentLang.value].selectCategory;
    }
    
    // Atualizar categorias dos projetos
    const projectCategories = document.querySelectorAll('.project-category');
    if (projectCategories.length > 0) {
        projectCategories.forEach(category => {
            const text = category.textContent.trim();
            if (text === 'Desenvolvimento Web' || text === 'Web Development') {
                category.textContent = currentLang.value === 'pt' ? 'Desenvolvimento Web' : 'Web Development';
            } else if (text === 'Aplicações' || text === 'Applications') {
                category.textContent = currentLang.value === 'pt' ? 'Aplicações' : 'Applications';
            }
            // Web Design permanece igual em ambos os idiomas
        });
    }
}

function updateContactForm() {
    // Placeholders dos campos do formulário
    const nameInput = document.querySelector('input[name="fullname"]');
    if (nameInput) {
        nameInput.placeholder = translations.contactForm[currentLang.value].name;
    }
    
    const emailInput = document.querySelector('input[name="email"]');
    if (emailInput) {
        emailInput.placeholder = translations.contactForm[currentLang.value].email;
    }
    
    const messageInput = document.querySelector('textarea[name="message"]');
    if (messageInput) {
        messageInput.placeholder = translations.contactForm[currentLang.value].message;
    }
    
    // Botão de envio
    const submitBtn = document.querySelector('.form-btn span');
    if (submitBtn) {
        submitBtn.textContent = translations.contactForm[currentLang.value].send;
    }
}

// Adicionar event listener ao botão de alternância de idioma
if (languageToggle) {
    languageToggle.addEventListener('click', toggleLanguage);
}