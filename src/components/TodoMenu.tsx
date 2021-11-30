interface TodoMenuProps {
  onBack: () => void;
  onDelete: () => void;
  onToggleShowCompleted: () => void;
  showCompleted: boolean;
}

const TodoMenu: React.FC<TodoMenuProps> = ({ onBack, onDelete, onToggleShowCompleted, showCompleted }) => {
  return (
    <div className="TodoMenu">
      <button className="TodoMenu__btn-ccompleted">
        <i className="fas fa-tasks"></i>
        <span>
          { showCompleted ? " Show Completed" : " Hide Completed" }
        </span>
      </button>
      <button className="ToDoMenu__btn-delete" onClick={onDelete}>
        <i className="fas fa-trash"></i>
        <span>Delete Category</span>
      </button>
      <button className="ToDoMenu__btn-category" onClick={}>
        <i className="far fa-folder-open"></i>
        <span>Show Cateogries</span>
      </button>
    </div>
  )
}

export default TodoMenu;