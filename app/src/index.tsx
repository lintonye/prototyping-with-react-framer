import * as React from "react"
import { render } from "react-dom"
import { Frame } from "framer"

import "./styles.css"

function App() {
  function handleDrag() {
    // change the scale of Skinny’s cheek
    console.log("dragged!")
  }
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column"
      }}
    >
      {/* Skinny */}
      <Frame
        width={290}
        height={320}
        position="relative"
        background="transparent"
      >
        <Frame
          background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fskinny-portrait.png)"
          width={290}
          height={290}
          borderRadius={150}
        />
        {/* Cheek */}
        <Frame
          background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fcheek.png)"
          width={79}
          height={67}
          left={155}
          top={135}
        />
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
