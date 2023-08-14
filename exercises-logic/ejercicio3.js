// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numeroAleatorio = () => Math.floor(Math.random() * (600 - 501) + 501);

console.log("Ejercicio 9 - aleatorio:", numeroAleatorio());

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const numeroCapicuo = (num = undefined) => {
  return num === undefined
    ? "No se envio un numero"
    : typeof num !== "number"
    ? "Debe enviar un número"
    : num.toString() === num.toString().split("").reverse().join("");
};

console.log("Ejercicio 10 - capicuo:", numeroCapicuo(1211));

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120

const factorial = (num = undefined) => {
  if (num === undefined) return "No se especifico el número";
  if (typeof num !== "number") return "No se ingreso un número";
  if (num < 0) return "No existe el factorial de un número negativo";
  let resultado = 1;
  for (let index = num; index >= 2; index--) resultado *= index;
  return resultado;
};

console.log("Ejercicio 11 - factorial:", factorial(5));
