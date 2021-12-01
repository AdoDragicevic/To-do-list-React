import { useReducer } from "react";
import useToggle from "./hooks/useToggle";
import todosReducer from "./reducers/todo.reducer";
import { Todos, TodosReducer } from "./models/Todos";
import { List } from "./models/Todos";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoMenu from "./components/TodoMenu";

import './App.css';

const TODOS = { lists: [], openListId: null }


const App: React.FC = () => {

  const [todos, dispatch] = useReducer<TodosReducer, Todos>(todosReducer, TODOS , () => TODOS); 
  const [showCompleted, toggleShowCompleted] = useToggle(true);

  const items = (() => {
    if (!todos.openListId) return todos.lists;
    const list = todos.lists.find(l => l.id === todos.openListId);
    if (!list) throw new Error("todos.openListId does not mathc any list!");
    return showCompleted ? list.items : list.items.filter(i => i.isCompleted);
  })();

  return (
    <div className="App">
      <TodoForm />
      <TodoList items={items} />
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