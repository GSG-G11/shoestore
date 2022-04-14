
import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';

import img from './Screenshot from 2022-04-14 03-45-07.png'



const NotFound = () => { 
    return (
        <div className='container__notFound'>
            <div className='mid'>
                <h2 className='main-text'> we couldn't find the page you're looking for.</h2>
                <br />
                <p className='text'>Go back to <Link to="/">Home Page</Link></p>
            </div>
            <div>
                <img className='imgerror' src={img} alt="404" />

            </div>

        </div>
    )
}
export default NotFound;