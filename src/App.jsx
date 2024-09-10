import React from "react";
import "./App.css";

function App() {
  // Add a single todo state
  const [todo, setTodo] = React.useState("");
  // Add a state for the list of all todos
  const [todos, setTodos] = React.useState([]);

  // Sets the todo state according to user inputs
  const handleTodoChange = (event) => {
    setTodo(event.target.value);
  };

  // Adds the new todo to the list of todos
  const addTodoToTodosList = (event) => {
    event.preventDefault();
    // Converts the todo to a list with single object, concatenates it to the list of todos and updates the state
    setTodos(todos.concat([{ name: todo, completed: false }]));
    setTodo("");
  };

  // Deletes the todo from the correct index
  const deleteTodo = (event) => {
    const removedIndex = parseInt(event.target.value);

    // Adds all the todos in the todo list before the index to a new list
    const todosBeforeRemovedIndex = todos.slice(0, removedIndex);

    // Adds all the todos in the todo list after the index to a new list
    const todosAfterRemovedIndex = todos.slice(removedIndex + 1);

    // Concatenates the two lists without the todo from the deleted index and updates the state
    setTodos(todosBeforeRemovedIndex.concat(todosAfterRemovedIndex));
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

      <div>
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
                  Delete todo
                </button>
              </li>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
