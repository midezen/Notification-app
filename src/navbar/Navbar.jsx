import "./Navbar.css";
import notification from "../img/notification.png";
import message from "../img/message.png";
import settings from "../img/settings.png";
import { useEffect, useState } from "react";

const Navbar = ({ socket }) => {
  const [notifications, setNotifications] = useState([]);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    socket.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);

  const displayNotification = ({ sender, type }) => {
    if (type === 1) {
      return <span className="notification">{sender} liked your post</span>;
    } else if (type === 2) {
      return (
        <span className="notification">{sender} commented on your post</span>
      );
    } else {
      return <span className="notification">{sender} shared your post</span>;
    }
  };

  const handleRead = () => {
    setNotifications([]);
    setToggle(false);
  };
  return (
    <div className="navbar">
      <span className="logo">Ay.dev</span>
      <div className="icons">
        <div className="icon" onClick={() => setToggle(!toggle)}>
          <img src={notification} alt="" className="iconImg" />
          {notifications.length > 0 && (
            <div className="counter">{notifications.length}</div>
          )}
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
      {toggle && (
        <div className="notifications">
          {notifications.map((n) => displayNotification(n))}
          <button className="nbutton" onClick={handleRead}>
            Mark as read
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
