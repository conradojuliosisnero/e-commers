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

// slaider card 

const flechaDerecha = document.querySelector('.right');
const flechaIzquierda = document.querySelector('.left');
const slaider = document.querySelector('.card__img');
const imagenes = document.querySelector('.img');

flechaDerecha.addEventListener("click",e => moverDerecha());
flechaIzquierda.addEventListener("click",e => moverIzquierda());

let index = 0;//indice  
let counter = 0;//contador


function moverDerecha() {
    // funcion 
    counter++;
    index = index + 100;
    slaider.style.transform = `translate(-${index}%)`;
    // condicional
    if (counter > slaider.childElementCount - 1 ) {
        counter = 0;
        index = 0;
        slaider.style.transform = `translate(-${index}%)`;
    }
    return
}


function moverIzquierda() {
        counter--;
        console.log(counter)
        index = index - 100;
        slaider.style.transform = `translate(-${index}%)`;
        // condicional
        if (counter < 0) {
            counter = slaider.childElementCount-1;
            console.log(counter)
            index = 100 * (slaider.childElementCount-1);
            slaider.style.transform = `translate(-${index}%)`;
        }
        return
}

moverDerecha(flechaDerecha);
moverIzquierda(flechaIzquierda);

