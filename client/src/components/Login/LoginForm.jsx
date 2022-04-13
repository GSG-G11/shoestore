import React from "react";
// import "./LoginForm.css";


class LoginForm extends React.Component {
  // const navigate = useNavigate();
  state = {
    nameUser: "",
    isLoggedIn: false,
  };

  getNameHandler = (event) => {
    const userValue = event.target.value;
    this.setState({ nameUser: userValue, isLoggedIn: true });
    localStorage.setItem(this.state.nameUser, this.state.isLoggedIn);
  };

  render() {
    return (
      <>
        
        <div className="model">
          <form className="log-in">
            <i className="fa-solid fa-xmark icon"></i>

            <input
              type="email"
              id="email"
              className="email"
              placeholder="Enter your email"
              onBlur={this.getNameHandler}
            />

            <input
              type="password"
              id="password"
              className="password"
              placeholder="Enter your password"
            />

            <a
              className="Login__btn"
              onClick={this.getNameHandler}
              href="/seller"
            >
              login
            </a>
          </form>
        </div>
      </>
    );
  }
}

export default LoginForm;
