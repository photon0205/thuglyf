import "./utils.ts";
import "./types.ts";
import "./firebaseConfig.ts";

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