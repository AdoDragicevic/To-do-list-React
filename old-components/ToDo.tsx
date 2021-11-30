/*
import { Component } from "react";
import "./ToDo.css";
import Form from "./Form";
import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';

class ToDo extends Component {
    
    state = {
        categories: JSON.parse( window.localStorage.getItem("categories") || "{}"),
        currCategory: null,
        hideCompleted: false
    };


    returnInputVal = txt => {
        this.state.currCategory ? this.addItem(txt) : this.addCategory(txt);
    };

    hideCompleted = () => {
        this.setState(state => (
            { hideCompleted: !state.hideCompleted }
        ));
    };

    handleDelete = () => {
        this.deleteCategory();
    }

    showCategories = () => {
        this.setState( { currCategory: null } );
    };

    saveToLocalStorage() {
        const categoriesStr = JSON.stringify(this.state.categories);
        window.localStorage.setItem("categories", categoriesStr);
    };

    addCategory(txt) {
        const id = uuidv4();
        const ctgs = { ...this.state.categories, [id]: { txt, id, items: [] } };
        this.setState( { categories: ctgs, currCategory: ctgs[id] }, this.saveToLocalStorage );
    };

    addItem(txt) {
        const item = { txt, id: uuidv4(), category: this.state.currCategory.id, isCompleted: false};
        const ctgs = { ...this.state.categories };
        ctgs[this.state.currCategory.id].items.push(item);
        this.setState( { categories: ctgs }, this.saveToLocalStorage );
    };

    deleteCategory = id => {
        const ctgs = {};
        const ctgId = id || this.state.currCategory.id;
        for(let key in this.state.categories) {
            if(key !== ctgId) ctgs[key] = this.state.categories[key];
        }
        this.setState( { categories: ctgs, currCategory: null }, this.saveToLocalStorage );
    };

    deleteItem = (id, category) => {
        const ctgs = { ...this.state.categories };
        ctgs[category].items = ctgs[category].items.filter( item => item.id !== id );
        this.setState( { categories: ctgs }, this.saveToLocalStorage );
    };

    editCategory = (newTxt, id) => {
        const ctgs = { ...this.state.categories };
        ctgs[id].txt = newTxt;
        this.setState( { categories: ctgs }, this.saveToLocalStorage );
    };

    editItem = (newTxt, id, category) => {
        const ctgs = { ...this.state.categories };
        const items = ctgs[category].items;
        for(let item of items) {
            if(item.id === id) {
                item.txt = newTxt;
                break;
            }
        }
        this.setState( { categories: ctgs }, this.saveToLocalStorage );
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
        this.setState( { categories: ctgs }, this.saveToLocalStorage );
    };

    openCategory = id => {
        this.setState(state => (
            { currCategory: state.categories[id] }
        ));
    };


    renderItems() {
        const { hideCompleted, currCategory } = this.state;
        const items = hideCompleted ? currCategory.items.filter(item => !item.isCompleted) : currCategory.items;
        return items.map( item => (
            <Item
                item={item}
                key={item.id}
                delete={this.deleteItem}
                change={this.editItem}
                onClick={this.completeItem}
                isCompleted={item.isCompleted}
            />
        ));
    };

    renderCategories() {
        const { categories } = this.state;
        return Object.keys(categories).map( name => (
            <Item 
                item={categories[name]}
                key={name}
                delete={this.deleteCategory}
                change={this.editCategory}
                onClick={this.openCategory}
                numOfItems={categories[name].items.length}
            />
        ));
    };

    renderOptions() {
        return (
            <div className="ToDo-options">
                <button 
                    className="ToDo-options__btn-completed"
                    onClick={this.hideCompleted}
                > 
                    <i className="fas fa-tasks"></i>
                    <span>
                        { this.state.hideCompleted ? " Show Completed" : " Hide Completed" }
                    </span>
                </button>
                <button
                    className="ToDo-options__btn-delete"
                    onClick={this.handleDelete}
                >
                    <i className="fas fa-trash"></i>
                    <span>Delete Category</span>
                </button>
                <button
                    className="ToDo-form__btn-category"
                    onClick={this.showCategories}
                >
                    
                    <i className="far fa-folder-open"></i>
                    <span>Show Cateogries</span>
                </button>
            </div>
        )
    };


    render() {
        return (
            <div className="ToDo-container">
                
                <h1 className="ToDo-title">
                    { this.state.currCategory ? this.state.currCategory.txt : "Categories" }
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
*/