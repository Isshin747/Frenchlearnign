const articleId = Number(localStorage.getItem("selectedArticleId"));

const titleEl = document.getElementById("article-title");
const descriptionEl = document.getElementById("article-description");
const imageEl = document.getElementById("article-image");
const contentEl = document.getElementById("article-content");

const listenBtn = document.getElementById("listen-btn");
const saveBtn = document.getElementById("save-btn");
const translateBtn = document.getElementById("translate-btn");

let currentArticle = null;
let translationMode = false;

/* ---------- Find Article ---------- */

function findArticle() {

    const allArticles = [
        ...articles.english,
        ...articles.french,
        ...articles.indonesian
    ];

    currentArticle = allArticles.find(
        article => article.id === articleId
    );

    if (!currentArticle) {
        contentEl.innerHTML = `
            <h2>Article not found 😢</h2>
        `;
        return;
    }

    renderArticle();
}

/* ---------- Render Article ---------- */

function renderArticle() {

    titleEl.textContent =
        currentArticle.title;

    descriptionEl.textContent =
        currentArticle.description;

    imageEl.src =
        currentArticle.image;

    const paragraphs =
        currentArticle.content
        .trim()
        .split("\n");

    contentEl.innerHTML = "";

    paragraphs.forEach(paragraph => {

        if(paragraph.trim() === "") return;

        const p =
            document.createElement("p");

        const words =
            paragraph.split(" ");

        p.innerHTML = words
            .map(word =>
                `<span class="word">
                    ${word}
                </span>`
            )
            .join(" ");

        contentEl.appendChild(p);
    });

    addWordClick();
}

/* ---------- Word Click ---------- */

function addWordClick(){

    const words =
        document.querySelectorAll(".word");

    words.forEach(word => {

        word.addEventListener("click", () => {

            const selectedWord =
                word.textContent
                .replace(/[.,!?]/g, "");

            saveWordPopup(selectedWord);
        });
    });
}

/* ---------- Save Word Popup ---------- */

function saveWordPopup(word){

    const shouldSave =
        confirm(
            `"${word}" を保存しますか？`
        );

    if(!shouldSave) return;

    let savedWords =
        JSON.parse(
            localStorage.getItem("savedWords")
        ) || [];

    if(!savedWords.includes(word)){
        savedWords.push(word);

        localStorage.setItem(
            "savedWords",
            JSON.stringify(savedWords)
        );
    }

    alert(`"${word}" saved ⭐`);
}

/* ---------- Speech ---------- */

listenBtn.addEventListener("click", () => {

    speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(
            currentArticle.content
        );

    const text =
        currentArticle.content;

    /* Detect language */

    if(/[àâçéèêëîïôûùüÿœ]/i.test(text)){
        speech.lang = "fr-FR";
    }
    else if(/[A-Za-z]/.test(text)){
        speech.lang = "en-US";
    }
    else{
        speech.lang = "id-ID";
    }

    speech.rate = 0.9;

    speechSynthesis.speak(speech);
});

/* ---------- Translation ---------- */

translateBtn.addEventListener("click", () => {

    translationMode =
        !translationMode;

    if(translationMode){

        translateBtn.textContent =
            "❌ Hide Translation";

        alert(
`翻訳機能は次で追加する！
（無料API対応版を作る）`
        );

    } else {

        translateBtn.textContent =
            "🌐 Translation";
    }

});

/* ---------- Save Button ---------- */

saveBtn.addEventListener("click", () => {

    alert(
`単語をクリックすると保存できます ⭐`
    );

});

/* ---------- Progress Bar ---------- */

window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const docHeight =
        document.body.scrollHeight
        - window.innerHeight;

    const progress =
        (scrollTop / docHeight)
        * 100;

    document.getElementById(
        "progress-bar"
    ).style.width =
        progress + "%";
});

/* ---------- Back ---------- */

function goBack(){
    history.back();
}

/* ---------- Quiz ---------- */

document
.getElementById("quiz-btn")
.addEventListener("click", () => {

    alert(
`クイズ機能は次で追加！📝`
    );

});

/* ---------- Start ---------- */

findArticle();