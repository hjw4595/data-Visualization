import React, {useState} from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import styled from "styled-components";

require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/export-data")(Highcharts);

const Container = styled.div`
  width: 100%;
`
const LineChart = ({ chartData }) => {
  const dateTime = chartData.map(data => data.time)
  const EC_slab1 = chartData.map(data => data.EC_slab1)
  const EC_slab2 = chartData.map(data => data.EC_slab2)
  const EC_drain_PC = chartData.map(data => data.EC_drain_PC)
  const WC_slab1 = chartData.map(data => data.WC_slab1)
  const WC_slab2 = chartData.map(data => data.WC_slab2)
  const CO2air = chartData.map(data => data.CO2air)
  const HumDef = chartData.map(data => data.HumDef)
  const Rhair = chartData.map(data => data.Rhair)
  const Tair = chartData.map(data => data.Tair)
  const EnScr = chartData.map(data => data.EnScr)
  const BlackScr = chartData.map(data => data.BlackScr)
  const PipeGrow = chartData.map(data => data.PipeGrow)
  const PipeLow = chartData.map(data => data.PipeLow)
  const Iglob = chartData.map(data => data.Iglob)
  const RadSum = chartData.map(data => data.RadSum)
  const Tout = chartData.map(data => data.Tout)

  const [changeTooltip, setChangeTooltip] = useState(true)
  const options = {
    exporting: {
      enabled: true,
      buttons: {
          contextButton: {
              menuItems: [{
                  text: 'CSV file Download',
                  onclick: function() {
                    console.log(this.getCSV());
                  }
              }]
          }
      }
  },
    chart : {
      zoomType: 'x'
    },
    tooltip: {
      enabled: changeTooltip
    },
    title : {
      text: "chart"
      },
      xAxis: {
        categories : dateTime
      },
      series: [
        {
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
    }

  function TooltipSwitch({tooltip}){
    return function(event){
      return setChangeTooltip(!tooltip.enabled)
    }
  } 

  return (
    <Container>
    <button onClick={(TooltipSwitch(options))}>tooltip {options.tooltip.enabled ? "off" : "on"}</button>
    <HighchartsReact highcharts={Highcharts} options={options} />
    </Container>
  )
  }

export default LineChart;
