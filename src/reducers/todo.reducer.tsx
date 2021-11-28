import { TodoList, TodosReducer, ActionType, TodoItem } from "../models/Todos";

const todosReducer: TodosReducer = (todos, action) => {
  switch(action.type) {
    case ActionType.ADD_LIST:
      return [ new TodoList(action.txt!), ...todos ];
    case ActionType.DELETE_LIST:
      return todos.filter(list => list.id !== action.listId);
    case ActionType.UPDATE_LIST:
      return todos.map(list => list.id === action.listId ? { ...list, txt: action.txt! } : list);
    case ActionType.ADD_ITEM:
      return todos.map(list => {
        if (list.id === action.listId) list.items = [new TodoItem(action.txt!), ...list.items];
        return list;
      });
    case ActionType.DELETE_ITEM:
      return todos.map(list => {
        if (list.id !== action.listId) return list;
        const items = list.items.filter(item => item.id !== action.itemId);
        return { ...list, items };
      });
    case ActionType.UPDATE_ITEM:
      return todos.map(list => {
        if (list.id !== action.listId) return list;
        const items = list.items.map(itm => itm.id === action.itemId ? { ...itm, txt: action.txt! } : itm);
        return { ...list, items };
      });
    default:
      return todos;
  }
}

export default todosReducer;