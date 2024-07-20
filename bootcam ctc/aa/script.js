let playerName = '';
let score = 0;
let currentQuestionIndex = 0;
let currentCategory = '';

const questions = {
    general: [
        { question: '¿Cuál es la capital de Francia?', options: ['Madrid', 'Berlín', 'París', 'Londres'], answer: 'París' },
        { question: '¿Quién escribió "Cien años de soledad"?', options: ['Gabriel García Márquez', 'Pablo Neruda', 'Mario Vargas Llosa', 'Julio Cortázar'], answer: 'Gabriel García Márquez' },
        { question: '¿En qué año llegó el hombre a la luna por primera vez?', options: ['1969', '1971', '1965', '1973'], answer: '1969' },
        { question: '¿Cuál es el río más largo del mundo?', options: ['Amazonas', 'Nilo', 'Misisipi', 'Yangtsé'], answer: 'Amazonas' },
    ],
    anime: [
        { question: '¿Quién es el protagonista de "Dragon Ball Z"?', options: ['Goku', 'Naruto', 'Luffy', 'Ichigo'], answer: 'Goku' },
        { question: '¿En qué serie de anime un niño busca convertirse en "el rey de los piratas"?', options: ['Naruto', 'One Piece', 'Bleach', 'Fairy Tail'], answer: 'One Piece' },
        { question: '¿Cuál es el nombre del protagonista en "Death Note"?', options: ['L', 'Kira', 'Light', 'Ryuk'], answer: 'Light' },
        { question: '¿Cuál es el estudio de animación responsable de "Mi Vecino Totoro" y "El Viaje de Chihiro"?', options: ['Studio Ghibli', 'Toei Animation', 'Madhouse', 'Sunrise'], answer: 'Studio Ghibli' },
    ],
    food: [
        { question: '¿Cuál es el ingrediente principal del guacamole?', options: ['Aguacate', 'Tomate', 'Cebolla', 'Pimiento'], answer: 'Aguacate' },
        { question: '¿Cuál es el plato nacional de Japón?', options: ['Sushi', 'Ramen', 'Takoyaki', 'Gyoza'], answer: 'Sushi' },
        { question: '¿Qué país es famoso por su queso parmesano?', options: ['Italia', 'Francia', 'España', 'Suiza'], answer: 'Italia' },
        { question: '¿Cuál es la bebida alcohólica más popular en Rusia?', options: ['Vodka', 'Tequila', 'Whisky', 'Ron'], answer: 'Vodka' },
    ]
};

function startGame() {
    playerName = document.getElementById('name').value;
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('categories').style.display = 'block';
    document.getElementById('playerName').textContent = playerName;
}

function selectCategory(category) {
    currentCategory = category;
    showQuestion();
    document.getElementById('categories').style.display = 'none';
    document.getElementById('game').style.display = 'block';
}

function showQuestion() {
    const questionData = questions[currentCategory][currentQuestionIndex];
    document.getElementById('question').textContent = questionData.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    questionData.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentCategory][currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score += 25;
        document.getElementById('score').textContent = score;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentCategory].length) {
        showQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    window.location.href = `result.html?name=${encodeURIComponent(playerName)}&score=${score}`;
}
