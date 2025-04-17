import React from "react";
import ToDoItem from "./ToDoItem";

export const toDoList = [];

export default function ToDoList({ toDoItems, onToggleItem, onDeleteItem }) {
  return (
    <>
      <ul className="list">
        {toDoItems.map((item) => (
          <ToDoItem
            key={item.id}
            name={item.name}
            dueDate={item.dueDate}
            completed={item.completed}
            id={item.id}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </>
  );
}
