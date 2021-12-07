import useToggle from "../../../hooks/useToggle";
import useInput from "../../../hooks/useInput";
import { ListItemProps } from "../../../models/Props";

import "./ListItem.css";


const ListItem = ({ item }: ListItemProps) => {

  const [isEditing, toggleEditing] = useToggle(false);
  
  //const [val, updateVal, resetVal] = useInput(item.txt);

  /*
  const handleLeftBtnClick = (e: Event) => {
    e.stopPropagation();
    toggleEditing();
    resetVal();
  }
  */

  /*
  const handleRightBtnClick = (e: Event) => {
    if (!isEditing) {
      dispatch({ type: ActionType.DELETE, id: item.id });
    }
    else if (val !== item.txt) {
      dispatch({ type: ActionType.UPDATE, txt: val, id: item.id });
      toggleEditing();
    }
  }
  */

  return (
    <li className="ListItem">
      {isEditing ? 
        <EditItem defaultVal={val} id={item.id} toggleEdit={toggleEditing} /> : 
        <ShowItem txt={val} id={item.id} toggleEdit={toggleEditing} />
      }
    </li>
  )

    /*
    <li className="ListItem">
      <div className="ListItem__txt">
        
        <input 
          className="ListItem__input"
          type="text"  
          onChange={updateVal} 
          disabled={!isEditing} 
          onClick={() => alert("clicked")}
        />
        <span className="ListItem__amount"></span>
      </div>
      <div className="ListItem__btns">
        <button className="ListItem__btn" onClick={handleLeftBtnClick}>
          x
        </button>
        <button className="ListItem__btn" onClick={handleRightBtnClick}>
          y
        </button>
      </div>
    </li>
    
  )
  */
}

export default ListItem;