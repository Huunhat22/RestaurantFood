/* ======================== SHOW MENU  ===========================*/
// debugger
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        navmenu = document.getElementById(navId)
    // kiểm tra khác null thì thực hiện
    if (navmenu && toggle) {
        toggle.addEventListener('click', () => {
            navmenu.classList.toggle('header__menu-show');
        })
    }

    /* cách 2 sử dụng hàm add và remove */
    /* toggle.addEventListener('click', () => {
        if (navmenu.classList.value.indexOf('header__menu-show') === -1) {
            navmenu.classList.add('header__menu-show');
        }
        else {
            navmenu.classList.remove('header__menu-show');
        }
    }) */

}
showMenu('header-toggle', 'nav-menu');

/* ======================== REMOVE MENU WHEN CLICK MENU LINK MOBILE ===========================*/
const linklist = document.querySelectorAll('.header__menu-link');

const removemenulist = () => {
    const navmenu = document.getElementById('nav-menu');
    navmenu.classList.remove('header__menu-show');

}
linklist.forEach(element => {
    element.addEventListener('click', removemenulist);
});

/* ======================== ACTIVE COLOR LINK OF MENU ON HEADER WHEN SCROLL WINDOWS ===========================*/

const sectionlist = document.querySelectorAll('section[id]');

function activelink() {
    const scrollY = window.pageYOffset;

    sectionlist.forEach(element => {
        const sectionHeight = element.offsetHeight;
        const sectionTop = element.offsetTop - 50;
        sectionId = element.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.header__menu a[href*=' + sectionId + ']').classList.add('header__menu-activelink')
        }else{
            document.querySelector('.header__menu a[href*=' + sectionId + ']').classList.remove('header__menu-activelink')
        }
    })
}
window.addEventListener('scroll', activelink);

/* ======================== BOX-SHADOW HEADER WHEN SCROLL===========================*/

function changeheader() {
    const scrollY = window.pageYOffset;
    const nav = document.querySelector('header');
    if (scrollY >= 200) {
        nav.classList.add('header__scroll');
    } else {
        nav.classList.remove('header__scroll');
    }
}

window.addEventListener('scroll', changeheader);

/* ======================== SHOW SCROLL TOP ===========================*/

function scrollTop() {
    const scroll = document.querySelector('.scrolltop');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) {
        scroll.classList.add('show-scroll');
    }
    else {
        scroll.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollTop);

/* ======================== CHANGE THEME  ===========================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__info, .home__image,
            .about__info, .about__image,
            .services__item, .menu__item,
            .feature__info, .app__image,
            .contact__info, .contact__button,
            .footer__item`, {
    interval: 200
})