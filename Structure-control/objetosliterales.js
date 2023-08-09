//Objeto normal

let nombre = "On",
  edad = 21;

const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    console.log("Guau Guau");
  },
};

console.log(perro);

//objeto Literal: simplifica la llave y valor que tiene el mismo nombre y metodos

const dog = {
  nombre,
  edad,
  raza: "Callejero",
  ladrar() {
    console.log("Guau Guau");
  },
};

console.log(dog);
