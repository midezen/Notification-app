import { useState } from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Card from "./card/Card";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  console.log(user);
  return (
    <div className="container">
      {user ? (
        <>
          <Navbar />
          <Card />
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
