var contenedorMuñeco=document.getElementById('contenedorMuñeco');
var contenedorParrafo=document.getElementById('contenedorParrafo');
var stringTextarea = document.getElementById("cajaTexto");

var textoCifrar = [];
var textoComprobar=[];

//Funciones de los botones
function botonEncriptar(){  
    if(comprobarTextArea()==true){
        limpiarDiv();
        var resultadoFinal= encriptar();
        asignarTextoElemento('textoResultado',resultadoFinal);
        limpiarTextArea();
    }else{
        alert("Ingresa un texto para encriptar");
        reiniciarDiv();
    }
}

function botonDesencriptar(){
    if(comprobarTextArea()==true){
        limpiarDiv();
        var resultadoFinal= desencriptar();
        asignarTextoElemento('textoResultado',resultadoFinal);
        limpiarTextArea();
    }else{
        alert("Ingresa un texto para desencriptar");
        reiniciarDiv();
    }
}

//Funciones de encriptar y desencriptar
function encriptar(){
    textoCifrar=textoToArreglo();
    var resultado="";
    for (let i = 0; i < textoCifrar.length; i++) {
        if (textoCifrar[i] == "a") {
            resultado += "ai";
        } else if (textoCifrar[i] == "e") {
            resultado += "enter";
        } else if (textoCifrar[i] == "i") {
            resultado += "imes";
        } else if (textoCifrar[i] == "o") {
            resultado += "ober";
        } else if (textoCifrar[i] == "u") {
            resultado += "ufat";
        } else {
            resultado += textoCifrar[i];
        }
    }
    return resultado;   
}

function desencriptar(){
    textoCifrar=textoToArreglo();
    var resultado="";
    for (let i = 0; i < textoCifrar.length; i++) {
        if (textoCifrar[i] == "a") {
            resultado += "a";
            i+=1;
        } else if (textoCifrar[i] == "e") {
            resultado += "e";
            i+=4;
        } else if (textoCifrar[i] == "i") {
            resultado += "i";
            i+=3;
        } else if (textoCifrar[i] == "o") {
            resultado += "o";
            i+=3;
        } else if (textoCifrar[i] == "u") {
            resultado += "u";
            i+=3;
        } else {
            resultado += textoCifrar[i];
        }
    }
    return resultado;  
}


// Utilidades
function limpiarDiv (){
    contenedorMuñeco.classList.add("ocultar");
    contenedorParrafo.classList.add("ocultar");
}

function reiniciarDiv (){
    asignarTextoElemento('textoResultado','');
    contenedorMuñeco.classList.remove("ocultar");
    contenedorParrafo.classList.remove("ocultar");
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function textoToArreglo(){
    let texto = stringTextarea.value;
    return [...texto];
}

function limpiarTextArea(){
    stringTextarea.value="";
}

function comprobarTextArea(){
    textoComprobar=textoToArreglo();
    if(textoComprobar==""){
        return false;
    }else{
        return true;
    }
}

function botonCopiar(){
    var elementoTexto = document.getElementById("textoResultado").innerText;
    if(elementoTexto!=""){
        navigator.clipboard.writeText(elementoTexto);
        alert('Texto copiado exitosamente.');
        reiniciarDiv();
    }else{
        alert("Error no hay nada que copiar");
    }
}