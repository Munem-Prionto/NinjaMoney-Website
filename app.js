const btn= document.querySelector('.hamburger');
const nav = document.querySelector('.mobile-nav')
const open = document.querySelector('.open');
const close = document.querySelector('.close');

document.querySelector('#year').innerHTML = `${new Date().getFullYear()}`;


btn.addEventListener('click' , e=> {
    console.log(e)
    e.preventDefault()
    nav.classList.toggle('hide')
    open.classList.toggle('hide')
    close.classList.toggle('hide')


})

window.addEventListener('resize' , e=> {
    if(window.innerWidth > 500) {
        nav.classList.add('hide')
        close.classList.add('hide')
        open.classList.remove('hide')
    }

     
})