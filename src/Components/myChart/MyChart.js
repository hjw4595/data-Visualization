import React from "react";
import { observer, inject } from 'mobx-react';
import CheckList from "./CheckList";

@inject(stores => ({
    series: stores.seriesStore.series,
    checkItem: stores.seriesStore.checkItem
}))

@observer
class MyChart extends React.Component {
    render(){
        const {series , checkItem} = this.props;
        return (
            <CheckList series={series} checkItem={checkItem} />
        )
    }
}

export default MyChart;
