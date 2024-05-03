import React from "react";
import Card from "./Card";
import { Draggable } from "react-beautiful-dnd";

const CardContainer = ({ todos, header, setTodoId, editTodo, setEditDisplay }) => {
    return (
        <div className="bg-gray-100">
            <div className="flex justify-between">
                <div>{header}</div>
                <div className="flex justify-between">
                    <div className="text-lg font-medium opacity-70"></div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                    </svg>
                </div>
            </div>
            {todos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(provided) => (
                        <div
                            className=""
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            {/* {todo.id} */}
                            <Card title={todo.title} description={todo.description} id={todo.id} setTodoId={setTodoId} editTodo={editTodo} setEditDisplay={setEditDisplay} />
                        </div>
                    )}
                </Draggable>
            ))}
            <div className="flex gap-1 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>
                        <div className="h-[8px] w-[180px] bg-slate-300"></div>
                    </div>
        </div>
    );
};

export default CardContainer;