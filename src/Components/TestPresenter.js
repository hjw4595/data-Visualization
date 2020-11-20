import React from "react";

const TestPresenter = ({ result, loading, error }) =>
  loading ? (
      "loding"
  ) : (
      <div>
        {console.log(result)}
      </div>
    );

export default TestPresenter;