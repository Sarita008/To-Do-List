import React, { useContext } from 'react';
import "./TodoList.css";
import { TodoContext } from '../context/TodoContext';


const TodoList = () => {
 const {todos, removeTodoAction} = useContext(TodoContext);
 console.log(todos);
  return (
    <div className="todo-list-container" >
        <div className='todo-item-container'>
            {todos.map((todo)=>{
              return(
                <div key={todo.id} className='todo-innerContainer'> 
                <h3>🌸 {todo.title}</h3>
                <button onClick ={()=>removeTodoAction(todo.id)} id="delete">X</button>
                </div>
              );
            })} 
        </div>
    </div>
  );
};

export default TodoList;