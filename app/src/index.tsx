import * as React from "react"
import { render } from "react-dom"
import { Frame } from "framer"

import "./styles.css"

function App() {
  return (
    <Frame background={null}>
      {/* Plaid background */}
      <Frame
        height={2000}
        width="100%"
        opacity={0.5}
        background="url(/plaid.jpeg)"
      />
      <Frame
        backgroundColor="white"
        size={200}
        top={400}
        borderRadius={20}
        center="x"
        image="/starship.png"
      />
    </Frame>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
