import React, { FormEvent, ReducerAction, useRef } from "react";

interface TodoFormProps {
  // dispatch: React.Dispatch<{ type: ActionType; txt: string }>
  onAddNew: (txt: string) => void;
}

const TodoForm = ({ onAddNew }: TodoFormProps) => {
  
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const txt = inputRef.current?.value;
    if (!txt?.trim()) return;
    onAddNew(txt);
    inputRef.current!.value = "";
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add new item" ref={inputRef} />
      <button>+</button>
    </form>
  )
}

export default TodoForm;