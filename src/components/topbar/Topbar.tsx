import "./topbar.css";

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
