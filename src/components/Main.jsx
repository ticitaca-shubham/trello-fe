import React, { useState } from "react";
import MainHeader from "../subcomponents/MainHeader";
import CardContainer from "../subcomponents/CardContainer";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
/* eslint-disable react/prop-types */
export default function Main({ todos, setTodoId, editTodo, setEditDisplay }) {
  const [todoList, setTodoList] = useState(todos);
  const [cards, setCards] = useState(todos);
  const handleTodoStatusChange = (todoId, newStatus) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, status: newStatus };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };
  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }
    console.log(cards[0]);
    cards.map((card) => {
      if (card.id === result.draggableId) {
        card.status = destination.droppableId;
      }
    });
    setCards(cards);
    localStorage.setItem("myCat", JSON.stringify(cards));
  };
  return (
    <div className="bg-gradient-to-tr from-purple-500 to-pink-400 p-2 h-screen">
      <MainHeader />
      <div className=" w-full">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="mx-1 flex flex-row items-start gap-1">
            <Droppable droppableId="todo">
              {(provided, snapshot) => (
                <div
                  className="w-1/3 p-1"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    background: snapshot.isDraggingOver
                      ? "lightblue"
                      : "lightgrey",
                  }}
                >
                  <CardContainer
                    header="To Do"
                    todos={todoList.filter((todo) => todo.status === "todo")}
                    status="todo"
                    onTodoStatusChange={handleTodoStatusChange}
                    setTodoId={setTodoId}
                    editTodo={editTodo}
                    setEditDisplay={setEditDisplay}

                  />

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId="doing">
              {(provided, snapshot) => (
                <div
                  className="w-1/3 p-1"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    background: snapshot.isDraggingOver
                      ? "lightblue"
                      : "lightgrey",
                  }}
                >
                  <CardContainer
                    header="Doing"
                    todos={todoList.filter((todo) => todo.status === "doing")}
                    status="doing"
                    onTodoStatusChange={handleTodoStatusChange}
                    setTodoId={setTodoId}
                    editTodo={editTodo}
                    setEditDisplay={setEditDisplay}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId="done">
              {(provided, snapshot) => (
                <div
                  className="w-1/3 p-1"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    background: snapshot.isDraggingOver
                      ? "lightblue"
                      : "lightgrey",
                  }}
                >
                  <CardContainer
                    header="Done"
                    todos={todoList.filter((todo) => todo.status === "done")}
                    status="done"
                    onTodoStatusChange={handleTodoStatusChange}
                    setTodoId={setTodoId}
                    editTodo={editTodo}
                    setEditDisplay={setEditDisplay}

                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            
          </div>
        </DragDropContext>
      </div>
    </div>

  );
}