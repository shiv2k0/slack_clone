import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyC_ac889d3z14QNe_G_5pHz2RumlBcrpJM",
  authDomain: "slack-clone-d4084.firebaseapp.com",
  projectId: "slack-clone-d4084",
  storageBucket: "slack-clone-d4084.appspot.com",
  messagingSenderId: "806741766493",
  appId: "1:806741766493:web:76668bd9ebcb546e88f8b4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {app,db,auth,provider,
  signInWithPopup

}