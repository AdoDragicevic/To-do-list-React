import { Component } from "react";
import "./Form.css";

class Form extends Component {

    state = { txt: "" };

    handleSubmit = e => {
        e.preventDefault();
        if(!this.state.txt) return;
        this.props.returnInputData(this.props.target, this.state.txt);
        this.setState({txt: ""});
    };

    handleTxtChange = e => {
        this.setState( { [e.target.name]: e.target.value } );        
    };

    handleSelect = e => {
        e.preventDefault();
        this.props.returnSelectData(e.target.value);
    };

    handleBtnClick = e => {
        this.setState({target: e.target.name});
    };

    render() {
        return (
            <form
                className="ToDo-form"
                onSubmit={this.handleSubmit}
            >
                <div>
                    <input
                        className="ToDo-form__input"
                        type="text"
                        name="txt"
                        id="txt"
                        value={this.state.txt}
                        placeholder={`New ${this.props.target}`}
                        onChange={this.handleTxtChange}
                    />
                    <input
                        className="ToDo-form__btn-submit" 
                        type="button"
                        value="Add"
                        onClick={this.handleSubmit}
                    />
                    <select
                        className="ToDo-form__select"
                        onChange={this.handleSelect} 
                        value={this.props.options[0]}
                    >
                    {this.props.options.map( option => (
                        <option
                            className="ToDo-form__option"
                            key={option}
                        >
                            {option}
                        </option>
                    ))}
                    </select>
                </div>
                <div className="ToDo-form__btns">
                    <input
                        className="ToDo-form__btn-item" 
                        type="button"
                        name="item"
                        value="Item"
                        onClick={this.handleBtnClick}
                        disabled={this.props.isNewItemDisabled}
                    />
                    <input
                        className="ToDo-form__btn-category" 
                        type="button"
                        name="category"
                        value="Category"
                        onClick={this.handleBtnClick}
                    />
                </div>
            </form>
        )
    }
}

export default Form;