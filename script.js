const nav = document.querySelector('.navbar')
const mobNav = document.querySelector('.mob-nav')
const hamburger = document.querySelector('.hamburger')
window.addEventListener('scroll',()=>{
    if(window.scrollY > 100){
        nav.style.backdropFilter = "blur(10px)"
    }
})

hamburger.addEventListener('click',()=>{
    mobNav.classList.toggle('mob-nav-active')
})