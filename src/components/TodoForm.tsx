import { FormEvent, useRef } from "react";

const TodoForm: React.FC = () => {
  
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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