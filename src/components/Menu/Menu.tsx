import { useContext } from "react";
import { TodosCtx, TodosDispatchCtx } from "../../contexts/todos";
import { ActionType } from "../../models/Todos";

import MenuBtn from "./MenuBtn/MenuBtn";

import "./Menu.css";

const Menu = () => {

  const { openListId, isShowCompleted } = useContext(TodosCtx);

  const dispatch = useContext(TodosDispatchCtx);

  if (!openListId) return null;
  
  else return (
    <div className="Menu">
      <MenuBtn 
        txt="Show Lists" 
        icon="far fa-folder-open" 
        onClick={() => dispatch({ type: ActionType.CLOSE_LIST })} 
      />
      <MenuBtn 
        txt={isShowCompleted ? " Show Completed" : " Hide Completed"} 
        icon="fas fa-tasks" 
        onClick={() => dispatch({ type: ActionType.TOGGLE_SHOW_COMPLETED })} 
      />
      <MenuBtn 
        txt="Delete List" 
        icon="fas fa-trash" 
        onClick={() => dispatch({ type: ActionType.DELETE, id: openListId })} 
      />
    </div>
  )
}

export default Menu;