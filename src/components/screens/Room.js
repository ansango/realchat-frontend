import { useParams } from "react-router-dom";
import { Chat, Process } from "../ui/components";

export const Room = ({ socket }) => {
  const { roomName, userName } = useParams();

  return (
    <>
      <h2>Room: {roomName}</h2>
      <Chat roomname={roomName} username={userName} socket={socket} />
      <Process />
    </>
  );
};
