const abrirMenu = document.querySelector('.abrir__menu');
const cerrarMenu = document.querySelector('.quitar__menu');
const navegador = document.querySelector('.nav');
const menu = document.querySelector('.menu');

function mostrarMenu() {
    abrirMenu.addEventListener('click',()=>{
        navegador.classList.toggle('active');
        cerrarMenu.classList.toggle('activo');
        menu.classList.toggle('active');
    })
}

function ocultarMenu() {
    cerrarMenu.addEventListener('click',()=>{
        navegador.classList.remove('active');
        abrirMenu.classList.remove();
        cerrarMenu.classList.toggle('activo');
        menu.classList.remove('active');
    })
}


mostrarMenu(abrirMenu);