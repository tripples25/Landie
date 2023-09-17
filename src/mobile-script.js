const navList= document.querySelector('.header-navigation-button')
const navListContainer = document.querySelector('.hamburger-container');
const main = document.querySelector('body');

navList.addEventListener('click', () => {
    navListContainer.classList.toggle("active")
    main.classList.toggle("scroll-lock")
});
