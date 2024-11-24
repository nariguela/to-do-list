import React from "react";
import ToDoItem from "./ToDoItem";

export const toDoList = [
  {
    id: 1,
    name: "Ir no poupatempo",
    dueDate: "23/11/2024",
    completed: true,
  },
  {
    id: 2,
    name: "Lavar o carro",
    dueDate: "24/11/2024",
    completed: false,
  },
];

export default function List({ toDoItems }) {
  return (
    <>
      <ul className="list">
        {toDoItems.map((item) => (
          <ToDoItem key={item.id} name={item.name} dueDate={item.dueDate} />
        ))}
      </ul>
    </>
  );
}
