const menu_btn = document.querySelector('#menu_btn-container')
const menu  = document.querySelector('nav ul')

menu_btn.addEventListener('click', ()=>{

    menu.classList.toggle('open')
    menu_btn.classList.toggle('open')
})