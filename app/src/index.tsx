import * as React from "react"
import { render } from "react-dom"
import { motion, useMotionValue, useTransform } from "framer-motion"

import "./styles.css"

function App() {
  const initialAngle = (-90 / 180) * Math.PI
  let angle = useMotionValue(initialAngle)
  const trackR = 233 / 2
  const strokeWidth = 19
  const knobSize = 18
  let knobX = useTransform(angle, a => Math.cos(a) * (trackR - knobSize / 2))
  let knobY = useTransform(angle, a => Math.sin(a) * (trackR - knobSize / 2))

  return (
    <div className="App">
      <motion.div
        style={{
          width: trackR * 2,
          height: trackR * 2,
          position: "relative"
        }}
        onPan={(_, info) => {
          const x = info.point.x - window.innerWidth / 2
          const y = info.point.y - window.innerHeight / 2

          // Get the angle from x and y
          let panAngle = Math.atan2(y, x)
          angle.set(panAngle)
        }}
      >
        {/* Circle */}
        <motion.svg
          width="233"
          height="233"
          viewBox="0 0 233 233"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#05a" />
              <stop offset="100%" stopColor="#0a5" />
            </linearGradient>
          </defs>
          <motion.path
            fill="transparent"
            stroke="url(#linear)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            d="M116.5 10C175.318 10 223 57.682 223 116.5S175.318 223 116.5 223 10 175.318 10 116.5 57.682 10 116.5 10z"
          />
        </motion.svg>
        {/* Knob */}
        <motion.div
          style={{
            x: knobX,
            y: knobY,
            width: knobSize * 2,
            height: knobSize * 2,
            background: "white",
            border: "1px solid rgba(0,0,0,.1)",
            boxShadow: "1px 1px 4px rgba(0,0,0,.25)",
            borderRadius: "50%",
            left: trackR - knobSize,
            top: trackR - knobSize,
            position: "absolute"
          }}
        />
      </motion.div>
    </div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
