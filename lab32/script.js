const questions = [
    {
        question: "Qual são os times que são rivais em Campinas?",
        answers: ["Corinthians e São Paulo", "Cruzeiro e Ponte Preta", "Guarani e Ponte Preta", "Flamengo e Vasco"],
        correctAnswer: 2
    },
    {
        question: "Qual universidade pública importante está situada em Campinas?",
        answers: ["Pontifícia Universidade Católica de Campinas(PUCC)", "Universidade Estadual de Campinas (Unicamp)", "Universidade de São Paulo(USP)", "Universidade São Franscisco (USF)"],
        correctAnswer: 1
    },
    {
        question: "Qual famoso parque é um dos pontos turísticos mais visitados em Campinas?",
        answers: ["Parque Ibirapuera","Parque das Dunas","Parque do Taquaral","Parque da Aclimação"],
        correctAnswer: 2
    },
    {
        question: "Campinas é conhecida por ser um polo de qual setor da economia?",
        answers: ["Tecnologia","Indústria automobilística","Agropecuário","Turismo"],
        correctAnswer: 0
    },
    {
        question: "Em que ano Campinas foi fundada?",
        answers: ["1901","1809","1850","1774"],
        correctAnswer: 3   
    },
];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container'); //Seleciona o elemento HTML com o ID 'question-container', onde as perguntas serão inseridas.
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    let erros = "";
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
        
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
}

// function respostas() {
//     let erros = "";
//     questions.forEach((q, index) => {
//         const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
//         if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
//             score++;
//             erros= erro+ q.question 
//         }

//     });
//     // document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
//     document.getElementById('correct').innerHTML=erros;
// }

window.onload = loadQuestions;