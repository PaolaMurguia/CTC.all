const puntos = localStorage.getItem("puntos");
const puntosText = document.querySelector("#score");
puntosText.textContent = `Obtuviste: ${puntos} puntos`;

