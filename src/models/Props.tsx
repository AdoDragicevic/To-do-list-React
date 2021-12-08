import { Item } from "./Todos";

export interface ListItemProps {
  txt: string;
  id: string;
  isCompleted?: boolean;
  items?: Item[];
}

export interface EditItemProps {
  txt: string;
  id: string;
  toggleEdit: () => void;
}

export interface ShowItemProps extends EditItemProps {
  nOfItems?: number;
  onDelete: () => void;
}

export interface MenuBtnProps {
  txt: string;
  icon: string;
  onClick: () => void;
}