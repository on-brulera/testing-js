// Objeto Console

console.log(console);

//Errores
console.error("Esto es un error");

//avisos
console.warn("Esto es un aviso");

//informacion
console.info("Esto es un mensaje informativo");

//registro
console.log("Un registro de lo ocurrido en la app");

//ejemplos
const nombre = "On";
const apellido = "Brulera";
const edad = 21;

console.log(nombre, apellido, edad);

console.dir(this);

//grupos
console.groupCollapsed("Cursos");
console.log("Curso1");
console.log("Curso2");
console.log("Curso3");
console.groupEnd();

//formato tabla
console.table(Object.entries(["a", "b", "c"], [1, 2, 3]));

//tiempo de ejecucion
console.time("tiempo de ejecucion app:");
const arreglo = Array(100000);
for (let index = 0; index < arreglo.length; index++) {
  arreglo[index] = index;
}
console.timeEnd("tiempo de ejecucion app:");

//contar eventos, ciclos y demas

for (let index = 0; index < 10; index++) {
  console.count("iteraciones de un for");
}

//hacer testing

let x = 3,
  y = 2,
  pruebaXY = "Se espera que x sea menor que y";

console.assert(x < y, (x, y, pruebaXY));
