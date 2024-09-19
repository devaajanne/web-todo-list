import React from "react";
import IncompleteTodos from "./IncompleteTodos.jsx";
import CompleteTodos from "./CompleteTodos.jsx";

function TodoList() {
  // Add a single todo state
  const [todo, setTodo] = React.useState("");

  // Add a state for the list of all todos
  const [todos, setTodos] = React.useState([]);

  const [showIncompleteTodos, setShowIncompleteTodos] = React.useState(true);
  const [showCompleteTodos, setShowCompleteTodos] = React.useState(false);

  // Sets the todo state according to user inputs
  const handleTodoChange = (event) => {
    setTodo(event.target.value);
  };

  // Adds the new todo to the list of todos
  const addTodoToTodosList = (event) => {
    event.preventDefault();
    // Checks if the todo name is empty
    if (todo === "") {
      alert("Your todo name cannot be empty!");
    } else {
      // Converts the todo to a list with single object, concatenates it to the list of todos and updates the state
      setTodos(todos.concat([{ name: todo, completed: false }]));
      setTodo("");
    }
  };

  const showIncompleteTodoList = () => {
    setShowIncompleteTodos(true);
    setShowCompleteTodos(false);
  };

  const showCompleteTodoList = () => {
    setShowIncompleteTodos(false);
    setShowCompleteTodos(true);
  };

  return (
    <>
      <h1>Your todos</h1>

      {/* A form which allows adding todos to the todo list*/}
      <form onSubmit={addTodoToTodosList}>
        <input
          type="text"
          placeholder="Add your todo here"
          value={todo}
          onChange={handleTodoChange}
        />
        <input type="submit" value="Add todo" />
      </form>
      <button type="button" onClick={showIncompleteTodoList}>
        Incompleted todos
      </button>
      <button type="button" onClick={showCompleteTodoList}>
        Completed todos
      </button>

      <div>
        {showIncompleteTodos && !showCompleteTodos && (
          <IncompleteTodos todos={todos} setTodos={setTodos} />
        )}
        {!showIncompleteTodos && showCompleteTodos && <CompleteTodos />}
      </div>
    </>
  );
}

export default TodoList;
