import React from "react";

function TaskItem({ item, toggle, deleteFn }) {
  return (
    <div>
      {item.map((value) => (
        <h3 key={value.id}>
          <input
            className="checkBox"
            type="checkbox"
            checked={value.completed}
            onChange={() => toggle(value.id)}
          />
          {value.title}
          <button onClick={() =>deleteFn(value.id)} className="deletBtn">Delete</button>
        </h3>
      ))}
    </div>
  );
}

export default TaskItem