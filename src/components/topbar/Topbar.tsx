import "./topbar.css";

// Use ES6 and TS as well.
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Thug Lyf</span>
      </div>
        <button className="logout"><span className="logo">Logout</span></button>
      </div>
  );
}
