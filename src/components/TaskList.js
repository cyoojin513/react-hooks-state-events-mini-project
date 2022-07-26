import React from "react";
import Task from "./Task"

function TaskList({tasks, deleting}) {
  const taskList = tasks.map((obj) => 
    <Task 
      key={obj.text}
      category={obj.category}
      text={obj.text}
      handleDelete={deleting}
    />)

  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
