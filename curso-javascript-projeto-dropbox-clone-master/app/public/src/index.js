import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
//import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';
//import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseApp = initializeApp ({
  apiKey: "AIzaSyCGyqIw5RWe6T1gNzm_D8wSOvhgC8alo5Y",
  authDomain: "dropbox-clone-d30e1.firebaseapp.com",
  databaseURL: "https://dropbox-clone-d30e1-default-rtdb.firebaseio.com",
  projectId: "dropbox-clone-d30e1",
  storageBucket: "dropbox-clone-d30e1.appspot.com",
  messagingSenderId: "409135357703",
  appId: "1:409135357703:web:ccaa996b5a826864522fa2",
  measurementId: "G-X4TYZXY51G"
});

const auth = getAuth(firebaseApp);
//const db = getFirestore(firebaseApp);
//db.collection('todos').getDocs;
//const todosCol = collection(db, 'todos');
//const snapshot = await getDocs(todosCol);

//detect auth state
onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in!');
    } else {
        console.log('No user');
    }
});


window.app = new DropBoxController();