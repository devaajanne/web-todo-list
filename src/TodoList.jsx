import React from "react";
import IncompleteTodos from "./IncompleteTodos.jsx";
import CompleteTodos from "./CompleteTodos.jsx";

function TodoList() {
  // Add a single todo state
  const [todo, setTodo] = React.useState({
    description: "",
    dueDate: "",
    complete: false,
  });

  // Add a state for the list of all todos
  const [todos, setTodos] = React.useState([]);

  // Set states to show either incomplete (default) or complete todos
  const [showIncompleteTodos, setShowIncompleteTodos] = React.useState(true);
  const [showCompleteTodos, setShowCompleteTodos] = React.useState(false);

  // Sets the todo state according to user inputs
  const handleTodoDescriptionChange = (event) => {
    setTodo({ ...todo, description: event.target.value });
  };

  // Sets the todo state according to user inputs
  const handleTodoDateChange = (event) => {
    setTodo({ ...todo, date: event.target.value });
  };

  // Adds the new todo to the list of todos
  const addTodoToTodosList = (event) => {
    event.preventDefault();
    // Checks if the todo name is empty
    if (todo.description === "") {
      alert("A todo cannot be empty.");
    } else {
      // Adds the todo to the todo list and sets todo to its default values
      setTodos([...todos, todo]);
      setTodo({ ...todo, description: "", date: "", complete: false });
    }
  };

  // Change show states according to user choices
  const showIncompleteTodoList = () => {
    setShowIncompleteTodos(true);
    setShowCompleteTodos(false);
  };

  // Change show states according to user choices
  const showCompleteTodoList = () => {
    setShowIncompleteTodos(false);
    setShowCompleteTodos(true);
  };

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
        <input type="date" value={todo.date} onChange={handleTodoDateChange} />
        <input type="submit" value="Add todo" />
      </form>

      {/* Buttons to show either incomplete or complete todos */}
      <button type="button" onClick={showIncompleteTodoList}>
        Incompleted todos
      </button>
      <button type="button" onClick={showCompleteTodoList}>
        Completed todos
      </button>

      {/* Renders either incomplete or complete todos, depending on users choices */}
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
