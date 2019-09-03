import * as React from "react"
import { render } from "react-dom"

import "./styles.css"
import { ResponsiveLine } from "@nivo/line"
// import * as data from "./tsla.json"

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const Chart = ({ data /* see data tab */ }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{ type: "linear", stacked: false, min: "auto", max: "auto" }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: -40,
      // legend: "date",
      legendOffset: 66,
      legendPosition: "middle"
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "USD",
      legendOffset: -40,
      legendPosition: "middle"
    }}
    colors={{ scheme: "dark2" }}
    lineWidth={4}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabel="y"
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
)

function convert(data) {
  const series = data["Weekly Time Series"]
  const dates = Object.keys(series)
    .slice(0, 20)
    .reverse()
  const newData = dates.map(date => {
    return { x: date, y: series[date]["1. open"] }
  })
  return [
    {
      id: "open",
      data: newData
    }
  ]
}

function App() {
  const [data, setData] = React.useState(null)
  async function loadData() {
    const response = await fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=MSFT&apikey=demo"
    )
    const result = await response.json()

    setData(result)
  }
  loadData()

  return (
    <div className="App">
      <div style={{ width: 800, height: 400 }}>
        {data === null ? <div>Loading...</div> : <Chart data={convert(data)} />}
      </div>
    </div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
