/* ==========================
   Elements
========================== */

const examButtons =
document.querySelectorAll(".exam-btn");

const generateBtn =
document.getElementById("generateBtn");

const topicBox =
document.getElementById("topicBox");

const topicHint =
document.getElementById("topicHint");

const essayInput =
document.getElementById("essayInput");

const checkBtn =
document.getElementById("checkBtn");

const loading =
document.getElementById("loading");

const resultSection =
document.getElementById("resultSection");

const wordCount =
document.getElementById("wordCount");

const minimumWarning =
document.getElementById(
"minimumWarning"
);

const correctionsDiv =
document.getElementById(
"corrections"
);

const sampleAnswer =
document.getElementById(
"sampleAnswer"
);

const relevanceResult =
document.getElementById(
"relevanceResult"
);

const usefulExpressions =
document.getElementById(
"usefulExpressions"
);

const contentScore =
document.getElementById(
"contentScore"
);

const grammarScore =
document.getElementById(
"grammarScore"
);

const vocabScore =
document.getElementById(
"vocabScore"
);

const overallScore =
document.getElementById(
"overallScore"
);

const grammarMistakes =
document.getElementById(
"grammarMistakes"
);

const spellingMistakes =
document.getElementById(
"spellingMistakes"
);

const essayWords =
document.getElementById(
"essayWords"
);

const adviceList =
document.getElementById(
"adviceList"
);

/* ==========================
   State
========================== */

let selectedExam =
"eiken2";

let currentTopic = null;

/* ==========================
   Topic Data
========================== */

const topics = {

eiken2:[

{
topic:
"Do you think students should use smartphones at school?",

hint:
"Give TWO reasons. (80–100 words)",

keywords:[
"student",
"school",
"smartphone",
"education"
],

sample:
`I think students should be allowed to use smartphones at school for two reasons.

First, smartphones are useful for studying. Students can quickly search for information or use educational apps in class.

Second, smartphones can help students stay safe. For example, they can contact their parents in emergencies.

However, schools should make rules to prevent students from using smartphones during lessons for non-educational purposes.

In conclusion, I believe smartphones can be helpful at school if students use them properly.`,

expressions:[
"In my opinion",
"First",
"Second",
"For example",
"In conclusion"
]
},

{
topic:
"Do you think children should play sports?",

hint:
"Give TWO reasons. (80–100 words)",

keywords:[
"children",
"sports",
"exercise",
"health"
],

sample:
`I believe children should play sports for several reasons.

First, sports improve children's health. Regular exercise helps prevent illness and keeps children physically active.

Second, sports teach important life skills. For example, children can learn teamwork and communication by playing with others.

Some people think sports take too much time, but I believe the advantages are greater.

In conclusion, sports are important for children's development.`,

expressions:[
"I believe",
"First",
"Second",
"For example",
"In conclusion"
]
},

{
topic:
"Should students study abroad?",

hint:
"Give TWO reasons. (80–100 words)",

keywords:[
"study abroad",
"student",
"country",
"language"
],

sample:
`I think students should study abroad because it provides many benefits.

First, students can improve their language skills. Living in another country helps them practice English every day.

Second, students can learn about different cultures. This experience helps them understand people from different backgrounds.

Although studying abroad can be expensive, the experience is valuable.

In conclusion, I believe studying abroad is beneficial for students.`,

expressions:[
"I think",
"First",
"Second",
"Although",
"In conclusion"
]
}

],

eikenPre1:[

{
topic:
"Should university education be free?",

hint:
"Write around 120 words.",

keywords:[
"university",
"education",
"free",
"student"
],

sample:
`I partly agree that university education should be free.

One reason is that many students cannot attend university because tuition fees are expensive. If education becomes free, talented students will have more opportunities regardless of their financial situation.

Another reason is that educated citizens can contribute more to society. For example, better education may lead to economic growth and social improvement.

However, making university education completely free could increase taxes significantly.

In conclusion, although free university education has advantages, governments should carefully consider its financial impact.`,

expressions:[
"I partly agree",
"One reason is that",
"For example",
"However",
"In conclusion"
]
},

{
topic:
"Do you think social media has a positive effect on society?",

hint:
"Write around 120 words.",

keywords:[
"social media",
"society",
"internet",
"communication"
],

sample:
`I believe social media has both positive and negative effects on society, but overall it is beneficial.

One advantage is that social media improves communication. People can easily stay connected with friends and family regardless of distance.

In addition, social media helps people access information quickly. News spreads faster than before, which can be useful during emergencies.

On the other hand, some people waste too much time online.

In conclusion, although social media has disadvantages, I think its positive effects are stronger.`,

expressions:[
"I believe",
"In addition",
"On the other hand",
"However",
"In conclusion"
]
}

],

university:[

{
topic:
"Should zoos be banned?",

hint:
"Write 100–150 words.",

keywords:[
"zoo",
"animal",
"environment"
],

sample:
`I do not think zoos should be banned.

First, zoos help protect endangered animals. Some species may disappear without proper care and breeding programs.

Second, zoos educate people about wildlife. Visitors can learn about animals and environmental issues directly.

However, some zoos treat animals poorly, which is a serious problem.

In conclusion, zoos should improve animal welfare, but they should not be completely banned.`,

expressions:[
"First",
"Second",
"However",
"In conclusion"
]
}

],

ielts:[

{
topic:
"Some people think technology makes life easier. Do you agree or disagree?",

hint:
"Write at least 250 words.",

keywords:[
"technology",
"life",
"internet",
"easier"
],

sample:
`I strongly agree that technology has made life easier in many ways.

First of all, technology has improved communication. People can contact friends and family instantly through smartphones and social media regardless of distance.

In addition, technology saves time in daily life. Online shopping and digital payments allow people to complete tasks efficiently.

However, some people argue that technology increases stress and dependence.

Although this concern is understandable, I believe the advantages outweigh the disadvantages.

In conclusion, technology generally improves people's lives by making communication faster and daily activities more convenient.`,

expressions:[
"First of all",
"In addition",
"However",
"Although",
"In conclusion"
]
}

]

};
/* ==========================
   Exam Select
========================== */

