import React, { Component } from "react";
import "./EmptyTodoWrapper.css";
import { IoDocumentTextOutline } from "react-icons/io5";

export default class EmptyTodoWrapper extends Component {
    render() {
        return (
            <div className="empty-todos-wrapper">
                <IoDocumentTextOutline />
                <p className="empty-todos-wrapper__description">
                    You have not registered any todos yet Create todos and organize your work items
                </p>
            </div>
        );
    }
}
