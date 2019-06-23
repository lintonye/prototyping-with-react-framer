import React from "react"
import ReactDOM from "react-dom"
import { Frame } from "framer"
import "./styles.css"

function App() {
  return (
    <div className="App">
      <Frame width={120} height={60} borderRadius={30}>
        <Frame size={60} borderRadius={30} />
      </Frame>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
