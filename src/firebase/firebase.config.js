// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId
};


// const firebaseConfig = {

//   apiKey: "AIzaSyC3okm_lP9_pqH6dS7z-8RGcxq8-qep4vQ",

//   authDomain: "cars-doctor-5fa27.firebaseapp.com",

//   projectId: "cars-doctor-5fa27",

//   storageBucket: "cars-doctor-5fa27.appspot.com",

//   messagingSenderId: "1094443277182",

//   appId: "1:1094443277182:web:af429112b1c1aff9ba712f"

// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;