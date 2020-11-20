import React from "react";
import LineChart from "./highchart/LineChart";

const TestPresenter = ({result, loading}) =>
  loading ? (
      "loding"
  ) : (
      <div>
          {console.log(result)}
        <LineChart result={result} />
      </div>
    );

export default TestPresenter;