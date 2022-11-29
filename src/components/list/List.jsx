import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List({ toDos, onRemove, onToggle }) {
  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {toDos
          .filter((todo) => todo.isDone === false)
          // = .filter((todo) => !todo.isDone)
          .map((todo) => (
            <Todo //Todo Component
              todo={todo}
              key={todo.id}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          ))}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {toDos
          .filter((todo) => todo.isDone === true)
          //  = .filter((todo) => todo.isDone)
          .map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          ))}
      </div>
    </div>
  );
}

export default List;
