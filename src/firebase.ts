// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1dedHGzCwNZu6cJiE916X806WX2R6Fkc",
  authDomain: "fir-d04d9.firebaseapp.com",
  projectId: "fir-d04d9",
  storageBucket: "fir-d04d9.appspot.com",
  messagingSenderId: "51547567271",
  appId: "1:51547567271:web:b240669587369e6f8f9782",
  measurementId: "G-EHLY9PF59S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
