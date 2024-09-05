import React from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm.jsx";
import TodoList from "./Components/TodoList.jsx";
import TodoItem from "./Components/TodoItem.jsx";

function App() {
  return (
    <>
      <TodoForm />
      <TodoList />
      <TodoItem />
    </>
  );
}

export default App;
