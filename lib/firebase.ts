"use client";

import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getAuth, type Auth } from "firebase/auth";
import { getAnalytics, type Analytics } from "firebase/analytics";

// Define types for global namespace to store Firebase instances
declare global {
  var firebase: {
    app: FirebaseApp | undefined;
    db: Firestore | null;
    auth: Auth | null;
    analytics: Analytics | null;
  };
}

// Initialize global Firebase object if it doesn't exist
if (typeof global.firebase === 'undefined') {
  global.firebase = {
    app: undefined,
    db: null,
    auth: null,
    analytics: null
  };
}

// For production, always use environment variables instead of hardcoding
// These hardcoded values are ONLY for fallback in development
// SECURITY WARNING: These should match your Netlify environment variables!
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAzjBrjYkiXXxf_BQ73Vf23XpGWbDSRPzw",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "sector600-ba3c6.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "sector600-ba3c6",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "sector600-ba3c6.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "318320551115",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:318320551115:web:14b69871508ee5306676e2",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-RVWMBMBG03"
};

// We only want to initialize Firebase on the client side
let app = global.firebase.app;
let db = global.firebase.db;
let auth = global.firebase.auth;
let analytics = global.firebase.analytics;

// Initialize Firebase only on the client side with enhanced error handling
if (typeof window !== 'undefined') {
  try {
    // Check if we already have an app instance in global or initialized apps
    if (!global.firebase.app) {
      // Try to get existing app or create new one
      app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
      global.firebase.app = app;
      
      console.log("Firebase app initialized successfully");
      
      // Initialize services with error handling for each
      try {
        db = getFirestore(app);
        global.firebase.db = db;
        console.log("Firestore initialized successfully");
      } catch (dbError) {
        console.error("Firestore initialization error:", dbError);
        // Create a null implementation to prevent crashes
        global.firebase.db = null;
      }
      
      try {
        auth = getAuth(app);
        global.firebase.auth = auth;
        console.log("Auth initialized successfully");
      } catch (authError) {
        console.error("Auth initialization error:", authError);
        global.firebase.auth = null;
      }
      
      // Only initialize analytics in the browser
      try {
        analytics = getAnalytics(app);
        global.firebase.analytics = analytics;
        console.log("Analytics initialized successfully");
      } catch (analyticsError) {
        console.error("Analytics initialization error:", analyticsError);
        global.firebase.analytics = null;
      }
    } else {
      console.log("Using existing Firebase app instance");
      app = global.firebase.app;
      db = global.firebase.db;
      auth = global.firebase.auth;
      analytics = global.firebase.analytics;
    }
  } catch (error) {
    console.error("Firebase main initialization error:", error);
    // Set all to null to prevent crashes
    app = undefined;
    db = null;
    auth = null;
    analytics = null;
    
    global.firebase = {
      app: undefined,
      db: null,
      auth: null,
      analytics: null
    };
  }
}

export { app, db, auth, analytics };
