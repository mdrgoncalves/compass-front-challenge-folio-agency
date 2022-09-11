//DOM Consts
const body = document.body;
const headerButton = document.querySelector('.header__menu');
const menu = document.querySelector('.menu');
const menuCross = document.querySelector('.menu__cross');


/* Adding an event listener to the headerButton. When the headerButton is clicked, the menu appears */
headerButton.addEventListener('click', function() {
    menu.classList.add('menu--active');
    body.classList.add('menu--hidden-overflow');
});

/* Adding an event listener to the menuCross. When the menuCross is clicked, the menu disappears. */
menuCross.addEventListener('click', function() {
    menu.classList.remove('menu--active');
    body.classList.remove('menu--hidden-overflow');
});