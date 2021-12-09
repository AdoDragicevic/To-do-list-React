import useToggle from "../../../hooks/useToggle";
import { ListItemProps } from "../../../models/Props";

import EditItem from "./EditItem/EditItem";
import ShowItem from "./ShowItem/ShowItem";


const ListItem = ({ txt, id, isCompleted, items }: ListItemProps) => {

  const [isEditing, toggleEdit] = useToggle(false);
  const [isDeletedAnimation, toggleIsDeletedAnimation] = useToggle(false);  

  const css = `bord-rad 
              list-item 
              ${!isEditing && isCompleted ? "list-item--completed" : ""}
              ${isDeletedAnimation ? "a-collapse-left" : ""}`;

  return (
    <li className={css}>
      {isEditing ?
        <EditItem 
          txt={txt}
          id={id} 
          toggleEdit={toggleEdit} 
        /> : 
        <ShowItem 
          txt={txt} 
          id={id} 
          toggleEdit={toggleEdit} 
          nOfItems={items?.length} 
          onDelete={toggleIsDeletedAnimation} 
        />
      }
    </li>
  )
}

export default ListItem;