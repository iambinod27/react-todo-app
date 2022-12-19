import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoStatus from "./components/TodoStatus";
import { TodoProvider } from "./context/TodoContext";
import "./style/app.css";

function App() {
  return (
    <TodoProvider>
      <div className="container">
        <main>
          <h1>TODO APP</h1>
          <div className="main-container">
            <AddTodo />
            <TodoList />
            <TodoStatus />
          </div>
        </main>
      </div>
    </TodoProvider>
  );
}

export default App;
