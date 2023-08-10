//Operador de corto circuito: con or || y and &&

//con or: cuando una variable no viene definido

function saludar(nombre) {
  nombre = nombre || "Desconocido";
  console.log(`Hola ${nombre}`);
}

saludar();
saludar("On Brulera");

//con and: cuando el valor de la izquierda se valide a falso se carga el de la izquierda

function dia(dia) {
  dia = "Sin dia" && dia;
  console.log(`El dia es ${dia}`);
}

dia();
