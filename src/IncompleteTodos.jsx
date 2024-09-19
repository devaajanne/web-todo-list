import React from "react";

function IncompleteTodos({ todos, setTodos }) {
  // Deletes the todo from the correct index
  const deleteTodo = (event) => {
    const removedIndex = parseInt(event.target.value);
    const newTodos = todos.filter((todo, index) => index !== removedIndex);
    setTodos(newTodos);
  };

  return (
    <div>
      <p>Incomplete todos</p>
      <p>This is your list of todos:</p>
      {/* Lists all the added todos from the todo list with a delete button */}
      {/* If the todo list is empty, a message is shown */}
      {/* Each todo gets a key, which is its index in the todo list */}
      {todos.length === 0 ? (
        <p>You have no todos!</p>
      ) : (
        <div>
          {todos.map((item, index) => (
            <li key={index}>
              {item.name}
              {/* When pressed, button sends the index of the to-be-deleted todo to the deleteTodo-function, so the correct todo can be removed */}
              <button type="button" value={index} onClick={deleteTodo}>
                Delete
              </button>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default IncompleteTodos;
