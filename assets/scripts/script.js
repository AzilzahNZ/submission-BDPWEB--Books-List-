const menuButton = document.querySelector('#menu-btn');
const navMenu = document.querySelector('#navmenu');

menuButton.addEventListener('click', () => {navMenu.classList.toggle('open');
    
});

document.body.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !menuButton.contains(event.target)) {
        navMenu.classList.remove('open');
    }
});