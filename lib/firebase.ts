import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getAuth, type Auth } from "firebase/auth";
import { getAnalytics, type Analytics } from "firebase/analytics";

let app: FirebaseApp | undefined;
let db: Firestore | null = null;
let auth: Auth | null = null;
let analytics: Analytics | null = null;

// Only initialize Firebase on the client side and only if we have the required environment variables
if (typeof window !== "undefined") {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };

  // Only initialize if we have the required config
  if (firebaseConfig.apiKey && firebaseConfig.projectId) {
    try {
      // Initialize Firebase
      app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
      
      // Initialize services
      if (app) {
        db = getFirestore(app);
        auth = getAuth(app);
        // Only initialize analytics if measurementId is provided
        if (firebaseConfig.measurementId) {
          analytics = getAnalytics(app);
        }
      }
    } catch (error) {
      console.error("Firebase initialization error:", error);
      // Log detailed error information in development
      if (process.env.NODE_ENV === 'development') {
        console.error('Firebase config:', {
          hasApiKey: !!firebaseConfig.apiKey,
          hasProjectId: !!firebaseConfig.projectId,
          hasAppId: !!firebaseConfig.appId,
        });
      }
    }
  } else {
    console.error("Firebase configuration is incomplete. Missing required environment variables.");
  }
}

export { app, db, auth, analytics };
