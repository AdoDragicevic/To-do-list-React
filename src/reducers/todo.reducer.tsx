import { TodosReducer, ActionType, List, Item } from "../models/Todos";

const todosReducer: TodosReducer = (todos, action) => {
  switch(action.type) {
        
    case ActionType.ADD_LIST: {
      if (!action.txt) throw new Error("ADD_LIST requires txt and id");
      const lists = [ new List(action.txt), ...todos.lists ];
      const openListId = lists[0].id;
      return { openListId, lists };
    }

    case ActionType.DELETE_LIST: {
      if (!action.id) throw new Error("DELETE_LIST requires id");
      const lists = todos.lists.filter(l => l.id !== action.id);
      const openListId = null;
      return { openListId, lists };
    }

    case ActionType.UPDATE_LIST: {
      if (!action.id || !action.txt) throw new Error("UPDATE_LIST requires txt and id");
      const lists = todos.lists.map(l => l.id !== action.id ? l : { ...l, txt: action.txt });
      return { ...todos, lists };
    }

    case ActionType.ADD_ITEM: {
      if (!action.txt) throw new Error("ADD_ITEM requires txt");
      const lists = todos.lists.map(l => (
        l.id !== todos.openListId ? l : { ...l, items: [new Item(action.txt!), ...l.items] }
      ));
      return { ...todos, lists };
    }

    case ActionType.DELETE_ITEM: {
      if (!action.id) throw new Error("DELETE_ITEM requires id");
      const lists = todos.lists.map(l => (
        l.id !== todos.openListId ? l : { ...l, items: l.items.filter(i => i.id !== action.id) }
      ));
      return { ...todos, lists };
    }

    case ActionType.UPDATE_ITEM:
      if (!action.txt || !action.id) throw new Error("UPDATE_ITEM requires txt and id");
      const lists = todos.lists.map(l => {
        if (l.id !== todos.openListId) return l;
        const items = l.items.map(i => i.id !== action.id ? i : { ...i, txt: action.txt });
        return { ...l, items };
      });
      return { ...todos, lists };
  
    default:
      return todos;
  }
}

export default todosReducer;