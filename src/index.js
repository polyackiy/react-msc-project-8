import React from "react";
import { render } from "react-dom";
import Shop from "./Shop.js";
import "./index.css";

export default function App() {
  return <Shop />;
}

render(<App />, document.querySelector("#root"));

