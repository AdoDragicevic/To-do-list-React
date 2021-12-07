abstract class TodoObj {
  id = Math.random().toString();
  constructor(public txt: string) {};
}

export class List extends TodoObj {
  items: Item[] = [];
}

export class Item extends TodoObj {
  isCompleted = false;
}

export interface Todos {
  lists: List[];
  openListId: null | string;
  isShowCompleted: boolean;
}

export type ListItems = List[] | Item[];

export enum ActionType { 
  "ADD",
  "DELETE", 
  "UPDATE",
  "COMPLETE", 
  "TOGGLE_IS_SHOW_COMPLETED",
  "CLOSE_LIST"
}

export type DispatchAction =
  { type: ActionType.ADD; txt: string } |
  { type: ActionType.DELETE, id: string } |
  { type: ActionType.UPDATE; txt: string; id: string } |
  { type: ActionType.COMPLETE; id: string } |
  { type: ActionType.CLOSE_LIST; } |
  { type: ActionType.TOGGLE_IS_SHOW_COMPLETED; }

export type TodosReducer = (state: Todos, action: DispatchAction) => Todos;