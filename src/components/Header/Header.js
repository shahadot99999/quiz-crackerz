import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <h3>KLA Education</h3>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/quizs'>Quizs</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
            </nav>

        </div>

    );
};

export default Header;