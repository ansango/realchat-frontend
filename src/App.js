import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { io } from "socket.io-client";
import Chat from "./componnets/Chat";

import Home from "./componnets/Home";
import Process from "./componnets/Process";

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
    <Router>
      <div>
        <h1>App</h1>
        <Switch>
          <Route path="/" exact>
            <Home socket={socket} />
          </Route>
          <Route path="/chat/:roomName/:userName" component={AppMain} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
