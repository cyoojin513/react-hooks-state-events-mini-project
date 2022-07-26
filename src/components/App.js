import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [task, setTask] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function handleNewData(newData) {
    setTask([...task, newData])
  }

  function handleDelete(deletingObj) {
    setTask(task.filter((item) => item.text !== deletingObj)
    )
  }
  
  const filteredCategory = task.filter((item) => {
    if (category === "All") {return true
    } else {return item.category === category}
  })
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categoryList={CATEGORIES}
        handleClick={setCategory}
        selectedCategory={category}/>
      <NewTaskForm renderedData={handleNewData} renderedCategory={CATEGORIES}/>
      <TaskList tasks={filteredCategory} deleting={handleDelete}/>
    </div>
  );
}

export default App;
