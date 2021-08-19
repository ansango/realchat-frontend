import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { io } from "socket.io-client";
import Chat from "./components/Chat";

import Home from "./components/Home";
import Process from "./components/Process";
import { NavBar, ContainerApp } from "./components/ui";

const socket = io.connect("/");

const AppMain = ({ match }) => {
  console.log(match);
  return (
    <>
      <Chat
        roomname={match.params.roomName}
        username={match.params.userName}
        socket={socket}
      />
      <Process />
    </>
  );
};

const App = () => {
  return (
    <ContainerApp>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <Home socket={socket} />
            </Route>
            <Route path="/chat/:roomName/:userName" component={AppMain} />
          </Switch>
        </div>
      </Router>
    </ContainerApp>
  );
};

export default App;
