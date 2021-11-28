class TodoObj {
  id = Math.random().toString();
  constructor(public txt: string) {};
}

export class TodoList extends TodoObj {
  items: TodoItem[] = [];
}

export class TodoItem extends TodoObj {
  isCompleted = false;
}

export type Todos = TodoList[];

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
  listId?: string;
  itemId?: string;
  txt?: string;
  isCompleted?: boolean;
}

export type TodosReducer = (state: Todos, action: ReducerAction) => Todos;