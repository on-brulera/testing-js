//Objetos: puede tener atributos, objetos y funciones

const persona = {
  nombre: "On",
  apellido: "Brulera",
  edad: 21,
  pasatiempos: ["correr", "dormir"],
  soltero: true,
  constacto: {
    userGitHub: "on-brulera",
    pais: "Ec",
  },
  saludar: function () {
    console.log("hola :)");
  },
  decirNombre: function () {
    console.log(`hola soy ${this.nombre} ${this.apellido}`);
  },
};

console.log(persona.pasatiempos);
persona.decirNombre();

//ver llaves de un objeto
console.log(Object.keys(persona));

//ver valores de un objeto
console.log(Object.values(persona));

//existe una propiedad
console.log(persona.hasOwnProperty("nombre"));
