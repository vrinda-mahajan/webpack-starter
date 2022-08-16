import _ from "lodash";
import "./App.css";
import React from "react";
import LandingImg from "./disc.svg";
const App = () => {
  return (
    <div className="App">
      <h1>Webpack Starter App</h1>
      <h2>Welcome</h2>
      <img className="App-logo" src={LandingImg} alt="Landing Img" />
    </div>
  );
};

export default App;
