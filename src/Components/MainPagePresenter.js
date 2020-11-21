import React from "react";
import LineChart from "./highchart/LineChart";

const MainPagePresenter = ({chartData}) => {
return (
  <>
  <LineChart chartData={chartData} />
  </>
  )
}

export default MainPagePresenter;