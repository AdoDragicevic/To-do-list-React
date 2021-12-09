import { useContext } from "react";
import { TodosCtx } from "../../contexts/todos";


const Header = () => {

  const { lists, openListId } = useContext(TodosCtx);

  const title = openListId ? (lists.find(l => l.id === openListId))!.txt : "Lists"; 

  return <h1 className="header">{title}</h1>
}

export default Header;