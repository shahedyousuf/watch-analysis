import React from 'react';
import './Reviews.css'

const Reviews = ({ singleReview }) => {
    const { name, rating, review } = singleReview
    return (
        <div className='p-4'>
            <h2 className='bg-blue-200  border border-gray-300 rounded-full p-4 text-xl font-semibold'>Name: {name} <br />
                Rating: {rating} <br />
                Review: {review}</h2>
        </div>
    );
};

export default Reviews;