//Objeto Date
console.log(Date());

let fecha = new Date();

//los metodos UTC te dan la hora respecto al meridiano de grenwich (hora cero)

console.log(fecha);
console.log(fecha.getUTCDay());
console.log(fecha.getDate());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log("fecha:", fecha.toString());
console.log("fecha:", fecha.toDateString());
console.log("fecha:", fecha.toLocaleString());
console.log("fecha:", fecha.toLocaleDateString());
console.log("Ahora (timestamp):", Date.now());

let fechaNacimiento = new Date(2002, 1, 23);
