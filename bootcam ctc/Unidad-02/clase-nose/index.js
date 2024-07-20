const valor = prompt("INGRESAR UN NUMERO");
if (valor == 0){
    console.log("NUMERO NEUTRO")
}else if(valor>0){
    console.log("ES POSITIVO");
}else{
    console.log("ES NEGATIVO");
}

const edad = prompt("INGRESAR EDAD");
if(edad>=18){
    console.log("ES MAYOR DE EDAD");
}else{
    console.log("ES MENOR DE EDAD");
}

const num1 = prompt("INGRESAR NUMERO");
const num2 = prompt("INGRESAR NUMERO");
if(num1>num2){
    console.log(num1 + " ES MAYOR");
}else{
    console.log(num2 +  " ES MAYOR");
}

const numero = prompt("INGRESAR NUMERO");
if(numero%2==1){
    console.log(numero + " ES IMPAR");
}else{
    console.log(numero +  " ES PAR");
}

const numero1 = prompt("INGRESAR NUMERO")
const numero2 = prompt("INGRESAR NUMERO")
const numero3 = prompt("INGRESAR NUMERO")
if(numero1>numero2){
    if(numero1>numero3){
        console.log(numero1 + " ES MAYOR");
    }else{
    console.log(numero2 + " ES MAYOR");
    }
}else if(numero2>numero3){
    console
}
