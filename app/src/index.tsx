import * as React from "react"
import { render } from "react-dom"
import { Frame, Scroll, useMotionValue, useTransform } from "framer"

import "./styles.css"

function App() {
  const offset = useMotionValue(0)
  const iconOpacity = useTransform(offset, [0, -500], [1, 0])
  const iconBorderRadius = useTransform(offset, [0, -500], [20, 100])
  // offset.onChange(v => console.log(v))
  return (
    <Scroll width="100%" height="100%" contentOffsetY={offset}>
      <Frame background={null}>
        {/* Plaid background */}
        <Frame
          height={2000}
          width="100%"
          opacity={0.5}
          background="url(/plaid.jpeg)"
        />
        {/* Icon */}
        <Frame
          opacity={iconOpacity}
          backgroundColor="white"
          size={200}
          top={400}
          borderRadius={iconBorderRadius}
          center="x"
          image="/starship.png"
        />
      </Frame>
    </Scroll>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
