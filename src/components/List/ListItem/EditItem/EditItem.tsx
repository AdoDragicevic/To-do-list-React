import { FormEvent, useContext, useRef } from "react";
import { TodosDispatchCtx } from "../../../../contexts/todos";
import { EditItemProps } from "../../../../models/Props";
import { ActionType } from "../../../../models/Todos";


const EditItem = ({ txt, id, toggleEdit }: EditItemProps) => {
  
  const dispatch = useContext(TodosDispatchCtx);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const updatedTxt = inputRef!.current!.value;
    if (updatedTxt !== txt) dispatch({ type: ActionType.UPDATE, txt: updatedTxt, id });
    toggleEdit();
  }
  
  return (
    <form className="d-flex w-100%" onSubmit={handleSubmit}>
      <input className="list-item__txt input input--list-item" type="text" defaultValue={txt} ref={inputRef} />
      <div className="list-item__btns">
        <button className="btn btn--update" type="submit">
          <i className="fas fa-check icon icon--list-item" />
        </button>
        <button className="btn btn--back" type="button" onClick={toggleEdit}>
          <i className="fas fa-chevron-right icon icon--list-item" />
        </button>
      </div>
    </form>
  )
}

export default EditItem;