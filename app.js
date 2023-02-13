const btnMenu = document.querySelector('.menu')
const menuContent = document.querySelector('.menu-content')
const tales = document.querySelectorAll('.tale')
const book = document.querySelector('.book')

btnMenu.addEventListener('click', ()=> {
    menuContent.classList.toggle('show')
})

for (let i = 0; i < tales.length; i++){
    tales[i].addEventListener('click', () => {
        menuContent.classList.toggle('show')
        book.scrollTop = 0
        if (i == 0){book.innerHTML = tale01}
        if (i == 1){book.innerHTML = tale02}
        if (i == 2){book.innerHTML = tale03}
    })
}