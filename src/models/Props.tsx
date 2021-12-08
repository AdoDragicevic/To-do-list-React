//import { Item, List } from "./Todos";

/*
export interface ListItemProps {
  item: Item | List;
}
*/

export interface ListItemProps {
  txt: string;
  id: string;
  isCompleted?: boolean;
}

export interface ItemProps {
  txt: string;
  id: string;
  toggleEdit: () => void;
}

export interface MenuBtnProps {
  txt: string;
  icon: string;
  onClick: () => void;
}