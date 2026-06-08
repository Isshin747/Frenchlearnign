console.log(questions);

console.log(getList());

console.log("INITIAL LIST:", getList());
let current = 0;
let shuffledQuestions = [];
let qIndex = 0;

let score = 0;
let total = 0;

let speech;

let isPlaying = false;
let shadowStop = false;



window.onload = () => {
  loadQuestion();
};

function loadQuestion() {

  if (shuffledQuestions.length === 0) {
  shuffledQuestions = getList();
}
  const q =
    shuffledQuestions[current];

  document.getElementById("questionText")
    .innerText = q.question;

  document.getElementById("scriptBox")
    .innerText = q.script;

  document.getElementById("scriptBox")
    .classList.add("hidden");

  document.getElementById("translationBox")
    .innerText =
    q.translation ||
    "Translation not available.";

  document.getElementById("translationBox")
    .classList.add("hidden");

  qIndex = 0;

  loadQuiz();
  updateScore();
}
function loadQuiz() {
  const q =
    shuffledQuestions[current]
    .quiz[qIndex];

  const quiz =
    document.getElementById("quiz");

  quiz.innerHTML = "";

  document.getElementById("result")
    .innerText = "";

  const title =
    document.createElement("p");

  title.innerText = q.q;
  quiz.appendChild(title);

  // ★選択肢をシャッフル
  const shuffledOptions =
    shuffleArray(q.options);

  shuffledOptions.forEach(opt => {

    const btn =
      document.createElement("button");

    btn.innerText = opt.text;

    btn.onclick = () => {

      total++;

      if (opt.correct) {
        score++;
        document.getElementById("result")
          .innerText = "✅ Correct!";
      } else {
        document.getElementById("result")
          .innerText = "❌ Wrong";
      }

      updateScore();

      setTimeout(() => {

        qIndex++;

        if (
          qIndex <
          shuffledQuestions[current]
          .quiz.length
        ) {
          loadQuiz();
        }

      }, 600);
    };

    quiz.appendChild(btn);
  });
}


function playAudio() {

  if (
    !shuffledQuestions.length
  ) {
    console.log("NO DATA");
    return;
  }

  const text =
    shuffledQuestions[current]
    .audio;

  speechSynthesis.cancel();

  const u =
    new SpeechSynthesisUtterance(
      text
    );

  u.lang = "en-US";

  setTimeout(() => {
    speechSynthesis.speak(u);
  }, 50);
}
function shadowing() {
  const text =
shuffledQuestions[current]
.audio;

  // ★強い文分割（., !, ?対応）
  const sentences = text.match(/[^.!?]+[.!?]/g);

  console.log("sentences:", sentences);

  if (!sentences || sentences.length === 0) return;

  let i = 0;

  function playNext() {
    if (i >= sentences.length) return;

    const u = new SpeechSynthesisUtterance(sentences[i].trim());

    u.lang = "en-US";
    u.rate = 0.9;

    u.onend = () => {
      console.log("ended:", i);

      setTimeout(() => {
        i++;
        playNext();
      }, 1500);
    };

    speechSynthesis.cancel(); // ★重要（暴走防止）
    speechSynthesis.speak(u);
  }

  playNext();
}

function splitByTime(text, seconds) {
  const words = text.split(" ");
  const wordsPerSecond = 2; // 目安

  const chunkSize = seconds * wordsPerSecond;

  const chunks = [];

  for (let i = 0; i < words.length; i += chunkSize) {
    chunks.push(words.slice(i, i + chunkSize).join(" "));
  }

  return chunks;
}

function stopAudio() {
  shadowStop = true;
  window.speechSynthesis.cancel();
}

function toggleScript() {
  document.getElementById("scriptBox").classList.toggle("hidden");
}

function nextQuestion() {

  current++;

  if (
    current >=
    shuffledQuestions.length
  ) {

    shuffledQuestions =
  getList();

    current = 0;
  }

  score = 0;
  total = 0;

  loadQuestion();
}

function updateScore() {
  document.getElementById("scoreBox").innerText =
    `Score: ${score} / ${total}`;
}

function getList() {

  const level =
    document.getElementById("level")?.value;

  return questions.filter(q => {

    const levelMatch =
      !level ||
      level === "ALL" ||
      q.level === level;

    return levelMatch;

  });
}

window.onload = () => {

  shuffledQuestions =
    getList();

  renderQuestionList();

  loadQuestion();

  document
    .getElementById("level")
    .addEventListener(
      "change",
      () => {

        current = 0;

        shuffledQuestions =
          getList();

        renderQuestionList();

        loadQuestion();

      }
    );

};
function toggleTranslation() {
  document
    .getElementById("translationBox")
    .classList.toggle("hidden");
}
function shuffleArray(array) {
  return [...array].sort(
    () => Math.random() - 0.5
  );
}

function renderQuestionList() {

  const container =
    document.getElementById(
      "questionList"
    );

  container.innerHTML = "";

  const list = getList();

  list.forEach((q,index)=>{

    const card =
      document.createElement("div");

    card.className =
      "question-card";

    card.innerHTML = `
      <div class="question-title">
        ${index + 1}. ${q.question}
      </div>

      <div class="question-level">
        ${q.level}
      </div>
    `;

    card.onclick = ()=>{

      shuffledQuestions = getList();

      current = index;

      loadQuestion();

    };

    container.appendChild(card);

  });

}