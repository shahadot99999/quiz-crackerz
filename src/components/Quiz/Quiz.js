import React, { useState } from 'react';


const Quiz = ({ quiz }) => {
    const { logo, name } = quiz;

    const [show, setShow] = useState()
    return (
        <div className='all-container'>
            <div>
                <img src={logo}></img>
            </div>

            <div className='text-container'>
                <h3>{name}</h3>
                {
                    show && <p>what is react?
                        what is react router provider? </p>
                }
                <button onClick={() => setShow(!show)}>Start Practice</button>
            </div>
        </div>
    );
};

export default Quiz;