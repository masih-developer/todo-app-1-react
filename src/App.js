import React, { Component } from "react";
import Header from "./components/common/Header/Header";
import TodoList from "./components/layout/TodoList/TodoList";
export default class App extends Component {
    render() {
        return (
            <>
                <Header />
                <TodoList />
            </>
        );
    }
}
