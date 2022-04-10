import React from "react";
import "./upperHeader.css"


export default class LoginButton extends React.Component{
    render() {
        return(
            <input type="button" value="Login" className="login__btn" />
        )
    }
}