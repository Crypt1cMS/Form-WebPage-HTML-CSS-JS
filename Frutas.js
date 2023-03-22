/*
let frutas = {
    fruta: "",
    colores: "",
    cantidad: "",
    forma: "",
    frutaFavorita: "",
};

let gato = {
    raza: "",
    color: "",
    tamaño: "",
    peso: "",
    edad: "",
};

let carro = {
    color: "",
    modelo: "",
    año: "",
    traccion: "",
    tipoDeGasolina: "",
};
*/

/*
function gato (raza,edad,id,color,tamano,vacunas,peso,razaPadre,razaMadre,sucursal){

    this.raza=raza;
    this.color= color;
    this.tamaño= tamaño;
    this.sexo= sexo,
    this.peso= peso;
    this.edad= edad;
  };
  var miGato = new Gato('un gato','1','01','Negro','20 cm','Si','15 Kg','otro gato','uno mas','RD');
  console.log(miGato);
  var miGato2 = new Gato('gato dos gato','1','01','Negro','20 cm','Si','15 Kg','otro gato','uno mas','RD');
  console.log(miGato2);
*/

const formFrutas = document.querySelector('#formFrutas');
const frutasRegistradas = [];

formFrutas.addEventListener('submit', function(event) {
event.preventDefault();

const nuevasFrutas = {
    fruta: document.querySelector('#fruta').value,
    colores: document.querySelector('#coloresFruta').value,
    cantidad: document.querySelector('#cantidadFruta').value,
    forma: document.querySelector('#formaFruta').value,
    frutaFavorita: document.querySelector('#frutaFavorita').value
};

frutasRegistradas.push(nuevasFrutas)

console.table(frutasRegistradas);

});