import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/templates/home/home";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
      <GlobalStyle />
    </>
  );
}

export default App;
