import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
function App() {
  function waitForFramerElement(framer, id, props) {
    console.log(id);
    if (typeof window[framer] !== "undefined") {
      window[framer](id, props);
    } else {
      setTimeout(() => {
        waitForFramerElement(framer, id, props)
      }, 2500);
    }
  }
  useEffect(() => {
    waitForFramerElement("CoolButton", "hello", {title: "hello to framer fans"});
  });
  return <div>
    <div id="hello"></div>
  </div>;
}

export default App;
