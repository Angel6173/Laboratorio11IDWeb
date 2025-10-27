let salir = false;
while (!salir) {
  let opcion = parseInt(prompt(
    "Menú:\n1. Calcular estadísticas de N notas\n2. Contar pares e impares en un rango\n3. Generar tabla de multiplicar\n4. Salir"
  ));
  switch (opcion) {
    case 1:
      let nNotas = parseInt(prompt("¿Cuántas notas desea ingresar?"));
      let notas = [];
      for (let i = 0; i < nNotas; i++) {
        notas.push(parseFloat(prompt(`Ingrese la nota ${i + 1}:`)));
      }
      let promedio = notas.reduce((a, b) => a + b, 0) / nNotas;
      let max = Math.max(notas);
      let min = Math.min(notas);
      let pares = notas.filter(n => n % 2 === 0).length;
      let impares = nNotas - pares;
      let encimaProm = notas.filter(n => n > promedio).length;
      console.log("Promedio:", promedio.toFixed(2));
      console.log("Máximo:", max);
      console.log("Mínimo:", min);
      console.log("Cantidad pares:", pares);
      console.log("Cantidad impares:", impares);
      console.log("Notas encima del promedio:", encimaProm);
      break;
    case 2:
      let inicio = parseInt(prompt("Ingrese el inicio del rango:"));
      let fin = parseInt(prompt("Ingrese el fin del rango:"));
      let contPar = 0, contImp = 0;
      for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) contPar++;
        else contImp++;
      }
      console.log("Pares:", contPar, "Impares:", contImp);
      break;
    case 3:
      let num = parseInt(prompt("Ingrese el número:"));
      console.log(`Tabla del ${num}:`);
      for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
      }
      break;
    case 4:
      salir = true;
      console.log("Fin del programa.");
      break;
    default:
      console.log("Opción no válida.");
  }
}