import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAUuAgG6qDhAQOLpcNyLAouFg7IdmdOv8o",
  authDomain: "lima-veiculos.firebaseapp.com",
  projectId: "lima-veiculos",
  storageBucket: "lima-veiculos.appspot.com",
  messagingSenderId: "719794655365",
  appId: "1:719794655365:web:e6ab419975c020234a19ec",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
