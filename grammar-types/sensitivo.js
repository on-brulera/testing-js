// JS toma para nombres y definiciones usa valores sensitivos: mayusculas y minusculas no son iguales

const word = "word 1";
const Word = "word 2";

if (word == Word) {
  console.log("igualdad");
}

if (word == word) {
  console.log("igualdad word");
}

//los nombres de variables pueden diferir pero ser iguales en cuanto al apuntador del contenido

const nombre = "henry";
const estudiante1 = nombre;
const estudiante2 = nombre;

if (nombre == estudiante1) {
  console.log("igualdad nombre estudiante");
}

if (estudiante2 == estudiante1) {
  console.log("igualdad estudiantes");
}

//declaracion de variables

var varVar = "var crea una variable general, puede ser accedida por funciones y demás";
let varLet = "let crea una variable a nivel de bloque";
const varConst =
  "const siempre debe ser declarada, crea variables a nivel de bloques";

console.log(varVar);
console.log(varLet);
console.log(varConst);

//alcance de variables

function funcionVar() {
  if (Math.random() < 0.5) {
    var varVar =
      "var creada en bloque if, si no entra no el valor es undefined";
  }
  console.log(varVar);
}

function funcionLet() {
  if (Math.random() < 0.5) {
    let varLetBloque =
      "let creada en bloque if, si no entra error por no definir";
  }
  // console.log(varLetBloque);
}

function funcionConst() {
  if (Math.random() < 0.5) {
    const varConstBloque =
      "const creada en bloque if, si no entra error por no definir";
  }
  // console.log(varConstBloque);
}

funcionVar();
funcionLet();
funcionConst();
