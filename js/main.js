// elementos del nav 
const abrirMenu = document.querySelector('.abrir__menu');//icono de abrir menu
const cerrarMenu = document.querySelector('.quitar__menu');//icono de quitar menu
const navegador = document.querySelector('.nav');//navegador
const menu = document.querySelector('.menu');//menu con lista de links

// funciones 
function mostrarMenu() {
    //abrir el menu
    abrirMenu.addEventListener('click',()=>{
        navegador.classList.toggle('active');
        cerrarMenu.classList.toggle('activo');
        menu.classList.toggle('active');
    })
}

function ocultarMenu() {
    //cerrar el menu
    cerrarMenu.addEventListener('click',()=>{
        navegador.classList.remove('active');
        abrirMenu.classList.remove();
        cerrarMenu.classList.toggle('activo');
        menu.classList.remove('active');
    })
}

// abrir y cerrar el menu responsive 
ocultarMenu(cerrarMenu);
mostrarMenu(abrirMenu);

/////////menu dinamico /////////////

// const menuDinamico = document.getElementById("#header");

// const ocualtarMenu = window.screenY(menuDinamico);

// console.log(ocultarMenu);