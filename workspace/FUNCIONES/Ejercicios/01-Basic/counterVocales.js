//Contador de vocales
//Diana ---> 3
// Includes
function countVowels(nombre) {
    const vowels = ["a", "e", "i", "o", "u"];
    const lowerName = nombre.toLowerCase();
    let total = 0;
    //"jezabel"
    for (let char of lowerName) {
      if (vowels.includes(char)) {
        total += 1;
      }
    }
    return total;
  }
  const result = countVowels("JEZABEL");
  console.log(result);
  countVowels("María Elizabeth");
  //FOR OF
  const promedios = [80, 70, 95, 65, 50];
  let count = 0;
  for (let promedio of promedios) {
    if (promedio >= 70) {
      count += 1;
    }
  }
  return count;


  //FOR
const puntajes = [80, 70, 95, 65, 50]; //5 puntajes[0] puntajes[1]
let scoreBetter = 0;
for (let index = 0; index < puntajes.length; index++) {
  if (puntajes[index] >= 70) {
    scoreBetter += 1;
  }
}







let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
for (let num of numbers) {
  if (num % 2 == 0) {
    console.log("continua");
    continue;
  }
  console.log(num);
}
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
for (let num of numbers2) {
  if (num == 5) {
    break;
  }
  console.log(num);
}








const countDevelopers = (list) => {
    let result = 0;
    for (let element of list) {
      if (element.continent == "Europe" && element.language == "JavaScript") {
        result += 1;
      }
    }
    return result;



