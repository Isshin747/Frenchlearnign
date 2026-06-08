
const jpSentence = document.getElementById("jpSentence");
const vocabulary = document.getElementById("vocabulary");
const playAnswerBtn =
document.getElementById("playAnswerBtn");

playAnswerBtn.addEventListener("click",()=>{

    const utterance =
    new SpeechSynthesisUtterance(
        filteredQuestions[currentIndex].en
    );

    utterance.lang = "en-US";

    speechSynthesis.speak(utterance);

});
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

const resultText = document.getElementById("resultText");
const score = document.getElementById("score");
const correctAnswer = document.getElementById("correctAnswer");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const reviewCount =
document.getElementById("reviewCount");
const reviewBtn = document.getElementById("reviewBtn");

const answeredCount = document.getElementById("answeredCount");
const correctCount = document.getElementById("correctCount");
const accuracy = document.getElementById("accuracy");

const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "en-US";
recognition.interimResults = false;
recognition.continuous = false;

let filteredQuestions = [];
let currentIndex = 0;

let totalAnswered = 0;
let totalCorrect = 0;

let wrongQuestions = [];
let reviewMode = false;

function normalize(text){

    return text
    .toLowerCase()
    .replace(/[.,!?']/g,"")
    .trim();

}

function loadQuestions(){

    filteredQuestions = [...questions];

    currentIndex = 0;

    loadQuestion();
}

function loadQuestion(){

    if(filteredQuestions.length === 0){
        return;
    }

    const q =
    filteredQuestions[currentIndex];

    jpSentence.textContent =
    q.jp;

    vocabulary.innerHTML =
    q.words
    .map(word=>`<li>${word}</li>`)
    .join("");

    resultText.textContent =
    "まだ録音していません";

    score.textContent = "-";

    correctAnswer.textContent = "-";



    document.getElementById("currentQuestion").textContent =
currentIndex + 1;

document.getElementById("totalQuestions").textContent =
filteredQuestions.length;

document.getElementById("totalQuestionsStat").textContent =
filteredQuestions.length;
}

function updateStats(){
reviewCount.textContent =
wrongQuestions.length;
    answeredCount.textContent =
    totalAnswered;

    correctCount.textContent =
    totalCorrect;

    let percent = 0;

    if(totalAnswered > 0){

        percent =
        Math.round(
        totalCorrect /
        totalAnswered * 100
        );

    }

    accuracy.textContent =
    percent + "%";
}

function checkAnswer(userAnswer){

    const correct =
    filteredQuestions[currentIndex].en;

    const user =
    normalize(userAnswer);

    const answer =
    normalize(correct);

    totalAnswered++;

    if(user === answer){

        totalCorrect++;

        score.innerHTML =
        "✅ Perfect!";

    }else{

        const userWords =
        user.split(" ");

        const answerWords =
        answer.split(" ");

        let matched = 0;

        answerWords.forEach(word=>{

            if(userWords.includes(word)){
                matched++;
            }

        });

        const percent =
        Math.round(
        matched /
        answerWords.length * 100
        );

        score.innerHTML =
        `🟡 ${percent}%`;

        const exists =
        wrongQuestions.some(
        item=>item.jp ===
        filteredQuestions[currentIndex].jp
        );

        if(!exists){

            wrongQuestions.push(
            filteredQuestions[currentIndex]
            );

        }
    }

    correctAnswer.textContent =
    correct;

    updateStats();
}

startBtn.addEventListener("click",()=>{

    recognition.start();

    startBtn.textContent =
    "録音中...";
});

stopBtn.addEventListener("click",()=>{

    recognition.stop();

    startBtn.textContent =
    "🎤 録音開始";
});

recognition.onresult = (event)=>{

    const transcript =
    event.results[0][0].transcript;

    resultText.textContent =
    transcript;

    checkAnswer(transcript);

    startBtn.textContent =
    "🎤 録音開始";
};

recognition.onerror = ()=>{

    startBtn.textContent =
    "🎤 録音開始";
};

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(
        currentIndex >=
        filteredQuestions.length
    ){
        currentIndex = 0;
    }

    loadQuestion();
});

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){

        currentIndex =
        filteredQuestions.length - 1;
    }

    loadQuestion();
});


reviewBtn.addEventListener("click",()=>{

    if(wrongQuestions.length === 0){

        alert("間違えた問題がありません");

        return;
    }

    reviewMode = true;

    filteredQuestions =
    [...wrongQuestions];

    currentIndex = 0;

    loadQuestion();
});

loadQuestions();
updateStats();
