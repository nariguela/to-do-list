import React from "react";

export default function AddToDoItem() {
  return (
    <form className="add-to-do-item">
      <input
        type="text"
        placeholder="Digite a tarefa"
        className="add-to-do-name"
      />
      <input type="date" className="add-to-do-date" />
    </form>
  );
}
