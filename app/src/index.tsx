import * as React from "react"
import { useState } from "react"
import { render } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"

import "./styles.css"

const CheckMark = ({ checked, ...props }) => (
  <motion.svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <mask id="path-1-inside-1" fill="white">
      <rect width={28} height={28} rx={1} />
    </mask>
    <motion.rect
      width={28}
      height={28}
      rx={1}
      stroke="#ddd"
      strokeWidth={4}
      mask="url(#path-1-inside-1)"
    />
    <motion.path
      initial="unchecked"
      animate={checked ? "checked" : "unchecked"}
      variants={{
        checked: {
          pathLength: 1,
          pathOffset: 0,
          opacity: [0, 1, 1],
          transition: { times: [0, 0.001, 1] }
        },
        unchecked: {
          pathLength: 0,
          pathOffset: 0,
          opacity: 0
        }
      }}
      d="M2 20L12 28L27 8"
      transform="translate(2 -4)"
      stroke="#0DBB53"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
)

function Task({ title, checked, ...props }) {
  const liStyle = {
    padding: 20,
    borderRadius: 2,
    backgroundColor: "white",
    margin: 1,
    listStyle: "none",
    boxShadow: "0 2px 4px rgba(0,0,0,.25)",
    minWidth: 300
  }
  return (
    <motion.li
      drag="x"
      style={liStyle}
      positionTransition
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        x: 200,
        transition: { duration: 0.2 }
      }}
      {...props}
    >
      <motion.div
        animate={checked ? "checked" : "unchecked"}
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative"
        }}
      >
        <CheckMark checked={checked} style={{ marginRight: 24 }} />
        <motion.hr
          variants={{
            checked: { scaleX: 1, transition: { delay: 0.2 } },
            unchecked: { scaleX: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{
            originX: 0,
            width: "80%",
            position: "absolute",
            margin: "0 100px 0 50px",
            borderTop: "1px solid #999",
            borderBottom: "0"
          }}
        />
        <motion.div
          variants={{
            checked: { color: "#999" },
            unchecked: { color: "#000" }
          }}
        >
          {title}
        </motion.div>
      </motion.div>
    </motion.li>
  )
}

function removeFromArray(array, index) {
  return [...array.slice(0, index), ...array.slice(index + 1)]
}

function App() {
  const [tasks, setTasks] = useState([
    "Learn React",
    "Prototype with Framer",
    "Get Superpowers",
    "Conquer the universe"
  ])
  return (
    <div className="App">
      <ul>
        <AnimatePresence>
          {tasks.map((task, idx) => (
            <Task
              title={task}
              key={task}
              checked={false}
              onClick={() => {
                setTasks(removeFromArray(tasks, idx))
              }}
            />
          ))}
        </AnimatePresence>
      </ul>
    </div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
