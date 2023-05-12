const submenuCompany = document.querySelector('.sub-menu-company');
const submenuFeatures = document.getElementById('sub-menu-features');

const arrowDown = document.querySelectorAll('.arrow-down');

for (let i = 0; i < arrowDown.length; i++) {
    arrowDown[0].addEventListener('mouseover', function () {
        submenuFeatures.classList.remove('hide');


    })
    arrowDown[1].addEventListener('mouseover', function () {
        submenuCompany.classList.remove('hide')


    })

    arrowDown[0].addEventListener('mouseout', function () {
        submenuFeatures.classList.add('hide')
    })
    arrowDown[1].addEventListener('mouseout', function () {
        submenuCompany.classList.add('hide')
    })
}
/*
arrowDown.forEach((element, i) => {
    element.addEventListener('mouseover', function () {
        submenuFeatures.classList.remove('hide')
    })
    element.addEventListener('mouseover', function () {
        submenuCompany.classList.remove('hide')
    })
    element.addEventListener('mouseout', function () {
        submenuFeatures.classList.add('hide')
        submenuCompany.classList.add('hide')
    })

})
*/
const menuHamburger = document.getElementById('menu-hamburger');

const menuHidden = document.querySelector('.menu-mobile');
function openMenu() {
    menuHamburger.addEventListener('click', function () {
        menuHidden.classList.remove('hide')

    });


}
const btnClose = document.getElementById('btn-close');

btnClose.addEventListener('click', closeMenu());
function closeMenu() {
    menuHidden.classList.add('hide');
};




