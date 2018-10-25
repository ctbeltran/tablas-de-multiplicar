// Declarión de Variables
let btnCalc = document.querySelector("#btn-calc");
let btnNew = document.querySelector("#btn-new");

//Declaración de Funciones
function generarTablas() {
    for(var i = 1; i <= 10; i++) {
        let numero = document.querySelector("#ingresa-numero").value;
        let tablas = document.querySelector("#tablas-multiplicar");
        let resultado = numero * i;
        let li = document.createElement("li");
        li.className="tabla-item";
        li.innerHTML = numero + " x " + i + " = " + resultado;
        tablas.appendChild(li);
    }
}

newCalc = () => {
    location.reload(true);
}

cargaDocumento = () => {
    btnCalc.addEventListener("click", generarTablas);
    btnNew.addEventListener("click", newCalc);
}

//Asiganción de Eventos
window.addEventListener("load", cargaDocumento);