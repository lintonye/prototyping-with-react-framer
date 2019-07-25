import * as React from "react"
import ReactDOM from "react-dom"
import { Frame, useAnimation } from "framer"

import "./styles.css"

function App() {
  const birdAnim = useAnimation()
  const cloudsAnim = useAnimation()
  const sunAnim = useAnimation()
  const bgAnim = useAnimation()
  function handleMouseMove(e) {
    // 1. Find mouse position
    let offsetXFromCenter = e.clientX - window.innerWidth / 2
    let offsetYFromCenter = e.clientY - window.innerHeight / 2

    birdAnim.start({ x: offsetXFromCenter / 6, y: offsetYFromCenter / 6 })
    cloudsAnim.start({
      x: offsetXFromCenter / 8,
      y: offsetYFromCenter / 8
    })
    sunAnim.start({
      x: offsetXFromCenter / 10,
      y: offsetYFromCenter / 10
    })
    bgAnim.start({ x: offsetXFromCenter / 12, y: offsetYFromCenter / 12 })
  }
  return React.createElement(
    "div",
    { className: "app" },
    React.createElement(
      Frame,
      {
        size: 600,
        center: true,
        background: null,
        onMouseMove: handleMouseMove
      },
      React.createElement(Frame, {
        size: 500,
        top: 50,
        left: 20,
        background: null,
        image: "https://image.flaticon.com/icons/svg/119/119596.svg",
        animate: bgAnim
      }),
      React.createElement(Frame, {
        left: 155,
        top: 15,
        background: null,
        image: "https://image.flaticon.com/icons/svg/789/789395.svg",
        animate: sunAnim
      }),
      React.createElement(Frame, {
        left: 335,
        top: 55,
        image: "https://image.flaticon.com/icons/svg/414/414927.svg",
        background: null,
        animate: cloudsAnim
      }),
      React.createElement(Frame, {
        left: 35,
        top: 200,
        image: "https://image.flaticon.com/icons/svg/789/789392.svg",
        background: null,
        animate: birdAnim
      })
    )
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
