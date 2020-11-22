import React from "react";
import { observer, inject } from 'mobx-react';
import CheckList from "./CheckList";
import styled from "styled-components";

const ItemList = styled.ul`
    list-style:none;
    padding-left:0px;
    `;

@inject(stores => ({
    series: stores.seriesStore.series,
    checkItem: stores.seriesStore.checkItem
}))

@observer
class MyChart extends React.Component {
  render(){
    const {series , checkItem} = this.props;
      return (
        <ItemList>  
          {series.map( seriesItem => 
            <li key={seriesItem.id}>
              <CheckList series={seriesItem} checkItem={checkItem} />
            </li>)}
        </ItemList>
        )
    }
}


export default MyChart;
