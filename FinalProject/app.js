import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, where, getDoc, updateDoc, doc, setDoc} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDtU5uT1M82xdx6rKJC-X7tLmU8IJV9Oio",
    authDomain: "cs202-class-playlist-27c08.firebaseapp.com",
    projectId: "cs202-class-playlist-27c08",
    storageBucket: "cs202-class-playlist-27c08.firebasestorage.app",
    messagingSenderId: "847568342971",
    appId: "1:847568342971:web:f5740d09765da598df7e9e"
};
      
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const user_name = localStorage.getItem('user_name');
const messagesRef = collection(db, 'messages');
const chat = document.getElementById('messages');

document.getElementById('sendBtn').addEventListener('click', async () => {
    const text = document.getElementById('messageInput').value.trim();

    await addDoc(messagesRef, {
        name: user_name,
        text,
        timestamp: serverTimestamp()
    });

    document.getElementById('messageInput').value = '';
});

const update = query(messagesRef, orderBy('timestamp'));
onSnapshot(update, (snapshot) => {
    chat.innerHTML = ''; 

    snapshot.forEach(doc => {
        const message = doc.data();
        const text = document.createElement('div');
        text.textContent = `${message.name}: ${message.text}`;
        chat.appendChild(text);
    });

    chat.scrollTop = chat.scrollHeight;
});

const trackList = [
    "/music/music1.mp3",
    "/music/music2.mp3",
    "/music/music3.mp3",
    "/music/music4.mp3"
];

const playing = doc(db, "playback", "now_playing");

let trackIndex = 0;

async function startTrack(index) {
    await setDoc(playing, {
        currentTrack: index,
        startedAt: serverTimestamp()
    });
}

const player = document.getElementById("player");

async function play() {
    const snap = await getDoc(playing);

    if (!snap.exists()) {
        await startTrack(0);
        return;
    }
  
    const data = snap.data();
    trackIndex = data.currentTrack;
    const startedAt = data.startedAt.toMillis();
    const now = Date.now();
    const elapsed = (now - startedAt) / 1000;
  
    player.src = trackList[trackIndex];
    
    player.addEventListener("loadedmetadata", () => {
        player.currentTime = elapsed;
        player.play();
    }, { once: true });
}

player.addEventListener("ended", async () => {
    trackIndex = (trackIndex + 1) % trackList.length;
    await startTrack(trackIndex);
});

document.getElementById("startPlaybackBtn").addEventListener("click", () => {
    play();
});