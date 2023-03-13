const burger = document.querySelector('.menu-burger'),
      menu = document.querySelector('.menu'),
      body = document.querySelector('body');


burger.addEventListener('click', () => {
    burger.classList.toggle('clickedBurger');
    menu.classList.toggle('d-none');
    body.classList.toggle('stopScroll')
});

window.addEventListener('click', (e) => {
    if(e.target == menu) {
        burger.classList.toggle('clickedBurger');
        menu.classList.toggle('d-none');
        body.classList.toggle('stopScroll')
    }
})