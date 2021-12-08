import { Item } from "./Todos";

export interface ListItemProps {
  txt: string;
  id: string;
  isCompleted?: boolean;
  items?: Item[];
}

export interface ItemProps {
  txt: string;
  id: string;
  nOfItems?: number;
  toggleEdit: () => void;
}

export interface MenuBtnProps {
  txt: string;
  icon: string;
  onClick: () => void;
}