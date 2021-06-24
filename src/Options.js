import { Component } from "react";
import "./Options.css";

class Options extends Component {
    render() {
        return (
            <div className="Options">
                <button
                    className="Options-btn-completed"
                    onClick={this.props.hideCompleted}
                >
                    Display Completed
                </button>
                <button
                    className="Options-btn-delete"
                    onClick={this.props.deleteCategory}
                >
                    Delete Category
                </button>
            </div>
        )
    }
};

export default Options;