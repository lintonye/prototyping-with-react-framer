import * as React from "react"
import { render } from "react-dom"
import "./styles.css"
import { Frame, useCycle } from "framer"

function useCycle2(options) {
  let [index, setIndex] = React.useState(0)
  let currentOption = options[index]
  function cycle() {
    setIndex(index < options.length - 1 ? index + 1 : 0)
  }
  return [currentOption, cycle]
}

function App() {
  let [mode, cycleMode] = useCycle2(["off", "on"])
  console.log("new page, mode=", mode)
  return (
    <div className="App">
      <Frame
        width={120}
        height={60}
        borderRadius={30}
        center
        onTap={function handleTap() {
          cycleMode()
        }}
        background="#999"
        animate={mode}
        variants={{
          off: { background: "#999" },
          on: { background: "orange" }
        }}
      >
        <Frame
          size={60}
          borderRadius={30}
          variants={{
            off: { x: 0, scale: 1 },
            on: { x: 60, scale: 1.2 }
          }}
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
