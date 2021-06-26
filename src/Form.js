import { Component } from "react";
import "./Form.css";

class Form extends Component {

    state = { txt: "", target: "item" };

    handleSubmit = e => {
        e.preventDefault();
        const { txt } = this.state;
        if(!txt) return;
        const target = this.props.isNewItemDisabled || this.state.target === "category" ? "category" : "item";
        this.props.returnInputData(target, txt);
        this.setState({txt: "", target: "item"});
    };

    handleTxtChange = e => {
        this.setState( { [e.target.name]: e.target.value } );        
    };

    handleClick = e => {
        this.setState({target: e.target.name});
    };

    handleSelect = e => {
        e.preventDefault();
        this.props.returnSelectData(e.target.value);
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
                        placeholder={
                            `New ${this.props.isNewItemDisabled || this.state.target === "category" ? "category" : "item"}`
                        }
                        onChange={this.handleTxtChange}
                    />
                    <input
                        className="ToDo-form__btn-submit" 
                        type="button"
                        value="Add"
                        onClick={this.handleSubmit}
                    />
                    <select 
                        onChange={this.handleSelect} 
                        className="ToDo-select"
                        value={this.props.options[0]}
                    >
                        {this.props.options.map( option => (
                            <option
                                className="ToDo-select__option"
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
                        onClick={this.handleClick}
                        disabled={this.props.isNewItemDisabled}
                    />
                    <input
                        className="ToDo-form__btn-category" 
                        type="button"
                        name="category"
                        value="Category"
                        onClick={this.handleClick}
                    />
                    
                </div>
            </form>
        )
    }
}

export default Form;