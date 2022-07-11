import './comment.css'
import { Posts,Comments } from "../../dummyData";


// Use ES6 and TS as well.
function Comment(){
    return (
    <div className="comment">
      <div className="commentWrapper">
        <div className="commentleft">
        {Comments.map((p) => (
          <span>{p.comment}<br></br></span>
        ))}
        </div>
      </div>
    </div>
    )
    
}

export default Comment;