import { TodosReducer, ActionType, List, Item } from "../models/Todos";

const todosReducer: TodosReducer = (todos, action) => {
  switch(action.type) {
    
    case ActionType.ADD_LIST:
      return {
        openListId: action.listId,
        lists: [ new List(action.txt!), ...todos.lists ]
      }
    
    case ActionType.DELETE_LIST:
      return {
        openListId: null,
        lists: todos.lists.filter(list => list.id !== action.listId)
      }
    
    case ActionType.UPDATE_LIST:
      return {
        openedLisId: todos.openListId,
        lists: todos.lists.map(list => list.id === action.listId ? { ...list, txt: action.txt! } : list)
      }
    
    case ActionType.ADD_ITEM:
      const lists = todos.lists.map(list => {
        if (list.id === action.listId) list.items = [new Item(action.txt!), ...list.items];
        return list;
      });
      return {
        openedListId: todos.openListId,
        lists: ???
      }
    
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