import * as React from "react"
import { render } from "react-dom"
import {
  motion,
  useViewportScroll,
  useMotionValue,
  useTransform
} from "framer-motion"

import "./styles.css"

function App() {
  const { scrollY } = useViewportScroll()
  const iconOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const iconBorderRadius = useTransform(scrollY, [0, 500], [20, 100])
  // offset.onChange(v => console.log(v))
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
          opacity: iconOpacity,
          background: "white",
          borderRadius: iconBorderRadius,
          z: 1,
          margin: "400px 0 0 200px"
        }}
      />
    </motion.div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
