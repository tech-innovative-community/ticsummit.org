import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { columnData } from "../../dummy";
import "./Kanban.scss";

const Kanban = () => {
  const [columns, setColumns] = React.useState(columnData);
  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: 8,
    width: 250,
  });

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = columns.findIndex(
      (column) => column.id === source.droppableId
    );
    const finish = columns.findIndex(
      (column) => column.id === destination.droppableId
    );

    const newColumns = [...columns];

    const column = newColumns[start];
    newColumns.splice(start, 1);
    newColumns.splice(finish, 0, column);

    setColumns(newColumns);
  };

  return (
    <div className="kanban">
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        {columns.map((column) => {
          return (
            <div key={column.id} className="kanban__droppable">
              <h3>{column.title}</h3>
              <Droppable droppableId={column.id}>
                {(provided, snapshot) => {
                  return (
                    <div
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}
                    >
                      {column.cards.map((card, index) => {
                        return (
                          <Draggable
                            key={card.id}
                            draggableId={card.id}
                            index={index}
                          >
                            {(provided, snapshot) => {
                              return (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  {card.title}
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default Kanban;
