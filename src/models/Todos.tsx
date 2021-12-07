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
  "TOGGLE_COMPLETE",
  "TOGGLE_SHOW_COMPLETED",
  "OPEN_LIST",
  "CLOSE_LIST"
}

export type DispatchAction =
  { type: ActionType.ADD; txt: string } |
  { type: ActionType.DELETE, id: string } |
  { type: ActionType.UPDATE; txt: string; id: string } |
  { type: ActionType.TOGGLE_COMPLETE; id: string } |
  { type: ActionType.TOGGLE_COMPLETE, id: string } |
  { type: ActionType.TOGGLE_SHOW_COMPLETED; } |
  { type: ActionType.OPEN_LIST, id: string } |
  { type: ActionType.CLOSE_LIST; }

export type TodosReducer = (state: Todos, action: DispatchAction) => Todos;