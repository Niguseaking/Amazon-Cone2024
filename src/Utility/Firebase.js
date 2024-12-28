

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth" ;
import {getAuth} from  "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBnc1xL59wl0XtHwewXv-lcXY_5WV5w85g",
  authDomain: "clone2024-a9417.firebaseapp.com",
  projectId: "clone2024-a9417",
  storageBucket: "clone2024-a9417.appspot.com",
  messagingSenderId: "645535135458",
  appId: "1:645535135458:web:e65e835086dbbe870150bb",
  measurementId: "G-RRL1GY9L6Y",
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
export const auth = getAuth(app);
//export const auth = firebase.auth();
