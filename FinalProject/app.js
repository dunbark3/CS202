import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

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

const messagesRef = collection(db, 'messages');
const chat = document.getElementById('messages');

// Reveal the forms
document.getElementById('signup').addEventListener('click', () => {
    document.getElementById('signup_form').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
    document.getElementById('signin').style.display = 'none';
});
document.getElementById('signin').addEventListener('click', () => {
    document.getElementById('signin_form').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
    document.getElementById('signin').style.display = 'none';
});

// Check for validation
let user_name;

const users = collection(db, 'users');
document.getElementById('signup').addEventListener('submit', async function(event) {
    const name = document.getElementById('name').value.trim();
    const password = document.getElementById('password').value.trim();

    const q = query(users, where("name", "==", name));
    const search = await getDocs(q);

    if(!search.empty) {
        const user = search.docs[0].data();
        const temp = doc(db, "users", user.id);

        await updateDoc(temp, {
            password: password
        });
        user_name = name;
    } else {
        window.location.href = 'chat.html';
        console.log("No user found with that name.");
    }
});

document.getElementById('signin').addEventListener('submit', async function(event) {
    const name = document.getElementById('name').value.trim();
    const password = document.getElementById('password').value.trim();

    const q1 = query(users, where("name", "==", name));
    const search = await getDocs(q);

    if(!search.empty) {
        const user = search.docs[0].data();

        if(temp.password == password) {
            user_name = name;
        } else {
            console.log("Invalid password.");
        }
        window.location.href = 'chat.html';
    } else {
        console.log("No user found with that name.");
    }
});

document.getElementById('sendBtn').addEventListener('click', async () => {
    const text = document.getElementById('messageInput').value.trim();

    await addDoc(messagesRef, {
        text,
        timestamp: serverTimestamp()
    });

    document.getElementById('messageInput').value = '';
});

const q = query(messagesRef, orderBy('timestamp'));
onSnapshot(q, (snapshot) => {
    chat.innerHTML = ''; 

    snapshot.forEach(doc => {
        const message = doc.data();
        const text = document.createElement('div');
        text.textContent = `${user_name}: ${message.text}`;
        chat.appendChild(text);
    });

    chat.scrollTop = chat.scrollHeight;
});