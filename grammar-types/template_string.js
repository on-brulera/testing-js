//Template String son: `${var}`

let nombre = "On";
let apellido = "Brulera";
let saludo = "Hola";

//concatenar normal
let frase = saludo + " " + nombre + " " + apellido;

//concatenar interpolando variables
let frase2 = `${saludo} ${nombre} ${apellido}`;

//lista de ejemplo en js
let lista = ["Primavera", "Otoño", "Verano", "Invierno"];

//lista con template string en html
let lista2 = `<ul><li>Amarillo</li></ul>`; 

console.log(frase);
console.log(frase2);
