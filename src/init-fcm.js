import * as firebase from "firebase/app";
import "firebase/messaging";

/**
 * Get those settings from your firebase account.
 */
const initializedFirebaseApp = firebase.initializeApp({
  apiKey: "apiKey",
  appId: "appId",
  authDomain: "authDomain",
  databaseURL: "databaseURL",
  messagingSenderId: "messagingSenderId",
  projectId: "projectId",
  storageBucket: "storageBucket"
});

const messaging = initializedFirebaseApp.messaging();

export { messaging };
