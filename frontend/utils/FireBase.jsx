import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "onecart-b86fb.firebaseapp.com",
  projectId: "onecart-b86fb",
  storageBucket: "onecart-b86fb.appspot.com",
  messagingSenderId: "1038901030759",
  appId: "1:1038901030759:web:b086c25d361adaabe709c2"
};

 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export {auth, provider}