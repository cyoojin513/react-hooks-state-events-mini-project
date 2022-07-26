import React, {useState} from "react";

function NewTaskForm({renderedData, renderedCategory}) {
  const category = renderedCategory.filter((item) => item !== "All")

  const [newData, setNewData] = useState({
    text: "",
    category: "code",
  })

  function handleChange(e) {
    const key = e.target.name
    setNewData({
      ...newData,
      [key]: e.target.value 
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    renderedData(newData)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {category.map((item) => 
            <option key={item} value={item}>{item}</option>
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
