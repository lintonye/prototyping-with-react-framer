import * as React from "react"
import ReactDOM from "react-dom"
import { Frame, useAnimation, useMotionValue } from "framer"

import "./styles.css"

function App() {
  let birdX = useMotionValue(0)
  let birdY = useMotionValue(0)
  let cloudsX = useMotionValue(0)
  let cloudsY = useMotionValue(0)
  let sunX = useMotionValue(0)
  let sunY = useMotionValue(0)
  let bgX = useMotionValue(0)
  let bgY = useMotionValue(0)

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
          // birdAnim.start({ x: offsetX / 3.5, y: offsetY / 3.5 })
          birdX.set(offsetX / 3.5)
          birdY.set(offsetY / 3.5)
          cloudsX.set(offsetX / 8)
          cloudsY.set(offsetY / 8)
          sunX.set(offsetX / 10)
          sunY.set(offsetY / 10)
          bgX.set(offsetX / 14)
          bgY.set(offsetY / 14)
        }}
      >
        <Frame
          // bg
          size={500}
          top={50}
          left={20}
          background={null}
          image="https://image.flaticon.com/icons/svg/119/119596.svg"
          x={bgX}
          y={bgY}
        />
        <Frame
          // sun
          left={155}
          top={15}
          background={null}
          image="https://image.flaticon.com/icons/svg/789/789395.svg"
          x={sunX}
          y={sunY}
        />
        <Frame
          // cloud
          background={null}
          left={335}
          top={55}
          image="https://image.flaticon.com/icons/svg/414/414927.svg"
          x={cloudsX}
          y={cloudsY}
        />
        <Frame
          // bird
          background={null}
          left={35}
          top={200}
          image="https://image.flaticon.com/icons/svg/789/789392.svg"
          x={birdX}
          y={birdY}
        />
      </Frame>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
