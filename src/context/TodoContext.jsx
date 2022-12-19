import { createContext, useReducer, useState } from "react";
import { initialState, todoReducers } from "./reducer/todoReducer";
import { v4 as uuid } from "uuid";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducers, initialState);
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    if (todo) {
      dispatch({
        type: "ADD_TODO",
        task: todo,
        id: uuid(),
      });
    }
    e.preventDefault();
    setTodo("");
  };

  const removeTodo = (id) => {
    dispatch({
      type: "REMOVE_TODO",
      id,
    });
  };

  const value = { state, handleSubmit, todo, setTodo, removeTodo };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
