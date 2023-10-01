import React, { Component } from "react";
import logo from "../assets/JHMI.png";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{height : '50px'}}/>
        <h3 className="title"> Welcome</h3>
      </header>
    );
  }
}
export default Header;