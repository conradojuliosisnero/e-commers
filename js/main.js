const abrirMenu = document.querySelector('.abrir__menu');
const cerrarMenu = document.querySelector('.quitar__menu');
const navegador = document.querySelector('.nav');

function mostrarMenu() {
    abrirMenu.addEventListener('click',()=>{
        navegador.classList.toggle('active');
    })
}


mostrarMenu(abrirMenu);