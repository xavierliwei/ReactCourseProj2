import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/home";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
