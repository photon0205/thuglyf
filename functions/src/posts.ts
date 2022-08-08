import "./utils.ts";
import "./types.ts";
import "./firebaseConfig.ts";

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


