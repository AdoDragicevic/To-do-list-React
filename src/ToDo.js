import { Component } from "react";
import "./ToDo.css";
import Form from "./Form";
import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';

class ToDo extends Component {
    
    state = {
        categories: {},
        currCategory: null,
        hideCompleted: false
    };


    returnInputVal = txt => {
        if(this.state.currCategory === "All items") return;
        this.state.currCategory ? this.addItem(txt) : this.addCategory(txt);
    };

    hideCompleted = () => {
        this.setState(state => (
            { hideCompleted: !state.hideCompleted }
        ));
    };

    showCategories = () => {
        this.setState({currCategory: null});
    };


    addCategory(name) {
        const id = uuidv4();
        const ctgs = {...this.state.categories, [id]: { name, id, items: [] } };
        this.setState( {categories: ctgs, currCategory: ctgs[id]} );
    };

    addItem(txt) {
        const item = { txt, id: uuidv4(), category: this.state.currCategory.id, isCompleted: false};
        const ctgs = { ...this.state.categories };
        ctgs[this.state.currCategory.id].items.push(item);
        this.setState({categories: ctgs});
    };

    deleteCategory = id => {
        const ctgs = {};
        for(let key in this.state.categories) {
            if(key !== id) ctgs[key] = this.state.categories[key];
        }
        this.setState({categories: ctgs, currCategory: null});
    };

    deleteItem = (id, category) => {
        const ctgs = {...this.state.categories};
        ctgs[category].items = ctgs[category].items.filter( item => item.id !== id);
        this.setState({categories: ctgs});
    };

    editCategory = (id, newName) => {
        const ctgs = {...this.state.categories};
        ctgs[id].name = newName;
        this.setState({categories: ctgs});
    };

    editItem = (id, category, newTxt) => {
        const ctgs = {...this.state.categories};
        const items = ctgs[category].items;
        for(let item of items) {
            if(item.id === id) {
                item.txt = newTxt;
                break;
            }
        }
        this.setState({categories: ctgs});
    };

    completeItem = (id, category) => {
        const ctgs = { ...this.state.categories };
        const items = ctgs[category].items;
        for(let item of items) {
            if(item.id === id) {
                item.isCompleted = !item.isCompleted;
                break;
            }
        }
        this.setState({categories: ctgs});
    };

    openCategory = id => {
        const ctg = this.state.categories[id];
        this.setState({currCategory: ctg});
    };

    renderItems() {
        return this.state.currCategory.items.map( item => {
            <Item 
                item={item}
                key={item.id}
                delete={this.deleteItem}
                change={this.editItem}
                onClick={this.completeItem}
            />
        });
    };

    renderCategories() {
        const ctgs = [];
        const { categories } = this.state;
        for(let key in categories) {
            ctgs.push(
                <Item 
                    item={categories[key]}
                    key={key}
                    delete={this.deleteCategory}
                    change={this.editCategory}
                    onClick={this.openCategory}
                />
            )
        }
        return ctgs;
    };











    renderOptions() {
        return (
            <div className="ToDo-options">
                <button 
                    className="ToDo-options__btn-completed"
                    onClick={this.hideCompleted}
                >
                    { this.state.hideCompleted ? "Show Completed" : "Hide Completed" }
                </button>
                {
                this.currCategory !== "All items" &&
                    <button
                        className="ToDo-options__btn-delete"
                        onClick={this.deleteCategory}
                    >
                        Delete Category
                    </button>
                }
                <button
                        className="ToDo-form__btn-category"
                        onClick={this.showCategories}
                    >
                        Open Cateogries
                </button>
            </div>
        )
    };

    render() {
        return (
            <div className="ToDo-container">
                
                <h1 className="ToDo-title">
                    { this.state.currCategory ? this.state.currCategory.name : "To-Do List" }
                    { 
                        //this.state.currCategory ||  "To-Do List" 
                    }
                </h1>
                
                <Form
                    placeholder={this.state.currCategory ? "item" : "category"} 
                    returnInputVal={this.returnInputVal} 
                />        

                <ul className="ToDo-list">
                    {this.state.currCategory ? this.renderItems() : this.renderCategories()}
                </ul>

                {this.state.currCategory && this.renderOptions()} 

            </div>
        )
    };

};

export default ToDo;