import * as React from "react"
import { Override, Data, transform } from "framer"

import {
    useScroll,
    useTrackScrollY,
    // @ts-ignore
} from "@framer/lintonye.parallax/code"

const appState = Data({
    percentage: 0,
})

export function Lottie(): Override {
    const { scrollY } = useScroll()
    useTrackScrollY(y => {
        appState.percentage = transform(y, [0, -200], [0, 100])
    })
    return {
        percentage: appState.percentage,
    }
}
