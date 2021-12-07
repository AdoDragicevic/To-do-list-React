import { FormEvent, useContext, useRef } from "react";
import { TodosDispatchCtx } from "../../../../contexts/todos";
import { ItemProps } from "../../../../models/Props";
import { ActionType } from "../../../../models/Todos";

const EditItem = ({ txt, id, toggleEdit }: ItemProps) => {
  
  const dispatch = useContext(TodosDispatchCtx);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toggleEdit();
    dispatch({ type: ActionType.UPDATE, txt: inputRef!.current!.value, id });
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" defaultValue={txt} ref={inputRef} />
      </div>
      <div>
        <button onClick={toggleEdit}>
          Edit
        </button>
        <button type="submit">
          Save
        </button>
      </div>
    </form>
  )
}

export default EditItem;