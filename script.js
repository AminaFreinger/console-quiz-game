(function () {
var questions = [];
 function Question (qs, answer, correct) {
    this.qs = qs;
    this.answer = answer;
    this.correct = correct;
};
function addQuestion (qs, answer, correct) {
    var q = new Question (qs, answer, correct);
    questions.push(q);
    return questions;
};
addQuestion ('1\) Is JavaScript is the coolest programming language in the world?', ['0: Yes', '1: No'], 0);
addQuestion ('2\) What is the name of the teacher Udemy JS courses?', ['0: John','1: Jonas', '2: Mike', '3: James'], 1);
addQuestion ('3\) Do you like programming languages?', ['0: Yes','1: No'], 0);
addQuestion ('4\) Specify an answer that does not include a programming language?', ['0: PHP','1: JavaScript', '2: HTML'], 2);
addQuestion ('5\) Are you going to give up learning the JavaScript?', ['0: Yes','1: No'], 1);
// console.log(questions);
function loadQuestions() {
    console.log('%cLet\'s play a fun game', 'color:blue; font-size:30px');
    var currentScore = 0;
    var score = 0;
    for (var i = 0; i < questions.length; i++) {
    var quiz = questions[Math.floor(Math.random() * questions.length)];
    var loadQuiz = Object.values(quiz);
    console.log(loadQuiz[0] + '\n' + loadQuiz[1].join('\n'));
    var input = prompt('Please select the correct answer (just type the number)'); 
    if (input == loadQuiz[2]) {
        score = currentScore += 1;;
        console.log('%cCorrect answer', 'color:green');
        console.log('Your current score is ' + score + '\n' + '=======================');
    } else {        
        score = currentScore += 0;
        console.log('%cWrong answer. Please try again.', 'color:red');
        console.log('Your current score is ' + score + '\n' + '=======================');
        };
    };
    return console.log('%cThis is the end of the game. Your final score is ' + score, 'color:purple; font-size:30px');
}; 
loadQuestions();
})();
