import AddTodo from "./Component/AddTodo";
import TodoList from "./Component/TodoList";
import "./App.css";

const App = () => {
  return (
       <>
        <h1 className="heading">Todo List</h1>
       <AddTodo />
       <TodoList />
       </>
  );
};
export default App;