import { Component } from "react";
import "./Item.css";

class Item extends Component {

    state = {
        isEditing: false,
        inputVal: this.props.item.txt
    };

    delete = e => {
        const {id, category} = this.props.item;
        this.props.delete(id, category);
    };

    edit = e => {
        e.preventDefault();
        this.setState(state => (
            {
                isEditing: !state.isEditing,
                inputVal: state.isEditing ? state.inputVal : this.props.item.txt
            }
        ));
    };

    change = e => {
        e.preventDefault();
        this.setState({inputVal: e.target.value});
    };

    update = e => {
        e.preventDefault();
        const { id, category } = this.props.item;
        const { inputVal } = this.state;
        if(inputVal === this.props.item.txt) return;
        this.setState({isEditing: false});
        this.props.change(id, category, inputVal);
    };

    complete = e => {
        const { id, category } = this.props.item;
        this.props.complete(id, category);
    };

    renderForm() {
        return (
            <form className="ToDo-list__form">
                <input
                    className="ToDo-list__input"
                    type="text"
                    value={this.state.inputVal}
                    onChange={this.change} 
                />
                <button
                    className="ToDo-list__btn-update"
                    type="submit"
                    onClick={this.update}>
                    Save
                </button>
                <button
                    className="ToDo-list__btn-edit"
                    onClick={this.edit}>
                    Exit
                </button>
            </form>
        )
    };

    renderTxt() {
        return (
            <span>
                <span 
                    className={ this.props.item.isCompleted ? "ToDo-list__txt--completed" : "ToDo-list__txt" }
                    onClick={this.props.onClick}>
                    {this.props.item.txt}
                </span>
                <button
                    className="ToDo-list__btn-edit"
                    onClick={this.edit}
                >
                    Edit
                </button>
                <button
                    className="ToDo-list__btn-delete"
                    onClick={this.delete}>
                    Delete
                </button>
            </span>
        )
    };

    render() {
        return(
            <li className="ToDo-list__item">
                { 
                this.state.isEditing ? this.renderForm() : this.renderTxt() 
            }
            </li>
        )
    }
}

export default Item;