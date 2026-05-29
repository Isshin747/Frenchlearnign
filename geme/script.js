let quizData = [];
let currentQuestion = 0;
let score = 0;
let wrongQuestions = [];

/* --------------------
   問題データ（空）
-------------------- */

const nouns =  [
{question:"『rumah』の意味は？",
answers:["家","学校","病院","会社"],
correct:0},

{question:"『sekolah』の意味は？",
answers:["病院","学校","駅","図書館"],
correct:1},

{question:"『guru』の意味は？",
answers:["先生","医者","学生","友達"],
correct:0},

{question:"『murid』の意味は？",
answers:["先生","家族","生徒","会社員"],
correct:2},

{question:"『mahasiswa』の意味は？",
answers:["高校生","大学生","先生","会社員"],
correct:1},

{question:"『universitas』の意味は？",
answers:["病院","大学","学校","図書館"],
correct:1},

{question:"『buku』の意味は？",
answers:["ノート","本","紙","新聞"],
correct:1},

{question:"『meja』の意味は？",
answers:["椅子","窓","机","ドア"],
correct:2},

{question:"『kursi』の意味は？",
answers:["椅子","机","壁","床"],
correct:0},

{question:"『tas』の意味は？",
answers:["帽子","カバン","靴","時計"],
correct:1},

{question:"『pena』の意味は？",
answers:["鉛筆","消しゴム","ペン","定規"],
correct:2},

{question:"『pensil』の意味は？",
answers:["鉛筆","ノート","紙","本"],
correct:0},

{question:"『kertas』の意味は？",
answers:["新聞","紙","雑誌","封筒"],
correct:1},

{question:"『komputer』の意味は？",
answers:["スマホ","パソコン","テレビ","冷蔵庫"],
correct:1},

{question:"『telepon』の意味は？",
answers:["電話","時計","財布","地図"],
correct:0},

{question:"『handphone』の意味は？",
answers:["パソコン","固定電話","携帯電話","ラジオ"],
correct:2},

{question:"『mobil』の意味は？",
answers:["飛行機","自転車","車","電車"],
correct:2},

{question:"『motor』の意味は？",
answers:["バイク","自転車","船","車"],
correct:0},

{question:"『sepeda』の意味は？",
answers:["自転車","バイク","電車","飛行機"],
correct:0},

{question:"『jalan』の意味は？",
answers:["橋","道","駅","信号"],
correct:1},

{question:"『kota』の意味は？",
answers:["村","県","街","国"],
correct:2},

{question:"『desa』の意味は？",
answers:["村","都市","首都","県"],
correct:0},

{question:"『negara』の意味は？",
answers:["都市","国","大陸","地域"],
correct:1},

{question:"『dunia』の意味は？",
answers:["宇宙","地球","世界","国"],
correct:2},

{question:"『bahasa』の意味は？",
answers:["単語","言語","会話","文法"],
correct:1},

{question:"『kata』の意味は？",
answers:["文章","文法","単語","会話"],
correct:2},

{question:"『kalimat』の意味は？",
answers:["単語","文","意味","質問"],
correct:1},

{question:"『pertanyaan』の意味は？",
answers:["答え","説明","質問","会話"],
correct:2},

{question:"『jawaban』の意味は？",
answers:["答え","質問","例","意味"],
correct:0},

{question:"『waktu』の意味は？",
answers:["時間","日付","週","月"],
correct:0},

{question:"『hari』の意味は？",
answers:["時間","日","月","年"],
correct:1},

{question:"『minggu』の意味は？",
answers:["月","年","週","日"],
correct:2},

{question:"『bulan』の意味は？",
answers:["年","月","日","時間"],
correct:1},

{question:"『tahun』の意味は？",
answers:["月","時間","日","年"],
correct:3},

{question:"『pagi』の意味は？",
answers:["夜","朝","昼","夕方"],
correct:1},

{question:"『siang』の意味は？",
answers:["夕方","昼","朝","夜"],
correct:1},

{question:"『sore』の意味は？",
answers:["朝","夜","昼","夕方"],
correct:3},

{question:"『malam』の意味は？",
answers:["昼","朝","夜","夕方"],
correct:2},

{question:"『makanan』の意味は？",
answers:["飲み物","食べ物","野菜","果物"],
correct:1},

{question:"『minuman』の意味は？",
answers:["飲み物","スープ","料理","お菓子"],
correct:0},

{question:"『nasi』の意味は？",
answers:["パン","ご飯","肉","麺"],
correct:1},

{question:"『air』の意味は？",
answers:["お茶","水","牛乳","ジュース"],
correct:1},

{question:"『kopi』の意味は？",
answers:["紅茶","ジュース","コーヒー","水"],
correct:2},

{question:"『teh』の意味は？",
answers:["お茶","コーヒー","水","牛乳"],
correct:0},

{question:"『buah』の意味は？",
answers:["野菜","果物","肉","魚"],
correct:1},

{question:"『sayur』の意味は？",
answers:["魚","肉","野菜","果物"],
correct:2},

{question:"『daging』の意味は？",
answers:["肉","魚","野菜","果物"],
correct:0},

{question:"『ikan』の意味は？",
answers:["肉","魚","卵","野菜"],
correct:1},

{question:"『telur』の意味は？",
answers:["卵","肉","米","魚"],
correct:0},

{question:"『uang』の意味は？",
answers:["財布","お金","値段","カード"],
correct:1},

{question:"『harga』の意味は？",
answers:["商品","値段","買い物","税金"],
correct:1},



{question:"『pekerjaan』の意味は？",
answers:["趣味","仕事","学校","試験"],
correct:1},

{question:"『kantor』の意味は？",
answers:["会社","病院","オフィス","駅"],
correct:2},

{question:"『perusahaan』の意味は？",
answers:["銀行","会社","工場","学校"],
correct:1},

{question:"『bisnis』の意味は？",
answers:["勉強","会議","ビジネス","計画"],
correct:2},

{question:"『teman』の意味は？",
answers:["友達","先生","家族","隣人"],
correct:0},

{question:"『keluarga』の意味は？",
answers:["親戚","友達","家族","近所"],
correct:2},

{question:"『ibu』の意味は？",
answers:["父","姉","母","祖母"],
correct:2},

{question:"『ayah』の意味は？",
answers:["父","兄","叔父","祖父"],
correct:0},

{question:"『anak』の意味は？",
answers:["学生","子ども","赤ちゃん","親"],
correct:1},

{question:"『kakak』の意味は？",
answers:["友達","先生","年上の兄弟姉妹","親"],
correct:2},

{question:"『adik』の意味は？",
answers:["祖父","年下の兄弟姉妹","親","いとこ"],
correct:1},

{question:"『suami』の意味は？",
answers:["夫","父","息子","兄"],
correct:0},

{question:"『istri』の意味は？",
answers:["娘","母","妻","姉"],
correct:2},

{question:"『orang』の意味は？",
answers:["人","先生","家族","友達"],
correct:0},

{question:"『nama』の意味は？",
answers:["住所","名前","国籍","電話番号"],
correct:1},

{question:"『umur』の意味は？",
answers:["年齢","誕生日","仕事","趣味"],
correct:0},

{question:"『tubuh』の意味は？",
answers:["顔","体","足","腕"],
correct:1},

{question:"『kepala』の意味は？",
answers:["髪","頭","顔","肩"],
correct:1},

{question:"『mata』の意味は？",
answers:["耳","鼻","口","目"],
correct:3},

{question:"『hidung』の意味は？",
answers:["口","耳","鼻","目"],
correct:2},

{question:"『mulut』の意味は？",
answers:["口","目","鼻","歯"],
correct:0},

{question:"『tangan』の意味は？",
answers:["腕","足","手","肩"],
correct:2},

{question:"『kaki』の意味は？",
answers:["頭","足","腕","背中"],
correct:1},

{question:"『hati』の意味は？",
answers:["脳","心","筋肉","骨"],
correct:1},

{question:"『kesehatan』の意味は？",
answers:["病気","健康","薬","運動"],
correct:1},

{question:"『penyakit』の意味は？",
answers:["医者","病院","病気","治療"],
correct:2},

{question:"『obat』の意味は？",
answers:["薬","注射","病院","病気"],
correct:0},

{question:"『dokter』の意味は？",
answers:["先生","医者","看護師","患者"],
correct:1},

{question:"『rumah sakit』の意味は？",
answers:["薬局","病院","学校","会社"],
correct:1},

{question:"『cuaca』の意味は？",
answers:["季節","温度","天気","気温"],
correct:2},

{question:"『hujan』の意味は？",
answers:["雪","風","雲","雨"],
correct:3},

{question:"『angin』の意味は？",
answers:["空","風","嵐","雷"],
correct:1},

{question:"『matahari』の意味は？",
answers:["月","星","太陽","空"],
correct:2},

{question:"『laut』の意味は？",
answers:["海","湖","川","池"],
correct:0},

{question:"『gunung』の意味は？",
answers:["森","川","山","谷"],
correct:2},

{question:"『sungai』の意味は？",
answers:["海","川","池","湖"],
correct:1},

{question:"『pantai』の意味は？",
answers:["山","海岸","森","砂漠"],
correct:1},

{question:"『cinta』の意味は？",
answers:["友情","愛","悲しみ","希望"],
correct:1},

{question:"『mimpi』の意味は？",
answers:["目標","夢","未来","記憶"],
correct:1},

{question:"『masalah』の意味は？",
answers:["問題","成功","答え","計画"],
correct:0},

{question:"『kesempatan』の意味は？",
answers:["失敗","機会","経験","努力"],
correct:1},

{question:"『pengalaman』の意味は？",
answers:["知識","経験","勉強","失敗"],
correct:1},

{question:"『harapan』の意味は？",
answers:["悲しみ","未来","希望","夢"],
correct:2},

{question:"『tujuan』の意味は？",
answers:["理由","目的","地図","説明"],
correct:1},

{question:"『berita』の意味は？",
answers:["新聞","ニュース","雑誌","映画"],
correct:1},

{question:"『cerita』の意味は？",
answers:["歌","物語","ニュース","映画"],
correct:1},

{question:"『film』の意味は？",
answers:["音楽","本","映画","絵"],
correct:2},

{question:"『musik』の意味は？",
answers:["音楽","映画","芸術","歌詞"],
correct:0}


];

