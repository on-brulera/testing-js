//clase: todas son publicas
//una funcion privada solo se puede usar dentro de la clase

class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  saludar() {
    console.log(`Buen Dia Alegria ${this.nombre}`);
  }
}

//herencia

class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza = null;
  }

  sonar() {
    console.log("Ladrido guau guau");
  }

  //funcion estatico
  static descripcion() {
    console.log(`Los perros somos los mejores amigos del hombre`);
  }

  //setter and getter
  get getRaza() {
    return this.raza;
  }

  set setRaza(raza) {
    this.raza = raza;
  }
}

Perro.descripcion();
const scoby = new Perro('scoby','macho','grande');
console.log(scoby);
scoby.setRaza = 'Gran Danes';
console.log(scoby);