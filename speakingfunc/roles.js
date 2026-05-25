const roleplays = {
    "en-US": {
        restaurant: [
            "Hello! Welcome to our restaurant. What would you like to order?",
            "Would you like something to drink?",
            "How was your meal today?"
        ],

        airport: [
    "What is the main purpose of your trip, and why are you choosing this destination at this time?",
    "Can you explain in detail where you will be staying during your visit?",
    "How long exactly do you plan to stay, and what will you do during that period?",
    "Do you have any items in your luggage that someone else asked you to carry?",
    "Have you packed everything yourself without accepting any items from others?",
    "Can you describe your travel itinerary from arrival to departure?",
    "What is your occupation, and how does it relate to your visit today?",
    "Do you have sufficient funds to support your stay, and how will you access them?",
    "Have you visited this country before, and if so, what was the purpose of your previous visit?",
    "Can you confirm whether you are carrying any restricted or regulated items?",
    "Which countries have you traveled to in the last few years?",
    "Who will you be staying with, or are you staying at a hotel? Please specify.",
    "What is your planned return date, and is your ticket already booked?",
    "Can you explain any connections or layovers in your flight route today?",
    "Is there any reason your travel plans might change unexpectedly during your stay?",
    "Have you declared all goods that might require customs inspection?",
    "What is your relationship with the person you are visiting, if applicable?",
    "Can you provide a brief explanation of your daily schedule while you are here?",
    "Are you carrying any gifts, documents, or packages for other people?"
],

        job: [
            "Tell me about yourself.",
            "Why do you want this job?",
            "What are your strengths?"
        ],

        friend: [
            "Hey! What did you do today?",
            "What are your hobbies?",
            "What kind of movies do you like?"
        ],
        basicInterview: [
    "Tell me about yourself.",
    "Where are you from?",
    "What are your hobbies?",
    "Why are you learning this language?",
    "What are your strengths?",
    "What are your weaknesses?",
    "Where do you see yourself in five years?",
    "Do you have any questions for me?"
],

partTimeInterview: [
    "Why do you want to work here?",
    "Do you have any work experience?",
    "Can you work on weekends?",
    "How would you handle a difficult customer?",
    "What would you do if you made a mistake at work?",
    "Why should we hire you?"
],

ieltsInterview: [
    "What do you usually do on weekends?",
    "Do you like your hometown?",
    "What kind of music do you enjoy?",
    "Do you prefer studying alone or with friends?",
    "Describe a memorable trip you had.",
    "Why do people enjoy traveling?",
    "How has technology changed communication?",
    "Do you think social media is helpful?"
],

studyAbroadInterview: [
    "Why do you want to study abroad?",
    "Why did you choose this country?",
    "How will you deal with culture shock?",
    "What are your future goals?",
    "How will this program help your career?",
    "What challenges do you expect overseas?"
],

pressureInterview: [
    "Why should we choose you over other candidates?",
    "Tell me about a failure you experienced.",
    "What if your manager disagrees with you?",
    "Why are your grades not better?",
    "What is your biggest weakness?",
    "What would you do under strong pressure?"
]
    },

    "fr-FR": {
        restaurant: [
            "Bonjour ! Bienvenue au restaurant. Que voulez-vous commander ?",
            "Voulez-vous quelque chose à boire ?",
            "Comment était votre repas ?"
        ],

        airport: [
    "Quel est le but principal de votre voyage et pourquoi avez-vous choisi cette destination à ce moment précis ?",
    "Pouvez-vous expliquer en détail où vous allez séjourner pendant votre visite ?",
    "Combien de temps comptez-vous rester exactement et que prévoyez-vous de faire pendant cette période ?",
    "Y a-t-il des objets dans vos bagages que quelqu’un d’autre vous a demandé de transporter ?",
    "Avez-vous préparé vos bagages entièrement vous-même sans accepter d’objets de tiers ?",
    "Pouvez-vous décrire votre itinéraire de voyage depuis votre arrivée jusqu’à votre départ ?",
    "Quelle est votre profession et en quoi est-elle liée à votre visite aujourd’hui ?",
    "Disposez-vous de fonds suffisants pour financer votre séjour et comment y aurez-vous accès ?",
    "Avez-vous déjà visité ce pays auparavant, et si oui, dans quel but ?",
    "Pouvez-vous confirmer que vous ne transportez aucun objet interdit ou réglementé ?",
    "Dans quels pays avez-vous voyagé au cours des dernières années ?",
    "Avec qui allez-vous séjourner, ou s’agit-il d’un hôtel ? Veuillez préciser.",
    "Quelle est votre date de retour prévue et votre billet est-il déjà réservé ?",
    "Pouvez-vous expliquer les correspondances ou escales de votre vol aujourd’hui ?",
    "Y a-t-il une raison pour laquelle vos plans de voyage pourraient changer de manière imprévue ?",
    "Avez-vous déclaré tous les biens susceptibles de nécessiter un contrôle douanier ?",
    "Quelle est votre relation avec la personne que vous allez visiter, le cas échéant ?",
    "Pouvez-vous donner une brève explication de votre emploi du temps quotidien pendant votre séjour ?",
    "Transportez-vous des cadeaux, documents ou colis pour d’autres personnes ?"
],

        job: [
            "Parlez-moi de vous.",
            "Pourquoi voulez-vous ce travail ?",
            "Quelles sont vos qualités ?"
        ],

        friend: [
            "Salut ! Qu’est-ce que tu as fait aujourd’hui ?",
            "Quels sont tes loisirs ?",
            "Quel genre de films aimez-vous ?"
        ],

        basicInterview: [
    "Parlez-moi de vous.",
    "D'où venez-vous ?",
    "Quels sont vos loisirs ?",
    "Pourquoi apprenez-vous cette langue ?",
    "Quelles sont vos qualités ?",
    "Quels sont vos défauts ?",
    "Où vous voyez-vous dans cinq ans ?",
    "Avez-vous des questions ?"
],

partTimeInterview: [
    "Pourquoi voulez-vous travailler ici ?",
    "Avez-vous de l’expérience professionnelle ?",
    "Pouvez-vous travailler le week-end ?",
    "Comment géreriez-vous un client difficile ?",
    "Que feriez-vous si vous faisiez une erreur ?",
    "Pourquoi devrions-nous vous embaucher ?"
],

ieltsInterview: [
    "Que faites-vous habituellement le week-end ?",
    "Aimez-vous votre ville natale ?",
    "Quel genre de musique aimez-vous ?",
    "Préférez-vous étudier seul ou avec des amis ?",
    "Décrivez un voyage mémorable.",
    "Pourquoi les gens aiment-ils voyager ?",
    "Comment la technologie a-t-elle changé la communication ?",
    "Les réseaux sociaux sont-ils utiles ?"
],

studyAbroadInterview: [
    "Pourquoi voulez-vous étudier à l’étranger ?",
    "Pourquoi avez-vous choisi ce pays ?",
    "Comment allez-vous gérer le choc culturel ?",
    "Quels sont vos objectifs futurs ?",
    "Comment ce programme aidera-t-il votre carrière ?",
    "Quels défis attendez-vous à l’étranger ?"
],

pressureInterview: [
    "Pourquoi devrions-nous vous choisir ?",
    "Parlez-moi d’un échec.",
    "Que feriez-vous si votre manager n’était pas d’accord ?",
    "Pourquoi vos notes ne sont-elles pas meilleures ?",
    "Quelle est votre plus grande faiblesse ?",
    "Que feriez-vous sous pression ?"
]
    },

    "id-ID": {
        restaurant: [
            "Halo! Selamat datang di restoran kami. Apa yang ingin Anda pesan?",
            "Apakah Anda ingin minuman?",
            "Bagaimana makanan Anda hari ini?"
        ],

        
        airport: [
    "Apa tujuan utama perjalanan Anda, dan mengapa Anda memilih destinasi ini pada waktu sekarang?",
    "Bisakah Anda menjelaskan secara rinci di mana Anda akan menginap selama kunjungan Anda?",
    "Berapa lama tepatnya Anda berencana tinggal, dan apa yang akan Anda lakukan selama periode tersebut?",
    "Apakah ada barang di bagasi Anda yang diminta oleh orang lain untuk dibawa?",
    "Apakah Anda mengemas semua barang Anda sendiri tanpa menerima titipan dari orang lain?",
    "Bisakah Anda menjelaskan rencana perjalanan Anda dari kedatangan hingga keberangkatan?",
    "Apa pekerjaan Anda, dan bagaimana hal itu berhubungan dengan kunjungan Anda hari ini?",
    "Apakah Anda memiliki dana yang cukup untuk membiayai masa tinggal Anda, dan bagaimana Anda akan mengaksesnya?",
    "Apakah Anda pernah mengunjungi negara ini sebelumnya, dan jika ya, apa tujuan kunjungan Anda sebelumnya?",
    "Bisakah Anda memastikan bahwa Anda tidak membawa barang terlarang atau barang yang diatur khusus?",
    "Negara mana saja yang telah Anda kunjungi dalam beberapa tahun terakhir?",
    "Dengan siapa Anda akan tinggal, atau apakah Anda akan tinggal di hotel? Mohon dijelaskan.",
    "Kapan tanggal kepulangan Anda, dan apakah tiket Anda sudah dipesan?",
    "Bisakah Anda menjelaskan transit atau rute penerbangan Anda hari ini?",
    "Apakah ada alasan yang membuat rencana perjalanan Anda dapat berubah secara tiba-tiba?",
    "Apakah Anda telah melaporkan semua barang yang mungkin perlu diperiksa oleh bea cukai?",
    "Apa hubungan Anda dengan orang yang akan Anda kunjungi, jika ada?",
    "Bisakah Anda menjelaskan secara singkat jadwal harian Anda selama berada di sini?",
    "Apakah Anda membawa hadiah, dokumen, atau paket untuk orang lain?"
],

        job: [
            "Ceritakan tentang diri Anda.",
            "Mengapa Anda ingin pekerjaan ini?",
            "Apa kelebihan Anda?"
        ],

        friend: [
            "Hai! Apa yang kamu lakukan hari ini?",
            "Apa hobimu?",
            "Film seperti apa yang kamu suka?"
        ],

        basicInterview: [
    "Ceritakan tentang diri Anda.",
    "Anda berasal dari mana?",
    "Apa hobi Anda?",
    "Mengapa Anda belajar bahasa ini?",
    "Apa kelebihan Anda?",
    "Apa kekurangan Anda?",
    "Di mana Anda melihat diri Anda lima tahun lagi?",
    "Apakah Anda punya pertanyaan?"
],

partTimeInterview: [
    "Mengapa Anda ingin bekerja di sini?",
    "Apakah Anda punya pengalaman kerja?",
    "Bisakah Anda bekerja di akhir pekan?",
    "Bagaimana Anda menghadapi pelanggan yang sulit?",
    "Apa yang akan Anda lakukan jika membuat kesalahan?",
    "Mengapa kami harus mempekerjakan Anda?"
],

ieltsInterview: [
    "Apa yang biasanya Anda lakukan di akhir pekan?",
    "Apakah Anda menyukai kota asal Anda?",
    "Jenis musik apa yang Anda sukai?",
    "Apakah Anda lebih suka belajar sendiri atau bersama teman?",
    "Ceritakan perjalanan yang berkesan.",
    "Mengapa orang suka bepergian?",
    "Bagaimana teknologi mengubah komunikasi?",
    "Apakah media sosial bermanfaat?"
],

studyAbroadInterview: [
    "Mengapa Anda ingin belajar di luar negeri?",
    "Mengapa Anda memilih negara ini?",
    "Bagaimana Anda menghadapi culture shock?",
    "Apa tujuan masa depan Anda?",
    "Bagaimana program ini membantu karier Anda?",
    "Tantangan apa yang Anda harapkan di luar negeri?"
],

pressureInterview: [
    "Mengapa kami harus memilih Anda?",
    "Ceritakan kegagalan yang pernah Anda alami.",
    "Bagaimana jika atasan Anda tidak setuju dengan Anda?",
    "Mengapa nilai Anda tidak lebih baik?",
    "Apa kelemahan terbesar Anda?",
    "Apa yang akan Anda lakukan di bawah tekanan?"
]
    }
};