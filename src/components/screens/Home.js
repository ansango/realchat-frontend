import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Home = ({ socket }) => {
  const [userName, setUserName] = useState("");
  const [roomName, setRoomName] = useState("");

  const sendData = () => {
    if (userName !== "" && roomName !== "") {
      socket.emit("joinRoom", { userName, roomName });
    } else {
      alert("username and roomname are must!");
      window.location.reload();
    }
  };
  return (
    <div>
      <h1>Welcome to ChatApp</h1>
      <input
        placeholder="Input your user name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <input
        placeholder="Input the room name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      ></input>
      <NavLink to={`/chat/${roomName}/${userName}`}>
        <button onClick={sendData}>Join</button>
      </NavLink>
    </div>
  );
};
