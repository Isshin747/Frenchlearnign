const questions = [
{
    question: "I __ to school every day.",
    translation: "私は毎日学校へ行きます。",
    choices: [
        "go",
        "goes",
        "going",
        "gone"
    ],
    answer: 0,
    explanation: "主語が I なので動詞の原形 go を使います。"
},

{
    question: "She _____ English very well.",
    translation: "彼女は英語をとても上手に話します。",
    choices: [
        "speak",
        "speaks",
        "speaking",
        "spoken"
    ],
    answer: 1,
    explanation: "三人称単数現在なので speaks を使います。"
},

{
    question: "She __ TV last night.",
    translation: "彼女は昨夜テレビを見ました。",
    choices: [
        "watch",
        "watched",
        "watches",
        "watching"
    ],
    answer: 1,
    explanation: "過去を表す last night があるので過去形 watched を使います。"
},
{
    question: "They __ soccer now.",
    translation: "彼らは今サッカーをしています。",
    choices: [
        "play",
        "played",
        "are playing",
        "plays"
    ],
    answer: 2,
    explanation: "now があるため現在進行形 are playing を使います。"
},
{
    question: "I __ my homework yet.",
    translation: "私はまだ宿題を終えていません。",
    choices: [
        "didn't finish",
        "haven't finished",
        "don't finish",
        "am not finishing"
    ],
    answer: 1,
    explanation: "yet があるため現在完了形 haven't finished を使います。"
},
{
    question: "We __ to Kyoto next week.",
    translation: "私たちは来週京都へ行く予定です。",
    choices: [
        "went",
        "go",
        "are going",
        "have gone"
    ],
    answer: 2,
    explanation: "近い未来の予定なので be going to の形を使います。"
},
{
    question: "He __ lunch when I called him.",
    translation: "私が電話したとき、彼は昼食を食べていました。",
    choices: [
        "eats",
        "was eating",
        "ate",
        "has eaten"
    ],
    answer: 1,
    explanation: "過去のある時点で進行中だったので過去進行形 was eating を使います。"
},
{
    question: "By next year, I __ English for ten years.",
    translation: "来年までに私は10年間英語を勉強していることになります。",
    choices: [
        "study",
        "studied",
        "will have studied",
        "am studying"
    ],
    answer: 2,
    explanation: "未来のある時点までの継続なので未来完了形を使います。"
},
{
    question: "You __ wear a seat belt while driving.",
    translation: "運転中はシートベルトを着用しなければなりません。",
    choices: [
        "can",
        "must",
        "may",
        "would"
    ],
    answer: 1,
    explanation: "義務を表す must を使います。"
},
{
    question: "It __ rain tomorrow.",
    translation: "明日は雨が降るかもしれません。",
    choices: [
        "must",
        "should",
        "might",
        "would"
    ],
    answer: 2,
    explanation: "可能性を表す might を使います。"
},
{
    question: "When I was a child, I __ swim very fast.",
    translation: "子どもの頃、私はとても速く泳げました。",
    choices: [
        "can",
        "could",
        "must",
        "should"
    ],
    answer: 1,
    explanation: "過去の能力を表す could を使います。"
},
{
    question: "You __ eat too much candy.",
    translation: "キャンディーを食べすぎない方がいいです。",
    choices: [
        "shouldn't",
        "can't",
        "mustn't",
        "won't"
    ],
    answer: 0,
    explanation: "助言を表す shouldn't を使います。"
},
{
    question: "She said she __ come to the party.",
    translation: "彼女はパーティーに来ると言いました。",
    choices: [
        "will",
        "would",
        "can",
        "must"
    ],
    answer: 1,
    explanation: "間接話法では will が would に変わります。"
},
{
    question: "I __ never seen such a beautiful view.",
    translation: "私はそんな美しい景色を見たことがありません。",
    choices: [
        "am",
        "was",
        "have",
        "had"
    ],
    answer: 2,
    explanation: "現在完了形 have never seen を使います。"
},
{
    question: "They __ already finished the project.",
    translation: "彼らはすでにそのプロジェクトを終えています。",
    choices: [
        "have",
        "had",
        "are",
        "were"
    ],
    answer: 0,
    explanation: "already とともに現在完了形 have finished を使います。"
},
{
    question: "If it rains tomorrow, we _____ home.",
    translation: "もし明日雨が降れば、私たちは家にいます。",
    choices: [
        "stayed",
        "stay",
        "will stay",
        "have stayed"
    ],
    answer: 2,
    explanation: "条件文の主節では未来を表す will stay を使います。"
},
{
    question: "The train __ by the time we arrive.",
    translation: "私たちが着く頃には列車は出発しているでしょう。",
    choices: [
        "left",
        "will leave",
        "will have left",
        "has left"
    ],
    answer: 2,
    explanation: "未来のある時点までに完了する動作なので未来完了形を使います。"
},
{
    question: "You __ park your car here.",
    translation: "ここに車を停めてはいけません。",
    choices: [
        "mustn't",
        "shouldn't",
        "wouldn't",
        "needn't"
    ],
    answer: 0,
    explanation: "禁止を表す mustn't を使います。"
},
{
    question: "I __ call you later.",
    translation: "後で電話します。",
    choices: [
        "will",
        "would",
        "could",
        "should"
    ],
    answer: 0,
    explanation: "未来の意思を表す will を使います。"
},
{
    question: "She __ in Tokyo since 2020.",
    translation: "彼女は2020年から東京に住んでいます。",
    choices: [
        "lives",
        "lived",
        "has lived",
        "is living"
    ],
    answer: 2,
    explanation: "since があるため現在完了形 has lived を使います。"
},
{
    question: "At this time tomorrow, we __ on the beach.",
    translation: "明日の今頃、私たちはビーチにいるでしょう。",
    choices: [
        "relax",
        "relaxed",
        "will be relaxing",
        "have relaxed"
    ],
    answer: 2,
    explanation: "未来のある時点で進行中の動作なので未来進行形を使います。"
},
{
    question: "You __ finish this report today.",
    translation: "今日中にこのレポートを終える必要があります。",
    choices: [
        "may",
        "must",
        "could",
        "would"
    ],
    answer: 1,
    explanation: "強い義務を表す must を使います。"
},

{
    question: "I __ my keys. I can't find them.",
    translation: "鍵をなくしてしまいました。見つかりません。",
    choices: [
        "have lost",
        "lost",
        "lose",
        "am losing"
    ],
    answer: 0,
    explanation: "現在に影響があるので現在完了形 have lost を使います。"
},
{
    question: "She __ dinner when her friend arrived.",
    translation: "友達が来たとき、彼女は夕食を作っていました。",
    choices: [
        "cooked",
        "was cooking",
        "has cooked",
        "cooks"
    ],
    answer: 1,
    explanation: "過去のある時点で進行中だった動作なので過去進行形を使います。"
},
{
    question: "They __ in this city since 2018.",
    translation: "彼らは2018年からこの街に住んでいます。",
    choices: [
        "live",
        "lived",
        "have lived",
        "are living"
    ],
    answer: 2,
    explanation: "since があるため現在完了形 have lived を使います。"
},
{
    question: "By the time you arrive, I __ the work.",
    translation: "あなたが着く頃には私は仕事を終えているでしょう。",
    choices: [
        "finish",
        "finished",
        "will finish",
        "will have finished"
    ],
    answer: 3,
    explanation: "未来のある時点までに完了するので未来完了形を使います。"
},
{
    question: "We __ a movie tonight.",
    translation: "私たちは今夜映画を見る予定です。",
    choices: [
        "are watching",
        "watched",
        "have watched",
        "watch"
    ],
    answer: 0,
    explanation: "予定を表す現在進行形 are watching を使います。"
},
{
    question: "You __ smoke in this building.",
    translation: "この建物で喫煙してはいけません。",
    choices: [
        "can't",
        "mustn't",
        "shouldn't",
        "won't"
    ],
    answer: 1,
    explanation: "禁止を表す mustn't を使います。"
},
{
    question: "She __ be at home. The lights are on.",
    translation: "彼女は家にいるに違いありません。電気がついています。",
    choices: [
        "must",
        "can",
        "should",
        "would"
    ],
    answer: 0,
    explanation: "強い推量を表す must を使います。"
},
{
    question: "I __ speak French when I was younger.",
    translation: "若い頃はフランス語を話せました。",
    choices: [
        "can",
        "must",
        "could",
        "may"
    ],
    answer: 2,
    explanation: "過去の能力を表す could を使います。"
},
{
    question: "It __ snow tonight according to the forecast.",
    translation: "予報によると今夜雪が降るかもしれません。",
    choices: [
        "must",
        "might",
        "should",
        "would"
    ],
    answer: 1,
    explanation: "可能性を表す might を使います。"
},
{
    question: "You __ apologize to her.",
    translation: "あなたは彼女に謝るべきです。",
    choices: [
        "should",
        "mustn't",
        "can't",
        "needn't"
    ],
    answer: 0,
    explanation: "助言を表す should を使います。"
},
{
    question: "When I arrived, the meeting __ already started.",
    translation: "私が到着したとき、会議はすでに始まっていました。",
    choices: [
        "has",
        "had",
        "have",
        "was"
    ],
    answer: 1,
    explanation: "過去のある時点より前なので過去完了形 had started を使います。"
},
{
    question: "He __ his homework before dinner yesterday.",
    translation: "彼は昨日夕食前に宿題を終えました。",
    choices: [
        "finished",
        "finishes",
        "has finished",
        "is finishing"
    ],
    answer: 0,
    explanation: "昨日の出来事なので過去形 finished を使います。"
},
{
    question: "They __ English for three hours by noon.",
    translation: "正午までに彼らは3時間英語を勉強していたことになります。",
    choices: [
        "studied",
        "had studied",
        "have studied",
        "study"
    ],
    answer: 1,
    explanation: "過去のある時点までの継続なので過去完了形を使います。"
},
{
    question: "I __ never eaten sushi before that day.",
    translation: "私はその日まで寿司を食べたことがありませんでした。",
    choices: [
        "have",
        "had",
        "was",
        "did"
    ],
    answer: 1,
    explanation: "過去のある時点までの経験なので過去完了形 had never eaten を使います。"
},
{
    question: "At 8 p.m. tomorrow, I __ for the exam.",
    translation: "明日の午後8時には私は試験勉強をしているでしょう。",
    choices: [
        "study",
        "will study",
        "will be studying",
        "have studied"
    ],
    answer: 2,
    explanation: "未来のある時点で進行中の動作なので未来進行形を使います。"
},
{
    question: "You __ leave now if you want to catch the train.",
    translation: "電車に乗りたいなら今出発したほうがいいです。",
    choices: [
        "should",
        "mustn't",
        "would",
        "couldn't"
    ],
    answer: 0,
    explanation: "助言を表す should を使います。"
},
{
    question: "The door is locked. He __ have gone out.",
    translation: "ドアが閉まっています。彼は外出したに違いありません。",
    choices: [
        "must",
        "can",
        "should",
        "may"
    ],
    answer: 0,
    explanation: "強い推量を表す must have + 過去分詞 を使います。"
},
{
    question: "I __ my grandparents next Sunday.",
    translation: "私は来週の日曜日に祖父母を訪ねる予定です。",
    choices: [
        "visited",
        "visit",
        "am going to visit",
        "have visited"
    ],
    answer: 2,
    explanation: "未来の予定なので be going to を使います。"
},
{
    question: "She __ her report yet.",
    translation: "彼女はまだレポートを提出していません。",
    choices: [
        "didn't submit",
        "doesn't submit",
        "hasn't submitted",
        "isn't submitting"
    ],
    answer: 2,
    explanation: "yet があるため現在完了形 hasn't submitted を使います。"
},
{
    question: "If I had more money, I __ a new car.",
    translation: "もっとお金があれば新しい車を買うのに。",
    choices: [
        "buy",
        "bought",
        "would buy",
        "will buy"
    ],
    answer: 2,
    explanation: "仮定法過去なので would buy を使います。"
},
{
    question: "You __ have told me earlier.",
    translation: "もっと早く私に言うべきでした。",
    choices: [
        "should",
        "must",
        "can",
        "may"
    ],
    answer: 0,
    explanation: "should have + 過去分詞で『～すべきだった』を表します。"
},
{
    question: "He __ waiting for over an hour.",
    translation: "彼は1時間以上待っています。",
    choices: [
        "is",
        "was",
        "has been",
        "had been"
    ],
    answer: 2,
    explanation: "現在まで継続しているので現在完了進行形 has been waiting を使います。"
},
{
    question: "The train __ when we reached the station.",
    translation: "私たちが駅に着いたとき、列車はすでに出発していました。",
    choices: [
        "left",
        "had left",
        "has left",
        "was leaving"
    ],
    answer: 1,
    explanation: "過去のある時点より前なので過去完了形 had left を使います。"
},
{
    question: "You __ be tired after such a long trip.",
    translation: "そんな長旅の後なら疲れているでしょう。",
    choices: [
        "must",
        "can",
        "would",
        "need"
    ],
    answer: 0,
    explanation: "状況からの強い推量なので must を使います。"
},
{
    question: "She said she __ help us.",
    translation: "彼女は私たちを手伝うと言いました。",
    choices: [
        "will",
        "would",
        "can",
        "must"
    ],
    answer: 1,
    explanation: "間接話法では will が would に変わります。"
}
];