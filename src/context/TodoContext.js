import React, { useReducer, createContext, useEffect } from "react"; //(createContext is going to help any comoponent to have access to this data and the funcions that we are about to create.)

export const TodoContext = createContext();

//initial state
//const INITIAL_STATE =["Jogging","Codding"];

//Get data from localStorage
const getTodos = ()=>{
    const todos = localStorage.getItem("todos");
    if(todos){
        return JSON.parse(todos)
    }else{
        return[]
    }
};
const INITIAL_STATE = getTodos();

//Reducer 
const todoReducer = (state, action)=>{  //(State- we have access to the entire state or th initial state inside our todo reducer. Action-Action is going to conatin the type of action that we want to take on our initial state.  )
    const {type, payload} = action
    switch(type){
    case"ADD_TODO":
    return[...state, action.payload];
    case"REMOVE_TODO":
    return state.filter(todo => todo.id !== payload);
    default:
        return state;
  }
};


export const TodoContextProvider = ({children})=>{
    const [todos,dispatch] = useReducer(todoReducer, INITIAL_STATE);    

    //Save to local storage
    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos))    //(JSON.stringify means Convert data JSON to String)
    },[todos]);

    //Add Todo action 
    const addTodoAction = title =>{
        dispatch({
            type:"ADD_TODO",
            payload:{
                id:todos.length+1,
                title,
            },
        });
};

    //remove
    const removeTodoAction = id =>{
        dispatch({
            type:"REMOVE_TODO",
            payload:id,
        });
};

    return( 
        <>
         <TodoContext.Provider value={{ todos, addTodoAction, removeTodoAction }}>{children}</TodoContext.Provider>
        </>
    );
};