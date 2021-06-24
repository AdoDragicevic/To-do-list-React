import { Component } from "react";
import "./Item.css";

class Item extends Component {

    handleDelete = e => {
        const {id, category} = this.props.item;
        this.props.delete(id, category);
    }

    render() {
        return(
            <li className="Item">
                <span 
                    className="Item-txt"
                >
                    ||| {this.props.item.txt} |||
                </span>
                <span
                    className="Item-edit"
                >
                    Edit
                </span>
                <span
                    className="Item-delete"
                    onClick={this.handleDelete}
                >
                    Trash
                </span>
            </li>
        )
    }
}

export default Item;