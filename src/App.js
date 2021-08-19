import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { io } from "socket.io-client";

import { Home, Room } from "./components/screens";
import { NavBar, ContainerApp } from "./components/ui";

const socket = io.connect("/");

const App = () => {
  return (
    <ContainerApp>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home socket={socket} />
          </Route>
          <Route path="/chat/:roomName/:userName">
            <Room socket={socket} />
          </Route>
        </Switch>
      </Router>
    </ContainerApp>
  );
};

export default App;
