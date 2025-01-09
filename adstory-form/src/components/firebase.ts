// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { FirebaseApp } from "firebase/app";
import { Firestore } from "firebase/firestore";
import { Analytics } from "firebase/analytics";

// Define Firebase configuration as a type
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

// Your web app's Firebase configuration
const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyB7V1p1xKaLeunVSStZFLc8bN7aNEjBRfU",
  authDomain: "adstory-cd9ce.firebaseapp.com",
  projectId: "adstory-cd9ce",
  storageBucket: "adstory-cd9ce.appspot.com",
  messagingSenderId: "397520139615",
  appId: "1:397520139615:web:3f251ac3f69560191b32ea",
  measurementId: "G-L6YMRQW2MS",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const analytics: Analytics = getAnalytics(app);
const db: Firestore = getFirestore(app);

// Export Firebase services
export { app, analytics, db };
