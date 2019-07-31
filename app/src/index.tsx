import * as React from "react"
import { render } from "react-dom"

import "./styles.css"
import { Frame } from "framer"

function RadioGroup() {
  return (
    <Frame>
      <Frame position="relative">🍏 Apple</Frame>
      <Frame position="relative"> 🥑 Avocado</Frame>
      <Frame position="relative">🌶 Pepper</Frame>
    </Frame>
  )
}

function App() {
  return (
    <div className="App">
      <RadioGroup />
    </div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
