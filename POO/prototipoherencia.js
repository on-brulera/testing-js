//Prototipo

function Animal(nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;
}

Animal.prototype.Saludar = function () {
  console.log("Buen Día Alegría", this.nombre);
};

const snopy = new Animal("Snopy", "Macho");
snopy.Saludar();

//Herencia Prototipica

function Perro(nombre, genero, tamano) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamano = tamano;
}

Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

const scoby = new Perro("Scoby", "Macho", "Grande");
scoby.Saludar();

//sobreescribir metodo de funcion padre

Perro.prototype.Saludar = function () {
  console.log("Soy un perro", this.nombre);
};
scoby.Saludar();

//añadir funciones al prototipo perro

Perro.prototype.ladrar = function () {
  console.log("*ladrido canino*");
};

scoby.ladrar();

console.log(snopy);
console.log(scoby);