examButtons.forEach(btn => {

btn.addEventListener(
"click",
()=>{

examButtons.forEach(b =>
b.classList.remove(
"active"
)
);

btn.classList.add(
"active"
);

selectedExam =
btn.dataset.exam;

updateWordGuide();

}
);

});

/* ==========================
   Generate Topic
========================== */

generateBtn.addEventListener(
"click",
generateTopic
);

function generateTopic(){

const list =
topics[selectedExam];

const random =
list[
Math.floor(
Math.random() *
list.length
)
];

currentTopic =
random;

/* Topic */
topicBox.innerHTML =
random.topic;

topicHint.innerHTML =
random.hint;

/* Sample Answer */
sampleAnswer.innerHTML =
random.sample;

/* Useful Expressions */
usefulExpressions.innerHTML =
"";

random.expressions
.forEach(exp => {

usefulExpressions.innerHTML +=
`
<li>${exp}</li>
`;

});

/* =====================
   Auto Reset
===================== */

/* Essay auto clear */
essayInput.value = "";

/* Word reset */
wordCount.textContent =
0;

essayWords.textContent =
0;

/* Result reset */
resultSection.classList.add(
"hidden"
);

correctionsDiv.innerHTML =
"No corrections yet";

relevanceResult.innerHTML =
"Not checked yet";

grammarMistakes.textContent =
0;

spellingMistakes.textContent =
0;

contentScore.textContent =
0;

grammarScore.textContent =
0;

vocabScore.textContent =
0;

overallScore.textContent =
0;

adviceList.innerHTML =
`
<li>
Write clearly and
support your opinion.
</li>
`;

updateWordGuide();

}

