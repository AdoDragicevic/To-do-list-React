import { Component } from "react";
import "./Form.css";

class Form extends Component {

    state = { 
        txt: "", 
        target: this.props.isNewItemDisabled ? "category" : "item" 
    };

    handleSubmit = e => {
        e.preventDefault();
        if(!this.state.txt) return;
        this.props.returnInputData(this.state);
        this.setState({ txt: "" });
    };

    handleChange = e => {
        this.setState( { [e.target.name]: e.target.value } );        
    };

    handleClick = e => {
        this.setState({target: e.target.name});
    };

    render() {
        return (
            <form 
                className="Form"
                onSubmit={this.handleSubmit}
            >
                <input 
                    className="Form-input"
                    type="text"
                    name="txt"
                    id="txt"
                    value={this.state.txt}
                    placeholder={`New ${this.state.target}`}
                    onChange={this.handleChange}
                />
                <div className="Form-btns">
                    <input
                        className="Form-btn-item" 
                        type="button"
                        name="item"
                        value="Item"
                        onClick={this.handleClick}
                        disabled={this.props.isNewItemDisabled}
                    />
                    <input
                        className="Form-btn-category" 
                        type="button"
                        name="category"
                        value="Category"
                        onClick={this.handleClick}
                    />
                    <input
                        className="Form-btn-submit" 
                        type="button"
                        value="Add"
                        onClick={this.handleSubmit}
                    />
                </div>
            </form>
        )
    }
}

export default Form;