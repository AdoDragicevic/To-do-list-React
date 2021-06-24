import { Component } from "react";
import "./ToDo.css";
import Form from "./Form";
import Select from "./Select";
import Item from "./Item";
import Options from "./Options";
import { v4 as uuidv4 } from 'uuid';

class ToDo extends Component {
    
    state = {
        categories: {},
        currCategory: "All",
        hideCompleted: false
    };

    returnInputData = data => {
        data.target === "category" ? this.addCategory(data.txt) : this.addItem(data.txt);
    };

    addCategory(name) {
        const newCategories = { ...this.state.categories, [name]: [] };
        this.setState( {categories: newCategories, currCategory: name} );
        console.log(this.state);
    };

    addItem(txt) {
        const item = { txt, id: uuidv4(), category: this.state.currCategory, isCompleted: false};
        const newCategories = {...this.state.categories };
        newCategories[this.state.currCategory].push(item);
        this.setState({categories: newCategories});
    };

    getCategoryList = () => {
        const { categories, currCategory } = this.state;
        const categoryNames = [currCategory];
        if(currCategory !== "All") categoryNames.push("All");
        for(let key in categories) {
            if(key !== categoryNames[0]) categoryNames.push(key);
        }
        return categoryNames;
    };

    returnSelectData = selectedOption => {
        this.setState({currCategory: selectedOption});
        if(selectedOption === "All") this.setState({isNewItemDisabled: true});
    };

    deleteItem = (id, category) => {
        const ctgs = {...this.state.categories};
        ctgs[category] = ctgs[category].filter( item => item.id !== id);
        this.setState({categories: ctgs});
    };

    listItems() {
        const { categories, currCategory } = this.state;
        let items = currCategory === "All" ? [] : categories[currCategory];
        if(currCategory === "All") {
            for(let key in categories) categories[key].forEach( item => items.push(item) );
        }
        return items.map( item => (
            <Item 
                item={item}
                key={item.id}
                delete={this.deleteItem}
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

    render() {
        const noCategories = Object.keys(this.state.categories).length ? false : true;
        return (
            <div className="ToDo">
                
                <h1 className="ToDo-title">
                    { this.state.currCategory === "All" ? "To-Do List" : this.state.currCategory }
                </h1>
                
                <Form
                    returnInputData={this.returnInputData}
                    isNewItemDisabled={noCategories} 
                />
                
                <Select
                    options={this.getCategoryList()} 
                    returnSelectData={this.returnSelectData}
                />
                
                <ul className="ToDo-list">
                    { this.listItems() }
                </ul>
                
                {this.state.currCategory !== "All" &&  
                 <Options
                    className="ToDo-options"
                    hideCompleted={this.hideCompleted}
                    deleteCategory={this.deleteCategory} 
                 /> 
                }

            </div>
        )
    };

};

export default ToDo;