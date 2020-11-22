import React from "react";
import LineChart from "./highchart/LineChart";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import MyChart from "../Components/myChart/MyChart";

const Test = styled.div`
  display : flex;
`
const DataItem = styled.div`
  align-self: center;
  border: 1px solid grey;
  background-color: white;
  padding: 10rem 0 10rem 0;
`;

function MainPagePresenter({ data, index }) {
  return (
    <Draggable draggableId={data.id} index={index}>
      {provided => (
        <Test>
          <LineChart chartData={data.content.data}/>
          <MyChart  chartData={data.content.data} />
          <DataItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          >
          <span role="img" aria-label="drag and drop">↕</span>
          </DataItem>
        </Test>
      )}
    </Draggable>
  );
}
export default MainPagePresenter;