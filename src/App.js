import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { io } from "socket.io-client";
import AppMain from "./componnets/AppMain";
import Home from "./componnets/Home";

const socket = io.connect("/");

const App = () => {
  return (
    <Router>
      <div>
        <h1>App</h1>
        <Switch>
          <Route path="chat/:roomname/:username" component={AppMain} />
          <Route path="/" exact>
            <Home socket={socket} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
