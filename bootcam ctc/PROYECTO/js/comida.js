const preguntasComida = [
    {
        pregunta: "¿Cuál es el principal ingrediente del sushi?",
        respuestas: ["Carne", "Arroz", "Pasta", "Pan"],
        correcta: 1 // Respuesta correcta es "Arroz" (posición 1)
    },
    {
        pregunta: "¿De qué país es originaria la pizza?",
        respuestas: ["España", "Francia", "Italia", "Grecia"],
        correcta: 2 // Respuesta correcta es "Italia" (posición 2)
    },
    {
        pregunta: "¿Cuál es el postre típico de Francia conocido por su forma de torre?",
        respuestas: ["Tarta de manzana", "Croissant", "Macarons", "Torre Eiffel de chocolate"],
        correcta: 3 // Respuesta correcta es "Torre Eiffel de chocolate" (posición 3)
    },
    {
        pregunta: "¿Qué fruta es conocida por tener una cáscara dura y espinosa y un interior dulce y amarillo?",
        respuestas: ["Manzana", "Plátano", "Piña", "Mango"],
        correcta: 2 // Respuesta correcta es "Piña" (posición 2)
    },
    {
        pregunta: "¿Cuál es el ingrediente principal del guacamole?",
        respuestas: ["Tomate", "Cebolla", "Aguacate", "Chile"],
        correcta: 2 // Respuesta correcta es "Aguacate" (posición 2)
    }
];

function iniciarJuego() {
    console.log("Iniciando juego de comida...");
    mostrarPregunta();
    if (localStorage.getItem("score") !== null) {
        localStorage.removeItem("score");
    }
}

window.onload = iniciarJuego;

let preguntaActual = "";
let indice_aleatorio = 0;
let puntos = 0;

function mostrarPregunta() {
    if (preguntasComida.length > 0) {
        indice_aleatorio = Math.floor(Math.random() * preguntasComida.length); // Genera un número aleatorio
        preguntaActual = `
            <p class="pregunta">${preguntasComida[indice_aleatorio].pregunta}</p>
            <button class="respuesta-button" id="option-1" onclick="verificarRespuesta(0, ${preguntasComida[indice_aleatorio].correcta})">${preguntasComida[indice_aleatorio].respuestas[0]}</button>
            <button class="respuesta-button" id="option-2" onclick="verificarRespuesta(1, ${preguntasComida[indice_aleatorio].correcta})">${preguntasComida[indice_aleatorio].respuestas[1]}</button>
            <button class="respuesta-button" id="option-3" onclick="verificarRespuesta(2, ${preguntasComida[indice_aleatorio].correcta})">${preguntasComida[indice_aleatorio].respuestas[2]}</button>
            <button class="respuesta-button" id="option-4" onclick="verificarRespuesta(3, ${preguntasComida[indice_aleatorio].correcta})">${preguntasComida[indice_aleatorio].respuestas[3]}</button>
        `;

        const contenedorPregunta = document.querySelector("#preguntas");
        contenedorPregunta.innerHTML = preguntaActual;

        preguntasComida.splice(indice_aleatorio, 1);
    } else {
        window.location.href = "http://127.0.0.1:5500/pages/resultados.html";
    }
}

function verificarRespuesta(indice, correcta) {
    if (indice === correcta) {
        puntos += 10;
    }

    localStorage.setItem("puntos", puntos);
    document.querySelector("#option-1").disabled = true;
    document.querySelector("#option-2").disabled = true;
    document.querySelector("#option-3").disabled = true;
    document.querySelector("#option-4").disabled = true;
}

function nextQuestion() {
    mostrarPregunta();
}
