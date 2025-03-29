import Firebase from 'firebase';
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
 apiKey: "AIzaSyAtW7TMlviXHqCleQ8fPGNeyn0TY0w2sG4",
  authDomain: "crudpiaget.firebaseapp.com",
  projectId: "crudpiaget",
  storageBucket: "crudpiaget.firebasestorage.app",
  messagingSenderId: "256564040998",
  appId: "1:256564040998:web:a1fba576f8a997259edde7"
};

if (!Firebase.apps.length){
  Firebase.initializeApp(firebaseConfig);
} else {
  Firebase.app();
}

export default Firebase;