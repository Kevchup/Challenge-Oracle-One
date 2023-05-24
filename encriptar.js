const formu = document.getElementById('formulario');


formu.addEventListener('submit',traeT);

function traeT(){
let traerText = document.getElementById('textareaIn').value;
    mostrarT(traerText);
    event.preventDefault()
}

function mostrarT(text){
let mostrarText = document.getElementById('mostrar');
let ocultarText = document.getElementById('ocultar');
let cajaT = document.getElementById('encriptado');
cajaT.innerHTML=text;
mostrarText.style.display= "block";
ocultarText.style.display= "none";
}


function encriptarT() {
  let traerText = document.getElementById('textareaIn').value;
  const equivalencias = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };
  const regex = new RegExp(Object.keys(equivalencias).join('|'), 'gi');
  const textoEncriptado = traerText.replace(regex, (match) => equivalencias[match.toLowerCase()]);
  document.getElementById('encriptado').value = textoEncriptado;
}

function desencriptarT() {
  let traerText = document.getElementById('textareaIn').value;
  const equivalencias = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
  };
  const regex = new RegExp(Object.keys(equivalencias).join('|'), 'gi');
  const textoDesencriptado = traerText.replace(regex, (match) => equivalencias[match.toLowerCase()]);
  document.getElementById('encriptado').value = textoDesencriptado;
}

function validarMin() {
  let traerText = document.getElementById('textareaIn').value;
  if (traerText.trim() !== '' && !/^[a-z\s]+$/.test(traerText)) {
    alert('Solo se admiten letras minúsculas. Por favor ingrese un texto válido.');
    document.getElementById('textareaIn').value = "";
  }
}

const formu2 = document.getElementById('traeTexto');

formu2.addEventListener('submit',copyT);
/* Se utilizan funciones flecha en la API Clickboard para controlar errores */
function copyT(){
let copiarT= document.getElementById('encriptado').value;
navigator.clipboard.writeText(copiarT)
.then(() => {
  console.log('Texto copiado al portapapeles');
})
.catch((error) => {
  console.error('Error al copiar el texto: ', error);
});
}








