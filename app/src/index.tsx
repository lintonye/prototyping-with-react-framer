import * as React from "react"
import ReactDOM from "react-dom"
import { Frame } from "framer"
import bgSvg from "./bg.svg"
import sunSvg from "./sun.svg"
import cloudsSvg from "./clouds.svg"
import birdSvg from "./bird.svg"

import "./styles.css"

function App() {
  return (
    <div className="App">
      <Frame size={600} center background={null}>
        <Frame
          // bg
          size={500}
          top={50}
          left={20}
          image={bgSvg}
          background={null}
        />
        <Frame
          // sun
          left={155}
          top={15}
          image={sunSvg}
          background={null}
        />
        <Frame
          // cloud
          left={335}
          top={55}
          image={cloudsSvg}
          background={null}
        />
        <Frame
          // bird
          left={35}
          top={200}
          image={birdSvg}
          background={null}
        />
      </Frame>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
