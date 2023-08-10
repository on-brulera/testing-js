//Arrow Function: son funciones anonimas y expresadas

//funcion expresada normal

const saludo = function () {
  console.log("Hola");
};

saludo();

//arrow function

//no retorna
const saludar = () => console.log("Hello");
saludar();

//si retorna
const fortuna = (nombre, apellido) =>
  `${nombre} ${apellido} hoy tendras un gran día`;
console.log(fortuna("On", "Brulera"));

//si retorna pero con palabra reservada
const sumar = (num1, num2, ...num3) => {
  let resultado = num1 + num2;
  num3.forEach((num) => {
    resultado += num;
  });
  return resultado;
};
console.log("suma:", sumar(1, 1, 2, 2, 2, 2));

//nota: en objetos crear funciones de forma normal, porque this reconoce el contexto de funcion, y una arrow function reconoce el contexto general
