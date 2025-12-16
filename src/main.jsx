import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Initialize Firebase Analytics
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCTgvavhgAUAoYzCgtMqUP7-OBXmG19lwo",
  authDomain: "vit-verse.firebaseapp.com",
  projectId: "vit-verse",
  storageBucket: "vit-verse.firebasestorage.app",
  messagingSenderId: "229552097747",
  appId: "1:229552097747:web:faee6d2e6d9b2cf2e60726",
  measurementId: "G-5J3ZSFPX79"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

logEvent(analytics, "page_view", {
  page_title: document.title,
  page_location: window.location.href,
  page_path: window.location.pathname,
  site: window.location.hostname
});

window.vitverseAnalytics = analytics;
window.vitverseLogEvent = logEvent;

console.log("Firebase Analytics initialized");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
