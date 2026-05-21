import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  doc,
  updateDoc,
  increment,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// =====================
// Firebase設定
// =====================
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


// =====================
// ログイン
// =====================
document.getElementById("loginBtn").addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    console.error("Login error:", err);
    alert("ログイン失敗");
  }
});


// =====================
// ユーザー状態監視
// =====================
onAuthStateChanged(auth, (user) => {
  currentUser = user || null;

  document.getElementById("user").innerText =
    user ? `Hello ${user.displayName}` : "Not logged in";

  loadStories(); // ←状態変わったら再読み込み
});


// =====================
// 投稿
// =====================
document.getElementById("postBtn").addEventListener("click", async () => {
  if (!currentUser) return alert("ログインしてね");

  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();

  if (!title || !content) return alert("タイトルと本文を書いてね");

  try {
    await addDoc(collection(db, "stories"), {
      title,
      content,
      name: currentUser.displayName,
      email: currentUser.email,
      likes: 0,
      createdAt: serverTimestamp()
    });

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    loadStories();
  } catch (err) {
    console.error(err);
  }
});


// =====================
// いいね
// =====================
window.likeStory = async (id) => {
  try {
    await updateDoc(doc(db, "stories", id), {
      likes: increment(1)
    });

    loadStories();
  } catch (err) {
    console.error(err);
  }
};


// =====================
// 削除
// =====================
window.deleteStory = async (id) => {
  if (!confirm("削除する？")) return;

  try {
    await deleteDoc(doc(db, "stories", id));
    loadStories();
  } catch (err) {
    console.error(err);
  }
};


// =====================
// 表示
// =====================
async function loadStories() {
  const storiesEl = document.getElementById("stories");
  if (!storiesEl) return;

  storiesEl.innerHTML = "";

  try {
    const q = query(
      collection(db, "stories"),
      orderBy("createdAt", "desc")
    );

    const snap = await getDocs(q);

    snap.forEach((docu) => {
      const d = docu.data();
      const id = docu.id;

      const isOwner = currentUser && currentUser.email === d.email;

      storiesEl.innerHTML += `
        <div class="story">
          <h3>${escapeHTML(d.title)}</h3>
          <p>${escapeHTML(d.content)}</p>
          <small>by ${escapeHTML(d.name || "unknown")}</small>
          <br>

          <button onclick="likeStory('${id}')">
            ❤️ ${d.likes || 0}
          </button>

          ${isOwner ? `
            <button onclick="deleteStory('${id}')">🗑</button>
          ` : ""}
        </div>
      `;
    });
  } catch (err) {
    console.error("Load error:", err);
  }
}


// =====================
// HTMLエスケープ（軽いXSS対策）
// =====================
function escapeHTML(str) {
  if (!str) return "";
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


// 初回読み込み
loadStories();