/* ==========================
   Word Count
========================== */

essayInput.addEventListener(
"input",
updateWordCount
);

function updateWordCount(){

const words =
essayInput.value
.trim()
.split(/\s+/)
.filter(Boolean);

const count =
words.length;

wordCount.textContent =
count;

essayWords.textContent =
count;

updateWordGuide();

}

function updateWordGuide(){

const words =
essayInput.value
.trim()
.split(/\s+/)
.filter(Boolean);

const count =
words.length;

if(
selectedExam ===
"ielts"
){

if(count < 250){

minimumWarning.innerHTML =
"⚠ IELTS: Minimum 250 words";

minimumWarning.style.color =
"#f87171";

}else{

minimumWarning.innerHTML =
"✅ Good IELTS length";

minimumWarning.style.color =
"#4ade80";

}

}else{

if(count < 80){

minimumWarning.innerHTML =
"⚠ Too short (80–120 recommended)";

minimumWarning.style.color =
"#f87171";

}else if(count > 120){

minimumWarning.innerHTML =
"⚠ Too long for Eiken style";

minimumWarning.style.color =
"#facc15";

}else{

minimumWarning.innerHTML =
"✅ Good length";

minimumWarning.style.color =
"#4ade80";

}

}

}

/* ==========================
   Essay Check
========================== */

checkBtn.addEventListener(
"click",
checkEssay
);

async function checkEssay(){

const text =
essayInput.value.trim();

if(!text){

alert(
"Please write your essay."
);

return;
}

if(!currentTopic){

alert(
"Generate a topic first."
);

return;
}

loading.classList.remove(
"hidden"
);

resultSection.classList.add(
"hidden"
);

try{

const response =
await fetch(
"https://api.languagetool.org/v2/check",
{
method:"POST",

headers:{
"Content-Type":
"application/x-www-form-urlencoded"
},

body:
new URLSearchParams({
text:text,
language:"en-US"
})
}
);

const data =
await response.json();

showCorrections(
data.matches,
text
);

analyzeTopic(text);

calculateScores(
data.matches,
text
);

generateAdvice(
data.matches,
text
);

}catch(error){

correctionsDiv.innerHTML =
`
<div class="correction-item">
❌ Error occurred.
Try again later.
</div>
`;

}

loading.classList.add(
"hidden"
);

resultSection.classList.remove(
"hidden"
);

}
/* ==========================
   Corrections
========================== */

function showCorrections(
matches,
text
){

correctionsDiv.innerHTML =
"";

if(matches.length === 0){

correctionsDiv.innerHTML =
`
<div class="correction-item">
✅ Excellent!
No major mistakes found.
</div>
`;

grammarMistakes.textContent =
0;

spellingMistakes.textContent =
0;

return;
}

let grammar = 0;
let spelling = 0;

matches.forEach(match => {

const wrong =
text.substring(
match.offset,
match.offset +
match.length
);

const suggestion =
match.replacements[0]
?.value ||
"No suggestion";

const message =
match.message;

if(
match.rule.issueType ===
"misspelling"
){
spelling++;
}else{
grammar++;
}

correctionsDiv.innerHTML +=
`
<div class="correction-item">

<div>

❌
<span class="error-word">
${wrong}
</span>

→

<span class="correct-word">
${suggestion}
</span>

</div>

<p>
${message}
</p>

</div>
`;

});

grammarMistakes.textContent =
grammar;

spellingMistakes.textContent =
spelling;

}

/* ==========================
   Topic Relevance
========================== */

function analyzeTopic(
text
){

let score = 0;

currentTopic.keywords
.forEach(keyword => {

if(
text.toLowerCase()
.includes(
keyword.toLowerCase()
)
){
score++;
}

});

const percent =
(
score /
currentTopic
.keywords.length
) * 100;

if(percent >= 70){

relevanceResult.innerHTML =
"✅ Excellent topic relevance.";

}else if(percent >= 40){

relevanceResult.innerHTML =
"⚠ Your essay partially answers the question.";

}else{

relevanceResult.innerHTML =
"❌ Your essay may not answer the topic clearly.";

}

}

