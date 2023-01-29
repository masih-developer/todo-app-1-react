import React, { Component } from "react";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";

export default class App extends Component {
    render() {
        return (
            <>
                <Header />
                <AddTodo />
            </>
        );
    }
}
