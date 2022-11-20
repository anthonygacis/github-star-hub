// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "github-star-hub.firebaseapp.com",
    projectId: "github-star-hub",
    storageBucket: "github-star-hub.appspot.com",
    messagingSenderId: "985580287799",
    appId: "1:985580287799:web:bd0d5b466fdb43a2528cb2",
    measurementId: "G-LWEHZKZVR6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
