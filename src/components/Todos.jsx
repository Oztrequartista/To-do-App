import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, setTodos, filteredTodos }) => {
  // console.log(filteredTodos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => {
          return (
            <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
