import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";


const MAP_API_KEY = 'AIzaSyAufqVaMyToBDxvaB98TRicDpcy6OWN-cU'
const firebaseConfig = {
  apiKey: "AIzaSyCcrmc-xWUUqUUTNUc4Wh1cPn2QwBx6mWk",
  authDomain: "tourist-assistance-web.firebaseapp.com",
  databaseURL: "https://tourist-assistance-web-default-rtdb.firebaseio.com",
  projectId: "tourist-assistance-web",
  storageBucket: "tourist-assistance-web.firebasestorage.app",
  messagingSenderId: "425469167399",
  appId: "1:425469167399:web:06db513c363870bde94b02",
  measurementId: "G-GB2EHP0YMQ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);
