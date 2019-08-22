import * as React from "react"
import { Frame } from "framer"

const phoneWidth = 300
const screenWidth = phoneWidth - 40
const screenHeight = (screenWidth * 2436) / 1125

export function PhoneScreen(props) {
  return (
    /* Phone frame */
    <Frame
      width={phoneWidth}
      height={(phoneWidth * 1023) / 510}
      borderRadius={30}
      center
      background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2F510px-IPhone_X_vector.svg.png)"
      style={{ backgroundSize: "cover" }}
    >
      {/* Screen enclosure */}
      <Frame
        background={props.background}
        width={screenWidth}
        height={screenHeight}
        left={(phoneWidth - screenWidth) / 2}
        top={20}
        overflow="hidden"
        borderRadius={25}
        style={{ backgroundSize: "cover" }}
      >
        {props.children}
      </Frame>
      {/* Knotch */}
      <Frame
        width={phoneWidth}
        height={40}
        borderRadius={30}
        background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fiphone-knotch.png?v=1560384088002)"
        style={{ backgroundSize: "cover" }}
      />
    </Frame>
  )
}
