import { Component } from "react";
import "./Item.css";

class Item extends Component {

    state = {
        isEditing: false,
        inputVal: this.props.item.txt
    };


    handleClick = () => {
        const { id, category } = this.props.item;
        this.props.onClick(id, category);
    };

    delete = () => {
        const { id, category } = this.props.item;
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
        this.setState( { inputVal: e.target.value } );
    };

    update = e => {
        e.preventDefault();
        const { id, category, txt } = this.props.item;
        const { inputVal } = this.state;
        if(inputVal === txt) return;
        this.setState( { isEditing: false } );
        this.props.change(inputVal, id, category);
    };

    complete = () => {
        const { id, category } = this.props.item;
        this.props.complete(id, category);
    };


    renderForm() {
        return (
            
                <form className="ToDo-list__item">
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
                        <i class="far fa-save"></i>
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
            <li className="ToDo-list__item">
                <span
                    className={ this.props.item.isCompleted ? "ToDo-list__txt u-completed" : "ToDo-list__txt" }
                    onClick={this.handleClick}>
                    {this.props.item.txt}
                </span>
                <button
                    className="ToDo-list__btn-edit"
                    onClick={this.edit}
                >
                    <i class="fas fa-pen"></i>
                </button>
                <button
                    className="ToDo-list__btn-delete"
                    onClick={this.delete}>
                    <i class="fas fa-trash-alt"></i>
                </button>
            </li>
        )
    };


    render() {
        return this.state.isEditing ? this.renderForm() : this.renderTxt()
    };

};


export default Item;