//controlar errores

try {
  noexiste;
  console.log("En el try se agrega el codigo a evaluar");
} catch (error) {
  console.log("catch captura cualquier error en el try:", error);
} finally {
  console.log("ejecutará siempre al final de un bloque try catch");
}

//personalizar errores

try {
  let numero = 11;
  throw new Error("El valor enviado no es un numero");
} catch (error) {
  console.log(error);
}
