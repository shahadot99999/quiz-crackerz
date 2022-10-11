import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const quizs = useLoaderData().data;
    return (

        <div>
            <p><b>Web development is my heart. When you learn online, it make easy for learning process.</b></p>
            <div className='s-container'>

                <div className='p-container'>
                    {
                        quizs.map(quiz => <Quiz

                            key={quiz.id}
                            quiz={quiz}
                        ></Quiz>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;

