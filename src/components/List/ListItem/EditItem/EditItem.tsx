import { FormEvent, useContext, useRef } from "react";
import { TodosDispatchCtx } from "../../../../contexts/todos";
import { ItemProps } from "../../../../models/Props";
import { ActionType } from "../../../../models/Todos";

import "./EditItem.css";


const EditItem = ({ txt, id, toggleEdit }: ItemProps) => {
  
  const dispatch = useContext(TodosDispatchCtx);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const updatedTxt = inputRef!.current!.value;
    if (updatedTxt !== txt) dispatch({ type: ActionType.UPDATE, txt: updatedTxt, id });
    toggleEdit();
  }
  
  return (
    <form className="EditItem" onSubmit={handleSubmit}>
      <input className="ListItem__txt ListItem__input" type="text" defaultValue={txt} ref={inputRef} />
      <div className="ListItem__btns">
        <button className="ListItem__btn--update" type="submit">
          <i className="fas fa-check ListItem__icon"></i>
        </button>
        <button className="ListItem__btn--back" type="button" onClick={toggleEdit}>
          <i className="fas fa-chevron-right ListItem__icon"></i>
        </button>
      </div>
    </form>
  )
}

export default EditItem;