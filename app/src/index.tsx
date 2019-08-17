import * as React from "react"
import { render } from "react-dom"
import { Frame } from "framer"

import "./styles.css"

function App() {
  return (
    <div>
      {/* Plaid background */}
      <Frame
        height={2000}
        opacity={0.5}
        background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fplaid.jpeg?v=1560553758201)"
      />
      <Frame
        backgroundColor="white"
        size={200}
        top={400}
        borderRadius={20}
        image="/starship.png"
      />
    </div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
