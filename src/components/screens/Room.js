import { useParams } from "react-router-dom";
import { Chat, Process } from "../ui/components";

export const Room = ({ socket }) => {
  const { roomName, userName } = useParams();

  return (
    <>
      <h1 className="capitalize py-14 text-2xl font-bold">{roomName} 🏠</h1>
      <Chat roomName={roomName} userName={userName} socket={socket} />
      <Process />
    </>
  );
};
