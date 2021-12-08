import { useContext } from "react";
import { TodosCtx, TodosDispatchCtx } from "../../../../contexts/todos";
import { ItemProps } from "../../../../models/Props";
import { ActionType } from "../../../../models/Todos";


const ShowItem = ({ txt, id, toggleEdit }: ItemProps) => {
  
  const { openListId } = useContext(TodosCtx);

  const dispatch = useContext(TodosDispatchCtx);
  
  const handleClick = () => {
    if (openListId) dispatch({ type: ActionType.TOGGLE_COMPLETE, id });
    else dispatch({ type: ActionType.OPEN_LIST, id }); 
  }

  const handleDelete = () => dispatch({ type: ActionType.DELETE, id });

  return (
    <>
      <div className="ListItem__txt" onClick={handleClick}> {txt} </div>
      <div className="ListItem__btns">
        <button className="ListItem__btn--edit" onClick={toggleEdit}>
          <i className="fas fa-pen ListItem__icon"></i>
        </button>
        <button className="ListItem__btn--delete" onClick={handleDelete}>
          <i className="fas fa-times ListItem__icon"></i>
        </button>
      </div>
    </>
  )
}

export default ShowItem;