const verbs = [
{question:"『makan』の意味は？",
answers:["飲む","食べる","作る","歩く"],
correct:1},

{question:"『minum』の意味は？",
answers:["飲む","寝る","読む","買う"],
correct:0},

{question:"『tidur』の意味は？",
answers:["起きる","寝る","座る","休む"],
correct:1},

{question:"『bangun』の意味は？",
answers:["起きる","歩く","作る","考える"],
correct:0},

{question:"『pergi』の意味は？",
answers:["帰る","来る","行く","待つ"],
correct:2},

{question:"『datang』の意味は？",
answers:["来る","帰る","立つ","出る"],
correct:0},

{question:"『pulang』の意味は？",
answers:["行く","帰る","来る","止まる"],
correct:1},

{question:"『berjalan』の意味は？",
answers:["歩く","走る","泳ぐ","立つ"],
correct:0},

{question:"『berlari』の意味は？",
answers:["歩く","泳ぐ","走る","飛ぶ"],
correct:2},

{question:"『duduk』の意味は？",
answers:["立つ","歩く","寝る","座る"],
correct:3},

{question:"『berdiri』の意味は？",
answers:["座る","立つ","寝る","待つ"],
correct:1},

{question:"『melihat』の意味は？",
answers:["聞く","見る","話す","読む"],
correct:1},

{question:"『menonton』の意味は？",
answers:["観る","聞く","探す","使う"],
correct:0},

{question:"『mendengar』の意味は？",
answers:["話す","見る","聞く","答える"],
correct:2},

{question:"『berbicara』の意味は？",
answers:["話す","聞く","読む","勉強する"],
correct:0},

{question:"『mengatakan』の意味は？",
answers:["言う","作る","選ぶ","説明する"],
correct:0},

{question:"『bertanya』の意味は？",
answers:["答える","待つ","質問する","考える"],
correct:2},

{question:"『menjawab』の意味は？",
answers:["答える","聞く","待つ","説明する"],
correct:0},

{question:"『membaca』の意味は？",
answers:["読む","書く","聞く","話す"],
correct:0},

{question:"『menulis』の意味は？",
answers:["話す","読む","書く","覚える"],
correct:2},

{question:"『belajar』の意味は？",
answers:["働く","勉強する","教える","読む"],
correct:1},

{question:"『mengajar』の意味は？",
answers:["学ぶ","教える","作る","試す"],
correct:1},

{question:"『bekerja』の意味は？",
answers:["働く","勉強する","歩く","旅行する"],
correct:0},

{question:"『bermain』の意味は？",
answers:["歌う","働く","遊ぶ","走る"],
correct:2},

{question:"『membeli』の意味は？",
answers:["売る","借りる","買う","注文する"],
correct:2},

{question:"『menjual』の意味は？",
answers:["売る","買う","使う","探す"],
correct:0},

{question:"『membayar』の意味は？",
answers:["借りる","支払う","受け取る","送る"],
correct:1},

{question:"『membawa』の意味は？",
answers:["持っていく","置く","選ぶ","洗う"],
correct:0},

{question:"『mengambil』の意味は？",
answers:["返す","取る","送る","借りる"],
correct:1},

{question:"『memberi』の意味は？",
answers:["受け取る","返す","与える","探す"],
correct:2},

{question:"『menerima』の意味は？",
answers:["与える","受け取る","送る","待つ"],
correct:1},

{question:"『membuka』の意味は？",
answers:["閉める","開ける","切る","守る"],
correct:1},

{question:"『menutup』の意味は？",
answers:["開ける","閉める","入る","出る"],
correct:1},

{question:"『masuk』の意味は？",
answers:["出る","止まる","入る","立つ"],
correct:2},

{question:"『keluar』の意味は？",
answers:["出る","入る","来る","帰る"],
correct:0},

{question:"『tinggal』の意味は？",
answers:["住む","旅行する","待つ","働く"],
correct:0},

{question:"『hidup』の意味は？",
answers:["成長する","生きる","考える","勝つ"],
correct:1},

{question:"『mati』の意味は？",
answers:["死ぬ","泣く","負ける","止まる"],
correct:0},

{question:"『mencintai』の意味は？",
answers:["嫌う","信じる","愛する","待つ"],
correct:2},

{question:"『menyukai』の意味は？",
answers:["嫌う","好む","壊す","変わる"],
correct:1},

{question:"『membenci』の意味は？",
answers:["助ける","嫌う","探す","待つ"],
correct:1},

{question:"『membantu』の意味は？",
answers:["助ける","教える","勝つ","働く"],
correct:0},

{question:"『menggunakan』の意味は？",
answers:["使う","直す","開く","送る"],
correct:0},

{question:"『membuat』の意味は？",
answers:["壊す","作る","売る","歩く"],
correct:1},

{question:"『memasak』の意味は？",
answers:["洗う","料理する","切る","注文する"],
correct:1},

{question:"『membersihkan』の意味は？",
answers:["掃除する","洗う","修理する","整理する"],
correct:0},

{question:"『mencuci』の意味は？",
answers:["料理する","乾かす","洗う","切る"],
correct:2},

{question:"『mandi』の意味は？",
answers:["寝る","着替える","入浴する","泳ぐ"],
correct:2},

{question:"『berpikir』の意味は？",
answers:["覚える","考える","忘れる","学ぶ"],
correct:1},

{question:"『mengerti』の意味は？",
answers:["考える","理解する","説明する","答える"],
correct:1},

{question:"『tahu』の意味は？",
answers:["忘れる","知っている","試す","待つ"],
correct:1},

{question:"『lupa』の意味は？",
answers:["覚える","知る","忘れる","考える"],
correct:2},

{question:"『ingat』の意味は？",
answers:["覚えている","忘れる","理解する","選ぶ"],
correct:0},

{question:"『mencoba』の意味は？",
answers:["試す","探す","作る","考える"],
correct:0},

{question:"『memilih』の意味は？",
answers:["探す","待つ","選ぶ","作る"],
correct:2},

{question:"『mencari』の意味は？",
answers:["探す","見つける","失う","借りる"],
correct:0},

{question:"『menemukan』の意味は？",
answers:["探す","失う","見つける","決める"],
correct:2},

{question:"『kehilangan』の意味は？",
answers:["守る","見つける","失う","待つ"],
correct:2},

{question:"『bertemu』の意味は？",
answers:["会う","別れる","助ける","旅行する"],
correct:0},

{question:"『menunggu』の意味は？",
answers:["急ぐ","待つ","止まる","帰る"],
correct:1},

{question:"『mengikuti』の意味は？",
answers:["従う","止める","始める","逃げる"],
correct:0},

{question:"『memulai』の意味は？",
answers:["終える","始める","変わる","作る"],
correct:1},

{question:"『berhenti』の意味は？",
answers:["続ける","止める","歩く","始める"],
correct:1},

{question:"『berubah』の意味は？",
answers:["成長する","変わる","止まる","壊れる"],
correct:1},

{question:"『tumbuh』の意味は？",
answers:["増える","成長する","始める","変わる"],
correct:1},

{question:"『memotong』の意味は？",
answers:["貼る","洗う","切る","開ける"],
correct:2},

{question:"『memasukkan』の意味は？",
answers:["出す","入れる","探す","使う"],
correct:1},

{question:"『mengeluarkan』の意味は？",
answers:["借りる","入れる","出す","守る"],
correct:2},

{question:"『menyimpan』の意味は？",
answers:["保存する","失う","探す","捨てる"],
correct:0},

{question:"『mengirim』の意味は？",
answers:["受け取る","送る","借りる","持つ"],
correct:1},

{question:"『meminjam』の意味は？",
answers:["返す","貸す","借りる","受け取る"],
correct:2},

{question:"『meminjamkan』の意味は？",
answers:["借りる","貸す","返す","取る"],
correct:1},

{question:"『berbagi』の意味は？",
answers:["争う","分ける","買う","送る"],
correct:1},

{question:"『menjelaskan』の意味は？",
answers:["答える","説明する","質問する","学ぶ"],
correct:1},

{question:"『mempelajari』の意味は？",
answers:["学ぶ","忘れる","考える","教える"],
correct:0},

{question:"『menghafal』の意味は？",
answers:["理解する","暗記する","説明する","翻訳する"],
correct:1},

{question:"『menerjemahkan』の意味は？",
answers:["話す","翻訳する","読む","暗記する"],
correct:1},

{question:"『memesan』の意味は？",
answers:["払う","注文する","探す","借りる"],
correct:1},

{question:"『bepergian』の意味は？",
answers:["旅行する","帰る","歩く","走る"],
correct:0},

{question:"『berenang』の意味は？",
answers:["踊る","泳ぐ","飛ぶ","歩く"],
correct:1},

{question:"『menyanyi』の意味は？",
answers:["踊る","笑う","歌う","泣く"],
correct:2},

{question:"『menari』の意味は？",
answers:["歌う","踊る","走る","歩く"],
correct:1},

{question:"『tertawa』の意味は？",
answers:["怒る","泣く","笑う","叫ぶ"],
correct:2},

{question:"『menangis』の意味は？",
answers:["笑う","歌う","泣く","眠る"],
correct:2},

{question:"『merasa』の意味は？",
answers:["感じる","考える","決める","試す"],
correct:0},

{question:"『berharap』の意味は？",
answers:["願う","待つ","助ける","変える"],
correct:0},

{question:"『memutuskan』の意味は？",
answers:["忘れる","決める","止まる","始める"],
correct:1},

{question:"『memperbaiki』の意味は？",
answers:["壊す","修理する","切る","洗う"],
correct:1},

{question:"『merusak』の意味は？",
answers:["作る","守る","壊す","直す"],
correct:2},

{question:"『menang』の意味は？",
answers:["勝つ","負ける","試す","諦める"],
correct:0},

{question:"『kalah』の意味は？",
answers:["勝つ","逃げる","負ける","諦める"],
correct:2},

{question:"『memakai』の意味は？",
answers:["身につける・使う","脱ぐ","洗う","借りる"],
correct:0},

{question:"『melepas』の意味は？",
answers:["着る","外す","修理する","探す"],
correct:1},

{question:"『menjaga』の意味は？",
answers:["壊す","守る","開ける","止める"],
correct:1},

{question:"『percaya』の意味は？",
answers:["信じる","忘れる","比べる","選ぶ"],
correct:0},

{question:"『mengingat』の意味は？",
answers:["思い出す","隠す","洗う","送る"],
correct:0},

{question:"『membandingkan』の意味は？",
answers:["数える","比べる","借りる","閉める"],
correct:1},

{question:"『mengubah』の意味は？",
answers:["変える","壊す","止める","逃げる"],
correct:0},

{question:"『menghindari』の意味は？",
answers:["避ける","探す","助ける","与える"],
correct:0},

{question:"『melindungi』の意味は？",
answers:["守る","壊す","開ける","選ぶ"],
correct:0}




];

