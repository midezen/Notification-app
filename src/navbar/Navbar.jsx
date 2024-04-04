import "./Navbar.css";
import notification from "../img/notification.png";
import message from "../img/message.png";
import settings from "../img/settings.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Ay.dev</span>
      <div className="icons">
        <div className="icon">
          <img src={notification} alt="" className="iconImg" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <img src={message} alt="" className="iconImg" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <img src={settings} alt="" className="iconImg" />
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
