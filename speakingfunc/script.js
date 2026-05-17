// ======================
// DOM Elements
// ======================

const languageSelect =
document.getElementById(
"languageSelect"
);

const scenarioSelect =
document.getElementById(
"scenarioSelect"
);

const aiText =
document.getElementById(
"aiText"
);

const speechResult =
document.getElementById(
"speechResult"
);

const feedback =
document.getElementById(
"feedback"
);

const summaryCard =
document.getElementById(
"summaryCard"
);

const summaryContent =
document.getElementById(
"summaryContent"
);

const startBtn =
document.getElementById(
"startBtn"
);

const stopBtn =
document.getElementById(
"stopBtn"
);

const nextBtn =
document.getElementById(
"nextBtn"
);

const finishBtn =
document.getElementById(
"finishBtn"
);

const phraseCard =
document.getElementById(
"phraseCard"
);

const phraseList =
document.getElementById(
"phraseList"
);

const phraseProgress =
document.getElementById(
"phraseProgress"
);

// ======================
// Variables
// ======================

let recognition;

let currentIndex = 0;

let transcriptText =
"";

let conversationLog =
[];

let correctionHistory =
[];

let usedPhrases =
[];

// ======================
// Restaurant Phrases
// ======================

const restaurantPhrases = {

    "en-US": [
        "can i have",
        "i'd like to order",
        "what do you recommend",
        "can i get the bill",
        "could i get",
        "no onions please"
    ],

    "fr-FR": [
        "je voudrais",
        "je peux avoir",
        "qu'est-ce que vous recommandez",
        "l'addition s'il vous plaît"
    ],

    "id-ID": [
        "saya mau pesan",
        "bisa minta",
        "apa rekomendasi anda",
        "boleh minta tagihannya"
    ]
};

// ======================
// Initial Display
// ======================

updateConversation();
updatePhraseList();

// ======================
// Update Conversation
// ======================

function updateConversation() {

    const language =
    languageSelect.value;

    const scenario =
    scenarioSelect.value;

    const lines =
    roleplays[
        language
    ][scenario];

    aiText.textContent =
    lines[currentIndex];
}

// ======================
// Speech Recognition
// ======================

const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

if (SpeechRecognition) {

    recognition =
    new SpeechRecognition();

    recognition.continuous =
    true;

    recognition.interimResults =
    true;

    recognition.onstart =
    () => {

        startBtn.textContent =
        "🎙 Recording...";

        startBtn.classList
        .add(
            "recording"
        );
    };

    recognition.onresult =
    (event) => {

        transcriptText =
        "";

        for (
            let i = 0;
            i <
            event.results
            .length;
            i++
        ) {

            transcriptText +=
            event.results[i][0]
            .transcript;
        }

        speechResult
        .textContent =
        transcriptText;
    };

    recognition.onend =
    () => {

        startBtn.textContent =
        "🎙 Start Recording";

        startBtn.classList
        .remove(
            "recording"
        );

        checkGrammar();
    };

} else {

    alert(
    "Speech recognition not supported."
    );
}

// ======================
// Buttons
// ======================

startBtn
.addEventListener(
"click",
() => {

    transcriptText =
    "";

    recognition.lang =
    languageSelect.value;

    recognition.start();
});

stopBtn
.addEventListener(
"click",
() => {

    recognition.stop();
});

nextBtn
.addEventListener(
"click",
() => {

    saveConversation();

    const language =
    languageSelect.value;

    const scenario =
    scenarioSelect.value;

    const lines =
    roleplays[
        language
    ][scenario];

    currentIndex++;

    if (
        currentIndex >=
        lines.length
    ) {
        currentIndex = 0;
    }

    aiText.textContent =
    lines[currentIndex];

    speechResult
    .textContent =
    "Press Start Recording";
});

finishBtn
.addEventListener(
"click",
() => {

    saveConversation();

    generateSummary();
});

// ======================
// Change Events
// ======================

scenarioSelect
.addEventListener(
"change",
() => {

    currentIndex = 0;

    usedPhrases =
    [];

    updateConversation();

    updatePhraseList();
});

languageSelect
.addEventListener(
"change",
() => {

    currentIndex = 0;

    usedPhrases =
    [];

    updateConversation();

    updatePhraseList();
});

// ======================
// Save Conversation
// ======================

function saveConversation() {

    if (
        transcriptText.trim()
        === ""
    ) {
        return;
    }

    conversationLog.push({

        ai:
        aiText.textContent,

        user:
        transcriptText
    });
}

// ======================
// Grammar Check
// ======================

async function checkGrammar() {

    const text =
    transcriptText.trim();

    if (!text) {
        return;
    }

    const selectedLanguage =
    languageSelect.value;

    // Indonesian → simple check
    if (
        selectedLanguage
        === "id-ID"
    ) {

        simpleIndonesianCheck(
            text
        );

        detectPhrases();

        return;
    }

    const languageMap = {

        "en-US":
        "en-US",

        "fr-FR":
        "fr"
    };

    const language =
    languageMap[
        selectedLanguage
    ];

    try {

        const params =
        new URLSearchParams();

        params.append(
            "text",
            text
        );

        params.append(
            "language",
            language
        );

        const response =
        await fetch(
        "https://api.languagetool.org/v2/check",
        {
            method:
            "POST",

            headers: {
                "Content-Type":
                "application/x-www-form-urlencoded"
            },

            body:
            params
        });

        if (
            !response.ok
        ) {

            throw new Error(
            "API Error"
            );
        }

        const data =
        await response.json();

        showCorrections(
            data
        );

    } catch (
        error
    ) {

        console.error(
            error
        );

        feedback.innerHTML =
        `
        ❌ Grammar check unavailable.
        `;
    }

    detectPhrases();
}

