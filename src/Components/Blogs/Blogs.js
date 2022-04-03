import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='grid grid-col-1 md:grid-cols-3 gap-4 questions bg-blue-50 p-4 m-4'>
            <div>
                <h2>What is Context API?</h2>
                <p>Context API allows us to pass data.
                    It makes react application's life easy as there is no need to pass data manually through props.
                    It creates a context object.
                    Every context object will have a Provider component.
                    This component accepts value.
                    It is efficient in nested functionalities. </p>
            </div>
            <div className='answers'>
                <h2>What is Semantic tag?</h2>
                <p>Semantic tags describes their meaning.
                    Example can be header or footer tags, which shows it's meaning on it's name.
                    It makes the code easier to read.
                    Search engines are able to understand better if you use semantic tags.
                    We can say it makes the code consistent.
                </p>
            </div>
            <div className='answers'>
                <h2>Block vs Inline elements</h2>
                <p>Block element starts a new line.
                    It takes the full width.
                    Div, P tags are one of the mostly used block elements.
                    Inline elements don't start new line and it only takes necessary width.
                    a, span are often used inline elements.
                </p>
            </div>
        </div>
    );
};

export default Blogs;