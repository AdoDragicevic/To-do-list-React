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
                className="Select"
                value={this.props.options[0]}
            >
                {this.props.options.map( option => (
                    <option
                        className="Select-option"
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