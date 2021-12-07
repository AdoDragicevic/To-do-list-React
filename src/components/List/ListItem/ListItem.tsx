import useToggle from "../../../hooks/useToggle";
import { ListItemProps } from "../../../models/Props";

import EditItem from "./EditItem/EditItem";
import ShowItem from "./ShowItem/ShowItem";

import "./ListItem.css";


const ListItem = ({ item }: ListItemProps) => {

  const [isEditing, toggleEdit] = useToggle(false);

  return (
    <li className="ListItem">
      {isEditing ? 
        <EditItem txt={item.txt} id={item.id} toggleEdit={toggleEdit} /> : 
        <ShowItem txt={item.txt} id={item.id} toggleEdit={toggleEdit} />
      }
    </li>
  )
}

export default ListItem;