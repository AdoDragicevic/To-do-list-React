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
}

export enum ActionType { 
  "ADD_LIST", 
  "DELETE_LIST", 
  "UPDATE_LIST", 
  "ADD_ITEM", 
  "DELETE_ITEM",
  "UPDATE_ITEM", 
  "COMPLETE_ITEM", 
}

interface ReducerAction {
  type: ActionType;
  id?: string;
  txt?: string;
  isCompleted?: boolean;
}

export type TodosReducer = (state: Todos, action: ReducerAction) => Todos;