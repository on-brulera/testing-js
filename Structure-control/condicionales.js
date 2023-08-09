//Controlar el flujo de programación

let edad = 17;

if (edad > 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}

let hora = 20;

if (hora <= 5) {
  console.log("Dejame Dormir");
} else if (hora >= 6 && hora <= 11) {
  console.log("Buenos dias");
} else if (hora >= 12 && hora <= 18) {
  console.log("Buenas Tardes");
} else {
  console.log("Buenas Noches");
}

//operador ternario

const numMayor = edad > 18 ? 18 : edad;
console.log("Ternario:", numMayor);

//switch case
let dia = 5;
switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  default:
    break;
}
