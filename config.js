import firebase from 'firebase'
require("@firebase/firestore")

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA9ytOsJZ33uomM8Qa9ubvpEF_JRkilDRM",
    authDomain: "barterapp-ca51a.firebaseapp.com",
    projectId: "barterapp-ca51a",
    storageBucket: "barterapp-ca51a.appspot.com",
    messagingSenderId: "178626859317",
    appId: "1:178626859317:web:bc19aa2a881ff3bea73c7c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()