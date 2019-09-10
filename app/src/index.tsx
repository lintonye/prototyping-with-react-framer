import * as React from "react"
import { useState } from "react"
import { render } from "react-dom"

import "./styles.css"

function removeFromArray(array, index) {
  return [...array.slice(0, index), ...array.slice(index + 1)]
}

function App() {
  const [tasks, setTasks] = useState([
    "Learn React",
    "Prototype with Framer",
    "Get Superpowers",
    "Conquer the universe"
  ])
  const liStyle = {
    padding: 20,
    borderRadius: 2,
    backgroundColor: "white",
    margin: 1,
    listStyle: "none",
    boxShadow: "0 2px 4px rgba(0,0,0,.25)",
    minWidth: 300
  }
  return (
    <div className="App">
      <ul>
        {tasks.map((task, idx) => (
          <li
            key={task}
            style={liStyle}
            onClick={() => {
              setTasks(removeFromArray(tasks, idx))
            }}
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
