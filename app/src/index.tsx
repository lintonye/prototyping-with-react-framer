import React from "react"
import ReactDOM from "react-dom"
import { motion, useMotionValue, useTransform } from "framer-motion"
import "./styles.css"

function Circle({ progress }) {
  let strokeColor = useTransform(
    progress,
    [0, 99, 100],
    ["#FFCC66", "#FFCC66", "#66BB66"]
  )
  let pathLength = useTransform(progress, [0, 100], [0, 1])
  let checkMarkOpacity = useTransform(progress, [0, 95, 100], [0, 0, 1])
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="258"
      height="258"
      viewBox="0 0 258 258"
    >
      {/* Check mark  */}
      <motion.path
        transform="translate(60 85)"
        d="M 46.477 100.11 L 0 53.633 L 5.931 47.703 L 46.477 88.249 L 134.729 0 L 140.66 5.93 Z"
        fill="#66BB66"
        opacity={checkMarkOpacity}
      />
      {/* Circle */}
      <motion.path
        d="M 130 6 C 198.483 6 254 61.517 254 130 C 254 198.483 198.483 254 130 254 C 61.517 254 6 198.483 6 130 C 6 61.517 61.517 6 130 6 Z"
        fill="transparent"
        strokeWidth="8"
        stroke={strokeColor}
        style={{
          pathLength
        }}
      />
    </motion.svg>
  )
}

function App() {
  let progress = useMotionValue(0)
  return (
    <div className="App">
      <motion.div
        style={{ x: progress }}
        animate={{ x: 100 }}
        transition={{ duration: 1 }}
      />
      <Circle progress={progress} />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
