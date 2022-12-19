import remove from "../assets/close.png";

const TodoList = () => {
  return (
    <>
      <div className="todo-list">
        <div className="todo-info">
          <input type="checkbox" className="todo-list-check" />
          <p>this is my work</p>
        </div>
        <img src={remove} alt="sii" className="todo-remove" />
      </div>
    </>
  );
};

export default TodoList;
