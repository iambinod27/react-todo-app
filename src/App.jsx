import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoStatus from "./components/TodoStatus";
import "./style/app.css";

function App() {
  return (
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
  );
}

export default App;
