let recognition;
let finalText = "";

const questions = {
  "en-US": {
    easy: [
      "What is your name?",
      "Where do you live?",
      "What is your favorite food?",
      "What do you do every day?",
      "Do you like music?"
    ],

    medium: [
      "Describe your hometown.",
      "What do you do in your free time?",
      "Describe your last vacation.",
      "What kind of movies do you like and why?",
      "Do you prefer studying alone or with others?"
    ],

    hard: [
      "Do you think social media has more advantages or disadvantages?",
      "How has technology changed the way people communicate?",
      "Should governments invest more in education or defense?",
      "What are the causes of climate change?",
      "Do you agree that money brings happiness?"
    ]
  },
    "fr-FR": {
    easy: [
      "Comment vous appelez-vous ?",
      "Où habitez-vous ?",
      "Quel est votre plat préféré ?",
      "Que faites-vous chaque jour ?",
      "Aimez-vous la musique ?"
    ],

    medium: [
      "Décrivez votre ville natale.",
      "Que faites-vous pendant votre temps libre ?",
      "Parlez de vos dernières vacances.",
      "Quel type de films aimez-vous et pourquoi ?",
      "Préférez-vous étudier seul ou en groupe ?"
    ],

    hard: [
      "Pensez-vous que les réseaux sociaux sont bénéfiques ou nuisibles ?",
      "Comment la technologie a-t-elle changé la communication ?",
      "Doit-on investir plus dans l'éducation ou la défense ?",
      "Quelles sont les causes du changement climatique ?",
      "L'argent fait-il le bonheur ?"
    ]
  },

    "id-ID": {
    easy: [
      "Siapa nama Anda?",
      "Di mana Anda tinggal?",
      "Apa makanan favorit Anda?",
      "Apa yang Anda lakukan setiap hari?",
      "Apakah Anda suka musik?"
    ],

    medium: [
      "Deskripsikan kota asal Anda.",
      "Apa yang Anda lakukan di waktu luang?",
      "Ceritakan liburan terakhir Anda.",
      "Jenis film apa yang Anda sukai dan mengapa?",
      "Apakah Anda lebih suka belajar sendiri atau bersama orang lain?"
    ],

    hard: [
      "Apakah media sosial lebih banyak manfaat atau kerugian?",
      "Bagaimana teknologi mengubah cara orang berkomunikasi?",
      "Haruskah pemerintah lebih banyak berinvestasi di pendidikan atau pertahanan?",
      "Apa penyebab perubahan iklim?",
      "Apakah uang membuat orang bahagia?"
    ]
  }
};

document.getElementById("question").innerText = questions["en-US"];

document.getElementById("lang").addEventListener("change", (e) => {
    document.getElementById("question").innerText =
        questions[e.target.value];
});

function startRec() {
    const lang = document.getElementById("lang").value;

    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = lang;
    recognition.interimResults = true;

    finalText = "";

    recognition.onresult = (event) => {
        let text = "";
        for (let i = 0; i < event.results.length; i++) {
            text += event.results[i][0].transcript;
        }
        finalText = text;
        document.getElementById("transcript").innerText = text;
    };

    recognition.start();
}

function stopRec() {
    if (recognition) recognition.stop();
}

function sendToAI() {

    document.getElementById("result").innerText = "Analyzing...";

    setTimeout(() => {
        document.getElementById("result").innerText = `
Score: 72/100

You said:
${finalText}

Better version:
I was born and raised in...
`;
    }, 1000);
}
function getRandomQuestion(lang){
  const list = questions[lang];
  return list[Math.floor(Math.random() * list.length)];
}

function getQuestion(lang, level){
  const list = questions[lang][level];
  return list[Math.floor(Math.random() * list.length)];
}

function showQuestion(){
  const lang = document.getElementById("lang").value;
  const level = document.getElementById("level").value;

  document.getElementById("question").innerText =
    getQuestion(lang, level);
}