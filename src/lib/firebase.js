// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGSe-_5_oZ6LadA_3PiFUahigF9Fek_fA",
    authDomain: "inventory-tracker-ec784.firebaseapp.com",
    projectId: "inventory-tracker-ec784",
    storageBucket: "inventory-tracker-ec784.appspot.com",
    messagingSenderId: "780441349030",
    appId: "1:780441349030:web:e5d1356dc465b38e9c7d67",
    measurementId: "G-8YSRJVY3P0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let db = getFirestore(app);

export { db, app };
export {
    collection,
    doc,
    getDoc,
    getDocs,
} from 'firebase/firestore';