import * as React from "react"
import { render } from "react-dom"

import "./styles.css"
function App() {
  let [count, setCount] = React.useState(0)

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button
        onClick={function() {
          setCount(count + 1)
        }}
      >
        +1
      </button>
    </div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
