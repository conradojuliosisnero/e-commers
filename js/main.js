const abrirMenu = document.querySelector('.abrir__menu');//icono de abrir menu
const cerrarMenu = document.querySelector('.quitar__menu');//icono de quitar menu
const navegador = document.querySelector('.nav');//navegador
const menu = document.querySelector('.menu');//menu con lista de links

function mostrarMenu() {//abrir el menu
    abrirMenu.addEventListener('click',()=>{
        navegador.classList.toggle('active');
        cerrarMenu.classList.toggle('activo');
        menu.classList.toggle('active');
    })
}

function ocultarMenu() {//cerrar el menu
    cerrarMenu.addEventListener('click',()=>{
        navegador.classList.remove('active');
        abrirMenu.classList.remove();
        cerrarMenu.classList.toggle('activo');
        menu.classList.remove('active');
    })
}


mostrarMenu(abrirMenu);