import "./utils.ts";
import "./types.ts";
import "./firebaseConfig.ts";

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

//crating a comment
function createComment(obj: comment, postID: string) {
    obj.timeStamp = new Date().toISOString();
    db.collection(`posts/${postID}/comments`).add(obj);
    db.collection(`posts/${postID}`).get()
        .then((data: any) => {
            data.comments = data.comments + 1;
        })
}
