import * as React from "react"
import { render } from "react-dom"
import { motion } from "framer-motion"

import "./styles.css"

function App() {
  return (
    <motion.div
      style={{
        height: 2000,
        width: "100%",
        background: "url(/plaid.jpeg)"
      }}
    >
      {/* Icon */}
      <motion.img
        src="/starship.png"
        style={{
          width: 200,
          background: "white",
          margin: "400px 0 0 200px"
        }}
      />
    </motion.div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
