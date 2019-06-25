import React from "react"
import ReactDOM from "react-dom"
import { Frame, useCycle } from "framer"
import "./styles.css"

// parameter
function microwave(food) {
  // function body
  // return value
  return "heated " + food
}

function sandwichMaker(meat) {
  let sandwich = "🍞"
  sandwich = sandwich + meat
  sandwich = sandwich + "🍀"
  sandwich = sandwich + "🍞"
  return sandwich
}

// call the function
console.log(microwave(sandwichMaker("🥓")))
console.log(microwave(sandwichMaker("🍤")))
console.log(microwave(sandwichMaker("🍖")))

function App() {
  let [knobX, cycleKnobX] = useCycle(0, 60)
  return (
    <div className="App">
      <div>{sandwichMaker("🥓")}</div>
      <Frame
        width={120}
        height={60}
        borderRadius={30}
        onTap={function handleTap() {
          // change the value of knobX
          console.log("tapped")
          // knobX = 60 // won't work in React!
          cycleKnobX()
        }}
      >
        <Frame size={60} borderRadius={30} x={knobX} />
      </Frame>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
