import React from "react"
import ReactDOM from "react-dom"
import { Frame } from "framer"
import "./styles.css"

function App() {
  return (
    <div className="App">
      <Frame />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
