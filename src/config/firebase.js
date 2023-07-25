import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeRTv8kulwH8Mw_2ygYjxJs_K6P1e0Q5o",
  authDomain: "panda-web-2fdf0.firebaseapp.com",
  projectId: "panda-web-2fdf0",
  storageBucket: "panda-web-2fdf0.appspot.com",
  messagingSenderId: "817726041042",
  appId: "1:817726041042:web:ce10d78f16055e58fcf60b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);