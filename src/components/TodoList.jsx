import { useContext } from "react";
import remove from "../assets/close.png";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { state, removeTodo, checkItem } = useContext(TodoContext);

  return (
    <>
      {state.map((item) => {
        return (
          <div className="todo-list" key={item.id}>
            <div className="todo-info">
              <input
                type="checkbox"
                className="todo-list-check"
                checked={item.complete}
                value={item.complete}
                onChange={() => checkItem(item.id)}
              />
              <p>{item.task}</p>
            </div>
            <img
              src={remove}
              alt="sii"
              className="todo-remove"
              onClick={() => removeTodo(item.id)}
            />
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
