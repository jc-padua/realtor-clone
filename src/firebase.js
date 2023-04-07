// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDedhrMfrOoE04nVTPJ67tArMNxBS1kPRo",
    authDomain: "realtor-clone-react-71349.firebaseapp.com",
    projectId: "realtor-clone-react-71349",
    storageBucket: "realtor-clone-react-71349.appspot.com",
    messagingSenderId: "968097339104",
    appId: "1:968097339104:web:c79582a9137b5b12b4e285"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();