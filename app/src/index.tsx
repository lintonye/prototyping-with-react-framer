import * as React from "react"
import { render } from "react-dom"
import {
  Frame,
  Scroll,
  useMotionValue,
  useTransform,
  useAnimation
} from "framer"
import {
  usePositiveOffset,
  useSticky,
  useSpeed,
  useTrigger
} from "use-parallax"

import "./styles.css"

function usePosOffset(offset) {
  return useTransform(offset, v => -v)
}

function App() {
  const offset = useMotionValue(0)
  const pOffset = usePositiveOffset(offset)
  const iconOpacity = useTransform(offset, [0, -500], [1, 0])
  const iconBorderRadius = useTransform(pOffset, [0, 500], [20, 100])
  const iconY = useSpeed(
    pOffset,
    [0, 100],
    0,
    [100, 400],
    -1 / 2,
    [400, 800],
    -1
  )
  const anim = useAnimation()
  useTrigger(pOffset, [400, 450], direction => {
    anim.start({ rotate: direction < 0 ? 180 : 0 })
  })
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
          // opacity={iconOpacity}
          y={iconY}
          animate={anim}
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
