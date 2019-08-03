import * as React from "react"
import { render } from "react-dom"
import "./styles.css"
import { Frame, useCycle } from "framer"

function App() {
  let [xOffset, cycleX] = useCycle(0, 60)
  return (
    <div className="App">
      <Frame
        width={120}
        height={60}
        borderRadius={30}
        center
        onTap={function handleTap() {
          cycleX()
        }}
        background="#999"
      >
        <Frame
          size={60}
          borderRadius={30}
          animate={{ x: xOffset }}
          transition={{ duration: 0.2 }}
          background="white"
          shadow="0 1px 5px rgba(0,0,0,0.5)"
        />
      </Frame>
    </div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
