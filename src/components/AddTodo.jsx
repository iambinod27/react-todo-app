import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const { handleSubmit, todo, setTodo } = useContext(TodoContext);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="todo-input">
          <input
            type="text"
            placeholder="Add a Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="todo-btn" type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTodo;
