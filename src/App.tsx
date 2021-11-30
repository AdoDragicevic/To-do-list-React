import { useReducer } from "react";
import useToggle from "./hooks/useToggle";
import todosReducer from "./reducers/todo.reducer";
import { Todos, TodosReducer } from "./models/Todos";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoMenu from "./components/TodoMenu";

import './App.css';

const TODOS = { lists: [], openListId: null }


const App: React.FC = () => {

  const [todos, dispatch] = useReducer<TodosReducer, Todos>(todosReducer, TODOS , () => TODOS); 
  const [showCompleted, toggleShowCompleted] = useToggle(true);

  return (
    <div className="App">
      <TodoForm />
      <TodoList />
      <TodoMenu
        openListId={todos.openListId}
        showCompleted={showCompleted}
        onToggleShowCompleted={toggleShowCompleted}
        dispatch={dispatch}
      />
    </div>
  )
}

export default App;