const adjective = [
{question:"『besar』の意味は？",
answers:["小さい","大きい","長い","高い"],
correct:1},

{question:"『kecil』の意味は？",
answers:["重い","小さい","軽い","短い"],
correct:1},

{question:"『panjang』の意味は？",
answers:["短い","高い","長い","広い"],
correct:2},

{question:"『pendek』の意味は？",
answers:["短い","長い","低い","軽い"],
correct:0},

{question:"『tinggi』の意味は？",
answers:["低い","高い","重い","速い"],
correct:1},

{question:"『rendah』の意味は？",
answers:["高い","軽い","低い","短い"],
correct:2},

{question:"『berat』の意味は？",
answers:["軽い","重い","強い","硬い"],
correct:1},

{question:"『ringan』の意味は？",
answers:["軽い","重い","柔らかい","遅い"],
correct:0},

{question:"『cepat』の意味は？",
answers:["遅い","速い","強い","新しい"],
correct:1},

{question:"『lambat』の意味は？",
answers:["速い","短い","遅い","弱い"],
correct:2},

{question:"『baru』の意味は？",
answers:["古い","若い","新しい","長い"],
correct:2},

{question:"『lama』の意味は？",
answers:["古い","新しい","短い","若い"],
correct:0},

{question:"『muda』の意味は？",
answers:["若い","古い","背が高い","強い"],
correct:0},

{question:"『tua』の意味は？",
answers:["若い","年老いた","忙しい","危険な"],
correct:1},

{question:"『panas』の意味は？",
answers:["冷たい","暖かい","熱い・暑い","寒い"],
correct:2},

{question:"『dingin』の意味は？",
answers:["寒い・冷たい","暑い","暖かい","熱い"],
correct:0},

{question:"『hangat』の意味は？",
answers:["寒い","暖かい","暗い","熱い"],
correct:1},

{question:"『sejuk』の意味は？",
answers:["蒸し暑い","寒い","暖かい","涼しい"],
correct:3},

{question:"『mahal』の意味は？",
answers:["高い","安い","古い","特別な"],
correct:0},

{question:"『murah』の意味は？",
answers:["高価な","新しい","安い","有名な"],
correct:2},

{question:"『kaya』の意味は？",
answers:["忙しい","金持ちの","危険な","健康な"],
correct:1},

{question:"『miskin』の意味は？",
answers:["裕福な","静かな","貧しい","有名な"],
correct:2},

{question:"『baik』の意味は？",
answers:["良い","悪い","普通の","特別な"],
correct:0},

{question:"『buruk』の意味は？",
answers:["正しい","悪い","高い","危険な"],
correct:1},

{question:"『bagus』の意味は？",
answers:["悪い","素晴らしい","退屈な","弱い"],
correct:1},

{question:"『jelek』の意味は？",
answers:["綺麗な","良い","醜い・悪い","危険な"],
correct:2},

{question:"『cantik』の意味は？",
answers:["可愛い","美しい（女性）","面白い","若い"],
correct:1},

{question:"『tampan』の意味は？",
answers:["優しい","ハンサムな","強い","若い"],
correct:1},

{question:"『lucu』の意味は？",
answers:["面白い・可愛い","退屈な","怒った","奇妙な"],
correct:0},

{question:"『serius』の意味は？",
answers:["真面目な","冗談好き","優しい","面白い"],
correct:0},

{question:"『rajin』の意味は？",
answers:["怠けた","勤勉な","忙しい","優秀な"],
correct:1},

{question:"『malas』の意味は？",
answers:["元気な","勤勉な","怠けた","賢い"],
correct:2},

{question:"『sibuk』の意味は？",
answers:["忙しい","暇な","危険な","健康な"],
correct:0},

{question:"『santai』の意味は？",
answers:["緊張した","退屈な","リラックスした","危険な"],
correct:2},

{question:"『mudah』の意味は？",
answers:["簡単な","難しい","普通の","大変な"],
correct:0},

{question:"『sulit』の意味は？",
answers:["簡単な","重要な","難しい","退屈な"],
correct:2},

{question:"『penting』の意味は？",
answers:["危険な","普通の","重要な","有名な"],
correct:2},

{question:"『biasa』の意味は？",
answers:["特別な","普通の","有名な","高価な"],
correct:1},

{question:"『khusus』の意味は？",
answers:["普通の","特別な","静かな","危険な"],
correct:1},

{question:"『sama』の意味は？",
answers:["違う","同じ","普通の","有名な"],
correct:1},

{question:"『berbeda』の意味は？",
answers:["同じ","違う","普通の","静かな"],
correct:1},

{question:"『benar』の意味は？",
answers:["危険な","間違った","正しい","難しい"],
correct:2},

{question:"『salah』の意味は？",
answers:["正しい","間違った","危険な","退屈な"],
correct:1},

{question:"『bersih』の意味は？",
answers:["汚い","危険な","清潔な","普通の"],
correct:2},

{question:"『kotor』の意味は？",
answers:["清潔な","汚い","濡れた","暗い"],
correct:1},

{question:"『sehat』の意味は？",
answers:["疲れた","病気の","健康な","危険な"],
correct:2},

{question:"『sakit』の意味は？",
answers:["病気の","元気な","安全な","疲れた"],
correct:0},

{question:"『kuat』の意味は？",
answers:["弱い","強い","軽い","小さい"],
correct:1},

{question:"『lemah』の意味は？",
answers:["強い","弱い","重い","大きい"],
correct:1},

{question:"『aman』の意味は？",
answers:["危険な","安全な","静かな","普通の"],
correct:1},

{question:"『berbahaya』の意味は？",
answers:["安全な","危険な","静かな","重い"],
correct:1},

{question:"『penuh』の意味は？",
answers:["空の","満杯の","狭い","軽い"],
correct:1},

{question:"『kosong』の意味は？",
answers:["満杯の","危険な","空の","広い"],
correct:2},

{question:"『ramai』の意味は？",
answers:["静かな","暗い","にぎやかな","普通の"],
correct:2},

{question:"『sepi』の意味は？",
answers:["にぎやかな","静かな","狭い","危険な"],
correct:1},

{question:"『keras』の意味は？",
answers:["柔らかい","硬い","軽い","甘い"],
correct:1},

{question:"『lembut』の意味は？",
answers:["硬い","危険な","柔らかい","重い"],
correct:2},

{question:"『asin』の意味は？",
answers:["甘い","辛い","塩辛い","酸っぱい"],
correct:2},

{question:"『manis』の意味は？",
answers:["苦い","甘い","辛い","酸っぱい"],
correct:1},

{question:"『pahit』の意味は？",
answers:["甘い","苦い","酸っぱい","塩辛い"],
correct:1},

{question:"『asam』の意味は？",
answers:["酸っぱい","甘い","辛い","苦い"],
correct:0},

{question:"『pedas』の意味は？",
answers:["甘い","苦い","辛い","酸っぱい"],
correct:2},

{question:"『enak』の意味は？",
answers:["まずい","辛い","美味しい","酸っぱい"],
correct:2},

{question:"『lapar』の意味は？",
answers:["眠い","空腹の","疲れた","寒い"],
correct:1},

{question:"『haus』の意味は？",
answers:["満腹の","暑い","喉が渇いた","寒い"],
correct:2},

{question:"『kenyang』の意味は？",
answers:["満腹の","空腹の","疲れた","健康な"],
correct:0},

{question:"『senang』の意味は？",
answers:["悲しい","怒った","嬉しい","退屈な"],
correct:2},

{question:"『sedih』の意味は？",
answers:["楽しい","嬉しい","悲しい","怒った"],
correct:2},

{question:"『marah』の意味は？",
answers:["怖い","怒った","嬉しい","緊張した"],
correct:1},

{question:"『takut』の意味は？",
answers:["怒った","退屈な","怖い","嬉しい"],
correct:2},

{question:"『gugup』の意味は？",
answers:["疲れた","緊張した","誇らしい","怒った"],
correct:1},

{question:"『malu』の意味は？",
answers:["恥ずかしい","緊張した","怒った","疲れた"],
correct:0},

{question:"『bangga』の意味は？",
answers:["誇らしい","退屈な","怖い","悲しい"],
correct:0},

{question:"『bosan』の意味は？",
answers:["面白い","疲れた","退屈な","怒った"],
correct:2},

{question:"『capek』の意味は？",
answers:["疲れた","眠い","寒い","退屈な"],
correct:0},

{question:"『lelah』の意味は？",
answers:["元気な","疲れた","満腹の","危険な"],
correct:1},

{question:"『pintar』の意味は？",
answers:["馬鹿な","賢い","怠けた","危険な"],
correct:1},

{question:"『bodoh』の意味は？",
answers:["賢い","有名な","馬鹿な","忙しい"],
correct:2},

{question:"『ramah』の意味は？",
answers:["危険な","失礼な","親切な","厳しい"],
correct:2},

{question:"『sopan』の意味は？",
answers:["礼儀正しい","失礼な","怖い","面白い"],
correct:0},

{question:"『kasar』の意味は？",
answers:["親切な","柔らかい","失礼な・荒い","優しい"],
correct:2},

{question:"『jujur』の意味は？",
answers:["正直な","怠けた","危険な","悲しい"],
correct:0},

{question:"『bohong』の意味は？",
answers:["正直な","静かな","嘘つきの","有名な"],
correct:2},

{question:"『menarik』の意味は？",
answers:["退屈な","興味深い","危険な","静かな"],
correct:1},

{question:"『membosankan』の意味は？",
answers:["面白い","危険な","退屈な","親切な"],
correct:2},

{question:"『populer』の意味は？",
answers:["普通の","人気の","静かな","高価な"],
correct:1},

{question:"『terkenal』の意味は？",
answers:["有名な","危険な","珍しい","普通の"],
correct:0},

{question:"『aneh』の意味は？",
answers:["普通の","奇妙な","危険な","静かな"],
correct:1},

{question:"『normal』の意味は？",
answers:["普通の","危険な","特別な","奇妙な"],
correct:0},

{question:"『indah』の意味は？",
answers:["美しい","醜い","普通の","重い"],
correct:0},

{question:"『gelap』の意味は？",
answers:["暗い","明るい","危険な","静かな"],
correct:0},

{question:"『terang』の意味は？",
answers:["暗い","明るい","普通の","広い"],
correct:1},

{question:"『basah』の意味は？",
answers:["乾いた","濡れた","重い","危険な"],
correct:1},

{question:"『kering』の意味は？",
answers:["濡れた","乾いた","柔らかい","熱い"],
correct:1},

{question:"『sempit』の意味は？",
answers:["広い","狭い","長い","短い"],
correct:1},

{question:"『luas』の意味は？",
answers:["狭い","広い","小さい","高い"],
correct:1},

{question:"『tebal』の意味は？",
answers:["薄い","厚い","軽い","柔らかい"],
correct:1},

{question:"『tipis』の意味は？",
answers:["重い","厚い","薄い","暗い"],
correct:2},

{question:"『dekat』の意味は？",
answers:["遠い","近い","高い","遅い"],
correct:1},

{question:"『jauh』の意味は？",
answers:["近い","広い","遠い","低い"],
correct:2}


];

