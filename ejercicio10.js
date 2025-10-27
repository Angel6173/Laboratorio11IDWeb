let opcion;
do {
  opcion = parseInt(prompt(
    "Menú:\n1. Calcular área del círculo\n2. Calcular área del rectángulo\n3. Salir"
  ));
  switch (opcion) {
    case 1:
      let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
      let areaCirculo = Math.PI * radio * radio;
      console.log("Área del círculo:", areaCirculo.toFixed(2));
      break;
    case 2:
      let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
      let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
      let areaRect = base * altura;
      console.log("Área del rectángulo:", areaRect);
      break;
    case 3:
      console.log("Saliendo del programa...");
      break;

    default:
      console.log("Opción no válida.");
  }
} while (opcion !== 3);