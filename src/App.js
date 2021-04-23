import React from "react";
import store, { history } from "./store";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import MainRouter from "./pages/MainRouter";
import "./scss/main.scss";

function App() {
  if (process.env.NODE_ENV === "production") console.log("production");
  else if (process.env.NODE_ENV === "development") console.log("development");
  else console.log("other");
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MainRouter />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
