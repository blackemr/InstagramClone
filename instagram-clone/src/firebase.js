import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAgaIaWMahD6xWxnu_WZhouzAqi-CMgO3k",
    authDomain: "instagram-clone-78eb7.firebaseapp.com",
    projectId: "instagram-clone-78eb7",
    storageBucket: "instagram-clone-78eb7.appspot.com",
    messagingSenderId: "895101224552",
    appId: "1:895101224552:web:16c379393cce3a9b961ddd"
});

const db = firebaseConfig.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };