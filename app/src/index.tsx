import * as React from "react"
import ReactDOM from "react-dom"
import { Frame, useAnimation, transform } from "framer"

import "./styles.css"

function Skinny(props) {
  return (
    <Frame
      size={290}
      background="transparent"
      borderRadius={150}
      overflow="hidden"
      backgroundColor="white"
      position="relative"
      style={{ margin: 30 }}
    >
      {/* Wing far side */}
      <Frame
        background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fwing-far.png)"
        width={84}
        height={119}
        left={50}
        top={50}
        animate={props.wingAnimation}
        style={{ transformOrigin: "bottom right" }}
        rotate={-80}
      />
      {/* body */}
      <Frame
        background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fskinny-without-eyebrows.png?v=1564936113297)"
        width={290}
        height={290}
      />
      {/* Eyebrow left */}
      <Frame
        background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Feyebrow-left.png?v=1564936189694)"
        width={30}
        height={32}
        left={190}
        top={88}
        animate={props.leftEyeBrowAnimation}
      />
      {/* Eyebrow right */}
      <Frame
        background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Feyebrow-right.png?v=1564936189572)"
        width={24}
        height={14}
        left={223}
        top={91}
        animate={props.rightEyeBrowAnimation}
      />
      {/* Cheek */}
      <Frame
        background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fcheek.png)"
        width={79}
        height={67}
        left={155}
        top={135}
        animate={props.cheekAnimation}
      />
      {/* Wing near side */}
      <Frame
        background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fwing-near.png)"
        width={124}
        height={71}
        left={-20}
        top={110}
        animate={props.wingAnimation}
        style={{ transformOrigin: "bottom right" }}
        rotate={-80}
      />
    </Frame>
  )
}

function Slider(props) {
  return (
    <Frame
      width={280}
      height={15}
      borderRadius={30}
      position="relative"
      backgroundColor="white"
      style={{ margin: 30 }}
    >
      <Frame
        size={60}
        borderRadius={30}
        center="y"
        backgroundColor="white"
        shadow="0 1px 5px 0 rgba(0, 0, 0, 0.25)"
        drag="x"
        dragConstraints={{ left: 0, right: 220 }}
        dragElastic={false}
        dragMomentum={false}
        onDrag={props.onDrag}
      />
    </Frame>
  )
}

// Scope

function App() {
  const cheekAnimation = useAnimation()
  const wingAnimation = useAnimation()
  const leftEyeBrowAnimation = useAnimation()
  const rightEyeBrowAnimation = useAnimation()
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <Skinny
        cheekAnimation={cheekAnimation}
        wingAnimation={wingAnimation}
        leftEyeBrowAnimation={leftEyeBrowAnimation}
        rightEyeBrowAnimation={rightEyeBrowAnimation}
      />
      <Slider
        onDrag={function(event, info) {
          //console.log(info.point.x)
          //  change scale of cheek based on info.point.x
          const scale = transform(info.point.x, [0, 220], [0.4, 1.5])
          cheekAnimation.start({
            scale,
            transition: { type: "spring", velocity: 0 }
          })
        }}
      />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
