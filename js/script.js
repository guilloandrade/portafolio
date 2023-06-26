/*===== toggle icon navbar ===*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active');
};

/*===== scroll sections avtive link ===*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) { 
            navLinks.forEach (links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*===== sticky navbar ===*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==== remove toggle icon and navbar when click navbar link (scroll), activa el nav dependiendo las dimenciones responsiva ===*/
    menuIcon.classList.remove('bx-x'); 
    navbar.classList.remove('active');

};

/*==========scroll reveal, estradas de parrafos por los lados=========*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .Hard-Skills-container, .portafolio-box, .contact form, .carousel-container, .skills-items, .skills-hobbies',  { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .about-content', { origin: 'left' });
ScrollReveal().reveal('.home-content p', { origin: 'right' });

/*==========typed js, controla funcion de reescribir=========*/

var typed = new Typed('.multiple-text', {
    strings: ['Ingeniero En Sistemas', 'Desarrollador FrontEnd', 'Tecnico en Redes de Datos'],
    typedSpeed: 100,
    backSpeed: 130,
    backDelay: 1000,
    loop: true
    
});

/*==========carrusel cursos=========*/
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

setInterval(nextSlide, 3000); // Cambiar cada 3 segundos
