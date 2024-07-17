const navTriggerBtn = document.querySelector('#nav_trigger_btn');
const navMenu = document.querySelector('#nav_menu');


navTriggerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-is-open'); 
});



// swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },

    // breakpoints
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,

        },
        960: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px ',
    duration: 3000,
    dealy: 600,
});

sr.reveal('.hero__text',  { origin: 'top', distance: '100px', });

sr.reveal('.steps__step ', {distance: '100px', interval: 100});

sr.reveal('.about__text ', { origin: 'left', distance: '100px', });
sr.reveal('.about__img', {origin: 'right', distance: '100px', delay: 800});

sr.reveal('.testimonial__bg', {distance: '100px', delay: 800});
sr.reveal('.testimonial__title', {distance: '100px'});
sr.reveal('.testimonial__slider', {distance: '100px', delay: 1000});


sr.reveal('.brands__img ', { delay:600, distance: '100px', interval: 100});


sr.reveal('.work__title', {distance: '100px'});
sr.reveal('.work__subtitle', {distance: '100px', delay: 800});
sr.reveal('.work__grid', {distance: '100px', delay: 1000});

sr.reveal('.stats', {distance: '100px'});
sr.reveal('.stats__item', {distance: '100px', interval:100,});


sr.reveal('.news__title', {distance: '100px'});
sr.reveal('.news__subtitle', {distance: '100px', delay: 800});


sr.reveal('.news__item', {distance: '100px', interval:100, delay:1000,});


sr.reveal('.contact__container', {distance: '100px'});
sr.reveal('.contact__text', {distance: '100px', delay: 800});


sr.reveal('.footer__items', {distance: '100px', interval:100, });
sr.reveal('.footer__copyright', {distance: '100px'});