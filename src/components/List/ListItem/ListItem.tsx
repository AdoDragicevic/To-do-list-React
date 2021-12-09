import useToggle from "../../../hooks/useToggle";
import { ListItemProps } from "../../../models/Props";
import { getListItemClassName } from "../../../helpers/helpers";

import EditItem from "./EditItem/EditItem";
import ShowItem from "./ShowItem/ShowItem";


const ListItem = ({ txt, id, isCompleted, items }: ListItemProps) => {

  const [isEditing, toggleEdit] = useToggle(false);
  const [isDeleted, toggleIsDeleted] = useToggle(false);  

  const css = getListItemClassName(isEditing, isCompleted, isDeleted);

  return (
    <li className={css}>
      {isEditing ?
        <EditItem 
          txt={txt}
          id={id} 
          toggleEdit={toggleEdit} 
        /> 
      : 
        <ShowItem 
          txt={txt} 
          id={id} 
          toggleEdit={toggleEdit} 
          nOfItems={items?.length} 
          onDelete={toggleIsDeleted} 
        />
      }
    </li>
  )
}

export default ListItem;