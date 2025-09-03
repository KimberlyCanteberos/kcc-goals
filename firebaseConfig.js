
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCfFwESTWPXvjNWnBETmUw8Q-_oBUJq0g8",
  authDomain: "taskease-5a420.firebaseapp.com",
  projectId: "taskease-5a420",
  storageBucket: "taskease-5a420.firebasestorage.app",
  messagingSenderId: "402603351643",
  appId: "1:402603351643:web:cca5ca4d6deeb6e372697e",
  measurementId: "G-1ZW59WDCT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)