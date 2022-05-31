export default interface onePost {
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