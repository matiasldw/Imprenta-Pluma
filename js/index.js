const diapositiva = document.querySelector("#diapositivas_js");
let seccionDiapositiva = document.querySelectorAll(".seccion_diapositivas");
let seccionDiapositivaUlt = seccionDiapositiva[seccionDiapositiva.length -1];
const botonDerecha = document.querySelector("#boton_derecho_js");
const botonIzquierda = document.querySelector("#boton_izquierdo_js");

diapositiva.insertAdjacentElement("afterbegin", seccionDiapositivaUlt);

function Siguiente(){
    let seccionDiapositivaPrimero = document.querySelectorAll(".seccion_diapositivas")[0];
    diapositiva.style.marginLeft = "-200%";
    diapositiva.style.transition = "all 0.5s";
    setTimeout(function(){
        diapositiva.style.transition = "none";
        diapositiva.insertAdjacentElement("beforeend", seccionDiapositivaPrimero);
        diapositiva.style.marginLeft= "-100%";
    }, 500);
}

function Anterior(){
    let seccionDiapositiva = document.querySelectorAll(".seccion_diapositivas");
    let seccionDiapositivaUlt = seccionDiapositiva[seccionDiapositiva.length -1];
    diapositiva.style.marginLeft = "0";
    diapositiva.style.transition = "all 0.5s";
    setTimeout(function(){
        diapositiva.style.transition = "none";
        diapositiva.insertAdjacentElement("afterbegin", seccionDiapositivaUlt);
        diapositiva.style.marginLeft= "-100%";
    }, 500);
}

botonIzquierda.addEventListener("click", () =>{
    Anterior();
})

botonDerecha.addEventListener("click", () =>{
    Siguiente();
})

setInterval(() => {
    Siguiente();    
}, 5000);