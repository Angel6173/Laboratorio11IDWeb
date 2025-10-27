let monto = parseInt(prompt("Ingrese el monto a retirar:"));
let billetes100 = 0;
let billetes50 = 0;
let billetes20 = 0;
let billetes10 = 0;
while (monto >= 100) {
  monto = monto - 100;
  billetes100++;
}
while (monto >= 50) {
  monto = monto - 50;
  billetes50++;
}
while (monto >= 20) {
  monto = monto - 20;
  billetes20++;
}
while (monto >= 10) {
  monto = monto - 10;
  billetes10++;
}
console.log("Billetes de 100:", billetes100);
console.log("Billetes de 50:", billetes50);
console.log("Billetes de 20:", billetes20);
console.log("Billetes de 10:", billetes10);