// ======================
// Indonesian Check
// ======================

function simpleIndonesianCheck(
text
) {

    const rules = [

        {
            wrong:
            /\bkemaren\b/i,

            suggestion:
            "kemarin"
        },

        {
            wrong:
            /\bgak\b/i,

            suggestion:
            "tidak"
        },

        {
            wrong:
            /\bnggak\b/i,

            suggestion:
            "tidak"
        },

        {
            wrong:
            /\baku adalah\b/i,

            suggestion:
            "Aku"
        }
    ];

    let mistakes =
    [];

    rules.forEach(
    (rule) => {

        if (
            rule.wrong
            .test(text)
        ) {

            mistakes
            .push(
            `
            ❌ Possible correction
            → ✅
            ${rule.suggestion}
            `
            );
        }
    });

    if (
        mistakes.length
        === 0
    ) {

        feedback.innerHTML =
        `
        ✅ No major speaking mistakes found!
        `;

        return;
    }

    feedback.innerHTML =
    mistakes.join(
        "<br>"
    );
}

// ======================
// Show Corrections
// ======================

function showCorrections(
data
) {

    if (
        data.matches
        .length === 0
    ) {

        feedback.innerHTML =
        `
        ✅ No major speaking mistakes found!
        `;

        return;
    }

    const ignoredRules = [

        "UPPERCASE_SENTENCE_START",

        "PUNCTUATION_PARAGRAPH_END",

        "FINAL_PUNCTUATION",

        "TYPOGRAPHY",

        "CASING",

        "APOSTROPHE"
    ];

    let html =
    "<ul>";

    let usefulMistakes =
    0;

    data.matches.forEach(
    (match) => {

        const ruleId =
        match.rule.id;

        const category =
        match.rule
        .category?.id;

        if (

            ignoredRules
            .includes(
                ruleId
            ) ||

            category
            ===
            "TYPOGRAPHY" ||

            category
            ===
            "CASING"
        ) {
            return;
        }

        const wrong =
        transcriptText
        .substring(
            match.offset,

            match.offset +
            match.length
        );

        const suggestion =
        match.replacements[0]
        ?.value ||

        "No suggestion";

        usefulMistakes++;

        correctionHistory
        .push({

            wrong,
            suggestion
        });

        html += `
        <li>
        ❌ ${wrong}
        → ✅
        ${suggestion}
        </li>
        `;
    });

    html +=
    "</ul>";

    if (
        usefulMistakes
        === 0
    ) {

        feedback.innerHTML =
        `
        ✅ No important speaking mistakes found!
        `;

        return;
    }

    feedback.innerHTML =
    html;
}

// ======================
// Restaurant Phrases UI
// ======================

function updatePhraseList() {

    if (
        !phraseCard ||
        !phraseList ||
        !phraseProgress
    ) {
        return;
    }

    const scenario =
    scenarioSelect.value;

    // Restaurant only
    if (
        scenario !==
        "restaurant"
    ) {

        phraseCard.style.display =
        "none";

        return;
    }

    phraseCard.style.display =
    "block";

    const language =
    languageSelect.value;

    const phrases =
    restaurantPhrases[
        language
    ];

    if (!phrases) {
        return;
    }

    phraseList.innerHTML =
    "";

    phrases.forEach(
    (phrase) => {

        const used =
        usedPhrases
        .includes(
            phrase
        );

        phraseList.innerHTML +=
        `
        <div class="phrase-item">
            ${
                used
                ? "✅"
                : "⬜"
            }
            ${phrase}
        </div>
        `;
    });

    phraseProgress
    .textContent =
    `
    ${usedPhrases.length}
    /
    ${phrases.length}
    `;
}

// ======================
// Detect Used Phrases
// ======================

function detectPhrases() {

    if (
        scenarioSelect.value
        !==
        "restaurant"
    ) {
        return;
    }

    const language =
    languageSelect.value;

    const phrases =
    restaurantPhrases[
        language
    ];

    if (
        !phrases
    ) {
        return;
    }

    const lowerText =
    transcriptText
    .toLowerCase();

    phrases.forEach(
    (phrase) => {

        if (

            lowerText
            .includes(
                phrase
                .toLowerCase()
            ) &&

            !usedPhrases
            .includes(
                phrase
            )
        ) {

            usedPhrases
            .push(
                phrase
            );
        }
    });

    updatePhraseList();
}

// ======================
// Summary
// ======================

function generateSummary() {

    let totalWords =
    0;

    conversationLog
    .forEach(
    (item) => {

        totalWords +=
        item.user
        .split(" ")
        .length;
    });

    let html =
    `
    <h3>
    📝 Conversation Log
    </h3>
    `;

    conversationLog
    .forEach(
    (convo) => {

        html +=
        `
        <div class="summary-item">

            <p>
            <strong>
            🤖 AI:
            </strong>

            ${convo.ai}
            </p>

            <p>
            <strong>
            🗣 You:
            </strong>

            ${convo.user}
            </p>

        </div>
        `;
    });

    html +=
    `
    <h3>
    ❌ Mistakes
    </h3>
    `;

    if (
        correctionHistory
        .length === 0
    ) {

        html +=
        `
        <p>
        No mistakes found 🎉
        </p>
        `;
    }

    correctionHistory
    .forEach(
    (item) => {

        html +=
        `
        <p>
        ❌ ${item.wrong}
        →
        ✅ ${item.suggestion}
        </p>
        `;
    });

    html +=
    `
    <h3>
    📊 Stats
    </h3>

    <p>
    Total Words:
    ${totalWords}
    </p>

    <p>
    Conversation Turns:
    ${conversationLog.length}
    </p>
    `;

    summaryContent
    .innerHTML =
    html;

    summaryCard
    .style.display =
    "block";
}