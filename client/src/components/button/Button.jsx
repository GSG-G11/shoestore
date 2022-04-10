import './Button.css'

const Button = ({text, handleOnClick}) =>{
    return (
        <button type='submit' className='button' onClick={handleOnClick}> {text}</button>

    );
};

export default Button