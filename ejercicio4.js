let edad = parseInt(prompt("Ingresa tu edad:"));
if(edad<12){
    alert("Niño");
}else if(edad<=17&&edad>=12){
    alert("Adolescente");
}else if(edad>=18&&edad<=59){
    alert("Adulto");
}else if(edad>=60){
    alert("Adulto mayor");
}