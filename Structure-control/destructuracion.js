//destructurar: tomar partes de un objeto

const numeros = [1, 2, 3, 4, 5];

//sin destructurar
let uno = numeros[0];
let dos = numeros[1];

console.log("sin destructurar:", uno, dos);

//con destructuracion
const [one, two] = numeros;
console.log("con destructurar:", one, two);

//con objetos
const persona = {
  nombre: "On",
  apellido: "Brulera",
  edad: 21,
};

let { nombre, apellido } = persona;
console.log("Objeto Persona:", nombre, apellido);
