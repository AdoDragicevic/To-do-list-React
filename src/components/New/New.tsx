import { FormEvent, useContext, useRef } from "react";
import { TodosCtx, TodosDispatchCtx } from "../../contexts/todos";
import { ActionType } from "../../models/Todos";


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
    <form onSubmit={handleSubmit}>
      <div className="d-flex mb-sm bord-rad">
        <input className="input input--new" type="text" placeholder={placeholderMsg} ref={inputRef} />
        <button className="btn btn--new">
          <i className="far fa-plus" />
        </button>
      </div>
    </form>
  )
}

export default New;