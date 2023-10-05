// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY ,
  authDomain: import.meta.env.VITE_AUTHDOMAI ,
  projectId: import.meta.env.VITE_PROJECTI,
  storageBucket: import.meta.env.VITE_STORAGEBUCKE,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERI ,
  appId: import.meta.env.VITE_APPI,
};

const app = initializeApp(firebaseConfig);
export default app;