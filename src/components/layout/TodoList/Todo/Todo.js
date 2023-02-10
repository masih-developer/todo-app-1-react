import React, { Component } from "react";
import "./Todo.css";
import { HiOutlineTrash } from "react-icons/hi";

export default class TodoItem extends Component {
    checkedHandler(todoId, event) {
        this.props.isComplete(todoId, event.target.checked);
    }

    removeHandler(todoId) {
        this.props.removeTodo(todoId);
    }

    render() {
        return (
            <li className={`todo__item ${this.props.isCompleted && "todo__item--completed"}`}>
                <input
                    type="checkbox"
                    id="checkbox"
                    className="tood__item__checkbox"
                    onChange={(e) => this.checkedHandler(this.props.id, e)}
                    checked={this.props.isCompleted}
                />
                <p className="todo__item__content">{this.props.content}</p>
                <button
                    className="todo__item__remove-btn"
                    onClick={() => this.removeHandler(this.props.id)}
                >
                    <HiOutlineTrash />
                </button>
            </li>
        );
    }
}
