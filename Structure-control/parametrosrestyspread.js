//Parametros Rest: agregar parametros a una funcion, var infinitos

//funcion normal
function sumar(a, b) {
  return a + b;
}

//funciones con parametros rest;

function sumarRest(a, b, ...c) {
  let resultado = a + b;
  c.forEach(function (numero) {
    resultado += numero;
  });
  return resultado;
}

console.log("Suma Normal:", sumar(1, 1));
console.log("Suma Rest:", sumarRest(1, 1, 1, 1, 1));

//operador spread de propagacion: guarda argumentos de una funcion

const arreglo1 = [1, 2, 3, 4, 5];
const arreglo2 = [5, 6, 7, 8, 9];
const arreglo3 = [...arreglo1, ...arreglo2];

console.log(arreglo1, arreglo2, arreglo3);
