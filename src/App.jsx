import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Card from "./card/Card";
import { posts } from "./dummyData";
import { io } from "socket.io-client";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const socket = io("http://localhost:3000");
  }, []);
  return (
    <div className="container">
      {user ? (
        <>
          <Navbar />
          {posts.map((post) => (
            <Card post={post} key={post.id} />
          ))}
          <span className="username">{user}</span>
        </>
      ) : (
        <div className="login">
          <form>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              onClick={() => setUser(username)}
              onSubmit={() => setUser(username)}
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
