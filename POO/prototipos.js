//JS es multiparadigma: puede ser funcional, paradigma, poo

const animal = {
  nombre: "Scobby",
  sonar() {
    console.log("Guau Guau");
  },
};

const animal2 = {
  nombre: "Lola Bunny",
  sonar() {
    console.log("Rii Rii");
  },
};
// console.log(animal);

//crear constructores

//clases y constructores con mayuscula
//En prototipos: en el constructor solo atributos y las funciones se las agrega despues en el prototipo -> mejora el rendimiento
function Animal(nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;
}

Animal.prototype.sonar = function () {
  console.log("Sonido Animal");
};

Animal.prototype.saludar = function () {
  console.log("Buen Dia Alegria", this.nombre);
};

const snopy = new Animal("Snopy", "Macho");
const lola = new Animal("Lola", "Hembra");

console.log(snopy, lola);
snopy.saludar();
lola.saludar();
