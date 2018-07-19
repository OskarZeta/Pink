var toggle = document.querySelector('.main-menu__toggle');
var menu = document.querySelector('.main-menu__list');
var cross = document.querySelector('.main-menu__close');
var header = document.querySelector('.main-header');

window.addEventListener('load', function () {
    header.style.marginTop = menu.offsetHeight;
});

toggle.addEventListener('click', function() {
    if (window.getComputedStyle(menu).getPropertyValue('display') == 'none'){
        menu.style.display = 'block';
        if (parseInt(window.getComputedStyle(this.parentNode).getPropertyValue('width')) < 700){
            header.style.marginTop = menu.offsetHeight;
        }
    }
    else {
        menu.style.display = 'none';
        header.style.marginTop = 0;
    }
});
cross.addEventListener('click', function() {
    if (window.getComputedStyle(menu).getPropertyValue('display') == 'none'){
        menu.style.display = 'block';
        header.style.marginTop = menu.offsetHeight;
    }
    else {
        menu.style.display = 'none';
        header.style.marginTop = 0;
    }
});
