import { useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { ButtonTheme } from "../buttons/ButtonTheme";
import { modalContext } from "../dialogs/DialogContex";

export const NavBar = ({ socket }) => {
  const { pathname } = useLocation();
  const router = useHistory();
  const { action, setModal, openModal } = useContext(modalContext);

  const handleClick = () => {
    setModal({ title: "closing session", description: "are you sure?", });
    if (pathname !== "/") {
      openModal({ isOpen: true });
      
      if (action === "ok") {
        console.log(action);
        socket.emit("forceDisconnect");
        router.push("/");
        window.location.reload();
      }
    }
  };

  return (
    <div className="flex justify-between items-center p-5">
      <span className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
        <button className="inline-flex items-center" onClick={handleClick}>
          <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600"></div>
          <h2 className="block p-2 text-xl font-medium tracking-tighter lg:mr-8">
            realtime chat
          </h2>
        </button>
      </span>
      <div className="">
        <ButtonTheme />
      </div>
    </div>
  );
};
