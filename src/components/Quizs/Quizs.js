import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Option from '../Option/Option';

const Quizs = () => {
    const options = useLoaderData().data;
    console.log(options);
    return (
        <div>
            <h2>This is  quiz page. {options.question}</h2>
        </div>
    );
};

export default Quizs;

// options.map(option => <Option
//key={option.id}
//option={option}
//></Option>)