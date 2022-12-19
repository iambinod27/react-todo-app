export const initialState =
  localStorage.getItem("todos") == null
    ? []
    : JSON.parse(localStorage.getItem("todos"));

export const todoReducers = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat({
        task: action.task,
        id: action.id,
        complete: false,
      });

    case "REMOVE_TODO":
      return state.filter((item) => item.id !== action.id);

    case "CHECK_ITEM":
      return state.map((item) => {
        if (item.id == action.id) {
          return {
            ...item,
            complete: !item.complete,
          };
        }

        return item;
      });

    case "CLEAR_COMPLETED":
      return state.filter((item) => item.complete === false);

    default:
      return state;
  }
};
