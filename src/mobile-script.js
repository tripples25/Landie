const navList= document.querySelector('.header-navigation-button')
const navListContainer = document.querySelector('.hamburger-container');

navList.addEventListener('click', () => {
    navListContainer.classList.toggle("active")
});

