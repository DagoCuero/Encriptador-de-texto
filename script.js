//declarar variables//
const textarea = document.querySelector(".tex__area");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar(){
    const textEncriptado = encriptar(textarea.value);
    mensaje.value = textEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let nuevoStringEncriptada = stringEncriptada
    nuevoStringEncriptada = nuevoStringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {

      if (stringEncriptada.includes(matrizCodigo[i][0])) {
        nuevoStringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return nuevoStringEncriptada
}

function btnDesencriptar(){
    const textEncriptado = desencriptar(textarea.value);
    mensaje.value = textEncriptado;
    textarea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let nuevoStringDesencriptada = stringDesencriptada
    nuevoStringDesencriptada = nuevoStringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {

      if (stringDesencriptada.includes(matrizCodigo[i][1])) {
        nuevoStringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return nuevoStringDesencriptada;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}