// This was used to add click event on the toggler and also a blur
const menuOpen = document.querySelector('.ri-menu-add-line')
const menuClose = document.querySelector('.ri-close-circle-fill')
const navMenu = document.querySelector('.navlinks')
const wraper = document.querySelector('.wraper')
const html = document.querySelector('html')

menuOpen.addEventListener('click', function(){
    navMenu.style.left = '50%'
    menuOpen.style.display = 'none'
    menuClose.style.display = 'block'
    wraper.classList.add('blur')
    html.classList.add('hideScroll')
})

menuClose.addEventListener('click', function(){
    navMenu.style.left = '-50%'
    menuOpen.style.display = 'block'
    menuClose.style.display = 'none'
    wraper.classList.remove('blur')
    html.classList.remove('hideScroll')
})

const navLists = document.querySelectorAll('li')
navLists.forEach((element) => {
    element.addEventListener('click', function(){
        navMenu.style.left = '-50%'
        menuClose.style.display = 'none'
        menuOpen.style.display = 'block'
        html.classList.remove('hideScroll')
        wraper.classList.remove('blur')
    })
})