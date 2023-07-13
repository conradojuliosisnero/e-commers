 // boton de subir 
 const btnUp = document.querySelector(".btn__up");

 function mostrarbtn() {
     let ubicacion = window.scrollY;
     if(ubicacion >= 700){
         btnUp.style.opacity = "1";
         btnUp.style.transition = ".3s";
         btnUp.style.transform = "translateY(-20px)";
     }else{
         btnUp.style.opacity = "0";
         btnUp.style.transition = ".3s";
         btnUp.style.transform = "translateY(20px)";
     }
 }

 window.addEventListener('scroll',mostrarbtn);