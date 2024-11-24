import { useState } from "react";
import AddToDoItem from "./components/AddToDoItem";
import Button from "./components/Button";
import Header from "./components/Header";
import List from "./components/ToDoList";

export default function App() {
  const [showAddToDoItem, setShowAddToDoItem] = useState(false);

  function handleAddToDoItem() {
    setShowAddToDoItem((show) => !show);
  }

  return (
    <>
      <Header />
      <div className="app">
        <div>
          <List />
          {showAddToDoItem && <AddToDoItem />}
          <Button onClick={handleAddToDoItem}>
            {showAddToDoItem ? "Cancelar" : "Adicionar"}
          </Button>
        </div>
      </div>
    </>
  );
}
