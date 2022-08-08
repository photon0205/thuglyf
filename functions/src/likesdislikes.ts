import "./utils.ts";
import "./types.ts";
import "./firebaseConfig.ts";

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