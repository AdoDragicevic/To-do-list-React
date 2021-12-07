import { List, ListItems } from "../models/Todos";

export const getListItems = (lists: List[], openListId: string | null, isShowCompleted: boolean): ListItems => {
  if (!openListId) return lists;
  const list = lists.find(l => l.id === openListId)!;
  return isShowCompleted ? list.items : list.items.filter(i => !i.isCompleted);
}