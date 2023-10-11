import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { getStorage, ref as StorageRef } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyByAXW6Oim71S4dKFaLWbZ_ruT80oODLqA",
    authDomain: "bct-guest-book.firebaseapp.com",
    projectId: "bct-guest-book",
    storageBucket: "bct-guest-book.appspot.com",
    messagingSenderId: "729733774514",
    appId: "1:729733774514:web:b4cedd1abe3aa0744e5dab",
    measurementId: "G-5RJ02BJ8DC"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const storage = getStorage(app);

export { db, push, ref, storage, StorageRef };