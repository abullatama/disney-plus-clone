import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA478eeg6F1oOumsBBOEoDtt_UXgvwIhM8",
  authDomain: "disneyplus-clone-63fe4.firebaseapp.com",
  projectId: "disneyplus-clone-63fe4",
  storageBucket: "disneyplus-clone-63fe4.appspot.com",
  messagingSenderId: "558063704981",
  appId: "1:558063704981:web:f2bd867550c2372907349c",
  measurementId: "G-99GS1DE39K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
