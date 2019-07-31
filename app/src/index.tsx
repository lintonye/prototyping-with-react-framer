import * as React from "react"
import { render } from "react-dom"

import "./styles.css"
import { Frame } from "framer"

function Radio(props) {
  return (
    <Frame
      position="relative"
      size="auto"
      style={{ display: "flex", marginBottom: 10 }}
      background="null"
    >
      <Frame
        size={30}
        shadow="0 1px 5px 0 rgba(0,0,0,0.3)"
        background="white"
        borderRadius={15}
        position="relative"
        style={{ marginRight: 10 }}
      >
        <Frame
          size={20}
          borderRadius={10}
          background="purple"
          center
          animate={{ scale: props.selected ? 1 : 0 }}
        />
      </Frame>
      {props.children}
    </Frame>
  )
}

// DRY = Do not Repeat Yourself
function RadioGroup(props) {
  return (
    <Frame background={null}>
      {props.choices.map(choice => (
        <Radio>{choice}</Radio>
      ))}
    </Frame>
  )
}

function App() {
  let options = [
    "🍏 Apple",
    "🥑 Avocado",
    "🌶 Pepper",
    "🥕 Carrot",
    "🍔 Burger",
    "🥝 Kiwi fruit",
    "🍌 Banana"
  ]
  return (
    <div className="App">
      <RadioGroup choices={options} />
    </div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
