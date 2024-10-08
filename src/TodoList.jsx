import React from "react";
import AddTodos from "./AddTodos.jsx";
import UncompleteTodos from "./UncompleteTodos.jsx";
import CompleteTodos from "./CompleteTodos.jsx";

function TodoList() {
  // Add a single todo state
  const [todo, setTodo] = React.useState({
    description: "",
    dueDate: "",
    complete: false,
  });

  // Add  states for the list of all incomplete and complete todos
  const [uncompleteTodos, setUncompleteTodos] = React.useState([]);
  const [completeTodos, setCompleteTodos] = React.useState([]);

  // Set states to show either uncomplete (default) or complete todos
  const [showCompleteTodos, setShowCompleteTodos] = React.useState(false);

  // Show uncomplete todos
  function showUncompleteTodoList() {
    setShowCompleteTodos(false);
  }

  // Show complete todos
  function showCompleteTodoList() {
    setShowCompleteTodos(true);
  }

  // Rendering time!
  return (
    <>
      <h1>Your todos</h1>
      <AddTodos
        todo={todo}
        setTodo={setTodo}
        uncompleteTodos={uncompleteTodos}
        setUncompleteTodos={setUncompleteTodos}
      />

      {/* Buttons to show either incomplete or complete todos */}
      <button type="button" onClick={showUncompleteTodoList}>
        Uncompleted todos
      </button>
      <button type="button" onClick={showCompleteTodoList}>
        Completed todos
      </button>

      {/* Renders either incomplete or complete todos, depending on users choices */}
      <div>
        {!showCompleteTodos && (
          <UncompleteTodos
            uncompleteTodos={uncompleteTodos}
            setUncompleteTodos={setUncompleteTodos}
            completeTodos={completeTodos}
            setCompleteTodos={setCompleteTodos}
          />
        )}
        {showCompleteTodos && <CompleteTodos completeTodos={completeTodos} />}
      </div>
    </>
  );
}

export default TodoList;
