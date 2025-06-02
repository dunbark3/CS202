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
    "./music/music1.mp3",
    "./music/music2.mp3",
    "./music/music3.mp3",
    "./music/music4.mp3"
];

const playing = doc(db, "playing", "now_playing");

let trackIndex = 0;

async function startTrack(ind) {
    await setDoc(playing, {
        currentTrack: ind,
        startedAt: serverTimestamp()
    });
}

const player = document.getElementById("player");

async function play() {
    const snap = await getDoc(playing);
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

document.getElementById("playBtn").addEventListener("click", () => {
    play();
});

player.addEventListener("ended", async () => {
    const next = (trackIndex + 1) % trackList.length;
    await startTrack(next);

    const elapsed = 0;
    trackIndex = next;
    player.src = trackList[trackIndex];

    player.addEventListener("loadedmetadata", () => {
        player.currentTime = elapsed;
        player.play();
    }, { once: true });
});

// Chat helped here
const audio = document.getElementById('player');
const canvas = document.getElementById('visualizer');
const ctx = canvas.getContext('2d');

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const source = audioCtx.createMediaElementSource(audio);
const analyser = audioCtx.createAnalyser();
analyser.fftSize = 512;
source.connect(analyser);
analyser.connect(audioCtx.destination);

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

function draw() {
    requestAnimationFrame(draw);

    analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const barWidth = (canvas.width / bufferLength) * 2.5;
    const totalBarWidth = (barWidth + 1) * bufferLength;
    let x = (canvas.width - totalBarWidth) / 2;

    for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i];

        ctx.fillStyle = "white";
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        x += barWidth + 1;
    }
}

audio.addEventListener("play", () => {
    if (audioCtx.state === "suspended") {
        audioCtx.resume();
    }
    draw();
});