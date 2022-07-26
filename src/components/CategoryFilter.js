import React from "react";

function CategoryFilter({categoryList, handleClick, selectedCategory}) {
  
  const categoryName = categoryList.map((category) => {
    const handleClass = (selectedCategory === category) ? "selected" : null
    return (
      <button
        onClick={() => handleClick(category)}
        className={handleClass}
        key={category}
      > {category}
      </button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryName}
    </div>
  );
}

export default CategoryFilter;
