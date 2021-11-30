import { List, Item } from "../models/Todos";

interface TodoListProps { items: List[] | Item[]; }

const TodoList: React.FC<TodoListProps> = ({ items }) => {
  return (
    <ul>
      <li>heheheh</li>
    </ul>
  )
}

export default TodoList;