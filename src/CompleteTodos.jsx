import React from "react";

function CompleteTodos({ completeTodos }) {
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
            {completeTodos.length === 0 ? (
              <p>You have no todos!</p>
            ) : (
              completeTodos.map((item, index) => (
                <tr key={index}>
                  <td>{item.description}</td>
                  <td>{item.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompleteTodos;
