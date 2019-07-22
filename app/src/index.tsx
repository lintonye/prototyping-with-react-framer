import * as React from "react"
import ReactDOM from "react-dom"
import { Frame } from "framer"

import "./styles.css"

function App() {
  return (
    <div className="App">
      <Frame size={600}>
        <Frame
          // bg
          size={500}
          top={50}
          left={20}
        />
        <Frame
          // sun
          left={155}
          top={15}
        />
        <Frame
          // cloud
          left={335}
          top={55}
        />
        <Frame
          // bird
          left={35}
          top={200}
        />
      </Frame>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
