import React from "react";
import logo from "../assets/JHMI.png";

import { LogoutOutlined } from '@ant-design/icons';

const Header = (props) => {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{height : '50px'}}/>
        <h3 className="title"> {props.isLogin ? ("Welcome: " + props.username + " ") : ""}
        {
            props.isLogin ?
              <LogoutOutlined className='logout' onClick={props.handleLogout}/> : null
        }
        </h3>
        
      </header>
    );
}
export default Header;