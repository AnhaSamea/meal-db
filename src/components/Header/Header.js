import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (

        <div className='bg-orange-200 border-b-4 border-orange-300 '>
            <nav className=' header no-underline text-orange-900  font-semibold text-xl p-4'>
            <Link to='/home'>Home</Link>
            <Link to='/meals'>Meals</Link>
            <Link to='/categories'>Categories</Link>
            
        </nav>
        </div>


    );
};

export default Header;