import React from "react";
import "./TodoForm.css";

export default function TodoForm() {
  const [todo, setTodo] = React.useState(null);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <button type="button" value={todo} onClick={null}>
        Add
      </button>
    </>
  );
}
