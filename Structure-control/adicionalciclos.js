//break and continue

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//break termina el ciclo
for (let index = 0; index < numeros.length; index++) {
  const element = numeros[index];
  console.log(element);
  if (index === 5) {
    break;
  }
}

//continue omite el indice y sus instrucciones del ciclo
for (let index = 0; index < numeros.length; index++) {
  const element = numeros[index];
  if (index === 5) {
    continue;
  }
  console.log(element);
}
