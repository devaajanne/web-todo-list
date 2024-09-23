import React from "react";

function AddTodos({ todo, setTodo, uncompleteTodos, setUncompleteTodos }) {
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

  return (
    <div>
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
    </div>
  );
}

export default AddTodos;
