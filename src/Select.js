import { Component } from "react";
import "./Select.css";

class Select extends Component {

    handleChange = e => {
        e.preventDefault();
        this.props.returnSelectData(e.target.value);
    };

    render() {
        return(
            <select 
                onChange={this.handleChange} 
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
        )
    }
}

export default Select;