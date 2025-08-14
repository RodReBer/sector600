import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Provide a default config for SSR
const defaultConfig = {
  apiKey: "dummy-key-for-ssr",
  authDomain: "dummy-domain",
  projectId: "dummy-project",
  storageBucket: "dummy-bucket",
  messagingSenderId: "dummy-sender",
  appId: "dummy-app-id",
  measurementId: "dummy-measure-id",
};

const firebaseConfig = typeof window !== 'undefined' 
  ? {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    }
  : defaultConfig;

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Only initialize services on the client side
let db, auth, analytics;

if (typeof window !== "undefined") {
  db = getFirestore(app);
  auth = getAuth(app);
  analytics = getAnalytics(app);
}

export { app, db, auth, analytics };
