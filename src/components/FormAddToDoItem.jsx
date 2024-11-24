import React, { useState } from "react";
import Button from "./Button";

export default function FormAddToDoItem() {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");

  return (
    <>
      <form className="add-to-do-item">
        <input
          type="text"
          placeholder="Digite a tarefa"
          className="add-to-do-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          className="add-to-do-date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <Button>Incluir tarefa</Button>
      </form>
    </>
  );
}
