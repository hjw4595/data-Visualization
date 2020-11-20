import React, { useState } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const LineChart = ({ result }) => {

  const time = result.map(data => data.time)
  const EC_slab1 = result.map(data => data.EC_slab1)
  const EC_slab2 = result.map(data => data.EC_slab2)
  const EC_drain_PC = result.map(data => data.EC_drain_PC)
  const WC_slab1 = result.map(data => data.WC_slab1)
  const WC_slab2 = result.map(data => data.WC_slab2)
  const CO2air = result.map(data => data.CO2air)
  const HumDef = result.map(data => data.HumDef)
  const Rhair = result.map(data => data.Rhair)
  const Tair = result.map(data => data.Tair)
  const EnScr = result.map(data => data.EnScr)
  const BlackScr = result.map(data => data.BlackScr)
  const PipeGrow = result.map(data => data.PipeGrow)
  const PipeLow = result.map(data => data.PipeLow)
  const Iglob = result.map(data => data.Iglob)
  const RadSum = result.map(data => data.RadSum)
  const Tout = result.map(data => data.Tout)

  const [options, setOptions] = useState({
    title : {
      text: "chart"
      },
      xAxis: {
        categories : time
      },
      series: [{
        name: "EC_slab1",
        data : EC_slab1
      },
      {
        name: "EC_slab2",
        data : EC_slab2
      },
      {
        name: "EC_drain_PC",
        data : EC_drain_PC
      },
      {
        name: "WC_slab1",
        data : WC_slab1
      },
      {
        name: "WC_slab2",
        data : WC_slab2
      },
      {
        name: "CO2air",
        data : CO2air
      },
      {
        name: "HumDef",
        data : HumDef
      },
      {
        name: "Rhair",
        data : Rhair
      },
      {
        name: "Tair",
        data : Tair
      },
      {
        name: "EnScr",
        data : EnScr
      },
      {
        name: "BlackScr",
        data : BlackScr
      },
      {
        name: "PipeGrow",
        data : PipeGrow
      },
      {
        name: "PipeLow",
        data : PipeLow
      },
      {
        name: "Iglob",
        data : Iglob
      },
      {
        name: "RadSum",
        data : RadSum
      },
      {
        name: "Tout",
        data : Tout
      }]
    });

  return <HighchartsReact highcharts={Highcharts} options={options}>
  </HighchartsReact>
  }

export default LineChart;
