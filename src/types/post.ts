// Why is the name onePost, rather than Post only ??

export default interface onePost {
    postID: string;
    userHandle: string;
    content: string;
    image: string;
    timeStamp: any;
    likes: number;
    dislikes: number;
   //Variable Names should make sense.  
    comments: number;
    postInterests: Array<string>;
  }