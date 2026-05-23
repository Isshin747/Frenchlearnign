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
let allStories = [];


// =====================
// ログイン
// =====================
document.getElementById("loginBtn").addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    console.error(err);
    alert("ログイン失敗");
  }
});


// =====================
// ユーザー監視
// =====================
onAuthStateChanged(auth, (user) => {
  currentUser = user || null;

  document.getElementById("user").innerText =
    user ? `Hello ${user.displayName}` : "Not logged in";

  loadStories();
});


// =====================
// 投稿
// =====================
document.getElementById("postBtn").addEventListener("click", async () => {
  if (!currentUser) return alert("ログインしてね");

  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();
  const language = document.getElementById("language").value;
  const genre = document.getElementById("genre").value;

  if (!title || !content) return alert("書いてね");

  try {
    await addDoc(collection(db, "stories"), {
  title,
  content,
  name: currentUser.displayName,
  email: currentUser.email,
  uid: currentUser.uid, // ←追加
  likes: 0,
  language,
  genre,
  createdAt: serverTimestamp()
});

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    loadStories();
    showList();
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
  if (!currentUser) return alert("ログインしてね");
  if (!confirm("削除する？")) return;

  try {
    await deleteDoc(doc(db, "stories", id));
    loadStories();
  } catch (err) {
    console.error(err);
  }
};


// =====================
// 読み込み（目次）
/* ===================== */
async function loadStories() {
  const toc = document.getElementById("toc");
  toc.innerHTML = "";

  const q = query(
    collection(db, "stories"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  snapshot.forEach((storyDoc) => {
    const story = storyDoc.data();

    const item = document.createElement("div");
    item.className = "story-item";

    // タイトル一覧 + 自分だけ削除ボタン
    item.innerHTML = `
      <div class="story-row">
        <span class="story-title">
          • ${story.title}
        </span>

        ${
          currentUser &&
          currentUser.uid === story.uid
            ? `<button class="delete-btn">
                Delete
              </button>`
            : ""
        }
      </div>
    `;

    // タイトルクリック → 読む
    item.querySelector(".story-title")
      .onclick = () => {

      document.getElementById(
        "listView"
      ).style.display = "none";

      document.getElementById(
        "writeView"
      ).style.display = "none";

      document.getElementById(
        "readView"
      ).style.display = "block";

      document.getElementById(
        "viewTitle"
      ).textContent = story.title;

      document.getElementById(
        "viewMeta"
      ).textContent =
        `${story.language} | ${story.genre} | by ${story.name}`;

      document.getElementById(
        "viewContent"
      ).textContent =
        story.content;
    };

    // 削除ボタン
    const deleteBtn =
      item.querySelector(".delete-btn");

    if (deleteBtn) {
      deleteBtn.onclick = async (e) => {
        e.stopPropagation();

        // ログイン確認
        if (!currentUser) {
          alert("ログインしてね");
          return;
        }

        // 自分の投稿だけ
        if (story.uid !== currentUser.uid) {
          alert("自分の投稿だけ削除できます");
          return;
        }

        const ok = confirm(
          "Delete this story?"
        );

        if (!ok) return;

        try {
          await deleteDoc(
            doc(db, "stories", storyDoc.id)
          );

          loadStories();

        } catch (err) {
          console.error(err);
          alert("削除失敗");
        }
      };
    }

    toc.appendChild(item);
  });
}
// =====================
// 作品表示
// =====================


// =====================
// 画面切り替え
// =====================
window.showList = () => {
  document.getElementById("listView").style.display = "block";
  document.getElementById("readView").style.display = "none";
  document.getElementById("writeView").style.display = "none";
};

window.showWrite = () => {
  document.getElementById("listView").style.display = "none";
  document.getElementById("readView").style.display = "none";
  document.getElementById("writeView").style.display = "block";
};


// =====================
// XSS対策
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


// 初期読み込み
loadStories();