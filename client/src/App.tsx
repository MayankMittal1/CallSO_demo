import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WebSocketProvider from "./components/common/websockets";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <WebSocketProvider>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </WebSocketProvider>
  );
}

export default App;
