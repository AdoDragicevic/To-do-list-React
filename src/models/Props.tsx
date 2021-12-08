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