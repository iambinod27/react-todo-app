import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoStatus = () => {
  const { state, clearCompleted } = useContext(TodoContext);

  return (
    <div className="status">
      <div className="todo-status">
        <p>{state.length} items left</p>
        <div className="todo-completed" onClick={() => clearCompleted()}>
          Clear completed
        </div>
      </div>
    </div>
  );
};

export default TodoStatus;
