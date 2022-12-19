const AddTodo = () => {
  return (
    <>
      <form>
        <div className="todo-input">
          <input type="text" placeholder="Add a Todo" />
          <button className="todo-btn" type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTodo;
