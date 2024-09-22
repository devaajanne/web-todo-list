import React from "react";

function IncompleteTodos({
  incompleteTodos,
  setIncompleteTodos,
  completeTodos,
  setCompleteTodos,
}) {
  // Deletes the todo from the correct index
  function deleteTodo(event) {
    const removedIndex = parseInt(event.target.value);
    const newTodos = incompleteTodos.filter(
      (todo, index) => index !== removedIndex
    );
    setIncompleteTodos(newTodos);
  }

  function markCompleted(event) {
    const completedIndex = parseInt(event.target.value);
    setCompleteTodos([...completeTodos, incompleteTodos[completedIndex]]);
    deleteTodo(event);
  }

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
            {incompleteTodos.length === 0 ? (
              <p>You have no todos!</p>
            ) : (
              incompleteTodos.map((item, index) => (
                <tr key={index}>
                  <td>{item.description}</td>
                  <td>{item.date}</td>
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IncompleteTodos;
