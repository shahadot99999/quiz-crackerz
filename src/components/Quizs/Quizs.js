import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Quizs = () => {
    const options = useLoaderData().data;
    // console.log(options);
    const { id } = options
    return (
        <div>
            <h2>This is  quiz page.:{id}</h2>
        </div>
    );
};

export default Quizs;

// options.map(option => <Option
//key={option.id}
//option={option}
//></Option>)