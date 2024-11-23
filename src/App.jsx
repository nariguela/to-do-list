import Button from "./components/Button";
import Header from "./components/Header";
import List from "./components/ToDoList";

export default function App() {
  return (
    <>
      <Header />
      <div className="app">
        <div>
          <List />
          <Button>Adicionar</Button>
        </div>
      </div>
    </>
  );
}
