import { useState } from "react";
import * as StyleGlobal from "./styleGlobal";
import NewTask from "./components/NewTask";
import Todolist from "./components/Todolist";

function App() {
  const [todolist, setTodolist] = useState(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todolist"));
    if (!storageTodos) {
      return [];
    }
    return storageTodos;
  });
  return (
    <>
      <StyleGlobal.Styles />
      <NewTask setTodolist={setTodolist} />
      <Todolist todolist={todolist} setTodolist={setTodolist} />
    </>
  );
}

export default App;
