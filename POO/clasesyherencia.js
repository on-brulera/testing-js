//Clases en Javascript: todas son publicas
//una funcion privada solo se puede usar dentro de la clase

class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  sonar() {
    console.log("Soy un animal");
  }

  saludar() {
    console.log(`Buen Día Alegría ${this.nombre}`);
  }
}

const mimi = new Animal("mimi", "hembra");
const fifi = new Animal("fifi", "macho");

mimi.saludar();
fifi.saludar();

//Herencia

class Perro extends Animal {
  constructor(nombre, genero, tamano) {
    super(nombre, genero);
    this.tamano = tamano;
  }

  //sobreescritura de metodo
  saludar() {
    console.log(`Soy un perro ${this.nombre}`);
  }
}

const scoby = new Perro("scoby", "macho", "grande");
scoby.saludar();