const expressions = [


{question:"『halo』の意味は？",
answers:["ありがとう","こんにちは","さようなら","頑張って"],
correct:1},

{question:"『selamat pagi』の意味は？",
answers:["こんばんは","こんにちは","おはよう","おやすみ"],
correct:2},

{question:"『selamat siang』の意味は？",
answers:["こんにちは（昼）","おはよう","こんばんは","またね"],
correct:0},

{question:"『selamat sore』の意味は？",
answers:["おはよう","こんにちは（夕方）","こんばんは","おやすみ"],
correct:1},

{question:"『selamat malam』の意味は？",
answers:["おはよう","こんばんは","こんにちは","お疲れ"],
correct:1},

{question:"『sampai jumpa』の意味は？",
answers:["ありがとう","また会いましょう","お元気で","頑張って"],
correct:1},

{question:"『sampai nanti』の意味は？",
answers:["また明日","また後で","こんにちは","気をつけて"],
correct:1},

{question:"『sampai besok』の意味は？",
answers:["また明日","また来週","また後で","おやすみ"],
correct:0},

{question:"『hati-hati』の意味は？",
answers:["急いで","気をつけて","頑張って","ありがとう"],
correct:1},

{question:"『terima kasih』の意味は？",
answers:["どういたしまして","ごめんなさい","ありがとう","こんにちは"],
correct:2},

{question:"『terima kasih banyak』の意味は？",
answers:["本当にありがとう","さようなら","お疲れ","ごめん"],
correct:0},

{question:"『sama-sama』の意味は？",
answers:["大丈夫","どういたしまして","ありがとう","またね"],
correct:1},

{question:"『maaf』の意味は？",
answers:["ありがとう","ごめんなさい","さようなら","頑張れ"],
correct:1},

{question:"『permisi』の意味は？",
answers:["お疲れ","どうぞ","すみません","こんにちは"],
correct:2},

{question:"『tidak apa-apa』の意味は？",
answers:["危ない","問題だ","大丈夫","わからない"],
correct:2},

{question:"『tidak masalah』の意味は？",
answers:["問題ない","危険","急いで","眠い"],
correct:0},

{question:"『selamat datang』の意味は？",
answers:["さようなら","ようこそ","おめでとう","おやすみ"],
correct:1},

{question:"『selamat jalan』の意味は？",
answers:["良い旅を","また後で","こんにちは","ありがとう"],
correct:0},

{question:"『semoga berhasil』の意味は？",
answers:["気をつけて","成功を祈る","ありがとう","眠い"],
correct:1},

{question:"『semoga cepat sembuh』の意味は？",
answers:["お大事に","おやすみ","また明日","お疲れ"],
correct:0},

{question:"『apa kabar?』の意味は？",
answers:["どこ行くの？","元気？","何してる？","何歳？"],
correct:1},

{question:"『baik-baik saja』の意味は？",
answers:["疲れた","元気です","眠い","お腹すいた"],
correct:1},

{question:"『senang bertemu denganmu』の意味は？",
answers:["久しぶり","会えて嬉しい","ありがとう","またね"],
correct:1},

{question:"『aku mengerti』の意味は？",
answers:["わからない","わかった","眠い","疲れた"],
correct:1},

{question:"『saya tidak mengerti』の意味は？",
answers:["理解した","わかりません","ありがとう","問題ない"],
correct:1},

{question:"『tolong』の意味は？",
answers:["助けて・お願いします","ありがとう","ごめん","急いで"],
correct:0},

{question:"『bolehkah...?』の意味は？",
answers:["何時？","～してもいいですか","どこ？","本当に？"],
correct:1},

{question:"『tentu saja』の意味は？",
answers:["たぶん","もちろん","危険","静かに"],
correct:1},

{question:"『tidak mungkin』の意味は？",
answers:["ありえない","可能","急いで","頑張れ"],
correct:0},

{question:"『sekarang』の意味は？",
answers:["今","昨日","後で","明日"],
correct:0},

{question:"『nanti』の意味は？",
answers:["今","昨日","後で","急いで"],
correct:2},

{question:"『kemarin』の意味は？",
answers:["今日","明日","昨日","来週"],
correct:2},

{question:"『besok』の意味は？",
answers:["昨日","今日","明日","来月"],
correct:2},

{question:"『hari ini』の意味は？",
answers:["明日","今日","昨日","今週"],
correct:1},

{question:"『segera』の意味は？",
answers:["ゆっくり","後で","すぐに","昨日"],
correct:2},

{question:"『selalu』の意味は？",
answers:["時々","いつも","一度もない","あとで"],
correct:1},

{question:"『sering』の意味は？",
answers:["めったにない","よく","少し","静か"],
correct:1},

{question:"『kadang-kadang』の意味は？",
answers:["時々","いつも","絶対","二度と"],
correct:0},

{question:"『jarang』の意味は？",
answers:["いつも","頻繁に","めったにない","完全に"],
correct:2},

{question:"『tidak pernah』の意味は？",
answers:["いつも","時々","一度も～ない","後で"],
correct:2},

{question:"『pernah』の意味は？",
answers:["～したことがある","絶対","まだ","急いで"],
correct:0},

{question:"『sudah』の意味は？",
answers:["まだ","すでに","たぶん","時々"],
correct:1},

{question:"『belum』の意味は？",
answers:["すでに","まだ～ない","昨日","いつも"],
correct:1},

{question:"『masih』の意味は？",
answers:["もう","まだ","急に","完全に"],
correct:1},

{question:"『lagi』の意味は？",
answers:["二度と","また","昨日","突然"],
correct:1},

{question:"『hampir』の意味は？",
answers:["完全に","ほとんど","少し","後で"],
correct:1},

{question:"『mungkin』の意味は？",
answers:["絶対","たぶん","すぐに","昨日"],
correct:1},

{question:"『pasti』の意味は？",
answers:["きっと","たぶん","時々","まだ"],
correct:0},

{question:"『benar-benar』の意味は？",
answers:["少し","本当に","ほとんど","また"],
correct:1},

{question:"『sangat』の意味は？",
answers:["少し","かなり","とても","たぶん"],
correct:2},


{question:"『cukup』の意味は？",
answers:["少し","十分に","絶対","あとで"],
correct:1},

{question:"『terlalu』の意味は？",
answers:["十分","少し","～すぎる","また"],
correct:2},

{question:"『hanya』の意味は？",
answers:["だけ","全部","あとで","完全に"],
correct:0},

{question:"『juga』の意味は？",
answers:["だけ","また","～も","絶対"],
correct:2},

{question:"『dan』の意味は？",
answers:["または","しかし","そして","だから"],
correct:2},

{question:"『atau』の意味は？",
answers:["または","そして","しかし","だから"],
correct:0},

{question:"『tetapi』の意味は？",
answers:["だから","しかし","または","そして"],
correct:1},

{question:"『tapi』の意味は？",
answers:["だから","しかし","そして","もし"],
correct:1},

{question:"『karena』の意味は？",
answers:["だから","もし","なぜなら","そして"],
correct:2},

{question:"『jadi』の意味は？",
answers:["しかし","だから","また","一方で"],
correct:1},

{question:"『jika』の意味は？",
answers:["なぜなら","もし","そして","しかし"],
correct:1},

{question:"『kalau』の意味は？",
answers:["だから","もし～なら","または","でも"],
correct:1},

{question:"『meskipun』の意味は？",
answers:["～だけれども","だから","そして","理由"],
correct:0},

{question:"『walaupun』の意味は？",
answers:["もし","～にもかかわらず","そして","しかし"],
correct:1},

{question:"『lalu』の意味は？",
answers:["その後","しかし","理由","急いで"],
correct:0},

{question:"『kemudian』の意味は？",
answers:["以前","次に","突然","だから"],
correct:1},

{question:"『sebelum』の意味は？",
answers:["後で","～の前に","～の間","理由"],
correct:1},

{question:"『sesudah』の意味は？",
answers:["～の後で","～の前に","同時に","すぐ"],
correct:0},

{question:"『sementara』の意味は？",
answers:["絶対","一方で","すぐ","完全に"],
correct:1},

{question:"『agar』の意味は？",
answers:["しかし","～するために","もし","だから"],
correct:1},

{question:"『supaya』の意味は？",
answers:["～するように","しかし","絶対","急いで"],
correct:0},

{question:"『sebab』の意味は？",
answers:["答え","理由","順番","方法"],
correct:1},

{question:"『sehingga』の意味は？",
answers:["その結果","もし","しかし","以前"],
correct:0},

{question:"『selain itu』の意味は？",
answers:["その上","しかし","以前","突然"],
correct:0},

{question:"『tidak tahu』の意味は？",
answers:["知っている","知らない","忘れた","理解した"],
correct:1},

{question:"『siapa tahu』の意味は？",
answers:["誰？","もしかしたら","どこ？","絶対"],
correct:1},

{question:"『jangan khawatir』の意味は？",
answers:["急いで","心配しないで","危ない","静かに"],
correct:1},

{question:"『apa maksudmu?』の意味は？",
answers:["何してる？","どういう意味？","何歳？","どこ行く？"],
correct:1},

{question:"『menurut saya』の意味は？",
answers:["私によれば","彼によれば","急いで","たぶん"],
correct:0},

{question:"『tentu』の意味は？",
answers:["危険","もちろん","時々","あとで"],
correct:1},

{question:"『ya ampun』の意味は？",
answers:["ありがとう","なんてことだ","急いで","頑張れ"],
correct:1},

{question:"『astaga』の意味は？",
answers:["おはよう","うわっ！","ありがとう","またね"],
correct:1},

{question:"『tidak usah』の意味は？",
answers:["急げ","必要ない","わからない","危険"],
correct:1},

{question:"『jangan lupa』の意味は？",
answers:["忘れないで","静かに","急いで","また後で"],
correct:0},

{question:"『hati-hati di jalan』の意味は？",
answers:["急いで","道中気をつけて","もう遅い","疲れた"],
correct:1},

{question:"『tidak peduli』の意味は？",
answers:["理解する","気にしない","考える","急ぐ"],
correct:1},

{question:"『saya setuju』の意味は？",
answers:["反対です","賛成です","わかりません","疲れた"],
correct:1},

{question:"『saya tidak setuju』の意味は？",
answers:["賛成です","反対です","同じです","可能です"],
correct:1},

{question:"『jangan bercanda』の意味は？",
answers:["冗談やめて","笑って","急いで","説明して"],
correct:0},

{question:"『masa sih?』の意味は？",
answers:["急いで","本当に？","どうしたの？","ありがとう"],
correct:1},

{question:"『siapa pun』の意味は？",
answers:["誰でも","誰？","何でも","どこでも"],
correct:0},

{question:"『apa saja』の意味は？",
answers:["何でも","何？","いつでも","誰でも"],
correct:0},

{question:"『di mana saja』の意味は？",
answers:["いつでも","誰でも","どこでも","何でも"],
correct:2},

{question:"『pelan-pelan』の意味は？",
answers:["急いで","ゆっくり","危険","静かに"],
correct:1},

{question:"『cepat-cepat』の意味は？",
answers:["ゆっくり","急いで","静かに","絶対"],
correct:1},

{question:"『untungnya』の意味は？",
answers:["残念ながら","幸運にも","その結果","理由は"],
correct:1},

{question:"『sayangnya』の意味は？",
answers:["幸運にも","残念ながら","急いで","十分に"],
correct:1},

{question:"『tentu tidak』の意味は？",
answers:["もちろん違う","たぶん","問題ない","ありえない"],
correct:0},

{question:"『sebentar』の意味は？",
answers:["長時間","少しの間","昨日","急に"],
correct:1},

{question:"『apa pun bisa terjadi』の意味は？",
answers:["何でも起こりうる","絶対無理","問題ない","急げ"],
correct:0}



];

