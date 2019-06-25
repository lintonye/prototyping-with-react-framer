import React from "react"
import ReactDOM from "react-dom"
import { Frame } from "framer"
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
  return (
    <div className="App">
      <div>{sandwichMaker("🥓")}</div>
      <Frame width={120} height={60} borderRadius={30}>
        <Frame size={60} borderRadius={30} />
      </Frame>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
