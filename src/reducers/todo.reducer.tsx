import { TodosReducer, ActionType, List, Item, Todos } from "../models/Todos";

const todosReducer: TodosReducer = (todos, action): Todos => {
  switch(action.type) {

    case ActionType.ADD: {
      let openListId = todos.openListId;
      const added = openListId ? new Item(action.txt!) : new List(action.txt!);
      let lists: List[];
      if (openListId) {
        lists = todos.lists.map(l => l.id !== openListId ? l : { ...l, items: [added as Item, ...l.items] });
      }
      else {
        lists = [added as List, ...todos.lists];
        openListId = added.id;
      }
      return { ...todos, openListId, lists };
    }

    case ActionType.DELETE: {
      let openListId = todos.openListId;
      let lists: List[];
      if (!openListId || (openListId && openListId === action.id)) {
        lists = todos.lists.filter(l => l.id !== action.id);
        openListId = null;
      }
      else {
        lists = todos.lists.map(l => (
          l.id !== openListId ? l : { ...l, items: l.items.filter(i => i.id !== action.id) }
        ));
      }
      return { ...todos, openListId, lists };
    }

    case ActionType.UPDATE: {
      let lists: List[];
      if (todos.openListId) {
        lists = todos.lists.map(l => (
          l.id !== todos.openListId ? l : { ...l, items: l.items.map(i => (
            i.id !== action.id ? i : { ...i, txt: action.txt })
          )}
        ));
      }
      else {
        lists = todos.lists.map(l => l.id !== action.id ? l : { ...l, txt: action.txt });
      }
      return { ...todos, lists };
    }

    case ActionType.TOGGLE_COMPLETE: {
      const lists = todos.lists.map(l => (
        l.id !== todos.openListId ? l : { ...l, items: l.items.map(i => (
          i.id !== action.id ? i : { ...i, isCompleted: !i.isCompleted }
        ))}
      ))
      return { ...todos, lists };
    }

    case ActionType.TOGGLE_SHOW_COMPLETED:
      return { ...todos, isShowCompleted: !todos.isShowCompleted };

    case ActionType.OPEN_LIST: {
      return { ...todos, openListId: action.id };
    }

    case ActionType.CLOSE_LIST:
      return { ...todos, openListId: null };
  
    default:
      return todos;
  }
}

export default todosReducer;