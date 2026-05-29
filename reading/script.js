const languageSelect =
document.getElementById("languageSelect");

const readingList =
document.getElementById(
    "readingList"
);

const translationBtn =
document.getElementById(
    "translationBtn"
);

const translationBox =
document.getElementById(
    "translationBox"
);

const levelSelect =
document.getElementById("levelSelect");

const loadBtn =
document.getElementById("loadBtn");

const readingCard =
document.getElementById("readingCard");

const title =
document.getElementById("title");

const readingText =
document.getElementById("readingText");

const vocabBtn =
document.getElementById("vocabBtn");

const vocabBox =
document.getElementById("vocabBox");

const questionsContainer =
document.getElementById("questionsContainer");

const submitBtn =
document.getElementById("submitBtn");

const resultContainer =
document.getElementById("resultContainer");

let currentReading = null;


// ======================
// Load Reading
// ======================

loadBtn.addEventListener(
    "click",
    loadReading
);

function loadReading(){

    const selectedLanguage =
    languageSelect.value;

    const selectedLevel =
    levelSelect.value;

    const filtered =
    readings.filter(reading =>

        reading.language ===
        selectedLanguage &&

        reading.level ===
        selectedLevel
    );

    if(filtered.length === 0){

        alert(
            "このレベルの問題がありません"
        );

        return;
    }

    readingList.innerHTML =
    "<h2>問題一覧</h2>";

    filtered.forEach(reading => {

        readingList.innerHTML +=
        `
        <div class="reading-item"
             onclick="selectReading(${reading.id})">

            <div class="reading-number">
                問題 ${reading.id}
            </div>

            <div>
                ${reading.title}
            </div>

        </div>
        `;
    });

}



// ======================
// Display Reading
// ======================

function displayReading(){

    // ======================
    // 画面表示リセット
    // ======================
    readingCard.classList.remove("hidden");

    resultContainer.innerHTML = "";
    vocabBox.innerHTML = "";
    vocabBox.classList.add("hidden");

    translationBox.innerHTML = "";
translationBox.classList.add(
    "hidden"
);

    questionsContainer.innerHTML = "";

    // ======================
    // タイトル・本文
    // ======================
    title.textContent = currentReading.title;
    readingText.textContent = currentReading.text;

    // ======================
    // 問題生成
    // ======================
    currentReading.questions.forEach((q, index) => {

        const questionBox =
        document.createElement("div");

        questionBox.className = "question-box";

        let choicesHTML = "";

        q.choices.forEach((choice, i) => {

            choicesHTML += `
                <label class="choice">

                    <input
                        type="radio"
                        name="q${index}"
                        value="${i}"
                    >

                    ${choice}

                </label>
            `;
        });

        questionBox.innerHTML = `
            <h3>
                Q${index + 1}. ${q.question}
            </h3>

            ${choicesHTML}
        `;

        questionsContainer.appendChild(questionBox);
    });

    // ======================
    // スクロール（UX改善）
    // ======================
    readingCard.scrollIntoView({
        behavior: "smooth"
    });
}



// ======================
// Vocabulary Toggle
// ======================

vocabBtn.addEventListener(
    "click",
    ()=>{

    vocabBox.classList
    .toggle("hidden");

    vocabBox.innerHTML = "";

    currentReading.vocabulary
    .forEach(word=>{

        vocabBox.innerHTML +=
        `
        <div class="word-item">

            <strong>
            ${word.word}
            </strong>

            :
            ${word.meaning}

        </div>
        `;
    });

});



// ======================
// Submit Answers
// ======================

submitBtn.addEventListener(
    "click",
    checkAnswers
);

function checkAnswers(){

    resultContainer.innerHTML =
    "<h2>結果</h2>";

    currentReading.questions
    .forEach((q,index)=>{

        const selected =
        document.querySelector(
            `input[name="q${index}"]:checked`
        );

        const selectedValue =
        selected ?
        Number(selected.value)
        : -1;

        const isCorrect =
        selectedValue ===
        q.answer;

        resultContainer.innerHTML +=
        `
        <div class="result-box">

            <h3>
                Q${index + 1}

                <span class=
                "${
                    isCorrect
                    ?
                    "correct"
                    :
                    "wrong"
                }">

                ${
                    isCorrect
                    ?
                    "✅ 正解"
                    :
                    "❌ 不正解"
                }

                </span>
            </h3>

            <p>
                正解:
                ${
                    q.choices[
                        q.answer
                    ]
                }
            </p>

            <div class=
            "explanation">

                ${q.explanation}

            </div>

        </div>
        `;
    });

}

function selectReading(id){

    currentReading =
    readings.find(r =>
        r.id === id
    );

    // ★重要：完全リセット
    resultContainer.innerHTML = "";
    vocabBox.innerHTML = "";
    vocabBox.classList.add("hidden");

    displayReading();
}

translationBtn.addEventListener(
    "click",
    ()=>{

    translationBox.classList
    .toggle("hidden");

    translationBox.innerHTML =
    currentReading.translation;

});