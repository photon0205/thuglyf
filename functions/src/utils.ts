const firebase = require("firebase");
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.getAnalytics(app);
const db = firebase.firestore();