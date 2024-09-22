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
      <div>
        <table>
          <thead>
            <tr>
              <th>Todo</th>
              <th>Due date</th>
            </tr>
          </thead>
          <tbody>
            {todos.length === 0 ? (
              <p>You have no todos!</p>
            ) : (
              todos.map((item, index) => (
                <tr key={index}>
                  <td>{item.description}</td>
                  <td>{item.date}</td>
                  {/* When pressed, button sends the index of the to-be-deleted todo to the deleteTodo-function, so the correct todo can be removed */}
                  <td>
                    <button type="button" value={index} onClick={deleteTodo}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IncompleteTodos;
