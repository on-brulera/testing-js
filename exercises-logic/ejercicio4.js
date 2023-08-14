// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numeroPrimo = (num = undefined) => {
  if (num === undefined) return "No se ingreso un número";
  if (typeof num !== "number") return "debe ingresar un número type number";
  if (num <= 1) return "El número debe ser mayor a 1";
  for (let index = 2; index <= num - 1; index++) {
    if (num % index === 0) return false;
  }
  return true;
};

console.log("Ejercicio 12 - primo:", numeroPrimo(7));

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const numeroPar = (num = undefined) => {
  if (num === undefined) return "No se ingreso un número";
  if (typeof num !== "number") return "Debe ingresar un numero type number";
  if (num < 1) return "El número debe ser mayor a 0";
  return num % 2 === 0 ? "Par" : "Impar";
};

console.log("Ejercicio 13 - par impar:", numeroPar(11));

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const celciusToFahrenheit = (celcius = undefined) => {
  if (celcius === undefined) return "Debe mandar una cantidad de grados";
  if (typeof celcius !== "number") return "Debe mandar un numero typeof number";
  return `${(celcius * 1.8 + 32).toFixed(2)} °F`;
};

console.log("Ejercicio 14 - C -> F:", celciusToFahrenheit(30));

const fahrenheitToCelsius = (fahrenheit = undefined) => {
  if (fahrenheit === undefined) return "No se mando el valor celsius";
  if (typeof fahrenheit !== "number") return "Mandar un valor typeof number";
  return `${((fahrenheit - 32) / 1.8).toFixed(2)} °C`;
};

console.log("Ejercicio 14 - F -> C:", fahrenheitToCelsius(86));
