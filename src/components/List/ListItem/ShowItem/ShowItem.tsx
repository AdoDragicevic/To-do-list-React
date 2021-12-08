import { useContext } from "react";
import { TodosCtx, TodosDispatchCtx } from "../../../../contexts/todos";
import { ItemProps } from "../../../../models/Props";
import { ActionType } from "../../../../models/Todos";


const ShowItem = ({ txt, id, nOfItems, toggleEdit }: ItemProps) => {
  
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
      <span className="list-item__amount">{nOfItems}</span>
      <div className="list-item__btns">
        <button className="btn btn--edit" onClick={toggleEdit}>
          <i className="fas fa-pen icon icon--list-item" />
        </button>
        <button className="btn btn--delete" onClick={handleDelete}>
          <i className="fas fa-times icon icon--list-item" />
        </button>
      </div>
    </>
  )
}

export default ShowItem;