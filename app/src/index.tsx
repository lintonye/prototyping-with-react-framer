import * as React from "react"
import { render } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"

import "./styles.css"
function App() {
  let [count, setCount] = React.useState(0)

  return (
    <div className="App">
      <h1>
        Count:{" "}
        <AnimatePresence>
          <motion.span
            key={count}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            style={{ position: "absolute", marginLeft: 10 }}
          >
            {count}
          </motion.span>
        </AnimatePresence>
      </h1>
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