/* --------------------
   カテゴリー選択
-------------------- */

function selectCategory(category){

    if(category === "noun"){
        quizData = [...nouns];
    }

    else if(category === "verb"){
        quizData = [...verbs];
    }

    else if(category === "adjective"){
        quizData = [...adjective];
    }

    else if(category === "expression"){
        quizData = [...expressions];
    }

    else{
        quizData = [
            ...nouns,
            ...verbs,
            ...adjective,
            ...expressions
        ];
    }

    if(quizData.length === 0){
        document.getElementById(
            "question"
        ).textContent =
        "問題がまだありません";
        return;
    }

    quizData = quizData.map(
        shuffleQuestion
    );

    shuffleArray(quizData);

    currentQuestion = 0;
    score = 0;
    wrongQuestions = [];

    document.getElementById(
        "score"
    ).textContent = score;

    loadQuestion();
}

/* --------------------
   問題シャッフル
-------------------- */

function shuffleQuestion(q){

    const correctAnswer =
    q.answers[q.correct];

    const shuffled =
    [...q.answers]
    .sort(() => Math.random() - 0.5);

    return {
        question: q.question,
        answers: shuffled,
        correct:
        shuffled.indexOf(correctAnswer)
    };
}

/* --------------------
   問題表示
-------------------- */

