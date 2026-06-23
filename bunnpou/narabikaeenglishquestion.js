const questions = [

{
    question:"私は昨日学校へ行った。",
    words:["went","school","I","to","yesterday"],
    answer:"I went to school yesterday.",
    translation:"私は昨日学校へ行った。",
    explanation:"go の過去形は went"
},

{
    question:"彼女は毎日英語を勉強します。",
    words:["English","every","studies","day","She"],
    answer:"She studies English every day.",
    translation:"彼女は毎日英語を勉強します。",
    explanation:"三人称単数なので studies"
},

{
    question:"私たちは今昼食を食べています。",
    words:["are","lunch","We","eating","now"],
    answer:"We are eating lunch now.",
    translation:"私たちは今昼食を食べています。",
    explanation:"現在進行形"
},
{
    question:"私は毎日英語を勉強します。",
    words:["English","study","I","every","day"],
    answer:"I study English every day.",
    translation:"私は毎日英語を勉強します。",
    explanation:"現在形の文。"
},

{
    question:"彼はサッカーをします。",
    words:["plays","He","soccer"],
    answer:"He plays soccer.",
    translation:"彼はサッカーをします。",
    explanation:"三人称単数なので plays。"
},

{
    question:"彼女は図書館へ行きます。",
    words:["goes","library","She","to","the"],
    answer:"She goes to the library.",
    translation:"彼女は図書館へ行きます。",
    explanation:"go to + 場所。"
},

{
    question:"私はりんごが好きです。",
    words:["like","apples","I"],
    answer:"I like apples.",
    translation:"私はりんごが好きです。",
    explanation:"like + 名詞。"
},

{
    question:"彼らは公園で遊びます。",
    words:["park","They","the","in","play"],
    answer:"They play in the park.",
    translation:"彼らは公園で遊びます。",
    explanation:"場所は文末に置く。"
},

{
    question:"私は朝食を食べています。",
    words:["breakfast","am","I","eating"],
    answer:"I am eating breakfast.",
    translation:"私は朝食を食べています。",
    explanation:"現在進行形。"
},

{
    question:"彼は本を読んでいます。",
    words:["reading","book","a","He","is"],
    answer:"He is reading a book.",
    translation:"彼は本を読んでいます。",
    explanation:"be動詞 + 動詞ing。"
},

{
    question:"私たちはテレビを見ています。",
    words:["watching","We","TV","are"],
    answer:"We are watching TV.",
    translation:"私たちはテレビを見ています。",
    explanation:"現在進行形。"
},

{
    question:"彼女は歌っています。",
    words:["singing","She","is"],
    answer:"She is singing.",
    translation:"彼女は歌っています。",
    explanation:"現在進行形。"
},

{
    question:"彼らは走っています。",
    words:["running","They","are"],
    answer:"They are running.",
    translation:"彼らは走っています。",
    explanation:"現在進行形。"
},

{
    question:"私は昨日家にいました。",
    words:["home","yesterday","was","I"],
    answer:"I was home yesterday.",
    translation:"私は昨日家にいました。",
    explanation:"be動詞の過去形。"
},

{
    question:"彼は昨夜テレビを見ました。",
    words:["watched","TV","He","last","night"],
    answer:"He watched TV last night.",
    translation:"彼は昨夜テレビを見ました。",
    explanation:"過去形 watched。"
},

{
    question:"私たちは公園へ行きました。",
    words:["went","park","the","to","We"],
    answer:"We went to the park.",
    translation:"私たちは公園へ行きました。",
    explanation:"go の過去形 went。"
},

{
    question:"彼女は昨日勉強しました。",
    words:["studied","yesterday","She"],
    answer:"She studied yesterday.",
    translation:"彼女は昨日勉強しました。",
    explanation:"study → studied。"
},

{
    question:"彼らは映画を見ました。",
    words:["movie","They","a","saw"],
    answer:"They saw a movie.",
    translation:"彼らは映画を見ました。",
    explanation:"see の過去形 saw。"
},

{
    question:"私は明日働きます。",
    words:["tomorrow","will","I","work"],
    answer:"I will work tomorrow.",
    translation:"私は明日働きます。",
    explanation:"未来表現 will。"
},

{
    question:"彼は来週来るでしょう。",
    words:["come","will","next","He","week"],
    answer:"He will come next week.",
    translation:"彼は来週来るでしょう。",
    explanation:"will + 動詞原形。"
},

{
    question:"私たちは旅行する予定です。",
    words:["travel","will","We"],
    answer:"We will travel.",
    translation:"私たちは旅行する予定です。",
    explanation:"未来表現。"
},

{
    question:"彼女は手伝ってくれるでしょう。",
    words:["help","will","She"],
    answer:"She will help.",
    translation:"彼女は手伝ってくれるでしょう。",
    explanation:"未来表現。"
},

{
    question:"彼らは勝つでしょう。",
    words:["win","They","will"],
    answer:"They will win.",
    translation:"彼らは勝つでしょう。",
    explanation:"will + 動詞原形。"
},

{
    question:"私は泳ぐことができます。",
    words:["can","I","swim"],
    answer:"I can swim.",
    translation:"私は泳ぐことができます。",
    explanation:"can + 動詞原形。"
},

{
    question:"彼は日本語を話せます。",
    words:["Japanese","can","He","speak"],
    answer:"He can speak Japanese.",
    translation:"彼は日本語を話せます。",
    explanation:"can + 動詞原形。"
},

{
    question:"私たちはここに座ってもよいです。",
    words:["sit","can","here","We"],
    answer:"We can sit here.",
    translation:"私たちはここに座ってもよいです。",
    explanation:"can の許可用法。"
},

{
    question:"彼女は速く走れます。",
    words:["run","can","fast","She"],
    answer:"She can run fast.",
    translation:"彼女は速く走れます。",
    explanation:"can + 動詞原形。"
},

{
    question:"彼らはピアノを弾けます。",
    words:["play","can","the","piano","They"],
    answer:"They can play the piano.",
    translation:"彼らはピアノを弾けます。",
    explanation:"play the piano。"
},

{
    question:"これは私の本です。",
    words:["my","This","book","is"],
    answer:"This is my book.",
    translation:"これは私の本です。",
    explanation:"This is ～。"
},

{
    question:"あれは彼の車です。",
    words:["car","That","his","is"],
    answer:"That is his car.",
    translation:"あれは彼の車です。",
    explanation:"That is ～。"
},

{
    question:"私の名前はケンです。",
    words:["Ken","name","My","is"],
    answer:"My name is Ken.",
    translation:"私の名前はケンです。",
    explanation:"自己紹介の基本表現。"
},

{
    question:"彼女は私の友達です。",
    words:["friend","my","She","is"],
    answer:"She is my friend.",
    translation:"彼女は私の友達です。",
    explanation:"be動詞の文。"
},

{
    question:"私たちは学生です。",
    words:["students","are","We"],
    answer:"We are students.",
    translation:"私たちは学生です。",
    explanation:"be動詞の複数形。"
},

{
    question:"今日は暑いです。",
    words:["hot","is","Today"],
    answer:"Today is hot.",
    translation:"今日は暑いです。",
    explanation:"主語 + be動詞 + 形容詞。"
},

{
    question:"その犬は大きいです。",
    words:["big","dog","The","is"],
    answer:"The dog is big.",
    translation:"その犬は大きいです。",
    explanation:"be動詞 + 形容詞。"
},

{
    question:"この部屋はきれいです。",
    words:["room","clean","This","is"],
    answer:"This room is clean.",
    translation:"この部屋はきれいです。",
    explanation:"形容詞 clean。"
},

{
    question:"彼は親切です。",
    words:["kind","He","is"],
    answer:"He is kind.",
    translation:"彼は親切です。",
    explanation:"be動詞 + 形容詞。"
},

{
    question:"彼女は幸せです。",
    words:["happy","She","is"],
    answer:"She is happy.",
    translation:"彼女は幸せです。",
    explanation:"be動詞 + 形容詞。"
},

{
    question:"私はコーヒーを飲みます。",
    words:["drink","coffee","I"],
    answer:"I drink coffee.",
    translation:"私はコーヒーを飲みます。",
    explanation:"現在形。"
},

{
    question:"彼は音楽を聞きます。",
    words:["music","listens","He","to"],
    answer:"He listens to music.",
    translation:"彼は音楽を聞きます。",
    explanation:"listen to ～。"
},

{
    question:"私たちは学校へ歩いて行きます。",
    words:["walk","school","to","We"],
    answer:"We walk to school.",
    translation:"私たちは学校へ歩いて行きます。",
    explanation:"walk to + 場所。"
},

{
    question:"彼女は夕食を作ります。",
    words:["dinner","cooks","She"],
    answer:"She cooks dinner.",
    translation:"彼女は夕食を作ります。",
    explanation:"cook + 食事。"
},

{
    question:"彼らは毎週日曜日にサッカーをします。",
    words:["soccer","play","They","every","Sunday"],
    answer:"They play soccer every Sunday.",
    translation:"彼らは毎週日曜日にサッカーをします。",
    explanation:"頻度表現は文末。"
},


];