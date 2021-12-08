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
      <div className="list-item__txt" onClick={handleClick}> {txt} </div>
      <div className="list-item__btns">
        <button className="btn--edit" onClick={toggleEdit}>
          <i className="fas fa-pen list-item__icon" />
        </button>
        <button className="btn--delete" onClick={handleDelete}>
          <i className="fas fa-times list-item__icon" />
        </button>
      </div>
    </>
  )
}

export default ShowItem;