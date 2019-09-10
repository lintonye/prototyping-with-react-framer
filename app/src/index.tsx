import * as React from "react"
import { useState } from "react"
import { render } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"

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
    // <li key={0}>Learn React</li>
    <div className="App">
      <button onClick={() => setTasks([...tasks, "Be ultimately happy"])}>
        Add
      </button>
      <ul>
        <AnimatePresence>
          {tasks.map((task, idx) => (
            <motion.li
              key={idx}
              style={liStyle}
              positionTransition
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ opacity: 0, x: 300, transition: { duration: 0.3 } }}
              onClick={() => {
                setTasks(removeFromArray(tasks, idx))
              }}
            >
              {task}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
