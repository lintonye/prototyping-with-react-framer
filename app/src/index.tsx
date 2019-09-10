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
        <div
          style={{ position: "relative", display: "inline", marginLeft: 16 }}
        >
          <AnimatePresence>
            <motion.span
              key={count}
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              style={{ position: "absolute" }}
            >
              {count}
            </motion.span>
          </AnimatePresence>
        </div>
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
