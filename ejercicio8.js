let limite = parseInt(prompt("Ingrese un número:"));
console.log(`Números primos entre 1 y ${limite}:`);
for (let num = 2; num <= limite; num++) {
  let esPrimo = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      esPrimo = false;
      break;
    }
  }
  if (esPrimo) console.log(num);
}