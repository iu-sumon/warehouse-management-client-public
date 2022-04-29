// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAs7J9XJNaeMmtiKGpT0DG0f0dggXZeqp4",
    authDomain: "electronics-store-client.firebaseapp.com",
    projectId: "electronics-store-client",
    storageBucket: "electronics-store-client.appspot.com",
    messagingSenderId: "601952951638",
    appId: "1:601952951638:web:b7bee4a091a314e0dc8af7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;