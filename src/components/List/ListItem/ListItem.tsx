import useToggle from "../../../hooks/useToggle";
import { ListItemProps } from "../../../models/Props";

import EditItem from "./EditItem/EditItem";
import ShowItem from "./ShowItem/ShowItem";

import "./ListItem.css";


const ListItem = ({ txt, id, isCompleted }: ListItemProps) => {

  const [isEditing, toggleEdit] = useToggle(false);

  const css = `ListItem ${isCompleted ? "ListItem--completed" : ""}`;

  return (
    <li className={css}>
      {isEditing ?
        <EditItem txt={txt} id={id} toggleEdit={toggleEdit} /> : 
        <ShowItem txt={txt} id={id} toggleEdit={toggleEdit} />
      }
    </li>
  )
}

export default ListItem;