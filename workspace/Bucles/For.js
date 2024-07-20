// console.log("iniciando");

// for (let index = 0; index <= 12; index++) {
//   console.log(index);
// }

// for (let i = 0; i <= 12; i++) {
//   console.log("#".repeat(i));
// }

// let dis= 12;
// for (let i = 0; i <= 12; i++) {
//    dis--;
//   console.log(" ".repeat(dis)+"#".repeat(i));
// }
// let nombre = prompt("Cual es tu nombre?");
// let apellido = prompt("Cual es tu apellido?")
// let result= " ";
// let nombreCompleto= nombre.toUpperCase()+" " +apellido.toUpperCase(); //converte a mayuscula
// const ArrayName = nombreCompleto.split(" "); //"" guarda caracter por caracter " "guarda palabra por palabra
// console.log(ArrayName);
// resul = ArrayName[0][0] + ArrayName[1][0];
// console.log(resul);

//-----------------------------------WHILE------------------------------------------------

// let i=0;
// while(i<=10){//mientas
//     console.log(i);
//     i++;
// }

//--------------------------------DO-WHILE-------------------------------------------

// let num=0;
// do{
//     console.log(num);  //se ejecuta almenos una vez, nos sirve para convalidar algo ej: los prompt
//     num++;
// }while(num<10) //hacer mientas

// let nombre = "";
// let apellido = "";

// do {//MIENTRAS SEA ""FALSE SE EJECUTA
//   nombre = prompt("¿Cuál es tu nombre?").trim(); //ELIMINA LOS ESPACIOS
//   console.log(nombre);
// } while (!nombre);


//.reverse(): revierte un arreglo

// do {
//   apellido = prompt("¿Cual es tu apellido?").trim();
// } while (!apellido);

// let nombreCompleto = nombre.toUpperCase() + " " + apellido.toUpperCase();
// let result = "";
// const arrayName = nombreCompleto.split(" "); //convierte el string a array
// result = arrayName[0][0] + arrayName[1][0];
// console.log(result);






//------------------------------FOUND---------------------------------------------------

//find: Busca el primer elemento en un array que cumple con una 
//condición y lo devuelve. Si ningún elemento cumple con la condición, 
//devuelve undefined.
// const array = [5, 8, 12, 130, 44];

// const found = array.find((element) => element > 10);

// console.log(found); // 12

// const inventory = [
//     { name: 'apple'},
//     { name: 'banana'},
//     { name: 'cherry' }
//   ];

//   const result = inventory.find(frutas => frutas.name === 'cherry');

//   console.log(result); // Output: { name: 'cherry' }



//-------------------------------JOIN-------------------------------------

//JOIN:SEPARA LOS ARREGLOS CON EL SEPARADOR QUE QUIERA

// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join()); 

//  //Output: "Fire,Air,Water"
// //---------------------------------------------
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.join(' + ')); 

//  //Output: "1 + 2 + 3 + 4 + 5"


//MAP RETORNA ALGO
//---------------------------FOREACH-------------------------------------
//CONCAT(cad1,cad2)
//INCLUDE- BOOL- si una cadena 
//filter
//indexOf slice splice reduce?

