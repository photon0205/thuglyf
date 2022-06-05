import './comment.css'
import { Posts,Comments } from "../../dummyData";



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