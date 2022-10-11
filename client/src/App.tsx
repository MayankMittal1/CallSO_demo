import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import WebSocketProvider from "./components/common/websockets";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { initializeClient } from "./reduxStore/callSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeClient());
  }, []);
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
