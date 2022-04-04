import React from 'react';
import useReview from '../hooks/useReview';

const AllReviews = () => {
    const [reviews, setReviews] = useReview()
    return (
        <div className='flex grid grid-cols-3 gap-4 p-4 m-4'>
            {
                reviews.map(review =>
                    <h2 className='bg-blue-200 rounded-full p-4 text-xl font-semibold'>Name: {review.name} <br />
                        Rating: {review.rating} <br />
                        Review: {review.review}</h2>
                )
            }
        </div>
    );
};

export default AllReviews;