import { useEffect, useState } from "react";
import FormAddToDoItem from "./components/FormAddToDoItem";
import Button from "./components/Button";
import Header from "./components/Header";
import ToDoList, { toDoList } from "./components/ToDoList";

export default function App() {
  const [showAddToDoItem, setShowAddToDoItem] = useState(false);
  const [toDoItems, setToDoItems] = useState(toDoList);

  function handleAddToDoItem() {
    setShowAddToDoItem((show) => !show);
  }

  function handleAddItem(item) {
    setToDoItems((items) => [...items, item]);
    setShowAddToDoItem(false);
  }

  function handleToggleItem(id) {
    setToDoItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <>
      <Header />
      <div className="app">
        <div>
          <ToDoList toDoItems={toDoItems} onToggleItem={handleToggleItem} />

          {showAddToDoItem && <FormAddToDoItem onAddItem={handleAddItem} />}

          <Button onClick={handleAddToDoItem}>
            {showAddToDoItem ? "Cancelar" : "Adicionar"}
          </Button>
        </div>
      </div>
    </>
  );
}
