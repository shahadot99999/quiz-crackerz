import React from 'react';


const Quiz = ({ quiz }) => {
    const { logo, name } = quiz;
    return (
        <div className='all-container'>
            <div>
                <img src={logo}></img>
            </div>

            <div className='text-container'>
                <h3>{name}</h3>
                <button>Start Practice</button>
            </div>
        </div>
    );
};

export default Quiz;