import firebase from "firebase/app";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDud81neFHVCuJgrHagKjHbVqsoCZZnHik",
  authDomain: "facebook-ads-bfc19.firebaseapp.com",
  databaseURL: "https://facebook-ads-bfc19.firebaseio.com",
  projectId: "facebook-ads-bfc19",
  storageBucket: "",
  messagingSenderId: "599134915104",
  appId: "1:599134915104:web:b043e48a5cbeda63"
};
// Initialize Firebasetry {
console.log("init");
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
