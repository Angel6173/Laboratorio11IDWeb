let numero = prompt("Ingrese un número para verificar:");
let n = numero.length;
let sumaArm = 0;
for (let i = 0; i < n; i++) {
  let digito = parseInt(numero[i]);
  sumaArm += Math.pow(digito, n);
}
if (sumaArm === parseInt(numero)) {
  console.log(numero + " es un número Armstrong");
} else {
  console.log(numero + " no es un número Armstrong");
}