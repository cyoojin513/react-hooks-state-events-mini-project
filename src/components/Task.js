import React from "react";

function Task({category, text, handleDelete}) {
  function deleteBtn() {
    handleDelete(text)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={deleteBtn} className="delete">X</button>
    </div>
  );
}

export default Task;
