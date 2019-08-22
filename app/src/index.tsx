import * as React from "react"
import { render } from "react-dom"
import { Frame } from "framer"

import { PhoneScreen } from "./PhoneScreen"
import "./styles.css"

function App() {
  return (
    <div className="App">
      <PhoneScreen background="white">
        {/* Card */}
        <Frame
          left={16}
          right={16}
          top={80}
          height={300}
          image="/hotel1.jpg"
          borderRadius={16}
        />
        {/* Description */}
        <Frame
          left={16}
          right={16}
          top={380}
          height={347}
          image="/description.png"
        />
      </PhoneScreen>
    </div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
