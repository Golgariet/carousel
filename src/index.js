require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import Slider from "./dynamic_components/Slider";

ReactDOM.render(
  <React.StrictMode>
    <Slider />
  </React.StrictMode>,
  document.getElementById("root")
);
