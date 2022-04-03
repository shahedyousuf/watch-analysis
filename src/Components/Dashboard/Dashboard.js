import React from 'react';
import Barchart from '../Charts/Barchart';
import Linechart from '../Charts/Linechart';

const Dashboard = () => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-4 m-4'>
            <Linechart></Linechart>
            <Barchart></Barchart>
        </div>
    );
};

export default Dashboard;