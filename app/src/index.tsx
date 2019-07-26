import * as React from "react"
import ReactDOM from "react-dom"
import {
  Frame,
  useAnimation,
  useMotionValue,
  useTransform,
  useSpring
} from "framer"

import "./styles.css"

function App() {
  let mouseX = useSpring(0)
  let mouseY = useSpring(0)
  // arrow function
  let birdX = useTransform(mouseX, value => value / 3.5)
  let birdY = useTransform(mouseY, value => value / 3.5)
  let cloudsX = useTransform(mouseX, value => value / 8)
  let cloudsY = useTransform(mouseY, value => value / 8)
  let sunX = useTransform(mouseX, value => value / 10)
  let sunY = useTransform(mouseY, value => value / 10)
  let bgX = useTransform(mouseX, value => value / 14)
  let bgY = useTransform(mouseY, value => value / 14)

  return (
    <div className="App">
      <Frame
        size={550}
        background={null}
        center
        onMouseMove={function(event) {
          let offsetX = event.clientX - window.innerWidth / 2
          let offsetY = event.clientY - window.innerHeight / 2
          mouseX.set(offsetX)
          mouseY.set(offsetY)
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
