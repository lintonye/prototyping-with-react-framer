import * as React from "react"
import { render } from "react-dom"
import { Frame, transform, useAnimation, useCycle } from "framer"

import "./styles.css"

function Fab({ buttons, ...props }) {
  const [mode, cycleMode] = useCycle("folded", "expanded")
  return (
    <Frame
      background={null}
      initial="folded"
      animate={mode}
      size="auto"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
      {...props}
    >
      <Frame
        position="relative"
        background={null}
        size="auto"
        // variants={{
        //   folded: { transition: { staggerChildren: 0.05 } },
        //   expanded: {
        //     transition: { staggerChildren: 0.05, staggerDirection: -1 }
        //   }
        // }}
      >
        {buttons.map((button, idx) => (
          <Frame
            position="relative"
            size={40}
            key={button.image}
            image={button.image}
            borderRadius="50%"
            border="2px solid white"
            variants={{
              expanded: { scale: 1 },
              folded: { scale: 0 }
            }}
            shadow="0 1px 4px rgba(0,0,0,0.25)"
            style={{ marginBottom: 16 }}
          />
        ))}
      </Frame>
      <Frame
        size={60}
        position="relative"
        borderRadius="50%"
        backgroundColor="white"
        shadow="1px 1px 4px rgba(0,0,0,0.5)"
        onTap={function() {
          cycleMode()
        }}
      >
        <Frame
          image="/share-2.svg"
          size={30}
          center
          background={null}
          variants={{
            folded: { image: "/share-2.svg", x: -2, y: 1, rotate: 0 },
            expanded: { image: "/x.svg", x: 0, y: 0, rotate: 180 }
          }}
        />
      </Frame>
    </Frame>
  )
}

function App() {
  const buttons = [
    {
      image:
        "https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13-200w.jpeg"
    },
    {
      image:
        "https://tinyfac.es/data/avatars/AEF44435-B547-4B84-A2AE-887DFAEE6DDF-200w.jpeg"
    },
    {
      image:
        "https://tinyfac.es/data/avatars/2DDDE973-40EC-4004-ABC0-73FD4CD6D042-200w.jpeg"
    },
    {
      image:
        "https://tinyfac.es/data/avatars/852EC6E1-347C-4187-9D42-DF264CCF17BF-200w.jpeg"
    }
  ]
  return <Fab buttons={buttons} center />
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
