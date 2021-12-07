import { FormEvent, useContext, useRef } from "react";
import { TodosCtx, TodosDispatchCtx } from "../../contexts/todos";
import { ActionType } from "../../models/Todos";

import "./New.css";


const New = () => {

  const { openListId } = useContext(TodosCtx);

  const dispatch = useContext(TodosDispatchCtx);
  
  const inputRef = useRef<HTMLInputElement>(null);

  const placeholderMsg = `Add new ${openListId ? "item" : "list"}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const txt = inputRef.current?.value;
    if (!txt || txt.trim().length === 0) return;
    inputRef.current!.value = "";
    dispatch({ type: ActionType.ADD, txt });
  }
  
  return (
    <form className="New" onSubmit={handleSubmit}>
      <div className="New__container">
        <input className="New__input" type="text" placeholder={placeholderMsg} ref={inputRef} />
        <button className="New__btn">+</button>
      </div>
    </form>
  )
}

export default New;