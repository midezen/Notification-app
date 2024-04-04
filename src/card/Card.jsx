import "./Card.css";
import heart from "../img/heart.png";
import comment from "../img/comment.png";
import share from "../img/share.png";
import info from "../img/info.png";
import heartFilled from "../img/heartFilled.png";
import { useState } from "react";

const Card = ({ post }) => {
  const [liked, setLiked] = useState(false);

  const handleNotification = () => {
    setLiked(!liked);
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
            onClick={handleNotification}
          />
        ) : (
          <img
            src={heart}
            alt="heartIcon"
            className="cardIcon"
            onClick={handleNotification}
          />
        )}

        <img src={comment} alt="commentIcon" className="cardIcon" />
        <img src={share} alt="shareIcon" className="cardIcon" />
        <img src={info} alt="infoIcon" className="cardIcon infoIcon" />
      </div>
    </div>
  );
};

export default Card;
