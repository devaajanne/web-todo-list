import React from "react";

function UncompleteTodos({
  uncompleteTodos,
  setUncompleteTodos,
  completeTodos,
  setCompleteTodos,
}) {
  // Deletes the todo from the correct index
  function deleteTodo(event) {
    const removedIndex = parseInt(event.target.value);
    const newTodos = uncompleteTodos.filter(
      (todo, index) => index !== removedIndex
    );
    setUncompleteTodos(newTodos);
  }

  function markCompleted(event) {
    const completedIndex = parseInt(event.target.value);
    setCompleteTodos([...completeTodos, uncompleteTodos[completedIndex]]);
    deleteTodo(event);
  }

  return (
    <div>
      <p>Incomplete todos</p>
      <p>This is your list of todos:</p>
      {/* Lists all the added todos from the todo list with a delete button */}
      {/* If the todo list is empty, a message is shown */}
      {/* Each todo gets a key, which is its index in the todo list */}
      {uncompleteTodos.length === 0 ? (
        <p>You have no todos!</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Todo</th>
                <th>Due date</th>
              </tr>
            </thead>
            <tbody>
              {uncompleteTodos.map((item, index) => (
                <tr key={index}>
                  <td>{item.description}</td>
                  <td>{item.dueDate}</td>
                  {/* When pressed, button sends the index of the to-be-deleted todo to the deleteTodo-function, so the correct todo can be removed */}
                  <td>
                    <button type="button" value={index} onClick={deleteTodo}>
                      Delete
                    </button>
                  </td>
                  {/* When pressed, button copies the todo to the list of completed todos and removes it from the list of incomplete todos */}
                  <td>
                    <button type="button" value={index} onClick={markCompleted}>
                      Mark completed
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UncompleteTodos;
