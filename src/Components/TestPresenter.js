import React from "react";
import LineChart from "./highchart/LineChart";

const TestPresenter = ({result, loading}) =>
  loading ? (
      "loding"
  ) : (
      <div>
        <LineChart result={result} />
      </div>
    );

export default TestPresenter;