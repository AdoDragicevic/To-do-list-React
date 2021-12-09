import { useEffect, useReducer } from "react";
import { Todos, TodosReducer } from "../models/Todos"; 

function useReducerAndLocStrg(reducer: TodosReducer, initState: Todos, key: string): [Todos, Function] {

  const [state, dispatch] = useReducer(reducer, initState, () => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : initState;
  });
  
  useEffect( () => localStorage.setItem(key, JSON.stringify(state)), [state, key] );
  
  return [state, dispatch];
}

export default useReducerAndLocStrg;