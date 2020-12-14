const mobileMenu = document.getElementById('mobile-menu');
const menu = document.getElementById('top-nav');
const main = document.querySelector('main');

mobileMenu.addEventListener('click', () => {
    menu.classList.toggle('toggle-open');
});

main.addEventListener('click', () => {
    menu.classList.remove('toggle-open');
});

console.log("loaded mobile menu")