function loadQuestion(){

    document.getElementById(
    "speakBtn"
).onclick = () => {
    speakWord(
        q.question
    );
};

    const q =
    quizData[currentQuestion];

    document.getElementById(
        "question"
    ).textContent =
    q.question;

    speakWord(q.question);

    document.getElementById(
        "questionNumber"
    ).textContent =
    `Question ${
        currentQuestion + 1
    } / ${quizData.length}`;

    const answersEl =
    document.getElementById(
        "answers"
    );

    answersEl.innerHTML = "";

    document.getElementById(
        "result"
    ).textContent = "";

    document.getElementById(
        "nextBtn"
    ).style.display = "none";

    q.answers.forEach(
        (answer, index)=>{

        const button =
        document.createElement(
            "button"
        );

        button.classList.add(
            "answer-btn"
        );

        button.textContent =
        answer;

        button.addEventListener(
            "click",
            ()=>{

            const buttons =
            document.querySelectorAll(
                ".answer-btn"
            );

            buttons.forEach(
                btn =>
                btn.disabled = true
            );

            if(index === q.correct){

                button.classList.add(
                    "correct"
                );

                document.getElementById(
                    "result"
                ).textContent =
                "⭕ 正解！";

                score++;

                document.getElementById(
                    "score"
                ).textContent =
                score;

            }else{

                button.classList.add(
                    "wrong"
                );

                buttons[q.correct]
                .classList.add(
                    "correct"
                );

                document.getElementById(
                    "result"
                ).textContent =
                "❌ 不正解";

                wrongQuestions.push(q);
            }

            document.getElementById(
                "nextBtn"
            ).style.display =
            "block";
        });

        answersEl.appendChild(
            button
        );
    });
}

