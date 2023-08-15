// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const decimalToBinary = (decimal = undefined) => {
  if (decimal === undefined) return "No se ingreso un numero decimal";
  if (typeof decimal !== "number") return "Debe ingesar un valor typeof number";
  let resultado = "";
  do {
    resultado = (decimal % 2) + resultado;
    decimal = Math.floor(decimal / 2);
  } while (decimal !== 0);
  return resultado;
};

console.log("Ejercicio 15 - dec -> bin:", decimalToBinary(83));

const binaryToDecimal = (binario = undefined) => {
  if (binario === undefined) return "No se ingreso el binario";
  if (typeof binario !== "string") return "Debe ingresar una cadena";
  const regex = /^[01]+$/;
  if (!regex.test(binario)) return "debe enviar un numero binario";
  let resultado = 0;
  for (let index = 0; index < binario.length; index++) {
    resultado += binario[index] * Math.pow(2, binario.length - 1 - index);
  }
  return resultado;
};

console.log("Ejercicio 15 - bin -> dec:", binaryToDecimal("1010011"));

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const montoFinal = (total = undefined, descuento = undefined) => {
  if (total === undefined) return "No se ingreso el monto";
  if (descuento === undefined) return "No se ingreso el descuento";
  if (typeof total !== "number") return "El total debe ser un numero";
  if (typeof descuento !== "number") return "El descuento debe ser un numero";
  if (total < 0) return "el total no debe ser menor a cero";
  if (descuento < 0) return "el descuento| no debe ser menor a cero";
  return total - (total * descuento) / 100;
};

console.log("Ejercicio 16 - descuento:", montoFinal(1000, 20));

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularAnio = (fecha = undefined) => {
  if (fecha === undefined) return "No se ingreso la fecha";
  if (!(fecha instanceof Date)) return "Debe ingresar un objeto tipo fecha";
  let fechaActual = new Date();
  anios = fechaActual.getFullYear() - fecha.getFullYear();
  if (
    fecha.getMonth() < fechaActual.getMonth() ||
    (fecha.getMonth() == fechaActual.getMonth() &&
      fecha.getDate() < fechaActual.getDate())
  )    
  anios--;
  return anios;
};

console.log("Ejercicio 17 - contar años:", calcularAnio(new Date(1984, 4, 23)));
