import React from "react";

export default function ToDoItem({
  name,
  dueDate,
  completed,
  id,
  onToggleItem,
  onDeleteItem,
}) {
  return (
    <li className={completed ? "list-item-checked" : "list-item"}>
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleItem(id)}
        />
        <p style={completed ? { textDecoration: "line-through" } : {}}>
          {name}
        </p>
      </div>
      <div>
        <p>{dueDate}</p>
        <button className="delete-button" onClick={() => onDeleteItem(id)}>
          ❌
        </button>
      </div>
    </li>
  );
}
