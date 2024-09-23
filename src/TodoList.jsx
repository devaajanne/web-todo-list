import React from "react";
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

  // Set states to show either incomplete (default) or complete todos
  const [showUncompleteTodos, setShowUncompleteTodos] = React.useState(true);
  const [showCompleteTodos, setShowCompleteTodos] = React.useState(false);

  // Sets the todo state according to user inputs
  function handleTodoDescriptionChange(event) {
    setTodo({ ...todo, description: event.target.value });
  }

  // Sets the todo state according to user inputs
  function handleTodoDateChange(event) {
    setTodo({ ...todo, dueDate: event.target.value });
  }

  // Adds the new todo to the list of todos
  function addTodoToTodosList(event) {
    event.preventDefault();
    // Checks if the todo name is empty
    if (todo.description === "") {
      alert("A todo cannot be empty.");
    } else {
      // Adds the todo to the incomplete todo list and sets todo to its default values
      setUncompleteTodos([...uncompleteTodos, todo]);
      setTodo({ ...todo, description: "", dueDate: "", complete: false });
    }
  }

  // Change show states according to user choices
  function showUncompleteTodoList() {
    setShowUncompleteTodos(true);
    setShowCompleteTodos(false);
  }

  // Change show states according to user choices
  function showCompleteTodoList() {
    setShowUncompleteTodos(false);
    setShowCompleteTodos(true);
  }

  // Rendering time!
  return (
    <>
      <h1>Your todos</h1>

      {/* A form which allows adding todos to the todo list */}
      <form onSubmit={addTodoToTodosList}>
        <input
          type="text"
          placeholder="Add your todo here"
          value={todo.description}
          onChange={handleTodoDescriptionChange}
        />
        <input
          type="date"
          value={todo.dueDate}
          onChange={handleTodoDateChange}
        />
        <input type="submit" value="Add todo" />
      </form>

      {/* Buttons to show either incomplete or complete todos */}
      <button type="button" onClick={showUncompleteTodoList}>
        Uncompleted todos
      </button>
      <button type="button" onClick={showCompleteTodoList}>
        Completed todos
      </button>

      {/* Renders either incomplete or complete todos, depending on users choices */}
      <div>
        {showUncompleteTodos && !showCompleteTodos && (
          <UncompleteTodos
            uncompleteTodos={uncompleteTodos}
            setUncompleteTodos={setUncompleteTodos}
            completeTodos={completeTodos}
            setCompleteTodos={setCompleteTodos}
          />
        )}
        {!showUncompleteTodos && showCompleteTodos && (
          <CompleteTodos completeTodos={completeTodos} />
        )}
      </div>
    </>
  );
}

export default TodoList;
