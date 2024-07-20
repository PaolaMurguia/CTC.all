const preguntasCulturaGeneral = [
    {
        pregunta: "¿Quién escribió 'Cien años de soledad'?",
        respuestas: ["Gabriel García Márquez", "Mario Vargas Llosa", "Isabel Allende", "Pablo Neruda"],
        correcta: 0 // Respuesta correcta es "Gabriel García Márquez" (posición 0)
    },
    {
        pregunta: "¿Cuál es la capital de Australia?",
        respuestas: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correcta: 2 // Respuesta correcta es "Canberra" (posición 2)
    },
    {
        pregunta: "¿En qué año ocurrió la Revolución Francesa?",
        respuestas: ["1789", "1776", "1812", "1804"],
        correcta: 0 // Respuesta correcta es "1789" (posición 0)
    },
    {
        pregunta: "¿Qué elemento tiene el símbolo químico 'O'?",
        respuestas: ["Oro", "Oxígeno", "Osmio", "Oganesón"],
        correcta: 1 // Respuesta correcta es "Oxígeno" (posición 1)
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        respuestas: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
        correcta: 1 // Respuesta correcta es "Nilo" (posición 1)
    }
];

function iniciarJuego() {
    console.log("Iniciando juego de cultura general...");
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
    if (preguntasCulturaGeneral.length > 0) {
        indice_aleatorio = Math.floor(Math.random() * preguntasCulturaGeneral.length); // Genera un número aleatorio
        preguntaActual = `
            <p class="pregunta">${preguntasCulturaGeneral[indice_aleatorio].pregunta}</p>
            <button class="respuesta-button" id="option-1" onclick="verificarRespuesta(0, ${preguntasCulturaGeneral[indice_aleatorio].correcta})">${preguntasCulturaGeneral[indice_aleatorio].respuestas[0]}</button>
            <button class="respuesta-button" id="option-2" onclick="verificarRespuesta(1, ${preguntasCulturaGeneral[indice_aleatorio].correcta})">${preguntasCulturaGeneral[indice_aleatorio].respuestas[1]}</button>
            <button class="respuesta-button" id="option-3" onclick="verificarRespuesta(2, ${preguntasCulturaGeneral[indice_aleatorio].correcta})">${preguntasCulturaGeneral[indice_aleatorio].respuestas[2]}</button>
            <button class="respuesta-button" id="option-4" onclick="verificarRespuesta(3, ${preguntasCulturaGeneral[indice_aleatorio].correcta})">${preguntasCulturaGeneral[indice_aleatorio].respuestas[3]}</button>
        `;

        const contenedorPregunta = document.querySelector("#preguntas");
        contenedorPregunta.innerHTML = preguntaActual;

        preguntasCulturaGeneral.splice(indice_aleatorio, 1);
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

