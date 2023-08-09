//funcion declarada: se ejecuta en cualquier parte del codigo, incluso antes de ser declaradas

function funDeclarada() {
  console.log("Uno");
}

function obtenerNumero() {
  return Math.random();
}

function sumar(numa = 10, numb = 10) {
  return numa + numb;
}

funDeclarada();
console.log(obtenerNumero().toFixed(2));
console.log(sumar(1, 1));
console.log(sumar());

//funcion expresada: asignar la funcion a una variable, se ejecuta despues de definirla

const sumaExpresada = function (num1 = 5, num2 = 5) {
  return num1 + num2;
};

console.log(sumaExpresada());
console.log(sumaExpresada(1,2));
