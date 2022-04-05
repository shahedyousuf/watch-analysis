import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    let navigate = useNavigate()
    return (
        <div>
            <div>
                <button onClick={() => navigate(-1)} className='bg-blue-300 p-2 rounded items-start mt-4 mr-20'>Back</button>
            </div>
            <div className='grid grid-cols-2 justify-items-center items-center'>
                <h2 className='text-red-400 text-6xl font-bold'>Oopps!</h2>
                <img src="https://img.freepik.com/free-vector/glitch-error-404-page-background_23-2148090004.jpg?t=st=1649116930~exp=1649117530~hmac=90f1f276075ac08ed833c9699192656fb6e1de2c87c5a793ec3cd8f1c829accf&w=740" alt="errorImg" />
            </div>
        </div>
    );
};

export default NotFound;