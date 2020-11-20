import React from "react";
import { getDataApi } from "../api/data";
import TestPresenter from "./TestPresenter";
// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
    state = {
      result: null,
      error: null,
      loading: true,
      name: null,
    };

async componentDidMount() {
    let result = null;
    try {
      ({ data: {dataset : result}} = await getDataApi());
    } catch {
      this.setState({ error: "error" });
    } finally {
      this.setState({ loading: false, result });
    }
}

  render() {
    const { result, loading } = this.state;
    return <TestPresenter result={result} loading={loading} />

  }
}