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

    returnInputData = (target, txt) => {
        target === "category" ? this.addCategory(txt) : this.addItem(txt);
        if(target === "category") this.setState({adding: "item"});
    };

    addCategory(name) {
        const newCategories = { ...this.state.categories, [name]: [] };
        this.setState( {categories: newCategories, currCategory: name} );
    };

    addItem(txt) {
        if(this.state.currCategory === "All") return;
        const item = { txt, id: uuidv4(), category: this.state.currCategory, isCompleted: false};
        const newCategories = { ...this.state.categories };
        newCategories[this.state.currCategory].push(item);
        this.setState( {categories: newCategories} );
    };

    getCategoryNames = () => {
        const { categories, currCategory } = this.state;
        const categoryNames = [currCategory];
        if(currCategory !== "All") categoryNames.push("All");
        for(let key in categories) {
            if(key !== categoryNames[0]) categoryNames.push(key);
        }
        return categoryNames;
    };

    deleteItem = (id, category) => {
        const ctgs = {...this.state.categories};
        ctgs[category] = ctgs[category].filter( item => item.id !== id);
        this.setState({categories: ctgs});
    };

    updateItem = (id, category, newTxt) => {
        const ctgs = {...this.state.categories};
        for(let i = 0; i < ctgs[category].length; i++) {
            if(ctgs[category][i].id === id) ctgs[category][i].txt = newTxt;
        }
        this.setState({categories: ctgs});
    };

    completeItem = (id, category) => {
        const ctgs = { ...this.state.categories };
        ctgs[category].forEach( item => {
            if(item.id === id) item.isCompleted = !item.isCompleted;
        });
        this.setState({categories: ctgs});
    };

    getItems() {
        const { categories, currCategory, hideCompleted } = this.state;
        const items = currCategory === "All" ? [] : categories[currCategory];
        if(currCategory === "All") {
            for(let key in categories) categories[key].forEach( item => items.push(item) );
        }
        return hideCompleted ? items.filter( item => !item.isCompleted) : items; 
    };

    getCategories() {
        return Object.keys(this.state.categories);
    };

    renderItems(items) {
        return items.map( item => (
            <Item 
                item={item}
                key={item.id}
                delete={this.deleteItem}
                change={this.updateItem}
                complete={this.completeItem}
            />
        ));
    };

    updateCategory() {

    };

    renderCategories(ctgs) {
        return ctgs.map( ctg => (
            <Item 
                item={ctg}
                key={ctg}
                delete={this.deleteCategory}
                change={this.updateCategory}
            />
        ));
    };

    hideCompleted = () => {
        this.setState(state => (
            { hideCompleted: !state.hideCompleted }
        ));
    };

    deleteCategory = () => {
        const { categories, currCategory } = this.state;
        const newCategories = {};
        for(let key in categories) {
            if(key !== currCategory) newCategories[key] = categories[key];
        }
        this.setState({categories: newCategories, currCategory: "All"});
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
                        name="categories"
                        onClick={this.handleBtnClick}
                    >
                        Show Cateogries
                </button>
            </div>
        )
    };

    render() {
        return (
            <div className="ToDo-container">
                
                <h1 className="ToDo-title">
                    { this.state.currCategory === "All" ? "To-Do List" : this.state.currCategory }
                </h1>
                
                <Form
                    returnInputData={this.returnInputData}
                    target={this.state.target}
                />        

                {
                <ul className="ToDo-list">
                    {this.state.target === "categories" ? 
                    this.renderCategories(this.getCategoryNames()) 
                    : this.renderItems(this.getItems())}
                </ul>
                }
                {this.state.target === "item" && this.renderOptions()} 

            </div>
        )
    };

};

export default ToDo;