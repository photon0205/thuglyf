import "./share.css";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="" alt="dp" />
          <input
            placeholder="What's in your mind Baby?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
