//Declaracion: puede tener cualquier tipo de dato
const numeros = Array.of(1, 2, 3, 4);
console.log(numeros);

const mayores = Array(5).fill(true);
console.log(mayores);

const lista = [1, true, "hola", ["A", "B", "C"]];
lista.forEach((element) => {
  console.log(typeof element);
});

const colores = ["Amarillo", "Azul", "Rojo"];
colores.push("Verde");
console.log(colores);
colores.pop();
console.log(colores);

colores.forEach(function (elemento, index) {
  console.log(elemento, index);
});
