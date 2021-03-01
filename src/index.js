require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./dynamic_components/Carousel";

ReactDOM.render(
  <React.StrictMode>
    <Carousel />
  </React.StrictMode>,
  document.getElementById("root")
);
