import React from "react";
import LineChart from "./highchart/LineChart";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const grid = 8;
const DataItem = styled.div`
  display: flex;
  justify-content: center;
  width: 99%;
  border: 1px solid grey;
  margin-bottom: ${grid}px;
  background-color: lightblue;
  padding: ${grid}px;
`;

function MainPagePresenter({ data, index }) {
  return (
    <Draggable draggableId={data.id} index={index}>
      {provided => (
        <DataItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <LineChart chartData={data.content.data}/>
        </DataItem>
      )}
    </Draggable>
  );
}
export default MainPagePresenter;