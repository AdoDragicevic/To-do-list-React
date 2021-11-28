import { useReducer } from "react";
import useSetAndReset from "./hooks/useSetAndReset";
import useToggle from "./hooks/useToggle";
import todosReducer from "./reducers/todo.reducer";

import { Todos, TodosReducer } from "./models/Todos";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
//import TodoMenu from "./components/TodoMenu";

import './App.css';


const App: React.FC = () => {

  const [todos, dispatch] = useReducer<TodosReducer, Todos>(todosReducer, [], () => []);
  const [openedListId, setOpenedListId, resetOpenedListId] = useSetAndReset(null); 
  const [showCompleted, toggleShowCompleted] = useToggle(true);
  
  const getListItems = () => {
    return openedListId ? todos.find(t => t.id === openedListId) : todos;
  }

  return (
    <div className="App">
      <TodoForm />
      <TodoList items={getListItems()} />
      { /*openedListId && 
        <TodoMenu 
          onReturn={resetOpenedListId} 
          onToggleHideCompleted={toggleHideCompleted}
          onDelete={todosDispatch}
        />  
      */}
    </div>
  )
}

export default App;