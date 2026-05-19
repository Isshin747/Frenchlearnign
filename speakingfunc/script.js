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

// ======================
// Useful Phrases
// ======================

const usefulPhrases = {

    "en-US": {

    restaurant: [

        {
            phrase: "can i have",
            jp: "〜をもらえますか？"
        },

        {
            phrase: "i'd like to order",
            jp: "注文したいです"
        },

        {
            phrase: "what do you recommend",
            jp: "おすすめは何ですか？"
        },

        {
            phrase: "can i get the bill",
            jp: "お会計お願いします"
        },

        {
            phrase: "could i get",
            jp: "〜をいただけますか？"
        },

        {
            phrase: "no onions please",
            jp: "玉ねぎ抜きでお願いします"
        }
    ],

    airport: [

        {
            phrase: "here is my passport",
            jp: "こちらがパスポートです"
        },

        {
            phrase: "i am traveling to",
            jp: "〜へ行きます"
        },

        {
            phrase: "i have one suitcase",
            jp: "スーツケースを1つ持っています"
        },

        {
            phrase: "where is the gate",
            jp: "ゲートはどこですか？"
        },

        {
            phrase: "how long is the delay",
            jp: "どれくらい遅れていますか？"
        }
    ],

    friend: [

        {
            phrase: "i hung out with",
            jp: "〜と遊びました"
        },

        {
            phrase: "my hobby is",
            jp: "私の趣味は〜です"
        },

        {
            phrase: "i really enjoy",
            jp: "〜が本当に好きです"
        },

        {
            phrase: "what about you",
            jp: "あなたはどう？"
        },

        {
            phrase: "that sounds fun",
            jp: "楽しそう！"
        }
    ],

    basicInterview: [

        {
            phrase: "i am from",
            jp: "私は〜出身です"
        },

        {
            phrase: "my hobby is",
            jp: "私の趣味は〜です"
        },

        {
            phrase: "i am learning this language because",
            jp: "この言語を学んでいる理由は〜です"
        },

        {
            phrase: "my strength is",
            jp: "私の強みは〜です"
        },

        {
            phrase: "my weakness is",
            jp: "私の弱みは〜です"
        }
    ],

    partTimeInterview: [

        {
            phrase: "i want to work here because",
            jp: "ここで働きたい理由は〜です"
        },

        {
            phrase: "i have experience in",
            jp: "〜の経験があります"
        },

        {
            phrase: "i can work weekends",
            jp: "週末働けます"
        },

        {
            phrase: "i would stay calm",
            jp: "落ち着いて対応します"
        },

        {
            phrase: "i learn from mistakes",
            jp: "失敗から学びます"
        }
    ],

    ieltsInterview: [

        {
            phrase: "in my opinion",
            jp: "私の意見では"
        },

        {
            phrase: "for example",
            jp: "例えば"
        },

        {
            phrase: "i prefer",
            jp: "私は〜の方が好きです"
        },

        {
            phrase: "i believe that",
            jp: "私は〜だと思います"
        },

        {
            phrase: "on weekends",
            jp: "週末は"
        }
    ],

    studyAbroadInterview: [

        {
            phrase: "i want to study abroad because",
            jp: "留学したい理由は〜です"
        },

        {
            phrase: "i chose this country because",
            jp: "この国を選んだ理由は〜です"
        },

        {
            phrase: "my future goal is",
            jp: "将来の目標は〜です"
        },

        {
            phrase: "i will adapt to",
            jp: "〜に適応します"
        },

        {
            phrase: "this experience will help me",
            jp: "この経験は私の役に立ちます"
        }
    ],

    pressureInterview: [

        {
            phrase: "i learned from failure",
            jp: "失敗から学びました"
        },

        {
            phrase: "under pressure",
            jp: "プレッシャーの中で"
        },

        {
            phrase: "i would communicate",
            jp: "私は話し合います"
        },

        {
            phrase: "my biggest weakness is",
            jp: "私の最大の弱みは〜です"
        },

        {
            phrase: "i would stay professional",
            jp: "プロとして対応します"
        }
    ]
},

    "fr-FR": {

    restaurant: [

        {
            phrase: "je voudrais",
            jp: "〜が欲しいです"
        },

        {
            phrase: "je peux avoir",
            jp: "〜をいただけますか？"
        },

        {
            phrase: "qu'est-ce que vous recommandez",
            jp: "おすすめは何ですか？"
        },

        {
            phrase: "l'addition s'il vous plaît",
            jp: "お会計お願いします"
        }
    ],

    airport: [

        {
            phrase: "voici mon passeport",
            jp: "こちらがパスポートです"
        },

        {
            phrase: "je voyage à",
            jp: "〜へ行きます"
        },

        {
            phrase: "j'ai une valise",
            jp: "スーツケースを1つ持っています"
        },

        {
            phrase: "où est la porte",
            jp: "ゲートはどこですか？"
        },

        {
            phrase: "y a-t-il un retard",
            jp: "遅延はありますか？"
        }
    ],

    friend: [

        {
            phrase: "mon passe-temps est",
            jp: "私の趣味は〜です"
        },

        {
            phrase: "j'aime beaucoup",
            jp: "〜が大好きです"
        },

        {
            phrase: "et toi",
            jp: "あなたは？"
        },

        {
            phrase: "ça a l'air amusant",
            jp: "楽しそう！"
        }
    ],

    basicInterview: [

        {
            phrase: "je viens de",
            jp: "私は〜出身です"
        },

        {
            phrase: "mon passe-temps est",
            jp: "私の趣味は〜です"
        },

        {
            phrase: "j'apprends cette langue parce que",
            jp: "この言語を学んでいる理由は〜です"
        },

        {
            phrase: "ma qualité est",
            jp: "私の長所は〜です"
        },

        {
            phrase: "mon défaut est",
            jp: "私の短所は〜です"
        }
    ],

    partTimeInterview: [

        {
            phrase: "je veux travailler ici parce que",
            jp: "ここで働きたい理由は〜です"
        },

        {
            phrase: "j'ai de l'expérience",
            jp: "経験があります"
        },

        {
            phrase: "je peux travailler le week-end",
            jp: "週末働けます"
        },

        {
            phrase: "je resterais calme",
            jp: "落ち着いて対応します"
        },

        {
            phrase: "j'apprends de mes erreurs",
            jp: "失敗から学びます"
        }
    ],

    ieltsInterview: [

        {
            phrase: "à mon avis",
            jp: "私の意見では"
        },

        {
            phrase: "par exemple",
            jp: "例えば"
        },

        {
            phrase: "je préfère",
            jp: "私は〜の方が好きです"
        },

        {
            phrase: "je pense que",
            jp: "私は〜だと思います"
        },

        {
            phrase: "le week-end",
            jp: "週末は"
        }
    ],

    studyAbroadInterview: [

        {
            phrase: "je veux étudier à l'étranger parce que",
            jp: "留学したい理由は〜です"
        },

        {
            phrase: "j'ai choisi ce pays parce que",
            jp: "この国を選んだ理由は〜です"
        },

        {
            phrase: "mon objectif est",
            jp: "私の目標は〜です"
        },

        {
            phrase: "je vais m'adapter",
            jp: "適応します"
        },

        {
            phrase: "cela aidera ma carrière",
            jp: "キャリアに役立ちます"
        }
    ],

    pressureInterview: [

        {
            phrase: "j'ai appris de l'échec",
            jp: "失敗から学びました"
        },

        {
            phrase: "sous pression",
            jp: "プレッシャーの中で"
        },

        {
            phrase: "je communiquerais",
            jp: "話し合います"
        },

        {
            phrase: "ma plus grande faiblesse est",
            jp: "私の最大の弱みは〜です"
        },

        {
            phrase: "je resterais professionnel",
            jp: "プロとして対応します"
        }
    ]
},
    "id-ID": {

    restaurant: [

        {
            phrase: "saya mau pesan",
            jp: "注文したいです"
        },

        {
            phrase: "bisa minta",
            jp: "〜をいただけますか？"
        },

        {
            phrase: "apa rekomendasi anda",
            jp: "おすすめは何ですか？"
        },

        {
            phrase: "boleh minta tagihannya",
            jp: "お会計お願いします"
        }
    ],

    airport: [

        {
            phrase: "ini paspor saya",
            jp: "こちらがパスポートです"
        },

        {
            phrase: "saya pergi ke",
            jp: "〜へ行きます"
        },

        {
            phrase: "saya membawa satu koper",
            jp: "スーツケースを1つ持っています"
        },

        {
            phrase: "di mana gerbangnya",
            jp: "ゲートはどこですか？"
        },

        {
            phrase: "berapa lama penundaannya",
            jp: "どれくらい遅れていますか？"
        }
    ],

    friend: [

        {
            phrase: "hobi saya adalah",
            jp: "私の趣味は〜です"
        },

        {
            phrase: "saya sangat suka",
            jp: "〜が大好きです"
        },

        {
            phrase: "bagaimana dengan kamu",
            jp: "あなたはどう？"
        },

        {
            phrase: "itu terdengar menyenangkan",
            jp: "楽しそう！"
        }
    ],

    basicInterview: [

        {
            phrase: "saya berasal dari",
            jp: "私は〜出身です"
        },

        {
            phrase: "hobi saya adalah",
            jp: "私の趣味は〜です"
        },

        {
            phrase: "saya belajar bahasa ini karena",
            jp: "この言語を学んでいる理由は〜です"
        },

        {
            phrase: "kelebihan saya adalah",
            jp: "私の強みは〜です"
        },

        {
            phrase: "kekurangan saya adalah",
            jp: "私の弱みは〜です"
        }
    ],

    partTimeInterview: [

        {
            phrase: "saya ingin bekerja di sini karena",
            jp: "ここで働きたい理由は〜です"
        },

        {
            phrase: "saya punya pengalaman",
            jp: "経験があります"
        },

        {
            phrase: "saya bisa bekerja akhir pekan",
            jp: "週末働けます"
        },

        {
            phrase: "saya akan tetap tenang",
            jp: "落ち着いて対応します"
        },

        {
            phrase: "saya belajar dari kesalahan",
            jp: "失敗から学びます"
        }
    ],

    ieltsInterview: [

        {
            phrase: "menurut saya",
            jp: "私の意見では"
        },

        {
            phrase: "contohnya",
            jp: "例えば"
        },

        {
            phrase: "saya lebih suka",
            jp: "私は〜の方が好きです"
        },

        {
            phrase: "saya percaya bahwa",
            jp: "私は〜だと思います"
        },

        {
            phrase: "di akhir pekan",
            jp: "週末は"
        }
    ],

    studyAbroadInterview: [

        {
            phrase: "saya ingin belajar di luar negeri karena",
            jp: "留学したい理由は〜です"
        },

        {
            phrase: "saya memilih negara ini karena",
            jp: "この国を選んだ理由は〜です"
        },

        {
            phrase: "tujuan masa depan saya adalah",
            jp: "将来の目標は〜です"
        },

        {
            phrase: "saya akan beradaptasi",
            jp: "適応します"
        },

        {
            phrase: "pengalaman ini membantu karier saya",
            jp: "キャリアに役立ちます"
        }
    ],

    pressureInterview: [

        {
            phrase: "saya belajar dari kegagalan",
            jp: "失敗から学びました"
        },

        {
            phrase: "di bawah tekanan",
            jp: "プレッシャーの中で"
        },

        {
            phrase: "saya akan berkomunikasi",
            jp: "話し合います"
        },

        {
            phrase: "kelemahan terbesar saya adalah",
            jp: "私の最大の弱みは〜です"
        },

        {
            phrase: "saya akan tetap profesional",
            jp: "プロとして対応します"
        }
    ]
}};

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

    // 大文字系
    "UPPERCASE_SENTENCE_START",

    // 文末句読点
    "PUNCTUATION_PARAGRAPH_END",
    "FINAL_PUNCTUATION",

    // カンマ系（スピーキングなので無視）
    "COMMA_PARENTHESIS_WHITESPACE",
    "EN_COMPOUNDS",
    "COMMA_RULE",
    "MISSING_COMMA",
    "PUNCTUATION",

    // タイポ系
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

    ignoredRules.includes(
        ruleId
    ) ||

    category ===
    "TYPOGRAPHY" ||

    category ===
    "CASING" ||

    category ===
    "PUNCTUATION" ||

    category ===
    "PUNCTUATION_STYLE"
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

    const language =
    languageSelect.value;

    const phrases =
    usefulPhrases[
        language
    ]?.[
        scenario
    ];

    // phraseが無い場合
    if (!phrases) {

        phraseCard.style.display =
        "none";

        return;
    }

    // phrase表示
    phraseCard.style.display =
    "block";

    phraseList.innerHTML =
    "";

    phrases.forEach(
    (phraseObj) => {

        const used =
        usedPhrases.includes(
            phraseObj.phrase
        );

        phraseList.innerHTML +=
        `
        <div class="phrase-item">

            ${
                used
                ? "✅"
                : "⬜"
            }

            <strong>
                ${phraseObj.phrase}
            </strong>

            <br>

            <small>
                🇯🇵 ${phraseObj.jp}
            </small>

        </div>
        `;
    });

    phraseProgress.textContent =
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

    const scenario =
    scenarioSelect.value;

    const language =
    languageSelect.value;

    const phrases =
    usefulPhrases[
        language
    ]?.[
        scenario
    ];

    if (!phrases) {
        return;
    }

    const lowerText =
    transcriptText
    .toLowerCase();

    phrases.forEach(
    (phraseObj) => {

    const phrase =
    phraseObj.phrase;
        if (

            lowerText.includes(
                phrase.toLowerCase()
            ) &&

            !usedPhrases.includes(
                phrase
            )
        ) {

            usedPhrases.push(
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
recognition.lang = "en-US";
recognition.onerror = (event) => {
    console.log("Speech error:", event.error);
    alert("Mic error: " + event.error);
};