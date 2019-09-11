import * as React from "react"
import { render } from "react-dom"
import { motion } from "framer-motion"

import "./styles.css"

function App() {
  return (
    <div
      style={{
        height: 2000,
        width: "100%",
        background: "url(/plaid.jpeg)",
        display: "flex",
        justifyContent: "center"
      }}
    >
      {/* Icon */}
      <motion.img
        src="/starship.png"
        style={{
          boxShadow: "2px 2px 15px rgba(0,0,0,.25)",
          width: 200,
          height: 200,
          background: "white",
          marginTop: 400
        }}
      />
    </div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
