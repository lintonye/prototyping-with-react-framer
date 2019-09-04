import * as React from "react"
import { render } from "react-dom"

import "./styles.css"
import { motion } from "framer-motion"

function App() {
  return (
    <div className="App">
      <motion.div
        style={{ width: 200, height: 200, background: "orange" }}
        animate={{ scale: 2 }}
      />
    </div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
