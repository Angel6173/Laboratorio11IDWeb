let numero=parseInt(prompt("Ingrese un numero para su tabla de multiplicar del 1 al 12:"));
let resultado="";
for (i=0;i<=12;i++){
    multiplicador=i+1
    resultado+= `${numero} * ${i} = ${numero * i}\n`
}
alert (resultado)
