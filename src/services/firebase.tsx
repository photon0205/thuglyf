import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";


import onePost from '../types/post';
import comment from '../types/comment';

// Why repeating the firebase config ??
const firebaseConfig = {
    apiKey: "AIzaSyDI3B33vbQbHR-C9JmXIbdFzJE2dPUrYNY",
    authDomain: "thuglyf-53648.firebaseapp.com",
    databaseURL: "https://thuglyf-53648-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "thuglyf-53648",
    storageBucket: "thuglyf-53648.appspot.com",
    messagingSenderId: "248033650461",
    appId: "1:248033650461:web:f600a83c6cd51b5dee63f4",
    measurementId: "G-DVZJWNEY68"
  };
  
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  const storage = getStorage(app);
  const db = getFirestore(app);
  const auth = getAuth(app);
  
export {db, auth, storage, analytics};

  

  


