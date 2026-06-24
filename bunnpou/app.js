let score = 0;

let current = 0;


const progress = document.getElementById("progress");
const question = document.getElementById("question");
const choices = document.getElementById("choices");
const result = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");


const questionEl =
    document.getElementById("question");

const choicesEl =
    document.getElementById("choices");

const resultEl =
    document.getElementById("result");

const progressEl =
    document.getElementById("progress");



function loadQuestion(){
    nextBtn.style.display = "none";
    const q = quizData[current];

    progressEl.textContent =
    `${current+1} / ${quizData.length}`;

    questionEl.textContent =
        q.question;

    resultEl.innerHTML = "";

    choicesEl.innerHTML = "";

    q.choices.forEach((choice,index)=>{

        const btn =
            document.createElement("button");

        btn.className =
            "choice-btn";

        btn.textContent =
            choice;

        btn.onclick =
            ()=>checkAnswer(index);

        choicesEl.appendChild(btn);

    });

}



function nextQuestion(){

    current++;

   if(current >= quizData.length){

        showResult();

        return;
    }

    loadQuestion();

}

function showResult(){

    document.querySelector(".container").innerHTML = `
        <h1>終了</h1>

        <h2>${score} / ${quizData.length}</h2>

        <p>
        正答率：
        ${Math.round(score/quizData.length*100)}%
        </p>
    `;
}







let quizData = [];


document
.getElementById("normalMode")
.onclick = startNormalMode;

document
.getElementById("reviewMode")
.onclick = startReviewMode;

function startNormalMode(){

    quizData =
        [...questions]
        .map(shuffleQuestion) // 選択肢をシャッフル
        .sort(() => Math.random() - 0.5);

    current = 0;
    score = 0;

    loadQuestion();
}

function startReviewMode(){

    quizData =
        (
            JSON.parse(
                localStorage.getItem(
                    "wrongQuestions"
                )
            ) || []
        ).map(shuffleQuestion);

    if(quizData.length === 0){

        alert(
            "復習する問題がありません"
        );

        return;
    }

    current = 0;
    score = 0;

    loadQuestion();
}

function saveWrongQuestion(q){

    let wrongQuestions =
        JSON.parse(
            localStorage.getItem(
                "wrongQuestions"
            )
        ) || [];

    const exists =
        wrongQuestions.some(
            item =>
            item.question === q.question
        );

    if(!exists){

        wrongQuestions.push(q);

        localStorage.setItem(
            "wrongQuestions",
            JSON.stringify(
                wrongQuestions
            )
        );
    }
}

function removeWrongQuestion(questionText){

    let wrongQuestions =
        JSON.parse(
            localStorage.getItem(
                "wrongQuestions"
            )
        ) || [];

    wrongQuestions =
        wrongQuestions.filter(
            q =>
            q.question !== questionText
        );

    localStorage.setItem(
        "wrongQuestions",
        JSON.stringify(
            wrongQuestions
        )
    );
}

function checkAnswer(selected){

    const q = quizData[current];

    const buttons =
        document.querySelectorAll(
            ".choice-btn"
        );

    buttons.forEach(
        btn => btn.disabled = true
    );

    let html = "";

    if(selected === q.answer){

    score++;

    html += "<h3>⭕ 正解</h3>";

    removeWrongQuestion(
        q.question
    );

}else{

        buttons[selected]
    .classList.add("wrong");

buttons[q.answer]
    .classList.add("correct");

        html += "<h3>❌ 不正解</h3>";

        saveWrongQuestion(q);
    }

    html += `
        <p>
        <strong>日本語訳</strong><br>
        ${q.translation}
        </p>

        <p>
        <strong>解説</strong><br>
        ${q.explanation}
        </p>
    `;

    result.innerHTML = html;

    nextBtn.style.display =
        "block";
}

nextBtn.onclick = () => {

    current++;

    if(current >= quizData.length){

        finishQuiz();

    }else{

        loadQuestion();
    }

};


startNormalMode();


function finishQuiz(){

    document.querySelector(
        ".container"
    ).innerHTML = `

        <h1>結果</h1>

        <h2>
        ${score}
        /
        ${quizData.length}
        </h2>

        <p>
        正答率
        ${Math.round(
            score /
            quizData.length *
            100
        )}%
        </p>

        <button onclick="location.reload()">
            もう一度挑戦
        </button>
    `;
}

function shuffleQuestion(questionObj) {
    const correctAnswer = questionObj.choices[questionObj.answer];

    const shuffledChoices = [...questionObj.choices];

    for (let i = shuffledChoices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledChoices[i], shuffledChoices[j]] =
        [shuffledChoices[j], shuffledChoices[i]];
    }

    return {
        ...questionObj,
        choices: shuffledChoices,
        answer: shuffledChoices.indexOf(correctAnswer)
    };
}