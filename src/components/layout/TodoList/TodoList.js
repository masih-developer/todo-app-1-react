import React, { Component } from "react";
import "./TodoList.css";
import { BiPlusCircle } from "react-icons/bi";
import EmptyTodoWrapper from "./EmptyTodoWrapper/EmptyTodoWrapper";
import TodoItem from "./Todo/Todo";

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            todoInput: "",
            filterStatus: "all",
        };

        this.completeTodoHandler = this.completeTodoHandler.bind(this);
        this.removeTodoHandler = this.removeTodoHandler.bind(this);
    }

    inputChangeHandler(event) {
        this.setState({ todoInput: event.target.value });
    }

    addTodoHandler() {
        if (this.state.todoInput.trim() !== "") {
            let newTodo = {
                id: this.state.todoList.length + 1,
                content: this.state.todoInput.trim(),
                isCompleted: false,
            };

            this.setState({ todoList: [...this.state.todoList, newTodo] });
        }
        this.setState({ todoInput: "" });
    }

    completeTodoHandler(todoId, isChecked) {
        let newTodos = [...this.state.todoList];

        newTodos.forEach((todo) => {
            if (todo.id === todoId) {
                todo.isCompleted = isChecked;
            }
        });

        this.setState({ todoList: newTodos });
    }

    removeTodoHandler(todoId) {
        let newTodos = [...this.state.todoList];

        let desiredTodo = newTodos.findIndex((todo) => {
            return todo.id === todoId;
        });

        newTodos.splice(desiredTodo, 1);
        this.setState({ todoList: newTodos });
    }

    showFilteredTodos(event) {
        this.setState({ filterStatus: event.target.value });
    }

    render() {
        return (
            <div className="add-todo">
                <div className="container">
                    <form action="#" onSubmit={(e) => e.preventDefault()}>
                        <div className="add-todo-wrapper">
                            <input
                                type="text"
                                className="add-todo__input"
                                placeholder="Add new Todo"
                                value={this.state.todoInput}
                                onChange={(event) => this.inputChangeHandler(event)}
                            />
                            <button
                                className="add-todo__add-btn"
                                onClick={() => this.addTodoHandler()}
                            >
                                add <BiPlusCircle />
                            </button>
                        </div>
                    </form>
                    <div className="todos-status">
                        <h4 className="todo-status__title">
                            Created Todos <span>{this.state.todoList.length}</span>
                        </h4>
                        <div className="todos-filter-wrapper">
                            <h4 className="todo-status__title">Filter:</h4>
                            <select
                                className="todos-filter"
                                onChange={(e) => this.showFilteredTodos(e)}
                            >
                                <option value="all" className="todos-filter__option" defaultValue>
                                    All
                                </option>
                                <option value="completed" className="todos-filter__option">
                                    Completed
                                </option>
                                <option value="uncompleted" className="todos-filter__option">
                                    un-completed
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="todos-wrapper">
                        {this.state.todoList.length === 0 ? (
                            <EmptyTodoWrapper />
                        ) : (
                            <ul className="todos__list">
                                {this.state.filterStatus === "all" &&
                                    this.state.todoList.map((todo) => (
                                        <TodoItem
                                            {...todo}
                                            key={todo.id}
                                            isComplete={this.completeTodoHandler}
                                            removeTodo={this.removeTodoHandler}
                                        />
                                    ))}

                                {this.state.filterStatus === "completed" &&
                                    this.state.todoList
                                        .filter((todo) => todo.isCompleted === true)
                                        .map((todo) => (
                                            <TodoItem
                                                {...todo}
                                                key={todo.id}
                                                isComplete={this.completeTodoHandler}
                                                removeTodo={this.removeTodoHandler}
                                            />
                                        ))}

                                {this.state.filterStatus === "uncompleted" &&
                                    this.state.todoList
                                        .filter((todo) => todo.isCompleted === false)
                                        .map((todo) => (
                                            <TodoItem
                                                {...todo}
                                                key={todo.id}
                                                isComplete={this.completeTodoHandler}
                                                removeTodo={this.removeTodoHandler}
                                            />
                                        ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
