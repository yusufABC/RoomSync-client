import React from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
    const navigate=useNavigate()

    return (
        <div>
            <img className='w-5xl mx-auto mt-20' src={'error.png'} alt="" />

            <div className='mx-auto text-center'>

            <button className='btn bg-amber-500 mt-10  ' onClick={()=>navigate('/')}> Go To Home</button>
            </div>
        </div>
    );
};

export default NotFound;