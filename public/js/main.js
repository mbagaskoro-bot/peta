//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
       hamburger.classList.toggle('hamburger-active');
       navMenu.classList.toggle('hidden');
});

// Luar hamburger
window.addEventListener('click', function (e) {
       if (e.target != hamburger && e.target != navMenu) {
              hamburger.classList.remove('hamburger-active');
              navMenu.classList.add('hidden');
       }
});

// navbar fixed
window.onscroll = function () {
       const header = document.querySelector('header');
       const fixedNav = header.offsetTop;

       if (window.pageYOffset > fixedNav) {
              header.classList.add('navbar-fixed');
       } else {
              header.classList.remove('navbar-fixed');
       }
}

// Animate On Scroll
AOS.init({
       once: true,
       offset: 300,
       duration: 1000,
});

//active menu
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').
       forEach(link => {
              if (link.href.includes(`${activePage}`)) {
                     link.classList.add('active-menu')
              }
       })

// klik img penjualan
const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
       allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
       image.addEventListener('mouseover', () => {
              imgContainer.querySelector('img').src = image.src;
              resetActiveImg();
              image.parentElement.classList.add('active');
       });
});

function resetActiveImg() {
       allHoverImages.forEach((img) => {
              img.parentElement.classList.remove('active');
       });
}
