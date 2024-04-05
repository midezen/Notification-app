import "./Card.css";
import heart from "../img/heart.png";
import comment from "../img/comment.png";
import share from "../img/share.png";
import info from "../img/info.png";
import heartFilled from "../img/heartFilled.png";
import { useState } from "react";

const Card = ({ post, socket, user }) => {
  const [liked, setLiked] = useState(false);

  const handleNotification = (type) => {
    type === 1 && setLiked(true);
    socket.emit("sendNotification", {
      sender: user,
      receiver: post.username,
      type,
    });
  };

  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span className="fullName">{post.fullName}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="interaction">
        {liked ? (
          <img
            src={heartFilled}
            alt="heartIcon"
            className="cardIcon"
            onClick={() => setLiked(false)}
          />
        ) : (
          <img
            src={heart}
            alt="heartIcon"
            className="cardIcon"
            onClick={() => handleNotification(1)}
          />
        )}

        <img
          src={comment}
          alt="commentIcon"
          className="cardIcon"
          onClick={() => handleNotification(2)}
        />
        <img
          src={share}
          alt="shareIcon"
          className="cardIcon"
          onClick={() => handleNotification(3)}
        />
        <img src={info} alt="infoIcon" className="cardIcon infoIcon" />
      </div>
    </div>
  );
};

export default Card;
