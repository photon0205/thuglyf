import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
interface userData {
  email: string;
  password: string;
  confirmPassword: string;
  userHandle: string;
  userImage: string;
  userInterests: Array<string>;
}

interface userLoginData {
  password: string;
  email: string;
}

interface onePost {
  postID: string;
  userHandle: string;
  content: string;
  image: string;
  timeStamp: any;
  likes: number;
  dislikes: number;
  comments: number;
  postInterests: Array<string>;
}

interface comment {
  body: string;
  timeStamp: any;
  userHandle: string;
}

const firebase = require("firebase");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.getAnalytics(app);
const db = firebase.firestore();

//Signup
function signup(obj: userData) {
  
  //is email valid?
  if (obj.email === "") return;
  if (obj.password !== obj.confirmPassword) {
      return;    
  }

  //user exists already?
  db.doc(`/users/${obj.userHandle}`).get
  .then((doc: any) => {
      if (doc.exists) return;
      else {
          return firebase.auth()
              .createUserWithEmailAndPassword(obj.email, obj.password);
      }
  })
      
  //adding data to collection
  .then((data: any) => {
      return db.doc(`/users/${obj.userHandle}`).set({
          email: obj.email,
          password: obj.password,
          userHandle: obj.userHandle,
          userImage: obj.userImage || "gs://thuglyf-53648.appspot.com/no-img.png",
          userInterests: obj.userInterests,        
      })  
  })
}

//Login
function login(obj: userLoginData) {
  if (obj.email !== "") return;
  firebase.auth().signInWithEmailAndPassword(obj.email, obj.password);
}

//create a Post
function createNewPost(obj: onePost) {
  //obj will have content, image, userhandle, postInterests

  obj.timeStamp = new Date().toISOString();
  obj.likes = 0;
  obj.dislikes = 0;
  obj.comments = 0;

  db.collection('posts').add(obj);
  //postID is the doc.id
  //TODO: saving postID while fetching in feed
}

//getting comments for one post
function getOnePost(postID: string) {
  let comments: Array<comment> = [];
  firebase.onSnapshot(db.doc(`/posts/${postID}/comments`).orderBy('timeStamp', 'desc').get()
      .then((data: any) => {            
          data.forEach((doc: any) => {
              comments.push({
                  body: doc.body,
                  timeStamp: doc.timeStamp,
                  userHandle: doc.userHandle,
              });
          });
      })
  );
  return comments;
}

//getting all the posts for feed after filtering
function getFeed(userHandle: string) {
  let posts: Array<onePost> = [];
  let interests: Array<string> = [];
  db.doc(`/users/${userHandle}`).get()
      .then((data: any) => {
          interests = data.userInterests;
      })
  posts = firebase.onSnapshot(firebase.query(db.collection('posts'), firebase.where('postInterests', 'array-contains-any', interests))
      .orderBy('timeStamp').limit(20));
  return posts;
}

//crating a comment
function createComment(obj: comment, postID: string) {
  obj.timeStamp = new Date().toISOString();
  db.collection(`posts/${postID}/comments`).add(obj);
  db.collection(`posts/${postID}`).get()
      .then((data: any) => {
          data.comments = data.comments + 1;
  })
}

//likes
function likePost(userHandle: string, postID: string) {
  const query: any = firebase.query(db.collection(`/posts/${postID}/likes`), firebase.where(userHandle, 'in', 'userHandle'));
  if (query.size() !== 0) return;
  
  db.collection(`/posts/${postID}/likes`).add({
      userHandle: userHandle,
  })
  db.collection(`posts/${postID}`).get()
      .then((data: any) => {
          data.likes = data.likes + 1;
      })
}

//dislikes
function dislikePost(userHandle: string, postID: string) {
  const query: any = firebase.query(db.collection(`/posts/${postID}/dislikes`), firebase.where(userHandle, 'in', 'userHandle'));
  if (query.size() !== 0) return;

  db.collection(`/posts/${postID}/dislikes`).add({
      userHandle: userHandle,
  })
  db.collection(`posts/${postID}`).get()
      .then((data: any) => {
          data.dislikes = data.dislikes + 1;
      })
}