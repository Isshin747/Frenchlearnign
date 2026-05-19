let recognition;
let finalText = "";
let isLoading = false;

/* =========================
   質問
========================= */
const questions = {
  "en-US": [
    "What do you do in your free time?",
    "Describe your hometown.",
    "Do you think technology is good?"
  ],
  "fr-FR": [
    "Parlez de votre ville.",
    "Que faites-vous pendant votre temps libre ?",
    "Aimez-vous la technologie ?"
  ],
  "id-ID": [
    "Ceritakan tentang diri Anda.",
    "Apa hobi Anda?",
    "Apakah teknologi penting?"
  ]
};

function newQuestion() {
  const lang = document.getElementById("lang").value;
  const list = questions[lang];

  const q = list[Math.floor(Math.random() * list.length)];
  document.getElementById("question").innerText = q;
}

/* =========================
   音声認識
========================= */
function startRec() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  recognition = new SpeechRecognition();

  const lang = document.getElementById("lang").value;

  recognition.lang = lang;
  recognition.continuous = true;
  recognition.interimResults = true;

  finalText = "";
  document.getElementById("transcript").innerText = "Listening...";

  recognition.onresult = (event) => {
    let interim = "";

    for (let i = event.resultIndex; i < event.results.length; i++) {
      const text = event.results[i][0].transcript;

      if (event.results[i].isFinal) {
        finalText += text + " ";
      } else {
        interim += text;
      }
    }

    document.getElementById("transcript").innerText =
      finalText + interim;
  };

  recognition.start();
}

function stopRec() {
  if (recognition) recognition.stop();
}

/* =========================
   AI送信（完全対策版）
========================= */
async function sendToAI() {
  if (isLoading) return; // 👉 二重送信防止

  const text = finalText.trim();

  if (!text) {
    document.getElementById("result").innerText = "No speech detected";
    return;
  }

  const button = document.getElementById("aiBtn");
  button.disabled = true;

  isLoading = true;
  document.getElementById("result").innerText = "Analyzing...";

  try {
    await new Promise(r => setTimeout(r, 500)); // 少し間を空ける

    const res = await fetch("http://localhost:3000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text,
        lang: document.getElementById("lang").value
      })
    });

    const data = await res.json();

    if (!res.ok) {
      document.getElementById("result").innerText =
        data.error || "Error occurred";
      return;
    }

    document.getElementById("result").innerText = data.result;

  } catch (err) {
    console.error(err);
    document.getElementById("result").innerText =
      "Server connection error";

  } finally {
    isLoading = false;

    setTimeout(() => {
      button.disabled = false;
    }, 3000);
  }
}