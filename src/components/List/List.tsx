import { useContext} from "react";
import { TodosCtx } from "../../contexts/todos";
import { getListItems } from "../../helpers/helpers";

import ListItem from "./ListItem/ListItem";

import "./List.css";

const List = () => {
  
  const { lists, openListId, isShowCompleted } = useContext(TodosCtx);

  const items = getListItems(lists, openListId, isShowCompleted);

  return (
    <ul className="List">
      {items.map(item => <ListItem key={item.id} item={item} />)}
    </ul>
  )
}

export default List;