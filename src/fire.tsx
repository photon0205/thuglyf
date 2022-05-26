import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyD_uOx55o8lFUDOAED8UqiYVcBayheKY1U",
    authDomain: "social-3352c.firebaseapp.com",
    projectId: "social-3352c",
    storageBucket: "social-3352c.appspot.com",
    messagingSenderId: "800012720404",
    appId: "1:800012720404:web:eb43ef3c651dda36bbca01",
    measurementId: "G-R9PS0KKXRY"
  };
  
  const tl = firebase.initializeApp(firebaseConfig);
  
  export default tl;