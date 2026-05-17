const questions = [
  {
    q: "Décrivez votre journée idéale.",
    sample: "Ma journée idéale commence tôt le matin avec un café."
  },
  {
    q: "Pensez-vous que les smartphones devraient être autorisés à l'école ?",
    sample: "Je pense que les smartphones peuvent être utiles pour apprendre."
  },
  {
    q: "Quel est votre passe-temps préféré ?",
    sample: "Mon passe-temps préféré est lire des livres."
  }
];

let index = 0;

const questionEl = document.getElementById("question");
const sampleEl = document.getElementById("sampleText");
const answerEl = document.getElementById("answer");
const countEl = document.getElementById("count");
const resultEl = document.getElementById("result");

// 文字数カウント
answerEl.addEventListener("input", () => {
  const words = answerEl.value.trim().split(/\s+/).filter(w => w);
  countEl.textContent = words.length;
});

// 問題切り替え
function nextQuestion() {
  index = (index + 1) % questions.length;
  questionEl.textContent = questions[index].q;
  sampleEl.textContent = questions[index].sample;
  answerEl.value = "";
  countEl.textContent = 0;
  resultEl.innerHTML = "";
}

// 文法チェック（LanguageTool）
async function checkGrammar() {
  const text = answerEl.value;

  if (!text.trim()) {
    resultEl.innerHTML = "Écris quelque chose d'abord.";
    return;
  }

  resultEl.innerHTML = "Checking...";

  try {
    const res = await fetch("https://api.languagetool.org/v2/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        text: text,
        language: "fr"
      })
    });

    const data = await res.json();

    if (data.matches.length === 0) {
      resultEl.innerHTML = "✔ No mistakes found!";
      return;
    }

    let html = "<h3>Corrections</h3>";

    data.matches.forEach(m => {
      html += `
        <div class="card">
          <p class="error">❌ ${m.message}</p>
          <p>💡 Suggestion: ${m.replacements[0]?.value || "—"}</p>
        </div>
      `;
    });

    resultEl.innerHTML = html;

  } catch (err) {
    resultEl.innerHTML = "Error connecting to API";
    console.error(err);
  }
}