// eslint-disable-next-line import/no-anonymous-default-export
import React, { useState } from "react";
import MainPagePresenter from "./MainPagePresenter";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import chartData from "../data.json"

const dataNumber =[
  {
    data : chartData.data0
  },{
    data : chartData.data1
  }
];
const initial = Array.from({ length: 2 }, (v, k) => k).map(k => {
  const custom = {
    id: `id-${k}`,
    content: dataNumber[k]
  };
  return custom;
});

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const DataList = React.memo(function dataList({ datas }) {
  return datas.map((data, index) => (
    <MainPagePresenter data={data} index={index} key={data.id} />
  ));
});

function MainPage() {
  const [state, setState] = useState({ datas: initial });

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const datas = reorder(
      state.datas,
      result.source.index,
      result.destination.index
    );

    setState({ datas });
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <DataList datas={state.datas} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
export default MainPage;