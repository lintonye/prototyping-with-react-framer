import * as React from "react"
import { render } from "react-dom"
import { motion, useMotionValue, useTransform } from "framer-motion"

import "./styles.css"

function App() {
  const initialAngle = (-90 / 180) * Math.PI
  const angleMv = useMotionValue(0)
  const trackR = 233 / 2
  const strokeWidth = 19
  const knobR = trackR - strokeWidth / 2
  const knobSize = 18
  const x = useTransform(angleMv, a => knobR * Math.cos(a + initialAngle))
  const y = useTransform(angleMv, a => knobR * Math.sin(a + initialAngle))
  const pathLength = useTransform(angleMv, [0, 2 * Math.PI], [0, 1])
  return (
    <div className="App">
      <motion.div
        style={{
          width: trackR * 2,
          height: trackR * 2,
          position: "relative"
        }}
        onPan={(_, info) => {
          const { point } = info
          // TODO this `center` may not be screen center
          const center = [window.innerWidth / 2, window.innerHeight / 2]
          const x = point.x - center[0]
          const y = point.y - center[1]
          let angle = Math.atan2(y, x) - initialAngle
          if (angle < 0) angle += 2 * Math.PI

          angleMv.set(angle)
        }}
      >
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
            style={{ pathLength }}
          />
        </motion.svg>
        <motion.div
          style={{
            x,
            y,
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
