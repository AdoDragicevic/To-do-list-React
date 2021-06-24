import './App.css';
import ToDo from './ToDo';

function App() {
    return (
        <div className="App">
            <ToDo />
        </div>
    );
}

export default App;

/*
<App />

<ToDoList /> // stores categories (& items), currCategory, displayChecked
   
    <h1>{currCategory === "All" ? "To Do List" : ${currCategory.name}}</h1>
    <Input /> // has 2 btns: item/category, creates new object
    <Select /> // returns value of selected option
    <List /> // accepts props={items} and forEach displays item and at the end edit/remove btns
    <Options />
    
    <Item />
        <button>Display Completed</button>
        <button>Edit Category Name</button>
        <button>Delete Category</button>

*/