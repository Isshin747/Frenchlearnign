const questions = [
  {
    q: "Jelaskan hari ideal Anda.",
    sample: "Hari ideal saya dimulai pagi hari dengan secangkir kopi dan berjalan-jalan."
  },
  {
    q: "Apakah Anda setuju bahwa smartphone boleh digunakan di sekolah?",
    sample: "Saya pikir smartphone bisa membantu dalam pembelajaran jika digunakan dengan bijak."
  },
  {
    q: "Apa hobi favorit Anda?",
    sample: "Hobi favorit saya adalah membaca buku dan mendengarkan musik."
  }
];

let index = 0;

const questionEl = document.getElementById("question");
const sampleEl = document.getElementById("sampleText");
const answerEl = document.getElementById("answer");
const countEl = document.getElementById("count");
const resultEl = document.getElementById("result");

// 文字数カウント（単語数）
answerEl.addEventListener("input", () => {
  const words = answerEl.value.trim().split(/\s+/).filter(w => w);
  countEl.textContent = words.length;
});

// 次の問題
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
    resultEl.innerHTML = "Tulis sesuatu dulu.";
    return;
  }

  resultEl.innerHTML = "Mengecek...";

  try {
    const res = await fetch("https://api.languagetool.org/v2/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        text: text,
        language: "id"
      })
    });

    const data = await res.json();

    if (data.matches.length === 0) {
      resultEl.innerHTML = "✔ Tidak ada kesalahan!";
      return;
    }

    let html = "<h3>Koreksi</h3>";

    data.matches.forEach(m => {
      html += `
        <div class="card">
          <p class="error">❌ ${m.message}</p>
          <p>💡 Saran: ${m.replacements[0]?.value || "—"}</p>
        </div>
      `;
    });

    resultEl.innerHTML = html;

  } catch (err) {
    resultEl.innerHTML = "Error saat mengecek grammar";
    console.error(err);
  }
}