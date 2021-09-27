import { PureComponent } from "react";
import "./Item.css";
import "./utilities.css";
import "./animations.css";

class Item extends PureComponent {

    state = {
        isEditing: false,
        inputVal: this.props.item.txt,
        collapseAnimation: false
    };


    handleClick = () => {
        const { id, category } = this.props.item;
        this.props.onClick(id, category);
    };

    delete = () => {
        this.setState( { collapseAnimation: true } );
        const { id, category } = this.props.item;
        setTimeout( () => this.props.delete(id, category), 400);
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
                        className="ToDo-list__btn ToDo-list__btn--update"
                        type="submit"
                        onClick={this.update}>
                        <i className="fas fa-check ToDo-list__icon"></i>
                    </button>
                    <button
                        className="ToDo-list__btn ToDo-list__btn--back"
                        onClick={this.edit}>
                        <i className="fas fa-chevron-right ToDo-list__icon"></i>
                    </button>
                </form>
        )
    };

    renderTxt() {
        return (
            <li className={
                "ToDo-list__item" + 
                (this.props.item.isCompleted ? " ToDo-list__item--completed" : "") +
                (this.state.collapseAnimation ? " a-collapse-left" : "")
                }
            >
                <span
                    className="ToDo-list__txt"
                    onClick={this.handleClick}>
                        {this.props.item.txt}
                </span>
                <span className="ToDo-list__num">
                    {this.props.numOfItems && this.props.numOfItems}
                </span>
                <button
                    className="ToDo-list__btn ToDo-list__btn--edit"
                    onClick={this.edit}
                >
                    <i className="fas fa-pen ToDo-list__icon"></i>
                </button>
                <button
                    className="ToDo-list__btn ToDo-list__btn--delete"
                    onClick={this.delete}
                >
                    <i className="fas fa-times ToDo-list__icon"></i>
                </button>
            </li>
        )
    };


    render() {
        return this.state.isEditing ? this.renderForm() : this.renderTxt()
    };

};


export default Item;