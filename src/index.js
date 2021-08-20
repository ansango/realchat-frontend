import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducers from "./store/reducer/index";
import { ModalState } from "./components/ui/dialogs/DialogContex";

const store = createStore(rootReducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalState>
        <App />
      </ModalState>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
