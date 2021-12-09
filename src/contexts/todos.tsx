import React, { createContext } from "react";
import todosReducer from "../reducers/todo.reducer";
import { Todos } from "../models/Todos";
import useReducerAndLocStrg from "../hooks/useReducerAndLocStrg";

const TODOS: Todos = { lists: [], openListId: null, isShowCompleted: true };


export const TodosCtx = createContext<Todos>(TODOS);

export const TodosDispatchCtx = createContext<any>(() => {});

export const TodosProvider: React.FC = ({ children }) => {
  
  const [todos, dispatch] = useReducerAndLocStrg(todosReducer, TODOS, "todos");
  
  return (
    <TodosCtx.Provider value={todos}>
      <TodosDispatchCtx.Provider value={dispatch}>
        {children}
      </TodosDispatchCtx.Provider>
    </TodosCtx.Provider> 
  )
};