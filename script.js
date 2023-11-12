const swup = new Swup();
const mobNav = document.querySelector('.mob-nav')
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click',()=>{
    mobNav.classList.toggle('mob-nav-active')
})


const observer = new IntersectionObserver((entities)=>{
    // console.log("entities",entities)
    entities.forEach((entry)=>{
        // console.log("entry",entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const getEle = document.querySelectorAll('.hidden')
getEle.forEach((item) => observer.observe(item))