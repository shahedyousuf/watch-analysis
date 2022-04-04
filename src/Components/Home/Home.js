import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../hooks/useReview';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const [reviews, setReviews] = useReview()
    const navigate = useNavigate()
    return (
        <div>
            <div className='grid grid-col-1 md:grid-cols-2 items-center gap-4'>
                <div className='p-4 m-4'>
                    <h2 className='text-6xl text-blue-500 font-bold'>Looking for suitable watch?</h2><br />
                    <p className='text-6xl text-gray-500 font-bold p-4'>Here it is!</p>
                    <p className='text-3xl font-semibold mt-4 text-gray-500'>Are you looking for a watch on a budget? We are here to help you look for the watch.
                        More screen area and good UI make everything very smooth to use. People from every age
                        can wear it.
                    </p>
                    <br />
                    <button className='bg-blue-500 hover:bg-blue-800 m-4 font-bold rounded p-5 text-xl text-white'>Live Demo</button>
                </div>
                <div>
                    <img className='mx-auto mb-2' src='https://img.freepik.com/free-vector/smart-watch-white-background_1268-98.jpg?w=740&t=st=1649049193~exp=1649049793~hmac=77160fa8b087d605ea23e4ac1c863c891663181cade3e4c20ac48152e550cd33' alt="" />
                </div>
            </div>
            <div>
                <div>
                    <h3 className='text-4xl text-blue-500 font-bold m-6'>Customer reviews</h3>
                    {
                        reviews.map(singleReview => <Reviews key={singleReview.id} singleReview={singleReview}></Reviews>).slice(0, 3)
                    }
                </div>
                <div>
                    <button onClick={() => navigate('/allreviews')} className='bg-blue-500 hover:bg-blue-800 m-6 font-bold rounded-full p-5 text-xl text-white'>See all reviews</button>
                </div>
            </div>
        </div>
    );
};

export default Home;