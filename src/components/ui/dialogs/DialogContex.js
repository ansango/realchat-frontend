import { createContext, useReducer } from "react";

export const modalContext = createContext();

export const modalReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "SET_MODAL":
      return {
        ...state,
        title: payload.title,
        description: payload.description,
      };
    case "OPEN_MODAL":
      return {
        ...state,
        isOpen: payload.isOpen,
      };
    default:
      return state;
  }
};

const ModalState = ({ children }) => {
  const initialState = {
    isOpen: false,
    title: "",
    description: "",
  };

  const [state, dispatch] = useReducer(modalReducer, initialState);

  const setModal = ({ title, description }) =>
    dispatch({ type: "SET_MODAL", payload: { title, description } });
  const openModal = ({ isOpen }) =>
    dispatch({ type: "OPEN_MODAL", payload: { isOpen } });
  return (
    <modalContext.Provider value={{ ...state, setModal, openModal }}>
      {children}
    </modalContext.Provider>
  );
};

export { ModalState };
