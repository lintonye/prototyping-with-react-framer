import * as React from "react";
import { render } from "react-dom";
import { Frame } from "framer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Frame width={280} height={15} borderRadius={30} center>
        <Frame size={60} borderRadius={30} center="y" />
      </Frame>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
