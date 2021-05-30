import React from "react";

const Todo = ({ todo, todos, setTodos }) => {
  //destructure todo and use it below
  const { completed, text, id } = todo;
  const handleDelete = (id) => {
    //we're checking if the element we're clicking does not match the element(todo) from the state
    setTodos(todos.filter((todo) => id !== todo.id));
    // console.log(todo);
  };

  const handleComplete = (id) => {
    //we're checking if the element we're clicking matches the element(todo) from the state
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !completed,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <div className="todo">
        <li className={`todo-item ${completed ? "completed" : ""}`}>{text}</li>
        <button className="complete-button" onClick={() => handleComplete(id)}>
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-button" onClick={() => handleDelete(id)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
