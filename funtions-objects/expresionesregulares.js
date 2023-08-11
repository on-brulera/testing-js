//expresiones regulares
//son patrones usados generalmente para busquedas

let cadena = "este es un texto cualquiera";

//crear expresiones
let expresionRegular = new RegExp("texto", "g");
let expresionRegular2 = /texto/ig;

console.log("exp reg 1", expresionRegular.test(cadena));
console.log("exp reg 2", expresionRegular2.test(cadena));
