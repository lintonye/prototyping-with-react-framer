import * as React from "react"
import { render } from "react-dom"
import { Frame, transform, useCycle } from "framer"

import "./styles.css"

function App() {
  return (
    <div>
      <Frame
        height={2000}
        opacity={0.5}
        background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fplaid.jpeg?v=1560553758201)"
      />
      <Frame background="transparent" size="auto" top={400}>
        <h1>⚛️ 🍉</h1>
        <h2>React/Framer Summer Challenge</h2>
      </Frame>
    </div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
