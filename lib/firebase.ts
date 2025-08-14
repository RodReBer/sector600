import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getAuth, type Auth } from "firebase/auth";
import { getAnalytics, type Analytics } from "firebase/analytics";

// Provide a default config for SSR
const defaultConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "dummy-key-for-ssr",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "dummy-domain",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "dummy-project",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "dummy-bucket",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "dummy-sender",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "dummy-app-id",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "dummy-measure-id",
};

let app: FirebaseApp;
let db: Firestore | null = null;
let auth: Auth | null = null;
let analytics: Analytics | null = null;

if (typeof window !== "undefined") {
  try {
    app = getApps().length === 0 ? initializeApp(defaultConfig) : getApps()[0];
    db = getFirestore(app);
    auth = getAuth(app);
    analytics = getAnalytics(app);
  } catch (error) {
    console.error("Firebase initialization error:", error);
  }
}

export { app, db, auth, analytics };
