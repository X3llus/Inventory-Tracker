import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAGSe-_5_oZ6LadA_3PiFUahigF9Fek_fA",
  authDomain: "inventory-tracker-ec784.firebaseapp.com",
  projectId: "inventory-tracker-ec784",
  storageBucket: "inventory-tracker-ec784.appspot.com",
  messagingSenderId: "780441349030",
  appId: "1:780441349030:web:e5d1356dc465b38e9c7d67",
  measurementId: "G-8YSRJVY3P0"
};
const app = initializeApp(firebaseConfig);
getFirestore(app);
