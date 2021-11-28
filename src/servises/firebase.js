import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDaNYN6c4HBkduXDZeG2py5kJm_2_CqC8I",
    authDomain: "amreact-b972c.firebaseapp.com",
    projectId: "amreact-b972c",
    storageBucket: "amreact-b972c.appspot.com",
    messagingSenderId: "733309713364",
    appId: "1:733309713364:web:e7875caec4a015ba4ef441"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = async (email, pass) => await createUserWithEmailAndPassword(auth, email, pass);

export const logIn = async (email, pass) => await signInWithEmailAndPassword(auth, email, pass);

export const logOut = async () => await signOut(auth);

export const db = getDatabase(app);
export const userRef = ref(db, 'user');
export const chatsRef = ref(db, 'chats');
export const messagesRef = ref(db, 'messages');
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getChatMsgsListRefById = (chatId) => ref(db, `messages/${chatId}/messageList`);
export const getChatMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);