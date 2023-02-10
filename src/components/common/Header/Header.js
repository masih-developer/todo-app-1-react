import React, { Component } from "react";
import "./Header.css";
import HeaderLogo from "./HeaderLogo/HeaderLogo";

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <HeaderLogo />
                </div>
            </header>
        );
    }
}
