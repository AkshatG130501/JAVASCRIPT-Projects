let questions = [
    {
        ques : 'The Bay of Bengal is located to the of _____ India',
        answers : [
            {text : 'West', correct : 'false'},
            {text : 'South', correct : 'false'},
            {text : 'South-East', correct : 'true'},
            {text : 'South-West', correct : 'false'},
        ],
    },
    {
        ques : 'The source of River Ganga',
        answers : [
            {text : 'Siachen', correct : 'false'},
            {text : 'Yamnotri', correct : 'false'},
            {text : 'Karakoram', correct : 'false'},
            {text : 'Gangotri', correct : 'true'},
        ],
    },
    {
        ques : 'The Himalayas are known as_____.',
        answers : [
            {text : 'Abode of Snow', correct : 'true'},
            {text : 'Volcano', correct : 'false'},
            {text : 'Himadri', correct : 'false'},
            {text : 'Sahyadri', correct : 'false'},
        ],
    },
    {
        ques : 'India is connected to European countries through the _______ canal',
        answers : [
            {text : 'Suez', correct :'true'},
            {text : 'Grand', correct : 'false'},
            {text : 'Panama', correct: 'false'},
            {text : 'Buckingham', correct: 'false'},
        ],
    },
]

const question = document.getElementById('question')
const answer = document.getElementById('answer-buttons')
const nxtBtn = document.getElementById('next-btn')

let currentIndex = 0
let score = 0

function startQuiz(){
    currentIndex = 0
    score = 0
    showQuestions()
}

function showQuestions(){
    const questionElement = questions[currentIndex]
    question.innerHTML = `${currentIndex+1}. ${questionElement.ques}`
    questionElement.answers.forEach(function(it){
        let button = document.createElement("button")
        button.innerText = it.text
        button.setAttribute('class','btn')
        let div = document.getElementById('answer-buttons')
        div.appendChild(button)
    })

    checkAnswer()
}

showQuestions()

function checkAnswer(){
    document.querySelectorAll('div')[2].addEventListener('click',function(e){
        let ans = e.target.innerHTML
        console.log(ans);
        let button = e.target
        questions[currentIndex].answers.forEach(function(it){
            if(it.correct === 'true' && it.text === ans){
                button.style.background = 'green'
            }else{
                button.style.background = 'red'
            }
        })
        document.getElementById('next-btn').style.display = 'block'
    })
}

checkAnswer()
