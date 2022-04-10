import React from "react";

import Button from "../button/Button";


const LoginForm = () =>{

    // const navigate = useNavigate();

    return (
        <div className="model">
            <form className="log-in">

                <i className='fa-solid fa-xmark icon' ></i>


                <input type="email" id="email" className="email" placeholder="Enter your email" required />

                <input type="password" id="password" className="password" placeholder="Enter your password" readOnly/>

                <Button text = 'log-in'/>

                {/* <Button text='Log In' handleOnClick={() => navigate('/seller')} /> */}

            </form>

            
        </div>
    )
} 

export default LoginForm;
