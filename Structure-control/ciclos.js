//while

let contador = 0;

while (contador < 10) {
  console.log("while:", contador++);
}

//Do while

do {
  console.log("Do while:", contador++);
} while (contador < 20);

//for

for (contador; contador < 30; contador++) {
  console.log("For:", contador);
}

//foreach

const pares = [2, 4, 6, 8, 10];
pares.forEach((Element) => {
  console.log("Foreach:", Element);
});

//Objetos

const persona = {
  nombre: "On",
  apellido: "Brulera",
};

//recorrer propiedades
for (const propiedad in persona) {
  console.log("Key:", propiedad);
}

//recorrer objetos iterables: listas, cadenas, matrices
const pais = "ECUADOR";
for (const letra of pais) {
  console.log("of:", letra);
}
