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

    save = e => {
        e.preventDefault();
        const { id, category } = this.props.item;
        const { inputVal } = this.state;
        if(inputVal === this.props.item.txt) return;
        this.setState({isEditing: false});
        this.props.change(id, category, inputVal);
    };

    renderForm() {
        return (
            <form className="Item-form">
                <input
                    className="Item-input"
                    type="text"
                    value={this.state.inputVal}
                    onChange={this.change} 
                />
                <button
                    className="Item-btn-save"
                    type="submit"
                    onClick={this.save}>
                    Save
                </button>
                <button
                    className="Item-btn-delete"
                    onClick={this.edit}>
                    Exit
                </button>
            </form>
        )
    };

    renderTxt() {
        return (
            <span>
                <span className="Item-txt">
                    {this.props.item.txt}
                </span>
                <button
                    className="Item-btn-edit"
                    onClick={this.edit}
                >
                    Edit
                </button>
                <button
                    className="Item-btn-delete"
                    onClick={this.delete}>
                    Delete
                </button>
            </span>
        )
    };

    render() {
        return(
            <li className="Item">
                { this.state.isEditing ? this.renderForm() : this.renderTxt() }
            </li>
        )
    }
}

export default Item;