/*
import { Component } from "react";
import "./Form.css";

class Form extends Component {

    state = { txt: "" };

    
    handleSubmit = e => {
        e.preventDefault();
        if(!this.state.txt) return;
        this.props.returnInputVal(this.state.txt);
        this.setState( { txt: "" } );
    };

    handleTxtChange = e => {
        this.setState( { [e.target.name]: e.target.value } );        
    };


    render() {
        return (
            <form
                className="ToDo-form"
                onSubmit={this.handleSubmit}
                autoComplete="off"
            >
                <div className="ToDo-form__input-container">
                    <input
                        className="ToDo-form__input"
                        type="text"
                        name="txt"
                        value={this.state.txt}
                        placeholder={`New ${this.props.placeholder}`}
                        onChange={this.handleTxtChange}
                    />
                    <button
                        className="ToDo-form__btn" 
                        type="submit"
                        onClick={this.handleSubmit}
                    >
                        <i className="fas fa-plus"></i>
                    </button>         
                </div> 
            </form>
        )
    };

};


export default Form;
*/