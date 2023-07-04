import { getApp, getApps, initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC8Ayl-DISGiZwS3J8KOb5tXJW1OwA64oo",
  authDomain: "media-page-e0648.firebaseapp.com",
  databaseURL: "https://media-page-e0648-default-rtdb.firebaseio.com",
  projectId: "media-page-e0648",
  storageBucket: "media-page-e0648.appspot.com",
  messagingSenderId: "530330106531",
  appId: "1:530330106531:web:28c029993aed5b342edd16",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFireStore(app);

const storage = getStorage(app);

export { app, firestore, storage };
