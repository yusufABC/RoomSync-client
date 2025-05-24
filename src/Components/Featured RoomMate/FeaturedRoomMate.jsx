import React, { useEffect, useState } from 'react';
import FeaturedCard from './FeaturedCard';

const FeaturedRoomMate = () => {
    const [featured,setFeatured]=useState([])
      useEffect(() => {
    fetch('https://assignment-10-server-sigma.vercel.app/listing-available')
      .then((res) => res.json())
      .then((data) => setFeatured(data));
  }, []);

    return (
 
        <div className="max-w-9xl rounded-2xl mx-auto px-4 py-10 bg-white">
                    <div className='text-3xl font-bold mb-6 text-orange-500 text-center'>Room You Can Check</div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    featured.map((list,index)=><FeaturedCard key={index} list={list}></FeaturedCard>)
                }
            </div>
        </div>
  
    );
};

export default FeaturedRoomMate;
