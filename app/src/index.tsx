import * as React from "react"
import ReactDOM from "react-dom"
import { Frame } from "framer"

import "./styles.css"

function App() {
  return (
    <div className="App">
      <Frame
        size={600}
        center
        background={null}
        onMouseMove={function(e) {
          // 1. Find mouse position
          console.log(e.clientX, e.clientY)
          // 2. create animations
        }}
      >
        <Frame
          // bg
          size={500}
          top={50}
          left={20}
          background={null}
          image="https://image.flaticon.com/icons/svg/119/119596.svg"
        />
        <Frame
          // sun
          left={155}
          top={15}
          background={null}
          image="https://image.flaticon.com/icons/svg/789/789395.svg"
        />
        <Frame
          // cloud
          left={335}
          top={55}
          image="https://image.flaticon.com/icons/svg/414/414927.svg"
          background={null}
        />
        <Frame
          // bird
          left={35}
          top={200}
          image="https://image.flaticon.com/icons/svg/789/789392.svg"
          background={null}
        />
      </Frame>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
