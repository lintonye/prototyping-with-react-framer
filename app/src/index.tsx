import * as React from "react"
import { render } from "react-dom"
import { motion } from "framer-motion"

import "./styles.css"

function App() {
  return (
    <motion.div>
      <motion.div>
        {/* Plaid background */}
        <motion.div
          style={{
            height: 2000,
            width: "100%",
            opacity: 0.5,
            background: "url(/plaid.jpeg)",
            position: "absolute",
            top: 0
          }}
        />
      </motion.div>
      {/* Icon */}
      <motion.img
        src="/starship.png"
        style={{
          width: 200,
          background: "white",
          z: 1,
          margin: "400px 0 0 200px"
        }}
      />
    </motion.div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
