import { useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { ButtonTheme } from "../buttons/ButtonTheme";
import { modalContext } from "../dialogs/DialogContex";

export const NavBar = ({ socket }) => {
  const { pathname } = useLocation();
  const router = useHistory();
  const { setModal, openModal } = useContext(modalContext);

  const handleClick = () => {
    if (pathname !== "/") {
      openModal({ isOpen: true });
    }
    setModal({
      title: "closing session",
      description: "are you sure?",
      btnOk: {
        active: true,
        text: "OK",
        action: () => {
          openModal({ isOpen: false });
          socket.emit("forceDisconnect");
          router.push("/");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        },
      },
      btnCancel: {
        active: true,
        text: "Cancel",
        action: () => {
          openModal({ isOpen: false });
        },
      },
    });
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
