import * as React from "react"
import { render } from "react-dom"
import { Frame, useCycle } from "framer"

import { PhoneScreen } from "./PhoneScreen"
import "./styles.css"

function App() {
  const [mode, cycleMode] = useCycle("list", "detail")
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
          onTap={() => cycleMode()}
          animate={mode}
          variants={{
            list: { left: 16, right: 16, y: 0, borderRadius: 16 },
            detail: { left: 0, right: 0, y: -80, borderRadius: 0 }
          }}
        />
        {/* Description */}
        <Frame
          left={16}
          right={16}
          top={380}
          animate={mode}
          height={347}
          image="/description.png"
          variants={{
            list: { height: 0, y: 0, left: 16, right: 16 },
            detail: {
              height: 347,
              y: -80,
              left: 8,
              right: 8
            }
          }}
        />
      </PhoneScreen>
    </div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
