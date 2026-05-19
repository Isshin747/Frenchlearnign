const articlesContainer = document.getElementById("articles-container");
const refreshBtn = document.getElementById("refresh-btn");

let selectedLanguage = "english";
let selectedLevel = "beginner";
let selectedCategory = "news";

/* ---------- Button Selection ---------- */

function setupButtons(selector, callback) {
    const buttons = document.querySelectorAll(selector);

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            buttons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            callback(button.dataset);
            renderArticles();
        });
    });
}

/* ---------- Language ---------- */

setupButtons(".lang-btn", (data) => {
    selectedLanguage = data.language;
});

/* ---------- Level ---------- */

setupButtons(".level-btn", (data) => {
    selectedLevel = data.level;
});

/* ---------- Category ---------- */

setupButtons(".category-btn", (data) => {
    selectedCategory = data.category;
});

/* ---------- Render Articles ---------- */

function renderArticles() {

    articlesContainer.innerHTML = "";

    const filteredArticles = articles[selectedLanguage]
        .filter(article =>
            article.level === selectedLevel &&
            article.category === selectedCategory
        );

    if(filteredArticles.length === 0){
        articlesContainer.innerHTML = `
            <p style="font-size:1.2rem;">
                No articles found 😢
            </p>
        `;
        return;
    }

    filteredArticles.forEach(article => {

        const card = document.createElement("div");
        card.classList.add("article-card");

        card.innerHTML = `
            <img src="${article.image}" class="article-image">

            <div class="article-content">

                <div class="article-language">
                    ${selectedLanguage.toUpperCase()}
                </div>

                <h3 class="article-title">
                    ${article.title}
                </h3>

                <p class="article-description">
                    ${article.description}
                </p>

                <button class="read-btn"
                    onclick="openArticle(${article.id})">
                    Read Article
                </button>

            </div>
        `;

        articlesContainer.appendChild(card);
    });
}

/* ---------- Open Article ---------- */

function openArticle(id){

    localStorage.setItem("selectedArticleId", id);

    window.location.href = "reading.html";
}

/* ---------- Refresh ---------- */

refreshBtn.addEventListener("click", () => {
    renderArticles();
});

/* ---------- Initial Render ---------- */

renderArticles();