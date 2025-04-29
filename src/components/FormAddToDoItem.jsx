import React, { useState } from "react";
import Button from "./Button";

export default function FormAddToDoItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !dueDate) return;

    // Corrigir o problema de fuso horário
    const selectedDate = new Date(dueDate);
    selectedDate.setMinutes(
      selectedDate.getMinutes() + selectedDate.getTimezoneOffset()
    );

    const formattedDate = selectedDate.toLocaleDateString("pt-BR");
    const id = crypto.randomUUID();
    const newItem = {
      id,
      name: name,
      dueDate: formattedDate,
      completed: false,
    };

    onAddItem(newItem);
  }

  return (
    <>
      <form className="add-to-do-item" onSubmit={handleSubmit}>
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
        <Button>Incluir</Button>
      </form>
    </>
  );
}
