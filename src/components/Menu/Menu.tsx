import "./Menu.css";

const Menu = () => {
  return (
    <div className="Menu">
      <button className="ToDoMenu__btn-category">
        <i className="far fa-folder-open"></i>
        <span>Show Cateogries</span>
      </button>
      <button className="TodoMenu__btn-ccompleted">
        <i className="fas fa-tasks"></i>
        <span>
          { //props.showCompleted ? " Show Completed" : " Hide Completed" 
          }
        </span>
      </button>
      <button className="ToDoMenu__btn-delete">
        <i className="fas fa-trash"></i>
        <span>Delete Category</span>
      </button>
    </div>
  )
}

export default Menu;