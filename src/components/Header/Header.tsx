import { useContext } from "react";
import { TodosCtx } from "../../contexts/todos";


const Header = () => {

  const { lists, openListId } = useContext(TodosCtx);

  const title = (() => {
    if (!openListId) return "Lists";
    const list = lists?.find(l => l.id === openListId);
    return list?.txt;
  })();

  return <h1 className="header">{title}</h1>
}

export default Header;