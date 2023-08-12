// Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

function contarCadena(cadena = "") {
  if (!cadena) {
    return "No hay texto en la cadena";
  }
  return cadena.length;
}

const contarCaracteres = (cadena = "") => {
  return !cadena ? "No hay texto" : cadena.length;
};

console.log("Ejercicio 1 - contar cadena:", contarCadena(""));
console.log("Ejercicio 1 - contar caracteres:", contarCaracteres(""));

// Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function obtenerCadena(cadena, longitud) {
  longitud = Math.abs(longitud);
  let contador = 0;
  cadenaParcial = "";
  while (contador < longitud) {
    cadenaParcial += cadena[contador++];
  }
  return cadenaParcial;
}

const obtenerCaracter = (cadena = "", longitud = undefined) => {
  return !cadena
    ? "Cadena vacia"
    : longitud === undefined
    ? "No fue especificado el limite de caracteres"
    : cadena.slice(0, longitud);
};

console.log("Ejercicio 2 - obtener cadena:", obtenerCadena("Hola Mundo", 0));
console.log("Ejercicio 2 - obtener caracter:", obtenerCaracter("Hola Mundo"));

//Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function separarCadena(cadena, caracter) {
  return cadena.split(caracter);
}

const separarCaracteres = (cadena = "", separador = undefined) => {
  return !cadena
    ? "No hay texto"
    : separador === undefined
    ? "No ingresaste el separador"
    : cadena.split(separador);
};

console.log("Ejercicio 3 - separar cadena:", separarCadena("Hola*Mundo", "*"));
console.log(
  "Ejercicio 3 - separar caracter:",
  separarCaracteres("Hola Mundo", " ")
);

//Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function repetirCadena(cadena, numVeces) {
  const auxCadena = " - " + cadena;
  while (numVeces > 0) {
    numVeces--;
    cadena += auxCadena;
  }
  return cadena;
}

const repetirTexto = (texto = "", numVeces = undefined) => {
  if (!texto) return "No hay texto";
  if (numVeces === undefined) return "No se especifico el número de veces";
  if (numVeces === 0) return "El número de veces no puede ser 0";
  if (Math.sign(numVeces) === -1) return "El num no puede ser menor a 0";
  for (let index = 1; index <= numVeces; index++) console.log(texto);
};

console.log("Ejercicio 4 - repetir cadena:", repetirCadena("hola", 2));
repetirTexto("Primer Ejercicio", 5);
