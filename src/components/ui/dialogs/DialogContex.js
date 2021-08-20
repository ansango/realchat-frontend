import { createContext, useReducer } from "react";

export const modalContext = createContext();

export const modalReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "SET_MODAL":
      return {
        ...state,
        ...payload,
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
    btnOk: { active: true, text: "OK", action: () => {} },
    btnCancel: { active: false, text: "Cancel", action: () => {} },
  };

  const [state, dispatch] = useReducer(modalReducer, initialState);

  const setModal = (payload) => dispatch({ type: "SET_MODAL", payload });
  const openModal = ({ isOpen }) =>
    dispatch({ type: "OPEN_MODAL", payload: { isOpen } });

  return (
    <modalContext.Provider value={{ ...state, setModal, openModal }}>
      {children}
    </modalContext.Provider>
  );
};

export { ModalState };
