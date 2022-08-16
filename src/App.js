import "./App.css";
import React from "react";
import LandingImg from "./disc.svg";
const App = () => {
  return (
    <div className="App">
      <h1>Webpack Starter App</h1>
      <img src={LandingImg} alt="Landing Img" />
    </div>
  );
};

export default App;
