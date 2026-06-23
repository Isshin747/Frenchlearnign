let current = 0;
let score = 0;

let selectedWords = [];
let selectedButtons = [];

const progressEl =
document.getElementById("progress");

const questionEl =
document.getElementById("question");

const answerArea =
document.getElementById("answerArea");

const choicesEl =
document.getElementById("choices");

const resultEl =
document.getElementById("result");

const checkBtn =
document.getElementById("checkBtn");

const nextBtn =
document.getElementById("nextBtn");

const undoBtn =
document.getElementById("undoBtn");


// ====================
// 配列シャッフル
// ====================

function shuffle(array){

    const arr = [...array];

    for(let i = arr.length - 1; i > 0; i--){

        const j =
        Math.floor(
            Math.random() * (i + 1)
        );

        [arr[i], arr[j]] =
        [arr[j], arr[i]];
    }

    return arr;
}


// ====================
// 問題をシャッフル
// ====================

const shuffledQuestions =
shuffle(questions);


// ====================
// 判定用
// ====================

function normalize(text){

    return text
        .toLowerCase()
        .replace(/[.,!?]/g, "")
        .trim();
}


// ====================
// 問題表示
// ====================

function loadQuestion(){

    const q =
    shuffledQuestions[current];

    progressEl.textContent =
    `${current + 1} / ${shuffledQuestions.length}`;

    questionEl.textContent =
    q.question;

    answerArea.textContent = "";

    resultEl.innerHTML = "";

    nextBtn.style.display =
    "none";

    selectedWords = [];
    selectedButtons = [];

    undoBtn.disabled = false;

    choicesEl.innerHTML = "";

    const shuffledWords =
    shuffle(q.words);

    shuffledWords.forEach(word => {

        const btn =
        document.createElement("button");

        btn.className =
        "word-btn";

        btn.textContent =
        word;

        btn.onclick = () => {

            selectedWords.push(word);
            selectedButtons.push(btn);

            answerArea.textContent =
            selectedWords.join(" ");

            btn.disabled = true;
        };

        choicesEl.appendChild(btn);
    });
}


// ====================
// 1語戻す
// ====================

undoBtn.onclick = () => {

    if(selectedWords.length === 0){
        return;
    }

    selectedWords.pop();

    const lastBtn =
    selectedButtons.pop();

    if(lastBtn){
        lastBtn.disabled = false;
    }

    answerArea.textContent =
    selectedWords.join(" ");
};


// ====================
// 回答判定
// ====================

checkBtn.onclick = () => {

    const q =
    shuffledQuestions[current];

    const userAnswer =
    selectedWords.join(" ");

    undoBtn.disabled = true;

    if(
        normalize(userAnswer)
        ===
        normalize(q.answer)
    ){

        score++;

        resultEl.innerHTML =
        `
        <h3 class="correct">
        ⭕ 正解
        </h3>

        <p>
        <strong>正解文</strong><br>
        ${q.answer}
        </p>

        <p>
        <strong>日本語訳</strong><br>
        ${q.translation}
        </p>

        <p>
        <strong>解説</strong><br>
        ${q.explanation}
        </p>
        `;

    }else{

        resultEl.innerHTML =
        `
        <h3 class="wrong">
        ❌ 不正解
        </h3>

        <p>
        <strong>あなたの回答</strong><br>
        ${userAnswer}
        </p>

        <p>
        <strong>正解</strong><br>
        ${q.answer}
        </p>

        <p>
        <strong>日本語訳</strong><br>
        ${q.translation}
        </p>

        <p>
        <strong>解説</strong><br>
        ${q.explanation}
        </p>
        `;
    }

    nextBtn.style.display =
    "inline-block";
};


// ====================
// 次の問題
// ====================

nextBtn.onclick = () => {

    current++;

    if(
        current >=
        shuffledQuestions.length
    ){

        finishQuiz();

        return;
    }

    loadQuestion();
};


// ====================
// 終了画面
// ====================

function finishQuiz(){

    document.querySelector(
        ".container"
    ).innerHTML = `

        <h1>終了！</h1>

        <h2>
        ${score}
        /
        ${shuffledQuestions.length}
        </h2>

        <p>
        正答率：
        ${Math.round(
            score /
            shuffledQuestions.length *
            100
        )}%
        </p>

        <button onclick="location.reload()">
            もう一度挑戦
        </button>

    `;
}


// ====================
// 開始
// ====================

loadQuestion();