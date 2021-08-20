import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { io } from "socket.io-client";

import { Home, Room } from "./components/screens";
import { NavBar, ContainerApp, Footer, DialogBase } from "./components/ui";

const socket = io.connect("/");

const App = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(true);
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
        <DialogBase
          title="Please enter wright values"
          description="User name and Room name are a must values to sign into Roomers"
          btnText="Ok"
          isOpen={isOpenDialog}
          closeDialog={() => setIsOpenDialog(false)}
        />
        <Footer />
      </Router>
    </ContainerApp>
  );
};

export default App;
