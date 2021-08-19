import Chat from "./Chat";
import Process from "./Process";
const AppMain = ({ match, socket }) => {
  return (
    <>
      <Chat roomname={match.params} username={match.params} socket={socket} />
      <Process />
    </>
  );
};

export default AppMain;