/* --------------------
   次の問題
-------------------- */

document.getElementById(
    "nextBtn"
).addEventListener(
    "click",
    ()=>{

    currentQuestion++;

    if(
        currentQuestion <
        quizData.length
    ){
        loadQuestion();

    }else{

        document.querySelector(
            ".quiz-container"
        ).innerHTML = `
        <h1>
        🎉 Quiz Finished!
        </h1>

        <p style="
        text-align:center;
        margin-top:20px;
        font-size:1.3rem;">

        ${quizData.length}問中
        <strong>${score}</strong>
        問正解！

        </p>

        <p style="
        text-align:center;
        margin-top:10px;">

        間違えた問題：
        ${wrongQuestions.length}問

        </p>

        <button
        class="next-btn restart-btn"
        onclick="location.reload()"
        style="display:block;
        margin-top:15px;">

        もう一回挑戦

        </button>
        `;
    }
});

/* --------------------
   配列シャッフル
-------------------- */

function shuffleArray(array){

    for(
        let i =
        array.length - 1;
        i > 0;
        i--
    ){

        const j =
        Math.floor(
            Math.random()
            * (i + 1)
        );

        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];
    }
}

function speakWord(word){

    const utterance =
    new SpeechSynthesisUtterance(
        word
    );

    // 言語設定
    utterance.lang = "id-ID";
    // 英語なら "en-US"
    // フランス語なら "fr-FR"

    utterance.rate = 0.9;
    utterance.pitch = 1;

    speechSynthesis.cancel();
    speechSynthesis.speak(
        utterance
    );
}