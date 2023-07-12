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

/////////menu dinamico al hacer scroll/////////////

const menuDinamico = document.querySelector(".header");
let ubicacionPrincipal = window.scrollY;//ubicacion en 0

    // funcion de esconder el menu 
function esconderMenu() {
        //ubicacion al hacer scroll
        let ubicacionActual = window.scrollY;
        //si la ubicacion en actual es mayor a 0 
        if (ubicacionActual >= ubicacionPrincipal) {
            menuDinamico.style.top = "-120px";
            menuDinamico.style.transition = ".5s";
        }else{
            menuDinamico.style.top = "0px";
            menuDinamico.style.background = "white";
            menuDinamico.style.transition = ".5s";
        }
        // ahora la ubicaion en 0 pasa a ser la ubicacion actual 
        ubicacionPrincipal = ubicacionActual;
}
    // ejecutamos la funcion 
window.addEventListener('scroll',esconderMenu);

// iconos del menu al hacer scroll 