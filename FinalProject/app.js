import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, where, getDocs, updateDoc, doc} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

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