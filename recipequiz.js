const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');

const quizData = [
    {
        question: 'Which is a classic Thanksgiving dessert?',
        options: ['Cake', 'Pumpkin Pie', 'Cookies', 'Oreo Pie'],
        correctAnswer: 'Pumpkin Pie'
    },
    {
        question: 'What is Julia Childs most famous dish?',
        options: ['Pesto Pasta', 'Pizza', 'Shepards Pie', 'Beef Bourguignon'],
        correctAnswer: 'Beef Bourguignon'
    },
    // Add more questions and options as needed
];

let currentQuestionIndex = 0;

function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        alert('Correct!');
    } else {
        alert('Wrong! The correct answer is: ' + currentQuestion.correctAnswer);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        alert('Quiz completed!');
        quizContainer.innerHTML = '<p>Quiz completed! Thank you for participating.</p>';
    }
}


// Start the quiz
showQuestion();
