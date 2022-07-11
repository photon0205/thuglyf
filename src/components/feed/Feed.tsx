import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
// Why are we using dummy data still...
import { Posts } from "../../dummyData";

// Use ES6 and TS as well.
// What about the filter for posts ??.
export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
          
        ))}
      </div>
    </div>
  );
}
