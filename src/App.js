import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { io } from "socket.io-client";

import { Home, Room } from "./components/screens";
import { NavBar, ContainerApp, Footer } from "./components/ui";

const socket = io.connect("/");

const App = () => {
  return (
    <ContainerApp>
      <Router>
        <NavBar socket={socket} />
        <Switch>
          <Route path="/" exact>
            <Home socket={socket} />
          </Route>
          <Route path="/chat/:roomName/:userName">
            <Room socket={socket} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ContainerApp>
  );
};

export default App;