/* ==========================
   Score Estimate
========================== */

function calculateScores(
matches,
text
){

const words =
text
.trim()
.split(/\s+/)
.filter(Boolean)
.length;

let content = 7;
let grammar = 7;
let vocab = 6.5;

/* Grammar penalty */
grammar -=
matches.length * 0.12;

/* Word count bonus */
if(words > 120){
content += 0.5;
}

if(words > 200){
vocab += 0.5;
}

/* Topic relevance */
let topicScore = 0;

currentTopic.keywords
.forEach(word => {

if(
text.toLowerCase()
.includes(
word.toLowerCase()
)
){
topicScore++;
}

});

if(topicScore <= 1){
content -= 1;
}

/* Limit */
content =
Math.min(
9,
Math.max(
4,
content
)
);

grammar =
Math.min(
9,
Math.max(
4,
grammar
)
);

vocab =
Math.min(
9,
Math.max(
4,
vocab
)
);

const overall =
(
content +
grammar +
vocab
) / 3;

contentScore.textContent =
content.toFixed(1);

grammarScore.textContent =
grammar.toFixed(1);

vocabScore.textContent =
vocab.toFixed(1);

overallScore.textContent =
overall.toFixed(1);

}

/* ==========================
   Advice Generator
========================== */

function generateAdvice(
matches,
text
){

adviceList.innerHTML =
"";

const lower =
text.toLowerCase();

const words =
text
.trim()
.split(/\s+/)
.filter(Boolean);

const wordCount =
words.length;

/* Grammar mistakes */
if(matches.length > 8){

adviceList.innerHTML +=
`
<li>
Too many grammar mistakes.
Try writing shorter,
more accurate sentences.
</li>
`;

}

/* No reason */
if(
!lower.includes(
"because"
)
){

adviceList.innerHTML +=
`
<li>
Add clear reasons to
support your opinion.
Use words like
"because" or
"for example".
</li>
`;

}

/* Linking words */
if(
!lower.includes(
"however"
)
&&
!lower.includes(
"therefore"
)
&&
!lower.includes(
"for example"
)
&&
!lower.includes(
"in addition"
)
){

adviceList.innerHTML +=
`
<li>
Try using linking words
such as "however",
"therefore",
or "for example".
</li>
`;

}

/* Paragraph */
if(
text.split("\n").length
< 2
){

adviceList.innerHTML +=
`
<li>
Try separating your essay
into paragraphs to improve
organization.
</li>
`;

}

/* Short essay */
if(
selectedExam ===
"ielts"
){

if(wordCount < 250){

adviceList.innerHTML +=
`
<li>
IELTS Task 2 requires
at least 250 words.
</li>
`;

}

}else{

if(wordCount < 80){

adviceList.innerHTML +=
`
<li>
Your essay is too short.
Try adding examples
or details.
</li>
`;

}

}

/* Repetition check */
const repeated =
words.filter(
(word,index)=>
words.indexOf(word)
!== index
);

if(
repeated.length > 15
){

adviceList.innerHTML +=
`
<li>
You repeat some words
too often.
Try using synonyms.
</li>
`;

}

/* Opinion unclear */
if(
!lower.includes(
"i think"
)
&&
!lower.includes(
"i believe"
)
&&
!lower.includes(
"i agree"
)
&&
!lower.includes(
"i disagree"
)
){

adviceList.innerHTML +=
`
<li>
Make your opinion clearer.
Try expressions like
"I think" or
"I believe".
</li>
`;

}

/* Default */
if(
adviceList.innerHTML
=== ""
){

adviceList.innerHTML =
`
<li>
Excellent work!
Your essay is well
organized and clear.
Keep practicing.
</li>
`;

}

}