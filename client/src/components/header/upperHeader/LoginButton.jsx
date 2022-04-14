import React from "react";
import "./upperHeader.css";
// import {Link} from 'react-router-dom'

export default class LoginButton extends React.Component {
  deleteLocalHandler = () => {
    localStorage.removeItem("loggedIn");
  };

  render() {
    const loggedIn = this.props.isLoggedIn

    return (
      <>
        {!loggedIn ? (
          <a href="/login">
            <input type="button" value="Login" className="login__btn" />
          </a>
        ) : (
          <a href="/" onClick={this.deleteLocalHandler}>
            <input type="button" value="Logout" className="login__btn" />
          </a>
        )}
      </>
    );
  }
}
