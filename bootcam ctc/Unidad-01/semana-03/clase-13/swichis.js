//CLASE 15

let dia = prompt("INGRESE UN DIA"); 
dia=dia.toLowerCase();
switch(dia){
    case "LUNES" || "lunes":
    console.log("ES LUNES ");
    break;
    case "martes":
        console.log("es martes");
    break;
    default:
        console.log("no es valido");
        break;
}
//CREAMOS LA FUNCION
function saludo(nombre){
   alert('hola ${nombre}, bienvenida al curso de JS');
}
//EJECUTAMOS CON EL NOMBRE
saludo("Nicole");
saludo()

function indice(peso,altura){
    let imc =peso/(altura*peso);
    let clasifi="";
    if(imc< 18.5){
        clasifi="bajo peso";
    }else if (imc>= 18.5 && imc < 24.9){
        clasifi="Peso normal";
    }else if(imc>= 25 && imc < 29.9){
        clasifi="sobrepeso";
    }else{
        clasifi= "obesidad";
    }
    console.log(clasifi);
}

const kg=prompt("tu peso: ");
const altura= prompt("Tu altura: ")

indice(kg, altura);

//vectores

let estudiantes = ["LIZ","LUCY", "LEYDY"]
typeof estudiantes
let datos = [true,15,"hola"]
datos.push(20) //agregar 20 a dato
datos.pop()//elimina el ultimo dato
datos.unshift("inicio") // agrega al inicio
datos.shift("nose") //nose

datos[2]="tercero" //reasigna un valor a 2
datos[2] //accede a un elemento[length-1]
const number=[1,2,3,4,5,6,7]
number
"hola".length

const filtrados = number.filter((ele) => ele > 10)





let word = "hola como estas";

