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