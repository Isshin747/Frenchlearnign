import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore, collection, addDoc, getDocs, query, orderBy, serverTimestamp, doc, updateDoc, increment
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import {
  getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase設定
const firebaseConfig = {
  apiKey: "AIzaSyCExOr7lQwVscWeUpENofSeR6c0xo9kCXc",
  authDomain: "gengolab-429d2.firebaseapp.com",
  projectId: "gengolab-429d2",
  storageBucket: "gengolab-429d2.firebasestorage.app",
  messagingSenderId: "216590327793",
  appId: "1:216590327793:web:fadb607c3567d9c7e6ee50"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

let currentUser = null;

// ログイン
document.getElementById("loginBtn").onclick = () => {
  signInWithPopup(auth, provider);
};

// ユーザー表示
onAuthStateChanged(auth, (user) => {
  currentUser = user;
  document.getElementById("user").innerText = user
    ? "Hello " + user.displayName
    : "";
});

// 投稿
document.getElementById("postBtn").onclick = async () => {
  if (!currentUser) return alert("login first");

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  await addDoc(collection(db, "stories"), {
    title,
    content,
    name: currentUser.displayName,
    likes: 0,
    createdAt: serverTimestamp()
  });

  loadStories();
};

// いいね
window.likeStory = async function (id) {
  await updateDoc(doc(db, "stories", id), {
    likes: increment(1)
  });

  loadStories();
};

// 表示
async function loadStories() {
  const q = query(collection(db, "stories"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);

  const stories = document.getElementById("stories");
  stories.innerHTML = "";

  snap.forEach(docu => {
    const d = docu.data();
    const id = docu.id;

    stories.innerHTML += `
      <div class="story">
        <h3>${d.title}</h3>
        <p>${d.content}</p>
        <small>by ${d.name}</small><br>
        <button class="like-btn" onclick="likeStory('${id}')">
          ❤️ ${d.likes}
        </button>
      </div>
    `;
  });
}

loadStories();

await addDoc(collection(db, "stories"), {
  title,
  content,
  name: currentUser.displayName,
  email: currentUser.email,   // ←追加
  likes: 0,
  createdAt: serverTimestamp()
});

stories.innerHTML += `
  <div class="story">
    <h3>${d.title}</h3>
    <p>${d.content}</p>
    <small>by ${d.name}</small><br>

    <button onclick="likeStory('${id}')">
      ❤️ ${d.likes}
    </button>

    ${currentUser && currentUser.email === d.email ? `
      <button onclick="deleteStory('${id}')" style="margin-left:10px;">
        🗑 Delete
      </button>
    ` : ""}

  </div>
`;

import { deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.deleteStory = async function(id) {
  if (!confirm("Delete this story?")) return;

  await deleteDoc(doc(db, "stories", id));
  loadStories();
};