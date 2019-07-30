import * as React from "react"
import { render } from "react-dom"

import "./styles.css"

function App() {
  let count = 0
  console.log("new page!")
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button
        onClick={function() {
          count = count + 1
          console.log(count)
        }}
      >
        +1
      </button>
    </div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
