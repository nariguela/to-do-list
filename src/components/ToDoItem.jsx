import React from "react";

export default function ToDoItem({ name, dueDate }) {
  return (
    <li className="list-item">
      <div>
        <input type="checkbox" />
        <p>{name}</p>
      </div>
      <p>{dueDate}</p>
    </li>
  );
}
