import * as React from "react"
import { render } from "react-dom"
import { Frame } from "framer"

import "./styles.css"

function App() {
  function handleDrag(event, info) {
    // change the scale of Skinny’s cheek according to the position of slider knob
    console.log(info.point.x)
  }
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      {/* Skinny */}
      <Frame position="relative">
        Skinny<Frame>Cheek</Frame>
      </Frame>
      <Frame
        width={280}
        height={15}
        borderRadius={30}
        backgroundColor="white"
        position="relative"
      >
        <Frame
          drag={"x"}
          dragConstraints={{ left: 0, right: 250 }}
          dragElastic={false}
          dragMomentum={false}
          onDrag={handleDrag}
          size={60}
          borderRadius={30}
          center="y"
          backgroundColor="white"
          shadow="0 1px 5px 0 rgba(0, 0, 0, 0.25)"
        />
      </Frame>
    </div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
