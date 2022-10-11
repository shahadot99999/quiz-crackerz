import React from 'react';

const Option = ({ option }) => {
    const { question, options, } = option;
    return (
        <div>
            <h3>Question: {question.option}</h3>
            <p>{options.option}</p>
        </div>
    );
};

export default Option;