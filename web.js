






// Starting from here

const menuBox = document.querySelector('.menu-box')
const middleNav = document.querySelector('.middle-nav')

menuBox.addEventListener('click', () => {
    menuBox.classList.toggle('active')
    middleNav.classList.toggle('active')
})

const theme = document.querySelector('#moon')
const body = document.querySelector('body')
const nav = document.querySelector('nav')
const container = document.querySelector('.big-container')
const animalsTitle = document.querySelector('.Animals-title')


theme.addEventListener('click', () => {
    theme.classList.toggle('active')
    body.classList.toggle('active')
    nav.classList.toggle('active')
    menuBox.classList.toggle('selected')
    container.classList.toggle('active')
    animalsTitle.classList.toggle('active')
})

const logo = document.querySelector('#logo')

logo.addEventListener('click', () => {
    window.scrollTo(0, 0)
},1000)

