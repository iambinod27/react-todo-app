export const initialState = [];

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

    default:
      return state;
  }
};
