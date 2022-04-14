import React from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  // const navigate = useNavigate();
  state = {
    login: "login",
  };

  localHandler = (boolean) => {
    const { handleLoggedIn } = this.props;
    handleLoggedIn(boolean);
    localStorage.setItem("loggedIn", boolean);
  };

  render() {
    const logged = this.localHandler;
    const localBoolean = localStorage.getItem("loggedIn");
    return (
      <>
        <div className="login__model">
          <form className="login__form">
            <input
              type="email"
              id="email"
              className="email"
              placeholder="Enter your email"
              // onBlur={this.localHandler}
              required
            />

            <input
              type="password"
              id="password"
              className="password"
              placeholder="Enter your password"
            />

            {!localBoolean ? (
              <Link
                onClick={() => {
                  logged(true);
                }}
                to="/seller"
                className="Login__btn"
              >
                LOGIN
              </Link>
            ) : (
              <Link to="/login" className="Login__btn">
                <span
                  onClick={() => {
                    logged(false);
                  }}
                >
                  LOGOUT
                </span>
              </Link>
            )}
          </form>
        </div>
      </>
    );
  }
}

export default LoginForm;
