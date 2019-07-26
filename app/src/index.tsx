import * as React from "react"
import ReactDOM from "react-dom"
import { Frame, useAnimation } from "framer"

import "./styles.css"

function App() {
  let birdAnim = useAnimation()
  let cloudsAnim = useAnimation()
  let sunAnim = useAnimation()
  let bgAnim = useAnimation()

  return (
    <div className="App">
      <Frame
        size={550}
        background={null}
        center
        onMouseMove={function(event) {
          let offsetX = event.clientX - window.innerWidth / 2
          let offsetY = event.clientY - window.innerHeight / 2
          // 1. Find mouse position
          // 2. create animations
          birdAnim.start({ x: offsetX / 3.5, y: offsetY / 3.5 })
          cloudsAnim.start({ x: offsetX / 8, y: offsetY / 8 })
          sunAnim.start({ x: offsetX / 10, y: offsetY / 10 })
          bgAnim.start({ x: offsetX / 14, y: offsetY / 14 })
        }}
      >
        <Frame
          // bg
          size={500}
          top={50}
          left={20}
          background={null}
          image="https://image.flaticon.com/icons/svg/119/119596.svg"
          animate={bgAnim}
        />
        <Frame
          // sun
          left={155}
          top={15}
          background={null}
          image="https://image.flaticon.com/icons/svg/789/789395.svg"
          animate={sunAnim}
        />
        <Frame
          // cloud
          background={null}
          left={335}
          top={55}
          image="https://image.flaticon.com/icons/svg/414/414927.svg"
          animate={cloudsAnim}
        />
        <Frame
          // bird
          background={null}
          left={35}
          top={200}
          image="https://image.flaticon.com/icons/svg/789/789392.svg"
          animate={birdAnim}
        />
      </Frame>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
