const questions=[
    
{
    question:"昨日、私は市場で果物を買いました。",
    words:["membeli","buah","di","kemarin","pasar","saya"],
    answer:"Saya membeli buah di pasar kemarin.",
    translation:"昨日、私は市場で果物を買いました。",
    explanation:"場所(di pasar)は動詞の後、時間(kemarin)は文末によく置かれる。"
},
{
    question:"彼女は毎朝6時に起きます。",
    words:["bangun","setiap","pukul","enam","dia","pagi"],
    answer:"Dia bangun setiap pagi pukul enam.",
    translation:"彼女は毎朝6時に起きます。",
    explanation:"setiap pagi＝毎朝、pukul enam＝6時。"
},
{
    question:"私は日本料理が好きです。",
    words:["masakan","suka","Jepang","saya"],
    answer:"Saya suka masakan Jepang.",
    translation:"私は日本料理が好きです。",
    explanation:"masakan Jepang＝日本料理。"
},
{
    question:"彼らは今サッカーをしています。",
    words:["bermain","mereka","sepak","bola","sedang"],
    answer:"Mereka sedang bermain sepak bola.",
    translation:"彼らは今サッカーをしています。",
    explanation:"sedang＋動詞で「〜しているところ」。"
},
{
    question:"私の兄は車を運転できます。",
    words:["mobil","mengemudi","kakak","bisa","saya"],
    answer:"Kakak saya bisa mengemudi mobil.",
    translation:"私の兄は車を運転できます。",
    explanation:"bisa＋動詞で「〜できる」。"
},
{
    question:"この本はとても面白いです。",
    words:["ini","sangat","buku","menarik"],
    answer:"Buku ini sangat menarik.",
    translation:"この本はとても面白いです。",
    explanation:"sangat＝とても。"
},
{
    question:"あなたはどこに住んでいますか。",
    words:["tinggal","di","mana","anda"],
    answer:"Anda tinggal di mana?",
    translation:"あなたはどこに住んでいますか。",
    explanation:"di mana＝どこで。"
},
{
    question:"彼はまだ宿題を終えていません。",
    words:["PR","belum","dia","menyelesaikan"],
    answer:"Dia belum menyelesaikan PR.",
    translation:"彼はまだ宿題を終えていません。",
    explanation:"belum＝まだ〜ない。"
},
{
    question:"私は友達と映画を見に行きます。",
    words:["teman","menonton","film","dengan","pergi","saya"],
    answer:"Saya pergi menonton film dengan teman.",
    translation:"私は友達と映画を見に行きます。",
    explanation:"pergi menonton＝見に行く、dengan＝〜と。"
},
{
    question:"彼女は英語を上手に話します。",
    words:["bahasa","Inggris","berbicara","baik","dia","dengan"],
    answer:"Dia berbicara bahasa Inggris dengan baik.",
    translation:"彼女は英語を上手に話します。",
    explanation:"dengan baik＝上手に。"
},
{
    question:"私は先週その映画を見ました。",
    words:["minggu","film","lalu","itu","menonton","saya"],
    answer:"Saya menonton film itu minggu lalu.",
    translation:"私は先週その映画を見ました。",
    explanation:"minggu lalu＝先週。"
},
{
    question:"彼らはバスで学校へ行きます。",
    words:["ke","naik","mereka","sekolah","bus"],
    answer:"Mereka naik bus ke sekolah.",
    translation:"彼らはバスで学校へ行きます。",
    explanation:"naik bus＝バスに乗る、ke＝〜へ。"
},
{
    question:"私はもっと水を飲まなければなりません。",
    words:["harus","air","lebih","minum","saya","banyak"],
    answer:"Saya harus minum lebih banyak air.",
    translation:"私はもっと水を飲まなければなりません。",
    explanation:"harus＝〜しなければならない、lebih banyak＝もっと多く。"
},
{
    question:"今日は昨日より暑いです。",
    words:["lebih","hari","daripada","panas","ini","kemarin"],
    answer:"Hari ini lebih panas daripada kemarin.",
    translation:"今日は昨日より暑いです。",
    explanation:"lebih ... daripada ...＝〜より…。"
},
{
    question:"彼は毎日会社で働いています。",
    words:["kantor","di","setiap","hari","bekerja","dia"],
    answer:"Dia bekerja di kantor setiap hari.",
    translation:"彼は毎日会社で働いています。",
    explanation:"bekerja di kantor＝会社で働く。"
},
{
    question:"私はインドネシアへ旅行したいです。",
    words:["Indonesia","ke","ingin","bepergian","saya"],
    answer:"Saya ingin bepergian ke Indonesia.",
    translation:"私はインドネシアへ旅行したいです。",
    explanation:"ingin＝〜したい、bepergian＝旅行する。"
},
{
    question:"先生は学生に質問しました。",
    words:["guru","bertanya","mahasiswa","kepada","itu"],
    answer:"Guru itu bertanya kepada mahasiswa.",
    translation:"先生は学生に質問しました。",
    explanation:"bertanya kepada＝〜に質問する。"
},
{
    question:"私は朝ご飯を食べた後に勉強します。",
    words:["belajar","setelah","sarapan","saya"],
    answer:"Saya belajar setelah sarapan.",
    translation:"私は朝ご飯を食べた後に勉強します。",
    explanation:"setelah＝〜の後で。"
},
{
    question:"この部屋はあの部屋より広いです。",
    words:["kamar","lebih","itu","daripada","ini","luas"],
    answer:"Kamar ini lebih luas daripada kamar itu.",
    translation:"この部屋はあの部屋より広いです。",
    explanation:"lebih luas daripada＝〜より広い。"
},
{
    question:"私は宿題をもう終えました。",
    words:["PR","sudah","menyelesaikan","saya"],
    answer:"Saya sudah menyelesaikan PR.",
    translation:"私は宿題をもう終えました。",
    explanation:"sudah＝すでに、もう。"
}
,
{
    question:"私は明日図書館へ行きます。",
    words:["besok","ke","perpustakaan","saya","pergi"],
    answer:"Saya pergi ke perpustakaan besok.",
    translation:"私は明日図書館へ行きます。",
    explanation:"ke＝～へ、besok＝明日。"
},
{
    question:"彼は毎週日曜日にサッカーをします。",
    words:["bermain","setiap","Minggu","dia","sepak","bola"],
    answer:"Dia bermain sepak bola setiap Minggu.",
    translation:"彼は毎週日曜日にサッカーをします。",
    explanation:"setiap Minggu＝毎週日曜日。"
},
{
    question:"私たちは今夕食を食べています。",
    words:["sedang","kami","malam","makan"],
    answer:"Kami sedang makan malam.",
    translation:"私たちは今夕食を食べています。",
    explanation:"sedang＋動詞で「～しているところ」。makan malam＝夕食を食べる。"
},
{
    question:"彼女は病院で医者として働いています。",
    words:["dokter","sebagai","dia","rumah","di","sakit","bekerja"],
    answer:"Dia bekerja sebagai dokter di rumah sakit.",
    translation:"彼女は病院で医者として働いています。",
    explanation:"sebagai＝～として、rumah sakit＝病院。"
},
{
    question:"私はコーヒーよりお茶のほうが好きです。",
    words:["lebih","daripada","teh","kopi","saya","suka"],
    answer:"Saya lebih suka teh daripada kopi.",
    translation:"私はコーヒーよりお茶のほうが好きです。",
    explanation:"lebih ... daripada ...＝～より…。"
},
{
    question:"彼らは宿題をまだ終えていません。",
    words:["PR","mereka","menyelesaikan","belum"],
    answer:"Mereka belum menyelesaikan PR.",
    translation:"彼らはまだ宿題を終えていません。",
    explanation:"belum＝まだ～ない。"
},
{
    question:"今日は雨が降るかもしれません。",
    words:["hari","ini","mungkin","hujan"],
    answer:"Hari ini mungkin hujan.",
    translation:"今日は雨が降るかもしれません。",
    explanation:"mungkin＝たぶん、～かもしれない。"
},
{
    question:"私は駅で友達を待っています。",
    words:["menunggu","stasiun","teman","di","saya"],
    answer:"Saya menunggu teman di stasiun.",
    translation:"私は駅で友達を待っています。",
    explanation:"menunggu＝待つ、stasiun＝駅。"
},
{
    question:"このかばんはあのかばんより高いです。",
    words:["tas","daripada","lebih","itu","mahal","tas","ini"],
    answer:"Tas ini lebih mahal daripada tas itu.",
    translation:"このかばんはあのかばんより高いです。",
    explanation:"lebih mahal daripada＝～より高い。"
},
{
    question:"授業が終わった後、私はアルバイトへ行きます。",
    words:["kuliah","setelah","selesai","paruh","waktu","kerja","saya"],
    answer:"Saya kerja paruh waktu setelah kuliah selesai.",
    translation:"授業が終わった後、私はアルバイトへ行きます。",
    explanation:"setelah＝～の後で、kerja paruh waktu＝アルバイトをする。"
}
,
{
    question:"私は今夜早く寝なければなりません。",
    words:["harus","malam","tidur","ini","lebih","awal","saya"],
    answer:"Saya harus tidur lebih awal malam ini.",
    translation:"私は今夜早く寝なければなりません。",
    explanation:"harus＋動詞＝「～しなければならない」。lebih awal＝より早く。"
},
{
    question:"ここで写真を撮ってもいいです。",
    words:["mengambil","foto","boleh","di","sini","anda"],
    answer:"Anda boleh mengambil foto di sini.",
    translation:"ここで写真を撮ってもいいです。",
    explanation:"boleh＋動詞＝「～してもよい」。"
},
{
    question:"来月、私たちはバリ島へ旅行します。",
    words:["bulan","kami","akan","depan","ke","Bali","berlibur"],
    answer:"Kami akan berlibur ke Bali bulan depan.",
    translation:"来月、私たちはバリ島へ旅行します。",
    explanation:"akan＋動詞＝未来。「bulan depan＝来月」。"
},
{
    question:"私は疲れたので家に帰りました。",
    words:["karena","lelah","pulang","ke","rumah","saya"],
    answer:"Saya pulang ke rumah karena lelah.",
    translation:"私は疲れたので家に帰りました。",
    explanation:"karena＝～なので、～だから。"
},
{
    question:"彼はお金持ちですが、とても親切です。",
    words:["tetapi","kaya","dia","sangat","ramah"],
    answer:"Dia kaya tetapi sangat ramah.",
    translation:"彼はお金持ちですが、とても親切です。",
    explanation:"tetapi＝しかし、～ですが。"
},
{
    question:"朝食の前に歯を磨きます。",
    words:["gigi","menyikat","sebelum","sarapan","saya"],
    answer:"Saya menyikat gigi sebelum sarapan.",
    translation:"私は朝食の前に歯を磨きます。",
    explanation:"sebelum＝～の前に。"
},
{
    question:"子どものとき、私はよくこの公園で遊びました。",
    words:["ketika","kecil","bermain","di","taman","ini","saya"],
    answer:"Ketika kecil saya bermain di taman ini.",
    translation:"子どものとき、私はこの公園で遊びました。",
    explanation:"ketika＝～のとき。ketika kecil＝子どものころ。"
},
{
    question:"私は一度もインドネシアへ行ったことがありません。",
    words:["pernah","ke","Indonesia","belum","saya","pergi"],
    answer:"Saya belum pernah pergi ke Indonesia.",
    translation:"私は一度もインドネシアへ行ったことがありません。",
    explanation:"belum pernah＝一度も～したことがない。"
},
{
    question:"祖父は今でも元気です。",
    words:["masih","sehat","kakek","saya"],
    answer:"Kakek saya masih sehat.",
    translation:"私の祖父は今でも元気です。",
    explanation:"masih＝まだ、今でも。"
},
{
    question:"この料理は母によって作られました。",
    words:["ibu","dibuat","masakan","oleh","ini"],
    answer:"Masakan ini dibuat oleh ibu.",
    translation:"この料理は母によって作られました。",
    explanation:"di-動詞＋oleh＝受動態「～によって…される」。"
}
,
{
    question:"もし時間があれば、私はあなたを手伝います。",
    words:["kalau","waktu","ada","membantu","akan","saya","anda",","],
    answer:"Kalau ada waktu , saya akan membantu Anda.",
    translation:"もし時間があれば、私はあなたを手伝います。",
    explanation:"kalau＝もし～なら、akan＝～するつもり・～でしょう。"
},
{
    question:"これはこの町で一番おいしいレストランです。",
    words:["restoran","ini","di","kota","ini","paling","enak"],
    answer:"Restoran ini paling enak di kota ini.",
    translation:"これはこの町で一番おいしいレストランです。",
    explanation:"paling＋形容詞＝最も～。"
},
{
    question:"私は家族のためにお土産を買いました。",
    words:["oleh-oleh","membeli","untuk","keluarga","saya"],
    answer:"Saya membeli oleh-oleh untuk keluarga.",
    translation:"私は家族のためにお土産を買いました。",
    explanation:"untuk＝～のために。oleh-oleh＝お土産。"
},
{
    question:"私たちは夜10時まで勉強しました。",
    words:["belajar","kami","sampai","jam","sepuluh","malam"],
    answer:"Kami belajar sampai jam sepuluh malam.",
    translation:"私たちは夜10時まで勉強しました。",
    explanation:"sampai＝～まで。"
},
{
    question:"私は大阪から新幹線で来ました。",
    words:["dari","Osaka","naik","kereta","cepat","saya","datang"],
    answer:"Saya datang dari Osaka naik kereta cepat.",
    translation:"私は大阪から新幹線で来ました。",
    explanation:"dari＝～から。kereta cepat＝高速鉄道・新幹線。"
},
{
    question:"数人の学生が教室にいます。",
    words:["beberapa","mahasiswa","ada","di","kelas"],
    answer:"Beberapa mahasiswa ada di kelas.",
    translation:"数人の学生が教室にいます。",
    explanation:"beberapa＝いくつかの、数人の。"
},
{
    question:"すべての子どもがそのゲームを楽しみました。",
    words:["semua","anak","menikmati","permainan","itu"],
    answer:"Semua anak menikmati permainan itu.",
    translation:"すべての子どもがそのゲームを楽しみました。",
    explanation:"semua＝すべての。"
},
{
    question:"あなたはどうやって大学へ行きますか。",
    words:["bagaimana","anda","pergi","ke","universitas"],
    answer:"Bagaimana Anda pergi ke universitas?",
    translation:"あなたはどうやって大学へ行きますか。",
    explanation:"bagaimana＝どのように。"
},
{
    question:"彼女は誰と昼ご飯を食べていますか。",
    words:["siapa","dia","makan","siang","dengan"],
    answer:"Dia makan siang dengan siapa?",
    translation:"彼女は誰と昼ご飯を食べていますか。",
    explanation:"dengan siapa＝誰と。"
},
{
    question:"あなたはなぜインドネシア語を勉強しているのですか。",
    words:["mengapa","belajar","bahasa","Indonesia","anda"],
    answer:"Mengapa Anda belajar bahasa Indonesia?",
    translation:"あなたはなぜインドネシア語を勉強しているのですか。",
    explanation:"mengapa＝なぜ。"
}
,
{
    question:"私は空港で兄を迎えます。",
    words:["menjemput","kakak","di","bandara","saya"],
    answer:"Saya menjemput kakak di bandara.",
    translation:"私は空港で兄を迎えます。",
    explanation:"menjemput＝迎えに行く、bandara＝空港。"
},
{
    question:"私たちは昨夜このホテルに泊まりました。",
    words:["hotel","tadi","malam","menginap","di","kami","ini"],
    answer:"Kami menginap di hotel ini tadi malam.",
    translation:"私たちは昨夜このホテルに泊まりました。",
    explanation:"menginap＝宿泊する、tadi malam＝昨夜。"
},
{
    question:"私は銀行でお金を下ろします。",
    words:["uang","bank","di","mengambil","saya"],
    answer:"Saya mengambil uang di bank.",
    translation:"私は銀行でお金を下ろします。",
    explanation:"mengambil uang＝お金を引き出す。"
},
{
    question:"彼女は郵便局で手紙を送りました。",
    words:["kantor","surat","mengirim","pos","dia","di"],
    answer:"Dia mengirim surat di kantor pos.",
    translation:"彼女は郵便局で手紙を送りました。",
    explanation:"kantor pos＝郵便局、mengirim surat＝手紙を送る。"
},
{
    question:"今日は風がとても強いです。",
    words:["hari","angin","ini","sangat","kencang"],
    answer:"Hari ini angin sangat kencang.",
    translation:"今日は風がとても強いです。",
    explanation:"angin＝風、kencang＝強い。"
},
{
    question:"私は昨日から熱があります。",
    words:["demam","kemarin","sejak","saya"],
    answer:"Saya demam sejak kemarin.",
    translation:"私は昨日から熱があります。",
    explanation:"sejak＝～から。"
},
{
    question:"この薬を一日に三回飲んでください。",
    words:["obat","minum","ini","tiga","kali","sehari","tolong"],
    answer:"Tolong minum obat ini tiga kali sehari.",
    translation:"この薬を一日に三回飲んでください。",
    explanation:"tolong＋動詞＝丁寧な依頼。「tiga kali sehari＝1日3回」。"
},
{
    question:"私は毎朝30分走ります。",
    words:["berlari","selama","tiga","puluh","menit","setiap","pagi","saya"],
    answer:"Saya berlari selama tiga puluh menit setiap pagi.",
    translation:"私は毎朝30分走ります。",
    explanation:"selama＝～の間。"
},
{
    question:"彼は財布をなくしました。",
    words:["dompet","kehilangan","dia"],
    answer:"Dia kehilangan dompet.",
    translation:"彼は財布をなくしました。",
    explanation:"kehilangan＝なくす、失う。"
},
{
    question:"この道をまっすぐ行ってください。",
    words:["jalan","lurus","tolong","ini","lewat"],
    answer:"Tolong lewat jalan ini lurus.",
    translation:"この道をまっすぐ進んでください。",
    explanation:"jalan lurus＝まっすぐ進む。より自然には 'Tolong jalan lurus.' や 'Silakan jalan lurus.' も使われる。"
}
,
{
    question:"私は新しい靴を買いたいです。",
    words:["ingin","sepatu","baru","membeli","saya"],
    answer:"Saya ingin membeli sepatu baru.",
    translation:"私は新しい靴を買いたいです。",
    explanation:"ingin＋動詞＝「～したい」。baru＝新しい。"
},
{
    question:"このシャツを試着してもいいですか。",
    words:["bolehkah","mencoba","kemeja","ini","saya"],
    answer:"Bolehkah saya mencoba kemeja ini?",
    translation:"このシャツを試着してもいいですか。",
    explanation:"bolehkah＝「～してもいいですか」。mencoba＝試す・試着する。"
},
{
    question:"彼女は携帯電話を家に忘れました。",
    words:["ponsel","di","rumah","lupa","dia"],
    answer:"Dia lupa ponsel di rumah.",
    translation:"彼女は携帯電話を家に忘れました。",
    explanation:"lupa＝忘れる。ponsel＝携帯電話。"
},
{
    question:"私は毎日インターネットを使います。",
    words:["internet","menggunakan","setiap","hari","saya"],
    answer:"Saya menggunakan internet setiap hari.",
    translation:"私は毎日インターネットを使います。",
    explanation:"menggunakan＝使う。"
},
{
    question:"母は夕食にスープを作っています。",
    words:["sup","memasak","ibu","untuk","makan","malam"],
    answer:"Ibu memasak sup untuk makan malam.",
    translation:"母は夕食にスープを作っています。",
    explanation:"memasak＝料理する。sup＝スープ。"
},
{
    question:"このジュースは甘すぎます。",
    words:["jus","ini","terlalu","manis"],
    answer:"Jus ini terlalu manis.",
    translation:"このジュースは甘すぎます。",
    explanation:"terlalu＝～すぎる。"
},
{
    question:"私はその知らせを聞いて驚きました。",
    words:["terkejut","berita","itu","mendengar","saya"],
    answer:"Saya terkejut mendengar berita itu.",
    translation:"私はその知らせを聞いて驚きました。",
    explanation:"terkejut＝驚く。berita＝知らせ、ニュース。"
},
{
    question:"彼は試験に合格してとても嬉しかったです。",
    words:["lulus","ujian","senang","dia","sangat"],
    answer:"Dia sangat senang lulus ujian.",
    translation:"彼は試験に合格してとても嬉しかったです。",
    explanation:"lulus ujian＝試験に合格する。senang＝嬉しい。"
},
{
    question:"妹は音楽を聴きながら勉強します。",
    words:["adik","belajar","sambil","mendengarkan","musik"],
    answer:"Adik belajar sambil mendengarkan musik.",
    translation:"妹（弟）は音楽を聴きながら勉強します。",
    explanation:"sambil＝～しながら。"
},
{
    question:"私は毎週末部屋を掃除します。",
    words:["membersihkan","kamar","setiap","akhir","pekan","saya"],
    answer:"Saya membersihkan kamar setiap akhir pekan.",
    translation:"私は毎週末部屋を掃除します。",
    explanation:"membersihkan＝掃除する。akhir pekan＝週末。"
}
,

{
    question:"私は山に登るのが好きです。",
    words:["suka","mendaki","gunung","saya"],
    answer:"Saya suka mendaki gunung.",
    translation:"私は山登りが好きです。",
    explanation:"mendaki＝登る、gunung＝山。"
},
{
    question:"彼らは海で泳いでいます。",
    words:["berenang","di","laut","mereka","sedang"],
    answer:"Mereka sedang berenang di laut.",
    translation:"彼らは海で泳いでいます。",
    explanation:"laut＝海、berenang＝泳ぐ。"
},
{
    question:"この電車は時間どおりに到着しました。",
    words:["kereta","ini","tiba","tepat","waktu"],
    answer:"Kereta ini tiba tepat waktu.",
    translation:"この電車は時間どおりに到着しました。",
    explanation:"tiba＝到着する、tepat waktu＝時間どおり。"
},
{
    question:"父は会社員として働いています。",
    words:["ayah","bekerja","sebagai","pegawai","kantor"],
    answer:"Ayah bekerja sebagai pegawai kantor.",
    translation:"父は会社員として働いています。",
    explanation:"pegawai kantor＝会社員。"
},
{
    question:"私の趣味は写真を撮ることです。",
    words:["hobi","saya","memotret"],
    answer:"Hobi saya memotret.",
    translation:"私の趣味は写真を撮ることです。",
    explanation:"memotret＝写真を撮る。"
},
{
    question:"私はその映画を二回見たことがあります。",
    words:["film","itu","dua","kali","pernah","menonton","saya"],
    answer:"Saya pernah menonton film itu dua kali.",
    translation:"私はその映画を二回見たことがあります。",
    explanation:"pernah＝～したことがある。dua kali＝二回。"
},
{
    question:"来週、私たちは会議に参加します。",
    words:["mengikuti","rapat","minggu","depan","kami","akan"],
    answer:"Kami akan mengikuti rapat minggu depan.",
    translation:"来週、私たちは会議に参加します。",
    explanation:"mengikuti＝参加する、rapat＝会議。"
},
{
    question:"彼は毎晩小説を読みます。",
    words:["novel","membaca","setiap","malam","dia"],
    answer:"Dia membaca novel setiap malam.",
    translation:"彼は毎晩小説を読みます。",
    explanation:"novel＝小説。"
},
{
    question:"今日は空がとても青いです。",
    words:["langit","hari","ini","sangat","biru"],
    answer:"Langit hari ini sangat biru.",
    translation:"今日の空はとても青いです。",
    explanation:"langit＝空、biru＝青い。"
},
{
    question:"私たちは公園で木を植えました。",
    words:["menanam","pohon","di","taman","kami"],
    answer:"Kami menanam pohon di taman.",
    translation:"私たちは公園で木を植えました。",
    explanation:"menanam＝植える、pohon＝木。"
},
{
    question:"駅はこの建物の向こうにあります。",
    words:["stasiun","di","seberang","gedung","ini","ada"],
    answer:"Stasiun ada di seberang gedung ini.",
    translation:"駅はこの建物の向こう側にあります。",
    explanation:"di seberang＝～の向こう側に。gedung＝建物。"
},
{
    question:"ホテルを予約したいです。",
    words:["ingin","memesan","hotel","saya"],
    answer:"Saya ingin memesan hotel.",
    translation:"私はホテルを予約したいです。",
    explanation:"memesan＝予約する、注文する。"
},
{
    question:"私はATMで残高を確認しました。",
    words:["saldo","ATM","di","memeriksa","saya"],
    answer:"Saya memeriksa saldo di ATM.",
    translation:"私はATMで残高を確認しました。",
    explanation:"memeriksa＝確認する。saldo＝残高。"
},
{
    question:"試験の前は少し緊張します。",
    words:["sedikit","gugup","sebelum","ujian","saya"],
    answer:"Saya sedikit gugup sebelum ujian.",
    translation:"私は試験の前は少し緊張します。",
    explanation:"gugup＝緊張している。sedikit＝少し。"
},
{
    question:"両親は私をとても誇りに思っています。",
    words:["orang","tua","bangga","kepada","saya","sangat"],
    answer:"Orang tua sangat bangga kepada saya.",
    translation:"両親は私をとても誇りに思っています。",
    explanation:"bangga kepada＝～を誇りに思う。"
},
{
    question:"私たちはペットボトルをリサイクルします。",
    words:["mendaur","ulang","botol","plastik","kami"],
    answer:"Kami mendaur ulang botol plastik.",
    translation:"私たちはペットボトルをリサイクルします。",
    explanation:"mendaur ulang＝リサイクルする。"
},
{
    question:"彼女はSNSで写真を共有しました。",
    words:["berbagi","foto","di","media","sosial","dia"],
    answer:"Dia berbagi foto di media sosial.",
    translation:"彼女はSNSで写真を共有しました。",
    explanation:"berbagi＝共有する。media sosial＝SNS。"
},
{
    question:"私は毎朝植物に水をやります。",
    words:["menyiram","tanaman","setiap","pagi","saya"],
    answer:"Saya menyiram tanaman setiap pagi.",
    translation:"私は毎朝植物に水をやります。",
    explanation:"menyiram＝水をやる。tanaman＝植物。"
},
{
    question:"彼は鍵を机の上に置きました。",
    words:["meletakkan","kunci","di","atas","meja","dia"],
    answer:"Dia meletakkan kunci di atas meja.",
    translation:"彼は机の上に鍵を置きました。",
    explanation:"meletakkan＝置く。di atas＝～の上に。"
},
{
    question:"私は新しい友達と知り合いました。",
    words:["berkenalan","dengan","teman","baru","saya"],
    answer:"Saya berkenalan dengan teman baru.",
    translation:"私は新しい友達と知り合いました。",
    explanation:"berkenalan dengan＝～と知り合う。"
}
,
{
    question:"メニューを見せてください。",
    words:["tolong","tunjukkan","menu","kepada","saya"],
    answer:"Tolong tunjukkan menu kepada saya.",
    translation:"メニューを見せてください。",
    explanation:"tunjukkan＝見せる。kepada＝～に。"
},
{
    question:"私は辛い食べ物を注文しません。",
    words:["tidak","memesan","makanan","pedas","saya"],
    answer:"Saya tidak memesan makanan pedas.",
    translation:"私は辛い食べ物を注文しません。",
    explanation:"pedas＝辛い。makanan pedas＝辛い食べ物。"
},
{
    question:"医者はもっと休むように言いました。",
    words:["dokter","berkata","istirahat","lebih","banyak"],
    answer:"Dokter berkata istirahat lebih banyak.",
    translation:"医者はもっと休むように言いました。",
    explanation:"berkata＝言う。istirahat＝休む・休息。"
},
{
    question:"私は薬局で風邪薬を買いました。",
    words:["obat","flu","membeli","di","apotek","saya"],
    answer:"Saya membeli obat flu di apotek.",
    translation:"私は薬局で風邪薬を買いました。",
    explanation:"apotek＝薬局。obat flu＝風邪薬。"
},
{
    question:"荷物は今日届きます。",
    words:["paket","akan","tiba","hari","ini"],
    answer:"Paket akan tiba hari ini.",
    translation:"荷物は今日届きます。",
    explanation:"paket＝荷物。tiba＝到着する。"
},
{
    question:"あとで電話してください。",
    words:["tolong","telepon","nanti"],
    answer:"Tolong telepon nanti.",
    translation:"あとで電話してください。",
    explanation:"telepon＝電話する。nanti＝あとで。"
},
{
    question:"今日は曇っています。",
    words:["hari","ini","berawan"],
    answer:"Hari ini berawan.",
    translation:"今日は曇っています。",
    explanation:"berawan＝曇っている。"
},
{
    question:"昨夜は強い地震がありました。",
    words:["gempa","bumi","kuat","tadi","malam","ada"],
    answer:"Ada gempa bumi kuat tadi malam.",
    translation:"昨夜は強い地震がありました。",
    explanation:"gempa bumi＝地震。kuat＝強い。"
},
{
    question:"私は伝統的な踊りを見るのが好きです。",
    words:["suka","melihat","tarian","tradisional","saya"],
    answer:"Saya suka melihat tarian tradisional.",
    translation:"私は伝統的な踊りを見るのが好きです。",
    explanation:"tarian tradisional＝伝統舞踊。"
},
{
    question:"私はこの考えに賛成です。",
    words:["setuju","dengan","pendapat","ini","saya"],
    answer:"Saya setuju dengan pendapat ini.",
    translation:"私はこの考えに賛成です。",
    explanation:"setuju dengan＝～に賛成する。pendapat＝意見。"
}
,
{
    question:"私は図書館で辞書を借りました。",
    words:["kamus","meminjam","di","perpustakaan","saya"],
    answer:"Saya meminjam kamus di perpustakaan.",
    translation:"私は図書館で辞書を借りました。",
    explanation:"meminjam＝借りる。kamus＝辞書。"
},
{
    question:"彼女は美術館で有名な絵を見ました。",
    words:["lukisan","terkenal","melihat","di","museum","dia"],
    answer:"Dia melihat lukisan terkenal di museum.",
    translation:"彼女は美術館で有名な絵を見ました。",
    explanation:"lukisan＝絵画。museum＝美術館。terkenal＝有名な。"
},
{
    question:"私たちは日曜日にテニスをします。",
    words:["bermain","tenis","hari","Minggu","kami"],
    answer:"Kami bermain tenis hari Minggu.",
    translation:"私たちは日曜日にテニスをします。",
    explanation:"hari Minggu＝日曜日。"
},
{
    question:"弟はギターを弾くことを練習しています。",
    words:["adik","sedang","berlatih","bermain","gitar"],
    answer:"Adik sedang berlatih bermain gitar.",
    translation:"弟（妹）はギターを弾く練習をしています。",
    explanation:"berlatih＝練習する。bermain gitar＝ギターを弾く。"
},
{
    question:"彼らは地域の清掃活動を手伝いました。",
    words:["membantu","kegiatan","bersih-bersih","lingkungan","mereka"],
    answer:"Mereka membantu kegiatan bersih-bersih lingkungan.",
    translation:"彼らは地域の清掃活動を手伝いました。",
    explanation:"bersih-bersih lingkungan＝地域の清掃活動。"
},
{
    question:"会議は来週に延期されました。",
    words:["rapat","ditunda","minggu","depan"],
    answer:"Rapat ditunda minggu depan.",
    translation:"会議は来週に延期されました。",
    explanation:"ditunda＝延期される（受動態）。"
},
{
    question:"私は傘をバスの中に忘れました。",
    words:["payung","di","bus","lupa","saya"],
    answer:"Saya lupa payung di bus.",
    translation:"私はバスの中に傘を忘れました。",
    explanation:"payung＝傘。"
},
{
    question:"今日はいつもより涼しいです。",
    words:["hari","ini","lebih","sejuk","biasanya","daripada"],
    answer:"Hari ini lebih sejuk daripada biasanya.",
    translation:"今日はいつもより涼しいです。",
    explanation:"sejuk＝涼しい。biasanya＝普段。"
},
{
    question:"私は毎月祖父母を訪ねます。",
    words:["mengunjungi","kakek","nenek","setiap","bulan","saya"],
    answer:"Saya mengunjungi kakek nenek setiap bulan.",
    translation:"私は毎月祖父母を訪ねます。",
    explanation:"mengunjungi＝訪ねる。kakek nenek＝祖父母。"
},
{
    question:"彼は約束を忘れませんでした。",
    words:["tidak","lupa","janji","dia"],
    answer:"Dia tidak lupa janji.",
    translation:"彼は約束を忘れませんでした。",
    explanation:"janji＝約束。"
}
,
{
    question:"私は毎朝新聞を読みます。",
    words:["koran","membaca","setiap","pagi","saya"],
    answer:"Saya membaca koran setiap pagi.",
    translation:"私は毎朝新聞を読みます。",
    explanation:"koran＝新聞。"
},
{
    question:"彼女は会話中によくメモを取ります。",
    words:["sering","mencatat","selama","percakapan","dia"],
    answer:"Dia sering mencatat selama percakapan.",
    translation:"彼女は会話中によくメモを取ります。",
    explanation:"mencatat＝メモを取る。percakapan＝会話。"
},
{
    question:"私たちは橋を渡って学校へ行きます。",
    words:["menyeberangi","jembatan","ke","sekolah","kami"],
    answer:"Kami menyeberangi jembatan ke sekolah.",
    translation:"私たちは橋を渡って学校へ行きます。",
    explanation:"menyeberangi＝渡る。jembatan＝橋。"
},
{
    question:"彼は窓を開けて新鮮な空気を入れました。",
    words:["membuka","jendela","udara","segar","dia"],
    answer:"Dia membuka jendela untuk udara segar.",
    translation:"彼は新鮮な空気を入れるために窓を開けました。",
    explanation:"udara segar＝新鮮な空気。untuk＝～のために。"
},
{
    question:"私は鍵を探しています。",
    words:["sedang","mencari","kunci","saya"],
    answer:"Saya sedang mencari kunci.",
    translation:"私は鍵を探しています。",
    explanation:"mencari＝探す。"
},
{
    question:"彼らは先生の説明を理解しました。",
    words:["memahami","penjelasan","guru","mereka"],
    answer:"Mereka memahami penjelasan guru.",
    translation:"彼らは先生の説明を理解しました。",
    explanation:"memahami＝理解する。penjelasan＝説明。"
},
{
    question:"今日は電気が止まりました。",
    words:["listrik","mati","hari","ini"],
    answer:"Listrik mati hari ini.",
    translation:"今日は停電しました。",
    explanation:"listrik mati＝停電する。"
},
{
    question:"私は新しいパスワードを覚えなければなりません。",
    words:["harus","mengingat","kata","sandi","baru","saya"],
    answer:"Saya harus mengingat kata sandi baru.",
    translation:"私は新しいパスワードを覚えなければなりません。",
    explanation:"kata sandi＝パスワード。mengingat＝覚える。"
},
{
    question:"彼女は質問に丁寧に答えました。",
    words:["menjawab","pertanyaan","dengan","sopan","dia"],
    answer:"Dia menjawab pertanyaan dengan sopan.",
    translation:"彼女は質問に丁寧に答えました。",
    explanation:"menjawab＝答える。dengan sopan＝丁寧に。"
},
{
    question:"私たちは一緒に成功を祝いました。",
    words:["merayakan","keberhasilan","bersama","kami"],
    answer:"Kami merayakan keberhasilan bersama.",
    translation:"私たちは一緒に成功を祝いました。",
    explanation:"merayakan＝祝う。keberhasilan＝成功。bersama＝一緒に。"
}
,


];