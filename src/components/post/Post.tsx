import "./post.css";
// Why are we still uding the dummy data ??
import { Users } from "../../dummyData";
import { useState } from "react";
import Comment from "../../components/comment/comment";

// Why are we using any here ??
// Use ES6 and TS as well.

export default function Post({ post } : {post : any}) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

// Empty function ??
const commentHandler =()=>{
  
}

const {date, photo, desc} = post;

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{date}</span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {/* You can either import the image itself, or u can use constants file for accessing assets */}
            <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            {/* Destructure post compleltely b4 using. */}
            <span className="postCommentText" onClick={commentHandler}>{post.comment} comments</span>
          </div>
        </div>
        <Comment />
      </div>
    </div>
  );
}
