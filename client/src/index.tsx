window.Buffer = window.Buffer || require("buffer").Buffer;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "./reduxStore";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <ReduxProvider store={store}>
    <React.Fragment>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </React.Fragment>
  </ReduxProvider>
);
