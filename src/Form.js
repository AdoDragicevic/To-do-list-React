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
        this.props.changeTarget(e.target.name);
    };

    render() {
        return (
            <form
                className="ToDo-form"
                onSubmit={this.handleSubmit}
            >
                <div className="ToDo-form__input-container">
                    <input
                        className="ToDo-form__input"
                        type="text"
                        name="txt"
                        value={this.state.txt}
                        placeholder={`New ${this.props.target}`}
                        onChange={this.handleTxtChange}
                    />
                    <button
                        className="ToDo-form__btn-submit" 
                        type="submit"
                        onClick={this.handleSubmit}
                    >
                        <i className="fas fa-plus-square"></i>
                    </button>         
                </div>  
            </form>
        )
    }
}

export default Form;