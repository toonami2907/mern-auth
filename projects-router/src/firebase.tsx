// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// If you're not using Firebase Analytics, you can remove the import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-app-76822.firebaseapp.com",
  projectId: "mern-app-76822",
  storageBucket: "mern-app-76822.appspot.com",
  messagingSenderId: "707277873665",
  appId: "1:707277873665:web:8fcfee6967ab05bdaed600",
  // Measurement ID is optional if you're not using Firebase Analytics
  // measurementId: "G-49V0M56434"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// If you're not using Firebase Analytics, you can remove this line
// const analytics = getAnalytics(app);
