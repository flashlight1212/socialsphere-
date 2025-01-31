// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvF-S89rvcyQWz_zdnuh3FX62PB3Jb2R4",
    authDomain: "socialsphere-eea99.firebaseapp.com",
    databaseURL: "https://socialsphere-eea99-default-rtdb.firebaseio.com",
    projectId: "socialsphere-eea99",
    storageBucket: "socialsphere-eea99.firebasestorage.app",
    messagingSenderId: "65384461572"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// Login Function
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location.href = 'index.html';
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Registration Function
function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Save user data
            const user = userCredential.user;
            database.ref('users/' + user.uid).set({
                email: email,
                joined: Date.now()
            });
            alert('Registration successful!');
            window.location.href = 'index.html';
        })
        .catch((error) => {
            alert(error.message);
        });
}
