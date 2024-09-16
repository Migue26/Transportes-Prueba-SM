// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATNhiDdCjH7uxwhaNSPSX8rox5bteQDi4",
  authDomain: "db-transportes-mdsm.firebaseapp.com",
  databaseURL: "https://db-transportes-mdsm-default-rtdb.firebaseio.com",
  projectId: "db-transportes-mdsm",
  storageBucket: "db-transportes-mdsm.appspot.com",
  messagingSenderId: "623416933240",
  appId: "1:623416933240:web:ca2b478a8566641a84a68d",
};
// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore (o cualquier otro servicio de Firebase que necesites)
const db = getFirestore(app);

export { app, db };
