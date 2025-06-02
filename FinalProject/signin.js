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

const users = collection(db, 'users');
document.getElementById('signup_form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('signup_name');
    const passwordInput = document.getElementById('signup_password');
    const errorMsg = document.getElementById('signup_error');
    const name = nameInput.value.trim();
    const password = passwordInput.value.trim();

    const q = query(users, where("name", "==", name));
    const search = await getDocs(q);

    if(!search.empty) {
        const user = search.docs[0];
        const temp = doc(db, "users", user.id);

        await updateDoc(temp, {
            password: password
        });
        localStorage.setItem('user_name', name);
        window.location.href = 'chat.html';
    } else {
        errorMsg.textContent = "No user found with that name.";
        nameInput.classList.add('input_error');
        passwordInput.classList.add('input_error');
        nameInput.value = '';
        passwordInput.value = '';
    }
});

document.getElementById('signin_form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('signin_name');
    const passwordInput = document.getElementById('signin_password');
    const errorMsg = document.getElementById('signin_error');

    const name = nameInput.value.trim();
    const password = passwordInput.value.trim();

    const q1 = query(users, where("name", "==", name));
    const search = await getDocs(q1);

    if(!search.empty) {
        const user = search.docs[0].data();

        if(user.password == password) {
            localStorage.setItem('user_name', name);
            window.location.href = 'chat.html';
        } else {
            errorMsg.textContent = "Invalid password.";
            passwordInput.classList.add('input_error');
            passwordInput.value = '';
        }
    } else {
        errorMsg.textContent = "No user found with that name.";
        nameInput.classList.add('input_error');
        passwordInput.classList.add('input_error');
        nameInput.value = '';
        passwordInput.value = '';
    }

    setTimeout(() => {
        nameInput.classList.remove('input_error');
        passwordInput.classList.remove('input_error');
        errorMsg.textContent = '';
    }, 3000);
});