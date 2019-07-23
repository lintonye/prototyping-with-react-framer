import * as React from "react"
import ReactDOM from "react-dom"
import { Frame, useAnimation } from "framer"
import bgSvg from "./bg.svg"
import sunSvg from "./sun.svg"
import cloudsSvg from "./clouds.svg"
import birdSvg from "./bird.svg"

import "./styles.css"

function App() {
  const birdAnim = useAnimation()
  const cloudsAnim = useAnimation()
  const sunAnim = useAnimation()
  const bgAnim = useAnimation()
  return (
    <div className="App">
      <Frame
        size={600}
        center
        background={null}
        onMouseMove={function(e) {
          // 1. Find mouse position
          let offsetXFromCenter = e.clientX - window.innerWidth / 2
          let offsetYFromCenter = e.clientY - window.innerHeight / 2

          birdAnim.start({ x: offsetXFromCenter / 6, y: offsetYFromCenter / 6 })
          cloudsAnim.start({
            x: offsetXFromCenter / 8,
            y: offsetYFromCenter / 8
          })
          sunAnim.start({
            x: offsetXFromCenter / 10,
            y: offsetYFromCenter / 10
          })
          bgAnim.start({ x: offsetXFromCenter / 12, y: offsetYFromCenter / 12 })
        }}
      >
        <Frame
          // bg
          size={500}
          top={50}
          left={20}
          image={bgSvg}
          background={null}
          animate={bgAnim}
        />
        <Frame
          // sun
          left={155}
          top={15}
          image={sunSvg}
          background={null}
          animate={sunAnim}
        />
        <Frame
          // cloud
          left={335}
          top={55}
          image={cloudsSvg}
          background={null}
          animate={cloudsAnim}
        />
        <Frame
          // bird
          left={35}
          top={200}
          image={birdSvg}
          background={null}
          animate={birdAnim}
        />
      </Frame>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
