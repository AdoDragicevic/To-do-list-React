import React, { createContext, Dispatch, useReducer } from "react";
import todosReducer from "../reducers/todo.reducer";
import { Todos, TodosReducer } from "../models/Todos";


export const TodosCtx = createContext<Partial<Todos>>({});

export const TodosDispatchCtx = createContext<any>(() => {});


const TODOS = { lists: [], openListId: null };

export const TodosProvider: React.FC = ({ children }) => {
  
  const [todos, dispatch] = useReducer<TodosReducer, Todos>(todosReducer, TODOS , () => TODOS);
  
  return (
    <TodosCtx.Provider value={todos}>
      <TodosDispatchCtx.Provider value={dispatch}>
        {children}
      </TodosDispatchCtx.Provider>
    </TodosCtx.Provider> 
  )
};