import * as React from "react"
import { render } from "react-dom"
import { Frame, transform, useAnimation } from "framer"

import "./styles.css"

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
  return <Frame />
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
