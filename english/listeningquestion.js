const questions = [
//英語A1ゾーン

{
  level: "A1",

  question: "My School Day",

  audio: `I go to school every weekday. My favorite subject is English because it is fun. At lunch time, I eat with my friends. After school, I go home and do my homework.`,

  script: `I go to school every weekday. My favorite subject is English because it is fun. At lunch time, I eat with my friends. After school, I go home and do my homework.`,

  translation: `私は毎週平日に学校へ行きます。好きな教科は英語です。楽しいからです。昼ごはんの時間に友達と食べます。放課後、家に帰って宿題をします。`,

  quiz: [
    {
      q: "What is the person’s favorite subject?",
      options: [
        { text: "English", correct: true },
        { text: "Math", correct: false },
        { text: "Science", correct: false },
        { text: "History", correct: false }
      ]
    },
    {
      q: "Who does the person eat lunch with?",
      options: [
        { text: "Friends", correct: true },
        { text: "Teachers", correct: false },
        { text: "Parents", correct: false },
        { text: "Neighbors", correct: false }
      ]
    },
    {
      q: "What does the person do after school?",
      options: [
        { text: "Homework", correct: true },
        { text: "Play soccer", correct: false },
        { text: "Go shopping", correct: false },
        { text: "Sleep", correct: false }
      ]
    }
  ]
},

{
  
  level: "A1",

  question: "My Best Friend",

  audio: `My best friend is Anna. She is kind and funny. We like to play games and watch movies together. On weekends, we sometimes go to the park.`,

  script: `My best friend is Anna. She is kind and funny. We like to play games and watch movies together. On weekends, we sometimes go to the park.`,

  translation: `私の親友はアンナです。彼女は優しくて面白いです。私たちは一緒にゲームをしたり映画を見たりします。週末には時々公園へ行きます。`,

  quiz: [
    {
      q: "What is the friend’s name?",
      options: [
        { text: "Anna", correct: true },
        { text: "Emma", correct: false },
        { text: "Lucy", correct: false },
        { text: "Kate", correct: false }
      ]
    },
    {
      q: "What do they like to do together?",
      options: [
        { text: "Play games and watch movies", correct: true },
        { text: "Study math", correct: false },
        { text: "Cook dinner", correct: false },
        { text: "Clean the house", correct: false }
      ]
    },
    {
      q: "Where do they sometimes go?",
      options: [
        { text: "The park", correct: true },
        { text: "The hospital", correct: false },
        { text: "The airport", correct: false },
        { text: "The library", correct: false }
      ]
    }
  ]
},


{
  level: "A1",

  question: "My Family",

  audio: `I live with my family. There are four people in my family. My father is a teacher, and my mother is a nurse. I have one brother.`,

  script: `I live with my family. There are four people in my family. My father is a teacher, and my mother is a nurse. I have one brother.`,

  translation: `私は家族と一緒に住んでいます。私の家族は4人です。父は先生で、母は看護師です。私は兄（弟）が1人います。`,

  quiz: [
    {
      q: "How many people are in the family?",
      options: [
        { text: "Four", correct: true },
        { text: "Three", correct: false },
        { text: "Five", correct: false },
        { text: "Six", correct: false }
      ]
    },
    {
      q: "What is the father’s job?",
      options: [
        { text: "Teacher", correct: true },
        { text: "Doctor", correct: false },
        { text: "Driver", correct: false },
        { text: "Chef", correct: false }
      ]
    },
    {
      q: "How many brothers does the speaker have?",
      options: [
        { text: "One", correct: true },
        { text: "Two", correct: false },
        { text: "Three", correct: false },
        { text: "None", correct: false }
      ]
    }
  ]
},

{
  level: "A1",

  question: "My School",

  audio: `My school is near my house. I walk to school every day. My favorite subject is English. I like learning new words.`,

  script: `My school is near my house. I walk to school every day. My favorite subject is English. I like learning new words.`,

  translation: `私の学校は家の近くにあります。私は毎日歩いて学校へ行きます。好きな教科は英語です。私は新しい単語を学ぶのが好きです。`,

  quiz: [
    {
      q: "How does the speaker go to school?",
      options: [
        { text: "Walk", correct: true },
        { text: "Bus", correct: false },
        { text: "Train", correct: false },
        { text: "Bike", correct: false }
      ]
    },
    {
      q: "What is the favorite subject?",
      options: [
        { text: "English", correct: true },
        { text: "Math", correct: false },
        { text: "Science", correct: false },
        { text: "History", correct: false }
      ]
    },
    {
      q: "What does the speaker like learning?",
      options: [
        { text: "New words", correct: true },
        { text: "Songs", correct: false },
        { text: "Sports", correct: false },
        { text: "Maps", correct: false }
      ]
    }
  ]
},

{
  level: "A1",

  question: "My Pet Dog",

  audio: `I have a dog named Max. He is brown and very friendly. Every morning, I take him for a walk.`,

  script: `I have a dog named Max. He is brown and very friendly. Every morning, I take him for a walk.`,

  translation: `私はマックスという犬を飼っています。彼は茶色でとても人懐っこいです。毎朝、私は彼を散歩に連れて行きます。`,

  quiz: [
    {
      q: "What is the dog's name?",
      options: [
        { text: "Max", correct: true },
        { text: "Jack", correct: false },
        { text: "Tom", correct: false },
        { text: "Leo", correct: false }
      ]
    },
    {
      q: "What color is the dog?",
      options: [
        { text: "Brown", correct: true },
        { text: "Black", correct: false },
        { text: "White", correct: false },
        { text: "Gray", correct: false }
      ]
    },
    {
      q: "When does the speaker walk the dog?",
      options: [
        { text: "Every morning", correct: true },
        { text: "Every night", correct: false },
        { text: "On Sundays", correct: false },
        { text: "After lunch", correct: false }
      ]
    }
  ]
},

{
  level: "A1",

  question: "My Hobby",

  audio: `My hobby is reading books. I read for about thirty minutes every day. Adventure stories are my favorite.`,

  script: `My hobby is reading books. I read for about thirty minutes every day. Adventure stories are my favorite.`,

  translation: `私の趣味は読書です。私は毎日30分ほど本を読みます。冒険物語が一番好きです。`,

  quiz: [
    {
      q: "What is the hobby?",
      options: [
        { text: "Reading books", correct: true },
        { text: "Swimming", correct: false },
        { text: "Cooking", correct: false },
        { text: "Drawing", correct: false }
      ]
    },
    {
      q: "How long does the speaker read every day?",
      options: [
        { text: "Thirty minutes", correct: true },
        { text: "Ten minutes", correct: false },
        { text: "One hour", correct: false },
        { text: "Two hours", correct: false }
      ]
    },
    {
      q: "What kind of stories are favorite?",
      options: [
        { text: "Adventure stories", correct: true },
        { text: "Science stories", correct: false },
        { text: "History stories", correct: false },
        { text: "Love stories", correct: false }
      ]
    }
  ]
},

{
  level: "A1",

  question: "Breakfast",

  audio: `I usually eat breakfast at seven o’clock. I often have bread, eggs, and milk. Breakfast gives me energy for the day.`,

  script: `I usually eat breakfast at seven o’clock. I often have bread, eggs, and milk. Breakfast gives me energy for the day.`,

  translation: `私はたいてい7時に朝食を食べます。よくパン、卵、牛乳を食べます。朝食は一日の元気を与えてくれます。`,

  quiz: [
    {
      q: "When does the speaker eat breakfast?",
      options: [
        { text: "At seven o'clock", correct: true },
        { text: "At six o'clock", correct: false },
        { text: "At eight o'clock", correct: false },
        { text: "At nine o'clock", correct: false }
      ]
    },
    {
      q: "What does the speaker often drink?",
      options: [
        { text: "Milk", correct: true },
        { text: "Tea", correct: false },
        { text: "Coffee", correct: false },
        { text: "Juice", correct: false }
      ]
    },
    {
      q: "What does breakfast give?",
      options: [
        { text: "Energy", correct: true },
        { text: "Money", correct: false },
        { text: "Homework", correct: false },
        { text: "Books", correct: false }
      ]
    }
  ]
},

{
  level: "A1",

  question: "My Bicycle",

  audio: `I have a blue bicycle. I ride it to the park after school. Riding a bicycle is fun and healthy.`,

  script: `I have a blue bicycle. I ride it to the park after school. Riding a bicycle is fun and healthy.`,

  translation: `私は青い自転車を持っています。放課後にそれで公園へ行きます。自転車に乗ることは楽しくて健康的です。`,

  quiz: [
    {
      q: "What color is the bicycle?",
      options: [
        { text: "Blue", correct: true },
        { text: "Red", correct: false },
        { text: "Green", correct: false },
        { text: "Yellow", correct: false }
      ]
    },
    {
      q: "Where does the speaker ride it?",
      options: [
        { text: "The park", correct: true },
        { text: "The station", correct: false },
        { text: "The mall", correct: false },
        { text: "The beach", correct: false }
      ]
    },
    {
      q: "How is riding a bicycle?",
      options: [
        { text: "Fun and healthy", correct: true },
        { text: "Difficult and boring", correct: false },
        { text: "Expensive", correct: false },
        { text: "Dangerous", correct: false }
      ]
    }
  ]
},

{
  level: "A1",

  question: "The Weather",

  audio: `Today is sunny and warm. I wear a T-shirt and shorts. My friends and I play soccer outside.`,

  script: `Today is sunny and warm. I wear a T-shirt and shorts. My friends and I play soccer outside.`,

  translation: `今日は晴れて暖かいです。私はTシャツと短パンを着ています。友達と私は外でサッカーをします。`,

  quiz: [
    {
      q: "How is the weather?",
      options: [
        { text: "Sunny and warm", correct: true },
        { text: "Rainy", correct: false },
        { text: "Snowy", correct: false },
        { text: "Windy", correct: false }
      ]
    },
    {
      q: "What does the speaker wear?",
      options: [
        { text: "A T-shirt and shorts", correct: true },
        { text: "A coat", correct: false },
        { text: "A sweater", correct: false },
        { text: "A jacket", correct: false }
      ]
    },
    {
      q: "What do they play?",
      options: [
        { text: "Soccer", correct: true },
        { text: "Baseball", correct: false },
        { text: "Basketball", correct: false },
        { text: "Tennis", correct: false }
      ]
    }
  ]
},

{
  level: "A1",

  question: "My Room",

  audio: `My room is small but clean. There is a bed, a desk, and a bookshelf. I study there every evening.`,

  script: `My room is small but clean. There is a bed, a desk, and a bookshelf. I study there every evening.`,

  translation: `私の部屋は小さいですがきれいです。ベッド、机、本棚があります。私は毎晩そこで勉強します。`,

  quiz: [
    {
      q: "How is the room?",
      options: [
        { text: "Small and clean", correct: true },
        { text: "Large and dirty", correct: false },
        { text: "Dark", correct: false },
        { text: "Noisy", correct: false }
      ]
    },
    {
      q: "What is in the room?",
      options: [
        { text: "A bookshelf", correct: true },
        { text: "A piano", correct: false },
        { text: "A television", correct: false },
        { text: "A sofa", correct: false }
      ]
    },
    {
      q: "When does the speaker study there?",
      options: [
        { text: "Every evening", correct: true },
        { text: "Every morning", correct: false },
        { text: "At noon", correct: false },
        { text: "On weekends only", correct: false }
      ]
    }
  ]
},

{
  level: "A1",

  question: "Shopping",

  audio: `I go shopping with my mother on Saturdays. We buy fruit, vegetables, and bread. I like choosing fresh apples.`,

  script: `I go shopping with my mother on Saturdays. We buy fruit, vegetables, and bread. I like choosing fresh apples.`,

  translation: `私は土曜日に母と買い物へ行きます。私たちは果物、野菜、パンを買います。私は新鮮なリンゴを選ぶのが好きです。`,

  quiz: [
    {
      q: "Who does the speaker go shopping with?",
      options: [
        { text: "Mother", correct: true },
        { text: "Father", correct: false },
        { text: "Brother", correct: false },
        { text: "Friend", correct: false }
      ]
    },
    {
      q: "When do they go shopping?",
      options: [
        { text: "Saturdays", correct: true },
        { text: "Mondays", correct: false },
        { text: "Fridays", correct: false },
        { text: "Sundays", correct: false }
      ]
    },
    {
      q: "What fruit does the speaker like?",
      options: [
        { text: "Apples", correct: true },
        { text: "Bananas", correct: false },
        { text: "Oranges", correct: false },
        { text: "Grapes", correct: false }
      ]
    }
  ]
},

{
  level: "A1",

  question: "My Favorite Season",

  audio: `My favorite season is spring. The weather is nice, and flowers bloom everywhere. I enjoy walking in the park.`,

  script: `My favorite season is spring. The weather is nice, and flowers bloom everywhere. I enjoy walking in the park.`,

  translation: `私の好きな季節は春です。天気が良く、花があちこちで咲きます。私は公園を散歩するのを楽しんでいます。`,

  quiz: [
    {
      q: "What is the favorite season?",
      options: [
        { text: "Spring", correct: true },
        { text: "Summer", correct: false },
        { text: "Autumn", correct: false },
        { text: "Winter", correct: false }
      ]
    },
    {
      q: "What blooms everywhere?",
      options: [
        { text: "Flowers", correct: true },
        { text: "Trees", correct: false },
        { text: "Grass", correct: false },
        { text: "Vegetables", correct: false }
      ]
    },
    {
      q: "What does the speaker enjoy?",
      options: [
        { text: "Walking in the park", correct: true },
        { text: "Swimming", correct: false },
        { text: "Running", correct: false },
        { text: "Fishing", correct: false }
      ]
    }
  ]
},

{
  
  level: "A1",

  question: "A Family Trip",

  audio: `Last Sunday, my family went to the beach. We ate sandwiches and played in the water. The weather was sunny and warm. We had a very good time together.`,

  script: `Last Sunday, my family went to the beach. We ate sandwiches and played in the water. The weather was sunny and warm. We had a very good time together.`,

  translation: `先週の日曜日、家族で海へ行きました。サンドイッチを食べて、水で遊びました。天気は晴れて暖かかったです。家族みんなで楽しい時間を過ごしました。`,

  quiz: [
    {
      q: "Where did the family go?",
      options: [
        { text: "The beach", correct: true },
        { text: "The mountain", correct: false },
        { text: "The zoo", correct: false },
        { text: "The supermarket", correct: false }
      ]
    },
    {
      q: "What did they eat?",
      options: [
        { text: "Sandwiches", correct: true },
        { text: "Pizza", correct: false },
        { text: "Rice", correct: false },
        { text: "Cake", correct: false }
      ]
    },
    {
      q: "What was the weather like?",
      options: [
        { text: "Sunny and warm", correct: true },
        { text: "Cold and rainy", correct: false },
        { text: "Windy", correct: false },
        { text: "Snowy", correct: false }
      ]
    }
  ]
},

{
  
  level: "A1",

  question: "My Birthday",

  audio: `My birthday is in June. Every year, my family gives me a cake. I like chocolate cake very much. We eat dinner together and take many pictures.`,

  script: `My birthday is in June. Every year, my family gives me a cake. I like chocolate cake very much. We eat dinner together and take many pictures.`,

  translation: `私の誕生日は6月です。毎年、家族がケーキをくれます。私はチョコレートケーキがとても好きです。みんなで夕食を食べて、たくさん写真を撮ります。`,

  quiz: [
    {
      q: "When is the person’s birthday?",
      options: [
        { text: "In June", correct: true },
        { text: "In July", correct: false },
        { text: "In January", correct: false },
        { text: "In December", correct: false }
      ]
    },
    {
      q: "What cake does the person like?",
      options: [
        { text: "Chocolate cake", correct: true },
        { text: "Strawberry cake", correct: false },
        { text: "Cheese cake", correct: false },
        { text: "Apple cake", correct: false }
      ]
    },
    {
      q: "What does the family do together?",
      options: [
        { text: "Eat dinner and take pictures", correct: true },
        { text: "Go to school", correct: false },
        { text: "Play soccer", correct: false },
        { text: "Go shopping", correct: false }
      ]
    }
  ]
},

{
  
  level: "A1",

  question: "Animals at the Zoo",

  audio: `I went to the zoo with my brother. We saw lions, monkeys, and elephants. My favorite animal was the elephant because it was very big. We had a fun day.`,

  script: `I went to the zoo with my brother. We saw lions, monkeys, and elephants. My favorite animal was the elephant because it was very big. We had a fun day.`,

  translation: `私は兄弟と動物園へ行きました。ライオン、サル、ゾウを見ました。とても大きかったので、私のお気に入りはゾウでした。楽しい1日でした。`,

  quiz: [
    {
      q: "Who went to the zoo?",
      options: [
        { text: "The person and brother", correct: true },
        { text: "The person and teacher", correct: false },
        { text: "Only the brother", correct: false },
        { text: "The whole class", correct: false }
      ]
    },
    {
      q: "What animal was the favorite?",
      options: [
        { text: "The elephant", correct: true },
        { text: "The lion", correct: false },
        { text: "The monkey", correct: false },
        { text: "The bird", correct: false }
      ]
    },
    {
      q: "Why did the person like the elephant?",
      options: [
        { text: "Because it was very big", correct: true },
        { text: "Because it was small", correct: false },
        { text: "Because it could fly", correct: false },
        { text: "Because it was fast", correct: false }
      ]
    }
  ]
},
{
  
  level: "A1",

  question: "My Morning",

  audio: `I wake up at seven o’clock every morning. I eat breakfast with my family and drink coffee. Then, I go to school by bus. I like mornings because they are quiet and calm.`,

  script: `I wake up at seven o’clock every morning. I eat breakfast with my family and drink coffee. Then, I go to school by bus. I like mornings because they are quiet and calm.`,

  translation: `私は毎朝7時に起きます。家族と朝ごはんを食べ、コーヒーを飲みます。その後、バスで学校へ行きます。朝は静かで落ち着いているので好きです。`,

  quiz: [
    {
      q: "What time does the person wake up?",
      options: [
        { text: "Seven o’clock", correct: true },
        { text: "Nine o’clock", correct: false },
        { text: "Ten o’clock", correct: false },
        { text: "Five o’clock", correct: false }
      ]
    },
    {
      q: "How does the person go to school?",
      options: [
        { text: "By bus", correct: true },
        { text: "By train", correct: false },
        { text: "By bike", correct: false },
        { text: "On foot", correct: false }
      ]
    },
    {
      q: "Why does the person like mornings?",
      options: [
        { text: "They are quiet and calm", correct: true },
        { text: "They are noisy", correct: false },
        { text: "They are long", correct: false },
        { text: "They are cold", correct: false }
      ]
    }
  ]
},

{
  
  level: "A1",

  question: "My Favorite Food",

  audio: `My favorite food is pizza. I like pizza because it has cheese and tomato sauce. I usually eat pizza with my friends on weekends. We are always happy when we eat together.`,

  script: `My favorite food is pizza. I like pizza because it has cheese and tomato sauce. I usually eat pizza with my friends on weekends. We are always happy when we eat together.`,

  translation: `私の好きな食べ物はピザです。チーズとトマトソースがあるので好きです。私は週末によく友達とピザを食べます。一緒に食べるといつも楽しいです。`,

  quiz: [
    {
      q: "What is the person’s favorite food?",
      options: [
        { text: "Pizza", correct: true },
        { text: "Rice", correct: false },
        { text: "Soup", correct: false },
        { text: "Bread", correct: false }
      ]
    },
    {
      q: "Who does the person eat with?",
      options: [
        { text: "Friends", correct: true },
        { text: "Teachers", correct: false },
        { text: "Doctors", correct: false },
        { text: "Neighbors", correct: false }
      ]
    },
    {
      q: "When does the person eat pizza?",
      options: [
        { text: "On weekends", correct: true },
        { text: "On Monday", correct: false },
        { text: "Every morning", correct: false },
        { text: "At school", correct: false }
      ]
    }
  ]
},

{
  
  level: "A1",

  question: "My Pet",

  audio: `I have a small dog. His name is Max. He is brown and very friendly. Every afternoon, I walk with him in the park. Max likes to run and play.`,

  script: `I have a small dog. His name is Max. He is brown and very friendly. Every afternoon, I walk with him in the park. Max likes to run and play.`,

  translation: `私は小さい犬を飼っています。名前はマックスです。茶色でとても人懐っこいです。毎日の午後、公園を一緒に散歩します。マックスは走ったり遊んだりするのが好きです。`,

  quiz: [
    {
      q: "What pet does the person have?",
      options: [
        { text: "A dog", correct: true },
        { text: "A cat", correct: false },
        { text: "A bird", correct: false },
        { text: "A fish", correct: false }
      ]
    },
    {
      q: "What color is Max?",
      options: [
        { text: "Brown", correct: true },
        { text: "Black", correct: false },
        { text: "White", correct: false },
        { text: "Gray", correct: false }
      ]
    },
    {
      q: "Where do they walk?",
      options: [
        { text: "In the park", correct: true },
        { text: "At school", correct: false },
        { text: "In the house", correct: false },
        { text: "At the store", correct: false }
      ]
    }
  ]
},

{
  
  level: "A1",

  question: "A Rainy Day",

  audio: `Today, it is raining outside. I stay at home and read a book. My mother makes hot soup for lunch. I like rainy days because I can relax.`,

  script: `Today, it is raining outside. I stay at home and read a book. My mother makes hot soup for lunch. I like rainy days because I can relax.`,

  translation: `今日は外で雨が降っています。私は家にいて本を読みます。母がお昼に温かいスープを作ってくれます。リラックスできるので雨の日が好きです。`,

  quiz: [
    {
      q: "What is the weather like?",
      options: [
        { text: "Rainy", correct: true },
        { text: "Sunny", correct: false },
        { text: "Snowy", correct: false },
        { text: "Windy", correct: false }
      ]
    },
    {
      q: "What does the person do at home?",
      options: [
        { text: "Read a book", correct: true },
        { text: "Play soccer", correct: false },
        { text: "Go shopping", correct: false },
        { text: "Study math", correct: false }
      ]
    },
    {
      q: "What food does the mother make?",
      options: [
        { text: "Soup", correct: true },
        { text: "Pizza", correct: false },
        { text: "Cake", correct: false },
        { text: "Rice", correct: false }
      ]
    }
  ]
},

{
  
  level: "A1",

  question: "At the Supermarket",

  audio: `I go to the supermarket with my father. We buy apples, milk, and bread. My father likes fruit, and I like chocolate. After shopping, we go home.`,

  script: `I go to the supermarket with my father. We buy apples, milk, and bread. My father likes fruit, and I like chocolate. After shopping, we go home.`,

  translation: `私は父とスーパーへ行きます。リンゴ、牛乳、パンを買います。父は果物が好きで、私はチョコレートが好きです。買い物の後、家に帰ります。`,

  quiz: [
    {
      q: "Who goes to the supermarket?",
      options: [
        { text: "The person and father", correct: true },
        { text: "The person and teacher", correct: false },
        { text: "Only the father", correct: false },
        { text: "The whole class", correct: false }
      ]
    },
    {
      q: "What do they buy?",
      options: [
        { text: "Apples, milk, and bread", correct: true },
        { text: "Rice and fish", correct: false },
        { text: "Pizza and juice", correct: false },
        { text: "Books", correct: false }
      ]
    },
    {
      q: "What does the person like?",
      options: [
        { text: "Chocolate", correct: true },
        { text: "Fruit", correct: false },
        { text: "Milk", correct: false },
        { text: "Bread", correct: false }
      ]
    }
  ]
},


//英語A２ゾーン
  {
  
  level: "A2",

  question: "Bakery Luck",

  audio: `Last Friday, Mia went to a small bakery after school. She wanted to buy some bread, but she saw an old woman drop her bag outside. Mia quickly picked it up and gave it back. The woman smiled and gave Mia a free cookie to say thank you.`,

  script: `Last Friday, Mia went to a small bakery after school. She wanted to buy some bread, but she saw an old woman drop her bag outside. Mia quickly picked it up and gave it back. The woman smiled and gave Mia a free cookie to say thank you.`,

  translation: `先週の金曜日、ミアは学校のあと小さなパン屋に行きました。パンを買いたかったのですが、外でおばあさんがバッグを落とすのを見ました。ミアはすぐに拾って返しました。女性は笑顔で、お礼にクッキーをくれました。`,

  quiz: [
    {
      q: "Where did Mia go?",
      options: [
        { text: "A bakery", correct: true },
        { text: "A library", correct: false },
        { text: "A park", correct: false },
        { text: "A school", correct: false }
      ]
    },
    {
      q: "What did Mia do?",
      options: [
        { text: "She returned a bag", correct: true },
        { text: "She bought a dog", correct: false },
        { text: "She lost her wallet", correct: false },
        { text: "She cleaned the bakery", correct: false }
      ]
    },
    {
      q: "What did the woman give Mia?",
      options: [
        { text: "A cookie", correct: true },
        { text: "A book", correct: false },
        { text: "Some money", correct: false },
        { text: "A sandwich", correct: false }
      ]
    }
  ]
},

{
  
  level: "A2",

  question: "Lost Boy",

  audio: `One afternoon, Jake went to the park to play soccer. While kicking the ball, he saw a little boy crying near a bench. The boy could not find his mother. Jake helped him look for her, and soon they found her near the playground.`,

  script: `One afternoon, Jake went to the park to play soccer. While kicking the ball, he saw a little boy crying near a bench. The boy could not find his mother. Jake helped him look for her, and soon they found her near the playground.`,

  translation: `ある午後、ジェイクはサッカーをするために公園へ行きました。ボールを蹴っていると、ベンチの近くで小さな男の子が泣いていました。男の子はお母さんを見つけられませんでした。ジェイクは探すのを手伝い、すぐに遊び場の近くで見つけました。`,

  quiz: [
    {
      q: "Why did Jake go to the park?",
      options: [
        { text: "To play soccer", correct: true },
        { text: "To study", correct: false },
        { text: "To buy food", correct: false },
        { text: "To meet a teacher", correct: false }
      ]
    },
    {
      q: "Who was crying?",
      options: [
        { text: "A little boy", correct: true },
        { text: "Jake", correct: false },
        { text: "A girl", correct: false },
        { text: "A dog", correct: false }
      ]
    },
    {
      q: "What did Jake do?",
      options: [
        { text: "He helped find the boy's mother", correct: true },
        { text: "He went home", correct: false },
        { text: "He played alone", correct: false },
        { text: "He called the police", correct: false }
      ]
    }
  ]
},

{
  
  level: "A2",

  question: "Chokolate Memory",

  audio: `Last weekend, Anna visited her grandmother. They baked a chocolate cake together in the kitchen. At first, Anna dropped some flour on the floor, and they both laughed. In the evening, they ate the cake with tea.`,

  script: `Last weekend, Anna visited her grandmother. They baked a chocolate cake together in the kitchen. At first, Anna dropped some flour on the floor, and they both laughed. In the evening, they ate the cake with tea.`,

  translation: `先週末、アンナは祖母を訪ねました。二人でキッチンでチョコレートケーキを作りました。最初にアンナが小麦粉を床に落としてしまい、二人で笑いました。夜には紅茶と一緒にケーキを食べました。`,

  quiz: [
    {
      q: "Who did Anna visit?",
      options: [
        { text: "Her grandmother", correct: true },
        { text: "Her teacher", correct: false },
        { text: "Her friend", correct: false },
        { text: "Her cousin", correct: false }
      ]
    },
    {
      q: "What did they make?",
      options: [
        { text: "A chocolate cake", correct: true },
        { text: "Pizza", correct: false },
        { text: "Cookies", correct: false },
        { text: "Bread", correct: false }
      ]
    },
    {
      q: "What happened in the kitchen?",
      options: [
        { text: "Anna dropped flour", correct: true },
        { text: "The cake burned", correct: false },
        { text: "The lights went out", correct: false },
        { text: "They broke a plate", correct: false }
      ]
    }
  ]
},

{
  level: "A2",

  question: "A Busy Monday",

  audio: `Every Monday, I wake up at six o’clock because I have a busy schedule. After eating breakfast, I take the bus to school. My classes start at eight thirty and finish at three thirty. After school, I go to a basketball club and practice for two hours. When I get home, I do my homework and then relax by watching videos online.`,

  script: `Every Monday, I wake up at six o’clock because I have a busy schedule. After eating breakfast, I take the bus to school. My classes start at eight thirty and finish at three thirty. After school, I go to a basketball club and practice for two hours. When I get home, I do my homework and then relax by watching videos online.`,

  translation: `私は毎週月曜日、忙しい予定があるので6時に起きます。朝食を食べた後、バスで学校へ行きます。授業は8時30分に始まり、3時30分に終わります。放課後はバスケットボール部に行き、2時間練習します。家に帰ったら宿題をして、その後オンライン動画を見てくつろぎます。`,

  quiz: [
    {
      q: "Why does the speaker wake up at six?",
      options: [
        { text: "Because the schedule is busy", correct: true },
        { text: "Because school starts at six", correct: false },
        { text: "Because of a part-time job", correct: false },
        { text: "Because of a trip", correct: false }
      ]
    },
    {
      q: "How does the speaker go to school?",
      options: [
        { text: "By bus", correct: true },
        { text: "By train", correct: false },
        { text: "By bicycle", correct: false },
        { text: "On foot", correct: false }
      ]
    },
    {
      q: "What does the speaker do after homework?",
      options: [
        { text: "Watch videos online", correct: true },
        { text: "Read books", correct: false },
        { text: "Cook dinner", correct: false },
        { text: "Go shopping", correct: false }
      ]
    }
  ]
},

{
  level: "A2",

  question: "My First Part-Time Job",

  audio: `Last year, I started my first part-time job at a small bakery near my house. I worked there every Saturday afternoon. My main tasks were serving customers, cleaning tables, and putting bread on the shelves. At first, I was nervous because I had never worked before, but after a few weeks, I became more confident and enjoyed talking with customers.`,

  script: `Last year, I started my first part-time job at a small bakery near my house. I worked there every Saturday afternoon. My main tasks were serving customers, cleaning tables, and putting bread on the shelves. At first, I was nervous because I had never worked before, but after a few weeks, I became more confident and enjoyed talking with customers.`,

  translation: `昨年、私は家の近くの小さなパン屋で初めてのアルバイトを始めました。毎週土曜日の午後に働きました。主な仕事は接客、テーブル掃除、パンを棚に並べることでした。最初は働いた経験がなかったので緊張していましたが、数週間後には自信がつき、お客さんと話すことを楽しめるようになりました。`,

  quiz: [
    {
      q: "Where did the speaker work?",
      options: [
        { text: "At a bakery", correct: true },
        { text: "At a library", correct: false },
        { text: "At a hotel", correct: false },
        { text: "At a supermarket", correct: false }
      ]
    },
    {
      q: "When did the speaker work?",
      options: [
        { text: "Every Saturday afternoon", correct: true },
        { text: "Every morning", correct: false },
        { text: "Every Sunday", correct: false },
        { text: "Only during summer", correct: false }
      ]
    },
    {
      q: "How did the speaker feel after a few weeks?",
      options: [
        { text: "More confident", correct: true },
        { text: "More nervous", correct: false },
        { text: "More tired", correct: false },
        { text: "More bored", correct: false }
      ]
    }
  ]
},

{
  level: "A2",

  question: "A Trip to Kyoto",

  audio: `Last spring, my family and I traveled to Kyoto for three days. We visited many famous temples and took a lot of pictures. One day, we rented bicycles and rode around the city. The weather was warm and sunny, so it was easy to enjoy sightseeing. My favorite place was a beautiful temple surrounded by trees and flowers.`,

  script: `Last spring, my family and I traveled to Kyoto for three days. We visited many famous temples and took a lot of pictures. One day, we rented bicycles and rode around the city. The weather was warm and sunny, so it was easy to enjoy sightseeing. My favorite place was a beautiful temple surrounded by trees and flowers.`,

  translation: `昨年の春、家族と私は3日間京都へ旅行しました。多くの有名な寺院を訪れ、たくさん写真を撮りました。ある日、自転車を借りて市内を回りました。天気は暖かく晴れていたので観光を楽しみやすかったです。私のお気に入りは木や花に囲まれた美しい寺院でした。`,

  quiz: [
    {
      q: "How long was the trip?",
      options: [
        { text: "Three days", correct: true },
        { text: "Two days", correct: false },
        { text: "One week", correct: false },
        { text: "One day", correct: false }
      ]
    },
    {
      q: "What did they rent?",
      options: [
        { text: "Bicycles", correct: true },
        { text: "Cars", correct: false },
        { text: "Boats", correct: false },
        { text: "Scooters", correct: false }
      ]
    },
    {
      q: "Why was sightseeing easy?",
      options: [
        { text: "Because the weather was warm and sunny", correct: true },
        { text: "Because it was winter", correct: false },
        { text: "Because there were no people", correct: false },
        { text: "Because they stayed indoors", correct: false }
      ]
    }
  ]
},

{
  level: "A2",

  question: "Learning English Online",

  audio: `I have been studying English online for about a year. Every evening, I spend thirty minutes watching English videos and another thirty minutes reviewing vocabulary. Sometimes I join online speaking sessions and talk with people from different countries. Although I still make mistakes, I can understand much more English than before.`,

  script: `I have been studying English online for about a year. Every evening, I spend thirty minutes watching English videos and another thirty minutes reviewing vocabulary. Sometimes I join online speaking sessions and talk with people from different countries. Although I still make mistakes, I can understand much more English than before.`,

  translation: `私は約1年間オンラインで英語を勉強しています。毎晩30分英語動画を見て、さらに30分単語を復習します。時々オンライン会話に参加して、さまざまな国の人と話します。まだ間違いはしますが、以前よりずっと多くの英語を理解できるようになりました。`,

  quiz: [
    {
      q: "How long has the speaker studied English online?",
      options: [
        { text: "About a year", correct: true },
        { text: "About a month", correct: false },
        { text: "About a week", correct: false },
        { text: "About five years", correct: false }
      ]
    },
    {
      q: "What does the speaker do in speaking sessions?",
      options: [
        { text: "Talk with people from different countries", correct: true },
        { text: "Play games", correct: false },
        { text: "Watch movies", correct: false },
        { text: "Teach English", correct: false }
      ]
    },
    {
      q: "What has improved?",
      options: [
        { text: "English understanding", correct: true },
        { text: "Driving skills", correct: false },
        { text: "Cooking skills", correct: false },
        { text: "Drawing skills", correct: false }
      ]
    }
  ]
},

{
  level: "A2",

  question: "Healthy Habits",

  audio: `A few months ago, I decided to live a healthier life. Now I go for a walk every morning before breakfast and try to eat more vegetables. I also drink more water and spend less time using my phone at night. These small changes have helped me feel more energetic during the day.`,

  script: `A few months ago, I decided to live a healthier life. Now I go for a walk every morning before breakfast and try to eat more vegetables. I also drink more water and spend less time using my phone at night. These small changes have helped me feel more energetic during the day.`,

  translation: `数か月前、私はもっと健康的な生活を送ることを決めました。今では毎朝朝食前に散歩し、野菜をより多く食べるようにしています。また、水を多く飲み、夜はスマホを使う時間を減らしています。こうした小さな変化のおかげで日中元気に過ごせるようになりました。`,

  quiz: [
    {
      q: "When does the speaker walk?",
      options: [
        { text: "Before breakfast", correct: true },
        { text: "After dinner", correct: false },
        { text: "At noon", correct: false },
        { text: "Before bed", correct: false }
      ]
    },
    {
      q: "What does the speaker try to eat more of?",
      options: [
        { text: "Vegetables", correct: true },
        { text: "Candy", correct: false },
        { text: "Bread", correct: false },
        { text: "Cake", correct: false }
      ]
    },
    {
      q: "What is the result of these changes?",
      options: [
        { text: "More energy", correct: true },
        { text: "More homework", correct: false },
        { text: "More stress", correct: false },
        { text: "More expenses", correct: false }
      ]
    }
  ]
},

{
  level: "A2",

  question: "My Favorite Restaurant",

  audio: `There is a small restaurant near my house that I visit with my family once or twice a month. The restaurant serves many kinds of pasta and pizza. My favorite dish is seafood pasta because it is delicious and not too expensive. The staff are always friendly, and the atmosphere is comfortable.`,

  script: `There is a small restaurant near my house that I visit with my family once or twice a month. The restaurant serves many kinds of pasta and pizza. My favorite dish is seafood pasta because it is delicious and not too expensive. The staff are always friendly, and the atmosphere is comfortable.`,

  translation: `家の近くに小さなレストランがあり、私は月に1〜2回家族と行きます。その店ではさまざまなパスタやピザを提供しています。私のお気に入りはシーフードパスタです。おいしくてそれほど高くないからです。店員はいつも親切で、雰囲気も快適です。`,

  quiz: [
    {
      q: "How often does the speaker visit the restaurant?",
      options: [
        { text: "Once or twice a month", correct: true },
        { text: "Every day", correct: false },
        { text: "Once a year", correct: false },
        { text: "Every weekend", correct: false }
      ]
    },
    {
      q: "What is the speaker's favorite dish?",
      options: [
        { text: "Seafood pasta", correct: true },
        { text: "Pizza", correct: false },
        { text: "Salad", correct: false },
        { text: "Hamburger", correct: false }
      ]
    },
    {
      q: "How are the staff?",
      options: [
        { text: "Friendly", correct: true },
        { text: "Busy", correct: false },
        { text: "Strict", correct: false },
        { text: "Quiet", correct: false }
      ]
    }
  ]
},

{
  level: "A2",

  question: "My Weekend",

  audio: `Last weekend, I spent most of my time at home because it was raining outside. On Saturday, I cleaned my room and organized my books. On Sunday, I watched a movie with my brother and cooked dinner with my parents. Even though I stayed at home, I had a relaxing and enjoyable weekend.`,

  script: `Last weekend, I spent most of my time at home because it was raining outside. On Saturday, I cleaned my room and organized my books. On Sunday, I watched a movie with my brother and cooked dinner with my parents. Even though I stayed at home, I had a relaxing and enjoyable weekend.`,

  translation: `先週末は外で雨が降っていたので、ほとんどの時間を家で過ごしました。土曜日は部屋を掃除し、本を整理しました。日曜日は兄弟と映画を見て、両親と夕食を作りました。家にいましたが、リラックスして楽しい週末でした。`,

  quiz: [
    {
      q: "Why did the speaker stay home?",
      options: [
        { text: "Because it was raining", correct: true },
        { text: "Because of homework", correct: false },
        { text: "Because of illness", correct: false },
        { text: "Because of work", correct: false }
      ]
    },
    {
      q: "What did the speaker do on Saturday?",
      options: [
        { text: "Cleaned the room", correct: true },
        { text: "Watched a movie", correct: false },
        { text: "Went shopping", correct: false },
        { text: "Played soccer", correct: false }
      ]
    },
    {
      q: "How was the weekend?",
      options: [
        { text: "Relaxing and enjoyable", correct: true },
        { text: "Boring", correct: false },
        { text: "Stressful", correct: false },
        { text: "Busy", correct: false }
      ]
    }
  ]
},

{
  level: "A2",

  question: "Using Social Media",

  audio: `Many of my friends use social media every day. I also use it to keep in touch with friends and learn about events. However, I try not to spend too much time online because I want to focus on studying and other hobbies. Setting a time limit helps me use social media more responsibly.`,

  script: `Many of my friends use social media every day. I also use it to keep in touch with friends and learn about events. However, I try not to spend too much time online because I want to focus on studying and other hobbies. Setting a time limit helps me use social media more responsibly.`,

  translation: `私の友人の多くは毎日SNSを利用しています。私も友達と連絡を取ったり、イベント情報を知ったりするために使います。しかし勉強や他の趣味に集中したいので、使いすぎないようにしています。時間制限を設けることで、より責任を持って利用できます。`,

  quiz: [
    {
      q: "Why does the speaker use social media?",
      options: [
        { text: "To keep in touch with friends", correct: true },
        { text: "To play sports", correct: false },
        { text: "To cook meals", correct: false },
        { text: "To travel", correct: false }
      ]
    },
    {
      q: "Why does the speaker avoid spending too much time online?",
      options: [
        { text: "To focus on studying and hobbies", correct: true },
        { text: "Because of internet problems", correct: false },
        { text: "Because it is expensive", correct: false },
        { text: "Because friends dislike it", correct: false }
      ]
    },
    {
      q: "What helps the speaker?",
      options: [
        { text: "Setting a time limit", correct: true },
        { text: "Buying a new phone", correct: false },
        { text: "Deleting all apps", correct: false },
        { text: "Studying at night", correct: false }
      ]
    }
  ]
},

{
  level: "A2",

  question: "A School Festival",

  audio: `Last autumn, my school held a festival that attracted many visitors. My classmates and I prepared a small café where we sold drinks and snacks. We spent several weeks planning everything and decorating the classroom. Although we were tired at the end of the day, we were happy because many people enjoyed our café.`,

  script: `Last autumn, my school held a festival that attracted many visitors. My classmates and I prepared a small café where we sold drinks and snacks. We spent several weeks planning everything and decorating the classroom. Although we were tired at the end of the day, we were happy because many people enjoyed our café.`,

  translation: `昨年の秋、学校で文化祭が開かれ、多くの来場者が訪れました。クラスメートと私は飲み物や軽食を販売する小さなカフェを準備しました。数週間かけて計画し、教室を飾り付けました。一日の終わりには疲れていましたが、多くの人が楽しんでくれたので嬉しかったです。`,

  quiz: [
    {
      q: "What did the students prepare?",
      options: [
        { text: "A small café", correct: true },
        { text: "A library", correct: false },
        { text: "A museum", correct: false },
        { text: "A sports team", correct: false }
      ]
    },
    {
      q: "What did they sell?",
      options: [
        { text: "Drinks and snacks", correct: true },
        { text: "Books", correct: false },
        { text: "Clothes", correct: false },
        { text: "Flowers", correct: false }
      ]
    },
    {
      q: "Why were they happy?",
      options: [
        { text: "Many people enjoyed the café", correct: true },
        { text: "They won a prize", correct: false },
        { text: "School ended early", correct: false },
        { text: "They had no homework", correct: false }
      ]
    }
  ]
},

{
  level: "A2",

  question: "A New Language",

  audio: `This year, I started learning French because I am interested in foreign languages and cultures. At first, pronunciation was difficult, but I practiced every day by listening to podcasts and repeating sentences. Now I can introduce myself and have simple conversations. Learning a new language takes time, but it is very rewarding.`,

  script: `This year, I started learning French because I am interested in foreign languages and cultures. At first, pronunciation was difficult, but I practiced every day by listening to podcasts and repeating sentences. Now I can introduce myself and have simple conversations. Learning a new language takes time, but it is very rewarding.`,

  translation: `今年、私は外国語や文化に興味があるのでフランス語の学習を始めました。最初は発音が難しかったですが、毎日ポッドキャストを聞き、文を繰り返して練習しました。今では自己紹介や簡単な会話ができます。新しい言語の学習には時間がかかりますが、とてもやりがいがあります。`,

  quiz: [
    {
      q: "Why did the speaker start learning French?",
      options: [
        { text: "Interest in languages and cultures", correct: true },
        { text: "A school requirement", correct: false },
        { text: "A job", correct: false },
        { text: "A trip tomorrow", correct: false }
      ]
    },
    {
      q: "What was difficult at first?",
      options: [
        { text: "Pronunciation", correct: true },
        { text: "Grammar", correct: false },
        { text: "Writing", correct: false },
        { text: "Reading", correct: false }
      ]
    },
    {
      q: "What can the speaker do now?",
      options: [
        { text: "Have simple conversations", correct: true },
        { text: "Write novels", correct: false },
        { text: "Teach French", correct: false },
        { text: "Translate books", correct: false }
      ]
    }
  ]
},

{
  
  level: "A2",

  question: "Hungry Day",

  audio: `One morning, Leo forgot his lunch at home. At school, he felt sad because he was hungry. During lunch time, his friend Sam shared his sandwich with him. Leo thanked Sam and promised to help him someday.`,

  script: `One morning, Leo forgot his lunch at home. At school, he felt sad because he was hungry. During lunch time, his friend Sam shared his sandwich with him. Leo thanked Sam and promised to help him someday.`,

  translation: `ある朝、レオは家にお弁当を忘れてしまいました。学校でお腹が空いて悲しい気持ちになりました。昼休みに友達のサムがサンドイッチを分けてくれました。レオは感謝し、いつか助けると約束しました。`,

  quiz: [
    {
      q: "What did Leo forget?",
      options: [
        { text: "His lunch", correct: true },
        { text: "His homework", correct: false },
        { text: "His bag", correct: false },
        { text: "His shoes", correct: false }
      ]
    },
    {
      q: "Why was Leo sad?",
      options: [
        { text: "He was hungry", correct: true },
        { text: "He was sick", correct: false },
        { text: "He lost his book", correct: false },
        { text: "He was late", correct: false }
      ]
    },
    {
      q: "What did Sam do?",
      options: [
        { text: "He shared his sandwich", correct: true },
        { text: "He bought lunch", correct: false },
        { text: "He went home", correct: false },
        { text: "He played soccer", correct: false }
      ]
    }
  ]
},

  {
  
  level: "A2",

  question: "Tom with chicken",

  audio: `One morning, Tom was late for school. He ran to the bus stop very fast. When the bus came, he sat down and looked next to him. There was a chicken on the seat!

The chicken looked at Tom and made a funny sound. Tom was very surprised. A woman said, “Oh, sorry! This is my chicken, Lucy. She likes bus rides.”

At school, Tom told his friends, but nobody believed him. Then, through the window… he saw Lucy the chicken again!`,

  script: `One morning, Tom was late for school. He ran to the bus stop very fast. When the bus came, he sat down and looked next to him. There was a chicken on the seat!

The chicken looked at Tom and made a funny sound. Tom was very surprised. A woman said, “Oh, sorry! This is my chicken, Lucy. She likes bus rides.”

At school, Tom told his friends, but nobody believed him. Then, through the window… he saw Lucy the chicken again!`,

  translation: `ある朝、トムは学校に遅れそうでした。彼はとても速くバス停まで走りました。バスが来ると、彼は座って隣を見ました。すると、席にニワトリがいました！

ニワトリはトムを見て、おもしろい鳴き声を出しました。トムはとても驚きました。女性が「ごめんなさい！この子は私のニワトリのルーシーです。バスに乗るのが好きなんです」と言いました。

学校でトムは友達に話しましたが、誰も信じませんでした。しかしその後、窓の外を見ると…またニワトリのルーシーがいました！`,

  quiz: [
    {
      q: "Why was Tom running?",
      options: [
        { text: "He was late for school", correct: true },
        { text: "He wanted to exercise", correct: false },
        { text: "He missed his friend", correct: false },
        { text: "He was chasing a dog", correct: false }
      ]
    },
    {
      q: "What was on the bus seat?",
      options: [
        { text: "A chicken", correct: true },
        { text: "A cat", correct: false },
        { text: "A bag", correct: false },
        { text: "A book", correct: false }
      ]
    },
    {
      q: "Why were Tom’s friends surprised?",
      options: [
        { text: "They did not believe his story", correct: true },
        { text: "Tom was very late", correct: false },
        { text: "Lucy came to school", correct: false },
        { text: "Tom forgot his homework", correct: false }
      ]
    }
  ]
},

  {
  
  level: "A2",

  question: "Emma's weekend",

  audio: `Last Saturday, Emma wanted to stay home and relax. But on the way to a café, she saw a small wallet on the road. There was some money and an ID card inside. Emma took the wallet to the owner's house. The owner was very happy and thanked her. Emma felt good because she helped someone.`,

  script: `Last Saturday, Emma wanted to stay home and relax. But on the way to a café, she saw a small wallet on the road. There was some money and an ID card inside. Emma took the wallet to the owner's house. The owner was very happy and thanked her. Emma felt good because she helped someone.`,

  translation: `先週の土曜日、エマは家でゆっくりしたいと思っていました。しかし、カフェへ行く途中で小さな財布を道で見つけました。中には少しのお金と身分証が入っていました。エマは財布を持ち主の家へ届けました。持ち主はとても喜び、感謝しました。エマは人助けができて嬉しくなりました。`,

  quiz: [
    {
      q: "What did Emma find?",
      options: [
        { text: "A wallet", correct: true },
        { text: "A phone", correct: false },
        { text: "A book", correct: false },
        { text: "A bag", correct: false }
      ]
    },
    {
      q: "Where did Emma take the wallet?",
      options: [
        { text: "To the owner's house", correct: true },
        { text: "To school", correct: false },
        { text: "To a shop", correct: false },
        { text: "To her friend", correct: false }
      ]
    },
    {
      q: "How did Emma feel after helping?",
      options: [
        { text: "Good", correct: true },
        { text: "Sad", correct: false },
        { text: "Tired", correct: false },
        { text: "Afraid", correct: false }
      ]
    }
  ]
},

{
  
  level: "A2",

  question: "Lost Girl",

  audio: `Yesterday, Emily went shopping with her father. While walking in the store, she found a small toy on the floor. They asked a worker if someone lost it. Later, a little girl came and happily took the toy back.`,

  script: `Yesterday, Emily went shopping with her father. While walking in the store, she found a small toy on the floor. They asked a worker if someone lost it. Later, a little girl came and happily took the toy back.`,

  translation: `昨日、エミリーはお父さんと買い物に行きました。店の中を歩いていると、床に小さなおもちゃを見つけました。誰かがなくしたのか店員に聞きました。その後、小さな女の子が来て、嬉しそうにおもちゃを受け取りました。`,

  quiz: [
    {
      q: "Who did Emily go shopping with?",
      options: [
        { text: "Her father", correct: true },
        { text: "Her mother", correct: false },
        { text: "Her friend", correct: false },
        { text: "Her teacher", correct: false }
      ]
    },
    {
      q: "What did Emily find?",
      options: [
        { text: "A toy", correct: true },
        { text: "A wallet", correct: false },
        { text: "A phone", correct: false },
        { text: "A book", correct: false }
      ]
    },
    {
      q: "Who got the toy back?",
      options: [
        { text: "A little girl", correct: true },
        { text: "Emily", correct: false },
        { text: "A worker", correct: false },
        { text: "Her father", correct: false }
      ]
    }
  ]
},
  // 英語B１ゾーン

  {
  level: "B1",

  question: "Studying Abroad",

  audio: `Many students dream of studying abroad because it gives them the opportunity to experience different cultures and improve their language skills. However, living in another country is not always easy. Students may feel homesick at first and have difficulty adapting to a new environment. Despite these challenges, studying abroad often helps people become more independent and open-minded.`,

  script: `Many students dream of studying abroad because it gives them the opportunity to experience different cultures and improve their language skills. However, living in another country is not always easy. Students may feel homesick at first and have difficulty adapting to a new environment. Despite these challenges, studying abroad often helps people become more independent and open-minded.`,

  translation: `多くの学生は留学を夢見ています。なぜなら異文化を体験し、語学力を向上させる機会を得られるからです。しかし、外国で生活することは簡単ではありません。最初はホームシックになったり、新しい環境に適応するのが難しかったりします。それでも、留学は人をより自立させ、視野を広げる助けになります。`,

  quiz: [
    {
      q: "What is one benefit of studying abroad?",
      options: [
        { text: "Experiencing different cultures", correct: true },
        { text: "Avoiding all difficulties", correct: false },
        { text: "Earning a lot of money", correct: false },
        { text: "Finishing school earlier", correct: false }
      ]
    },
    {
      q: "What problem may students face?",
      options: [
        { text: "Homesickness", correct: true },
        { text: "No classes", correct: false },
        { text: "Too much free time", correct: false },
        { text: "No new experiences", correct: false }
      ]
    },
    {
      q: "What does studying abroad often help students become?",
      options: [
        { text: "More independent", correct: true },
        { text: "More dependent", correct: false },
        { text: "Less confident", correct: false },
        { text: "Less social", correct: false }
      ]
    }
  ]
},

{
  level: "B1",

  question: "The Importance of Exercise",

  audio: `Regular exercise is important for both physical and mental health. People who exercise regularly are more likely to have stronger muscles and better endurance. In addition, exercise can reduce stress and improve mood. Even simple activities such as walking or cycling can have positive effects if done consistently.`,

  script: `Regular exercise is important for both physical and mental health. People who exercise regularly are more likely to have stronger muscles and better endurance. In addition, exercise can reduce stress and improve mood. Even simple activities such as walking or cycling can have positive effects if done consistently.`,

  translation: `定期的な運動は身体的健康と精神的健康の両方に重要です。運動を続ける人は筋力や持久力が向上しやすくなります。また、運動はストレスを減らし、気分を改善します。ウォーキングやサイクリングのような簡単な活動でも、継続すれば良い効果があります。`,

  quiz: [
    {
      q: "What can exercise improve?",
      options: [
        { text: "Mood", correct: true },
        { text: "Weather", correct: false },
        { text: "Population", correct: false },
        { text: "Transportation", correct: false }
      ]
    },
    {
      q: "What physical benefits are mentioned?",
      options: [
        { text: "Stronger muscles and endurance", correct: true },
        { text: "Better eyesight", correct: false },
        { text: "Longer hair", correct: false },
        { text: "Faster internet", correct: false }
      ]
    },
    {
      q: "Which activity is mentioned?",
      options: [
        { text: "Cycling", correct: true },
        { text: "Fishing", correct: false },
        { text: "Painting", correct: false },
        { text: "Singing", correct: false }
      ]
    }
  ]
},

{
  level: "B1",

  question: "Social Media and Communication",

  audio: `Social media has changed the way people communicate. It allows users to share information quickly and stay connected with friends and family. However, some people believe that spending too much time on social media can reduce face-to-face communication. For this reason, it is important to use social media in a balanced way.`,

  script: `Social media has changed the way people communicate. It allows users to share information quickly and stay connected with friends and family. However, some people believe that spending too much time on social media can reduce face-to-face communication. For this reason, it is important to use social media in a balanced way.`,

  translation: `SNSは人々のコミュニケーション方法を変えました。情報を素早く共有し、友人や家族とつながり続けることができます。しかし、SNSの使いすぎは対面でのコミュニケーションを減らすと考える人もいます。そのため、バランスよく利用することが大切です。`,

  quiz: [
    {
      q: "What does social media allow people to do?",
      options: [
        { text: "Share information quickly", correct: true },
        { text: "Travel for free", correct: false },
        { text: "Avoid communication", correct: false },
        { text: "Learn every language", correct: false }
      ]
    },
    {
      q: "What concern is mentioned?",
      options: [
        { text: "Reduced face-to-face communication", correct: true },
        { text: "Lack of electricity", correct: false },
        { text: "Expensive transportation", correct: false },
        { text: "Food shortages", correct: false }
      ]
    },
    {
      q: "What does the speaker suggest?",
      options: [
        { text: "Using social media in a balanced way", correct: true },
        { text: "Never using social media", correct: false },
        { text: "Using social media all day", correct: false },
        { text: "Deleting all phones", correct: false }
      ]
    }
  ]
},

{
  level: "B1",

  question: "Learning from Failure",

  audio: `Many people are afraid of failure, but failure can be an important part of learning. When people make mistakes, they have an opportunity to understand what went wrong and improve their skills. Successful people often fail several times before achieving their goals. Therefore, failure should be seen as a chance to grow rather than something to fear.`,

  script: `Many people are afraid of failure, but failure can be an important part of learning. When people make mistakes, they have an opportunity to understand what went wrong and improve their skills. Successful people often fail several times before achieving their goals. Therefore, failure should be seen as a chance to grow rather than something to fear.`,

  translation: `多くの人は失敗を恐れますが、失敗は学習の重要な一部です。間違いをすると、何が悪かったのかを理解し、能力を向上させる機会が得られます。成功した人々も目標を達成する前に何度も失敗しています。そのため、失敗は恐れるものではなく成長の機会と考えるべきです。`,

  quiz: [
    {
      q: "What can failure provide?",
      options: [
        { text: "A chance to improve", correct: true },
        { text: "Guaranteed success", correct: false },
        { text: "More free time", correct: false },
        { text: "Less responsibility", correct: false }
      ]
    },
    {
      q: "What do successful people often experience?",
      options: [
        { text: "Several failures", correct: true },
        { text: "No mistakes", correct: false },
        { text: "No challenges", correct: false },
        { text: "Instant success", correct: false }
      ]
    },
    {
      q: "How should failure be viewed?",
      options: [
        { text: "As a chance to grow", correct: true },
        { text: "As something to avoid completely", correct: false },
        { text: "As a punishment", correct: false },
        { text: "As a waste of time", correct: false }
      ]
    }
  ]
},

{
  level: "B1",

  question: "Protecting the Environment",

  audio: `Environmental problems such as climate change and plastic pollution have become serious issues around the world. Although governments and companies play important roles, individuals can also make a difference. For example, reducing waste, recycling materials, and using public transportation can help protect the environment. Small actions taken by many people can have a significant impact.`,

  script: `Environmental problems such as climate change and plastic pollution have become serious issues around the world. Although governments and companies play important roles, individuals can also make a difference. For example, reducing waste, recycling materials, and using public transportation can help protect the environment. Small actions taken by many people can have a significant impact.`,

  translation: `気候変動やプラスチック汚染などの環境問題は世界的に深刻な課題となっています。政府や企業が重要な役割を果たしますが、個人にもできることがあります。ごみを減らしたり、リサイクルしたり、公共交通機関を利用したりすることは環境保護につながります。多くの人による小さな行動が大きな影響を生むことがあります。`,

  quiz: [
    {
      q: "Which problem is mentioned?",
      options: [
        { text: "Plastic pollution", correct: true },
        { text: "Traffic accidents", correct: false },
        { text: "Language barriers", correct: false },
        { text: "Housing shortages", correct: false }
      ]
    },
    {
      q: "Who can help protect the environment?",
      options: [
        { text: "Individuals", correct: true },
        { text: "Only governments", correct: false },
        { text: "Only companies", correct: false },
        { text: "Only scientists", correct: false }
      ]
    },
    {
      q: "What is one suggested action?",
      options: [
        { text: "Recycling materials", correct: true },
        { text: "Buying more plastic", correct: false },
        { text: "Driving more often", correct: false },
        { text: "Wasting resources", correct: false }
      ]
    }
  ]
},

{
  level: "B1",

  question: "Technology in Daily Life",

  audio: `Technology has become an essential part of modern life. People use smartphones, computers, and the internet for communication, education, and entertainment. While technology offers many advantages, it can also create problems such as distractions and privacy concerns. For this reason, it is important to use technology responsibly and understand both its benefits and risks.`,

  script: `Technology has become an essential part of modern life. People use smartphones, computers, and the internet for communication, education, and entertainment. While technology offers many advantages, it can also create problems such as distractions and privacy concerns. For this reason, it is important to use technology responsibly and understand both its benefits and risks.`,

  translation: `テクノロジーは現代生活に欠かせないものになっています。人々はコミュニケーション、教育、娯楽のためにスマートフォンやコンピューター、インターネットを利用しています。多くの利点がある一方で、注意散漫やプライバシーの問題を引き起こすこともあります。そのため、利点と危険性の両方を理解し、責任を持って利用することが重要です。`,

  quiz: [
    {
      q: "What devices are mentioned?",
      options: [
        { text: "Smartphones and computers", correct: true },
        { text: "Televisions only", correct: false },
        { text: "Cars and trains", correct: false },
        { text: "Books and newspapers", correct: false }
      ]
    },
    {
      q: "What problem is mentioned?",
      options: [
        { text: "Privacy concerns", correct: true },
        { text: "Food shortages", correct: false },
        { text: "Language barriers", correct: false },
        { text: "Weather changes", correct: false }
      ]
    },
    {
      q: "What should people do?",
      options: [
        { text: "Use technology responsibly", correct: true },
        { text: "Avoid technology completely", correct: false },
        { text: "Use technology all day", correct: false },
        { text: "Ignore the risks", correct: false }
      ]
    }
  ]
},

{
  level: "B1",

  question: "Future Careers",

  audio: `Choosing a future career can be difficult because there are many possible options. Some people choose jobs based on salary, while others focus on personal interests and skills. Experts often recommend gaining experience through volunteer work or internships before making a final decision. Exploring different opportunities can help people find a career that suits them well.`,

  script: `Choosing a future career can be difficult because there are many possible options. Some people choose jobs based on salary, while others focus on personal interests and skills. Experts often recommend gaining experience through volunteer work or internships before making a final decision. Exploring different opportunities can help people find a career that suits them well.`,

  translation: `将来の職業を選ぶことは、多くの選択肢があるため難しい場合があります。給料を重視する人もいれば、自分の興味や能力を重視する人もいます。専門家は、最終的な決断をする前にボランティア活動やインターンシップを通じて経験を積むことを勧めています。さまざまな機会を探ることで、自分に合った職業を見つけやすくなります。`,

  quiz: [
    {
      q: "Why can choosing a career be difficult?",
      options: [
        { text: "There are many options", correct: true },
        { text: "There are no jobs", correct: false },
        { text: "People cannot change careers", correct: false },
        { text: "Jobs are all the same", correct: false }
      ]
    },
    {
      q: "What do experts recommend?",
      options: [
        { text: "Volunteer work or internships", correct: true },
        { text: "Quitting school", correct: false },
        { text: "Changing jobs often", correct: false },
        { text: "Working without experience", correct: false }
      ]
    },
    {
      q: "What can exploring opportunities help people do?",
      options: [
        { text: "Find a suitable career", correct: true },
        { text: "Avoid learning", correct: false },
        { text: "Earn money immediately", correct: false },
        { text: "Travel for free", correct: false }
      ]
    }
  ]
},

{
  level: "B1",

  question: "Understanding Different Cultures",

  audio: `In today's globalized world, people often interact with individuals from different cultural backgrounds. Learning about other cultures can reduce misunderstandings and improve communication. It also helps people develop respect for different ways of thinking and living. Cultural understanding is becoming increasingly important in education, business, and international relationships.`,

  script: `In today's globalized world, people often interact with individuals from different cultural backgrounds. Learning about other cultures can reduce misunderstandings and improve communication. It also helps people develop respect for different ways of thinking and living. Cultural understanding is becoming increasingly important in education, business, and international relationships.`,

  translation: `今日のグローバル化した世界では、人々は異なる文化的背景を持つ人々と接する機会が増えています。他文化について学ぶことは誤解を減らし、コミュニケーションを改善します。また、異なる考え方や生活様式への尊重を育てることにもつながります。文化理解は教育、ビジネス、国際関係においてますます重要になっています。`,

  quiz: [
    {
      q: "What can learning about other cultures reduce?",
      options: [
        { text: "Misunderstandings", correct: true },
        { text: "Travel opportunities", correct: false },
        { text: "Friendships", correct: false },
        { text: "Education", correct: false }
      ]
    },
    {
      q: "What can cultural understanding improve?",
      options: [
        { text: "Communication", correct: true },
        { text: "Weather", correct: false },
        { text: "Transportation", correct: false },
        { text: "Population growth", correct: false }
      ]
    },
    {
      q: "Where is cultural understanding important?",
      options: [
        { text: "Education, business, and international relations", correct: true },
        { text: "Only sports", correct: false },
        { text: "Only tourism", correct: false },
        { text: "Only entertainment", correct: false }
      ]
    }
  ]
},

{
  level: "B1",

  question: "The Benefits of Reading",

  audio: `Reading books is one of the most effective ways to gain knowledge and improve language skills. People who read regularly are often exposed to new vocabulary and ideas. In addition, reading can improve concentration and critical thinking abilities. Whether people read novels, biographies, or articles, reading provides opportunities to learn and grow throughout life.`,

  script: `Reading books is one of the most effective ways to gain knowledge and improve language skills. People who read regularly are often exposed to new vocabulary and ideas. In addition, reading can improve concentration and critical thinking abilities. Whether people read novels, biographies, or articles, reading provides opportunities to learn and grow throughout life.`,

  translation: `読書は知識を得たり語学力を向上させたりする最も効果的な方法の一つです。定期的に本を読む人は新しい語彙や考え方に触れる機会が多くなります。また、集中力や批判的思考力を高める効果もあります。小説、伝記、記事など何を読む場合でも、読書は生涯にわたる学びと成長の機会を与えてくれます。`,

  quiz: [
    {
      q: "What can reading improve?",
      options: [
        { text: "Language skills", correct: true },
        { text: "Driving ability", correct: false },
        { text: "Cooking ability", correct: false },
        { text: "Athletic performance", correct: false }
      ]
    },
    {
      q: "What are readers often exposed to?",
      options: [
        { text: "New vocabulary and ideas", correct: true },
        { text: "More homework", correct: false },
        { text: "Less information", correct: false },
        { text: "Fewer opinions", correct: false }
      ]
    },
    {
      q: "What mental ability is mentioned?",
      options: [
        { text: "Critical thinking", correct: true },
        { text: "Muscle strength", correct: false },
        { text: "Drawing ability", correct: false },
        { text: "Navigation skills", correct: false }
      ]
    }
  ]
},

{
  level: "B1",

  question: "Artificial Intelligence in Education",

  audio: `Artificial intelligence is becoming more common in education. AI tools can help students learn at their own pace and provide personalized feedback. Some teachers use AI to create practice exercises or analyze student performance. However, many experts believe that AI should support teachers rather than replace them because human interaction remains an important part of learning.`,

  script: `Artificial intelligence is becoming more common in education. AI tools can help students learn at their own pace and provide personalized feedback. Some teachers use AI to create practice exercises or analyze student performance. However, many experts believe that AI should support teachers rather than replace them because human interaction remains an important part of learning.`,

  translation: `人工知能は教育分野でますます一般的になっています。AIツールは、生徒が自分のペースで学習し、個別のフィードバックを受けるのを助けます。教師の中には練習問題の作成や学習状況の分析にAIを利用する人もいます。しかし、多くの専門家は、人との関わりが学習において重要であるため、AIは教師を置き換えるのではなく支援するべきだと考えています。`,

  quiz: [
    {
      q: "What can AI provide to students?",
      options: [
        { text: "Personalized feedback", correct: true },
        { text: "Free university degrees", correct: false },
        { text: "Unlimited vacation", correct: false },
        { text: "Automatic success", correct: false }
      ]
    },
    {
      q: "How do some teachers use AI?",
      options: [
        { text: "To create exercises and analyze performance", correct: true },
        { text: "To replace textbooks completely", correct: false },
        { text: "To cancel classes", correct: false },
        { text: "To avoid teaching", correct: false }
      ]
    },
    {
      q: "Why shouldn't AI completely replace teachers?",
      options: [
        { text: "Human interaction is important", correct: true },
        { text: "AI cannot use computers", correct: false },
        { text: "AI is always unavailable", correct: false },
        { text: "Students dislike technology", correct: false }
      ]
    }
  ]
},
  {
  
  level: "B1",

  question: "What is the story mainly about?",

  audio: `Last Saturday, Emma planned to spend a quiet afternoon at home. However, while walking to a café, she found a small wallet on the street. Inside, there was some money and an ID card. Instead of keeping it, Emma decided to visit the address on the card. The owner was very surprised and thankful, and Emma felt happy that she had helped someone.`,

  script: `Last Saturday, Emma planned to spend a quiet afternoon at home. However, while walking to a café, she found a small wallet on the street. Inside, there was some money and an ID card. Instead of keeping it, Emma decided to visit the address on the card. The owner was very surprised and thankful, and Emma felt happy that she had helped someone.`,

  translation: `先週の土曜日、エマは家で静かな午後を過ごす予定でした。しかし、カフェへ向かう途中で小さな財布を見つけました。中にはお金と身分証が入っていました。エマは持ち去るのではなく、カードに書かれた住所を訪ねることにしました。持ち主はとても驚き感謝し、エマも人助けができて嬉しくなりました。`,

  quiz: [
    {
      q: "What did Emma find?",
      options: [
        { text: "A wallet", correct: true },
        { text: "A phone", correct: false },
        { text: "A bag", correct: false },
        { text: "A bicycle", correct: false }
      ]
    },
    {
      q: "What did Emma do with the wallet?",
      options: [
        { text: "She returned it to the owner", correct: true },
        { text: "She kept the money", correct: false },
        { text: "She threw it away", correct: false },
        { text: "She gave it to a friend", correct: false }
      ]
    },
    {
      q: "How did Emma feel at the end?",
      options: [
        { text: "Happy", correct: true },
        { text: "Angry", correct: false },
        { text: "Bored", correct: false },
        { text: "Scared", correct: false }
      ]
    }
  ]
},
{
  
  level: "B1",

  question: "Practice harder",

  audio: `Tom loved playing soccer after school. One rainy afternoon, he almost decided to stay home because the weather looked terrible. However, his coach encouraged the team to practice indoors. During practice, Tom played especially well and was later chosen for an important school match. He realized that not giving up had been a good decision.`,

  script: `Tom loved playing soccer after school. One rainy afternoon, he almost decided to stay home because the weather looked terrible. However, his coach encouraged the team to practice indoors. During practice, Tom played especially well and was later chosen for an important school match. He realized that not giving up had been a good decision.`,

  translation: `トムは放課後にサッカーをするのが大好きでした。ある雨の日、天気が悪かったので家にいようと思いました。しかし、コーチが屋内練習を勧めました。練習中、トムはとても良いプレーをし、大事な試合のメンバーに選ばれました。諦めなかったことが良い決断だったと気づきました。`,

  quiz: [
    {
      q: "Why did Tom want to stay home?",
      options: [
        { text: "Because of the bad weather", correct: true },
        { text: "Because he was sick", correct: false },
        { text: "Because school was closed", correct: false },
        { text: "Because he disliked soccer", correct: false }
      ]
    },
    {
      q: "Where did the team practice?",
      options: [
        { text: "Indoors", correct: true },
        { text: "At the park", correct: false },
        { text: "At Tom's house", correct: false },
        { text: "On the street", correct: false }
      ]
    },
    {
      q: "What lesson did Tom learn?",
      options: [
        { text: "Not giving up can lead to success", correct: true },
        { text: "Rainy days are boring", correct: false },
        { text: "Soccer is difficult", correct: false },
        { text: "Practice is unnecessary", correct: false }
      ]
    }
  ]
},
{
  
  level: "B1",

  question: "Best birthday",

  audio: `Sophie had always wanted to bake a cake by herself. One day, she decided to surprise her grandmother on her birthday. At first, everything went wrong because she accidentally added too much sugar. After trying again carefully, she finally baked a delicious cake. Her grandmother smiled and said it was the best gift she had received.`,

  script: `Sophie had always wanted to bake a cake by herself. One day, she decided to surprise her grandmother on her birthday. At first, everything went wrong because she accidentally added too much sugar. After trying again carefully, she finally baked a delicious cake. Her grandmother smiled and said it was the best gift she had received.`,

  translation: `ソフィーはずっと一人でケーキを焼いてみたいと思っていました。ある日、祖母の誕生日にサプライズをしようと決めました。最初は砂糖を入れすぎて失敗しましたが、もう一度丁寧に挑戦し、おいしいケーキを完成させました。祖母は笑顔で最高のプレゼントだと言いました。`,

  quiz: [
    {
      q: "Who did Sophie want to surprise?",
      options: [
        { text: "Her grandmother", correct: true },
        { text: "Her teacher", correct: false },
        { text: "Her brother", correct: false },
        { text: "Her friend", correct: false }
      ]
    },
    {
      q: "What mistake did Sophie make?",
      options: [
        { text: "She added too much sugar", correct: true },
        { text: "She forgot the flour", correct: false },
        { text: "She burned the kitchen", correct: false },
        { text: "She dropped the cake", correct: false }
      ]
    },
    {
      q: "What happened at the end?",
      options: [
        { text: "She made a delicious cake", correct: true },
        { text: "She gave up", correct: false },
        { text: "The birthday was canceled", correct: false },
        { text: "Nobody ate the cake", correct: false }
      ]
    }
  ]
},

{
  
  level: "B1",

  question: "Daniel's part-time job",

  audio: `Last month, Daniel started a part-time job at a small bookstore. One afternoon, an elderly customer came in looking for a book she had read many years ago, but she could not remember the title. Daniel listened carefully to her description and searched the shelves for almost an hour. In the end, he found the book, and the woman became emotional because it reminded her of her childhood.`,

  script: `Last month, Daniel started a part-time job at a small bookstore. One afternoon, an elderly customer came in looking for a book she had read many years ago, but she could not remember the title. Daniel listened carefully to her description and searched the shelves for almost an hour. In the end, he found the book, and the woman became emotional because it reminded her of her childhood.`,

  translation: `先月、ダニエルは小さな本屋でアルバイトを始めました。ある午後、高齢の女性客が何年も前に読んだ本を探しに来ましたが、タイトルを思い出せませんでした。ダニエルは説明を注意深く聞き、1時間近く棚を探しました。最終的に本を見つけ、女性は子ども時代を思い出して感動しました。`,

  quiz: [
    {
      q: "Why did the customer visit the bookstore?",
      options: [
        { text: "She wanted to find an old book", correct: true },
        { text: "She wanted a new job", correct: false },
        { text: "She was meeting Daniel", correct: false },
        { text: "She wanted to sell books", correct: false }
      ]
    },
    {
      q: "Why did the woman become emotional?",
      options: [
        { text: "The book reminded her of childhood", correct: true },
        { text: "She lost her money", correct: false },
        { text: "Daniel gave her a gift", correct: false },
        { text: "The store was closing", correct: false }
      ]
    },
    {
      q: "What does the story mainly show?",
      options: [
        { text: "Helping others can be meaningful", correct: true },
        { text: "Books are expensive", correct: false },
        { text: "Part-time jobs are boring", correct: false },
        { text: "Old people dislike reading", correct: false }
      ]
    }
  ]
},

{
  
  level: "B1",

  question: "Obtain confident",

  audio: `Sophie had always wanted to learn photography, so she joined a weekend class in her town. At first, she felt nervous because everyone else seemed more experienced. However, after several weeks of practice, she became more confident and even won a small photography contest organized by her teacher.`,

  script: `Sophie had always wanted to learn photography, so she joined a weekend class in her town. At first, she felt nervous because everyone else seemed more experienced. However, after several weeks of practice, she became more confident and even won a small photography contest organized by her teacher.`,

  translation: `ソフィーはずっと写真を学びたいと思っていたため、町の週末クラスに参加しました。最初は他の人の方が経験豊富に見えて緊張していました。しかし、数週間練習した後、自信を持つようになり、先生が開催した小さな写真コンテストで優勝しました。`,

  quiz: [
    {
      q: "Why did Sophie join the class?",
      options: [
        { text: "She wanted to learn photography", correct: true },
        { text: "Her teacher forced her", correct: false },
        { text: "She wanted to meet friends", correct: false },
        { text: "She needed a job", correct: false }
      ]
    },
    {
      q: "How did Sophie feel at first?",
      options: [
        { text: "Nervous", correct: true },
        { text: "Excited and relaxed", correct: false },
        { text: "Angry", correct: false },
        { text: "Bored", correct: false }
      ]
    },
    {
      q: "What happened in the end?",
      options: [
        { text: "She won a contest", correct: true },
        { text: "She quit the class", correct: false },
        { text: "She moved away", correct: false },
        { text: "She became a teacher", correct: false }
      ]
    }
  ]
},

{
  
  level: "B1",

  question: "Stranger frends",

  audio: `One evening, Kevin missed the last train home after staying late at work. While he was wondering what to do, a coworker noticed him waiting outside the station and offered him a ride. During the drive, they talked for hours and realized they had many similar interests. After that night, they became close friends.`,

  script: `One evening, Kevin missed the last train home after staying late at work. While he was wondering what to do, a coworker noticed him waiting outside the station and offered him a ride. During the drive, they talked for hours and realized they had many similar interests. After that night, they became close friends.`,

  translation: `ある夜、ケビンは残業したため終電を逃してしまいました。どうしようか悩んでいると、同僚が駅の外で待っている彼に気づき、車で送ると申し出ました。移動中に長時間話し、多くの共通の興味があることに気づきました。その夜以降、二人は親しい友達になりました。`,

  quiz: [
    {
      q: "Why did Kevin miss the train?",
      options: [
        { text: "He stayed late at work", correct: true },
        { text: "He forgot the time", correct: false },
        { text: "The train was canceled", correct: false },
        { text: "He visited a friend", correct: false }
      ]
    },
    {
      q: "How did Kevin get home?",
      options: [
        { text: "A coworker gave him a ride", correct: true },
        { text: "He walked home", correct: false },
        { text: "He took a taxi", correct: false },
        { text: "He stayed at the station", correct: false }
      ]
    },
    {
      q: "What happened after that night?",
      options: [
        { text: "They became close friends", correct: true },
        { text: "They stopped talking", correct: false },
        { text: "Kevin changed jobs", correct: false },
        { text: "The coworker moved away", correct: false }
      ]
    }
  ]
},

{
  
  level: "B1",

  question: "Enjoy Running!",

  audio: `Emma decided to challenge herself by joining a local marathon, even though she had never run such a long distance before. Training was difficult, and sometimes she wanted to give up. However, her friends encouraged her to continue. On the day of the race, she successfully finished and felt proud of herself.`,

  script: `Emma decided to challenge herself by joining a local marathon, even though she had never run such a long distance before. Training was difficult, and sometimes she wanted to give up. However, her friends encouraged her to continue. On the day of the race, she successfully finished and felt proud of herself.`,

  translation: `エマは、これまでそんな長距離を走ったことがなかったにもかかわらず、地元のマラソンに挑戦することを決めました。練習は大変で、時には諦めたくなることもありました。しかし友達が励まし続けました。レース当日、彼女は完走し、自分を誇りに思いました。`,

  quiz: [
    {
      q: "Why did Emma join the marathon?",
      options: [
        { text: "To challenge herself", correct: true },
        { text: "To win money", correct: false },
        { text: "Because her parents told her", correct: false },
        { text: "To become famous", correct: false }
      ]
    },
    {
      q: "What problem did Emma face?",
      options: [
        { text: "Training was difficult", correct: true },
        { text: "She got lost", correct: false },
        { text: "Her friends laughed at her", correct: false },
        { text: "The race was canceled", correct: false }
      ]
    },
    {
      q: "How did Emma feel after the race?",
      options: [
        { text: "Proud", correct: true },
        { text: "Angry", correct: false },
        { text: "Confused", correct: false },
        { text: "Lonely", correct: false }
      ]
    }
  ]
},

{
  
  level: "B1",

  question: "One summer memory",

  audio: `During summer vacation, Lisa volunteered at an animal shelter near her house. At first, she only cleaned cages and prepared food for the animals. Later, she learned how to care for sick dogs and nervous cats. By the end of the summer, Lisa realized she wanted to become a veterinarian in the future.`,

  script: `During summer vacation, Lisa volunteered at an animal shelter near her house. At first, she only cleaned cages and prepared food for the animals. Later, she learned how to care for sick dogs and nervous cats. By the end of the summer, Lisa realized she wanted to become a veterinarian in the future.`,

  translation: `夏休みの間、リサは家の近くの動物保護施設でボランティアをしました。最初は動物のケージ掃除や食事の準備だけをしていました。その後、病気の犬や怖がっている猫の世話の仕方を学びました。夏の終わりには、将来獣医になりたいと思うようになりました。`,

  quiz: [
    {
      q: "Where did Lisa volunteer?",
      options: [
        { text: "At an animal shelter", correct: true },
        { text: "At a hospital", correct: false },
        { text: "At a school", correct: false },
        { text: "At a bookstore", correct: false }
      ]
    },
    {
      q: "What did Lisa learn?",
      options: [
        { text: "How to care for animals", correct: true },
        { text: "How to drive", correct: false },
        { text: "How to cook", correct: false },
        { text: "How to paint", correct: false }
      ]
    },
    {
      q: "What did Lisa decide about her future?",
      options: [
        { text: "She wanted to become a veterinarian", correct: true },
        { text: "She wanted to travel", correct: false },
        { text: "She wanted to quit school", correct: false },
        { text: "She wanted to open a restaurant", correct: false }
      ]
    }
  ]
},


{
  
  level: "B1",

  question: "Gentle man",

  audio: `Daniel missed the last bus home after studying late at the library. While he was wondering what to do, an elderly man nearby started a conversation. After hearing Daniel's situation, the man kindly offered him advice about a safer route to walk home. Daniel arrived home tired but thankful for the stranger's kindness.`,

  script: `Daniel missed the last bus home after studying late at the library. While he was wondering what to do, an elderly man nearby started a conversation. After hearing Daniel's situation, the man kindly offered him advice about a safer route to walk home. Daniel arrived home tired but thankful for the stranger's kindness.`,

  translation: `ダニエルは図書館で遅くまで勉強し、終バスを逃してしまいました。どうしようか悩んでいると、近くにいた年配の男性が話しかけてきました。事情を聞いた男性は、安全な帰宅ルートを親切に教えてくれました。ダニエルは疲れていましたが、その親切に感謝しました。`,

  quiz: [
    {
      q: "Why did Daniel miss the bus?",
      options: [
        { text: "He studied late at the library", correct: true },
        { text: "He overslept", correct: false },
        { text: "He forgot the time", correct: false },
        { text: "The bus was canceled", correct: false }
      ]
    },
    {
      q: "Who helped Daniel?",
      options: [
        { text: "An elderly man", correct: true },
        { text: "His teacher", correct: false },
        { text: "A police officer", correct: false },
        { text: "His friend", correct: false }
      ]
    },
    {
      q: "How did Daniel feel at the end?",
      options: [
        { text: "Thankful", correct: true },
        { text: "Angry", correct: false },
        { text: "Excited", correct: false },
        { text: "Embarrassed", correct: false }
      ]
    }
  ]
},






{
  
  level: "B1",

  question: "New Relationship",

  audio: `Lucy was nervous on her first day at a new school. She worried that nobody would talk to her. During lunch, however, a classmate named Mia invited Lucy to sit together. They quickly discovered that they both enjoyed drawing and music. By the end of the day, Lucy felt much more comfortable and excited about school.`,

  script: `Lucy was nervous on her first day at a new school. She worried that nobody would talk to her. During lunch, however, a classmate named Mia invited Lucy to sit together. They quickly discovered that they both enjoyed drawing and music. By the end of the day, Lucy felt much more comfortable and excited about school.`,

  translation: `ルーシーは新しい学校の初日に緊張していました。誰も話しかけてくれないのではと心配していました。しかし昼食時、ミアというクラスメートが一緒に座ろうと誘ってくれました。二人は絵を描くことや音楽が好きだと気づき、放課後にはルーシーは学校にワクワクするようになっていました。`,

  quiz: [
    {
      q: "Why was Lucy nervous?",
      options: [
        { text: "It was her first day at a new school", correct: true },
        { text: "She had a test", correct: false },
        { text: "She lost her bag", correct: false },
        { text: "She missed the bus", correct: false }
      ]
    },
    {
      q: "Who talked to Lucy?",
      options: [
        { text: "Mia", correct: true },
        { text: "Her teacher", correct: false },
        { text: "Her brother", correct: false },
        { text: "Nobody", correct: false }
      ]
    },
    {
      q: "How did Lucy feel at the end?",
      options: [
        { text: "Comfortable and excited", correct: true },
        { text: "Lonely", correct: false },
        { text: "Angry", correct: false },
        { text: "Scared", correct: false }
      ]
    }
  ]
},
//英語B2ゾーン





{
  
  level: "B2",

  question: "The Importance of Exercise",

  audio: `Many people today are trying to live healthier lives by exercising regularly. Exercise can improve physical health, reduce stress, and increase energy levels. However, some people find it difficult to exercise because they are too busy with work or school. Experts believe that even a short walk every day can make a big difference. In the long term, regular exercise can help people stay healthier and happier.`,

  script: `Many people today are trying to live healthier lives by exercising regularly. Exercise can improve physical health, reduce stress, and increase energy levels. However, some people find it difficult to exercise because they are too busy with work or school. Experts believe that even a short walk every day can make a big difference. In the long term, regular exercise can help people stay healthier and happier.`,

  translation: `今日、多くの人が定期的な運動によってより健康的な生活を送ろうとしています。運動は身体の健康を改善し、ストレスを減らし、エネルギーを高めることができます。しかし、仕事や学校で忙しすぎて運動が難しいと感じる人もいます。専門家は、毎日の短い散歩でさえ大きな違いを生むと考えています。長期的には、定期的な運動は人々をより健康で幸せにする助けになります。`,

  quiz: [
    {
      q: "What is one benefit of exercise?",
      options: [
        { text: "It reduces stress", correct: true },
        { text: "It causes health problems", correct: false },
        { text: "It makes people sleep less", correct: false },
        { text: "It increases stress", correct: false }
      ]
    },
    {
      q: "Why do some people not exercise regularly?",
      options: [
        { text: "They are too busy", correct: true },
        { text: "Exercise is illegal", correct: false },
        { text: "They dislike healthy food", correct: false },
        { text: "Doctors do not recommend it", correct: false }
      ]
    },
    {
      q: "What do experts believe?",
      options: [
        { text: "Small amounts of exercise are helpful", correct: true },
        { text: "People should avoid walking", correct: false },
        { text: "Exercise is unnecessary", correct: false },
        { text: "Only athletes need exercise", correct: false }
      ]
    }
  ]
},

{
  
  level: "B2",

  question: "Starting a Community Project",

  audio: `After noticing the growing amount of litter in her neighborhood, Emma decided to organize a community clean-up project. Although she had never managed such an event before, she contacted local businesses and volunteers for support. The project was a success, attracting over fifty participants and inspiring other neighborhoods to start similar initiatives.`,

  script: `After noticing the growing amount of litter in her neighborhood, Emma decided to organize a community clean-up project. Although she had never managed such an event before, she contacted local businesses and volunteers for support. The project was a success, attracting over fifty participants and inspiring other neighborhoods to start similar initiatives.`,

  translation: `近所でごみが増えていることに気付いたエマは、地域清掃プロジェクトを企画することにしました。そのようなイベントを運営した経験はありませんでしたが、地元企業やボランティアに協力を求めました。その結果、50人以上が参加する成功したプロジェクトとなり、他の地域にも同様の活動を始めるきっかけを与えました。`,

  quiz: [
    {
      q: "Why did Emma organize the project?",
      options: [
        { text: "She noticed more litter in her neighborhood", correct: true },
        { text: "She wanted to earn money", correct: false },
        { text: "She was required by her school", correct: false },
        { text: "She was moving away", correct: false }
      ]
    },
    {
      q: "What challenge did Emma face?",
      options: [
        { text: "She had no experience managing such an event", correct: true },
        { text: "She had no volunteers", correct: false },
        { text: "The weather was terrible", correct: false },
        { text: "She lacked equipment", correct: false }
      ]
    },
    {
      q: "What was one result of the project?",
      options: [
        { text: "Other neighborhoods were inspired", correct: true },
        { text: "The project was canceled", correct: false },
        { text: "No one participated", correct: false },
        { text: "Businesses refused to help", correct: false }
      ]
    }
  ]
},
{
  
  level: "B2",

  question: "A New Language Challenge",

  audio: `When Daniel accepted a job abroad, he quickly realized that knowing only basic phrases would not be enough. Determined to improve, he attended evening language classes and practiced speaking with native speakers whenever possible. Within a year, he became fluent enough to lead meetings and build strong professional relationships.`,

  script: `When Daniel accepted a job abroad, he quickly realized that knowing only basic phrases would not be enough. Determined to improve, he attended evening language classes and practiced speaking with native speakers whenever possible. Within a year, he became fluent enough to lead meetings and build strong professional relationships.`,

  translation: `ダニエルは海外での仕事を引き受けた際、基本的なフレーズだけでは十分ではないことにすぐ気付きました。上達を決意した彼は夜間の語学クラスに通い、できる限りネイティブスピーカーと会話を練習しました。1年以内に会議を主導し、強い仕事上の関係を築けるほど流暢になりました。`,

  quiz: [
    {
      q: "Why did Daniel study the language seriously?",
      options: [
        { text: "He needed it for his job abroad", correct: true },
        { text: "He wanted to become a teacher", correct: false },
        { text: "His friends forced him", correct: false },
        { text: "He planned to write a book", correct: false }
      ]
    },
    {
      q: "How did he improve his skills?",
      options: [
        { text: "By taking classes and speaking with natives", correct: true },
        { text: "By watching only movies", correct: false },
        { text: "By reading one textbook", correct: false },
        { text: "By using translation apps only", correct: false }
      ]
    },
    {
      q: "What was the outcome after a year?",
      options: [
        { text: "He became fluent enough to lead meetings", correct: true },
        { text: "He quit his job", correct: false },
        { text: "He returned home", correct: false },
        { text: "He changed careers", correct: false }
      ]
    }
  ]
},
{
  
  level: "B2",

  question: "Technology in Agriculture",

  audio: `Many farmers have begun using modern technology to increase productivity while reducing environmental impact. For example, drones can monitor crop health, and smart sensors can provide accurate information about soil conditions. As a result, farmers are able to make better decisions and use resources more efficiently.`,

  script: `Many farmers have begun using modern technology to increase productivity while reducing environmental impact. For example, drones can monitor crop health, and smart sensors can provide accurate information about soil conditions. As a result, farmers are able to make better decisions and use resources more efficiently.`,

  translation: `多くの農家は、生産性を高めながら環境への影響を減らすために最新技術を利用し始めています。例えば、ドローンは作物の健康状態を監視でき、スマートセンサーは土壌の状態に関する正確な情報を提供できます。その結果、農家はより良い判断を下し、資源をより効率的に利用できるようになっています。`,

  quiz: [
    {
      q: "Why are farmers using modern technology?",
      options: [
        { text: "To improve productivity and reduce environmental impact", correct: true },
        { text: "To replace all workers", correct: false },
        { text: "To grow fewer crops", correct: false },
        { text: "To increase pollution", correct: false }
      ]
    },
    {
      q: "What can drones do?",
      options: [
        { text: "Monitor crop health", correct: true },
        { text: "Sell products", correct: false },
        { text: "Predict the stock market", correct: false },
        { text: "Control weather", correct: false }
      ]
    },
    {
      q: "What is the result of using these technologies?",
      options: [
        { text: "More efficient use of resources", correct: true },
        { text: "Lower crop quality", correct: false },
        { text: "Less information", correct: false },
        { text: "Higher environmental damage", correct: false }
      ]
    }
  ]
},
{
  
  level: "B2",

  question: "The Importance of Volunteering",

  audio: `Volunteering can benefit both communities and individuals. While volunteers contribute their time and skills to help others, they also gain valuable experience and develop new abilities. Many employers appreciate volunteer work because it demonstrates responsibility, teamwork, and initiative.`,

  script: `Volunteering can benefit both communities and individuals. While volunteers contribute their time and skills to help others, they also gain valuable experience and develop new abilities. Many employers appreciate volunteer work because it demonstrates responsibility, teamwork, and initiative.`,

  translation: `ボランティア活動は地域社会と個人の両方に利益をもたらします。ボランティアは時間や技能を提供して他人を助ける一方で、貴重な経験を得たり新しい能力を身につけたりします。多くの雇用主は、責任感や協調性、自主性を示すものとしてボランティア経験を高く評価します。`,

  quiz: [
    {
      q: "Who benefits from volunteering?",
      options: [
        { text: "Both communities and volunteers", correct: true },
        { text: "Only employers", correct: false },
        { text: "Only communities", correct: false },
        { text: "Only volunteers", correct: false }
      ]
    },
    {
      q: "What can volunteers gain?",
      options: [
        { text: "Experience and new skills", correct: true },
        { text: "Free housing", correct: false },
        { text: "Guaranteed jobs", correct: false },
        { text: "Fame", correct: false }
      ]
    },
    {
      q: "Why do employers value volunteer work?",
      options: [
        { text: "It shows responsibility and teamwork", correct: true },
        { text: "It provides business profits", correct: false },
        { text: "It reduces salaries", correct: false },
        { text: "It guarantees expertise", correct: false }
      ]
    }
  ]
},
{
  
  level: "B2",

  question: "Balancing Work and Study",

  audio: `Jessica decided to continue her education while working full-time. Managing both responsibilities was challenging, especially during exam periods. However, by creating a detailed schedule and staying disciplined, she successfully completed her degree without leaving her job.`,

  script: `Jessica decided to continue her education while working full-time. Managing both responsibilities was challenging, especially during exam periods. However, by creating a detailed schedule and staying disciplined, she successfully completed her degree without leaving her job.`,

  translation: `ジェシカはフルタイムで働きながら学業を続けることを決意しました。特に試験期間中は両立が大変でした。しかし、詳細なスケジュールを作成し、規律を保つことで、仕事を辞めることなく学位を取得することに成功しました。`,

  quiz: [
    {
      q: "What decision did Jessica make?",
      options: [
        { text: "To study while working full-time", correct: true },
        { text: "To quit her job", correct: false },
        { text: "To move abroad", correct: false },
        { text: "To start a company", correct: false }
      ]
    },
    {
      q: "What made her situation difficult?",
      options: [
        { text: "Balancing work and study", correct: true },
        { text: "Learning a new language", correct: false },
        { text: "Financial problems", correct: false },
        { text: "Health issues", correct: false }
      ]
    },
    {
      q: "How did she succeed?",
      options: [
        { text: "By following a schedule and staying disciplined", correct: true },
        { text: "By taking fewer classes", correct: false },
        { text: "By changing jobs", correct: false },
        { text: "By getting private tutors", correct: false }
      ]
    }
  ]
},

{
  
  level: "B2",

  question: "Studying Abroad",

  audio: `After receiving a scholarship from an international organization, Mia decided to spend a year studying abroad in Canada. At first, she struggled to adapt to the different educational system because students were expected to participate actively in class discussions. In addition, she found it difficult to express her opinions clearly in English. However, by working closely with classmates and asking professors for advice, she gradually became more confident. By the end of the year, she had improved her language skills significantly and developed friendships with people from many different countries.`,

  script: `After receiving a scholarship from an international organization, Mia decided to spend a year studying abroad in Canada. At first, she struggled to adapt to the different educational system because students were expected to participate actively in class discussions. In addition, she found it difficult to express her opinions clearly in English. However, by working closely with classmates and asking professors for advice, she gradually became more confident. By the end of the year, she had improved her language skills significantly and developed friendships with people from many different countries.`,

  translation: `国際団体から奨学金を受け取った後、ミアはカナダで1年間留学することを決めました。最初は、生徒が積極的に授業へ参加することを求められる教育制度に慣れるのに苦労しました。また、自分の意見を英語で明確に伝えることも難しく感じていました。しかし、クラスメートと協力し、教授に助言を求めることで徐々に自信をつけました。1年の終わりには英語力が大きく向上し、多くの国の人々と友情を築くことができました。`,

  quiz: [
    {
      q: "Why did Mia go to Canada?",
      options: [
        { text: "She received a scholarship", correct: true },
        { text: "Her parents moved there", correct: false },
        { text: "She got a job offer", correct: false },
        { text: "She wanted a vacation", correct: false }
      ]
    },
    {
      q: "What challenge did she face?",
      options: [
        { text: "Adjusting to a different educational system", correct: true },
        { text: "Finding a place to live", correct: false },
        { text: "Learning mathematics", correct: false },
        { text: "Travel restrictions", correct: false }
      ]
    },
    {
      q: "How did she improve?",
      options: [
        { text: "By working with classmates and seeking advice", correct: true },
        { text: "By studying alone", correct: false },
        { text: "By avoiding discussions", correct: false },
        { text: "By returning home", correct: false }
      ]
    }
  ]
},
{
  
  level: "B2",

  question: "Creating a Mobile App",

  audio: `Ethan had always been interested in technology, so he decided to create a mobile application that would help students organize their study schedules. Although he had some basic programming knowledge, developing a complete application required him to learn new skills, including user interface design and database management. He spent several months testing different features and collecting feedback from classmates. Eventually, the app became popular among students because it helped them manage their time more effectively and reduce stress before exams.`,

  script: `Ethan had always been interested in technology, so he decided to create a mobile application that would help students organize their study schedules. Although he had some basic programming knowledge, developing a complete application required him to learn new skills, including user interface design and database management. He spent several months testing different features and collecting feedback from classmates. Eventually, the app became popular among students because it helped them manage their time more effectively and reduce stress before exams.`,

  translation: `イーサンは以前からテクノロジーに興味があったため、生徒が学習計画を管理できるスマホアプリを開発することにしました。基本的なプログラミング知識はありましたが、完成したアプリを作るにはUIデザインやデータベース管理など新しい技能を学ぶ必要がありました。彼は数か月かけて機能をテストし、クラスメートから意見を集めました。最終的に、そのアプリは時間管理や試験前のストレス軽減に役立つとして人気を集めました。`,

  quiz: [
    {
      q: "What was the purpose of Ethan's app?",
      options: [
        { text: "To help students organize study schedules", correct: true },
        { text: "To play games", correct: false },
        { text: "To teach music", correct: false },
        { text: "To sell products", correct: false }
      ]
    },
    {
      q: "What did Ethan need to learn?",
      options: [
        { text: "Design and database management", correct: true },
        { text: "Cooking skills", correct: false },
        { text: "Foreign languages", correct: false },
        { text: "Marketing only", correct: false }
      ]
    },
    {
      q: "Why did students like the app?",
      options: [
        { text: "It improved time management", correct: true },
        { text: "It provided free food", correct: false },
        { text: "It replaced teachers", correct: false },
        { text: "It gave exam answers", correct: false }
      ]
    }
  ]
},
{
  
  level: "B2",

  question: "Renewable Energy",

  audio: `As concerns about climate change continue to grow, many countries are investing heavily in renewable energy sources such as solar and wind power. These technologies help reduce dependence on fossil fuels and lower greenhouse gas emissions. Although the initial costs of building renewable energy facilities can be high, experts argue that the long-term environmental and economic benefits outweigh these expenses. As technology improves, renewable energy is becoming more affordable and accessible around the world.`,

  script: `As concerns about climate change continue to grow, many countries are investing heavily in renewable energy sources such as solar and wind power. These technologies help reduce dependence on fossil fuels and lower greenhouse gas emissions. Although the initial costs of building renewable energy facilities can be high, experts argue that the long-term environmental and economic benefits outweigh these expenses. As technology improves, renewable energy is becoming more affordable and accessible around the world.`,

  translation: `気候変動への懸念が高まる中、多くの国々が太陽光発電や風力発電などの再生可能エネルギーへ大規模な投資を行っています。これらの技術は化石燃料への依存を減らし、温室効果ガス排出量を削減します。設備建設には高額な初期費用が必要ですが、専門家は長期的な環境面・経済面での利益がそれを上回ると主張しています。技術の進歩により、再生可能エネルギーは世界中でより手頃で利用しやすいものになっています。`,

  quiz: [
    {
      q: "Why are countries investing in renewable energy?",
      options: [
        { text: "To reduce dependence on fossil fuels", correct: true },
        { text: "To increase pollution", correct: false },
        { text: "To reduce electricity use", correct: false },
        { text: "To stop technological development", correct: false }
      ]
    },
    {
      q: "What is a disadvantage mentioned?",
      options: [
        { text: "High initial costs", correct: true },
        { text: "No environmental benefits", correct: false },
        { text: "Limited energy production", correct: false },
        { text: "Lack of interest", correct: false }
      ]
    },
    {
      q: "What trend is described?",
      options: [
        { text: "Renewable energy is becoming more affordable", correct: true },
        { text: "Renewable energy is disappearing", correct: false },
        { text: "Countries are banning solar power", correct: false },
        { text: "Technology is becoming less advanced", correct: false }
      ]
    }
  ]
},

{
  
  level: "B2",

  question: "The Impact of Social Media",

  audio: `Social media has transformed the way people communicate and access information. While these platforms make it easier to stay connected with friends and family, they can also create challenges. For example, users are often exposed to large amounts of information, some of which may be inaccurate or misleading. Furthermore, spending excessive time on social media can affect mental health by increasing stress and reducing face-to-face interactions. Despite these concerns, many people continue to use social media because of its convenience and ability to connect individuals across the world.`,

  script: `Social media has transformed the way people communicate and access information. While these platforms make it easier to stay connected with friends and family, they can also create challenges. For example, users are often exposed to large amounts of information, some of which may be inaccurate or misleading. Furthermore, spending excessive time on social media can affect mental health by increasing stress and reducing face-to-face interactions. Despite these concerns, many people continue to use social media because of its convenience and ability to connect individuals across the world.`,

  translation: `SNSは人々のコミュニケーションや情報取得の方法を大きく変えました。友人や家族とつながりやすくなる一方で、課題もあります。例えば、利用者は膨大な情報に触れますが、その中には不正確または誤解を招くものもあります。また、SNSを使い過ぎるとストレスが増加し、対面での交流が減ることで精神的健康に影響を及ぼす可能性があります。それでも、多くの人が利便性や世界中の人々とつながれる点から利用を続けています。`,

  quiz: [
    {
      q: "What is one benefit of social media?",
      options: [
        { text: "Staying connected with others", correct: true },
        { text: "Reducing internet use", correct: false },
        { text: "Improving weather forecasts", correct: false },
        { text: "Replacing schools", correct: false }
      ]
    },
    {
      q: "What problem is mentioned?",
      options: [
        { text: "Misleading information", correct: true },
        { text: "Lack of users", correct: false },
        { text: "High transportation costs", correct: false },
        { text: "Food shortages", correct: false }
      ]
    },
    {
      q: "Why do people continue using social media?",
      options: [
        { text: "Because it is convenient", correct: true },
        { text: "Because it is required by law", correct: false },
        { text: "Because it is free from problems", correct: false },
        { text: "Because they cannot communicate otherwise", correct: false }
      ]
    }
  ]
},
{
  
  level: "B2",

  question: "A School Recycling Program",

  audio: `When a group of students noticed the large amount of waste produced at their school every week, they decided to take action. They created a recycling program that encouraged students and teachers to separate paper, plastic, and metal waste. At first, participation was low because many people were unfamiliar with the system. However, after organizing educational workshops and posting informative signs around the school, the program became increasingly successful. Within six months, the amount of recyclable waste collected had doubled, and the school received recognition from the local government for its environmental efforts.`,

  script: `When a group of students noticed the large amount of waste produced at their school every week, they decided to take action. They created a recycling program that encouraged students and teachers to separate paper, plastic, and metal waste. At first, participation was low because many people were unfamiliar with the system. However, after organizing educational workshops and posting informative signs around the school, the program became increasingly successful. Within six months, the amount of recyclable waste collected had doubled, and the school received recognition from the local government for its environmental efforts.`,

  translation: `生徒たちは毎週学校で大量のごみが出ていることに気付き、行動を起こしました。彼らは紙・プラスチック・金属を分別するリサイクルプログラムを作りました。最初は制度に慣れていない人が多く、参加率は低いものでした。しかし、説明会や案内掲示を行ったことで活動は成功し始めました。6か月後には回収量が2倍になり、学校は環境への取り組みで自治体から表彰されました。`,

  quiz: [
    {
      q: "Why did the students start the program?",
      options: [
        { text: "They noticed a lot of waste", correct: true },
        { text: "Their teacher ordered them to", correct: false },
        { text: "They wanted extra holidays", correct: false },
        { text: "They needed money", correct: false }
      ]
    },
    {
      q: "Why was participation low at first?",
      options: [
        { text: "People were unfamiliar with the system", correct: true },
        { text: "There were no recycling bins", correct: false },
        { text: "Students were absent", correct: false },
        { text: "The program cost too much", correct: false }
      ]
    },
    {
      q: "What happened after six months?",
      options: [
        { text: "The amount of recyclable waste doubled", correct: true },
        { text: "The program ended", correct: false },
        { text: "The school moved", correct: false },
        { text: "Students stopped participating", correct: false }
      ]
    }
  ]
},
{
  
  level: "B2",

  question: "Learning Through Failure",

  audio: `Many successful people have experienced failure before achieving their goals. For instance, a young entrepreneur may launch a business that does not attract enough customers and is forced to close it. Although such experiences can be disappointing, they often provide valuable lessons about planning, communication, and decision-making. Experts suggest that people who view failure as an opportunity to learn are more likely to succeed in the future because they become better prepared to overcome challenges and adapt to changing circumstances.`,

  script: `Many successful people have experienced failure before achieving their goals. For instance, a young entrepreneur may launch a business that does not attract enough customers and is forced to close it. Although such experiences can be disappointing, they often provide valuable lessons about planning, communication, and decision-making. Experts suggest that people who view failure as an opportunity to learn are more likely to succeed in the future because they become better prepared to overcome challenges and adapt to changing circumstances.`,

  translation: `多くの成功者は目標を達成する前に失敗を経験しています。例えば、若い起業家が事業を始めても十分な顧客を集められず閉業することがあります。そのような経験は落胆を招きますが、計画・コミュニケーション・意思決定について貴重な教訓を与えてくれます。専門家は、失敗を学びの機会と考える人ほど将来成功しやすいと述べています。`,

  quiz: [
    {
      q: "What example is given in the passage?",
      options: [
        { text: "A business that failed", correct: true },
        { text: "A sports competition", correct: false },
        { text: "A scientific discovery", correct: false },
        { text: "A school project", correct: false }
      ]
    },
    {
      q: "What can failure provide?",
      options: [
        { text: "Valuable lessons", correct: true },
        { text: "Guaranteed success", correct: false },
        { text: "More free time", correct: false },
        { text: "Financial rewards", correct: false }
      ]
    },
    {
      q: "Why are people who learn from failure more likely to succeed?",
      options: [
        { text: "They are better prepared for challenges", correct: true },
        { text: "They avoid all risks", correct: false },
        { text: "They never make mistakes", correct: false },
        { text: "They receive special treatment", correct: false }
      ]
    }
  ]
},
{
  
  level: "B2",

  question: "The Future of Transportation",

  audio: `Transportation technology is evolving rapidly as engineers search for ways to reduce traffic congestion and environmental damage. Electric vehicles are becoming increasingly common because they produce fewer emissions than traditional cars. In addition, some companies are investing in self-driving technology, which could improve road safety by reducing human error. However, experts caution that these innovations also raise concerns about cybersecurity, privacy, and employment in transportation-related industries. As a result, governments and businesses must work together to ensure that technological progress benefits society as a whole.`,

  script: `Transportation technology is evolving rapidly as engineers search for ways to reduce traffic congestion and environmental damage. Electric vehicles are becoming increasingly common because they produce fewer emissions than traditional cars. In addition, some companies are investing in self-driving technology, which could improve road safety by reducing human error. However, experts caution that these innovations also raise concerns about cybersecurity, privacy, and employment in transportation-related industries. As a result, governments and businesses must work together to ensure that technological progress benefits society as a whole.`,

  translation: `交通技術は渋滞や環境問題を減らすために急速に進化しています。電気自動車は排出ガスが少ないため普及が進んでいます。また、自動運転技術は人的ミスを減らし安全性向上につながる可能性があります。しかし、サイバーセキュリティやプライバシー、雇用への影響も懸念されています。そのため、技術の進歩が社会全体の利益となるよう政府と企業の協力が必要です。`,

  quiz: [
    {
      q: "Why are electric vehicles becoming popular?",
      options: [
        { text: "They produce fewer emissions", correct: true },
        { text: "They are cheaper than bicycles", correct: false },
        { text: "They require no maintenance", correct: false },
        { text: "They travel faster than airplanes", correct: false }
      ]
    },
    {
      q: "What benefit could self-driving technology provide?",
      options: [
        { text: "Improved road safety", correct: true },
        { text: "Unlimited fuel", correct: false },
        { text: "Free transportation", correct: false },
        { text: "No traffic laws", correct: false }
      ]
    },
    {
      q: "What concern is mentioned?",
      options: [
        { text: "Cybersecurity", correct: true },
        { text: "Food production", correct: false },
        { text: "Language learning", correct: false },
        { text: "Tourism", correct: false }
      ]
    }
  ]
},
{
  
  level: "B2",

  question: "The Benefits and Challenges of Remote Work",

  audio: `Over the past decade, remote work has become increasingly popular, especially as digital communication tools have improved. Many employees appreciate the flexibility of working from home because it allows them to save commuting time and achieve a better work-life balance. Companies may also benefit by reducing office expenses and attracting talented workers from different regions. However, remote work is not without challenges. Some employees struggle with feelings of isolation because they have fewer opportunities for face-to-face interaction with colleagues. Others find it difficult to separate their professional responsibilities from their personal lives. Experts suggest that successful remote work requires clear communication, effective time management, and regular opportunities for social interaction among team members.`,

  script: `Over the past decade, remote work has become increasingly popular, especially as digital communication tools have improved. Many employees appreciate the flexibility of working from home because it allows them to save commuting time and achieve a better work-life balance. Companies may also benefit by reducing office expenses and attracting talented workers from different regions. However, remote work is not without challenges. Some employees struggle with feelings of isolation because they have fewer opportunities for face-to-face interaction with colleagues. Others find it difficult to separate their professional responsibilities from their personal lives. Experts suggest that successful remote work requires clear communication, effective time management, and regular opportunities for social interaction among team members.`,

  translation: `この10年間で、特にデジタルコミュニケーションツールの発展に伴い、リモートワークはますます一般的になりました。多くの従業員は通勤時間を節約でき、仕事と私生活のバランスを取りやすくなるため、その柔軟性を評価しています。企業側もオフィス費用を削減し、さまざまな地域から優秀な人材を採用できるという利点があります。しかし、リモートワークには課題もあります。対面での交流が減るため孤独感を抱く人もおり、仕事と私生活の境界を保つことが難しい人もいます。専門家は、リモートワークを成功させるには、明確なコミュニケーション、効果的な時間管理、そして定期的な交流の機会が必要だと述べています。`,

  quiz: [
    {
      q: "Why do many employees like remote work?",
      options: [
        { text: "It offers flexibility and saves commuting time", correct: true },
        { text: "It guarantees higher salaries", correct: false },
        { text: "It eliminates all stress", correct: false },
        { text: "It requires less responsibility", correct: false }
      ]
    },
    {
      q: "What challenge is mentioned?",
      options: [
        { text: "Feelings of isolation", correct: true },
        { text: "Too many business trips", correct: false },
        { text: "Lack of internet access", correct: false },
        { text: "Difficulty finding jobs", correct: false }
      ]
    },
    {
      q: "According to experts, what is important for successful remote work?",
      options: [
        { text: "Communication and time management", correct: true },
        { text: "Expensive equipment", correct: false },
        { text: "Working longer hours", correct: false },
        { text: "Frequent relocation", correct: false }
      ]
    }
  ]
},
{
  
  level: "B2",

  question: "Protecting Endangered Species",

  audio: `Scientists around the world are concerned about the rapid decline of many animal species. Habitat destruction, climate change, and illegal hunting have all contributed to this problem. In response, governments and environmental organizations have launched conservation programs designed to protect endangered animals and restore their natural habitats. These efforts include creating protected areas, educating local communities, and enforcing stricter laws against poaching. Although conservation projects often require significant financial resources and long-term commitment, many experts believe they are essential for preserving biodiversity and maintaining healthy ecosystems for future generations.`,

  script: `Scientists around the world are concerned about the rapid decline of many animal species. Habitat destruction, climate change, and illegal hunting have all contributed to this problem. In response, governments and environmental organizations have launched conservation programs designed to protect endangered animals and restore their natural habitats. These efforts include creating protected areas, educating local communities, and enforcing stricter laws against poaching. Although conservation projects often require significant financial resources and long-term commitment, many experts believe they are essential for preserving biodiversity and maintaining healthy ecosystems for future generations.`,

  translation: `世界中の科学者たちは、多くの動物種が急速に減少していることを懸念しています。生息地の破壊、気候変動、違法な狩猟がその主な原因です。そのため、政府や環境保護団体は絶滅危惧種を守り、生息地を回復させる保護活動を進めています。これには保護区の設置、地域住民への教育、密猟に対する法律の強化などが含まれます。こうした活動には多くの費用と長期的な取り組みが必要ですが、生物多様性と健全な生態系を守るために不可欠だと考えられています。`,

  quiz: [
    {
      q: "What is causing the decline of many species?",
      options: [
        { text: "Habitat destruction and climate change", correct: true },
        { text: "Improved education", correct: false },
        { text: "Better healthcare", correct: false },
        { text: "Urban gardening", correct: false }
      ]
    },
    {
      q: "What is one conservation effort mentioned?",
      options: [
        { text: "Creating protected areas", correct: true },
        { text: "Building shopping centers", correct: false },
        { text: "Increasing hunting activities", correct: false },
        { text: "Expanding factories", correct: false }
      ]
    },
    {
      q: "Why are conservation programs important?",
      options: [
        { text: "They help preserve biodiversity", correct: true },
        { text: "They increase industrial production", correct: false },
        { text: "They reduce tourism", correct: false },
        { text: "They eliminate all environmental problems", correct: false }
      ]
    }
  ]
},
{
  
  level: "B2",

  question: "The Importance of Lifelong Learning",

  audio: `In today's rapidly changing world, learning does not end when people graduate from school or university. Technological developments, economic changes, and new career opportunities require individuals to continue acquiring knowledge throughout their lives. Many professionals attend workshops, enroll in online courses, or earn additional certifications to remain competitive in their fields. Lifelong learning not only improves career prospects but also encourages personal growth by exposing people to new ideas and perspectives. As a result, individuals who continue learning often find it easier to adapt to change and take advantage of new opportunities.`,

  script: `In today's rapidly changing world, learning does not end when people graduate from school or university. Technological developments, economic changes, and new career opportunities require individuals to continue acquiring knowledge throughout their lives. Many professionals attend workshops, enroll in online courses, or earn additional certifications to remain competitive in their fields. Lifelong learning not only improves career prospects but also encourages personal growth by exposing people to new ideas and perspectives. As a result, individuals who continue learning often find it easier to adapt to change and take advantage of new opportunities.`,

  translation: `急速に変化する現代社会では、学習は学校や大学を卒業して終わるものではありません。技術革新や経済の変化、新たな職業機会に対応するため、人々は生涯にわたって学び続ける必要があります。多くの社会人は研修会やオンライン講座に参加したり、追加の資格を取得したりしています。生涯学習はキャリアの向上だけでなく、新しい考え方や視点に触れることで個人の成長にもつながります。その結果、学び続ける人は変化に適応しやすく、新たな機会を活かしやすくなります。`,

  quiz: [
    {
      q: "Why is lifelong learning important?",
      options: [
        { text: "The world is constantly changing", correct: true },
        { text: "Schools are disappearing", correct: false },
        { text: "Jobs no longer exist", correct: false },
        { text: "Technology is becoming simpler", correct: false }
      ]
    },
    {
      q: "How do professionals continue learning?",
      options: [
        { text: "Through workshops and courses", correct: true },
        { text: "Only by reading newspapers", correct: false },
        { text: "By changing jobs every year", correct: false },
        { text: "By avoiding new skills", correct: false }
      ]
    },
    {
      q: "What is one benefit of lifelong learning?",
      options: [
        { text: "Better adaptation to change", correct: true },
        { text: "Guaranteed wealth", correct: false },
        { text: "Less responsibility", correct: false },
        { text: "Fewer opportunities", correct: false }
      ]
    }
  ]
},


{
  
  level: "B2",

  question: "Online Shopping",

  audio: `Online shopping has become very popular in recent years. Many people enjoy buying products online because it is convenient and saves time. Customers can compare prices and read reviews before making decisions. However, there are also disadvantages, such as delivery delays and the risk of receiving damaged items. Despite these problems, online shopping continues to grow around the world.`,

  script: `Online shopping has become very popular in recent years. Many people enjoy buying products online because it is convenient and saves time. Customers can compare prices and read reviews before making decisions. However, there are also disadvantages, such as delivery delays and the risk of receiving damaged items. Despite these problems, online shopping continues to grow around the world.`,

  translation: `近年、オンラインショッピングは非常に人気になっています。多くの人は便利で時間を節約できるため、オンラインで商品を買うことを楽しんでいます。購入前に価格比較やレビュー確認もできます。しかし、配送の遅れや破損した商品が届くリスクなどの欠点もあります。それでも、オンラインショッピングは世界中で成長を続けています。`,

  quiz: [
    {
      q: "Why do many people like online shopping?",
      options: [
        { text: "It is convenient", correct: true },
        { text: "It is always cheaper", correct: false },
        { text: "It removes all risks", correct: false },
        { text: "It closes stores", correct: false }
      ]
    },
    {
      q: "What can customers do online?",
      options: [
        { text: "Compare prices and read reviews", correct: true },
        { text: "Avoid all mistakes", correct: false },
        { text: "Repair products", correct: false },
        { text: "Meet sellers in person", correct: false }
      ]
    },
    {
      q: "What problem is mentioned?",
      options: [
        { text: "Delivery delays", correct: true },
        { text: "Too many workers", correct: false },
        { text: "No internet access", correct: false },
        { text: "Free products", correct: false }
      ]
    }
  ]
},

{
  
  level: "B2",

  question: "Learning a Foreign Language",

  audio: `Learning a foreign language can be challenging, but it also brings many benefits. People who study another language often improve their communication skills and learn more about different cultures. Some students struggle because they are afraid of making mistakes. However, teachers encourage learners to practice regularly and not give up. Over time, consistent effort can lead to great improvement.`,

  script: `Learning a foreign language can be challenging, but it also brings many benefits. People who study another language often improve their communication skills and learn more about different cultures. Some students struggle because they are afraid of making mistakes. However, teachers encourage learners to practice regularly and not give up. Over time, consistent effort can lead to great improvement.`,

  translation: `外国語学習は難しいこともありますが、多くの利点もあります。別の言語を学ぶ人は、コミュニケーション能力を高め、異文化についてより深く学ぶことができます。間違いを恐れて苦労する学生もいます。しかし、教師たちは定期的に練習し、諦めないよう励ましています。時間をかけた継続的な努力は、大きな上達につながります。`,

  quiz: [
    {
      q: "What is one benefit of learning a language?",
      options: [
        { text: "Better communication skills", correct: true },
        { text: "No need to study", correct: false },
        { text: "Instant fluency", correct: false },
        { text: "Less cultural understanding", correct: false }
      ]
    },
    {
      q: "Why do some students struggle?",
      options: [
        { text: "They fear making mistakes", correct: true },
        { text: "Languages are forbidden", correct: false },
        { text: "Teachers stop them", correct: false },
        { text: "Books are unavailable", correct: false }
      ]
    },
    {
      q: "What do teachers encourage?",
      options: [
        { text: "Regular practice", correct: true },
        { text: "Giving up", correct: false },
        { text: "Avoiding speaking", correct: false },
        { text: "Studying less", correct: false }
      ]
    }
  ]
},

{
  
  level: "B2",

  question: "The Benefits of Traveling",

  audio: `Traveling allows people to experience new cultures and meet different kinds of people. Many travelers enjoy trying local food and learning about history. Although traveling can sometimes be expensive, many people believe it is worth the cost because it creates valuable memories. In addition, traveling can help people become more open-minded and confident.`,

  script: `Traveling allows people to experience new cultures and meet different kinds of people. Many travelers enjoy trying local food and learning about history. Although traveling can sometimes be expensive, many people believe it is worth the cost because it creates valuable memories. In addition, traveling can help people become more open-minded and confident.`,

  translation: `旅行は新しい文化を体験し、さまざまな人々と出会う機会を与えてくれます。多くの旅行者は地元の食べ物を試したり、歴史を学んだりすることを楽しんでいます。旅行は時に高額になることもありますが、多くの人は価値ある思い出を作れるため、その費用に見合うと考えています。さらに、旅行は人をより柔軟で自信のある人間にしてくれます。`,

  quiz: [
    {
      q: "What do travelers enjoy?",
      options: [
        { text: "Trying local food", correct: true },
        { text: "Staying home all day", correct: false },
        { text: "Avoiding people", correct: false },
        { text: "Ignoring history", correct: false }
      ]
    },
    {
      q: "Why do people think traveling is worth the cost?",
      options: [
        { text: "It creates valuable memories", correct: true },
        { text: "It is always free", correct: false },
        { text: "It removes all problems", correct: false },
        { text: "It guarantees success", correct: false }
      ]
    },
    {
      q: "What can traveling help improve?",
      options: [
        { text: "Confidence", correct: true },
        { text: "Laziness", correct: false },
        { text: "Fear of people", correct: false },
        { text: "Forgetfulness", correct: false }
      ]
    }
  ]
},

{
  
  level: "B2",

  question: "The Role of Technology in Education",

  audio: `Technology has changed the way students learn in schools and universities. Online resources allow students to study anytime and find information quickly. Teachers can also use videos and interactive tools to make lessons more interesting. However, spending too much time on devices may reduce students' focus. For this reason, many experts believe technology should be used carefully in education.`,

  script: `Technology has changed the way students learn in schools and universities. Online resources allow students to study anytime and find information quickly. Teachers can also use videos and interactive tools to make lessons more interesting. However, spending too much time on devices may reduce students' focus. For this reason, many experts believe technology should be used carefully in education.`,

  translation: `テクノロジーは学校や大学での学び方を変えました。オンライン教材によって、生徒はいつでも学習し、素早く情報を見つけることができます。教師も動画やインタラクティブなツールを使い、授業をより面白くできます。しかし、デバイスを使いすぎると集中力が低下する可能性があります。そのため、多くの専門家は教育でテクノロジーを慎重に使うべきだと考えています。`,

  quiz: [
    {
      q: "How has technology helped students?",
      options: [
        { text: "They can study anytime", correct: true },
        { text: "They no longer need teachers", correct: false },
        { text: "They stop learning", correct: false },
        { text: "They avoid information", correct: false }
      ]
    },
    {
      q: "What can teachers use?",
      options: [
        { text: "Videos and interactive tools", correct: true },
        { text: "Only textbooks", correct: false },
        { text: "No technology", correct: false },
        { text: "Sports equipment", correct: false }
      ]
    },
    {
      q: "What concern is mentioned?",
      options: [
        { text: "Too much device use may reduce focus", correct: true },
        { text: "Students cannot find information", correct: false },
        { text: "Technology is disappearing", correct: false },
        { text: "Schools are closing", correct: false }
      ]
    }
  ]
},




//英語C1ゾーン
{
  
  level: "C1",

  question: "Remote Work and Productivity",

  audio: `Remote work has become increasingly common in recent years, bringing substantial changes to the workplace. While some people argue that working from home enhances productivity by reducing commuting time and allowing greater flexibility, others believe it poses a threat to teamwork and communication. From my perspective, remote work can be highly beneficial if organizations implement effective systems to support employees. In the long run, companies are likely to adopt a hybrid model that combines both office and remote work.`,

  script: `Remote work has become increasingly common in recent years, bringing substantial changes to the workplace. While some people argue that working from home enhances productivity by reducing commuting time and allowing greater flexibility, others believe it poses a threat to teamwork and communication. From my perspective, remote work can be highly beneficial if organizations implement effective systems to support employees. In the long run, companies are likely to adopt a hybrid model that combines both office and remote work.`,

  translation: `近年、リモートワークはますます一般的になり、職場に大きな変化をもたらしています。通勤時間を減らし柔軟性を高めることで生産性を向上させると考える人もいれば、チームワークやコミュニケーションへの脅威になると考える人もいます。私の考えでは、企業が従業員を支援する効果的なシステムを導入すれば、リモートワークは非常に有益になり得ます。長期的には、企業はオフィス勤務と在宅勤務を組み合わせたハイブリッド型を採用する可能性が高いです。`,

  quiz: [
    {
      q: "What is one advantage of remote work mentioned in the passage?",
      options: [
        { text: "It reduces commuting time", correct: true },
        { text: "It removes all teamwork", correct: false },
        { text: "It increases office rent", correct: false },
        { text: "It makes employees work less", correct: false }
      ]
    },
    {
      q: "What concern about remote work is mentioned?",
      options: [
        { text: "It may harm teamwork and communication", correct: true },
        { text: "It eliminates technology", correct: false },
        { text: "It causes companies to close", correct: false },
        { text: "It reduces salaries", correct: false }
      ]
    },
    {
      q: "What does the writer predict?",
      options: [
        { text: "Companies will stop remote work forever", correct: false },
        { text: "Hybrid work models will become common", correct: true },
        { text: "Everyone will work in offices", correct: false },
        { text: "Technology will disappear", correct: false }
      ]
    }
  ]
},

{
  
  level: "C1",

  question: "Climate Change and Sustainability",

  audio: `Climate change has become one of the most controversial issues of the modern era. Scientists warn that rising temperatures pose a substantial threat to ecosystems, food supplies, and public health. Although some environmental changes may seem inevitable, experts argue that governments should allocate more resources to renewable energy and sustainable practices. In the long run, even small efforts by individuals and organizations can significantly reduce environmental damage and improve quality of life.`,

  script: `Climate change has become one of the most controversial issues of the modern era. Scientists warn that rising temperatures pose a substantial threat to ecosystems, food supplies, and public health. Although some environmental changes may seem inevitable, experts argue that governments should allocate more resources to renewable energy and sustainable practices. In the long run, even small efforts by individuals and organizations can significantly reduce environmental damage and improve quality of life.`,

  translation: `気候変動は現代において最も議論を呼ぶ問題の一つとなっています。科学者たちは、気温上昇が生態系、食糧供給、公衆衛生に大きな脅威を与えると警告しています。環境変化の一部は避けられないように見えるかもしれませんが、専門家たちは政府が再生可能エネルギーや持続可能な取り組みにより多くの資源を割り当てるべきだと主張しています。長期的には、個人や組織による小さな努力であっても、環境被害を大幅に減らし生活の質を向上させることができます。`,

  quiz: [
    {
      q: "What threat does climate change pose?",
      options: [
        { text: "It threatens ecosystems and public health", correct: true },
        { text: "It improves food supplies", correct: false },
        { text: "It removes all pollution", correct: false },
        { text: "It has no impact on society", correct: false }
      ]
    },
    {
      q: "What do experts recommend governments do?",
      options: [
        { text: "Allocate more resources to sustainability", correct: true },
        { text: "Ignore renewable energy", correct: false },
        { text: "Stop environmental research", correct: false },
        { text: "Reduce education spending", correct: false }
      ]
    },
    {
      q: "What is the overall message?",
      options: [
        { text: "Climate change cannot be addressed", correct: false },
        { text: "Small efforts can help in the long run", correct: true },
        { text: "Only scientists can solve climate problems", correct: false },
        { text: "Environmental issues are unimportant", correct: false }
      ]
    }
  ]
},

{

  level: "C1",

  question: "The Influence of Social Media",

  audio: `Social media has rapidly transformed the way people communicate and consume information. While it provides convenient access to global news and entertainment, it can also give rise to misinformation and unrealistic expectations. Many people take instant communication for granted, without considering its psychological effects. Furthermore, the influence of social media remains highly controversial, as some believe it strengthens relationships while others argue that it weakens face-to-face interaction. Ultimately, users must think critically about the content they consume.`,

  script: `Social media has rapidly transformed the way people communicate and consume information. While it provides convenient access to global news and entertainment, it can also give rise to misinformation and unrealistic expectations. Many people take instant communication for granted, without considering its psychological effects. Furthermore, the influence of social media remains highly controversial, as some believe it strengthens relationships while others argue that it weakens face-to-face interaction. Ultimately, users must think critically about the content they consume.`,

  translation: `ソーシャルメディアは、人々のコミュニケーションや情報消費の方法を急速に変えました。世界中のニュースや娯楽へ便利にアクセスできる一方で、誤情報や非現実的な期待を生み出すこともあります。多くの人は、その心理的影響を考えずに即時コミュニケーションを当たり前のものと考えています。さらに、ソーシャルメディアの影響は非常に議論を呼んでおり、人間関係を強化すると考える人もいれば、対面での交流を弱めると主張する人もいます。最終的に、利用者は消費する情報について批判的に考える必要があります。`,

  quiz: [
    {
      q: "What problem can social media create?",
      options: [
        { text: "Misinformation", correct: true },
        { text: "Better face-to-face communication", correct: false },
        { text: "Less internet use", correct: false },
        { text: "Fewer opinions", correct: false }
      ]
    },
    {
      q: "What do many people take for granted?",
      options: [
        { text: "Instant communication", correct: true },
        { text: "Traditional newspapers", correct: false },
        { text: "Less technology", correct: false },
        { text: "Public transportation", correct: false }
      ]
    },
    {
      q: "What is the writer's suggestion?",
      options: [
        { text: "Avoid technology completely", correct: false },
        { text: "Think critically about online content", correct: true },
        { text: "Stop using social media", correct: false },
        { text: "Trust every source online", correct: false }
      ]
    }
  ]
},

{
  
  level: "C1",

  question: "The Value of University Education",

  audio: `University education continues to play a crucial role in preparing students for professional careers. Although some people argue that conventional education is becoming less relevant in the digital age, universities still provide valuable opportunities to develop critical thinking and communication skills. From my perspective, educational institutions should implement more practical training programs to better prepare students for the modern workplace. There is no doubt that higher education remains beneficial for personal and professional growth.`,

  script: `University education continues to play a crucial role in preparing students for professional careers. Although some people argue that conventional education is becoming less relevant in the digital age, universities still provide valuable opportunities to develop critical thinking and communication skills. From my perspective, educational institutions should implement more practical training programs to better prepare students for the modern workplace. There is no doubt that higher education remains beneficial for personal and professional growth.`,

  translation: `大学教育は、学生を職業人生に備えさせる上で重要な役割を果たし続けています。デジタル時代において従来型教育の重要性が低下していると主張する人もいますが、大学は依然として批判的思考力やコミュニケーション能力を育てる貴重な機会を提供しています。私の考えでは、教育機関は現代の職場により良く対応できるよう、実践的な研修プログラムを導入すべきです。高等教育が個人的・職業的成長に有益であることは間違いありません。`,

  quiz: [
    {
      q: "What role does university education play?",
      options: [
        { text: "It prepares students for careers", correct: true },
        { text: "It removes the need for jobs", correct: false },
        { text: "It only teaches technology", correct: false },
        { text: "It eliminates communication skills", correct: false }
      ]
    },
    {
      q: "What improvement does the writer suggest?",
      options: [
        { text: "Implement practical training programs", correct: true },
        { text: "Reduce education opportunities", correct: false },
        { text: "Stop university education", correct: false },
        { text: "Avoid critical thinking", correct: false }
      ]
    },
    {
      q: "What is the overall opinion of the writer?",
      options: [
        { text: "Higher education is still beneficial", correct: true },
        { text: "Universities are unnecessary", correct: false },
        { text: "Technology should replace teachers", correct: false },
        { text: "Education has no value", correct: false }
      ]
    }
  ]
},

{

  level: "C1",

  question: "Mental Health in Modern Society",

  audio: `Mental health has become an increasingly important topic in modern society. Stress caused by academic pressure, financial difficulties, and social expectations can deteriorate emotional well-being. However, experts emphasize that healthy habits such as regular exercise, proper sleep, and meaningful relationships can be highly beneficial. In the long run, paying attention to mental health may improve overall happiness and productivity. There is no doubt that societies should invest more effort in supporting psychological well-being.`,

  script: `Mental health has become an increasingly important topic in modern society. Stress caused by academic pressure, financial difficulties, and social expectations can deteriorate emotional well-being. However, experts emphasize that healthy habits such as regular exercise, proper sleep, and meaningful relationships can be highly beneficial. In the long run, paying attention to mental health may improve overall happiness and productivity. There is no doubt that societies should invest more effort in supporting psychological well-being.`,

  translation: `メンタルヘルスは現代社会でますます重要なテーマになっています。学業のプレッシャー、経済的困難、社会的期待によるストレスは、心の健康を悪化させる可能性があります。しかし専門家たちは、定期的な運動、十分な睡眠、有意義な人間関係といった健康的な習慣が非常に有益だと強調しています。長期的には、メンタルヘルスに注意を払うことが幸福度や生産性を向上させるかもしれません。社会が心理的健康の支援にさらに力を入れるべきであることは間違いありません。`,

  quiz: [
    {
      q: "What can deteriorate emotional well-being?",
      options: [
        { text: "Stress from pressure and difficulties", correct: true },
        { text: "Regular exercise", correct: false },
        { text: "Good sleep", correct: false },
        { text: "Healthy relationships", correct: false }
      ]
    },
    {
      q: "What do experts recommend?",
      options: [
        { text: "Healthy habits like exercise and sleep", correct: true },
        { text: "Ignoring stress", correct: false },
        { text: "Working all day", correct: false },
        { text: "Avoiding relationships", correct: false }
      ]
    },
    {
      q: "What is the passage's main message?",
      options: [
        { text: "Mental health deserves more attention", correct: true },
        { text: "Stress is unavoidable so nothing matters", correct: false },
        { text: "Sleep is unimportant", correct: false },
        { text: "Mental health only affects students", correct: false }
      ]
    }
  ]
},


{
  
  level: "C1",

  question: "Advanced Technology",

  audio: `Although artificial intelligence has rapidly transformed modern society, its influence is not entirely straightforward. On one hand, AI has significantly enhanced productivity by automating repetitive tasks, improving data analysis, and enabling faster decision-making across industries such as healthcare, finance, and education. As a result, many organizations have become more efficient and innovative than ever before. However, this technological progress also brings a range of serious challenges. Concerns about privacy have intensified, as large amounts of personal data are collected and analyzed by algorithms that are not always transparent. In addition, there is growing anxiety about job displacement, since many routine occupations are increasingly being replaced by machines. Furthermore, questions about accountability arise when AI systems make decisions that have real-world consequences. Ultimately, while AI offers remarkable benefits, it also requires careful regulation and ethical consideration to ensure that its development remains aligned with human values.`,

  script: `Although artificial intelligence has rapidly transformed modern society, its influence is not entirely straightforward. On one hand, AI has significantly enhanced productivity by automating repetitive tasks, improving data analysis, and enabling faster decision-making across industries such as healthcare, finance, and education. As a result, many organizations have become more efficient and innovative than ever before. However, this technological progress also brings a range of serious challenges. Concerns about privacy have intensified, as large amounts of personal data are collected and analyzed by algorithms that are not always transparent. In addition, there is growing anxiety about job displacement, since many routine occupations are increasingly being replaced by machines. Furthermore, questions about accountability arise when AI systems make decisions that have real-world consequences. Ultimately, while AI offers remarkable benefits, it also requires careful regulation and ethical consideration to ensure that its development remains aligned with human values.`,

  translation: `人工知能（AI）は現代社会を急速に変化させましたが、その影響は決して単純ではありません。一方で、AIは反復作業を自動化し、データ分析を改善し、医療・金融・教育などの分野でより迅速な意思決定を可能にすることで、生産性を大幅に向上させました。その結果、多くの組織はこれまで以上に効率的で革新的になりました。しかし、この技術進歩は深刻な課題ももたらしています。透明性の低いアルゴリズムによって大量の個人データが収集・分析されるため、プライバシーへの懸念が強まっています。さらに、多くの定型的な職業が機械に置き換えられつつあることから、雇用喪失への不安も高まっています。また、AIシステムが現実世界に影響を与える決定を下す際、その責任の所在についても問題が生じています。最終的に、AIには大きな利点がある一方で、その発展が人間の価値観と一致し続けるためには、慎重な規制と倫理的配慮が必要です。`,

  quiz: [
    {
      q: "What is one major benefit of AI mentioned in the passage?",
      options: [
        { text: "It automates tasks and improves productivity", correct: true },
        { text: "It eliminates all jobs", correct: false },
        { text: "It removes the need for human decisions", correct: false },
        { text: "It reduces internet usage", correct: false }
      ]
    },
    {
      q: "What is one major concern related to AI?",
      options: [
        { text: "It causes job displacement and privacy issues", correct: true },
        { text: "It makes people smarter automatically", correct: false },
        { text: "It stops technological progress", correct: false },
        { text: "It removes all data collection", correct: false }
      ]
    },
    {
      q: "What is the overall message of the passage?",
      options: [
        { text: "AI is completely harmful", correct: false },
        { text: "AI has both benefits and challenges and needs regulation", correct: true },
        { text: "AI has no impact on society", correct: false },
        { text: "AI should be ignored", correct: false }
      ]
    }
  ]
},
    {
      q: "What is one major concern related to AI?",
      options: [
        { text: "It causes job displacement and privacy issues", correct: true },
        { text: "It makes people smarter automatically", correct: false },
        { text: "It stops technological progress", correct: false },
        { text: "It removes all data collection", correct: false }
      ]
    },
    {
      q: "What is the overall message of the passage?",
      options: [
        { text: "AI is completely harmful", correct: false },
        { text: "AI has both benefits and challenges and needs regulation", correct: true },
        { text: "AI has no impact on society", correct: false },
        { text: "AI should be ignored", correct: false }
      ]
    },

    {
  
  level: "C1",

  question: "Remote Work and Productivity",

  audio: `Remote work has become increasingly common in recent years, bringing substantial changes to the workplace. While some people argue that working from home enhances productivity by reducing commuting time and allowing greater flexibility, others believe it poses a threat to teamwork and communication. From my perspective, remote work can be highly beneficial if organizations implement effective systems to support employees. In the long run, companies are likely to adopt a hybrid model that combines both office and remote work.`,

  script: `Remote work has become increasingly common in recent years, bringing substantial changes to the workplace. While some people argue that working from home enhances productivity by reducing commuting time and allowing greater flexibility, others believe it poses a threat to teamwork and communication. From my perspective, remote work can be highly beneficial if organizations implement effective systems to support employees. In the long run, companies are likely to adopt a hybrid model that combines both office and remote work.`,

  translation: `近年、リモートワークはますます一般的になり、職場に大きな変化をもたらしています。通勤時間を減らし柔軟性を高めることで生産性を向上させると考える人もいれば、チームワークやコミュニケーションへの脅威になると考える人もいます。私の考えでは、企業が従業員を支援する効果的なシステムを導入すれば、リモートワークは非常に有益になり得ます。長期的には、企業はオフィス勤務と在宅勤務を組み合わせたハイブリッド型を採用する可能性が高いです。`,

  quiz: [
    {
      q: "What is one advantage of remote work mentioned in the passage?",
      options: [
        { text: "It reduces commuting time", correct: true },
        { text: "It removes all teamwork", correct: false },
        { text: "It increases office rent", correct: false },
        { text: "It makes employees work less", correct: false }
      ]
    },
    {
      q: "What concern about remote work is mentioned?",
      options: [
        { text: "It may harm teamwork and communication", correct: true },
        { text: "It eliminates technology", correct: false },
        { text: "It causes companies to close", correct: false },
        { text: "It reduces salaries", correct: false }
      ]
    },
    {
      q: "What does the writer predict?",
      options: [
        { text: "Companies will stop remote work forever", correct: false },
        { text: "Hybrid work models will become common", correct: true },
        { text: "Everyone will work in offices", correct: false },
        { text: "Technology will disappear", correct: false }
      ]
    }
  ]
},

{

  level: "C1",

  question: "Climate Change and Sustainability",

  audio: `Climate change has become one of the most controversial issues of the modern era. Scientists warn that rising temperatures pose a substantial threat to ecosystems, food supplies, and public health. Although some environmental changes may seem inevitable, experts argue that governments should allocate more resources to renewable energy and sustainable practices. In the long run, even small efforts by individuals and organizations can significantly reduce environmental damage and improve quality of life.`,

  script: `Climate change has become one of the most controversial issues of the modern era. Scientists warn that rising temperatures pose a substantial threat to ecosystems, food supplies, and public health. Although some environmental changes may seem inevitable, experts argue that governments should allocate more resources to renewable energy and sustainable practices. In the long run, even small efforts by individuals and organizations can significantly reduce environmental damage and improve quality of life.`,

  translation: `気候変動は現代において最も議論を呼ぶ問題の一つとなっています。科学者たちは、気温上昇が生態系、食糧供給、公衆衛生に大きな脅威を与えると警告しています。環境変化の一部は避けられないように見えるかもしれませんが、専門家たちは政府が再生可能エネルギーや持続可能な取り組みにより多くの資源を割り当てるべきだと主張しています。長期的には、個人や組織による小さな努力であっても、環境被害を大幅に減らし生活の質を向上させることができます。`,

  quiz: [
    {
      q: "What threat does climate change pose?",
      options: [
        { text: "It threatens ecosystems and public health", correct: true },
        { text: "It improves food supplies", correct: false },
        { text: "It removes all pollution", correct: false },
        { text: "It has no impact on society", correct: false }
      ]
    },
    {
      q: "What do experts recommend governments do?",
      options: [
        { text: "Allocate more resources to sustainability", correct: true },
        { text: "Ignore renewable energy", correct: false },
        { text: "Stop environmental research", correct: false },
        { text: "Reduce education spending", correct: false }
      ]
    },
    {
      q: "What is the overall message?",
      options: [
        { text: "Climate change cannot be addressed", correct: false },
        { text: "Small efforts can help in the long run", correct: true },
        { text: "Only scientists can solve climate problems", correct: false },
        { text: "Environmental issues are unimportant", correct: false }
      ]
    }
  ]
},

{
  
  level: "C1",

  question: "The Influence of Social Media",

  audio: `Social media has rapidly transformed the way people communicate and consume information. While it provides convenient access to global news and entertainment, it can also give rise to misinformation and unrealistic expectations. Many people take instant communication for granted, without considering its psychological effects. Furthermore, the influence of social media remains highly controversial, as some believe it strengthens relationships while others argue that it weakens face-to-face interaction. Ultimately, users must think critically about the content they consume.`,

  script: `Social media has rapidly transformed the way people communicate and consume information. While it provides convenient access to global news and entertainment, it can also give rise to misinformation and unrealistic expectations. Many people take instant communication for granted, without considering its psychological effects. Furthermore, the influence of social media remains highly controversial, as some believe it strengthens relationships while others argue that it weakens face-to-face interaction. Ultimately, users must think critically about the content they consume.`,

  translation: `ソーシャルメディアは、人々のコミュニケーションや情報消費の方法を急速に変えました。世界中のニュースや娯楽へ便利にアクセスできる一方で、誤情報や非現実的な期待を生み出すこともあります。多くの人は、その心理的影響を考えずに即時コミュニケーションを当たり前のものと考えています。さらに、ソーシャルメディアの影響は非常に議論を呼んでおり、人間関係を強化すると考える人もいれば、対面での交流を弱めると主張する人もいます。最終的に、利用者は消費する情報について批判的に考える必要があります。`,

  quiz: [
    {
      q: "What problem can social media create?",
      options: [
        { text: "Misinformation", correct: true },
        { text: "Better face-to-face communication", correct: false },
        { text: "Less internet use", correct: false },
        { text: "Fewer opinions", correct: false }
      ]
    },
    {
      q: "What do many people take for granted?",
      options: [
        { text: "Instant communication", correct: true },
        { text: "Traditional newspapers", correct: false },
        { text: "Less technology", correct: false },
        { text: "Public transportation", correct: false }
      ]
    },
    {
      q: "What is the writer's suggestion?",
      options: [
        { text: "Avoid technology completely", correct: false },
        { text: "Think critically about online content", correct: true },
        { text: "Stop using social media", correct: false },
        { text: "Trust every source online", correct: false }
      ]
    }
  ]
},

{

  level: "C1",

  question: "The Value of University Education",

  audio: `University education continues to play a crucial role in preparing students for professional careers. Although some people argue that conventional education is becoming less relevant in the digital age, universities still provide valuable opportunities to develop critical thinking and communication skills. From my perspective, educational institutions should implement more practical training programs to better prepare students for the modern workplace. There is no doubt that higher education remains beneficial for personal and professional growth.`,

  script: `University education continues to play a crucial role in preparing students for professional careers. Although some people argue that conventional education is becoming less relevant in the digital age, universities still provide valuable opportunities to develop critical thinking and communication skills. From my perspective, educational institutions should implement more practical training programs to better prepare students for the modern workplace. There is no doubt that higher education remains beneficial for personal and professional growth.`,

  translation: `大学教育は、学生を職業人生に備えさせる上で重要な役割を果たし続けています。デジタル時代において従来型教育の重要性が低下していると主張する人もいますが、大学は依然として批判的思考力やコミュニケーション能力を育てる貴重な機会を提供しています。私の考えでは、教育機関は現代の職場により良く対応できるよう、実践的な研修プログラムを導入すべきです。高等教育が個人的・職業的成長に有益であることは間違いありません。`,

  quiz: [
    {
      q: "What role does university education play?",
      options: [
        { text: "It prepares students for careers", correct: true },
        { text: "It removes the need for jobs", correct: false },
        { text: "It only teaches technology", correct: false },
        { text: "It eliminates communication skills", correct: false }
      ]
    },
    {
      q: "What improvement does the writer suggest?",
      options: [
        { text: "Implement practical training programs", correct: true },
        { text: "Reduce education opportunities", correct: false },
        { text: "Stop university education", correct: false },
        { text: "Avoid critical thinking", correct: false }
      ]
    },
    {
      q: "What is the overall opinion of the writer?",
      options: [
        { text: "Higher education is still beneficial", correct: true },
        { text: "Universities are unnecessary", correct: false },
        { text: "Technology should replace teachers", correct: false },
        { text: "Education has no value", correct: false }
      ]
    }
  ]
},

{
  
  level: "C1",

  question: "Mental Health in Modern Society",

  audio: `Mental health has become an increasingly important topic in modern society. Stress caused by academic pressure, financial difficulties, and social expectations can deteriorate emotional well-being. However, experts emphasize that healthy habits such as regular exercise, proper sleep, and meaningful relationships can be highly beneficial. In the long run, paying attention to mental health may improve overall happiness and productivity. There is no doubt that societies should invest more effort in supporting psychological well-being.`,

  script: `Mental health has become an increasingly important topic in modern society. Stress caused by academic pressure, financial difficulties, and social expectations can deteriorate emotional well-being. However, experts emphasize that healthy habits such as regular exercise, proper sleep, and meaningful relationships can be highly beneficial. In the long run, paying attention to mental health may improve overall happiness and productivity. There is no doubt that societies should invest more effort in supporting psychological well-being.`,

  translation: `メンタルヘルスは現代社会でますます重要なテーマになっています。学業のプレッシャー、経済的困難、社会的期待によるストレスは、心の健康を悪化させる可能性があります。しかし専門家たちは、定期的な運動、十分な睡眠、有意義な人間関係といった健康的な習慣が非常に有益だと強調しています。長期的には、メンタルヘルスに注意を払うことが幸福度や生産性を向上させるかもしれません。社会が心理的健康の支援にさらに力を入れるべきであることは間違いありません。`,

  quiz: [
    {
      q: "What can deteriorate emotional well-being?",
      options: [
        { text: "Stress from pressure and difficulties", correct: true },
        { text: "Regular exercise", correct: false },
        { text: "Good sleep", correct: false },
        { text: "Healthy relationships", correct: false }
      ]
    },
    {
      q: "What do experts recommend?",
      options: [
        { text: "Healthy habits like exercise and sleep", correct: true },
        { text: "Ignoring stress", correct: false },
        { text: "Working all day", correct: false },
        { text: "Avoiding relationships", correct: false }
      ]
    },
    {
      q: "What is the passage's main message?",
      options: [
        { text: "Mental health deserves more attention", correct: true },
        { text: "Stress is unavoidable so nothing matters", correct: false },
        { text: "Sleep is unimportant", correct: false },
        { text: "Mental health only affects students", correct: false }
      ]
    }
  ]
},]