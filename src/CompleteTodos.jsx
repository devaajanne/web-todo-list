import React from "react";

function CompleteTodos({ completeTodos }) {
  return (
    <div>
      <p>Complete todos</p>
      <p>This is your list of todos:</p>
      {/* Lists all the added todos from the todo list with a delete button */}
      {/* If the todo list is empty, a message is shown */}
      {/* Each todo gets a key, which is its index in the todo list */}
      {completeTodos.length === 0 ? (
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
              {completeTodos.map((item, index) => (
                <tr key={index}>
                  <td>{item.description}</td>
                  <td>{item.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CompleteTodos;
