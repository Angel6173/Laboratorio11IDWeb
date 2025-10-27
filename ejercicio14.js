let presupuesto = parseFloat(prompt("Ingrese su presupuesto:"));
let totalFinal = 0;
while (true) {
  let precio = parseFloat(prompt("Ingrese el precio del producto:"));
  if (totalFinal + precio > presupuesto) {
    console.log("No puede agregar este producto, supera el presupuesto.");
    break;
  }
  totalFinal += precio;
  let seguir = confirm("¿Desea agregar otro producto?");
  if (!seguir) break;
}
console.log("Total gastado:", totalFinal.toFixed(2));
console.log("Presupuesto restante:", (presupuesto - totalFinal).toFixed(2));