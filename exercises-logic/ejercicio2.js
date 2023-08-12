// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirCadena = (cadena = "") => {
  return !cadena ? "No hay cadena" : cadena.split("").reverse().join("");
};

console.log("Ejercicio 5 - invertir cadena:", invertirCadena("Hola"));

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contarPalabra = (texto = "", palabra = "") => {
  if (!texto) return "No hay texto";
  if (!palabra) return "No hay palabra a buscar";
  const palabras = texto.split(" ");
  contador = 0;
  palabras.forEach((sword) => {
    if (sword === palabra) contador++;
  });
  return contador;
};

console.log(
  "Ejercicio 6 - contar palabra:",
  contarPalabra("El mejor wiski del mundo", "mundo")
);

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palabraPalindroma = (texto = "") => {
  if (!texto) return "No hay texto";
  texto = texto.toLowerCase();
  let textoInverso = texto.split("").reverse().join("");
  return texto === textoInverso;
};

console.log("Ejercicio 7 - palabra palindroma:", palabraPalindroma("HoaoH"));

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const elimarPalabra = (texto = "", palabra = "") => {
  return !texto
    ? "No hay texto"
    : !palabra
    ? "No especifica palabra a borrar"
    : texto.replaceAll(palabra, "");
};

console.log(
  "Ejercicio 8 - eliminar patrón:",
  elimarPalabra("on brulera on team", "on")
);
