let total = 0;
let continuar = true;
while (continuar) {
  let precio = parseFloat(prompt("Ingrese el precio del producto:"));
  total += precio;
  continuar = confirm("¿Desea agregar otro producto?");
}
console.log("Total parcial:", total);
if (total > 100) {
  console.log("Tiene un descuento del 10%");
  total *= 0.9;
} else if (total >= 50 && total <= 100) {
  console.log("Gana un cupón de 5%");
  total *= 0.95;
} else {
  console.log("No aplica descuento");
}
console.log("Total final a pagar:", total.toFixed(2));