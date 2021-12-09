import { List, ListItems } from "../models/Todos";

export const getListItems = (lists: List[], openListId: string | null, isShowCompleted: boolean): ListItems => {
  if (!openListId) return lists;
  const list = lists.find(l => l.id === openListId)!;
  return isShowCompleted ? list.items : list.items.filter(i => !i.isCompleted);
}

export const getListItemClassName = (isEditing: boolean, isCompleted: boolean | undefined, isDeleted: boolean) => {
  let css = "list-item bord-rad";
  if (isCompleted && !isEditing) css += " list-item--completed";
  if (isDeleted) css += isCompleted ? " a-collapse-left--completed" : " a-collapse-left";
  return css;
}