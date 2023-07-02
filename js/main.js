const desplegar = document.querySelector('.abrir__menu');//icono de abrir
const cerrar = document.querySelector('.quitar__menu');//icono de cerrar
const menu = document.querySelector('.menu');//menu responsive

// funciones de boton resposive 
function mostrarMenu(){
    desplegar.addEventListener('click',()=>{
        menu.classList.add('active')//muestra el menu
        cerrar.classList.add('activo');//boton de cerrar menu activo
        desplegar.classList.add('inactivo');//boton de abrir menu inactivo
    })
}

function ocultarMenu(){
    cerrar.addEventListener('click',()=>{
        menu.classList.remove('active')//lo oculta
        desplegar.classList.remove('inactivo');
        cerrar.classList.remove('activo');
    })
}
