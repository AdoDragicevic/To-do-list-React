import { useContext } from "react";
import { TodosDispatchCtx } from "../../../../contexts/todos";
import { ItemProps } from "../../../../models/Props";
import { ActionType } from "../../../../models/Todos";

const ShowItem = ({ txt, id, toggleEdit }: ItemProps) => {
  
  const dispatch = useContext(TodosDispatchCtx);
  
  const handleClick = () => dispatch({ type: ActionType.DELETE, id });

  return (
    <div>
      <div>
        {txt}
      </div>
      <div>
        <button onClick={toggleEdit}>Edit</button>
        <button onClick={handleClick}>Delete</button>
      </div>
    </div>
  )
}

export default ShowItem;