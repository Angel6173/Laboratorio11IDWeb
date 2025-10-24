let pares = 0;
let impares = 0;
for(let i=0;i<=9;i++){
    let numero = parseInt(prompt("Ingrese un numero"))
    if(numero%2==0){pares++;}
    else{impares++;}
}
alert(`Pares = ${pares}\nImpares = ${impares}`)